"use client"
import { useEffect, useState } from 'react'
import companies from "@/data/companies.json"
import Link from 'next/link';
import { getDataFromLocalStorage } from '@/utils';

type QuestionData = {
    [key: string]: string[];
};

type QuestionsList = { companyId: string, formattedQuestions: QuestionData };

function CompanyDetailsPage({ params }: { params: { id: string } }) {
    const companyId = params.id;
    const company = companies[Number(companyId)];
    const [questions, setQuestions] = useState<QuestionsList[] | null>(null);

    useEffect(() => {
        const questions = getDataFromLocalStorage("questions");
        const parsedQuestions: Array<QuestionsList> = JSON.parse(questions!);
        if (Array.isArray(parsedQuestions) && parsedQuestions.length > 0) {
            const questionsByCompany = parsedQuestions.filter(que => que?.companyId === companyId);
            setQuestions(questionsByCompany);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="flex flex-col gap-2">
            <div className='my-2'>
                <h1 className='text-2xl font-semibold'>{company.companyName}</h1>
                <p className='text-lg'>{company.description}</p>
                <p>{company.address}</p>
                <p className='opacity-60'>{company.city} - {company.state}</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center bg-black/10 p-2">
                    <span className='text-lg '>Questions</span>
                    <Link href={`/company/questions-add/${companyId}`} className="btn btn-outline btn-sm btn-info btn-wide">Add Interview Questions</Link>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {Array.isArray(questions) && questions.length > 0 && questions.map((_, i) => (
                    <Link href={`/company/${companyId}/questions/${i}`} className={`card shadow-md ${i % 2 === 0 ? "bg-black/20" : "bg-inherit"}`} key={i}>
                        <div className="card-body">
                            Interview questions shared by Aryan Joshi
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CompanyDetailsPage;