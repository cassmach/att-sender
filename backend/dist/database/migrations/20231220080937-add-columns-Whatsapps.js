'use strict';
const a269_0x4d5a76 = a269_0x3f0a;
function a269_0x3042() {
  const _0x6a9204 = [
    'DataTypes',
    '__esModule',
    'removeColumn',
    'collectiveVacationEnd',
    'STRING',
    '7429744sJQfFr',
    '20zNzFMh',
    'Whatsapps',
    '24BfNGMJ',
    '65794uMWVfk',
    '3577356wmPngx',
    'addColumn',
    '13770bzVfAb',
    'sequelize',
    '17760oFyJGw',
    '5130336PtsdXL',
    '8973000McQdJB',
    'collectiveVacationMessage',
    'collectiveVacationStart',
    'defineProperty',
    '754525KdZlDX'
  ];
  a269_0x3042 = function () {
    return _0x6a9204;
  };
  return a269_0x3042();
}
(function (_0x431c9, _0x5f35ce) {
  const _0x3190a3 = a269_0x3f0a,
    _0x53a5c7 = _0x431c9();
  while (!![]) {
    try {
      const _0x2e1497 =
        (-parseInt(_0x3190a3(0x1dc)) / 0x1) *
          (parseInt(_0x3190a3(0x1d9)) / 0x2) +
        parseInt(_0x3190a3(0x1dd)) / 0x3 +
        (parseInt(_0x3190a3(0x1db)) / 0x4) *
          (parseInt(_0x3190a3(0x1d2)) / 0x5) +
        -parseInt(_0x3190a3(0x1e3)) / 0x6 +
        -parseInt(_0x3190a3(0x1d8)) / 0x7 +
        -parseInt(_0x3190a3(0x1e2)) / 0x8 +
        (-parseInt(_0x3190a3(0x1df)) / 0x9) *
          (-parseInt(_0x3190a3(0x1e1)) / 0xa);
      if (_0x2e1497 === _0x5f35ce) break;
      else _0x53a5c7['push'](_0x53a5c7['shift']());
    } catch (_0x19f2ce) {
      _0x53a5c7['push'](_0x53a5c7['shift']());
    }
  }
})(a269_0x3042, 0xea23e);
function a269_0x3f0a(_0x1390e2, _0x457c14) {
  const _0x30426c = a269_0x3042();
  return (
    (a269_0x3f0a = function (_0x3f0af0, _0x542632) {
      _0x3f0af0 = _0x3f0af0 - 0x1cf;
      let _0x592e5a = _0x30426c[_0x3f0af0];
      return _0x592e5a;
    }),
    a269_0x3f0a(_0x1390e2, _0x457c14)
  );
}
Object[a269_0x4d5a76(0x1d1)](exports, a269_0x4d5a76(0x1d4), { value: !![] });
const sequelize_1 = require(a269_0x4d5a76(0x1e0));
module['exports'] = {
  up: _0x519aee => {
    const _0x4454ef = a269_0x4d5a76;
    return (
      _0x519aee[_0x4454ef(0x1de)]('Whatsapps', _0x4454ef(0x1d6), {
        type: sequelize_1[_0x4454ef(0x1d3)][_0x4454ef(0x1d7)],
        allowNull: !![],
        defaultValue: null
      }),
      _0x519aee[_0x4454ef(0x1de)](_0x4454ef(0x1da), _0x4454ef(0x1cf), {
        type: sequelize_1['DataTypes'][_0x4454ef(0x1d7)],
        allowNull: !![],
        defaultValue: ''
      }),
      _0x519aee['addColumn'](_0x4454ef(0x1da), _0x4454ef(0x1d0), {
        type: sequelize_1[_0x4454ef(0x1d3)][_0x4454ef(0x1d7)],
        allowNull: !![],
        defaultValue: null
      })
    );
  },
  down: _0x26c763 => {
    const _0x3e197d = a269_0x4d5a76;
    return (
      _0x26c763[_0x3e197d(0x1d5)]('Whatsapps', _0x3e197d(0x1d6)),
      _0x26c763['removeColumn'](_0x3e197d(0x1da), 'collectiveVacationMessage'),
      _0x26c763['removeColumn'](_0x3e197d(0x1da), _0x3e197d(0x1d0))
    );
  }
};
