"use client"
import { useState } from 'react'
import companies from "@/data/companies.json"
import Link from 'next/link';
import { getDataFromLocalStorage, setDataToLocalStorage } from '@/utils';
import { useRouter } from 'next/navigation';
import Axios from '@/config/axios';

function InterviewQuestionsAddPage({ params }: { params: { id: string } }) {
    const companyId = params.id;
    const company = companies[Number(companyId)];
    const [questions, setQuestions] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const response = await Axios.post("/reviews", { review: questions });

            const dataObj = {
                companyId: companyId,
                originalQuestions: questions,
                formattedQuestion: response.data.llmAnswer
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
            <h1 className='text-xl font-semibold '>Add Interview Questions</h1>
            <p>Share {company.companyName} interview questions with other students.</p>
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