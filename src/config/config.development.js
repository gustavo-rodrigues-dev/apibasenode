const config = {
    debug: {
        level: 'debug',
        available: true,
    },
    secret: 'j~9z{WA1bV?4L:9',
    jwtSession: { session: false },
    db: {
        username: "",
        password: "",
        database: "db",
        host: null,
        port: null,
        dialect: "sqlite",
        storage: './database/db.development.sqlite',
        sync: {
            force: true,
        },
        define: {
            underscored: true,
        },
        seederStorage: "json",
        seederStoragePath: "./database/migration.development.json"
    }
};

module.exports = config;
