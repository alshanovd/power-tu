import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../Components/InputBox";
// import { VALIDATION_REGEX } from "../Constants";
// import { login } from "../api/user";
// import CryptoJS from "crypto-js";
// import CryptoJS from "crypto-js";
// import Loading from "../components/Loading";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    // let userId = localStorage.getItem("userId");
    // if (userId != null) {
    //   navigate("/dashboard");
    // }
  }, []);

  //#region states initialization
  // let [email, setEmail] = useState("");
  // const [emailErr, setEmailErr] = useState("");
  // let [password, setPassword] = useState("");
  // const [passwordErr, setPasswordErr] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [credentialsErr, setCredentialsErr] = useState(false);
  const [loader, setLoader] = useState(false);
  //#endregion

  // //#region decrypting email and password
  // useEffect(() => {
  //   let enEmail = localStorage.getItem("email");
  //   let enPassword = localStorage.getItem("password");
  //   if (enEmail && enPassword != null) {
  //     var emailBytes = CryptoJS.AES.decrypt(enEmail, "132465798");
  //     var originalEmail = emailBytes.toString(CryptoJS.enc.Utf8);
  //     var passwordBytes = CryptoJS.AES.decrypt(enPassword, "132465798");
  //     var originalPassword = passwordBytes.toString(CryptoJS.enc.Utf8);
  //     setEmail((email = originalEmail));
  //     debugger;
  //     setPassword((password = originalPassword));
  //     debugger;
  //     Login();
  //   }
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 5000);
  // }, []); //#endregion

  // //#region login api function
  // const Login = () => {
  //   debugger;
  //   setIsLoading(true);
  //   if (email === "" || email === null) {
  //     setEmailErr("Email is required");
  //     setIsLoading(false);
  //   } else if (password === "" || password === null) {
  //     setPasswordErr("Password is required");
  //     setIsLoading(false);
  //   } else if (emailErr === "" && passwordErr === "") {
  //     debugger;
  //     let loginObject = {
  //       email: email,
  //       password: password,
  //     };

  //     login(loginObject)
  //       .then(({ data }) => {
  //         if (data.success) {
  //           var encryptedEmail = CryptoJS.AES.encrypt(
  //             email,
  //             "132465798"
  //           ).toString();
  //           var encryptedPassword = CryptoJS.AES.encrypt(
  //             password,
  //             "132465798"
  //           ).toString();
  //           localStorage.setItem("userId", data.result.user.id);
  //           localStorage.setItem("user_id", data.result.user.user_id);
  //           localStorage.setItem("JWTtoken", data.result.token);
  //           localStorage.setItem("email", encryptedEmail);
  //           localStorage.setItem("password", encryptedPassword);
  //           navigate("/dashboard");
  //         } else {
  //           if (data.status === 98 && data.message == "Invalid credentials.") {
  //             setCredentialsErr(true);
  //           }
  //         }
  //         setIsLoading(false);
  //       })
  //       .catch(() => {
  //         setIsLoading(false);
  //       });
  //   }
  // }; //#endregion

  // //#region states declaration and vaidation onChange event function
  // const handleInputChange = (e) => {
  //   if (e.currentTarget.name === "Email") {
  //     setEmail(e.currentTarget.value);
  //     setCredentialsErr("");
  //     if (!VALIDATION_REGEX.EMAIL_REGEX.test(e.currentTarget.value)) {
  //       setEmailErr("Enter Valid Email");
  //     } else {
  //       setEmailErr("");
  //     }
  //   } else if (e.currentTarget.name === "Password") {
  //     setPassword(e.currentTarget.value);
  //     setPasswordErr("");
  //     setCredentialsErr("");
  //   }
  // }; //#endregion
  return (
    <div className="authentication__container">
      {loader ? (
        // <Loading />
        <div>fhksd</div>
      ) : (
        <div className="authentication__container__overlay">
          <div className="authentication__container__overlay__form">
            <div className="authentication__container__overlay__form__header">
              <div className="authentication__container__overlay__form__header__heading">
                Power TU Sign In
              </div>
            </div>
            <div className="authentication__container__overlay__form__content">
              <InputBox
                type="email"
                placeholder="Email"
                name="Email"
                // error={emailErr}
                // onChange={(e) => {
                //   handleInputChange(e);
                // }}
                // onKeyDown={(e) => {
                //   if (e.code == "Enter") {
                //     Login();
                //   }
                // }}
                // value={email}
                autoFocus
              />
              <InputBox
                type="password"
                placeholder="Password"
                name="Password"
                // error={passwordErr}
                // onChange={(e) => {
                //   handleInputChange(e);
                // }}
                // onKeyDown={(e) => {
                //   if (e.code == "Enter") {
                //     Login();
                //   }
                // }}
                // value={password}
              />
              {/* <div style={{ color: "red" }}>
                {credentialsErr ? "Invalid Credentials" : ""}
              </div> */}
              {/* <Link
                to="/forgot_password"
                className="authentication__container__overlay__form__forgotpass"
              >
                Forgot Password?
              </Link> */}
              <button
                className="authentication__container__overlay__form__btn"
                // onClick={() => {
                //   Login();
                // }}
              >
                login
                {/* {isLoading ? "Loading..." : "Login"} */}
              </button>
              <div className="authentication__container__overlay__form__toSignup">
                Don't have an account?{" "}
                <Link to="/sign_up" style={{ textDecoration: "none" }}>
                  {" "}
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
