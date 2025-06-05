import DynamicBreadCrumbExample from "@/components/examples/dynamic-breadcrumb/Example";

export default function DynamicBreadCrumbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid place-items-center min-h-screen ">
      <div className="flex flex-col gap-4">
        <DynamicBreadCrumbExample />
        {children}
      </div>
    </section>
  );
}
