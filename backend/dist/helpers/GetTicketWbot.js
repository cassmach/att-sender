'use strict';
const a291_0x1b4494 = a291_0xd1aa;
function a291_0xd1aa(_0x1f5681, _0x397526) {
  const _0x5e4d5c = a291_0x5e4d();
  return (
    (a291_0xd1aa = function (_0xd1aacd, _0x4ebcd6) {
      _0xd1aacd = _0xd1aacd - 0x1c9;
      let _0xf7ed53 = _0x5e4d5c[_0xd1aacd];
      return _0xf7ed53;
    }),
    a291_0xd1aa(_0x1f5681, _0x397526)
  );
}
(function (_0x552a0c, _0xb04964) {
  const _0x3dc96f = a291_0xd1aa,
    _0x20a168 = _0x552a0c();
  while (!![]) {
    try {
      const _0x58c79d =
        (-parseInt(_0x3dc96f(0x1dd)) / 0x1) *
          (parseInt(_0x3dc96f(0x1db)) / 0x2) +
        parseInt(_0x3dc96f(0x1cc)) / 0x3 +
        (parseInt(_0x3dc96f(0x1d7)) / 0x4) *
          (parseInt(_0x3dc96f(0x1d5)) / 0x5) +
        (-parseInt(_0x3dc96f(0x1d0)) / 0x6) *
          (parseInt(_0x3dc96f(0x1ce)) / 0x7) +
        -parseInt(_0x3dc96f(0x1dc)) / 0x8 +
        (parseInt(_0x3dc96f(0x1cf)) / 0x9) *
          (-parseInt(_0x3dc96f(0x1d1)) / 0xa) +
        (parseInt(_0x3dc96f(0x1d8)) / 0xb) * (parseInt(_0x3dc96f(0x1d9)) / 0xc);
      if (_0x58c79d === _0xb04964) break;
      else _0x20a168['push'](_0x20a168['shift']());
    } catch (_0x134a60) {
      _0x20a168['push'](_0x20a168['shift']());
    }
  }
})(a291_0x5e4d, 0x39d42);
function a291_0x5e4d() {
  const _0xf92900 = [
    'defineProperty',
    '161BhVQPX',
    '14085tNwOae',
    '115788guCNgd',
    '2830bRfybP',
    'whatsapp',
    '__esModule',
    '$set',
    '82695eNeNFX',
    'whatsappId',
    '84AtxnPo',
    '1232RnJRGn',
    '99480NikRPH',
    'default',
    '248IVmqyU',
    '1339912LVsxCN',
    '2059HsTluC',
    '__importDefault',
    'getWbot',
    './GetDefaultWhatsApp',
    '../libs/wbot',
    '811863cOcdeq'
  ];
  a291_0x5e4d = function () {
    return _0xf92900;
  };
  return a291_0x5e4d();
}
var __importDefault =
  (this && this[a291_0x1b4494(0x1de)]) ||
  function (_0x394118) {
    const _0x4b13f8 = a291_0x1b4494;
    return _0x394118 && _0x394118[_0x4b13f8(0x1d3)]
      ? _0x394118
      : { default: _0x394118 };
  };
Object[a291_0x1b4494(0x1cd)](exports, a291_0x1b4494(0x1d3), { value: !![] });
const wbot_1 = require(a291_0x1b4494(0x1cb)),
  GetDefaultWhatsApp_1 = __importDefault(require(a291_0x1b4494(0x1ca))),
  GetTicketWbot = async _0x18825e => {
    const _0x5e9c0c = a291_0x1b4494;
    if (!_0x18825e[_0x5e9c0c(0x1d6)]) {
      const _0x3b9542 = await (0x0, GetDefaultWhatsApp_1[_0x5e9c0c(0x1da)])(
        _0x18825e['companyId']
      );
      await _0x18825e[_0x5e9c0c(0x1d4)](_0x5e9c0c(0x1d2), _0x3b9542);
    }
    const _0x34e597 = (0x0, wbot_1[_0x5e9c0c(0x1c9)])(
      _0x18825e[_0x5e9c0c(0x1d6)]
    );
    return _0x34e597;
  };
exports['default'] = GetTicketWbot;
