'use strict';
const a73_0x2ad0bc = a73_0x16f6;
(function (_0x318f5b, _0x6da3b1) {
  const _0x309951 = a73_0x16f6,
    _0x2fe985 = _0x318f5b();
  while (!![]) {
    try {
      const _0x5dc50d =
        -parseInt(_0x309951(0xee)) / 0x1 +
        (-parseInt(_0x309951(0xeb)) / 0x2) *
          (-parseInt(_0x309951(0xe7)) / 0x3) +
        (-parseInt(_0x309951(0xdc)) / 0x4) *
          (-parseInt(_0x309951(0xe6)) / 0x5) +
        (-parseInt(_0x309951(0xe3)) / 0x6) *
          (-parseInt(_0x309951(0xdd)) / 0x7) +
        (-parseInt(_0x309951(0xec)) / 0x8) *
          (-parseInt(_0x309951(0xe4)) / 0x9) +
        -parseInt(_0x309951(0xea)) / 0xa +
        -parseInt(_0x309951(0xe0)) / 0xb;
      if (_0x5dc50d === _0x6da3b1) break;
      else _0x2fe985['push'](_0x2fe985['shift']());
    } catch (_0x1cefd4) {
      _0x2fe985['push'](_0x2fe985['shift']());
    }
  }
})(a73_0x2775, 0x5fa7d);
Object[a73_0x2ad0bc(0xe2)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a73_0x2ad0bc(0xe1));
module['exports'] = {
  up: _0x28988e => {
    const _0x4177d2 = a73_0x2ad0bc;
    return _0x28988e[_0x4177d2(0xde)]('Messages', 'vcardContactId', {
      type: sequelize_1['DataTypes'][_0x4177d2(0xe9)],
      references: { model: _0x4177d2(0xdf), key: 'id' },
      onUpdate: _0x4177d2(0xed),
      onDelete: _0x4177d2(0xed)
    });
  },
  down: _0x43cbae => {
    const _0x34ac62 = a73_0x2ad0bc;
    return _0x43cbae['removeColumn'](_0x34ac62(0xe8), _0x34ac62(0xe5));
  }
};
function a73_0x16f6(_0x58fd05, _0xf777de) {
  const _0x2775f4 = a73_0x2775();
  return (
    (a73_0x16f6 = function (_0x16f671, _0x31905c) {
      _0x16f671 = _0x16f671 - 0xdc;
      let _0x1d136a = _0x2775f4[_0x16f671];
      return _0x1d136a;
    }),
    a73_0x16f6(_0x58fd05, _0xf777de)
  );
}
function a73_0x2775() {
  const _0x4d38f9 = [
    '8KoAxlm',
    '14vpNpYP',
    'addColumn',
    'Contacts',
    '12425897yGxlfJ',
    'sequelize',
    'defineProperty',
    '1897182OwEMUz',
    '24255VamkIl',
    'vcardContactId',
    '923765Dwhhai',
    '2005119iuZbgG',
    'Messages',
    'INTEGER',
    '1049290hQcBXE',
    '2WVqbmM',
    '1184HNdcHs',
    'CASCADE',
    '442772VMOjGh'
  ];
  a73_0x2775 = function () {
    return _0x4d38f9;
  };
  return a73_0x2775();
}
