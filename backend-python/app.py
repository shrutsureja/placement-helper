from flask import jsonify
from webapp import app, Config, logger

port = Config.FLASK_PORT


@app.route("/", methods=["GET"])
def server():
    print("Server is running!!!🚀")
    logger.info(f"🚀Server is running!!!🚀")
    response = {
        "message": f"Server is up and running! Listening on {port}!!!",
        "success": True,
    }
    return jsonify(response), 200


if __name__ == "__main__":
    logger.info(f"🚀 Server is up and running! 🌐 Listening on {port} 🎉")
    app.run(host="127.0.0.1", port=port, debug=True)
