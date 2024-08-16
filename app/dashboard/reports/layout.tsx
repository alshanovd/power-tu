import { title } from "@/components/primitives";
import { SubNavbar, SubNavbarItem } from "@/components/sub-navbar";

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items: SubNavbarItem[] = [
    { title: "Graph", href: "/dashboard/reports/graph" },
    { title: "Pie Chart", href: "/dashboard/reports/pie-chart" },
    { title: "Bar Chart", href: "/dashboard/reports/bar-chart" },
  ];

  return (
    <>
      <h1 className={title()}>Reports</h1>
      {SubNavbar(items)}
      <div className="mt-2">{children}</div>
    </>
  );
}
