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
      category: num
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
/* harmony import */ var _pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pbe/react-yandex-maps */ "./node_modules/@pbe/react-yandex-maps/dist/react-yandex-maps.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





function ProductWrapper(props) {
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

  var _useFetchGoodsByIdQue = (0,_store_services_goods_service__WEBPACK_IMPORTED_MODULE_2__.useFetchGoodsByIdQuery)(window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop()),
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
    lat: data.goods[0][0].latitude,
    lon: data.goods[0][0].longitude
  })));
  //}
}
var Product = /*#__PURE__*/function (_React$Component) {
  _inherits(Product, _React$Component);
  var _super = _createSuper(Product);
  function Product(props) {
    _classCallCheck(this, Product);
    return _super.call(this, props);
  }
  _createClass(Product, [{
    key: "render",
    value: function render() {
      //console.log(this.props.id);
      var date = new Date(this.props.createdAt);
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "text-4xl ml-24",
        href: "/"
      }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-4/5 md:3/4 lg:w-1/3 mx-auto mt-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_3__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "h-72 w-1/2 mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_3__.Carousel, {
        slide: false,
        leftControl: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null),
        rightControl: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null)
      }, this.props.img.map(function (img) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          src: "/goods_photos/" + img,
          alt: "slide"
        });
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "card-one-goods pt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
        className: "text-3xl"
      }, this.props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, this.props.desc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, this.props.price + "₽"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
        className: "text-muted"
      }, dateStr)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
        className: "text-muted"
      }, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u044B: ", this.props.views)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_4__.YMaps, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_4__.Map, {
        defaultState: {
          center: [this.props.lat, this.props.lon],
          zoom: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_4__.Placemark, {
        geometry: [this.props.lat, this.props.lon]
      })))))));

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
  }]);
  return Product;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
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
/* harmony import */ var _math_distance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../math/distance */ "./src/client/math/distance");
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
  var activeCategoryName = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.categoriesReducer.activeCategoryName;
  });
  var query;
  if (lastArgs.category) query = _store_services_goods_service__WEBPACK_IMPORTED_MODULE_2__.useFetchAllGoodsCatsQuery;else query = _store_services_goods_service__WEBPACK_IMPORTED_MODULE_2__.useFetchAllGoodsQuery;
  var _query = query(lastArgs),
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
        distance: goods.distance
      });
    });
  }

  //console.log(this.props.fetchAllGoodsState(this.props.lastArgs));

  //console.log(fetchAllGoodsState(store.getState()));
  //console.log(this.props.activeCategoryName)
  //console.log(this.props.lastArgs);
  return (
    /*#__PURE__*/
    //<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9 mb-3 mt-3">
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-3xl mb-4"
    }, activeCategoryName !== null && activeCategoryName !== void 0 ? activeCategoryName : "Все категории"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
      id: "goods-min"
    }, rows), data && data.goods[0].count > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return (lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) > 0 && move("left");
      }
    }, "<") : null, data && data.goods[0].count > 0 && (lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) > 1 ? "..." : null, data && data.goods[0].count > 0 && (lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return move(lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since);
      }
    }, lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) : null, data && data.goods[0].count > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "underline",
      onClick: function onClick() {
        return move((lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 1);
      }
    }, (lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 1) : null, data && data.goods[0].count > ((lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 1) * 4 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return move((lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 2);
      }
    }, (lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 2) : null, data && data.goods[0].count > ((lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 2) * 4 ? "..." : null, data && data.goods[0].count > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return ((lastArgs === null || lastArgs === void 0 ? void 0 : lastArgs.since) + 1) * 4 < data.goods[0].count && move("right");
      }
    }, ">") : null)
    //</div>
  );
  //}
}

function MyCard(props) {
  var _props$nickname, _props$rating;
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Carousel, {
      className: "goods-carousel",
      slide: false,
      leftControl: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null),
      rightControl: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null)
    }, props.img.map(function (img) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "goods_photos/" + img,
        alt: "slide"
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "/goods/" + props.id,
      target: "_blank",
      style: {
        color: "black"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, props.name.length > 45 ? props.name.substring(0, 20) + "..." : props.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.price + "₽"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: props.nickname ? "/users/" + props.nickname : undefined
    }, (_props$nickname = props.nickname) !== null && _props$nickname !== void 0 ? _props$nickname : "аноним"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "inline-block px-5 float-right text-lg"
    }, (_props$rating = props.rating) !== null && _props$rating !== void 0 ? _props$rating : "-", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "star",
      src: "service_photos/star.png",
      width: "20",
      className: "inline"
    }))), props.distance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Main = /*#__PURE__*/function (_React$Component) {
  _inherits(Main, _React$Component);
  var _super = _createSuper(Main);
  function Main(props) {
    _classCallCheck(this, Main);
    return _super.call(this, props);
  }
  _createClass(Main, [{
    key: "render",
    value: function render() {
      //console.log(this.props.goods);
      if (this.props.goods || window.location.pathname === "/") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "px-16 md:px-12"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "w-full sm:w-full md:w-full lg:w-1/5 inline-block text-center sm:text-center md:text-center lg:text-left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_category_categories__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "w-full sm:w-full md:w-full lg:w-4/5 inline-block float-right"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_goods_min__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_goods__WEBPACK_IMPORTED_MODULE_3__["default"], null);
      }
    }
  }]);
  return Main;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));


/***/ }),

/***/ "./src/client/math/distance":
/*!**********************************!*\
  !*** ./src/client/math/distance ***!
  \**********************************/
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
//# sourceMappingURL=src_client_components_main_js.bundle.js.map