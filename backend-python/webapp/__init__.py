"""Represents the main entry point for the web application.

This module initializes the Flask app, handles CORS, imports configurations and routes,
and serves as the central hub for application logic.

Key components:
- Flask app instance: The central object managing the web application.
- CORS configuration: Enables cross-origin resource sharing for broader access.
- Configurations: Imports application-wide settings from the 'service' module.
- Routes: Imports defined routes from the 'router' module to handle requests.
- Logging: Utilizes a logger for tracking application events and debugging.
"""

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

"""  CORS handling.  """
CORS(
    app,
    resources={
        r"*": {
            "origins": "*",
            "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        }
    },
    allow_headers=[
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "Authorization",
        "Access-Control-Allow-Origin",
        "x-api-key",
        "x-header-value",
        "X-RenAI-User",
    ],
    supports_credentials=True,
)

""" Importing router and configs """
from webapp.service import Config, logger
from webapp import router
