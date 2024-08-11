/* eslint-disable jsx-a11y/no-autofocus */

import { Link } from "@nextui-org/link";

import InputBox from "@/components/InputBox";

export default function LoginPage() {
  return (
    <div className="authentication__container__overlay">
      <div className="authentication__container__overlay__form">
        <div className="authentication__container__overlay__form__header">
          <div className="authentication__container__overlay__form__header__heading">
            Power TU Sign In
          </div>
        </div>
        <div className="authentication__container__overlay__form__content">
          <InputBox
            autoFocus
            error={""}
            id={""}
            list={""}
            name="Email"
            placeholder="Email"
            type="email"
          />
          <InputBox
            autoFocus={true}
            error={""}
            id={""}
            list={""}
            name="Password"
            placeholder="Password"
            type="password"
          />
          <button className="authentication__container__overlay__form__btn">
            Login
          </button>
          <div className="authentication__container__overlay__form__toSignup">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" style={{ textDecoration: "none" }}>
              {" "}
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
