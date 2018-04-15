/* global  describe,before,app,beforeEach,afterEach,it,request,assert */
import { createUser, emptyUsers, invalidateTable, validateTable } from '../fixtures/user.fixture'
import jwt from 'jsonwebtoken'

describe('User route', () => {
  let token

  before(done => {
    app.domain.datasource.sequelize.sync().then(() => {
      done()
    })
  })

  beforeEach(done => {
    createUser().then(user => {
      token = jwt.sign({ id: user.id }, app.config.secret)
      done()
    })
  })

  afterEach(done => {
    emptyUsers().then(() => done())
  })

  it('should return user logged', done => {
    const expectedResult = {
      name: 'test',
      email: 'test@test.com'
    }

    request.get('/user')
      .set('Authorization', `bearer ${token}`)
      .expect(200)
      .end((err, res) => {
        assert.deepEqual(res.body, expectedResult)
        done(err)
      })
  })

  it('should return Unauthorized to invalid token', done => {
    request.get('/user')
      .set('Authorization', `bearer invalid`)
      .expect(401)
      .end(err => done(err))
  })

  it('should return error when database out', done => {
    invalidateTable().then(() => {
      request.get('/user')
        .set('Authorization', `bearer ${token}`)
        .expect(500)
        .end(err => {
          validateTable().then(() => {
            done(err)
          })
        })
    })
  })
})
