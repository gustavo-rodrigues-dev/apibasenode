describe('Index route', () => {
  it('should return api status 200', done => {
      request.get('/')
          .expect(200)
          .end((err, res) => {
              const expectedResult = "API on-line";
              assert.deepEqual(res.body, expectedResult);
              done(err);
          });
  });
});
