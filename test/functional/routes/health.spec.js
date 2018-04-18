/* global  describe, it,request,assert */
describe('Health route', () => {
  it('should return api status 200', done => {
    request.get('/health')
      .expect(200)
      .end((err, res) => {
        const expectedResult = {
          status: 200,
          message: 'success on conect services'
        }
        assert.deepEqual(res.body, expectedResult)
        done(err)
      })
  })
})
