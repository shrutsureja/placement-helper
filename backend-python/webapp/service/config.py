import os
import dotenv


dotenv.load_dotenv(".env", override=True)


class Config:
    FLASK_PORT = os.getenv("FLASK_PORT")
    PYTHON_ENV = os.getenv("PYTHON_ENV")
    API_KEY = os.getenv("API_KEY")

    def __init__(self):
        required_env_vars = [
            "PYTHON_ENV",
            "FLASK_PORT",
            "API_KEY"
        ]

        missing_vars = [
            env_var for env_var in required_env_vars if os.getenv(env_var) is None
        ]
        if missing_vars:
            raise EnvironmentError(
                f"Missing environment variables: {', '.join(missing_vars)}"
            )
