'use strict';
const a515_0x2771d1 = a515_0x565f;
function a515_0x42f3() {
  const _0x39c178 = [
    '349263AMcOOp',
    '5581161UFpqSR',
    'findByPk',
    '10194660RRTzoB',
    'defineProperty',
    '24KZwJYD',
    '420860kmMcHS',
    '1208319lzWdhf',
    '../../errors/AppError',
    '106844SCAWBp',
    '171066ItIgYC',
    'default',
    'ERR_NO_HELP_FOUND',
    '55hNyjmV',
    '__esModule',
    '__importDefault',
    '4BGlCHj',
    '../../models/Help'
  ];
  a515_0x42f3 = function () {
    return _0x39c178;
  };
  return a515_0x42f3();
}
(function (_0x573a1e, _0x10a646) {
  const _0x1434b1 = a515_0x565f,
    _0x20893a = _0x573a1e();
  while (!![]) {
    try {
      const _0x5bdca2 =
        parseInt(_0x1434b1(0x8d)) / 0x1 +
        (parseInt(_0x1434b1(0x85)) / 0x2) * (-parseInt(_0x1434b1(0x87)) / 0x3) +
        (parseInt(_0x1434b1(0x7e)) / 0x4) * (parseInt(_0x1434b1(0x82)) / 0x5) +
        parseInt(_0x1434b1(0x7f)) / 0x6 +
        (parseInt(_0x1434b1(0x8e)) / 0x7) * (-parseInt(_0x1434b1(0x8c)) / 0x8) +
        -parseInt(_0x1434b1(0x88)) / 0x9 +
        parseInt(_0x1434b1(0x8a)) / 0xa;
      if (_0x5bdca2 === _0x10a646) break;
      else _0x20893a['push'](_0x20893a['shift']());
    } catch (_0x3076ea) {
      _0x20893a['push'](_0x20893a['shift']());
    }
  }
})(a515_0x42f3, 0x5fa9c);
function a515_0x565f(_0x5c8236, _0x5d7ea9) {
  const _0x42f3c6 = a515_0x42f3();
  return (
    (a515_0x565f = function (_0x565fe4, _0x56e122) {
      _0x565fe4 = _0x565fe4 - 0x7d;
      let _0x30ba83 = _0x42f3c6[_0x565fe4];
      return _0x30ba83;
    }),
    a515_0x565f(_0x5c8236, _0x5d7ea9)
  );
}
var __importDefault =
  (this && this[a515_0x2771d1(0x84)]) ||
  function (_0x396b54) {
    const _0x35e641 = a515_0x2771d1;
    return _0x396b54 && _0x396b54[_0x35e641(0x83)]
      ? _0x396b54
      : { default: _0x396b54 };
  };
Object[a515_0x2771d1(0x8b)](exports, a515_0x2771d1(0x83), { value: !![] });
const Help_1 = __importDefault(require(a515_0x2771d1(0x86))),
  AppError_1 = __importDefault(require(a515_0x2771d1(0x7d))),
  ShowService = async _0x1e1fdd => {
    const _0x33fe1f = a515_0x2771d1,
      _0x4eabb0 = await Help_1[_0x33fe1f(0x80)][_0x33fe1f(0x89)](_0x1e1fdd);
    if (!_0x4eabb0)
      throw new AppError_1[_0x33fe1f(0x80)](_0x33fe1f(0x81), 0x194);
    return _0x4eabb0;
  };
exports[a515_0x2771d1(0x80)] = ShowService;
