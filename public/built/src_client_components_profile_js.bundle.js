"use strict";
(self["webpackChunkfartza_ru"] = self["webpackChunkfartza_ru"] || []).push([["src_client_components_profile_js"],{

/***/ "./src/client/components/profile.js":
/*!******************************************!*\
  !*** ./src/client/components/profile.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/services/users_service */ "./src/client/store/services/users_service.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _goods_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods_min */ "./src/client/components/goods_min.js");
/* harmony import */ var _store_services_goods_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/services/goods_service */ "./src/client/store/services/goods_service.js");
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flowbite-react */ "./node_modules/flowbite-react/lib/esm/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Profile(props) {
  var _useFetchUserByNickQu = (0,_store_services_users_service__WEBPACK_IMPORTED_MODULE_0__.useFetchUserByNickQuery)(window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop()),
    data = _useFetchUserByNickQu.data,
    isLoading = _useFetchUserByNickQu.isLoading,
    error = _useFetchUserByNickQu.error;
  var _useGetSubscriptionsQ = (0,_store_services_users_service__WEBPACK_IMPORTED_MODULE_0__.useGetSubscriptionsQuery)(),
    subs = _useGetSubscriptionsQ.data,
    loadingSubs = _useGetSubscriptionsQ.isLoading,
    errorSubs = _useGetSubscriptionsQ.error;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var _useSubscribeMutation = (0,_store_services_users_service__WEBPACK_IMPORTED_MODULE_0__.useSubscribeMutation)(),
    _useSubscribeMutation2 = _slicedToArray(_useSubscribeMutation, 2),
    subscribe = _useSubscribeMutation2[0],
    result = _useSubscribeMutation2[1];
  var _useUnsubscribeMutati = (0,_store_services_users_service__WEBPACK_IMPORTED_MODULE_0__.useUnsubscribeMutation)(),
    _useUnsubscribeMutati2 = _slicedToArray(_useUnsubscribeMutati, 2),
    unsubscribe = _useUnsubscribeMutati2[0],
    result2 = _useUnsubscribeMutati2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    inputs = _useState4[0],
    setInputs = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    valid = _useState6[0],
    setValid = _useState6[1];
  function validate(e) {
    var maxfilesize = 1024 * 1024,
      // 1 Mb
      filesize = e.target.files[0].size,
      fileName = e.target.files[0].name,
      warningel = document.getElementById('lbError');
    if (fileName.split('.').pop() !== 'png' && fileName.split('.').pop() !== 'jpg' && fileName.split('.').pop() !== 'jpeg') {
      warningel.innerHTML = "Файл должен быть .png, .jpg либо .jpeg";
      setValid(true);
    } else if (filesize > maxfilesize) {
      warningel.innerHTML = "Файл слишком большой: " + filesize + ". Максимальный размер: " + maxfilesize;
      setValid(true);
    } else {
      warningel.innerHTML = '';
      setValid(false);
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (data) setInputs({
      name: data.user[0][0].name,
      surname: data.user[0][0].surname,
      about: data.user[0][0].about,
      city: data.user[0][0].city,
      birthday: data.user[0][0].birthday
    });
  }, [data]);
  function input(e) {
    setInputs(_objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, e.target.id, e.target.value)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, isLoading ? 'Подождите, идет загрузка...' : error ? error.data.error : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "border-b-8 border-neutral-300 text-4xl pt-12 pl-5 pb-2"
  }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"), data.login ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "border-b-4 border-neutral-300 mb-2 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "text-xl inline-block p-1 mx-2 " + (activeTab === 0 ? "bg-neutral-400" : "bg-neutral-300"),
    onClick: function onClick() {
      return setActiveTab(0);
    }
  }, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "text-xl inline-block p-1 mx-2 " + (activeTab === 1 ? "bg-neutral-400" : "bg-neutral-300"),
    onClick: function onClick() {
      return setActiveTab(1);
    }
  }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "text-xl inline-block p-1 mx-2 " + (activeTab === 2 ? "bg-neutral-400" : "bg-neutral-300"),
    onClick: function onClick() {
      return setActiveTab(2);
    }
  }, "\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "text-xl inline-block p-1 mx-2 " + (activeTab === 3 ? "bg-neutral-400" : "bg-neutral-300"),
    onClick: function onClick() {
      return setActiveTab(3);
    }
  }, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: activeTab === 0 ? "block" : "hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "w-11/12 md:w-3/5 inline-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_goods_min__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageSize: 2,
    option: "profile"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "w-full md:w-2/5 inline-block float-right pl-16 pt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
    className: "inline-block text-5xl align-top",
    style: {
      height: '115px'
    }
  }, data.user[0][0].nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    className: "inline-block float-right mr-10",
    width: "115",
    height: "115",
    src: data.user[0][0].avatar ? "/avatars/" + data.user[0][0].avatar : "/service_photos/default_avatar.jpg",
    alt: "avatar"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "text-3xl break-words"
  }, data.user[0][0].name && data.user[0][0].surname ? data.user[0][0].name + " " + data.user[0][0].surname : data.user[0][0].name ? data.user[0][0].name : "Аноним"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "text-xl mt-8 break-words"
  }, data.user[0][0].about), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "text-3xl mt-8 break-words"
  }, data.user[0][0].city), data.login === false ? loadingSubs ? 'Подождите, идет загрузка...' : errorSubs ? errorSubs.data.error : subs.subscriptions[0][0].find(function (e) {
    return e.userId === data.user[0][0].id;
  }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    onClick: function onClick() {
      return unsubscribe(data.user[0][0].id);
    },
    className: "mt-8 px-4 py-1.5 border border-neutral-400 bg-neutral-50 hover:text-white hover:bg-neutral-600"
  }, "\u041E\u0442\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    onClick: function onClick() {
      return subscribe(data.user[0][0].id);
    },
    className: "mt-8 px-4 py-1.5 border border-neutral-400 bg-neutral-50 hover:text-white hover:bg-neutral-600"
  }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F") : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: activeTab === 1 ? "block" : "hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
    action: "/api/users/" + data.user[0][0].id,
    method: "POST",
    enctype: "multipart/form-data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "md:mx-auto md:w-1/4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    "for": "name",
    className: "inline-block w-1/3"
  }, "\u0418\u043C\u044F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    value: inputs === null || inputs === void 0 ? void 0 : inputs.name,
    onInput: input,
    name: "name",
    id: "name",
    className: "w-2/3 border border-neutral-400"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    "for": "surname",
    className: "inline-block w-1/3"
  }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    value: inputs === null || inputs === void 0 ? void 0 : inputs.surname,
    onInput: input,
    name: "surname",
    id: "surname",
    className: "w-2/3 border border-neutral-400"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    className: "inline-block mr-2"
  }, "\u0410\u0432\u0430\u0442\u0430\u0440\u043A\u0430:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    onChange: validate,
    type: "file",
    name: "photo",
    accept: ".png,.jpg,.jpeg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    id: "lbError",
    className: "text-red-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    "for": "about",
    className: "inline-block w-1/3"
  }, "\u0411\u0438\u043E:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("textarea", {
    value: inputs === null || inputs === void 0 ? void 0 : inputs.about,
    onInput: input,
    name: "about",
    id: "about",
    className: "w-2/3 border border-neutral-400"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    "for": "city",
    className: "inline-block w-1/3"
  }, "\u0413\u043E\u0440\u043E\u0434:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    value: inputs === null || inputs === void 0 ? void 0 : inputs.city,
    onInput: input,
    name: "city",
    id: "city",
    className: "w-2/3 border border-neutral-400"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    "for": "birthday",
    className: "inline-block w-1/3"
  }, "\u0414\u0440:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    value: inputs === null || inputs === void 0 ? void 0 : inputs.birthday,
    onInput: input,
    name: "birthday",
    type: "date",
    id: "birthday",
    className: "w-2/3 border border-neutral-400"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    className: "inline-block w-1/3"
  }, "\u041F\u0430\u0440\u043E\u043B\u044C:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    name: "pass",
    className: "w-2/3 border border-neutral-400",
    pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "text-center my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    disabled: valid,
    type: "submit",
    className: "px-4 py-1.5 border border-neutral-400 bg-neutral-50 hover:text-white hover:bg-neutral-600"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: activeTab === 2 ? "block" : "hidden"
  }, loadingSubs ? 'Подождите, идет загрузка...' : errorSubs ? errorSubs.data.error : subs.subscriptions[0][0].map(function (e) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      width: "40",
      height: "40",
      src: e.user.avatar ? "/avatars/" + e.user.avatar : "/service_photos/default_avatar.jpg",
      className: "inline-block mx-10",
      alt: "avatar"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "text-lg inline-block mr-10 md:mr-40"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: "/user/" + e.user.nickname
    }, e.user.nickname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
      onClick: function onClick() {
        return unsubscribe(e.user.id);
      },
      className: "mt-8 px-4 py-1.5 border border-neutral-400 bg-neutral-50 hover:text-white hover:bg-neutral-600"
    }, "\u041E\u0442\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: activeTab === 3 ? "block" : "hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_goods_min__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageSize: 4,
    option: "favorites"
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ })

}]);
//# sourceMappingURL=src_client_components_profile_js.bundle.js.map