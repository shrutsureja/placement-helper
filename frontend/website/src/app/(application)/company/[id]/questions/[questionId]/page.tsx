"use client"
import { getDataFromLocalStorage } from "@/utils";
import { useEffect, useState } from "react";

type QuestionData = {
    [key: string]: [{ answer: string, question: string }];
};

type QuestionsList = { companyId: string, formattedQuestion: QuestionData, originalQuestions: string };

const QuestionsPage = ({ params }: { params: { id: string, questionId: string } }) => {
    const companyId = params.id;
    const queId = params.questionId;
    const [questions, setQuestions] = useState<QuestionData>({});
    const [originalQuestions, setOriginalQuestions] = useState("");

    useEffect(() => {
        const questions = getDataFromLocalStorage("questions");
        const parsedQuestions: Array<QuestionsList> = JSON.parse(questions!);
        if (Array.isArray(parsedQuestions) && parsedQuestions.length > 0) {
            const questionsByCompany = parsedQuestions.filter(que => que?.companyId === companyId);
            console.log(questionsByCompany, "QUESTIONS BY COMPANY");
            if (questionsByCompany[Number(queId)].formattedQuestion) setQuestions(questionsByCompany[Number(queId)].formattedQuestion);
            if (questionsByCompany[Number(queId)].formattedQuestion) setOriginalQuestions(questionsByCompany[Number(queId)].originalQuestions);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="flex flex-col gap-4 my-2">
            <h1 className="text-2xl font-semibold">Original Questions:</h1>
            <pre>{originalQuestions}</pre>
            <h1 className="text-2xl font-semibold">Formatted Questions:</h1>
            {Object.keys(questions).map((title) => (
                <div key={title}>
                    <h2 className="text-xl font-semibold bg-black/10 p-2">{title}</h2>
                    <ul className="flex flex-col gap-4">
                        {questions && questions[title].map((question, index) => (
                            <div key={index} className="">
                                <li className="font-semibold">Q. {question.question}</li>
                                <li><span className="font-semibold">A.</span> {question.answer}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default QuestionsPage;