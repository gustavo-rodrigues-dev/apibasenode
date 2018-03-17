module.exports = (app) => {
    class IndexController{
        static wellcome(req, res){
            return res.json('API on-line');
        }
    }

    return IndexController;
};


