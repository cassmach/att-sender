'use strict';
function a261_0x2eea() {
  const _0x4bb4ea = [
    '__esModule',
    '258505ZqKatt',
    '3664hvJkOB',
    '6714WyzHkG',
    '1963388cDBNrB',
    '44223ZETvFA',
    'BOOLEAN',
    'defineProperty',
    'useIntegrations',
    'DataTypes',
    '42EhCdLA',
    'Plans',
    '639233cYzISg',
    '1286838DnnLPC',
    'exports',
    '10zTHljz',
    '996700wZqrbE',
    'addColumn',
    'useOpenAi',
    '22HhyaEX',
    'removeColumn',
    'sequelize'
  ];
  a261_0x2eea = function () {
    return _0x4bb4ea;
  };
  return a261_0x2eea();
}
function a261_0x190f(_0x47cfca, _0x162154) {
  const _0x2eea33 = a261_0x2eea();
  return (
    (a261_0x190f = function (_0x190fa5, _0x44b78b) {
      _0x190fa5 = _0x190fa5 - 0x1b6;
      let _0x3e928c = _0x2eea33[_0x190fa5];
      return _0x3e928c;
    }),
    a261_0x190f(_0x47cfca, _0x162154)
  );
}
const a261_0x1aa2cf = a261_0x190f;
(function (_0x42f629, _0x3aa1db) {
  const _0x3f7091 = a261_0x190f,
    _0x158532 = _0x42f629();
  while (!![]) {
    try {
      const _0x42eaed =
        (-parseInt(_0x3f7091(0x1c7)) / 0x1) *
          (-parseInt(_0x3f7091(0x1bb)) / 0x2) +
        -parseInt(_0x3f7091(0x1b9)) / 0x3 +
        -parseInt(_0x3f7091(0x1c6)) / 0x4 +
        (parseInt(_0x3f7091(0x1c3)) / 0x5) *
          (parseInt(_0x3f7091(0x1b6)) / 0x6) +
        parseInt(_0x3f7091(0x1b8)) / 0x7 +
        (-parseInt(_0x3f7091(0x1c4)) / 0x8) *
          (-parseInt(_0x3f7091(0x1c5)) / 0x9) +
        (parseInt(_0x3f7091(0x1bc)) / 0xa) * (parseInt(_0x3f7091(0x1bf)) / 0xb);
      if (_0x42eaed === _0x3aa1db) break;
      else _0x158532['push'](_0x158532['shift']());
    } catch (_0x4fcb36) {
      _0x158532['push'](_0x158532['shift']());
    }
  }
})(a261_0x2eea, 0x48284);
Object[a261_0x1aa2cf(0x1c9)](exports, a261_0x1aa2cf(0x1c2), { value: !![] });
const sequelize_1 = require(a261_0x1aa2cf(0x1c1));
module[a261_0x1aa2cf(0x1ba)] = {
  up: _0x1fbb6a => {
    const _0x5db99b = a261_0x1aa2cf;
    return (
      _0x1fbb6a[_0x5db99b(0x1bd)](_0x5db99b(0x1b7), _0x5db99b(0x1be), {
        type: sequelize_1[_0x5db99b(0x1cb)][_0x5db99b(0x1c8)],
        defaultValue: !![]
      }),
      _0x1fbb6a[_0x5db99b(0x1bd)]('Plans', _0x5db99b(0x1ca), {
        type: sequelize_1[_0x5db99b(0x1cb)][_0x5db99b(0x1c8)],
        defaultValue: !![]
      })
    );
  },
  down: _0x4023db => {
    const _0x12da2c = a261_0x1aa2cf;
    return (
      _0x4023db[_0x12da2c(0x1c0)](_0x12da2c(0x1b7), 'useOpenAi'),
      _0x4023db['removeColumn'](_0x12da2c(0x1b7), _0x12da2c(0x1ca))
    );
  }
};
