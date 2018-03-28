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

    return {
        init: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', config.secret),
    };
};
