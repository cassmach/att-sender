'use strict';
const a187_0x17ec18 = a187_0xd805;
function a187_0x5d6c() {
  const _0x482958 = [
    '830eloguq',
    'Chatbots',
    'exports',
    'sequelize',
    'SET\x20NULL',
    '103562uxVXnX',
    'removeColumn',
    '22986kwplqk',
    'QueueIntegrations',
    'optIntegrationId',
    '21LFwucZ',
    'addColumn',
    '2HpaKeQ',
    'INTEGER',
    '264nhoTFz',
    '3920884aVTTAa',
    '2324944NTdKIW',
    'DataTypes',
    '727977VzysbG',
    '340674zTXPSW',
    '6415OmtVaR'
  ];
  a187_0x5d6c = function () {
    return _0x482958;
  };
  return a187_0x5d6c();
}
(function (_0x54111f, _0x21ec4a) {
  const _0x31810c = a187_0xd805,
    _0x13be0d = _0x54111f();
  while (!![]) {
    try {
      const _0x385966 =
        (parseInt(_0x31810c(0x160)) / 0x1) *
          (-parseInt(_0x31810c(0x16e)) / 0x2) +
        -parseInt(_0x31810c(0x166)) / 0x3 +
        (-parseInt(_0x31810c(0x162)) / 0x4) *
          (parseInt(_0x31810c(0x168)) / 0x5) +
        (parseInt(_0x31810c(0x167)) / 0x6) *
          (parseInt(_0x31810c(0x15e)) / 0x7) +
        parseInt(_0x31810c(0x164)) / 0x8 +
        (parseInt(_0x31810c(0x170)) / 0x9) *
          (-parseInt(_0x31810c(0x169)) / 0xa) +
        parseInt(_0x31810c(0x163)) / 0xb;
      if (_0x385966 === _0x21ec4a) break;
      else _0x13be0d['push'](_0x13be0d['shift']());
    } catch (_0x2c6ab9) {
      _0x13be0d['push'](_0x13be0d['shift']());
    }
  }
})(a187_0x5d6c, 0x2a9b6);
function a187_0xd805(_0x210c77, _0x94f70f) {
  const _0x5d6cb6 = a187_0x5d6c();
  return (
    (a187_0xd805 = function (_0xd805c2, _0x5970fc) {
      _0xd805c2 = _0xd805c2 - 0x15c;
      let _0x15975d = _0x5d6cb6[_0xd805c2];
      return _0x15975d;
    }),
    a187_0xd805(_0x210c77, _0x94f70f)
  );
}
Object['defineProperty'](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a187_0x17ec18(0x16c));
module[a187_0x17ec18(0x16b)] = {
  up: _0x24cc53 => {
    const _0x46f10c = a187_0x17ec18;
    return _0x24cc53[_0x46f10c(0x15f)](_0x46f10c(0x16a), 'optIntegrationId', {
      type: sequelize_1[_0x46f10c(0x165)][_0x46f10c(0x161)],
      references: { model: _0x46f10c(0x15c), key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: _0x46f10c(0x16d)
    });
  },
  down: _0x4d57e8 => {
    const _0x2d0b67 = a187_0x17ec18;
    return _0x4d57e8[_0x2d0b67(0x16f)](_0x2d0b67(0x15c), _0x2d0b67(0x15d));
  }
};
