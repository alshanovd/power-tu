import NextLink from "next/link";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";

import { title } from "@/components/primitives";

export interface SubNavbarItem {
  title: string;
  href: string;
}

export function SubNavbar(items: SubNavbarItem[]) {
  return (
    <NextUINavbar position="static">
      <NavbarContent>
        <NavbarItem />
      </NavbarContent>
      <NavbarContent justify="center">
        {items.map((item) => (
          <NavbarItem key={item.title}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              href={item.href}
            >
              {item.title}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent>
        <NavbarItem />
      </NavbarContent>
    </NextUINavbar>
  );
}
