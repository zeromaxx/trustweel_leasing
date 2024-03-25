<?php

namespace App\Http\Controllers\api;

use App\Models\Car;
use App\Models\User;
use App\Models\Order;
use App\Models\Contact;
use App\Models\Favourite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AppController extends Controller
{
    public function index()
    {
        $userId = session('user_id');
        $cars = Car::all();
        $favourites = Favourite::where('user_id', $userId)->pluck('product_id')->toArray();

        foreach ($cars as $car) {
            $car->isFavorited = in_array($car->id, $favourites);
        }

        return response()->json($cars);
    }

    public function orders()
    {
        $userId = session('user_id');
        $orders = Order::with("product")->where('user_id', $userId)->get();

        return response()->json($orders);
    }


    public function userFavourite()
    {
        $userId = session('user_id');
        $favourites = Favourite::with('product')->where('user_id', $userId)->get();
        return response()->json($favourites);
    }
    public function details($id)
    {
        $car = Car::where('id', $id)->first();
        return response()->json($car);
    }
    public function saveOrder(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'phone' => 'required|string|max:255',
                'address' => 'required|string|max:255',
                'payment_type' => 'required|string|max:255',
                'product_id' => [
                    'required',
                    function ($attribute, $value, $fail) use ($request) {
                        $userId = $request->session()->get('user_id');

                        $existingOrder = Order::where('user_id', $userId)
                            ->where('product_id', $value)
                            ->exists();
                        if ($existingOrder) {
                            $fail('You have already ordered this product.');
                        }
                    },
                ],
            ]);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->validator->errors()->first()], 422);
        }

        $userId = session('user_id');

        $order = new Order();
        $order->user_id = $userId;
        $order->name = $validatedData['name'];
        $order->phone = $validatedData['phone'];
        $order->address = $validatedData['address'];
        $order->payment_type = $validatedData['payment_type'];
        $order->product_id = $request->product_id;
        $order->save();

        return response()->json(['message' => 'Order saved successfully'], 200);
    }

    public function createCar(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'year' => 'required|string|max:255',
                'gearbox' => 'required|string|max:255',
                'fuel' => 'required|string|max:255',
                'space' => 'required|string|max:255',
                'price' => 'required|numeric',
                'stock' => 'required|integer',
                'image' => 'required',
            ]);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->validator->errors()->first()], 422);
        }

        // Handle file uploading
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
            $validatedData['image'] = 'images/' . $imageName;
        }

        $car = Car::create($validatedData);
        return response()->json($car, 201);
    }
    public function updateCar(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
        ]);

        $car = Car::find($id);
        if (!$car) {
            return response()->json(['message' => 'Car not found'], 404);
        }

        $car->name = $validated['name'];
        $car->price = $validated['price'];
        $car->stock = $validated['stock'];

        $car->save();

        return response()->json($car, 200);
    }

    public function deleteCar($id)
    {

        $car = Car::find($id);
        if (!$car) {
            return response()->json(['message' => 'Car not found'], 404);
        }

        $car->delete();

        return response()->json(['message' => 'Car deleted successfully'], 200);
    }

    public function favouriteCar($id)
    {
        $userId = session('user_id');
        $product = Car::findOrFail($id);
        if (auth()->user()->hasFavourited($product)) {
            auth()->user()->removeFavourite($product);
            return response()->json(['message' => 'Removed from favourites.']);
        }
        auth()->user()->addFavourite($product, $userId);
        return response()->json(['message' => 'Added to favourites!']);
    }

    public function contact(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()], 422);
        }

        $contact = new Contact();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->subject = $request->subject;
        $contact->message = $request->message;
        $contact->save();
        return response()->json(['success' => true, 'message' => 'Thank you for your message. We will contact you as soon as possible!']);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|max:255|unique:users',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $user = User::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            return response()->json([
                'success' => true,
                'message' => 'User successfully registered',
            ]);
        } catch (\Exception $e) {

            return response()->json([
                'success' => false,
                'message' => 'Registration failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {

            $token = JWTAuth::fromUser(Auth::user());

            Session::put('user_id', Auth::id());

            $request->session()->regenerate();

            $role = Auth::user()->role;

            return response()->json([
                'success' => true,
                'message' => 'User successfully logged in',
                'token' => $token,
                'role' => $role,
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'The provided credentials do not match our records.',
        ], 401);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json([
            'success' => true,
            'message' => 'User successfully logged out',
        ]);
    }
}
