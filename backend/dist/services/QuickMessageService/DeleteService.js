'use strict';
const a565_0x1d37c8 = a565_0xc0bf;
(function (_0x2f4772, _0x38a320) {
  const _0xe2f97e = a565_0xc0bf,
    _0x201bdb = _0x2f4772();
  while (!![]) {
    try {
      const _0x5960a5 =
        (-parseInt(_0xe2f97e(0x8a)) / 0x1) *
          (-parseInt(_0xe2f97e(0x7b)) / 0x2) +
        parseInt(_0xe2f97e(0x88)) / 0x3 +
        (-parseInt(_0xe2f97e(0x77)) / 0x4) * (parseInt(_0xe2f97e(0x78)) / 0x5) +
        (parseInt(_0xe2f97e(0x89)) / 0x6) * (-parseInt(_0xe2f97e(0x81)) / 0x7) +
        (parseInt(_0xe2f97e(0x82)) / 0x8) * (parseInt(_0xe2f97e(0x83)) / 0x9) +
        (parseInt(_0xe2f97e(0x84)) / 0xa) * (-parseInt(_0xe2f97e(0x86)) / 0xb) +
        (parseInt(_0xe2f97e(0x7a)) / 0xc) * (parseInt(_0xe2f97e(0x7c)) / 0xd);
      if (_0x5960a5 === _0x38a320) break;
      else _0x201bdb['push'](_0x201bdb['shift']());
    } catch (_0x4a699e) {
      _0x201bdb['push'](_0x201bdb['shift']());
    }
  }
})(a565_0x1dc9, 0x70564);
function a565_0x1dc9() {
  const _0x5ddc74 = [
    '26279HzSBWm',
    'destroy',
    '926211liCAfP',
    '102GiHzZd',
    '19xSqTfw',
    '4TSXyQU',
    '2413560EPYxTt',
    'default',
    '36ITPsvb',
    '9140ESLZkF',
    '7682012eOPGSg',
    'findOne',
    '../../errors/AppError',
    'ERR_NO_QUICKMESSAGE_FOUND',
    '__esModule',
    '212975DTeKAt',
    '290048BtBVJU',
    '27xqXGFn',
    '3420odPPZH',
    '../../models/QuickMessage'
  ];
  a565_0x1dc9 = function () {
    return _0x5ddc74;
  };
  return a565_0x1dc9();
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x440884) {
    const _0x34c6bf = a565_0xc0bf;
    return _0x440884 && _0x440884[_0x34c6bf(0x80)]
      ? _0x440884
      : { default: _0x440884 };
  };
function a565_0xc0bf(_0x1471c3, _0x5997ed) {
  const _0x1dc9b7 = a565_0x1dc9();
  return (
    (a565_0xc0bf = function (_0xc0bf88, _0x41ed08) {
      _0xc0bf88 = _0xc0bf88 - 0x77;
      let _0x3bb355 = _0x1dc9b7[_0xc0bf88];
      return _0x3bb355;
    }),
    a565_0xc0bf(_0x1471c3, _0x5997ed)
  );
}
Object['defineProperty'](exports, a565_0x1d37c8(0x80), { value: !![] });
const QuickMessage_1 = __importDefault(require(a565_0x1d37c8(0x85))),
  AppError_1 = __importDefault(require(a565_0x1d37c8(0x7e))),
  DeleteService = async _0x5949d7 => {
    const _0x19b5b3 = a565_0x1d37c8,
      _0x54911f = await QuickMessage_1[_0x19b5b3(0x79)][_0x19b5b3(0x7d)]({
        where: { id: _0x5949d7 }
      });
    if (!_0x54911f) throw new AppError_1['default'](_0x19b5b3(0x7f), 0x194);
    await _0x54911f[_0x19b5b3(0x87)]();
  };
exports[a565_0x1d37c8(0x79)] = DeleteService;
