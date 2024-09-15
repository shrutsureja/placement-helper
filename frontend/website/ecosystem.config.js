module.exports = {
  apps: [
    {
      name: "nextjs-app",               // Name of your application
      script: "npm",                    // Using npm as the script manager
      args: "start",                    // The command to start the Next.js app
      cwd: "./",                        // Current working directory (root of your project)
      watch: false,                     // Disable file watching (optional, you can enable it if needed)
    },
  ],
};
