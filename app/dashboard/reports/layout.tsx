import { title } from "@/components/primitives";
import { SubNavbar, SubNavbarItem } from "@/components/sub-navbar";

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items: SubNavbarItem[] = [
    {
      title: "Revenue by Genders",
      href: "/dashboard/reports/revenue-by-genders",
    },
    { title: "Total Revenue", href: "/dashboard/reports/total-revenue" },
    { title: "Order Status Total", href: "/dashboard/reports/order-status" },
    { title: "Products Sold", href: "/dashboard/reports/products-sold" },
    {
      title: "Status Statistics",
      href: "/dashboard/reports/status-statistics",
    },
  ];

  return (
    <>
      <h1 className={title()}>Reports</h1>
      <div className="flex w-full mt-6">
        <div className="w-2/12">{SubNavbar(items, true)}</div>
        <div className="w-10/12">{children}</div>
      </div>
    </>
  );
}
