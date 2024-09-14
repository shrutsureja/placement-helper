module.exports = {
  apps: [
    {
      name: "backend-node-prod",
      namespace: "node prod",
      script: "npm",
      args: "run start:prod",
      interpreter: "none",
    }
  ]
}
