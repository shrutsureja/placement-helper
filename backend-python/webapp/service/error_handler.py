"""
Configures Error Handler for the application.
All the Unhandled errors will be handled here.
"""

from flask import jsonify

from webapp import app


@app.errorhandler(400)
def page_not_found(e):
    response = {
        "error": "Not Found",
        "message": "The requested URL was not found on the server.",
        "success": False,
    }
    return jsonify(response), 400


@app.errorhandler(422)
def unprocessable_entity(e):
    response = {
        "error": "Unprocessable Entity",
        "message": "The request was well-formed but was unable to be followed due to semantic errors.",
        "success": False,
    }
    return jsonify(response), 422


@app.errorhandler(404)
def page_not_found(e):
    response = {
        "error": "Not Found",
        "message": "The requested URL was not found on the server.",
        "success": False,
    }
    return jsonify(response), 404


@app.errorhandler(500)
def internal_server_error(e):
    response = {
        "error": "Internal Server Error",
        "message": "An unexpected error occurred.",
        "success": False,
    }
    return jsonify(response), 500


@app.errorhandler(405)
def method_not_allowed(e):
    response = {
        "error": "Method Not Allowed",
        "message": "The method is not allowed for the requested URL.",
        "success": False,
    }
    return jsonify(response), 405


@app.errorhandler(422)
def unprocessable_entity(e):
    response = {
        "error": "Unprocessable Entity",
        "message": "The request was well-formed but was unable to be followed due to semantic errors.",
        "success": False,
    }
    return jsonify(response), 422
