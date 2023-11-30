export default function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="login-wrapper p-3">
                        <div className="text-center">
                            <img src="path_to_logo/logo.png" alt="Logo" className="mb-4" />
                            <h2 className="mb-4">LeasePlan Identity</h2>
                            <form>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" placeholder="Your Username" />
                                </div>
                                <button type="submit" className="btn btn-default">Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
