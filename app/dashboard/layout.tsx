import { Navbar } from "@/components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center mt-5">
        {children}
      </section>
    </>
  );
}
