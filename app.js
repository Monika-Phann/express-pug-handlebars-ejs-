const express = require('express');

const app = express();

const users = [];

app.set('view engine', 'pug');
app.set('views', 'views');

// built-in middleware instead of body-parser
app.use(express.urlencoded({ extended: false }));

app.get('/',(req, res, next) => {
    res.render('index', {pageTitle: 'Add User'});
});

app.get('/users',(req, res, next) => {
    res.render('users', {pageTitle: 'User', users: users});
});

app.post('/add-user', (req, res, next) => {
    users.push({name: req.body.username});
    res.redirect('/users');
});

app.listen(3000);