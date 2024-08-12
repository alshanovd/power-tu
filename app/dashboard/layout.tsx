import { Navbar } from "@/components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center">
        <div className="inline-block max-w-lg text-center justify-center">
          {children}
        </div>
      </section>
    </>
  );
}
