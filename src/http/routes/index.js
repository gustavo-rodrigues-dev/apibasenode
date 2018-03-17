import indexDontroller from '../controllers/index'

module.exports = app => {
    app.get('/', indexDontroller.wellcome);
};
