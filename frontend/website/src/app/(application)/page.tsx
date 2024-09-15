import CompanyList from "@/components/ui/CompanyList";
import Axios from "@/config/axios";
import Link from "next/link";

const fetchCompanies = async () => {
  try {
    const response = await Axios.get("/company");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const companies = await fetchCompanies();
  return (
    <div className="my-2">
      <h2 className="text-lg font-semibold bg-black/10 p-2">Recently added companies</h2>
      <CompanyList companies={companies.slice(0, 3)} />
      <Link href={"/companies"}>Explore more companies...</Link>
    </div>
  );
}
