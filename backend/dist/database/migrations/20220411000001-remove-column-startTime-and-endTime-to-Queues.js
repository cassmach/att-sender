'use strict';
function a138_0x3915(_0x381853, _0x54f7a4) {
  const _0x2ef085 = a138_0x2ef0();
  return (
    (a138_0x3915 = function (_0x3915e5, _0x4054cf) {
      _0x3915e5 = _0x3915e5 - 0x95;
      let _0x4a7ea4 = _0x2ef085[_0x3915e5];
      return _0x4a7ea4;
    }),
    a138_0x3915(_0x381853, _0x54f7a4)
  );
}
const a138_0x313124 = a138_0x3915;
(function (_0x1d022f, _0x262683) {
  const _0x3463c5 = a138_0x3915,
    _0x4a0070 = _0x1d022f();
  while (!![]) {
    try {
      const _0x4ff8d8 =
        (-parseInt(_0x3463c5(0xa7)) / 0x1) *
          (-parseInt(_0x3463c5(0x9a)) / 0x2) +
        parseInt(_0x3463c5(0x9c)) / 0x3 +
        -parseInt(_0x3463c5(0xa9)) / 0x4 +
        (-parseInt(_0x3463c5(0xa8)) / 0x5) * (parseInt(_0x3463c5(0x98)) / 0x6) +
        (-parseInt(_0x3463c5(0xa2)) / 0x7) * (parseInt(_0x3463c5(0x97)) / 0x8) +
        (-parseInt(_0x3463c5(0xaa)) / 0x9) * (parseInt(_0x3463c5(0xa5)) / 0xa) +
        (-parseInt(_0x3463c5(0x9e)) / 0xb) * (-parseInt(_0x3463c5(0xad)) / 0xc);
      if (_0x4ff8d8 === _0x262683) break;
      else _0x4a0070['push'](_0x4a0070['shift']());
    } catch (_0x375798) {
      _0x4a0070['push'](_0x4a0070['shift']());
    }
  }
})(a138_0x2ef0, 0xa625f);
Object[a138_0x313124(0xab)](exports, a138_0x313124(0xa1), { value: !![] });
const sequelize_1 = require(a138_0x313124(0x9d));
module[a138_0x313124(0xa0)] = {
  up: _0x2ba601 => {
    const _0x30c862 = a138_0x313124;
    return Promise['all']([
      _0x2ba601[_0x30c862(0xa4)](_0x30c862(0xa3), 'startTime'),
      _0x2ba601['removeColumn'](_0x30c862(0xa3), 'endTime'),
      _0x2ba601[_0x30c862(0xa4)]('Queues', _0x30c862(0x96))
    ]);
  },
  down: _0x484533 => {
    const _0x469e22 = a138_0x313124;
    return Promise[_0x469e22(0xa6)]([
      _0x484533[_0x469e22(0xac)]('Queues', _0x469e22(0x99), {
        type: sequelize_1['DataTypes'][_0x469e22(0x9f)],
        defaultValue: null
      }),
      _0x484533[_0x469e22(0xac)](_0x469e22(0xa3), 'endTime', {
        type: sequelize_1[_0x469e22(0x95)][_0x469e22(0x9f)],
        defaultValue: null
      }),
      _0x484533[_0x469e22(0xac)](_0x469e22(0xa3), _0x469e22(0x96), {
        type: sequelize_1['DataTypes'][_0x469e22(0x9b)],
        defaultValue: null
      })
    ]);
  }
};
function a138_0x2ef0() {
  const _0x56abde = [
    '5xpTEcR',
    '736744mVorxw',
    '120618gYDYae',
    'defineProperty',
    'addColumn',
    '12wdOSxL',
    'DataTypes',
    'outOfHoursMessage',
    '35384ShRNAh',
    '843726CUMScS',
    'startTime',
    '2btWUtt',
    'TEXT',
    '2201481WqdsaH',
    'sequelize',
    '14376329gWDHOD',
    'STRING',
    'exports',
    '__esModule',
    '1785tXMBIn',
    'Queues',
    'removeColumn',
    '60gDAuOy',
    'all',
    '172861QpEfRh'
  ];
  a138_0x2ef0 = function () {
    return _0x56abde;
  };
  return a138_0x2ef0();
}
