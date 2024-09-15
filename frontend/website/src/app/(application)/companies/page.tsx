import CompanyList from "@/components/ui/CompanyList";
import Axios from "@/config/axios";

const fetchCompanies = async () => {
    try {
        const response = await Axios.get("/company");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const CompaniesPage = async () => {
    const companies = await fetchCompanies();
    return (
        <div>
            <CompanyList companies={companies} />
        </div>
    )
}

export default CompaniesPage;