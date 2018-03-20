const config = {
    debug: {
        level: 'error',
        available: true,
    },
    secret: 'j~9z{WA1bV?4L:8',
    jwtSession: { session: false },
    db: {
        username: "",
        password: "",
        database: "checkin_api",
        host: null,
        port: null,
        dialect: "sqlite",
        storage: './database/db.homolog.sqlite',
        sync: {
            force: true,
        },
        define: {
            underscored: true,
        },
        seederStorage: "json",
        seederStoragePath: "./database/migration.homolog.json"
    }
};

module.exports = config;
