import CompanyList from "@/components/ui/CompanyList";
import companies from "@/data/companies.json"


const CompaniesPage = () => {
    return (
        <div>
            <CompanyList companies={companies} />
        </div>
    )
}

export default CompaniesPage;