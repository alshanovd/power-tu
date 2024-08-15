import NextLink from "next/link";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";

import { title } from "@/components/primitives";

export default function DataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className={title()}>Raw Data</h1>
      <NextUINavbar position="static">
        <NavbarContent>
          <NavbarItem />
        </NavbarContent>
        <NavbarContent justify="center">
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              href="/dashboard/data/products"
            >
              Products
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              href="/dashboard/data/orders"
            >
              Orders
            </NextLink>
          </NavbarItem>
          <NavbarItem>Add Order</NavbarItem>
        </NavbarContent>
        <NavbarContent>
          <NavbarItem />
        </NavbarContent>
      </NextUINavbar>

      <div className="mt-2">{children}</div>
    </>
  );
}
