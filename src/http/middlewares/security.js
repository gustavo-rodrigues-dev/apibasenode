import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

module.exports = app => {

  const UserRepository = app.domain.repositories.user;
    const config = app.config;
    const params = {
        secretOrKey: config.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    };
    passport.use(new Strategy(params, UserRepository.getUserAuth));
    /* istanbul ignore next */
    passport.serializeUser((user, done) => done(null, user));
    /* istanbul ignore next */
    passport.deserializeUser((user, done) => done(null, user));
    /* istanbul ignore next */
    app.use(passport.initialize());

    return {
        authenticate: () => passport.authenticate('jwt', config.secret),
    };
};
