const config = {
    debug: {
        level: 'debug',
        available: true,
    },
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
