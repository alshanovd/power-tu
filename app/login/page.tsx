/* eslint-disable jsx-a11y/no-autofocus */

import { Input } from "@nextui-org/input";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center flex-col border-2 border-purple-500 py-5 px-5 rounded-xl">
      <Image alt="Power TU" height={70} src="/favicon.ico" width={70} />
      <Input className="mt-5" label="Email" type="email" />
      <Input
        className="max-w-xs mt-5"
        label="Password"
        placeholder="Enter your password"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            // onClick={toggleVisibility}
            // aria-label="toggle password visibility"
          >
            {/* {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )} */}
          </button>
        }
        // type={isVisible ? "text" : "password"}
        variant="bordered"
      />
    </div>
  );
}
