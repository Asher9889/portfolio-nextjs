module.exports = {
    apps: [
        {
            name: "nextjs-portfolio",

            script: "npm",

            args: "start",

            instances: 1,

            exec_mode: "fork",

            autorestart: true,

            watch: false,

            env: {
                NODE_ENV: "development",
                PORT: 3000,
            },
            env_production: {
                NODE_ENV: "production",
                PORT: 3005,
            }
        },
    ],
};