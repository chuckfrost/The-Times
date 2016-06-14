var express = require('express');
var seattleTimesrouter = express.Router();


var router = function(){

    var SeattleTimesDemoController = require('../controllers/SeattleTimesDemoController')();

    seattleTimesrouter.route('/')
        .get(SeattleTimesDemoController.getAllArticles);

    seattleTimesrouter.route('/:article_id')
        .get(SeattleTimesDemoController.getArticleById);

    seattleTimesrouter.route('/createnew')
        .post(SeattleTimesDemoController.createArticle);

    seattleTimesrouter.route('/delete')
        .delete(SeattleTimesDemoController.deleteArticle);

    seattleTimesrouter.route('/update/:article_id')
        .put(SeattleTimesDemoController.editArticle);

    return seattleTimesrouter;
};


module.exports = router;

