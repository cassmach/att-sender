'use strict';
function a251_0x37b6(_0x1c79fb, _0x369247) {
  const _0x3402ee = a251_0x3402();
  return (
    (a251_0x37b6 = function (_0x37b62c, _0x181687) {
      _0x37b62c = _0x37b62c - 0x178;
      let _0x3c38b6 = _0x3402ee[_0x37b62c];
      return _0x3c38b6;
    }),
    a251_0x37b6(_0x1c79fb, _0x369247)
  );
}
const a251_0x594731 = a251_0x37b6;
(function (_0x4b653d, _0x25f000) {
  const _0x5701c4 = a251_0x37b6,
    _0x2808c2 = _0x4b653d();
  while (!![]) {
    try {
      const _0x2884a7 =
        (-parseInt(_0x5701c4(0x17b)) / 0x1) *
          (parseInt(_0x5701c4(0x18c)) / 0x2) +
        (-parseInt(_0x5701c4(0x180)) / 0x3) *
          (parseInt(_0x5701c4(0x17e)) / 0x4) +
        (parseInt(_0x5701c4(0x187)) / 0x5) *
          (-parseInt(_0x5701c4(0x18e)) / 0x6) +
        parseInt(_0x5701c4(0x186)) / 0x7 +
        parseInt(_0x5701c4(0x185)) / 0x8 +
        -parseInt(_0x5701c4(0x184)) / 0x9 +
        (-parseInt(_0x5701c4(0x18d)) / 0xa) *
          (-parseInt(_0x5701c4(0x18a)) / 0xb);
      if (_0x2884a7 === _0x25f000) break;
      else _0x2808c2['push'](_0x2808c2['shift']());
    } catch (_0x1699b1) {
      _0x2808c2['push'](_0x2808c2['shift']());
    }
  }
})(a251_0x3402, 0x37257);
function a251_0x3402() {
  const _0x40fcf4 = [
    'addColumn',
    'trial',
    '76052ojiBRP',
    'exports',
    '66ezUIvx',
    'STRING',
    'Plans',
    'recurrence',
    '2942442TqfoYq',
    '2274536jqxXsk',
    '1562463Akhlvl',
    '465YPFWaH',
    'DataTypes',
    'removeColumn',
    '833613UsgAQk',
    '__esModule',
    '283930NJXXgH',
    '100EjRnab',
    '666IRxTqb',
    'defineProperty',
    'BOOLEAN',
    'trialDays',
    '2LoRTfZ'
  ];
  a251_0x3402 = function () {
    return _0x40fcf4;
  };
  return a251_0x3402();
}
Object[a251_0x594731(0x178)](exports, a251_0x594731(0x18b), { value: !![] });
const sequelize_1 = require('sequelize');
module[a251_0x594731(0x17f)] = {
  up: async _0x4ff2ff => {
    const _0x1a4ecf = a251_0x594731;
    return [
      await _0x4ff2ff[_0x1a4ecf(0x17c)](_0x1a4ecf(0x182), 'recurrence', {
        type: sequelize_1[_0x1a4ecf(0x188)][_0x1a4ecf(0x181)],
        allowNull: !![]
      }),
      await _0x4ff2ff['addColumn']('Plans', _0x1a4ecf(0x17d), {
        type: sequelize_1[_0x1a4ecf(0x188)][_0x1a4ecf(0x179)],
        defaultValue: ![]
      }),
      await _0x4ff2ff['addColumn']('Plans', _0x1a4ecf(0x17a), {
        type: sequelize_1['DataTypes']['INTEGER'],
        defaultValue: 0x0
      })
    ];
  },
  down: async _0x4bafcf => {
    const _0x239472 = a251_0x594731;
    return [
      await _0x4bafcf[_0x239472(0x189)]('Plans', _0x239472(0x183)),
      await _0x4bafcf[_0x239472(0x189)](_0x239472(0x182), _0x239472(0x17d)),
      await _0x4bafcf[_0x239472(0x189)]('Plans', _0x239472(0x17a))
    ];
  }
};
