module.exports = (app) => {
    class IndexController{
        static wellcome(req, res){
            return res.json({
              status: 'API on-line'
            });
        }
    }

    return IndexController;
};


