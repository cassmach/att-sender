'use strict';
function a583_0x17e4() {
  var _0x1bd461 = [
    '2pLduNr',
    'required',
    '36ddwxvD',
    'object',
    'default',
    'reload',
    'hasOwnProperty',
    'get',
    '980564vEFAax',
    'validate',
    'writable',
    '../../errors/AppError',
    'date',
    '518175cAUBjq',
    '__importStar',
    '3561416WDqiBi',
    'prototype',
    '649274hnbPsW',
    'configurable',
    '404070mqalPU',
    'number',
    '144490CZMOFO',
    'string',
    'update',
    '1960371TiNiQz',
    'defineProperty',
    '__esModule',
    '__importDefault',
    'getOwnPropertyDescriptor',
    '__createBinding',
    '6tVfKqn',
    'shape'
  ];
  a583_0x17e4 = function () {
    return _0x1bd461;
  };
  return a583_0x17e4();
}
var a583_0x41f6db = a583_0x2ff3;
(function (_0x38053b, _0x546873) {
  var _0x957c86 = a583_0x2ff3,
    _0x19a714 = _0x38053b();
  while (!![]) {
    try {
      var _0x5920e1 =
        (-parseInt(_0x957c86(0xed)) / 0x1) *
          (-parseInt(_0x957c86(0xfc)) / 0x2) +
        parseInt(_0x957c86(0xf4)) / 0x3 +
        -parseInt(_0x957c86(0x104)) / 0x4 +
        (-parseInt(_0x957c86(0xf1)) / 0x5) *
          (-parseInt(_0x957c86(0xfa)) / 0x6) +
        -parseInt(_0x957c86(0xe9)) / 0x7 +
        -parseInt(_0x957c86(0xeb)) / 0x8 +
        (parseInt(_0x957c86(0xfe)) / 0x9) * (-parseInt(_0x957c86(0xef)) / 0xa);
      if (_0x5920e1 === _0x546873) break;
      else _0x19a714['push'](_0x19a714['shift']());
    } catch (_0x164531) {
      _0x19a714['push'](_0x19a714['shift']());
    }
  }
})(a583_0x17e4, 0x6309a);
var __createBinding =
    (this && this[a583_0x41f6db(0xf9)]) ||
    (Object['create']
      ? function (_0x265eb4, _0x1dcdd9, _0x43267b, _0x4f08f1) {
          var _0x55cc0d = a583_0x41f6db;
          if (_0x4f08f1 === undefined) _0x4f08f1 = _0x43267b;
          var _0x4a7903 = Object[_0x55cc0d(0xf8)](_0x1dcdd9, _0x43267b);
          (!_0x4a7903 ||
            (_0x55cc0d(0x103) in _0x4a7903
              ? !_0x1dcdd9['__esModule']
              : _0x4a7903[_0x55cc0d(0x106)] || _0x4a7903[_0x55cc0d(0xee)])) &&
            (_0x4a7903 = {
              enumerable: !![],
              get: function () {
                return _0x1dcdd9[_0x43267b];
              }
            }),
            Object['defineProperty'](_0x265eb4, _0x4f08f1, _0x4a7903);
        }
      : function (_0x30732c, _0x526bcc, _0x4c5c18, _0x38ab21) {
          if (_0x38ab21 === undefined) _0x38ab21 = _0x4c5c18;
          _0x30732c[_0x38ab21] = _0x526bcc[_0x4c5c18];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object['create']
      ? function (_0x4b2386, _0x23952b) {
          Object['defineProperty'](_0x4b2386, 'default', {
            enumerable: !![],
            value: _0x23952b
          });
        }
      : function (_0x5d2bf9, _0x44b196) {
          var _0x51f941 = a583_0x41f6db;
          _0x5d2bf9[_0x51f941(0x100)] = _0x44b196;
        }),
  __importStar =
    (this && this[a583_0x41f6db(0xea)]) ||
    function (_0x2a66d0) {
      var _0xe612e8 = a583_0x41f6db;
      if (_0x2a66d0 && _0x2a66d0[_0xe612e8(0xf6)]) return _0x2a66d0;
      var _0x2af286 = {};
      if (_0x2a66d0 != null) {
        for (var _0x51677a in _0x2a66d0)
          if (
            _0x51677a !== 'default' &&
            Object[_0xe612e8(0xec)][_0xe612e8(0x102)]['call'](
              _0x2a66d0,
              _0x51677a
            )
          )
            __createBinding(_0x2af286, _0x2a66d0, _0x51677a);
      }
      return __setModuleDefault(_0x2af286, _0x2a66d0), _0x2af286;
    },
  __importDefault =
    (this && this[a583_0x41f6db(0xf7)]) ||
    function (_0x72149) {
      var _0x35736c = a583_0x41f6db;
      return _0x72149 && _0x72149[_0x35736c(0xf6)]
        ? _0x72149
        : { default: _0x72149 };
    };
Object[a583_0x41f6db(0xf5)](exports, a583_0x41f6db(0xf6), { value: !![] });
const Yup = __importStar(require('yup')),
  AppError_1 = __importDefault(require(a583_0x41f6db(0x107))),
  ShowService_1 = __importDefault(require('./ShowService')),
  UpdateUserService = async ({
    scheduleData: _0x3bfb1b,
    id: _0x11dedf,
    companyId: _0x2009dd
  }) => {
    var _0x24d8d7 = a583_0x41f6db;
    const _0x3c0586 = await (0x0, ShowService_1['default'])(_0x11dedf),
      _0x17bb16 = Yup[_0x24d8d7(0xff)]()[_0x24d8d7(0xfb)]({
        data_mensagem_programada: Yup[_0x24d8d7(0xe8)]()['required'](),
        nome: Yup[_0x24d8d7(0xf2)]()[_0x24d8d7(0xfd)](),
        mediaPath: Yup[_0x24d8d7(0xf2)](),
        mediaName: Yup[_0x24d8d7(0xf2)](),
        mensagem: Yup[_0x24d8d7(0xf2)]()[_0x24d8d7(0xfd)](),
        companyId: Yup[_0x24d8d7(0xf0)]()[_0x24d8d7(0xfd)](),
        data_envio: Yup[_0x24d8d7(0xe8)]()[_0x24d8d7(0xfd)](),
        scheduledmessages: Yup[_0x24d8d7(0xf0)]()[_0x24d8d7(0xfd)](),
        key: Yup[_0x24d8d7(0xf2)]()['required']()
      }),
      {
        mediaPath: _0x13c7a6,
        mediaName: _0x250dac,
        mensagem: _0x38da16,
        data_envio: _0x58bb27,
        scheduledmessages: _0x117007,
        key: _0x3f464f
      } = _0x3bfb1b;
    try {
      await _0x17bb16[_0x24d8d7(0x105)]({
        mediaPath: _0x13c7a6,
        mediaName: _0x250dac,
        mensagem: _0x38da16,
        companyId: _0x2009dd,
        data_envio: _0x58bb27,
        scheduledmessages: _0x117007,
        key: _0x3f464f
      });
    } catch (_0x1c8a4b) {
      throw new AppError_1['default'](_0x1c8a4b['message']);
    }
    return (
      await _0x3c0586[_0x24d8d7(0xf3)]({
        mediaPath: _0x13c7a6,
        mediaName: _0x250dac,
        mensagem: _0x38da16,
        companyId: _0x2009dd,
        data_envio: _0x58bb27,
        scheduledmessages: _0x117007,
        key: _0x3f464f
      }),
      await _0x3c0586[_0x24d8d7(0x101)](),
      _0x3c0586
    );
  };
function a583_0x2ff3(_0x3f6c16, _0x3f5e54) {
  var _0x17e404 = a583_0x17e4();
  return (
    (a583_0x2ff3 = function (_0x2ff3a7, _0x3f5d4a) {
      _0x2ff3a7 = _0x2ff3a7 - 0xe8;
      var _0x4e7e4b = _0x17e404[_0x2ff3a7];
      return _0x4e7e4b;
    }),
    a583_0x2ff3(_0x3f6c16, _0x3f5e54)
  );
}
exports[a583_0x41f6db(0x100)] = UpdateUserService;
