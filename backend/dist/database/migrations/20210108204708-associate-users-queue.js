'use strict';
function a81_0x1555() {
  const _0x5e68bc = [
    'defineProperty',
    'UserQueues',
    '102599ZpQLER',
    '16736JmgzcZ',
    '117obioSr',
    'exports',
    'sequelize',
    '90onVoFi',
    '1903990QArtRU',
    '736740kOAFRX',
    'DATE',
    'INTEGER',
    '5768930iSwZWw',
    'DataTypes',
    '1151092QRZNDN',
    '24qMtGOI',
    'dropTable',
    '__esModule',
    '53718nfGYKD'
  ];
  a81_0x1555 = function () {
    return _0x5e68bc;
  };
  return a81_0x1555();
}
const a81_0x358724 = a81_0x28c6;
(function (_0x22dbcd, _0x44e7ea) {
  const _0x41186b = a81_0x28c6,
    _0x28acd3 = _0x22dbcd();
  while (!![]) {
    try {
      const _0x5e0eb0 =
        parseInt(_0x41186b(0x66)) / 0x1 +
        (parseInt(_0x41186b(0x67)) / 0x2) * (parseInt(_0x41186b(0x68)) / 0x3) +
        -parseInt(_0x41186b(0x72)) / 0x4 +
        -parseInt(_0x41186b(0x6c)) / 0x5 +
        (parseInt(_0x41186b(0x6b)) / 0x6) * (parseInt(_0x41186b(0x76)) / 0x7) +
        (-parseInt(_0x41186b(0x73)) / 0x8) * (parseInt(_0x41186b(0x6d)) / 0x9) +
        parseInt(_0x41186b(0x70)) / 0xa;
      if (_0x5e0eb0 === _0x44e7ea) break;
      else _0x28acd3['push'](_0x28acd3['shift']());
    } catch (_0x4c9dde) {
      _0x28acd3['push'](_0x28acd3['shift']());
    }
  }
})(a81_0x1555, 0x327d3);
Object[a81_0x358724(0x77)](exports, a81_0x358724(0x75), { value: !![] });
function a81_0x28c6(_0x48a818, _0xbff516) {
  const _0x1555a9 = a81_0x1555();
  return (
    (a81_0x28c6 = function (_0x28c694, _0x427dc8) {
      _0x28c694 = _0x28c694 - 0x65;
      let _0x3339ac = _0x1555a9[_0x28c694];
      return _0x3339ac;
    }),
    a81_0x28c6(_0x48a818, _0xbff516)
  );
}
const sequelize_1 = require(a81_0x358724(0x6a));
module[a81_0x358724(0x69)] = {
  up: _0x2cfc3b => {
    const _0x143d0e = a81_0x358724;
    return _0x2cfc3b['createTable'](_0x143d0e(0x65), {
      userId: {
        type: sequelize_1[_0x143d0e(0x71)][_0x143d0e(0x6f)],
        primaryKey: !![]
      },
      queueId: {
        type: sequelize_1[_0x143d0e(0x71)]['INTEGER'],
        primaryKey: !![]
      },
      createdAt: {
        type: sequelize_1[_0x143d0e(0x71)][_0x143d0e(0x6e)],
        allowNull: ![]
      },
      updatedAt: { type: sequelize_1[_0x143d0e(0x71)]['DATE'], allowNull: ![] }
    });
  },
  down: _0x5704ce => {
    const _0x5f2dc6 = a81_0x358724;
    return _0x5704ce[_0x5f2dc6(0x74)](_0x5f2dc6(0x65));
  }
};
