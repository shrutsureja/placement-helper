/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from "@/config/axios";

const fetchQuestion = async (id: string) => {
    try {
        const response = await Axios.get(`/reviews/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const QuestionsPage = async ({ params }: { params: { id: string, questionId: string } }) => {
    const queId = params.questionId;
    const questions = await fetchQuestion(queId);

    return (
        <div className="flex flex-col gap-4 my-2">
            <h1 className="text-2xl font-semibold">Original Questions:</h1>
            <p>{questions?.review}</p>
            <h1 className="text-2xl font-semibold">Formatted Questions:</h1>
            {Object.keys(questions.llmAnswer).map((title) => (
                <div key={title}>
                    <h2 className="text-xl font-semibold bg-black/10 p-2">{title}</h2>
                    <ul className="flex flex-col gap-4">
                        {questions.llmAnswer && questions.llmAnswer[title].map((question: any, index: number) => (
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