"use strict";
(self["webpackChunkfartza_ru"] = self["webpackChunkfartza_ru"] || []).push([["src_client_components_goods_min_js"],{

/***/ "./src/client/components/goods_min.js":
/*!********************************************!*\
  !*** ./src/client/components/goods_min.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_services_goods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/services/goods_service */ "./src/client/store/services/goods_service.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ "./src/client/app.js");
/* harmony import */ var _store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducers/goods_slice */ "./src/client/store/reducers/goods_slice.js");
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flowbite-react */ "./node_modules/flowbite-react/lib/esm/index.js");
/* harmony import */ var _math_distance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../math/distance */ "./src/client/math/distance.js");
/* harmony import */ var _store_services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/services/users_service */ "./src/client/store/services/users_service.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }













function GoodsMin(props) {
  //	unsubscribe = null;

  /*constructor(props) {
  	super(props);
  	this.state = {goods: null, count: null, isLoading: null, error: null};
  	this.move = this.move.bind(this);
  	//this.state = { lastArgs: null };
  	//this.state = { goods: useSelector((state) => state.goods) };
  	//this.getNew = this.getNew.bind(this);
  	//this.getPopular = this.getPopular.bind(this);
   		//this.dispatch = useDispatch();
  	//const subscriptionChangeState = this.props.emitter.subscribe("CHANGE", (state) => this.setState({ goods: state }));
  }
  
  /*componentDidUpdate(prevProps) {
  	if (this.state.first || JSON.stringify(this.props.lastArgs) !== JSON.stringify(prevProps.lastArgs)) {
  		this.setState({first: false});
  		console.log(this.props.lastArgs);
  		this.props.fetchAllGoods(this.props.lastArgs);
  	}
  }*/

  //getNew() {
  /*const data = new FormData();
  data.append('command', 'getGoods');
  data.append('since', 0);*/
  /*fetch('/api', {
  	method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({command: 'getNew', since: 0})
  }).then(response => {
  	response.json().then(body => {
  		this.setState({ goods: body.goods[0] });
  	});
  });*/
  /*const searchParams = new URLSearchParams(location.search);
  this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'new' }, '/api', 'POST').then(resolve => {
  	if (resolve.body.goods[0].length == 0) {
  		this.props.updateGoods('Ничего не найдено!');
  		return;
  	}
  	this.props.updateGoods(resolve.body.goods[0]);
  }).catch(reject => {
  	this.props.updateGoods(reject.error);
  });*/

  //const searchParams = new URLSearchParams(location.search);
  //this.props.getGoodsFromAPI((searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", 0, 'new');

  /*const searchParams = new URLSearchParams(location.search);
  this.props.getGoodsAll({ word: ((searchParams.get('query') && searchParams.get('query').length > 1) ?
  	searchParams.get('query') : ""), since: 0, sort: 'new'});*/
  //console.log(10);
  //}

  //getPopular() {
  /*const searchParams = new URLSearchParams(location.search);
  this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'popular' }, '/api', 'POST').then(resolve => {
  	if (resolve.body.goods[0].length == 0) {
  		this.props.updateGoods('Ничего не найдено!');
  		return;
  	}
  	this.props.updateGoods(resolve.body.goods[0]);
  }).catch(reject => {
  	this.props.updateGoods(reject.error);
  });*/

  //const searchParams = new URLSearchParams(location.search);
  //this.props.getGoodsFromAPI((searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", 0, 'popular');
  /*const searchParams = new URLSearchParams(location.search);
  this.props.getGoodsAll({ word: ((searchParams.get('query') && searchParams.get('query').length > 1) ?
  	searchParams.get('query') : ""), since: 0, sort: 'popular'})
  }*/

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var lastArgs = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.goodsReducer.lastArgs;
  });
  var query;
  if (lastArgs.category) query = _store_services_goods_service__WEBPACK_IMPORTED_MODULE_2__.useFetchAllGoodsCatsQuery;else if (props.option === "profile") query = _store_services_goods_service__WEBPACK_IMPORTED_MODULE_2__.useFetchGoodsByNickQuery;else if (props.option === "favorites") query = _store_services_users_service__WEBPACK_IMPORTED_MODULE_7__.useGetFavoritesQuery;else query = _store_services_goods_service__WEBPACK_IMPORTED_MODULE_2__.useFetchAllGoodsQuery;
  var _query = query(props.option !== "profile" ? lastArgs : _objectSpread(_objectSpread({}, lastArgs), {}, {
      nick: window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop()
    })),
    data = _query.data,
    error = _query.error,
    isLoading = _query.isLoading;

  //componentDidUpdate(prevProps) {
  /*let fetch = this.props.lastArgs?.category ? this.props.fetchAllGoodsCatsState : this.props.fetchAllGoodsState
  let fetch2 = prevProps.lastArgs?.category ? prevProps.fetchAllGoodsCatsState : prevProps.fetchAllGoodsState
  if (fetch(this.props.lastArgs).isLoading !== fetch2(prevProps.lastArgs).isLoading ||
  	fetch(this.props.lastArgs).isUninitialized !== fetch2(prevProps.lastArgs).isUninitialized ||
  	fetch(this.props.lastArgs).isError !== fetch2(prevProps.lastArgs).isError ||
  	fetch(this.props.lastArgs).data !== fetch2(prevProps.lastArgs).data) {
  	if (!fetch(this.props.lastArgs).isLoading &&
  		!fetch(this.props.lastArgs).isUninitialized) {
  		if (!fetch(this.props.lastArgs).isError) {
  			this.setState({goods: fetch(this.props.lastArgs).data.goods[0].rows, count: fetch(this.props.lastArgs).data.goods[0].count});
  			//console.log(goods);
  			/*for (let i = 0; i < goods.length; i++)
  				rows.push(<MyCard id={goods[i].id} name={goods[i].name} img={goods[i].photos} price={goods[i].price}
  					createdAt={goods[i].created_at} nickname={goods[i].user?.nickname}
  					rating={goods[i].user?.rating} />);*/
  /*if (rows.length < 12)
  	while (rows.length < 12)
  		rows.push(<div></div>)*/
  /*} else {
  	//rows = fetch(this.props.lastArgs).error.data.error;
  	this.setState({isError: fetch(this.props.lastArgs).error.data.error});
  }
  }
  else {
  //rows = 'Подождите, идет загрузка...';
  this.setState({isLoading: 'Подождите, идет загрузка...'});
  }
  }*/
  /*if (this.props !== prevProps) {
  	console.log(this.props.fetchAllGoodsState(this.props.lastArgs).data);
  }
  }*/

  //componentDidUpdate(prevProps) {
  /*
  		const { fetchAllGoods } = this.props;
  		// Start a subscription for the component to the cached data
  		const { unsubscribe } = fetchAllGoods();
  	
  		// Store the unsubscribe promise for later use
  		this.unsubscribe = unsubscribe;
  */

  /*	if (this.state.first || JSON.stringify(this.props.lastArgs) !== JSON.stringify(prevProps.lastArgs)) {
  		this.setState({first: false});
  		const searchParams = new URLSearchParams(location.search);
  		let lastArgs = { word: ((searchParams.get('query') && searchParams.get('query').length > 1) ?
  			searchParams.get('query') : ""), since: 0};
  		if (!searchParams.get('category')) {
  			if (searchParams.get('sort') == 'new' || !searchParams.get('sort')) {
  				this.props.fetchAllGoods({ ...lastArgs, sort: 'new' });
  				this.props.setLastArgs({ ...lastArgs, sort: 'new' });
  				//this.setState({ lastArgs: { ...lastArgs, sort: 'new' } });
  			}
  			else if (searchParams.get('sort') == 'popular') {
  				this.props.fetchAllGoods({ ...lastArgs, sort: 'popular' });
  				this.props.setLastArgs({ ...lastArgs, sort: 'popular' });
  				//this.setState({ lastArgs: { ...lastArgs, sort: 'popular' } });
  			}
  		}
  		else {
  			if (searchParams.get('sort') == 'new' || !searchParams.get('sort')) {
  				this.props.fetchAllGoodsCats({ ...lastArgs, sort: 'new', category: searchParams.get('category') });
  				this.props.setLastArgs({ ...lastArgs, sort: 'new', category: searchParams.get('category') });
  			}
  			else if (searchParams.get('sort') == 'popular') {
  				this.props.fetchAllGoodsCats({ ...lastArgs, sort: 'popular', category: searchParams.get('category') });
  				this.props.setLastArgs({ ...lastArgs, sort: 'popular', category: searchParams.get('category') });
  			}
  		}
  	}
  }*/

  /*componentDidUpdate(prevProps) {
  	if (this.props.goods !== prevProps.goods)
  		this.setState({goods: this.props.goods});
  }*/

  /*componentWillReceiveProps(nextProps) {
  	console.log(nextProps.goods);
  	if (!nextProps.goods) {
  		console.log(10000000000000);
  		if (!window.location.href.match("search=true")) {
  			if (window.location.href.match("sort=new") || !window.location.href.match("sort")) {
  				this.getNew();
  			}
  			else if (window.location.href.match("sort=popular")) {
  				this.getPopular();
  			}
  		}
  	}
  	else {
  		this.setState({goods: nextProps.goods});
  	}
  }*/

  /*componentWillReceiveProps(newProps) {
  	console.log(newProps.goods);
  	this.setState({ goods: newProps.goods });
  }*/

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getLocation();
  }, []);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Разрешите геолокацию чтобы видеть ближайшие товары...");
    }
  }
  function showPosition(position) {
    dispatch((0,_store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_4__.setLastArgs)(_objectSpread(_objectSpread({}, lastArgs), {}, {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    })));
  }
  function move(arg) {
    if (arg === "left") {
      dispatch((0,_store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_4__.setLastArgs)(_objectSpread(_objectSpread({}, lastArgs), {}, {
        since: lastArgs.since - 1
      })));
      /*let searchParams = new URLSearchParams(location.search);
      searchParams.set('since', (this.props.lastArgs.since - 1).toString());
      window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
    } else if (arg === "right") {
      dispatch((0,_store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_4__.setLastArgs)(_objectSpread(_objectSpread({}, lastArgs), {}, {
        since: lastArgs.since + 1
      })));
      /*let searchParams = new URLSearchParams(location.search);
      searchParams.set('since', (this.props.lastArgs.since + 1).toString());
      window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
    } else {
      dispatch((0,_store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_4__.setLastArgs)(_objectSpread(_objectSpread({}, lastArgs), {}, {
        since: arg - 1
      })));
      /*let searchParams = new URLSearchParams(location.search);
      searchParams.set('since', arg.toString());
      window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
    }
  }

  //render() {
  /*let rows = [];
  let rowsGroups = [];
  let j = 0;
  for (let i = 0; i < this.state.goods.length; i++) {
  	rows.push(<Card name={this.state.goods[i].name} img={this.state.goods[i].photos} price={this.state.goods[i].price} createdAt={this.state.goods[i].created_at} />);
  	j++;
  	if (j == 3 || i == this.state.goods.length - 1) {
  		j = 0;
  		rowsGroups.push(<div className="card-group">{rows}</div>);
  		rows = [];
  	}
  }
  return (
  	<div>
  	  {rowsGroups}
  	</div>
  );*/
  //console.log(this.state.goods);
  var rows = [];
  /*let count;*/
  //let fetchAllGoodsState = goodsAPI.endpoints.fetchAllGoods;
  //console.log(fetchAllGoodsState.select(this.state.lastArgs)(store.getState()));
  //console.log(fetchAllGoodsState);
  //console.log(this.state.lastArgs);
  if (isLoading) {
    rows = isLoading;
  } else if (error) {
    rows = error.data.error;
  } else if (data) {
    if (props.option === "favorites") {
      rows = data.favorites[0][0].rows.map(function (fav) {
        var _fav$good$user, _fav$good$user2;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MyCard, {
          id: fav.good.id,
          name: fav.good.name,
          img: fav.good.photos,
          price: fav.good.price,
          createdAt: fav.good.created_at,
          nickname: (_fav$good$user = fav.good.user) === null || _fav$good$user === void 0 ? void 0 : _fav$good$user.nickname,
          rating: (_fav$good$user2 = fav.good.user) === null || _fav$good$user2 === void 0 ? void 0 : _fav$good$user2.rating,
          distance: fav.good.distance,
          key: fav.good.id,
          isByNick: props.option === "profile"
        });
      });
    } else {
      rows = data.goods[0].rows.map(function (goods) {
        var _goods$user, _goods$user2;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MyCard, {
          id: goods.id,
          name: goods.name,
          img: goods.photos,
          price: goods.price,
          createdAt: goods.created_at,
          nickname: (_goods$user = goods.user) === null || _goods$user === void 0 ? void 0 : _goods$user.nickname,
          rating: (_goods$user2 = goods.user) === null || _goods$user2 === void 0 ? void 0 : _goods$user2.rating,
          distance: goods.distance,
          key: goods.id,
          isByNick: props.option === "profile",
          isAuthorized: data.authorized
        });
      });
    }
  }

  //console.log(this.props.fetchAllGoodsState(this.props.lastArgs));

  //console.log(fetchAllGoodsState(store.getState()));
  //console.log(this.props.activeCategoryName)
  //console.log(this.props.lastArgs);
  var count = props.option === "favorites" ? data === null || data === void 0 ? void 0 : data.favorites[0][0].count : data === null || data === void 0 ? void 0 : data.goods[0].count;
  return (
    /*#__PURE__*/
    //<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9 mb-3 mt-3">
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
      id: props.option !== "profile" ? "goods-min" : "profile-goods-min"
    }, rows), error ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: props.pageSize === 2 ? "pl-7" : null
    }, data && count > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return (lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) > 0 && move("left");
      }
    }, "<") : null, data && count > 0 && (lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) > 1 ? "..." : null, data && count > 0 && (lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return move(lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since);
      }
    }, lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) : null, data && count > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "underline",
      onClick: function onClick() {
        return move((lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 1);
      }
    }, (lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 1) : null, data && count > ((lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 1) * props.pageSize ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return move((lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 2);
      }
    }, (lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 2) : null, data && count > ((lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 2) * props.pageSize ? "..." : null, data && count > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return ((lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 1) * props.pageSize < count && move("right");
      }
    }, ">") : null))
    //</div>
  );
  //}
}

function MyCard(props) {
  var _props$nickname;
  /*constructor(props) {
  	super(props);
  }
  
  render() {*/
  /*let date = new Date(this.props.createdAt);
  let dateStr = date.toLocaleString('ru', {
         year: 'numeric',
         month: 'long',
         day: 'numeric',
         hour: 'numeric',
         minute: 'numeric'
       });
  let butImg = [];
  //console.log(this.props.img);
  for (let i = 0; i < this.props.img.length; i++) {
  	if (i == 0)
  		butImg.push(<button type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide " + i}></button>);
  	else
  		butImg.push(<button type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide-to={i} aria-label={"Slide " + i}></button>);
  }
  let img = [];
  for (let i = 0; i < this.props.img.length; i++) {
  	if (i == 0)
  		img.push(<div className="carousel-item active"><img className="d-block w-100" src={"goods_photos/" + this.props.img[i]} alt={"Slide " + i}/></div>);
  	else
  		img.push(<div className="carousel-item"><img className="d-block w-100" src={"goods_photos/" + this.props.img[i]} alt={"Slide " + i}/></div>);
  }*/

  var date = new Date(props.createdAt);
  var dateStr = date.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  return (
    /*#__PURE__*/
    /*<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3"  style={{float: 'left', height: '450px'}}>
    	<div className="card m-1">
    		<div id={"carouselGoodsIndicators" + this.props.id} data-bs-interval="false" className="carousel slide" data-bs-ride="carousel">
    		<div className="carousel-indicators">
    			{butImg}
    		</div>
    		<div className="carousel-inner">
    			{img}
    		</div>
    		<button className="carousel-control-prev" type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide="prev">
    			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
    			<span className="visually-hidden">Previous</span>
    		</button>
    		<button className="carousel-control-next" type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide="next">
    			<span className="carousel-control-next-icon" aria-hidden="true"></span>
    			<span className="visually-hidden">Next</span>
    		</button>
    		</div>
    		<div className="card-body">
    		<a href={"/goods/" + this.props.id} target="_blank" style={{color: "black"}}><h5 className="card-title">{this.props.name.length > 45 ? this.props.name.substring(0, 45) + "..." : this.props.name}</h5></a>
    		<p className="card-text">{this.props.price + "₽"}</p>
    		<p className="card-text"><small className="text-muted">{dateStr}</small></p>
    		</div>
    	</div>
    </div>*/
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Card, {
      className: "h-96 mb-5 bg-neutral-200"
    }, props.isByNick && props.isAuthorized ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
      action: "/api/goods/" + props.id,
      method: "post",
      enctype: "multipart/form-data"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "hidden",
      name: "status",
      value: "deleted"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "submit",
      className: "btn"
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Carousel, {
      className: "goods-carousel",
      slide: false,
      indicators: false
    }, props.img.map(function (img) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "/goods_photos/" + img,
        alt: "slide"
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "/goods/" + props.id,
      target: "_blank",
      style: {
        color: "black"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
      className: "break-words"
    }, props.name.length > 45 ? props.name.substring(0, 20) + "..." : props.name)), props.price ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.price + "₽") : null, props.isByNick ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: props.nickname ? "/user/" + props.nickname : undefined
    }, (_props$nickname = props.nickname) !== null && _props$nickname !== void 0 ? _props$nickname : "аноним")), props.distance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
      className: "text-muted"
    }, "Расстояние: " + (props.distance / 1000).toFixed(1) + "км")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
      className: "text-muted"
    }, dateStr)))
  );
  //}
}

/*const mapStateToProps = (state) => {
    return {
		fetchAllGoodsState: (args) => goodsAPI.endpoints.fetchAllGoods.select(args)(state),
		fetchAllGoodsCatsState: (args) => goodsAPI.endpoints.fetchAllGoodsCats.select(args)(state),
		lastArgs: state.goodsReducer.lastArgs,
		activeCategoryName: state.categoriesReducer.activeCategoryName
    };
}*/

/*goods: state.goodsReducer.goods,
isLoading: state.goodsReducer.isLoading,
error: state.goodsReducer.error*/

/*const mapDispatchToProps =  (dispatch) => {
  return {
    getGoodsAll: (word, since, sort) => dispatch(getGoodsFromAPI(word, since, sort))
  }
}*/

/*const mapDispatchToProps = {
    fetchAllGoods: goodsAPI.endpoints.fetchAllGoods.initiate,//(args) => dispatch(goodsAPI.endpoints.fetchAllGoods.initiate(args)) //(args) => dispatch(getGoodsFromAPI(args))
	fetchAllGoodsCats: goodsAPI.endpoints.fetchAllGoodsCats.initiate,
	setLastArgs: setLastArgs
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsMin);*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoodsMin);

/*ReactDOM.render(
  <GoodsMin />,
  document.getElementById('goods-min')
);

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.getGoods = this.getGoods.bind(this);
		this.getGoodsURL = this.getGoodsURL.bind(this);
	}

	componentDidMount() {
        if (window.location.href.match("search=true")) {
        	let params = new URLSearchParams(new URL(window.location.href).search);
			let query;
			let sort;
			for(let pair of params.entries()) {
			  if (pair[0] == 'query') {
			  	query = pair[1];
			  }
			  else if (pair[0] == 'sort') {
			  	sort = pair[1];
			  }
			}
        	document.getElementById("search").value = query;
			this.getGoodsURL(query, 0, sort);
		}
    }

	getGoodsURL(query, since, sort) {
		fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({ command: 'searchGoods', word: query, since: since, sort: sort })
		}).then(response => {
			response.json().then(body => {
				emitter.emit("CHANGE", body.goods[0]);
			});
		});
	}*/

/*getGoods(event) {
	fetch('/api', {
		method: 'POST',
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({ command: 'searchGoods', word: document.getElementById("search").value, since: 0 })
	}).then(response => {
		response.json().then(body => {
			emitter.emit("CHANGE", body.goods[0]);
		});
	});
}*/

/*getGoods(event) {
	const url = new URL(window.location);
	url.searchParams.set('search', 'true');
	url.searchParams.set('query', document.getElementById("search").value);
	window.history.pushState({}, '', url);
	window.location.reload();
}

render() {
	return (
		<div style={{textAlign: 'center', marginBottom: '25px'}}>
			<input type="text" class="form-control" id="search" style={{display: 'inline', width: '60vw', marginRight: '10px'}}/>
			<button type="button" class="btn btn-primary" onClick={this.getGoods} style={{display: 'inline'}}>Найти!</button>
		</div>
	);
}
}

ReactDOM.render(
 <Search />,
 document.getElementById('search-wrapper')
);

var links = [
 "Новые",
 "Подписки",
 "Популярные"
];

class NavBar extends React.Component {
 constructor(props) {
   super(props);
   this.output = this.output.bind(this);
   let params = new URLSearchParams(new URL(window.location.href).search);
let sort;
for(let pair of params.entries()) {
  if (pair[0] == 'sort') {
  	sort = pair[1];
  }
}
if (!sort || sort == 'new') {
	var active = [true];
    for (var i = 1; i < links.length; i++) {
      active.push(false);
    }
}
else if (sort == 'popular') {
	var active = [];
    for (var i = 0; i < links.length; i++) {
      active.push(false);
    }
    active[2] = true;
}
this.state = {isActive: active};
 }

 output = num => {
   var active = [];
   for (var i = 0; i < links.length; i++) {
     active.push(false);
   }
   active[num] = true;
   this.setState({ isActive : active});
 }

 render() {
   var rows = [];
   for (var i = 0; i < links.length; i++) {
     rows.push(<Nav isActive={this.state.isActive[i]} name={links[i]} func={this.output}/>);
   }
   return (
     <span>
       {rows}
       <LogReg/>
     </span>
   );
 }
}

class Nav extends React.Component {
 constructor(props) {
   super(props);

   // Эта привязка обязательна для работы `this` в колбэке.
   this.handleClick = this.handleClick.bind(this);
 }

 handleClick() {
   var num;
   for (var i = 0; i < links.length; i++) {
     if (this.props.name == links[i]) {
       num = i;
     }
   }
   this.props.func(num);
   if (this.props.name == "Популярные") {
     const url = new URL(window.location);
  url.searchParams.set('sort', 'popular');
  window.history.pushState({}, '', url);
  window.location.reload();
   }
   else if (this.props.name == "Новые") {
     const url = new URL(window.location);
  url.searchParams.set('sort', 'new');
  window.history.pushState({}, '', url);
  window.location.reload();
   }
 }

 render() {
   var ariaCurrent = this.props.isActive ? "page" : null;
   var className = 'nav-link';
   if (this.props.isActive) {
     className += ' active';
   }
   return (
     <li className="nav-item d-block d-sm-block d-md-inline-block"><a href="#" className={className} aria-current={ariaCurrent} onClick={this.handleClick}>{this.props.name}</a></li>
   );
 }
}

class LogReg extends React.Component {
 constructor(props) {
 	super(props);
 	this.state = {logout: false, confirm: null, nick: null};
 }
 componentDidMount() {
 	fetch('/api', {
		method: 'POST',
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({ command: 'isLoggedIn' })
	}).then(response => {
		response.json().then(body => {
			this.setState({logout: body.logout, confirm: body.confirm, nick: body.nick});
		});
	});
 }
 render() {
 	console.log(this.state);
 	if (!this.state.logout) {
 	  return (
    <li className="nav-item d-block d-sm-block d-md-inline-block px-3"><a href="/logreg" className="nav-link" id="logreg">Вход/Регистрация</a></li>
  );
 	}
   else {
     return (
     	<div className="dropdown d-block d-sm-block d-md-inline-block px-3">
         <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
           {this.state.nick} {this.state.confirm ? "(осуществлен вход)" : "(требуется подтверждение почты)"}
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
           {this.state.confirm ? <li><a className="dropdown-item" href="/goods/create">Продать</a></li> : ''}
           {this.state.confirm ? <li><a className="dropdown-item" href="#">Создано</a></li> : ''}
           <li><a className="dropdown-item" href="#">Настройки</a></li>
           <li><a className="dropdown-item" href="/logout">Выйти</a></li>
         </ul>
       </div>
     );
   }
 }
}

ReactDOM.render(
 <NavBar />,
 document.getElementById('nav')
);*/

/***/ }),

/***/ "./src/client/math/distance.js":
/*!*************************************!*\
  !*** ./src/client/math/distance.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcCrow": () => (/* binding */ calcCrow),
/* harmony export */   "toRad": () => (/* binding */ toRad)
/* harmony export */ });
function calcCrow(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return Value * Math.PI / 180;
}

/***/ })

}]);
//# sourceMappingURL=src_client_components_goods_min_js.bundle.js.map