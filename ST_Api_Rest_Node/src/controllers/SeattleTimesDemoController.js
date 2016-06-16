var mysql = require('mysql');


var SeattleTimesDemoController = function(){

    //would be in config
    var mysqlconn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'seattletimesdb'
    });

    //would most likely make a factory service for these

    //Get all articles
    var getAllArticles = function(req, res){
        var query ='CALL sp_getallarticles()';

        mysqlconn.query(query, function(err, rows, fields){
            if(!err){
                //console.log(rows);
                res.json({results: rows});
            }
            else{
                console.log(err, 'we got some issues');
            }
        });
    };

    //Get article by ID
    var getArticleById = function(req, res){
        var id = req.params.article_id;
        var query ='SELECT * FROM articles WHERE ArticleId =' + id;

        mysqlconn.query(query, function(err, rows, fields){
            if(!err){
                //console.log(rows);
                res.json({results: rows});
            }
            else{
                console.log(err, 'we got some issues');
            }
        });
    };

    //Create a new Article
    var createArticle = function(req, res){
        var query ='INSERT INTO articles SET ?';

        mysqlconn.query(query,req.body, function(err, rows, fields){
            if(!err){
                //console.log(rows);
                res.json({results: rows});
            }
            else{
                console.log(err, 'we got some issues');
            }
        });

    };

    //delete article by id
    var deleteArticle = function(req, res){
        var query ='DELETE FROM articles WHERE ?';

        mysqlconn.query(query, req.body, function(err, rows, fields){
            if(!err){
                //console.log(rows);
                res.json({results: rows});
            }
            else{
                console.log(err, 'we got some issues');
            }
        });

    };

    //edit article by id
    var editArticle = function(req, res){
        var id = req.params.article_id;
        var query ='UPDATE articles SET ? WHERE ArticleId =' + id;

        mysqlconn.query(query, req.body, function(err, rows, fields){
            if(!err){
                //console.log(rows);
                res.json({results: rows});
            }
            else{
                console.log(err, 'we got some issues');
            }
        });
    };

    return {
        getAllArticles: getAllArticles,
        getArticleById: getArticleById,
        createArticle: createArticle,
        deleteArticle: deleteArticle,
        editArticle: editArticle
    }
};

module.exports = SeattleTimesDemoController;
