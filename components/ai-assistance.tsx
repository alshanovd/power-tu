import { Button } from "@nextui-org/button";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

export default function AIAssistance({
  setShowReport,
  disabled,
}: {
  setShowReport?: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
}): React.ReactElement {
  return (
    <Button
      className="bg-gradient-to-tr from-pink-500 to-violet-500 text-white shadow-lg"
      isDisabled={disabled}
      radius="full"
      onClick={setShowReport ? () => setShowReport(true) : void 0}
    >
      <Image alt="AI" height={20} src="/chatgpt.svg" width={20} />
      Get AI Assistance
    </Button>
  );
}
