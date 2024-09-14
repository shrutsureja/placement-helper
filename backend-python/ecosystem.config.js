module.exports = {
    apps: [
        {
            name: "llm-server",
            script: "gunicorn",
            args: "app:app",
            watch: false,
        }
    ]
};
