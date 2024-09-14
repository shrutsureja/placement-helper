"use client"
import { useState } from 'react'
import companies from "@/data/companies.json"
import Link from 'next/link';
import { getDataFromLocalStorage, setDataToLocalStorage } from '@/utils';
import { useRouter } from 'next/navigation';

function InterviewQuestionsAddPage({ params }: { params: { id: string } }) {
    const companyId = params.id;
    const company = companies[Number(companyId)];
    const [questions, setQuestions] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const requestDataObj = {
                review: questions
            }

            const response = await fetch("https://6f9dpz0d-3500.inc1.devtunnels.ms/reviews", { method: "POST", body: JSON.stringify(requestDataObj) });
            const data = await response.json();

            const dataObj = {
                companyId: companyId,
                originalQuestions: questions,
                formattedQuestion: data.llmAnswer.data
            }
            const questionList = getDataFromLocalStorage("questions");
            const parsedQuestionList: Array<unknown> = JSON.parse(questionList!);
            if (parsedQuestionList && parsedQuestionList.length > 0) {
                setDataToLocalStorage("questions", JSON.stringify([...parsedQuestionList, dataObj]));
            } else {
                setDataToLocalStorage("questions", JSON.stringify([dataObj]));
            }
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
            <h1 className='text-xl font-semibold'>Add Interview Questions</h1>
            <p>Share {company.companyName} interview questions with other students.</p>
            <textarea className="textarea textarea-bordered" placeholder="Questions" value={questions} onChange={e => setQuestions(e.target.value)} ></textarea>
            <div className="flex justify-end gap-2">
                <Link href={`/company/${companyId}`} className="btn btn-outline btn-sm">Cancel</Link>
                <button onClick={handleSubmit} className="btn btn-outline btn-success btn-sm">
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