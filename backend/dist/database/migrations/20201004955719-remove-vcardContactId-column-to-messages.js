'use strict';
const a74_0x338275 = a74_0x4046;
function a74_0x4046(_0x35a1b1, _0x3dc464) {
  const _0x12c136 = a74_0x12c1();
  return (
    (a74_0x4046 = function (_0x40468c, _0x3cee90) {
      _0x40468c = _0x40468c - 0x115;
      let _0xeef6b3 = _0x12c136[_0x40468c];
      return _0xeef6b3;
    }),
    a74_0x4046(_0x35a1b1, _0x3dc464)
  );
}
(function (_0x50203a, _0x5a500f) {
  const _0x2d1780 = a74_0x4046,
    _0x30d35b = _0x50203a();
  while (!![]) {
    try {
      const _0x1a8367 =
        parseInt(_0x2d1780(0x11d)) / 0x1 +
        parseInt(_0x2d1780(0x124)) / 0x2 +
        parseInt(_0x2d1780(0x120)) / 0x3 +
        (-parseInt(_0x2d1780(0x122)) / 0x4) *
          (parseInt(_0x2d1780(0x118)) / 0x5) +
        parseInt(_0x2d1780(0x121)) / 0x6 +
        parseInt(_0x2d1780(0x115)) / 0x7 +
        -parseInt(_0x2d1780(0x11c)) / 0x8;
      if (_0x1a8367 === _0x5a500f) break;
      else _0x30d35b['push'](_0x30d35b['shift']());
    } catch (_0x1fed5d) {
      _0x30d35b['push'](_0x30d35b['shift']());
    }
  }
})(a74_0x12c1, 0x6487d);
function a74_0x12c1() {
  const _0x1b4f6d = [
    'Contacts',
    '786710LkpuXt',
    'vcardContactId',
    '3193197jLiehJ',
    'Messages',
    'sequelize',
    '33270WefGrO',
    'exports',
    '__esModule',
    'addColumn',
    '13473872bxVskn',
    '345381sexzvO',
    'removeColumn',
    'DataTypes',
    '2107731drTIWX',
    '1829922mybCuF',
    '64GvptVR'
  ];
  a74_0x12c1 = function () {
    return _0x1b4f6d;
  };
  return a74_0x12c1();
}
Object['defineProperty'](exports, a74_0x338275(0x11a), { value: !![] });
const sequelize_1 = require(a74_0x338275(0x117));
module[a74_0x338275(0x119)] = {
  up: _0x9ce87a => {
    const _0x1d0ebc = a74_0x338275;
    return _0x9ce87a[_0x1d0ebc(0x11e)](_0x1d0ebc(0x116), _0x1d0ebc(0x125));
  },
  down: _0x4aa9b0 => {
    const _0x728fe8 = a74_0x338275;
    return _0x4aa9b0[_0x728fe8(0x11b)](_0x728fe8(0x116), 'vcardContactId', {
      type: sequelize_1[_0x728fe8(0x11f)]['INTEGER'],
      references: { model: _0x728fe8(0x123), key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  }
};
