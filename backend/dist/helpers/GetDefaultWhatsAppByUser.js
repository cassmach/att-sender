'use strict';
const a290_0x151f40 = a290_0x2d09;
function a290_0x3724() {
  const _0x2ecbfc = [
    '4rtmLPs',
    '16542981NiEnke',
    '1986159oZGCKR',
    '589929yQxDCX',
    'default',
    '3663535VSMKnc',
    'whatsapp',
    '__esModule',
    '__importDefault',
    '3KfAtSH',
    '1031232NkpDkr',
    'defineProperty',
    '6383248GGkETS',
    '301326GMTZDS'
  ];
  a290_0x3724 = function () {
    return _0x2ecbfc;
  };
  return a290_0x3724();
}
(function (_0x11c1e2, _0x304b6f) {
  const _0x5d6058 = a290_0x2d09,
    _0x4cf59f = _0x11c1e2();
  while (!![]) {
    try {
      const _0x4852b8 =
        (-parseInt(_0x5d6058(0xa9)) / 0x1) * (parseInt(_0x5d6058(0xad)) / 0x2) +
        (-parseInt(_0x5d6058(0xb1)) / 0x3) *
          (-parseInt(_0x5d6058(0xae)) / 0x4) +
        -parseInt(_0x5d6058(0xa5)) / 0x5 +
        parseInt(_0x5d6058(0xaa)) / 0x6 +
        parseInt(_0x5d6058(0xb0)) / 0x7 +
        -parseInt(_0x5d6058(0xac)) / 0x8 +
        parseInt(_0x5d6058(0xaf)) / 0x9;
      if (_0x4852b8 === _0x304b6f) break;
      else _0x4cf59f['push'](_0x4cf59f['shift']());
    } catch (_0x1c597b) {
      _0x4cf59f['push'](_0x4cf59f['shift']());
    }
  }
})(a290_0x3724, 0x7bf6f);
function a290_0x2d09(_0x236e13, _0x4e7cce) {
  const _0x37246d = a290_0x3724();
  return (
    (a290_0x2d09 = function (_0x2d0964, _0x3a8051) {
      _0x2d0964 = _0x2d0964 - 0xa5;
      let _0x123564 = _0x37246d[_0x2d0964];
      return _0x123564;
    }),
    a290_0x2d09(_0x236e13, _0x4e7cce)
  );
}
var __importDefault =
  (this && this[a290_0x151f40(0xa8)]) ||
  function (_0x46c16b) {
    const _0x65ce7 = a290_0x151f40;
    return _0x46c16b && _0x46c16b[_0x65ce7(0xa7)]
      ? _0x46c16b
      : { default: _0x46c16b };
  };
Object[a290_0x151f40(0xab)](exports, '__esModule', { value: !![] });
const User_1 = __importDefault(require('../models/User')),
  GetDefaultWhatsAppByUser = async _0x435a15 => {
    const _0x14185d = a290_0x151f40,
      _0x1b86ec = await User_1['default']['findByPk'](_0x435a15, {
        include: [_0x14185d(0xa6)]
      });
    if (_0x1b86ec === null || !_0x1b86ec[_0x14185d(0xa6)]) return null;
    return _0x1b86ec[_0x14185d(0xa6)];
  };
exports[a290_0x151f40(0xb2)] = GetDefaultWhatsAppByUser;
