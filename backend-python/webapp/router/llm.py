from flask import jsonify, request
from collections import defaultdict

from webapp import app
from webapp.service import logger
from webapp.service import Config
from webapp.helper import *

@app.route("/llm/format", methods=["POST"])
def llm_review():
    logger.info("LLM: API is triggered.")
    input_string=request.get_json().get('input')
    try:
        categorized_questions = format_string(input_string=input_string)
        return jsonify({"data": categorized_questions, "success": True})

    except Exception as e:
        logger.error(f"Error processing file: {str(e)}", exc_info=True)
        return jsonify({"error": str(e), "success": False})
    

@app.route("/llm", methods=["POST"])
def llm_qna():
    logger.info("LLM: Question API is triggered.")
    input_string=request.get_json().get('input')
    try:
        categorized_questions = create_answer(input_string)
        return jsonify({"data": categorized_questions, "success": True})

    except Exception as e:
        logger.error(f"Error processing file: {str(e)}", exc_info=True)
        return jsonify({"error": str(e), "success": False})
