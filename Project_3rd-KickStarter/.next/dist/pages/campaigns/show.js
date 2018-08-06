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

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _contributeform = require('../../components/contributeform');

var _contributeform2 = _interopRequireDefault(_contributeform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ubuntu/workspace/Ethereum Udemy Course/Project_3rd-KickStarter/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei'
            }, {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withraw money from the contract (must be approved by contributors) '
            }, {
                header: approversCount,
                meta: 'Number of approvers',
                description: 'Number of people who have already donated to this campaign'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Campaign Show '), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_contributeform2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFRLEFBQU07O0FBQ2QsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJLEFBRXJCOzs7Ozs7Ozs7OztzQ0FtQlc7eUJBT0wsS0FQSyxBQU9BO2dCQVBBLEFBRUwsaUJBRkssQUFFTDtnQkFGSyxBQUdMLGlCQUhLLEFBR0w7Z0JBSEssQUFJTCw2QkFKSyxBQUlMO2dCQUpLLEFBS0wsdUJBTEssQUFLTDtnQkFMSyxBQU1MLHdCQU5LLEFBTUwsQUFHSjs7Z0JBQU07d0JBQ0YsQUFDVyxBQUNQO3NCQUZKLEFBRVUsQUFDTjs2QkFISixBQUdnQixBQUNaO3VCQUFRLEVBQUMsY0FMSCxBQUNWLEFBSVksQUFBZTtBQUozQixBQUNJLGFBRk07d0JBT1YsQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFWTSxBQU9WLEFBR2lCO0FBSGpCLEFBQ0k7d0JBSUosQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFmTSxBQVlWLEFBR2dCO0FBSGhCLEFBQ0k7d0JBSUosQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFwQk0sQUFpQlYsQUFHaUI7QUFIakIsQUFDSTt3QkFLUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEL0IsQUFDWSxBQUEyQixBQUNuQztzQkFGSixBQUVVLEFBQ047NkJBekJSLEFBQWMsQUFzQlYsQUFHaUIsQUFLckI7QUFSSSxBQUNJOztpREFPRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUVILEFBQ0o7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDRztBQURIO0FBQUEsYUFBQSxrQkFDRyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESCxBQUNHLEFBQ0EsbUNBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSztBQURMO0FBQUEsK0JBQ00sY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSztBQURMO29CQURMLEFBQ0ssQUFDSyxBQUFLLEFBRVYsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQVJoQixBQUNJLEFBRUcsQUFJSyxBQUNJLEFBS25CO0FBTG1COzs7Ozs7aUgsQUFuRVM7Ozs7O2lDQUVuQjtBLDJDQUFXLHdCQUFTLE1BQUEsQUFBTSxNQUFNLEEsQUFBckI7O3VDQUVJLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCLEE7O2lDQUE3QztBOzs2Q0FHTyxNQUFBLEFBQU0sTUFEYixBQUNtQixBQUNyQjt5REFBcUIsUUFGbkIsQUFFbUIsQUFBUSxBQUM3Qjs2Q0FBUyxRQUhQLEFBR08sQUFBUSxBQUNqQjttREFBZSxRQUpiLEFBSWEsQUFBUSxBQUN2QjtvREFBZ0IsUUFMZCxBQUtjLEFBQVEsQUFDeEI7NkNBQVMsUUFOUCxBQU1PLEFBQVEsQTtBQU5mLEFBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFUZSxBLEFBNkUzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvRXRoZXJldW0gVWRlbXkgQ291cnNlL1Byb2plY3RfM3JkLUtpY2tTdGFydGVyIn0=