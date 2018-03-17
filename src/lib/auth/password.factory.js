var bcrypt = require('bcrypt');

module.exports = {
    create: function(password) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        return hash;
    },
    compare: function(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
}
