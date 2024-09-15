import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <PageHeader title="Welcome back admin!" />
      <div className="flex flex-col gap-2 mt-4">
        <Link href={"/admin/dashboard"}>Visit admin dashboard</Link>
        <Link href={"/super-admin/dashboard"}>Visit Super admin dashboard</Link>
      </div>
    </main>
  );
}
