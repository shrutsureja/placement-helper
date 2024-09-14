import CompanyList from "@/components/ui/CompanyList";
import companies from "@/data/companies.json"
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-2">
      <h2 className="text-lg font-semibold border-b border-black">Recently added companies</h2>
      <CompanyList companies={companies.slice(0, 3)} />
      <Link href={"/companies"}>Explore more...</Link>
    </div>
  );
}
