import { title } from "@/components/primitives";
import { SubNavbar, SubNavbarItem } from "@/components/sub-navbar";

export default function DataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items: SubNavbarItem[] = [
    { title: "Products", href: "/dashboard/data/products" },
    { title: "Orders", href: "/dashboard/data/orders" },
  ];

  return (
    <>
      <h1 className={title()}>Raw Data</h1>
      <div className="flex w-full mt-3">
        <div className="w-2/12">{SubNavbar(items, true)}</div>
        <div className="w-10/12 mt-3">{children}</div>
      </div>
    </>
  );
}
