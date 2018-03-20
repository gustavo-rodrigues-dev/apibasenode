import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

module.exports = app => {

    const User = app.domain.datasource.models.user;
    const config = app.config;
    const params = {
        secretOrKey: config.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    };

    const strategy = new Strategy(params, (payload, done) => {
        User.findById(payload.id)
            .then(user => {
                if (user) {
                    return done(null, user);
                }

                return done(null, false);
            })
            .catch(err => done(err, null));
    });

    passport.use(strategy);

    passport.serializeUser((user, done) => done(null, user));

    passport.deserializeUser((user, done) => done(null, user));

    return {
        init: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', config.secret),
    };
};
