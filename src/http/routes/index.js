module.exports = app => {
  const indexDontroller = app.http.controllers.index;
    app.get('/', indexDontroller.wellcome);
};
