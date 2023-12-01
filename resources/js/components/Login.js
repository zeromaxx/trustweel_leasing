import LogoImage from "../../../public/img/LPALDlogoheader.webp";
export default function Login() {
    return (
        <section>
            <div className="col-3">
                <div className="login-wrapper p-3">
                    <div className="text-center">
                        <img src={LogoImage} alt="Logo" className="mb-4 w-100" />
                        <h2 className="mb-4">Login</h2>
                        <form>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" placeholder="Your Username" />
                            </div>
                            <div className="form-group mb-3">
                                <input type="password" className="form-control" placeholder="Your Password" />
                            </div>
                            <button type="submit" className="btn btn-default">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
