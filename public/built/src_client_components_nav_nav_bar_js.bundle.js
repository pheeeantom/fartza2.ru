"use strict";
(self["webpackChunkfartza_ru"] = self["webpackChunkfartza_ru"] || []).push([["src_client_components_nav_nav_bar_js"],{

/***/ "./src/client/components/nav/links.js":
/*!********************************************!*\
  !*** ./src/client/components/nav/links.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "links": () => (/* binding */ links)
/* harmony export */ });
var links = ["Новые", "Подписки", "Ближайшие"];

/***/ }),

/***/ "./src/client/components/nav/logreg.js":
/*!*********************************************!*\
  !*** ./src/client/components/nav/logreg.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/services/users_service */ "./src/client/store/services/users_service.js");
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flowbite-react */ "./node_modules/flowbite-react/lib/esm/index.js");



function LogReg(props) {
  var _useCurrentUserQuery = (0,_store_services_users_service__WEBPACK_IMPORTED_MODULE_1__.useCurrentUserQuery)(),
    data = _useCurrentUserQuery.data,
    isLoading = _useCurrentUserQuery.isLoading,
    error = _useCurrentUserQuery.error;

  //this.state = {logout: false, confirm: null, nick: null};

  //componentDidMount() {
  /*fetch('/api', {
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
    });*/
  //}
  //console.log(this.state);
  //if (!logout) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", {
    className: "lg:hidden"
  }), isLoading ? "Подождите, идет загрузка..." : error ? error.data.error === "Not authorized" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "inline-block align-middle mt-1 md:mt-3 lg:mt-0 py-1 px-2 lg:ml-20 w-auto bg-white hover:bg-neutral-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "text-black text-lg",
    onClick: function onClick() {
      return window.open("/logreg", "_self");
    }
  }, "\u0412\u0445\u043E\u0434/\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F")) : error.data.error : data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "inline-block align-middle mt-1 md:mt-3 lg:mt-0 py-1 px-2 lg:ml-20 w-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    label: data.user.nickname + " (осуществлен вход)",
    "class": "bg-white hover:bg-neutral-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
    as: "a",
    href: "/create",
    target: "_blank"
  }, "\u041F\u0440\u043E\u0434\u0430\u0442\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
    as: "a",
    href: "/user/" + data.user.nickname,
    target: "_blank"
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
    as: "a",
    href: "/logout",
    target: "_blank"
  }, "\u0412\u044B\u0439\u0442\u0438"))) : null);
  //}
  /*else {
    return (
      <div className="dropdown d-block d-sm-block d-md-inline-block px-3">
        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          {nick} {confirm ? "(осуществлен вход)" : "(требуется подтверждение почты)"}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {confirm ? <li><a className="dropdown-item" href="/goods/create">Продать</a></li> : ''}
          {confirm ? <li><a className="dropdown-item" href="#">Создано</a></li> : ''}
          <li><a className="dropdown-item" href="#">Настройки</a></li>
          <li><a className="dropdown-item" href="/logout">Выйти</a></li>
        </ul>
      </div>
    );*
  }*/
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogReg);

/***/ }),

/***/ "./src/client/components/nav/nav.js":
/*!******************************************!*\
  !*** ./src/client/components/nav/nav.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/reducers/goods_slice */ "./src/client/store/reducers/goods_slice.js");
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./links */ "./src/client/components/nav/links.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


//import { connect } from "react-redux";

//import { goodsAPI } from "../../store/services/goods_service";



function Nav(props) {
  /*constructor(props) {
      super(props);
        //this.state = { lastArgs: null };
        // Эта привязка обязательна для работы `this` в колбэке.
      this.handleClick = this.handleClick.bind(this);
  }*/

  var lastArgs = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.goodsReducer.lastArgs;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  function handleClick() {
    var num;
    for (var i = 0; i < _links__WEBPACK_IMPORTED_MODULE_2__.links.length; i++) {
      if (props.name == _links__WEBPACK_IMPORTED_MODULE_2__.links[i]) {
        num = i;
      }
    }
    props.func(num);
    //let [searchParams, setSearchParams] = useSearchParams();
    //const searchParams = new URLSearchParams(location.search);
    /*let lastArgs = { word: ((searchParams.get('query') && searchParams.get('query').length > 1) ?
    searchParams.get('query') : ""), since: 0};*/
    if (props.name == "Популярные") {
      /*const url = new URL(window.location);
      url.searchParams.set('sort', 'popular');
      window.history.pushState({}, '', url);
      window.location.reload();*/
      /*searchParams.set('sort', 'popular');
      window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
      /*this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'popular' }, '/api', 'POST').then(resolve => {
          if (resolve.body.goods[0].length == 0) {
          this.props.updateGoods('Ничего не найдено!');
          return;
          }
          this.props.updateGoods(resolve.body.goods[0]);
      }).catch(reject => {
          this.props.updateGoods(reject.error);
      });*/
      //this.props.fetchAllGoods({ ...lastArgs, sort: 'popular' });
      dispatch((0,_store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_1__.setLastArgs)(_objectSpread(_objectSpread({}, lastArgs), {}, {
        sort: 'popular',
        since: 0
      })));
    } else if (props.name == "Новые") {
      /*const url = new URL(window.location);
      url.searchParams.set('sort', 'new');
      window.history.pushState({}, '', url);
      window.location.reload();*/
      //searchParams.set('sort', 'new');
      //window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);
      /*this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'new' }, '/api', 'POST').then(resolve => {
          if (resolve.body.goods[0].length == 0) {
          this.props.updateGoods('Ничего не найдено!');
          return;
          }
          this.props.updateGoods(resolve.body.goods[0]);
      }).catch(reject => {
          this.props.updateGoods(reject.error);
      });*/
      //this.props.fetchAllGoods({ ...lastArgs, sort: 'new' });
      dispatch((0,_store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_1__.setLastArgs)(_objectSpread(_objectSpread({}, lastArgs), {}, {
        sort: 'new',
        since: 0
      })));
    } else if (props.name == 'Ближайшие') {
      dispatch((0,_store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_1__.setLastArgs)(_objectSpread(_objectSpread({}, lastArgs), {}, {
        sort: 'distance',
        since: 0
      })));
    } else if (props.name == 'Подписки') {
      dispatch((0,_store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_1__.setLastArgs)(_objectSpread(_objectSpread({}, lastArgs), {}, {
        sort: 'subscriptions',
        since: 0
      })));
    }
  }
  var className = 'block md:inline-block align-middle px-2 mx-2 md:border-2 rounded-sm hover:border-neutral-300';
  if (props.isActive) {
    className += ' rounded-tl-lg';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "text-white text-lg hover:text-neutral-300",
    onClick: handleClick
  }, props.name));
}

/*const mapStateToProps = (state) => {
    return {
		fetchAllGoodsState: (args) => goodsAPI.endpoints.fetchAllGoods.select(args)(state),
		lastArgs: state.goodsReducer.lastArgs
    };
}*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/*const mapDispatchToProps = {
    fetchAllGoods: goodsAPI.endpoints.fetchAllGoods.initiate,//(args) => dispatch(goodsAPI.endpoints.fetchAllGoods.initiate(args)) //(args) => dispatch(getGoodsFromAPI(args))
	setLastArgs: setLastArgs
}

export default connect(null, mapDispatchToProps)(Nav);*/

/***/ }),

/***/ "./src/client/components/nav/nav_bar.js":
/*!**********************************************!*\
  !*** ./src/client/components/nav/nav_bar.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/client/components/nav/nav.js");
/* harmony import */ var _logreg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logreg */ "./src/client/components/nav/logreg.js");
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./links */ "./src/client/components/nav/links.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





//import '../../styles/output.css';

function NavBar(props) {
  /*constructor(props) {
    super(props);
    this.output = this.output.bind(this);
    let active = [true];
    for (let i = 1; i < links.length; i++) {
      active.push(false);
    }
    this.state = {isActive: active};
  }*/

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*[true].concat(Array(links.length - 1).fill(false))*/[true, false, false]),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];

  /*componentDidMount() {
    const searchParams = new URLSearchParams(location.search);
    let sort = searchParams.get('sort');
    if (sort == 'popular') {
        let active = [];
        for (let i = 0; i < links.length; i++) {
          active.push(false);
        }
        active[2] = true;
        this.setState({isActive: active});
    }
  }*/

  /*useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    let sort = searchParams.get('sort');
    if (sort == 'popular') {
        let active = [];
        for (let i = 0; i < links.length; i++) {
          active.push(false);
        }
        active[2] = true;
        setIsActive(active);
    }
  }, [])*/

  function output(num) {
    var active = [];
    for (var i = 0; i < _links__WEBPACK_IMPORTED_MODULE_3__.links.length; i++) {
      active.push(false);
    }
    active[num] = true;
    setIsActive(active);
  }
  var rows = [];
  for (var i = 0; i < _links__WEBPACK_IMPORTED_MODULE_3__.links.length; i++) {
    rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isActive: isActive[i],
      name: _links__WEBPACK_IMPORTED_MODULE_3__.links[i],
      func: output,
      updateGoods: props.updateGoods,
      getGoodsFromAPI: props.getGoodsFromAPI
    }));
  }
  var tiles;
  if (!props.disableTiles) {
    tiles = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "block md:flex-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
      className: "h-full"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "text-center lg:text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, !props.without && rows, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_logreg__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "md:flex sticky px-12 py-6 bg-zinc-700 w-full md:relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/",
    className: "block pb-2 md:pb-0 md:flex-none no-underline text-center md:text-left md:absolute md:top-1/3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-2xl text-white font-sans"
  }, "FARTZA")), tiles);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ })

}]);
//# sourceMappingURL=src_client_components_nav_nav_bar_js.bundle.js.map