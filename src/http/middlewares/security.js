import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

module.exports = app => {

  const UserRepository = app.domain.repositories.user;
    const config = app.config;
    const params = {
        secretOrKey: config.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    };

    const strategy = new Strategy(params, UserRepository.getUserAuth);

    passport.use(strategy);

    passport.serializeUser((user, done) => done(null, user));

    passport.deserializeUser((user, done) => done(null, user));

    return {
        init: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', config.secret),
    };
};
