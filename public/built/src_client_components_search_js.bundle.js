"use strict";
(self["webpackChunkfartza_ru"] = self["webpackChunkfartza_ru"] || []).push([["src_client_components_search_js"],{

/***/ "./src/client/components/search.js":
/*!*****************************************!*\
  !*** ./src/client/components/search.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducers/goods_slice */ "./src/client/store/reducers/goods_slice.js");
/* harmony import */ var _store_services_goods_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/services/goods_service */ "./src/client/store/services/goods_service.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





function Search(props) {
  /*constructor(props) {
  	super(props);
  	this.getGoods = this.getGoods.bind(this);
  	this.getGoodsURL = this.getGoodsURL.bind(this);
  	this.getGoodsEnter = this.getGoodsEnter.bind(this);
  	//this.reset = this.reset.bind(this);
  //}
  
  /*componentDidMount() {
  	let searchParams = new URLSearchParams(location.search);
         if (searchParams.get('query') && searchParams.get('query').length > 1) {
         	/*let params = new URLSearchParams(new URL(window.location.href).search);
  		let query;
  		let sort;
  		for(let pair of params.entries()) {
  		  if (pair[0] == 'query') {
  		  	query = pair[1];
  		  }
  		  else if (pair[0] == 'sort') {
  		  	sort = pair[1];
  		  }
  		}*/
  /*let searchParams = new URLSearchParams(location.search);
  let query = searchParams.get('query');
  //let sort = searchParams.get('sort');
       	document.getElementById("search").value = query;
  //this.getGoodsURL(query, 0, sort);
  }
   }*/

  /*getGoodsURL(query, since, sort) {
  	/*fetch('/api', {
  		method: 'POST',
  	    headers: {
  	      'Accept': 'application/json',
  	      'Content-Type': 'application/json'
  	    },
  	    body: JSON.stringify({ command: 'searchGoods', word: query, since: since, sort: sort })
  	}).then(response => {
  		response.json().then(body => {
  			this.props.updateGoods(body.goods[0]);
  		});
  	});*/
  /*this.props.sendAPIRequest({ command: 'searchGoods', word: query, since: since, sort: sort }, '/api', 'POST').then(resolve => {
  	if (resolve.body.goods[0].length == 0) {
  		this.props.updateGoods('Ничего не найдено!');
  		return;
  	}
  	this.props.updateGoods(resolve.body.goods[0]);
  }).catch(reject => {
  	this.props.updateGoods(reject.error);
  });*/
  /*	sort = sort ?? 'new';
  	this.props.fetchAllGoods({ word: query, since, sort });
  	this.props.setLastArgs({ word: query, since, sort });
  }
  
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

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var lastArgs = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.goodsReducer.lastArgs;
  });
  function getGoods(event) {
    /*const url = new URL(window.location);
    url.searchParams.set('search', 'true');
    url.searchParams.set('query', document.getElementById("search").value);
          url.pathname = "/";
    window.history.pushState({}, '', url);*/
    if (document.getElementById("search").value.length > 1) {
      /*let searchParams = new URLSearchParams(location.search);
      searchParams.set('query', document.getElementById("search").value);
      window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
      //window.location.reload();
      /*let params = new URLSearchParams(new URL(window.location.href).search);
      let sort;
      for(let pair of params.entries()) {
      	if (pair[0] == 'sort') {
      		sort = pair[1];
      	}
      }*/
      //let sort = searchParams.get('sort');
      //this.getGoodsURL(document.getElementById("search").value, 0, this.props.lastArgs.sort);
      dispatch((0,_store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_2__.setLastArgs)(_objectSpread(_objectSpread({}, lastArgs), {}, {
        word: document.getElementById("search").value,
        since: 0
      })));
    } else {
      /*let searchParams = new URLSearchParams(location.search);
      searchParams.set('query', "");
      window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);
      let sort = searchParams.get('sort');*/
      //this.getGoodsURL(document.getElementById("search").value, 0, this.props.lastArgs.sort);
      dispatch((0,_store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_2__.setLastArgs)(_objectSpread(_objectSpread({}, lastArgs), {}, {
        word: "",
        since: 0
      })));
    }
  }
  function getGoodsEnter(event) {
    if (event.keyCode == 13) {
      getGoods(event);
    }
  }

  /*reset(event) {
  	let searchParams = new URLSearchParams(location.search);
  	searchParams.set('query', '');
  	window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);
  	document.getElementById("search").value = "";
  	let sort = searchParams.get('sort');
  	this.getGoodsURL("", 0, sort);
  }*/

  //render() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-neutral-300 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center py-4 px-16 md:px-12 flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "search",
    type: "text",
    placeholder: "\u041D\u0430\u0439\u0442\u0438...",
    className: "flex-1 px-2 focus:outline-neutral-400",
    onKeyUp: getGoodsEnter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "bg-zinc-700 hover:bg-zinc-800 text-white font-sans py-2 px-4",
    onClick: getGoods
  }, "\u041D\u0430\u0439\u0442\u0438!")));
  //}
}

/*const mapStateToProps = (state) => {
    return {
		fetchAllGoodsState: (args) => goodsAPI.endpoints.fetchAllGoods.select(args)(state),
		lastArgs: state.goodsReducer.lastArgs
    };
}*/
/*
const mapDispatchToProps = {
    fetchAllGoods: goodsAPI.endpoints.fetchAllGoods.initiate,//(args) => dispatch(goodsAPI.endpoints.fetchAllGoods.initiate(args)) //(args) => dispatch(getGoodsFromAPI(args))
	setLastArgs: setLastArgs
}

export default connect(null, mapDispatchToProps)(Search);
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

//<button className="bg-zinc-700 hover:bg-zinc-800 text-white font-sans py-2 px-4" onClick={this.reset} >Сбросить</button>

/***/ })

}]);
//# sourceMappingURL=src_client_components_search_js.bundle.js.map