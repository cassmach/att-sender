'use strict';
const a418_0x48777e = a418_0x51f2;
(function (_0x60ed7b, _0x12940f) {
  const _0x44ea2d = a418_0x51f2,
    _0x2e53f5 = _0x60ed7b();
  while (!![]) {
    try {
      const _0xcb3998 =
        parseInt(_0x44ea2d(0x19e)) / 0x1 +
        (-parseInt(_0x44ea2d(0x19d)) / 0x2) *
          (-parseInt(_0x44ea2d(0x1a0)) / 0x3) +
        (parseInt(_0x44ea2d(0x19c)) / 0x4) *
          (-parseInt(_0x44ea2d(0x199)) / 0x5) +
        -parseInt(_0x44ea2d(0x1a1)) / 0x6 +
        -parseInt(_0x44ea2d(0x19b)) / 0x7 +
        parseInt(_0x44ea2d(0x19a)) / 0x8 +
        (-parseInt(_0x44ea2d(0x192)) / 0x9) *
          (-parseInt(_0x44ea2d(0x198)) / 0xa);
      if (_0xcb3998 === _0x12940f) break;
      else _0x2e53f5['push'](_0x2e53f5['shift']());
    } catch (_0x4bae13) {
      _0x2e53f5['push'](_0x2e53f5['shift']());
    }
  }
})(a418_0x1a5a, 0x1b9bc);
var __importDefault =
  (this && this[a418_0x48777e(0x195)]) ||
  function (_0x2216f1) {
    return _0x2216f1 && _0x2216f1['__esModule']
      ? _0x2216f1
      : { default: _0x2216f1 };
  };
function a418_0x1a5a() {
  const _0x420340 = [
    '1506113SYJlQK',
    '46228DkRiyB',
    '31848DJojjX',
    '27135YTGluD',
    '__esModule',
    '33oLMToB',
    '1325166chaKKO',
    '35631lztGfi',
    'default',
    'destroy',
    '__importDefault',
    '../../models/Baileys',
    'findOne',
    '920GQsPAc',
    '55NVUEpH',
    '877632imDRDZ'
  ];
  a418_0x1a5a = function () {
    return _0x420340;
  };
  return a418_0x1a5a();
}
function a418_0x51f2(_0xbac1e1, _0x195bf0) {
  const _0x1a5aab = a418_0x1a5a();
  return (
    (a418_0x51f2 = function (_0x51f2d6, _0x58f4bb) {
      _0x51f2d6 = _0x51f2d6 - 0x192;
      let _0x2bfcfc = _0x1a5aab[_0x51f2d6];
      return _0x2bfcfc;
    }),
    a418_0x51f2(_0xbac1e1, _0x195bf0)
  );
}
Object['defineProperty'](exports, a418_0x48777e(0x19f), { value: !![] });
const Baileys_1 = __importDefault(require(a418_0x48777e(0x196))),
  DeleteBaileysService = async _0x14d1f4 => {
    const _0x2a67f9 = a418_0x48777e,
      _0x22d03c = await Baileys_1[_0x2a67f9(0x193)][_0x2a67f9(0x197)]({
        where: { whatsappId: _0x14d1f4 }
      });
    _0x22d03c && (await _0x22d03c[_0x2a67f9(0x194)]());
  };
exports[a418_0x48777e(0x193)] = DeleteBaileysService;
