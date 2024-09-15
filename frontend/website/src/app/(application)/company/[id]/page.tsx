import Link from 'next/link';
import Axios from '@/config/axios';

const fetchCompanyDetails = async (id: string) => {
    try {
        const response = await Axios.get(`/company/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const fetchCompanyQuestions = async (id: string) => {
    try {
        const response = await Axios.get(`/reviews/company/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

async function CompanyDetailsPage({ params }: { params: { id: string } }) {
    const companyId = params.id;
    const company = await fetchCompanyDetails(companyId);
    const questions = await fetchCompanyQuestions(companyId);

    return (
        <div className="flex flex-col gap-2">
            <div className='my-2'>
                <h1 className='text-2xl font-semibold'>{company?.companyName}</h1>
                <p className='text-lg'>{company?.description}</p>
                <p>{company?.address}</p>
                <p className='opacity-60'>{company?.city} - {company?.state}</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center bg-black/10 p-2">
                    <span className='text-lg '>Questions</span>
                    <Link href={`/company/questions-add/${companyId}`} className="btn btn-outline btn-sm btn-info btn-wide">Add Interview Questions</Link>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {Array.isArray(questions) && questions.length > 0 && questions.map((question, i) => (
                    <Link href={`/company/${companyId}/questions/${question?._id}`} className={`card shadow-md ${i % 2 === 0 ? "bg-black/10" : "bg-inherit"}`} key={i}>
                        <p className="card-body truncate w-2/3">
                            {question?.review}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CompanyDetailsPage;