'use strict';
const a488_0x567b7e = a488_0x2e97;
(function (_0x50941, _0x34321f) {
  const _0x1d33cf = a488_0x2e97,
    _0x519924 = _0x50941();
  while (!![]) {
    try {
      const _0x17f413 =
        -parseInt(_0x1d33cf(0x82)) / 0x1 +
        (-parseInt(_0x1d33cf(0x89)) / 0x2) * (parseInt(_0x1d33cf(0x88)) / 0x3) +
        parseInt(_0x1d33cf(0x84)) / 0x4 +
        (-parseInt(_0x1d33cf(0x8e)) / 0x5) * (parseInt(_0x1d33cf(0x94)) / 0x6) +
        parseInt(_0x1d33cf(0x96)) / 0x7 +
        parseInt(_0x1d33cf(0x93)) / 0x8 +
        (parseInt(_0x1d33cf(0x98)) / 0x9) * (parseInt(_0x1d33cf(0x92)) / 0xa);
      if (_0x17f413 === _0x34321f) break;
      else _0x519924['push'](_0x519924['shift']());
    } catch (_0x4e7c11) {
      _0x519924['push'](_0x519924['shift']());
    }
  }
})(a488_0x5a9a, 0x7b163);
function a488_0x2e97(_0x4f1649, _0x57828b) {
  const _0x5a9ac1 = a488_0x5a9a();
  return (
    (a488_0x2e97 = function (_0x2e97b3, _0x240136) {
      _0x2e97b3 = _0x2e97b3 - 0x81;
      let _0x1aa6e3 = _0x5a9ac1[_0x2e97b3];
      return _0x1aa6e3;
    }),
    a488_0x2e97(_0x4f1649, _0x57828b)
  );
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x35d2bc) {
    const _0x410bf7 = a488_0x2e97;
    return _0x35d2bc && _0x35d2bc[_0x410bf7(0x97)]
      ? _0x35d2bc
      : { default: _0x35d2bc };
  };
Object[a488_0x567b7e(0x8a)](exports, '__esModule', { value: !![] });
const Contact_1 = __importDefault(require(a488_0x567b7e(0x8f))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  Whatsapp_1 = __importDefault(require(a488_0x567b7e(0x8d))),
  ShowContactService = async (_0xf22327, _0x42c860) => {
    const _0x4f3c1d = a488_0x567b7e,
      _0x6ad241 = await Contact_1[_0x4f3c1d(0x85)][_0x4f3c1d(0x8b)](_0xf22327, {
        include: [
          _0x4f3c1d(0x81),
          _0x4f3c1d(0x83),
          { association: 'wallets', attributes: ['id', _0x4f3c1d(0x86)] },
          {
            model: Whatsapp_1[_0x4f3c1d(0x85)],
            as: _0x4f3c1d(0x95),
            attributes: [
              'id',
              _0x4f3c1d(0x86),
              _0x4f3c1d(0x8c),
              _0x4f3c1d(0x90)
            ]
          }
        ]
      });
    if (_0x6ad241?.['companyId'] !== _0x42c860)
      throw new AppError_1[_0x4f3c1d(0x85)](_0x4f3c1d(0x91));
    if (!_0x6ad241) throw new AppError_1['default'](_0x4f3c1d(0x87), 0x194);
    return _0x6ad241;
  };
function a488_0x5a9a() {
  const _0x54867b = [
    'defineProperty',
    'findByPk',
    'expiresTicket',
    '../../models/Whatsapp',
    '1945pCfCUK',
    '../../models/Contact',
    'groupAsTicket',
    'Não\x20é\x20possível\x20excluir\x20registro\x20de\x20outra\x20empresa',
    '100RwChYv',
    '4729440QkTReb',
    '15438xSOOpp',
    'whatsapp',
    '4001004dRihZt',
    '__esModule',
    '1183662tVXxcQ',
    'extraInfo',
    '292358JGIqPi',
    'tags',
    '982048YUQbif',
    'default',
    'name',
    'ERR_NO_CONTACT_FOUND',
    '1473ldoXMf',
    '3772wtYHQM'
  ];
  a488_0x5a9a = function () {
    return _0x54867b;
  };
  return a488_0x5a9a();
}
exports[a488_0x567b7e(0x85)] = ShowContactService;
