from webapp.service import Config
import json
import random

LIST_OF_KEYS =(Config.API_KEY).split(',')


def json_controlled_generations(input_string):
    import google.generativeai as genai
    genai.configure(api_key=random.choice(LIST_OF_KEYS))

    import typing_extensions as typing
    class InterviewQuestionSchema(typing.TypedDict):
        type_of_question: str  # Description: Type or stage of the interview (e.g., Aptitude Test, Technical Interview, HR Interview)
        questions: typing.List[str]   # Description: List of questions asked during this particular stage

    class InterviewSchema(typing.TypedDict):
        interview_data: typing.List[InterviewQuestionSchema]  # Description: A list of interview stages and their respective questions

    model = genai.GenerativeModel("gemini-1.5-pro-latest")
    result = model.generate_content(
        f'Please provide a list of interview questions categorized by their type. Each category should include the distinct type of question and the corresponding questions for that type. Format the output as a JSON object like the example below, based on the following content: {input_string}. output format: ',
        generation_config=genai.GenerationConfig(
            response_mime_type="application/json", response_schema= list[InterviewSchema]
        ),
    )
    return json.loads(result.parts[0].text)[0]


def json_no_schema(input_string):
    import google.generativeai as genai
    genai.configure(api_key=Config.API_KEY)

    model = genai.GenerativeModel("gemini-1.5-pro-latest")
    prompt = """
    You are an expert assistant for extracting quetions answer and segregation from documents in JSON format. \n
    You extract data and returns it in JSON format, according to provided JSON schema, from given 
    document. \n
    REMEMBER to return whole extracted data only from provided document. NEVER MAKE UP ANY DATA.
    Use this JSON schema:

    Questions = {'type_of_question': str , 'questions': list[str] }
    Return: list[Questions]

    Here is a Document::"""
    
    result = model.generate_content(prompt+input_string)
    return json.loads(result.parts[0].text.strip('```json').strip())
