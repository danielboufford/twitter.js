const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use('/', routes);

app.use(express.static('public'));

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {
	autoescape: true,
	noCache: true
}); // point nunjucks to the proper directory for templates
//
// var locals = {å
//     title: 'Favorite Characters',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };

// app.use('/', (req, res, next) => {
//   const user = req.query.user;
//   req.user = user;
//   next();
// })
//
// app.use('/', (req, res, next) => {
//   console.log('current user', req.user);
//   next();
// })

app.use(function (req, res, next){
	console.log(req.method, req.originalUrl);
	next();
});

//
// app.get('/', (req,res) => {
// 	res.send("welcome, friend");
// });

app.listen(PORT, () => {
	console.log("listening")}
);
