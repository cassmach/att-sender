'use strict';
const a80_0x4fa72c = a80_0x34c1;
function a80_0x3128() {
  const _0x211939 = [
    '336065xJGrwF',
    'dropTable',
    '__esModule',
    'defineProperty',
    'INTEGER',
    '317546TgLXnp',
    '1385970gRtrwI',
    'exports',
    '14eqzvNN',
    '83308qbXsDL',
    '27YtXPZs',
    'DATE',
    '855375TxqVSV',
    'WhatsappQueues',
    'DataTypes',
    '2082357SCKbqy',
    '30clTDnB',
    '734568ApEfZR'
  ];
  a80_0x3128 = function () {
    return _0x211939;
  };
  return a80_0x3128();
}
function a80_0x34c1(_0x1e0ed9, _0x50fa74) {
  const _0x31286e = a80_0x3128();
  return (
    (a80_0x34c1 = function (_0x34c166, _0x426dc1) {
      _0x34c166 = _0x34c166 - 0x9c;
      let _0x24c4f7 = _0x31286e[_0x34c166];
      return _0x24c4f7;
    }),
    a80_0x34c1(_0x1e0ed9, _0x50fa74)
  );
}
(function (_0xcb8c36, _0x104866) {
  const _0x98579f = a80_0x34c1,
    _0x554226 = _0xcb8c36();
  while (!![]) {
    try {
      const _0x1dec8c =
        -parseInt(_0x98579f(0xa1)) / 0x1 +
        parseInt(_0x98579f(0xac)) / 0x2 +
        (-parseInt(_0x98579f(0x9f)) / 0x3) * (parseInt(_0x98579f(0x9e)) / 0x4) +
        parseInt(_0x98579f(0xa7)) / 0x5 +
        (parseInt(_0x98579f(0xad)) / 0x6) * (parseInt(_0x98579f(0x9d)) / 0x7) +
        parseInt(_0x98579f(0xa6)) / 0x8 +
        (parseInt(_0x98579f(0xa4)) / 0x9) * (parseInt(_0x98579f(0xa5)) / 0xa);
      if (_0x1dec8c === _0x104866) break;
      else _0x554226['push'](_0x554226['shift']());
    } catch (_0xad60a7) {
      _0x554226['push'](_0x554226['shift']());
    }
  }
})(a80_0x3128, 0x693fa);
Object[a80_0x4fa72c(0xaa)](exports, a80_0x4fa72c(0xa9), { value: !![] });
const sequelize_1 = require('sequelize');
module[a80_0x4fa72c(0x9c)] = {
  up: _0x239f92 => {
    const _0x525fe4 = a80_0x4fa72c;
    return _0x239f92['createTable'](_0x525fe4(0xa2), {
      whatsappId: {
        type: sequelize_1[_0x525fe4(0xa3)][_0x525fe4(0xab)],
        primaryKey: !![]
      },
      queueId: {
        type: sequelize_1[_0x525fe4(0xa3)]['INTEGER'],
        primaryKey: !![]
      },
      createdAt: {
        type: sequelize_1[_0x525fe4(0xa3)][_0x525fe4(0xa0)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x525fe4(0xa3)][_0x525fe4(0xa0)],
        allowNull: ![]
      }
    });
  },
  down: _0x587f7e => {
    const _0x74ef52 = a80_0x4fa72c;
    return _0x587f7e[_0x74ef52(0xa8)](_0x74ef52(0xa2));
  }
};
