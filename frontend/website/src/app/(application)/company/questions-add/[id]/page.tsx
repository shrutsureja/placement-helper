/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from 'next/link';
import Axios from '@/config/axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


function InterviewQuestionsAddPage({ params }: { params: { id: string } }) {
    const companyId = params.id;
    // const company = companies[Number(companyId)];
    const [company, setCompany] = useState<any>(null);
    const [questions, setQuestions] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetchCompanyDetails(companyId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchCompanyDetails = async (id: string) => {
        try {
            const response = await Axios.get(`/company/${id}`);
            setCompany(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async () => {
        try {
            setLoading(true);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await Axios.post("/reviews", { companyId, review: questions });
            setLoading(false);
            setQuestions("");
            router.push(`/company/${companyId}`);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-2 my-2">
            <h1 className='text-xl font-semibold '>Add Interview Questions</h1>
            <p>Share {company?.companyName} interview questions with other students.</p>
            <textarea rows={5} className="textarea textarea-bordered" placeholder="Questions" value={questions} onChange={e => setQuestions(e.target.value)} ></textarea>
            <div className="flex justify-end gap-2">
                <Link href={`/company/${companyId}`} className="btn btn-outline btn-sm btn-wide">Cancel</Link>
                <button onClick={handleSubmit} className="btn btn-outline btn-success btn-sm btn-wide">
                    {loading ?
                        <span className="loading loading-dots loading-sm"></span>
                        : "Submit"
                    }
                </button>
            </div>
        </div>
    )
}

export default InterviewQuestionsAddPage;