'use strict';
function a332_0x5106(_0x19a5c4, _0x50ca3a) {
  var _0x59eac3 = a332_0x59ea();
  return (
    (a332_0x5106 = function (_0x510690, _0x4bb66d) {
      _0x510690 = _0x510690 - 0x141;
      var _0x27dc20 = _0x59eac3[_0x510690];
      return _0x27dc20;
    }),
    a332_0x5106(_0x19a5c4, _0x50ca3a)
  );
}
var a332_0x5a043e = a332_0x5106;
(function (_0x22cb43, _0x51db62) {
  var _0xe1a00f = a332_0x5106,
    _0x2ed2b5 = _0x22cb43();
  while (!![]) {
    try {
      var _0x567596 =
        parseInt(_0xe1a00f(0x14a)) / 0x1 +
        -parseInt(_0xe1a00f(0x148)) / 0x2 +
        parseInt(_0xe1a00f(0x150)) / 0x3 +
        -parseInt(_0xe1a00f(0x167)) / 0x4 +
        (-parseInt(_0xe1a00f(0x14f)) / 0x5) *
          (parseInt(_0xe1a00f(0x15b)) / 0x6) +
        (parseInt(_0xe1a00f(0x154)) / 0x7) *
          (-parseInt(_0xe1a00f(0x155)) / 0x8) +
        (-parseInt(_0xe1a00f(0x149)) / 0x9) *
          (-parseInt(_0xe1a00f(0x145)) / 0xa);
      if (_0x567596 === _0x51db62) break;
      else _0x2ed2b5['push'](_0x2ed2b5['shift']());
    } catch (_0x16481c) {
      _0x2ed2b5['push'](_0x2ed2b5['shift']());
    }
  }
})(a332_0x59ea, 0xe6084);
function a332_0x59ea() {
  var _0x277bbb = [
    '1008MtmsdF',
    'contact',
    '__importDefault',
    'Model',
    'function',
    'BelongsTo',
    'default',
    '__decorate',
    'contactId',
    'UpdatedAt',
    'CreatedAt',
    'object',
    '1669312fTwQYz',
    'design:type',
    'PrimaryKey',
    './User',
    'length',
    'wallet',
    '290VrSWRk',
    'prototype',
    'ForeignKey',
    '3629478eMjUUG',
    '1363806AyYLmZ',
    '233XKUioy',
    'Column',
    'Table',
    'decorate',
    'walletId',
    '28445XEeQkF',
    '2700243RhbFSt',
    'getOwnPropertyDescriptor',
    './Company',
    'defineProperty',
    '8153383HLjctD',
    '8eyhGlE',
    'createdAt',
    'sequelize-typescript',
    '__esModule',
    'updatedAt',
    'metadata'
  ];
  a332_0x59ea = function () {
    return _0x277bbb;
  };
  return a332_0x59ea();
}
var __decorate =
    (this && this[a332_0x5a043e(0x162)]) ||
    function (_0x4756d1, _0x1f1200, _0x50d5dd, _0x4869f4) {
      var _0x273269 = a332_0x5a043e,
        _0x4b6067 = arguments[_0x273269(0x143)],
        _0x35b908 =
          _0x4b6067 < 0x3
            ? _0x1f1200
            : _0x4869f4 === null
              ? (_0x4869f4 = Object[_0x273269(0x151)](_0x1f1200, _0x50d5dd))
              : _0x4869f4,
        _0xc3acf8;
      if (
        typeof Reflect === _0x273269(0x166) &&
        typeof Reflect[_0x273269(0x14d)] === 'function'
      )
        _0x35b908 = Reflect['decorate'](
          _0x4756d1,
          _0x1f1200,
          _0x50d5dd,
          _0x4869f4
        );
      else {
        for (
          var _0x5a6020 = _0x4756d1[_0x273269(0x143)] - 0x1;
          _0x5a6020 >= 0x0;
          _0x5a6020--
        )
          if ((_0xc3acf8 = _0x4756d1[_0x5a6020]))
            _0x35b908 =
              (_0x4b6067 < 0x3
                ? _0xc3acf8(_0x35b908)
                : _0x4b6067 > 0x3
                  ? _0xc3acf8(_0x1f1200, _0x50d5dd, _0x35b908)
                  : _0xc3acf8(_0x1f1200, _0x50d5dd)) || _0x35b908;
      }
      return (
        _0x4b6067 > 0x3 &&
          _0x35b908 &&
          Object[_0x273269(0x153)](_0x1f1200, _0x50d5dd, _0x35b908),
        _0x35b908
      );
    },
  __metadata =
    (this && this['__metadata']) ||
    function (_0x48b0b6, _0x4d2470) {
      var _0x4b3953 = a332_0x5a043e;
      if (
        typeof Reflect === _0x4b3953(0x166) &&
        typeof Reflect[_0x4b3953(0x15a)] === _0x4b3953(0x15f)
      )
        return Reflect[_0x4b3953(0x15a)](_0x48b0b6, _0x4d2470);
    },
  __importDefault =
    (this && this[a332_0x5a043e(0x15d)]) ||
    function (_0x47341f) {
      var _0xb301a9 = a332_0x5a043e;
      return _0x47341f && _0x47341f[_0xb301a9(0x158)]
        ? _0x47341f
        : { default: _0x47341f };
    };
Object['defineProperty'](exports, a332_0x5a043e(0x158), { value: !![] });
const sequelize_typescript_1 = require(a332_0x5a043e(0x157)),
  Contact_1 = __importDefault(require('./Contact')),
  Company_1 = __importDefault(require(a332_0x5a043e(0x152))),
  User_1 = __importDefault(require(a332_0x5a043e(0x142)));
let ContactWallet = class ContactWallet extends sequelize_typescript_1[
  a332_0x5a043e(0x15e)
] {};
__decorate(
  [
    sequelize_typescript_1[a332_0x5a043e(0x141)],
    sequelize_typescript_1['AutoIncrement'],
    sequelize_typescript_1[a332_0x5a043e(0x14b)],
    __metadata('design:type', Number)
  ],
  ContactWallet[a332_0x5a043e(0x146)],
  'id',
  void 0x0
),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a332_0x5a043e(0x147)])(
        () => Contact_1['default']
      ),
      sequelize_typescript_1[a332_0x5a043e(0x14b)],
      __metadata(a332_0x5a043e(0x168), Number)
    ],
    ContactWallet[a332_0x5a043e(0x146)],
    a332_0x5a043e(0x163),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a332_0x5a043e(0x160)])(
        () => Contact_1['default']
      ),
      __metadata(a332_0x5a043e(0x168), Contact_1[a332_0x5a043e(0x161)])
    ],
    ContactWallet['prototype'],
    a332_0x5a043e(0x15c),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a332_0x5a043e(0x147)])(
        () => User_1[a332_0x5a043e(0x161)]
      ),
      sequelize_typescript_1['Column'],
      __metadata(a332_0x5a043e(0x168), Number)
    ],
    ContactWallet[a332_0x5a043e(0x146)],
    a332_0x5a043e(0x14e),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a332_0x5a043e(0x160)])(
        () => User_1[a332_0x5a043e(0x161)]
      ),
      __metadata(a332_0x5a043e(0x168), User_1[a332_0x5a043e(0x161)])
    ],
    ContactWallet['prototype'],
    a332_0x5a043e(0x144),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a332_0x5a043e(0x147)])(
        () => Company_1['default']
      ),
      sequelize_typescript_1[a332_0x5a043e(0x14b)],
      __metadata(a332_0x5a043e(0x168), Number)
    ],
    ContactWallet[a332_0x5a043e(0x146)],
    'companyId',
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a332_0x5a043e(0x160)])(
        () => Company_1[a332_0x5a043e(0x161)]
      ),
      __metadata(a332_0x5a043e(0x168), Company_1[a332_0x5a043e(0x161)])
    ],
    ContactWallet[a332_0x5a043e(0x146)],
    'company',
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a332_0x5a043e(0x165)],
      __metadata(a332_0x5a043e(0x168), Date)
    ],
    ContactWallet[a332_0x5a043e(0x146)],
    a332_0x5a043e(0x156),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a332_0x5a043e(0x164)],
      __metadata(a332_0x5a043e(0x168), Date)
    ],
    ContactWallet[a332_0x5a043e(0x146)],
    a332_0x5a043e(0x159),
    void 0x0
  ),
  (ContactWallet = __decorate(
    [sequelize_typescript_1[a332_0x5a043e(0x14c)]],
    ContactWallet
  )),
  (exports[a332_0x5a043e(0x161)] = ContactWallet);
