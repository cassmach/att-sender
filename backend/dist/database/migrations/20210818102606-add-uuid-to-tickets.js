'use strict';
const a107_0x2b8b98 = a107_0x4597;
(function (_0x3c81bf, _0x584775) {
  const _0x121235 = a107_0x4597,
    _0x2afb1c = _0x3c81bf();
  while (!![]) {
    try {
      const _0x471b51 =
        parseInt(_0x121235(0xf7)) / 0x1 +
        (parseInt(_0x121235(0xee)) / 0x2) * (-parseInt(_0x121235(0xff)) / 0x3) +
        -parseInt(_0x121235(0xf9)) / 0x4 +
        parseInt(_0x121235(0x100)) / 0x5 +
        (parseInt(_0x121235(0xf5)) / 0x6) * (-parseInt(_0x121235(0xfc)) / 0x7) +
        (-parseInt(_0x121235(0xf8)) / 0x8) *
          (-parseInt(_0x121235(0x101)) / 0x9) +
        (-parseInt(_0x121235(0xfa)) / 0xa) * (-parseInt(_0x121235(0xeb)) / 0xb);
      if (_0x471b51 === _0x584775) break;
      else _0x2afb1c['push'](_0x2afb1c['shift']());
    } catch (_0x25128e) {
      _0x2afb1c['push'](_0x2afb1c['shift']());
    }
  }
})(a107_0x2277, 0x5a3aa);
function a107_0x2277() {
  const _0x26bd1c = [
    '271761FwtgdD',
    'Tickets',
    'exports',
    '633267WSmmvo',
    '3152640WVieFd',
    '207QskSnY',
    '55VGgOOr',
    'defineProperty',
    'all',
    '6ZaHrQx',
    'UUID',
    'addColumn',
    'sequelize',
    'uuid',
    'UUIDV4',
    'query',
    '30ixrbVO',
    'DataTypes',
    '604667HYbWnU',
    '64368UMNetv',
    '2670192bgVIRm',
    '888510bkmEqZ',
    'removeColumn'
  ];
  a107_0x2277 = function () {
    return _0x26bd1c;
  };
  return a107_0x2277();
}
Object[a107_0x2b8b98(0xec)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a107_0x2b8b98(0xf1));
function a107_0x4597(_0x4db0fd, _0x507108) {
  const _0x2277d6 = a107_0x2277();
  return (
    (a107_0x4597 = function (_0x4597fa, _0x335139) {
      _0x4597fa = _0x4597fa - 0xeb;
      let _0x480c72 = _0x2277d6[_0x4597fa];
      return _0x480c72;
    }),
    a107_0x4597(_0x4db0fd, _0x507108)
  );
}
module[a107_0x2b8b98(0xfe)] = {
  up: _0x307890 => {
    const _0x29db06 = a107_0x2b8b98;
    return Promise[_0x29db06(0xed)]([
      _0x307890['sequelize'][_0x29db06(0xf4)](
        'CREATE\x20EXTENSION\x20IF\x20NOT\x20EXISTS\x20\x22uuid-ossp\x22;'
      ),
      _0x307890[_0x29db06(0xf0)](_0x29db06(0xfd), _0x29db06(0xf2), {
        type: sequelize_1[_0x29db06(0xf6)][_0x29db06(0xef)],
        allowNull: !![],
        defaultValue: require(_0x29db06(0xf1))[_0x29db06(0xf3)]
      })
    ]);
  },
  down: _0xe9015f => {
    const _0x2f33a6 = a107_0x2b8b98;
    return _0xe9015f[_0x2f33a6(0xfb)]('Tickets', _0x2f33a6(0xf2));
  }
};
