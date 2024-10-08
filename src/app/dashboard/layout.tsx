import { Aside } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Aside />
      <div className="w-screen p-2 overflow-y-scroll h-screen">{children}</div>
    </div>
  );
}
