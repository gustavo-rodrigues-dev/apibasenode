import { createUser, emptyUsers } from '../fixtures/user.fixture';

describe('Token route', () => {
    before(done => {
        app.domain.datasource.sequelize.sync().then(() => {
            done();
        });
    });

    beforeEach(done => {
        createUser().then(() => {
            done();
        });
    });

    afterEach(done => {
        emptyUsers().then(() => done());
    });

    it('should return a valid token', done => {
        request.post('/token')
            .send({
                email: 'test@test.com',
                password: '123456',
            })
            .expect(200)
            .end((err, res) => {
                assert(res.body.token);
                done(err);
            });
    });

    it('should return a bad request', done => {
        request.post('/token')
            .expect(400)
            .end(err => done(err));
    });

    it('should return unauthorized request when password not match', done => {
        request.post('/token')
            .send({
                email: 'test@test.com',
                password: '12345678',
            })
            .expect(401)
            .end(err => done(err));
    });

    it('should return unauthorized request when email not exists', done => {
        request.post('/token')
            .send({
                email: 'fulano@gmail.com',
                password: '12345678',
            })
            .expect(401)
            .end(err => done(err));
    });
});
