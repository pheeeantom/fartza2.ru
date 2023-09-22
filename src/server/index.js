const express = require("express");
const expressHbs = require("express-handlebars");
//var fileUpload = require('express-fileupload');
const app = express();
const goodsRouter = require('./routes/goods');
const categoriesRouter = require('./routes/categories');
const usersRouter = require('./routes/users');
const pool = require('./lib/db');
const usersController = require('./controllers/users_controller');
const goodsController = require('./controllers/goods_controller');

var passport = require('passport');
var LocalStrategy = require('passport-local');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const User = require("./logreg/user");
const DB = require("./lib/db2");

const config = require("./config/auth.config");

var session = require('express-session');
var mysql2 = require('mysql2/promise');
var MySQLStore = require('express-mysql-session')(session);

const hour = 3600000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(config.secret));

/*app.use(fileUpload({
	limits: { fileSize: 1024 * 1024 },
}));*/

var sessionStore = new MySQLStore({
	//expiration: 604800,
	connectionLimit : 10,
	host: "127.0.0.1",
	user: "fartsa",
	database: "fartsa",
	password: "S$PD5TsU@ke8JEhT~J9M",
	// Whether or not to automatically check for and clear expired sessions:
	clearExpired: false,
	// How frequently expired sessions will be cleared; milliseconds:
	checkExpirationInterval: hour,
    createDatabaseTable: false,
    schema: {
        tableName: 'users_sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
});
app.use(session({
  name: 'passport',
  secret: config.secret,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: { maxAge: 7 * 24 * hour, secure: false },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('session'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function verify(email, password, cb) {
	console.log("hi");
	let connection = DB.createConn();
	connection.query("SELECT * FROM users WHERE email='" + email + "';", function(err, results, fields) {
		if (err) { DB.plainEndConn(connection); console.log(1); return cb(err); }
		if (!results.length) { DB.plainEndConn(connection); console.log(2); return cb(null, false, { message: 'Неверный емейл либо пароль.' }); }
		if (require('crypto').createHash('sha256').update(password + results[0].salt).digest("hex") !== results[0].password_hash) {
			DB.plainEndConn(connection); console.log(3); return cb(null, false, { message: 'Неверный емейл либо пароль.' });
		}
		DB.plainEndConn(connection); console.log(4);
		return cb(null, results[0]);
	});
}));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, user.id);
  });
});

passport.deserializeUser(function(id, cb) {
  process.nextTick(function() {
    let connection = DB.createConn();
	connection.query("SELECT id, nickname, name, surname, email, role, created_at, avatar, about, city, birthday, status, rating FROM users WHERE id='" + id + "';", function(err, results, fields) {
		DB.plainEndConn(connection); cb(err,results[0]);
	});
  });
});

app.engine('hbs', expressHbs.engine(
	{
		defaultLayout: "layout",
		extname: 'hbs'
	}
));

app.set('view engine', 'hbs');

app.get("/", function(request, response) {
	response.render("index", {
        page: "index",
        categories: true
    });
});

app.get("/user/:nick", function(request, response) {
	response.render("index", {
        page: "index",
        categories: false
    });
});

app.get("/logreg", function(request, response) {
	if (!request.user) {
		response.render("index", {
        	categories: false,
        	page: "index",
			bootstrap: true
    	});
	}
	else {
		response.redirect('/user/' + request.user.nickname);
	}
});

app.get("/create", function(request, response) {
	if (!request.user) {
		response.status(401).send();
	}
	else {
		response.render("index", {
        	categories: false,
        	page: "index",
			bootstrap: true
    	});
	}
});

app.post("/login", /*function(req, res, next) {
	//console.log(req.cookies.captcha)
	let connection = DB.createConn();
	/*connection.query("SELECT * from captchas WHERE uuid='" + req.cookies.captcha + "';",
	    function(err, results, fields) {
	    	if (err) {
                DB.plainEndConn(connection);
                res.sendStatus(503);
            }
            else {
            	connection.end(function(err) {
                    if (err) {
                        console.log(err); res.sendStatus(503);
                    }
                    else {
                        if (results[0].captcha === req.body.captcha.toLowerCase()) { next(); }
                        else { res.redirect('/logreg?captcha=true'); }
                    }
                });
            }
        });*/
/*}, */passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/logreg?invalid=true'
}));

app.post("/registrate", /*function(req, res, next) {
	//console.log(req.cookies.captcha)
	let connection = DB.createConn();
	/*connection.query("SELECT * from captchas WHERE uuid='" + req.cookies.captcha + "';",
	    function(err, results, fields) {
	    	if (err) {
                DB.plainEndConn(connection);
                res.sendStatus(503);
            }
            else {
            	connection.end(function(err) {
                    if (err) {
                        console.log(err); res.sendStatus(503);
                    }
                    else {
                        if (results[0].captcha === req.body.captcha.toLowerCase()) { next(); }
                        else { res.redirect('/logreg?captcha=true&num=1'); }
                    }
                });
            }
        });*/
/*}, */function(request, response, next) {
	console.log(request.body);
	if (request.body.nickname.match(/^.{2,}$/) && request.body.email.match(/^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z]{2,}$/) &&
		request.body.password[0].match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/) &&
		request.body.password[0] === request.body.password[1]) {
		let connection = DB.createConn();
		let user = new User.User(request.body.nickname, request.body.email, request.body.password[0]);
		user.createUser(connection, request, response);
	}
	else {
		response.sendStatus(422);
	}
});

app.use("/profile", function(request, response) {
	if (!request.user) { response.send("Не авторизован!"); return; }
	//if (!request.user.is_confirmed) { response.send("Подтвердите почту!"); }
	response.redirect('/user/' + request.user.nickname);
});

app.get("/api/users/:nick", function(request, response) {
	/*if (request.params["nick"] === request.user.nickname) {
		response.json({...request.user, login: true});
	}
	else {
		let connection = DB.createConn();
		connection.query("SELECT id, nickname, name, surname, email, role, created_at, avatar, about, city, birthday, status, rating FROM users WHERE nickname='" + id + "';", function(err, results, fields) {
			DB.plainEndConn(connection); cb(err,results[0]);
		});
		response.json({...request.user, login: false});
	}*/
	if (request.user && request.params["nick"] === request.user.nickname) {
		usersController.getSingle(request, response, true);
	}
	else if (request.user && request.params["nick"] !== request.user.nickname) {
		usersController.getSingle(request, response, false);
	}
	else {
		usersController.getSingle(request, response, null);
	}
});

app.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { res.sendStatus(500); }
    res.redirect('/');
  });
});

app.use('/api', goodsRouter);
app.use('/api', categoriesRouter);
app.use('/api', usersRouter);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.get("/goods/create", function(request, response) {
	response.render("goods_create", {
        page: "goods_create",
        categories: false
    });
});

app.get("/goods/:id", function(request, response) {
	pool.execute("UPDATE `goods` SET `views` = `views` + 1 WHERE id = " + request.params["id"] + ";")
		.catch(err => {
			console.log(err.message);
		});
	response.render("index");
});

app.use(express.static('public'));

app.use(function(request, response, next) {
	response.sendStatus(404);
});

app.listen(3000);