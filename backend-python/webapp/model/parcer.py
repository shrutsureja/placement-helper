from pydantic import BaseModel, Field
from typing import List, Optional


class InterviewQuestion(BaseModel):
    "List of the interview Questions which are present here"
    topic: str = Field(..., description="The topic of the question (e.g., DBMS, Python, OS).")
    question: str = Field(..., description="The actual question asked during the interview.")
    difficulty: str = Field(..., description="Perceived difficulty level of the question (e.g., Easy, Medium, Hard).")
    answer: Optional[str] = Field(None, description="The expected or given answer to the question, if available.")


class InterviewStage(BaseModel):
    """Data model for the Interview Stage"""
    stage_type: str = Field(..., description="Type of the interview stage (e.g., Aptitude, Technical, HR).")
    description: str = Field(..., description="A brief description of what happened during this stage.")
    questions: List[InterviewQuestion] = Field(..., description="List of questions asked during this stage.")
    duration: Optional[str] = Field(None, description="The duration of the interview stage (e.g., 45 minutes).")
    difficulty: Optional[str] = Field(None, description="Perceived difficulty level of this stage (e.g., Easy, Medium, Hard).")
    feedback: Optional[str] = Field(None, description="Any feedback about the interviewer's behavior or the stage.")

class InterviewProcess(BaseModel):
    """Data model for the Interview Process"""
    candidate_feedback: Optional[str] = Field(None, description="Feedback given by the candidate regarding the process.")
    overall_experience: Optional[str] = Field(None, description="Overall experience of the candidate (e.g., Positive, Negative).")
    total_rounds: int = Field(..., description="Total number of rounds in the interview process.")
    stages: List[InterviewStage] = Field(..., description="Details of each interview stage.")
    additional_info: Optional[str] = Field(None, description="Any additional information provided by the candidate.")
