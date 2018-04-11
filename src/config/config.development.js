const config = {
    debug: {
        level: 'debug',
        available: true
    },
    secret: 'j~9z{WA1bV?4L:9',
    jwtSession: { session: false },
    db: {
        username: "",
        password: "",
        host: null,
        port: null,
        dialect: "sqlite",
        storage: "/Users/gustavo/Workspace/edeploy/refs/apiBase/database/db.development.sqlite",
        sync: {
            force: true
        },
        define: {
            underscored: true
        }
    }
};

module.exports = config;
