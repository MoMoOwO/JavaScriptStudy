var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/news', (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*'); // 添加响应头解决跨域问题
  var id = req.query.id;
  console.log("/news id = " + id);
  var news = { // 新闻数据
    id,
    title: 'news title1...',
    content: 'news content...',
    commentsUrl: '/comments?newsId=' + id
  };
  res.json(news); // 返回数据
});

router.get('/comments', (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*'); // 添加响应头解决跨域问题
  console.log('/comments newsId=' + req.query.newsid);
  var newsId = req.query.newsid;
  var comments = {
    id: 1,
    content: 'comment content1111....',
    newsId: newsId
  };
  res.json(comments);
});

module.exports = router;
