'use strict';
function a224_0x572a() {
  const _0x39131f = [
    '__esModule',
    'DataTypes',
    '1110312EYCQve',
    '8GXPcIx',
    'sequelize',
    '1785681CgzVCU',
    '10AcLiFk',
    'DATE',
    '8402OPhoia',
    '8YqRpGD',
    '21245cgnRVs',
    'imported',
    'exports',
    '440111PnleDs',
    'Tickets',
    '12574386fDTers',
    '804363jZbTDh',
    '60hrMLFC',
    'removeColumn'
  ];
  a224_0x572a = function () {
    return _0x39131f;
  };
  return a224_0x572a();
}
const a224_0x13e465 = a224_0x12cd;
(function (_0x26d291, _0x14971a) {
  const _0x247ccf = a224_0x12cd,
    _0x363031 = _0x26d291();
  while (!![]) {
    try {
      const _0x4d000f =
        (parseInt(_0x247ccf(0x1fa)) / 0x1) *
          (-parseInt(_0x247ccf(0x1f0)) / 0x2) +
        -parseInt(_0x247ccf(0x1ef)) / 0x3 +
        (parseInt(_0x247ccf(0x1fb)) / 0x4) *
          (-parseInt(_0x247ccf(0x1fc)) / 0x5) +
        -parseInt(_0x247ccf(0x1f4)) / 0x6 +
        (-parseInt(_0x247ccf(0x1ec)) / 0x7) *
          (-parseInt(_0x247ccf(0x1f5)) / 0x8) +
        -parseInt(_0x247ccf(0x1f7)) / 0x9 +
        (-parseInt(_0x247ccf(0x1f8)) / 0xa) *
          (-parseInt(_0x247ccf(0x1ee)) / 0xb);
      if (_0x4d000f === _0x14971a) break;
      else _0x363031['push'](_0x363031['shift']());
    } catch (_0x3ba7a7) {
      _0x363031['push'](_0x363031['shift']());
    }
  }
})(a224_0x572a, 0x47be3);
Object['defineProperty'](exports, a224_0x13e465(0x1f2), { value: !![] });
function a224_0x12cd(_0x29eab0, _0x14ef72) {
  const _0x572ad7 = a224_0x572a();
  return (
    (a224_0x12cd = function (_0x12cde1, _0x25c8c5) {
      _0x12cde1 = _0x12cde1 - 0x1eb;
      let _0x23a928 = _0x572ad7[_0x12cde1];
      return _0x23a928;
    }),
    a224_0x12cd(_0x29eab0, _0x14ef72)
  );
}
const sequelize_1 = require(a224_0x13e465(0x1f6));
module[a224_0x13e465(0x1eb)] = {
  up: _0x4a1ae7 => {
    const _0x125306 = a224_0x13e465;
    return _0x4a1ae7['addColumn'](_0x125306(0x1ed), 'imported', {
      type: sequelize_1[_0x125306(0x1f3)][_0x125306(0x1f9)],
      allowNull: !![]
    });
  },
  down: _0x204e8f => {
    const _0x2b0db7 = a224_0x13e465;
    return _0x204e8f[_0x2b0db7(0x1f1)]('Tickets', _0x2b0db7(0x1fd));
  }
};
