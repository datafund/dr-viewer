"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _jquery = _interopRequireDefault(require("jquery"));

require("./ConsentViewer.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

window.jQuery = _jquery.default;
window.$ = _jquery.default;
global.jQuery = _jquery.default;

var ConsentViewer =
/*#__PURE__*/
function (_Component) {
  _inherits(ConsentViewer, _Component);

  function ConsentViewer(props) {
    var _this2;

    _classCallCheck(this, ConsentViewer);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ConsentViewer).call(this, props));
    _this2.state = {
      data: _this2.props.data ? _this2.props.data : {},
      htmlData: ""
    };
    _this2.objectToTable = _this2.objectToTable.bind(_assertThisInitialized(_this2));
    _this2.renderHtmlTable = _this2.renderHtmlTable.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(ConsentViewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //this.objectToTable(this.state.data);
      this.renderHtmlTable();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      this.setState({
        data: nextProps.data
      });
      this.renderHtmlTable();
    }
  }, {
    key: "objectToTable",
    value: function objectToTable(obj) {
      var table = (0, _jquery.default)('<table>').append('<tbody>');

      for (var key in obj) {
        var tr = (0, _jquery.default)('<tr>');
        var th = (0, _jquery.default)('<th>').append(key);
        var td = (0, _jquery.default)('<td>');
        var value = void 0;

        if (_typeof(obj[key]) == 'object') {
          if (obj[key]) {
            value = this.objectToTable(obj[key]);
          } else {
            value = '<span class="null">null</span>';
          }
        } else if (typeof obj[key] == 'boolean') {
          var str = obj[key] ? 'true' : 'false';
          value = '<span class="boolean">' + str + '</span>';
        } else if (typeof obj[key] == 'string') {
          value = '<span class="string">"' + obj[key] + '"</span>';
        } else {
          value = obj[key].valueOf();
        }

        td.append(value);
        tr.append(th).append(td);
        table.append(tr);
      }

      return table;
    }
  }, {
    key: "renderHtmlTable",
    value: function renderHtmlTable() {
      var _this = this;

      var value = "";

      try {
        value = _this.objectToTable(this.state.data);
      } catch (e) {
        value = '<pre>' + e + '</pre>';
      }

      _this.setState({
        htmlData: (0, _jquery.default)(value).html()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "consentViewerContainer"
      }, this.state.htmlData && _react.default.createElement("div", {
        className: "table-responsive"
      }, _react.default.createElement("table", {
        className: "table",
        id: "container",
        dangerouslySetInnerHTML: {
          __html: this.state.htmlData
        }
      })), _lodash.default.isEmpty(this.state.data) && _react.default.createElement("em", null, "Cosent Recepeit data not available."));
    }
  }]);

  return ConsentViewer;
}(_react.Component);

var _default = ConsentViewer;
exports.default = _default;