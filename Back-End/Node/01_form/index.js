const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/get', function (req, res) {
  console.log(req.query);
  const userId = req.query.id;
  res.send(`${userId}님 환영합니다!`);
});

app.post('/post', function (req, res) {
  console.log(req.body);
  res.render('result', {
    id: req.body.id,
  });
});

app.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
