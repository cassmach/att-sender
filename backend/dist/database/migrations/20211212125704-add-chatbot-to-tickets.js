'use strict';
const a114_0x5409a9 = a114_0x30eb;
(function (_0x577890, _0x5441d9) {
  const _0x48ebce = a114_0x30eb,
    _0x282ac5 = _0x577890();
  while (!![]) {
    try {
      const _0x481f79 =
        (-parseInt(_0x48ebce(0x6b)) / 0x1) *
          (-parseInt(_0x48ebce(0x6d)) / 0x2) +
        (-parseInt(_0x48ebce(0x75)) / 0x3) * (parseInt(_0x48ebce(0x72)) / 0x4) +
        -parseInt(_0x48ebce(0x66)) / 0x5 +
        parseInt(_0x48ebce(0x76)) / 0x6 +
        (-parseInt(_0x48ebce(0x64)) / 0x7) * (parseInt(_0x48ebce(0x79)) / 0x8) +
        -parseInt(_0x48ebce(0x78)) / 0x9 +
        parseInt(_0x48ebce(0x74)) / 0xa;
      if (_0x481f79 === _0x5441d9) break;
      else _0x282ac5['push'](_0x282ac5['shift']());
    } catch (_0x1796cc) {
      _0x282ac5['push'](_0x282ac5['shift']());
    }
  }
})(a114_0xb298, 0x5ea25);
function a114_0xb298() {
  const _0x5aa28e = [
    '1125180XxNArU',
    'addColumn',
    'INTEGER',
    'queueOptionId',
    '__esModule',
    '101vuuWBX',
    'all',
    '9810kaLRTw',
    'SET\x20null',
    'defineProperty',
    'DataTypes',
    'exports',
    '12JBHpqC',
    'chatbot',
    '13333300bktAyj',
    '242367GGuVOj',
    '246408MDahlv',
    'removeColumn',
    '3649284lGxYuz',
    '24LXgDYt',
    '1421707oMhXWH',
    'Tickets'
  ];
  a114_0xb298 = function () {
    return _0x5aa28e;
  };
  return a114_0xb298();
}
Object[a114_0x5409a9(0x6f)](exports, a114_0x5409a9(0x6a), { value: !![] });
function a114_0x30eb(_0x48fdc5, _0x55f3f7) {
  const _0xb29823 = a114_0xb298();
  return (
    (a114_0x30eb = function (_0x30eb04, _0x2f103e) {
      _0x30eb04 = _0x30eb04 - 0x64;
      let _0x49d770 = _0xb29823[_0x30eb04];
      return _0x49d770;
    }),
    a114_0x30eb(_0x48fdc5, _0x55f3f7)
  );
}
const sequelize_1 = require('sequelize');
module[a114_0x5409a9(0x71)] = {
  up: _0x2c912f => {
    const _0x461c0d = a114_0x5409a9;
    return Promise[_0x461c0d(0x6c)]([
      _0x2c912f['addColumn'](_0x461c0d(0x65), _0x461c0d(0x73), {
        type: sequelize_1[_0x461c0d(0x70)]['BOOLEAN'],
        allowNull: !![],
        defaultValue: ![]
      }),
      _0x2c912f[_0x461c0d(0x67)](_0x461c0d(0x65), _0x461c0d(0x69), {
        type: sequelize_1[_0x461c0d(0x70)][_0x461c0d(0x68)],
        references: { model: 'QueueOptions', key: 'id' },
        onUpdate: 'SET\x20null',
        onDelete: _0x461c0d(0x6e),
        allowNull: !![]
      })
    ]);
  },
  down: _0x304060 => {
    const _0x1caa95 = a114_0x5409a9;
    return _0x304060[_0x1caa95(0x77)](_0x1caa95(0x65), 'chatbot');
  }
};
