const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const PORT = 3000;

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {
	autoescape: true,
	noCache: true
}); // point nunjucks to the proper directory for templates

var locals = {
    title: 'Favorite Characters',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.get('/', function(req, res){
	res.render('index.html', locals);
});

app.use(function (req, res, next){
	console.log(req.method, req.originalUrl);
	next();
});

app.post('/', function(req, res) {
	res.send(post.method, 'Request to homepage');
	next();
});

//
// app.get('/', (req,res) => {
// 	res.send("welcome, friend");
// });

app.listen(PORT, () => {
	console.log("listening")}
);
