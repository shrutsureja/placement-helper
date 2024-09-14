module.exports = {
    apps: [
        {
            name: 'llm-server',
            script: './app.py',
            autorestart: true,
            watch: false,
            interpreter: 'python3'
        },
    ],
};