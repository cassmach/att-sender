'use strict';
var a389_0x233a26 = a389_0x1d34;
function a389_0x14fd() {
  var _0x3d21f8 = [
    'express',
    '/queueIntegration',
    'show',
    '130UUnGNP',
    'Router',
    '4438164NsAqle',
    '20pLASKH',
    '346199CdejBC',
    '__importStar',
    '59zPbWhB',
    'post',
    'hasOwnProperty',
    'remove',
    'create',
    '../middleware/isAuth',
    '39398hSlCaF',
    '__createBinding',
    'delete',
    '/queueIntegration/:integrationId',
    '611478dmqPdH',
    'update',
    '3695601NIREmN',
    '/queueIntegration/testsession',
    '__importDefault',
    'default',
    '__esModule',
    'index',
    'getOwnPropertyDescriptor',
    'get',
    'put',
    '713472xrXZHZ',
    '__setModuleDefault',
    'defineProperty',
    '944995TAqOVc',
    'testSession'
  ];
  a389_0x14fd = function () {
    return _0x3d21f8;
  };
  return a389_0x14fd();
}
(function (_0x57a0b1, _0x108d99) {
  var _0x57341b = a389_0x1d34,
    _0x567a21 = _0x57a0b1();
  while (!![]) {
    try {
      var _0x3b7e59 =
        (parseInt(_0x57341b(0x205)) / 0x1) *
          (-parseInt(_0x57341b(0x20b)) / 0x2) +
        parseInt(_0x57341b(0x211)) / 0x3 +
        (-parseInt(_0x57341b(0x202)) / 0x4) *
          (-parseInt(_0x57341b(0x1fa)) / 0x5) +
        parseInt(_0x57341b(0x201)) / 0x6 +
        -parseInt(_0x57341b(0x203)) / 0x7 +
        -parseInt(_0x57341b(0x1f7)) / 0x8 +
        (parseInt(_0x57341b(0x20f)) / 0x9) *
          (-parseInt(_0x57341b(0x1ff)) / 0xa);
      if (_0x3b7e59 === _0x108d99) break;
      else _0x567a21['push'](_0x567a21['shift']());
    } catch (_0x16db1a) {
      _0x567a21['push'](_0x567a21['shift']());
    }
  }
})(a389_0x14fd, 0xb2d0c);
var __createBinding =
    (this && this[a389_0x233a26(0x20c)]) ||
    (Object[a389_0x233a26(0x209)]
      ? function (_0x3f575b, _0x5aaac4, _0x3873a2, _0x33e505) {
          var _0x4f5dfd = a389_0x233a26;
          if (_0x33e505 === undefined) _0x33e505 = _0x3873a2;
          var _0x116887 = Object[_0x4f5dfd(0x1f4)](_0x5aaac4, _0x3873a2);
          (!_0x116887 ||
            (_0x4f5dfd(0x1f5) in _0x116887
              ? !_0x5aaac4[_0x4f5dfd(0x215)]
              : _0x116887['writable'] || _0x116887['configurable'])) &&
            (_0x116887 = {
              enumerable: !![],
              get: function () {
                return _0x5aaac4[_0x3873a2];
              }
            }),
            Object[_0x4f5dfd(0x1f9)](_0x3f575b, _0x33e505, _0x116887);
        }
      : function (_0x22acff, _0x3c0c, _0x76ba6, _0x5d9063) {
          if (_0x5d9063 === undefined) _0x5d9063 = _0x76ba6;
          _0x22acff[_0x5d9063] = _0x3c0c[_0x76ba6];
        }),
  __setModuleDefault =
    (this && this[a389_0x233a26(0x1f8)]) ||
    (Object[a389_0x233a26(0x209)]
      ? function (_0x4a42c5, _0x2ffc63) {
          var _0x15aef3 = a389_0x233a26;
          Object[_0x15aef3(0x1f9)](_0x4a42c5, 'default', {
            enumerable: !![],
            value: _0x2ffc63
          });
        }
      : function (_0x8e531e, _0x2bd8c5) {
          var _0x33b3fd = a389_0x233a26;
          _0x8e531e[_0x33b3fd(0x214)] = _0x2bd8c5;
        }),
  __importStar =
    (this && this[a389_0x233a26(0x204)]) ||
    function (_0x56629a) {
      var _0x5c279f = a389_0x233a26;
      if (_0x56629a && _0x56629a[_0x5c279f(0x215)]) return _0x56629a;
      var _0x3a0702 = {};
      if (_0x56629a != null) {
        for (var _0x33dfb4 in _0x56629a)
          if (
            _0x33dfb4 !== _0x5c279f(0x214) &&
            Object['prototype'][_0x5c279f(0x207)]['call'](_0x56629a, _0x33dfb4)
          )
            __createBinding(_0x3a0702, _0x56629a, _0x33dfb4);
      }
      return __setModuleDefault(_0x3a0702, _0x56629a), _0x3a0702;
    },
  __importDefault =
    (this && this[a389_0x233a26(0x213)]) ||
    function (_0x139e84) {
      return _0x139e84 && _0x139e84['__esModule']
        ? _0x139e84
        : { default: _0x139e84 };
    };
Object[a389_0x233a26(0x1f9)](exports, a389_0x233a26(0x215), { value: !![] });
const express_1 = require(a389_0x233a26(0x1fc)),
  isAuth_1 = __importDefault(require(a389_0x233a26(0x20a))),
  QueueIntegrationController = __importStar(
    require('../controllers/QueueIntegrationController')
  ),
  queueIntegrationRoutes = (0x0, express_1[a389_0x233a26(0x200)])();
function a389_0x1d34(_0xde7d38, _0x19f293) {
  var _0x14fd0a = a389_0x14fd();
  return (
    (a389_0x1d34 = function (_0x1d3491, _0x4d16d6) {
      _0x1d3491 = _0x1d3491 - 0x1f3;
      var _0x5b3007 = _0x14fd0a[_0x1d3491];
      return _0x5b3007;
    }),
    a389_0x1d34(_0xde7d38, _0x19f293)
  );
}
queueIntegrationRoutes[a389_0x233a26(0x1f5)](
  a389_0x233a26(0x1fd),
  isAuth_1[a389_0x233a26(0x214)],
  QueueIntegrationController[a389_0x233a26(0x1f3)]
),
  queueIntegrationRoutes[a389_0x233a26(0x206)](
    a389_0x233a26(0x1fd),
    isAuth_1[a389_0x233a26(0x214)],
    QueueIntegrationController['store']
  ),
  queueIntegrationRoutes[a389_0x233a26(0x1f5)](
    a389_0x233a26(0x20e),
    isAuth_1[a389_0x233a26(0x214)],
    QueueIntegrationController[a389_0x233a26(0x1fe)]
  ),
  queueIntegrationRoutes[a389_0x233a26(0x1f6)](
    '/queueIntegration/:integrationId',
    isAuth_1['default'],
    QueueIntegrationController[a389_0x233a26(0x210)]
  ),
  queueIntegrationRoutes[a389_0x233a26(0x20d)](
    a389_0x233a26(0x20e),
    isAuth_1[a389_0x233a26(0x214)],
    QueueIntegrationController[a389_0x233a26(0x208)]
  ),
  queueIntegrationRoutes[a389_0x233a26(0x206)](
    a389_0x233a26(0x212),
    isAuth_1[a389_0x233a26(0x214)],
    QueueIntegrationController[a389_0x233a26(0x1fb)]
  ),
  (exports[a389_0x233a26(0x214)] = queueIntegrationRoutes);
