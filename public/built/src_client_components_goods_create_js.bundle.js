"use strict";
(self["webpackChunkfartza_ru"] = self["webpackChunkfartza_ru"] || []).push([["src_client_components_goods_create_js"],{

/***/ "./src/client/components/goods_create.js":
/*!***********************************************!*\
  !*** ./src/client/components/goods_create.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-currency-input-field */ "./node_modules/react-currency-input-field/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/services/categories_service */ "./src/client/store/services/categories_service.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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





var fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png'];
var GoodsCreateForm = /*#__PURE__*/function (_React$Component) {
  _inherits(GoodsCreateForm, _React$Component);
  var _super = _createSuper(GoodsCreateForm);
  function GoodsCreateForm(props) {
    var _this;
    _classCallCheck(this, GoodsCreateForm);
    _this = _super.call(this, props);
    _this.updateImageDisplay = _this.updateImageDisplay.bind(_assertThisInitialized(_this));
    _this.validFileType = _this.validFileType.bind(_assertThisInitialized(_this));
    _this.validFileSize = _this.validFileSize.bind(_assertThisInitialized(_this));
    _this.returnFileSize = _this.returnFileSize.bind(_assertThisInitialized(_this));
    _this.load = _this.load.bind(_assertThisInitialized(_this));
    _this.inputName = _this.inputName.bind(_assertThisInitialized(_this));
    _this.getLocation = _this.getLocation.bind(_assertThisInitialized(_this));
    _this.showPosition = _this.showPosition.bind(_assertThisInitialized(_this));
    _this.state = {
      first: true,
      errorName: false,
      errorImages: true
    };
    return _this;
  }
  _createClass(GoodsCreateForm, [{
    key: "getLocation",
    value: function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        alert("Разрешите геолокацию чтобы видеть ближайшие товары...");
      }
    }
  }, {
    key: "showPosition",
    value: function showPosition(position) {
      document.getElementById("latitude").value = position.coords.latitude;
      document.getElementById("longitude").value = position.coords.longitude;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.getElementById("latitude").value = "";
      document.getElementById("longitude").value = "";
      this.props.fetchAllCategories();
    }
  }, {
    key: "validFileSize",
    value: function validFileSize(file) {
      console.log(file);
      if (file.size <= 1024 * 1024) {
        return true;
      }
      return false;
    }
  }, {
    key: "validFileType",
    value: function validFileType(file) {
      for (var i = 0; i < fileTypes.length; i++) {
        if (file.type === fileTypes[i]) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "returnFileSize",
    value: function returnFileSize(number) {
      if (number < 1024) {
        return number + 'bytes';
      } else if (number > 1024 && number < 1048576) {
        return (number / 1024).toFixed(1) + 'KB';
      } else if (number > 1048576) {
        return (number / 1048576).toFixed(1) + 'MB';
      }
    }
  }, {
    key: "load",
    value: function load(img) {
      //console.log(img);
      img.nextSibling.textContent += ', ширина и высота: ' + img.width + 'x' + img.height;
    }
  }, {
    key: "updateImageDisplay",
    value: function updateImageDisplay(event) {
      var _this2 = this;
      console.log("upd");
      var input = document.querySelector('#images');
      var preview = document.querySelector('.preview');
      while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
      }
      var curFiles = input.files;
      if (curFiles.length === 0) {
        var para = document.createElement('p');
        para.textContent = '';
        preview.appendChild(para);
        console.log(0);
        this.setState({
          errorImages: true
        });
      } else if (curFiles.length > 3) {
        input.value = '';
        var para = document.createElement('small');
        para.classList.add("form-text");
        para.classList.add("text-danger");
        para.textContent = 'Слишком много файлов!';
        preview.appendChild(para);
        console.log(1);
        this.setState({
          errorImages: true
        });
      } else {
        var list = document.createElement('ol');
        preview.appendChild(list);
        var para = [null, null, null];
        var image = [null, null, null];
        var listItem = [null, null, null];
        console.log(2);
        var err = false;
        for (var i = 0; i < curFiles.length; i++) {
          listItem[i] = document.createElement('li');
          para[i] = document.createElement('p');
          para[i].style.display = 'inline-block';
          para[i].style.width = "80%";
          console.log(curFiles[i]);
          console.log(!this.validFileType(curFiles[i]));
          if (!this.validFileType(curFiles[i])) {
            para[i].textContent = 'Имя файла: ' + curFiles[i].name + ' - Неверный формат файла, выберите файлы заново';
            listItem[i].appendChild(para[i]);
            console.log("hey");
            err = true;
          } else if (!this.validFileSize(curFiles[i])) {
            para[i].textContent = 'Имя файла: ' + curFiles[i].name + ' - Фай слишком большой, выберите файлы заново';
            listItem[i].appendChild(para[i]);
            console.log("hey");
            err = true;
          } else {
            //console.log(curFiles[i]);
            image[i] = document.createElement('img');
            image[i].style.display = 'inline-block';
            image[i].style.width = "20%";
            image[i].src = window.URL.createObjectURL(curFiles[i]);
            listItem[i].appendChild(image[i]);
            para[i].textContent = 'Имя файла: ' + curFiles[i].name + ', размер файла: ' + this.returnFileSize(curFiles[i].size);
            image[i].onload = function (event) {
              return _this2.load(event.target);
            };
            listItem[i].appendChild(para[i]);
          }
          list.appendChild(listItem[i]);
        }
        if (err) {
          input.value = '';
          this.setState({
            errorImages: true
          });
        } else {
          this.setState({
            errorImages: false
          });
        }
      }
    }
  }, {
    key: "inputName",
    value: function inputName(event) {
      if (event.target.value.length > 127 || event.target.value.length < 3) {
        this.setState({
          errorName: true
        });
      } else {
        this.setState({
          errorName: false
        });
      }
      this.setState({
        first: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$fetchAllC,
        _this3 = this;
      console.log(this.props.fetchAllCategoriesState().data);
      var className = "form-text text-danger";
      if (!this.state.errorName) {
        className += " d-none";
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "col-md-3 col-lg-4 float-md-start float-lg-start"
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 float-md-start float-lg-start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", {
        style: {
          textAlign: 'center'
        }
      }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u043E\u0432\u0430\u0440"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
        action: "/api/goods/create",
        method: "post",
        autoComplete: "off",
        enctype: "multipart/form-data"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        "for": "name",
        className: "form-label"
      }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("textarea", {
        className: "form-control",
        id: "name",
        name: "name",
        rows: "2",
        onInput: this.inputName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("small", {
        className: className
      }, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0438\u043B\u0438 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0434\u043B\u0438\u043D\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        "for": "description",
        className: "form-label"
      }, "\u0411\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("textarea", {
        className: "form-control",
        id: "description",
        rows: "3",
        name: "description"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        "for": "images",
        className: "form-label"
      }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        title: "",
        className: "form-control",
        type: "file",
        id: "images",
        name: "images",
        onChange: this.updateImageDisplay,
        accept: ".jpg, .jpeg, .png",
        multiple: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "preview"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        "for": "price",
        "class": "form-label"
      }, "\u0426\u0435\u043D\u0430 \u0432 \u0440\u0443\u0431\u043B\u044F\u0445"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_currency_input_field__WEBPACK_IMPORTED_MODULE_0__["default"], {
        id: "price",
        name: "price",
        decimalsLimit: 2,
        maxLength: 12
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        "for": "cat",
        className: "form-label"
      }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
        name: "cat",
        id: "cat",
        className: "form-control"
      }, (_this$props$fetchAllC = this.props.fetchAllCategoriesState().data) === null || _this$props$fetchAllC === void 0 ? void 0 : _this$props$fetchAllC.categories[0][0].map(function (cat) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
          value: cat.id
        }, cat.type);
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        onChange: function onChange(e) {
          if (e.target.value) {
            _this3.getLocation();
          } else {
            document.getElementById("latitude").value = "";
            document.getElementById("longitude").value = "";
          }
        },
        type: "checkbox"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "hidden",
        id: "latitude",
        name: "latitude"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "hidden",
        id: "longitude",
        name: "longitude"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        type: "submit",
        className: "btn",
        disabled: this.state.errorImages || this.state.first || this.state.errorName
      }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")))));
    }
  }]);
  return GoodsCreateForm;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));
/*const mapDispatchToProps =  (dispatch) => {
  return {
    getGoodsAll: (word, since, sort) => dispatch(getGoodsFromAPI(word, since, sort))
  }
}*/
var mapStateToProps = function mapStateToProps(state) {
  return {
    fetchAllCategoriesState: function fetchAllCategoriesState() {
      return _store_services_categories_service__WEBPACK_IMPORTED_MODULE_2__.categoriesAPI.endpoints.fetchAllCategories.select()(state);
    }
  };
};
var mapDispatchToProps = {
  fetchAllCategories: _store_services_categories_service__WEBPACK_IMPORTED_MODULE_2__.categoriesAPI.endpoints.fetchAllCategories.initiate //(args) => dispatch(goodsAPI.endpoints.fetchAllGoods.initiate(args)) //(args) => dispatch(getGoodsFromAPI(args))
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(GoodsCreateForm));

/*ReactDOM.render(
  <GoodsCreateForm />,
  document.getElementById('goods-create')
);
onValueChange={(value, name) => console.log(value, name)}
placeholder="Цена товара..."
defaultValue={1000}
<SelectSearch options={this.props.fetchAllCategoriesState().data?.categories[0][0].map(cat => {return {name: cat.type
	, value: cat.id}})} search={true}
	filterOptions={[(options, query) => {
		// Do no filtering, just return all options
		//return options.find(option => option.name.includes(filter));
		//console.log(query)
		return options.filter(option => option.name.toLowerCase().includes(query.toLowerCase()));
	}]} name={"cat"}/>*/

/***/ })

}]);
//# sourceMappingURL=src_client_components_goods_create_js.bundle.js.map