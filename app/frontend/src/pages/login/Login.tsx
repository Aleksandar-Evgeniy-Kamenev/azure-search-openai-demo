// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import styles from "./Login.module.css";

import { useNavigate } from "react-router-dom";
//import useAuth from "../../helpers/useAuth";

import { useEffect, useRef, useState } from "react";
import md5 from "md5";

const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const inputUsernameRef = useRef<HTMLInputElement>(null);
    //const inputUsernameRef = useRef(null);
    //const inputPasswordRef = useRef(null);
    const password = "c0fa38e5fb44de78c17b1cb42d42c2db";
    const [message, setMessage] = useState("");

    let navigate = useNavigate();

    console.log(sessionStorage.getItem("user"));
    useEffect(() => {
        if (sessionStorage.getItem("user") != null) {
            let path = `/chat`;
            navigate(path);
        }
    });

    const handleLogin = () => {
        let path = `/chat`;
        if (
            inputPasswordRef != null &&
            inputPasswordRef.current != null &&
            inputPasswordRef.current.value != "" &&
            inputUsernameRef?.current?.value != "" &&
            md5(inputPasswordRef.current.value) == password
        ) {
            sessionStorage.setItem("user", "123456");
            navigate(path);
        } else {
            setMessage("Invalid Credentials.");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-4 col-md-4 col-lg-4 col-sm-8 mt-3">
                    <div className={styles.loginbody}>
                        <div className={styles.logintitle}>Login</div>
                        <form>
                            <div className="form-outline mb-4">
                                <label className="form-label">Email address</label>
                                <input type="email" ref={inputUsernameRef} id="form2Example1" className="form-control" />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label">Password</label>
                                <input type="password" id="form2Example2" ref={inputPasswordRef} className="form-control" />
                            </div>

                            <div className="row mb-4">
                                <div className="col ">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                                        <label className="form-check-label"> Remember me </label>
                                    </div>
                                </div>
                            </div>

                            <button type="button" onClick={handleLogin} className="btn btn-primary btn-block mb-4">
                                Sign in
                            </button>

                            <div className="text-center text-danger">
                                <p>
                                    {/* Not a member? <a href="#!">Register</a> */}
                                    {message}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
