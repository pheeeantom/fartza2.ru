const express = require("express");
const expressHbs = require("express-handlebars");
const app = express();
const goodsRouter = require('./routes/goods');
const categoriesRouter = require('./routes/categories');
const usersRouter = require('./routes/users');
const pool = require('./lib/db');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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