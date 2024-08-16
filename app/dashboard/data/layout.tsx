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
      {SubNavbar(items)}
      <div className="mt-2">{children}</div>
    </>
  );
}
