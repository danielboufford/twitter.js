const express = require('express');
const app = express();
const PORT = 3000;


app.use(function (req, res, next){
	console.log(req.method, req.originalUrl);
	next();
})

app.post('/', function(req, res) {
	res.send(post.method, 'Request to homepage');
	next();
});

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

app.get('/', (req,res) => {
	res.send("welcome, friend");
});

app.listen(PORT, () => {
	console.log("listening")}
);
