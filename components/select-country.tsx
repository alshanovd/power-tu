import { Select, SelectItem } from "@nextui-org/select";
import React, { Dispatch, SetStateAction, useContext } from "react";

import { CountriesContext } from "@/app/tools/countries";

export function Countries({
  setCountry,
}: {
  setCountry: Dispatch<SetStateAction<string>>;
}): React.ReactElement {
  const countries = useContext<string[]>(CountriesContext);
  const global = "Global";

  return (
    <Select
      isDisabled
      className="max-w-xs mt-3"
      defaultSelectedKeys={[global]}
      label="Select a country"
      variant="underlined"
      onChange={(e) => setCountry(e.target.value)}
    >
      {[global, ...countries].map((c, index) => (
        <SelectItem key={c}>{c}</SelectItem>
      ))}
    </Select>
  );
}
