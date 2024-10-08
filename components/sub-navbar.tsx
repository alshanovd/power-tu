import NextLink from "next/link";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

import { linkStyle } from "./primitives";

export interface SubNavbarItem {
  title: string;
  href: string;
}

export function SubNavbar(items: SubNavbarItem[], vertical = false) {
  return vertical ? (
    <>
      <ul>
        {items.map((item: SubNavbarItem) => (
          <li key={item.title} className="py-3">
            <NextLink className={linkStyle} href={item.href}>
              {item.title}
            </NextLink>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <NextUINavbar position="static">
      <NavbarContent>
        <NavbarItem />
      </NavbarContent>
      <NavbarContent justify="center">
        {items.map((item: SubNavbarItem) => (
          <NavbarItem key={item.title}>
            <NextLink className={linkStyle} href={item.href}>
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
