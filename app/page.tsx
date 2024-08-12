import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { FaUser, FaUserPlus, FaGlobe } from "react-icons/fa6";
import Image from "next/image";

import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col pt-32 items-center justify-center gap-4">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Welcome to&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Power TU</h1>
      </div>
      <Image alt="Power TU" height={70} src="/favicon.ico" width={70} />

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/login"
        >
          <FaUser size={17} />
          Login
        </Link>
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="/sign-up"
        >
          <FaUserPlus size={17} />
          Sign Up
        </Link>
      </div>
      <div className="flex gap-3">
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="/dashboard"
        >
          <FaGlobe />
          Dashboard
        </Link>
      </div>
    </section>
  );
}
