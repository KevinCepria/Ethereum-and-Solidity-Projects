'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ubuntu/workspace/Ethereum Udemy Course/Project_3rd-KickStarter/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, campaign;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });
                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 8:
                                campaign = _context.sent;

                                _routes.Router.pushRoute('/');
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:

                                _this.setState({ loading: false });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, ' Create a Campaign! '), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Minimum contribution:'), _react2.default.createElement(_semanticUiReact.Input, { type: 'number',
                label: 'wei',
                labelPosition: 'right',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, ' Create ')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIndlYjMiLCJSb3V0ZXIiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsImNhbXBhaWduIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBTSxBQUFRLEFBQU87O0FBQzdCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOzs7Ozs7O0ksQUFHZjs7Ozs7Ozs7Ozs7Ozs7OzBOQUNGLEE7aUNBQVEsQUFDaUIsQUFDckI7MEJBRkksQUFFVSxBQUNkO3FCQUhJLEFBR0ssQTtBQUhMLEFBQ0osaUJBS0osQTtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7OEJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUNOO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFNLGNBRnRCLEFBRVAsQUFBYyxBQUE0QjtnREFGbkM7Z0RBQUE7dUNBSXNCLGNBQUEsQUFBSyxJQUozQixBQUlzQixBQUFTOztpQ0FBMUI7QUFKTCxvREFBQTtnREFBQTt5REFLc0IsQUFBUSxRQUFSLEFBQWdCLGVBQWUsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLHFCQUExQyxBQUN0QjswQ0FDUSxTQVBSLEFBS3NCLEFBQ2pCLEFBQ0csQUFBUztBQURaLEFBQ0YsaUNBRm1COztpQ0FBakI7QUFMTCxvREFVSDs7K0NBQUEsQUFBTyxVQVZKLEFBVUgsQUFBaUI7Z0RBVmQ7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBY0E7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUFkN0IsQUFjQSxBQUFjLEFBQXFCOztpQ0FHMUM7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBakJSLEFBaUJQLEFBQWMsQUFBUzs7aUNBakJoQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQXFCSDt5QkFDSjs7bUNBQ0EsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUNBQUEsQUFBQyx1Q0FBSyxVQUFZLEtBQWxCLEFBQXVCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQS9DLEFBQXFEOzhCQUFyRDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsMENBQUEsQUFBQyx3Q0FBTSxNQUFQLEFBQVksQUFDUjt1QkFESixBQUNVLEFBQ047K0JBRkosQUFFa0IsQUFDZDt1QkFBTyxLQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxxQkFBb0IsTUFBQSxBQUFNLE9BQWxELEFBQVMsQUFBYyxBQUFrQztBQUp2RTs7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBUUo7QUFSSTtpQ0FRSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXdCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBOUMsQUFBb0Q7OEJBQXBEO2dDQVhKLEFBV0ksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQWZSLEFBQ0EsQUFFSSxBQVlJLEFBSVg7Ozs7O0FBaERxQixBLEFBbUQxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9FdGhlcmV1bSBVZGVteSBDb3Vyc2UvUHJvamVjdF8zcmQtS2lja1N0YXJ0ZXIifQ==