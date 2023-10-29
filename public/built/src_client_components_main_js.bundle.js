"use strict";
(self["webpackChunkfartza_ru"] = self["webpackChunkfartza_ru"] || []).push([["src_client_components_main_js"],{

/***/ "./src/client/components/category/categories.js":
/*!******************************************************!*\
  !*** ./src/client/components/category/categories.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/services/categories_service */ "./src/client/store/services/categories_service.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ "./src/client/components/category/link.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_reducers_categories_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/reducers/categories_slice */ "./src/client/store/reducers/categories_slice.js");
/* harmony import */ var _store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/reducers/goods_slice */ "./src/client/store/reducers/goods_slice.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







/*export const categories = {
	"Статьи": [
		"Новинки","Тренды","Коллаборации"
	],
	"Одежда": [
		"Б/У","Российское","ХендМейд","Обувь","Верх","Низ", "Головные уборы"
	]
};*/

function CategoriesBar(props) {
  //const [isActive, setIsActive] = useState(null);

  //ИМЯ РЕДЬЮСЕРА ЗАДАЕТСЯ В STORE.JS В CONFIGUREREDUCER А НЕ В САМОМ РЕДЬЮСЕРЕ В СТРОКЕ
  var isActive = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.categoriesReducer.activeCategory;
  });
  var lastArgs = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.goodsReducer.lastArgs;
  });
  console.log(isActive);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var _useFetchAllCategorie = (0,_store_services_categories_service__WEBPACK_IMPORTED_MODULE_1__.useFetchAllCategoriesQuery)(),
    data = _useFetchAllCategorie.data,
    error = _useFetchAllCategorie.error,
    isLoading = _useFetchAllCategorie.isLoading;

  /*useEffect(() => {
  	if (data) {
  		let searchParams = new URLSearchParams(location.search);
  		if (searchParams.get('category')) {
  			dispatch(setCategory(Number.parseInt(searchParams.get('category'))));
  			dispatch(setCategoryName(data.categories[0][0].find(cat => cat.id === Number.parseInt(searchParams.get('category'))).type));
  		}
  	}
  }, [data]);*/

  function clear() {
    dispatch((0,_store_reducers_categories_slice__WEBPACK_IMPORTED_MODULE_4__.setCategory)(null));
    dispatch((0,_store_reducers_categories_slice__WEBPACK_IMPORTED_MODULE_4__.setCategoryName)(null));
    dispatch((0,_store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_5__.setLastArgs)(_objectSpread(_objectSpread({}, lastArgs), {}, {
      category: undefined
    })));
    /*let searchParams = new URLSearchParams(location.search);
    searchParams.delete('category');
    window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
  }

  function output(num) {
    dispatch((0,_store_reducers_categories_slice__WEBPACK_IMPORTED_MODULE_4__.setCategory)(num));
    dispatch((0,_store_reducers_categories_slice__WEBPACK_IMPORTED_MODULE_4__.setCategoryName)(data.categories[0][0].find(function (cat) {
      return cat.id === num;
    }).type));
    dispatch((0,_store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_5__.setLastArgs)(_objectSpread(_objectSpread({}, lastArgs), {}, {
      category: num,
      since: 0
    })));
    /*let searchParams = new URLSearchParams(location.search);
    searchParams.set('category', num.toString());
    window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
  }

  var rows = [];
  if (data) for (var i = 0; i < data.categories[0][0].length; i++) {
    rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: data.categories[0][0][i].id,
      isActive: isActive === data.categories[0][0][i].id,
      name: data.categories[0][0][i].type,
      func: output
    }));
  }
  return (
    /*#__PURE__*/
    /*<div className="xs:w-full sm:w-full md:w-1/3 lg:w-1/4 mt-3">
    	<div className="flex p-3 bg-light">
    		<aside id="categories">
    			<div className="dropdown">
    				{rows}
    			</div>
    		</aside>
    	</div>
    </div>*/
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-lg"
    }, rows, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "-----"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: clear
    }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"))
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesBar);

/***/ }),

/***/ "./src/client/components/category/link.js":
/*!************************************************!*\
  !*** ./src/client/components/category/link.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Link(props) {
  function handleClick() {
    props.func(props.id);
  }
  var classLink = "category-link";
  if (props.isActive) {
    classLink += " active";
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: classLink,
    href: "#",
    onClick: handleClick
  }, props.name));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);

/***/ }),

/***/ "./src/client/components/goods.js":
/*!****************************************!*\
  !*** ./src/client/components/goods.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_services_goods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/services/goods_service */ "./src/client/store/services/goods_service.js");
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flowbite-react */ "./node_modules/flowbite-react/lib/esm/index.js");
/* harmony import */ var _pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pbe/react-yandex-maps */ "./node_modules/@pbe/react-yandex-maps/dist/react-yandex-maps.esm.js");
/* harmony import */ var _store_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/services/users_service */ "./src/client/store/services/users_service.js");
/* harmony import */ var _store_services_comment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/services/comment_service */ "./src/client/store/services/comment_service.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function ProductWrapper(props) {
  var _data$goods$0$0$user, _data$goods$0$0$user2;
  /*constructor(props) {
  	super(props);
  	//this.state = { goods: 0 };
  	this.getGoods = this.getGoods.bind(this);
  }
  
  componentDidMount() {
         console.log(1000);
         this.getGoods();
     }
  
  getGoods() {
  	/*const data = new FormData();
  	data.append('command', 'getGoods');
  	data.append('since', 0);*/
  //let searchParams = new URLSearchParams(location.search);
  /*fetch('/api', {
  	method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ command: 'getGoodsById', id: window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop() })
  }).then(response => {
  	response.json().then(body => {
  		this.setState({ goods: body.goods[0] });
  		//console.log(this.state.goods);
  	});
  });*/
  //id: window.location.href.match("goods/(.+)#?")[1]
  //console.log(10);
  /*this.props.fetchGoodsById(window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop());
  }*/

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    coords = _useState2[0],
    setCoords = _useState2[1];
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
    setCoords({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    });
  }
  var _useFetchGoodsByIdQue = (0,_store_services_goods_service__WEBPACK_IMPORTED_MODULE_2__.useFetchGoodsByIdQuery)({
      id: window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop(),
      args: coords
    }),
    data = _useFetchGoodsByIdQue.data,
    isLoading = _useFetchGoodsByIdQue.isLoading,
    error = _useFetchGoodsByIdQue.error;

  /*render() {
  	const id = window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop();
  	let goods = this.props.fetchGoodsByIdState(id);
  	let rows = null;
  	//console.log(goods);
  	if (!goods.isLoading &&
  		!goods.isUninitialized) {
  		if (!goods.isError) {
  			goods = goods.data.goods[0][0];
  			console.log(goods);
  			//console.log(goods);
  			rows = (<Product id={goods.id} name={goods.name} img={goods.photos} price={goods.price}
  				createdAt={goods.created_at} desc={goods.description} views={goods.views} />);
  		} else {
  			rows = goods.error.data.error;
  		}
  	}
  	else {
  		rows = 'Подождите, идет загрузка...';
  	}*/
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "mb-3 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, isLoading ? "Подождите, идет загрузка..." : error ? error.data.error : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Product, {
    id: data.goods[0][0].id,
    name: data.goods[0][0].name,
    img: data.goods[0][0].photos,
    price: data.goods[0][0].price,
    createdAt: data.goods[0][0].created_at,
    desc: data.goods[0][0].description,
    views: data.goods[0][0].views,
    nickname: (_data$goods$0$0$user = data.goods[0][0].user) === null || _data$goods$0$0$user === void 0 ? void 0 : _data$goods$0$0$user.nickname,
    rating: (_data$goods$0$0$user2 = data.goods[0][0].user) === null || _data$goods$0$0$user2 === void 0 ? void 0 : _data$goods$0$0$user2.rating,
    distance: data.goods[0][0].distance,
    lat: data.goods[0][0].latitude,
    lon: data.goods[0][0].longitude,
    login: data.login,
    pageSize: 2
  })));
  //}
}

function Product(props) {
  var _props$nickname;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    since = _useState4[0],
    setSince = _useState4[1];
  var _useIsFavoriteQuery = (0,_store_services_users_service__WEBPACK_IMPORTED_MODULE_4__.useIsFavoriteQuery)(props.id),
    favs = _useIsFavoriteQuery.data,
    loadingFavs = _useIsFavoriteQuery.isLoading,
    errorFavs = _useIsFavoriteQuery.error;
  var _useFetchCommentsQuer = (0,_store_services_comment_service__WEBPACK_IMPORTED_MODULE_5__.useFetchCommentsQuery)({
      id: props.id,
      args: {
        since: since
      }
    }),
    coms = _useFetchCommentsQuer.data,
    loadingComs = _useFetchCommentsQuer.isLoading,
    errorComs = _useFetchCommentsQuer.error;
  var _useAddToFavoritesMut = (0,_store_services_users_service__WEBPACK_IMPORTED_MODULE_4__.useAddToFavoritesMutation)(),
    _useAddToFavoritesMut2 = _slicedToArray(_useAddToFavoritesMut, 2),
    addToFavorites = _useAddToFavoritesMut2[0],
    result = _useAddToFavoritesMut2[1];
  var _useRemoveFromFavorit = (0,_store_services_users_service__WEBPACK_IMPORTED_MODULE_4__.useRemoveFromFavoritesMutation)(),
    _useRemoveFromFavorit2 = _slicedToArray(_useRemoveFromFavorit, 2),
    removeFromFavorites = _useRemoveFromFavorit2[0],
    result2 = _useRemoveFromFavorit2[1];

  //console.log(this.props.id);
  var date = new Date(props.createdAt);
  var dateStr = date.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  /*let butImg = [];
  for (let i = 0; i < this.props.img.length; i++) {
  	if (i == 0)
  		butImg.push(<button type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide " + i}></button>);
  	else
  		butImg.push(<button type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide-to={i} aria-label={"Slide " + i}></button>);
  }
  let img = [];
  for (let i = 0; i < this.props.img.length; i++) {
  	if (i == 0)
  		img.push(<div className="carousel-item active"><img className="d-block w-100" src={"/goods_photos/" + this.props.img[i]} alt={"Slide " + i}/></div>);
  	else
  		img.push(<div className="carousel-item"><img className="d-block w-100" src={"/goods_photos/" + this.props.img[i]} alt={"Slide " + i}/></div>);
  }*/

  function move(arg) {
    if (arg === "left") {
      setSince(since - 1);
      /*let searchParams = new URLSearchParams(location.search);
      searchParams.set('since', (this.props.lastArgs.since - 1).toString());
      window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
    } else if (arg === "right") {
      setSince(since + 1);
      /*let searchParams = new URLSearchParams(location.search);
      searchParams.set('since', (this.props.lastArgs.since + 1).toString());
      window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
    } else {
      setSince(arg - 1);
      /*let searchParams = new URLSearchParams(location.search);
      searchParams.set('since', arg.toString());
      window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-4/5 md:3/4 lg:w-1/3 mx-auto mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_3__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-72 w-1/2 mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_3__.Carousel, {
    slide: false,
    leftControl: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null),
    rightControl: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null)
  }, props.img.map(function (img) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "/goods_photos/" + img,
      alt: "slide"
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-one-goods pt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "text-3xl w-4/5 inline-block mr-3 break-words"
  }, props.name), props.login ? loadingFavs ? 'Подождите, идет загрузка...' : errorFavs ? errorFavs.data.error : favs.isFavorite && !errorFavs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return removeFromFavorites(props.id);
    },
    className: "mt-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    "class": "w-6 h-6 text-gray-800 dark:text-white",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 14 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return addToFavorites(props.id);
    },
    className: "mt-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    "class": "w-6 h-6 text-gray-800 dark:text-white",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 14 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"
  }))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "break-words"
  }, props.desc), props.price ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.price + "₽") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.nickname ? "/user/" + props.nickname : undefined
  }, (_props$nickname = props.nickname) !== null && _props$nickname !== void 0 ? _props$nickname : "аноним")), props.distance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
    className: "text-muted"
  }, "Расстояние: " + (props.distance / 1000).toFixed(1) + "км")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
    className: "text-muted"
  }, dateStr)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
    className: "text-muted"
  }, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u044B: ", props.views)), props.lat && props.lon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_6__.YMaps, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_6__.Map, {
    defaultState: {
      center: [props.lat, props.lon],
      zoom: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_6__.Placemark, {
    geometry: [props.lat, props.lon]
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-2xl"
  }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438:"), props.login ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "/api/comments/" + props.id,
    method: "post",
    enctype: "multipart/form-data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    name: "text",
    className: "border border-neutral-400"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btn"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")) : null, loadingComs ? 'Подождите, идет загрузка...' : errorComs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
    className: "text-muted"
  }, errorComs.data.error) : coms.comments[0].rows.map(function (com) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Comment, {
      text: com.text,
      createdAt: com.created_at,
      nick: com.user.nickname,
      avatar: com.user.avatar
    });
  }), errorComs ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, coms && coms.comments[0].count > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return since > 0 && move("left");
    }
  }, "<") : null, coms && coms.comments[0].count > 0 && since > 1 ? "..." : null, coms && coms.comments[0].count > 0 && since > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return move(since);
    }
  }, since) : null, coms && coms.comments[0].count > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "underline",
    onClick: function onClick() {
      return move(since + 1);
    }
  }, since + 1) : null, coms && coms.comments[0].count > (since + 1) * props.pageSize ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return move(since + 2);
    }
  }, since + 2) : null, coms && coms.comments[0].count > (since + 2) * props.pageSize ? "..." : null, coms && coms.comments[0].count > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return (since + 1) * props.pageSize < coms.comments[0].count && move("right");
    }
  }, ">") : null)))));

  /*<div id={"carouselGoodsIndicators" + this.props.id} data-bs-interval="false" className="carousel slide col-xs-12 col-sm-12 col-md-6 col-lg-6" data-bs-ride="carousel" style={{float: 'left'}}>
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
  </div>*/
}

function Comment(props) {
  var date = new Date(props.createdAt);
  var dateStr = date.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "my-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/user/" + props.nick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      height: '35px'
    },
    className: "align-middle inline-block"
  }, props.nick), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: props.avatar ? "/avatars/" + props.avatar : "/service_photos/default_avatar.jpg",
    alt: "avatar",
    width: "35",
    height: "35",
    className: "inline-block"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl border-y border-neutral-400 break-words"
  }, props.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
    className: "text-muted"
  }, dateStr)));
}

/*const mapStateToProps = (state) => {
    return {
		fetchGoodsByIdState: (id) => goodsAPI.endpoints.fetchGoodsById.select(id)(state)
    };
}

const mapDispatchToProps = {
    fetchGoodsById: goodsAPI.endpoints.fetchGoodsById.initiate//(args) => dispatch(goodsAPI.endpoints.fetchAllGoods.initiate(args)) //(args) => dispatch(getGoodsFromAPI(args))
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductWrapper);*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductWrapper);

/*class SearchGoods extends React.Component {
	constructor(props) {
		super(props);
	}

	goToIndex(event) {
		window.open('/?search=true&query=' + document.getElementById("search").value);
	}

	render() {
		return (
			<div style={{textAlign: 'center', marginBottom: '25px'}}>
				<input type="text" class="form-control" id="search" style={{display: 'inline', width: '60vw', marginRight: '10px'}}/>
				<button type="button" class="btn btn-primary" onClick={this.goToIndex} style={{display: 'inline'}}>Найти!</button>
			</div>
		);
	}
}*/

/*ReactDOM.render(
  <ProductWrapper />,
  document.getElementById('goods-min')
);

ReactDOM.render(
  <SearchGoods />,
  document.getElementById('search-wrapper')
);*/

/***/ }),

/***/ "./src/client/components/main.js":
/*!***************************************!*\
  !*** ./src/client/components/main.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _goods_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods_min */ "./src/client/components/goods_min.js");
/* harmony import */ var _category_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category/categories */ "./src/client/components/category/categories.js");
/* harmony import */ var _goods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goods */ "./src/client/components/goods.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





function Main(props) {
  var activeCategoryName = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.categoriesReducer.activeCategoryName;
  });
  //console.log(this.props.goods);
  if (props.goods || window.location.pathname === "/") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "px-16 md:px-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-full sm:w-full md:w-full lg:w-1/5 inline-block text-center sm:text-center md:text-center lg:text-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_category_categories__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-full sm:w-full md:w-full lg:w-4/5 inline-block float-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-3xl mb-4"
    }, activeCategoryName !== null && activeCategoryName !== void 0 ? activeCategoryName : "Все категории"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_goods_min__WEBPACK_IMPORTED_MODULE_1__["default"], {
      pageSize: 4
    })));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_goods__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }
}

/***/ })

}]);
//# sourceMappingURL=src_client_components_main_js.bundle.js.map