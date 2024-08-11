/* eslint-disable jsx-a11y/no-autofocus */
import { Link } from "@nextui-org/link";

import InputBox from "@/components/InputBox";

export default function SignUpPage() {
  return (
    <div className="authentication__container__overlay">
      <div className="authentication__container__overlay__form">
        <div className="authentication__container__overlay__form__header">
          <div className="authentication__container__overlay__form__header__heading">
            Power TU Sign Up
          </div>
        </div>
        <div className="authentication__container__overlay__form__content">
          <InputBox
            autoFocus={true}
            error=""
            id=""
            list=""
            name="Email"
            placeholder="Email"
            type="email"
          />
          <InputBox
            autoFocus={false}
            error=""
            id=""
            list=""
            name="Password"
            placeholder="Password"
            type="password"
          />
          <InputBox
            autoFocus={false}
            error=""
            id="exampleId"
            list=""
            name="exampleName"
            placeholder="Enter text"
            type="text"
          />
          <button className="authentication__container__overlay__form__btn">
            Sign Up
          </button>
          <div className="authentication__container__overlay__form__toSignup">
            Already have an account?{" "}
            <Link href="/login" style={{ textDecoration: "none" }}>
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
