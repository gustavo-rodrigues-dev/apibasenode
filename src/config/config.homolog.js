const config = {
    debug: {
        level: 'error',
        available: true,
    },
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
