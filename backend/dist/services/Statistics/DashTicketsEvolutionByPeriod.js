'use strict';
const a598_0x152fb7 = a598_0x2852;
(function (_0x58e4b1, _0x55b778) {
  const _0x8a380d = a598_0x2852,
    _0x3eb3df = _0x58e4b1();
  while (!![]) {
    try {
      const _0xeba83b =
        parseInt(_0x8a380d(0x16f)) / 0x1 +
        (parseInt(_0x8a380d(0x16d)) / 0x2) *
          (parseInt(_0x8a380d(0x177)) / 0x3) +
        (parseInt(_0x8a380d(0x169)) / 0x4) *
          (-parseInt(_0x8a380d(0x173)) / 0x5) +
        parseInt(_0x8a380d(0x165)) / 0x6 +
        -parseInt(_0x8a380d(0x16c)) / 0x7 +
        -parseInt(_0x8a380d(0x171)) / 0x8 +
        (parseInt(_0x8a380d(0x175)) / 0x9) * (parseInt(_0x8a380d(0x16a)) / 0xa);
      if (_0xeba83b === _0x55b778) break;
      else _0x3eb3df['push'](_0x3eb3df['shift']());
    } catch (_0x654014) {
      _0x3eb3df['push'](_0x3eb3df['shift']());
    }
  }
})(a598_0x1386, 0xdd24d);
function a598_0x2852(_0x5b4f9e, _0x1aabdd) {
  const _0x13860f = a598_0x1386();
  return (
    (a598_0x2852 = function (_0x285233, _0x261114) {
      _0x285233 = _0x285233 - 0x165;
      let _0x21ff53 = _0x13860f[_0x285233];
      return _0x21ff53;
    }),
    a598_0x2852(_0x5b4f9e, _0x1aabdd)
  );
}
var __importDefault =
  (this && this[a598_0x152fb7(0x16b)]) ||
  function (_0x3e94c5) {
    return _0x3e94c5 && _0x3e94c5['__esModule']
      ? _0x3e94c5
      : { default: _0x3e94c5 };
  };
function a598_0x1386() {
  const _0x27e1d5 = [
    'sequelize',
    '28988qZoYlV',
    '1408920NHQuhY',
    '__importDefault',
    '2325043cEltqz',
    '66nvTEur',
    '\x0a\x20\x20select\x0a\x20\x20dt_ref,\x0a\x20\x20to_char(dt_ref,\x20\x27DD/MM/YYYY\x27)\x20as\x20label,\x0a\x20\x20qtd\x0a\x20\x20--ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x0a\x20\x20from\x20(\x0a\x20\x20select\x0a\x20\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20dt_ref,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x20and\x20lt.\x22userId\x22\x20=\x20:userId\x0a\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x201\x0a',
    '517938XRaLIQ',
    'QueryTypes',
    '8801952qmICID',
    '\x0a\x20\x20select\x0a\x20\x20dt_ref,\x0a\x20\x20to_char(dt_ref,\x20\x27DD/MM/YYYY\x27)\x20as\x20label,\x0a\x20\x20qtd\x0a\x20\x20--ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x0a\x20\x20from\x20(\x0a\x20\x20select\x0a\x20\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20dt_ref,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x201\x0a',
    '935kRtlXY',
    '../../database',
    '189jHQuUS',
    'query',
    '12108dqAZtj',
    'default',
    '501174BGXPTB',
    'defineProperty',
    '__esModule'
  ];
  a598_0x1386 = function () {
    return _0x27e1d5;
  };
  return a598_0x1386();
}
Object[a598_0x152fb7(0x166)](exports, a598_0x152fb7(0x167), { value: !![] });
const sequelize_1 = require(a598_0x152fb7(0x168)),
  database_1 = __importDefault(require(a598_0x152fb7(0x174))),
  queryAdmin = a598_0x152fb7(0x172),
  query = a598_0x152fb7(0x16e),
  DashTicketsEvolutionByPeriod = async ({
    startDate: _0x3a8f44,
    endDate: _0x4af75d,
    companyId: _0x2e40fe,
    userId: _0x40bf96,
    userProfile: _0x55f10c
  }) => {
    const _0x5bfc93 = a598_0x152fb7,
      _0x5f241e = await database_1['default'][_0x5bfc93(0x176)](
        _0x55f10c == 'admin' ? queryAdmin : query,
        {
          replacements: {
            companyId: _0x2e40fe,
            startDate: _0x3a8f44,
            endDate: _0x4af75d,
            userId: _0x40bf96
          },
          type: sequelize_1[_0x5bfc93(0x170)]['SELECT']
        }
      );
    return _0x5f241e;
  };
exports[a598_0x152fb7(0x178)] = DashTicketsEvolutionByPeriod;
