const config = {
    debug: {
        level: 'debug',
        available: true,
    },
    db: {
        username: "",
        password: "",
        database: "checkin_api",
        host: null,
        port: null,
        dialect: "sqlite",
        storage: './database/db.test.sqlite',
        sync: {
            force: true,
        },
        define: {
            underscored: true,
        },
        seederStorage: "json",
        seederStoragePath: "./database/migration.test.json"
    }
};

module.exports = config;
