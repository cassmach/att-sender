'use strict';
const a23_0x5b75ac = a23_0x4488;
(function (_0x23a5ac, _0x442bb5) {
  const _0x4b37b8 = a23_0x4488,
    _0x3f0532 = _0x23a5ac();
  while (!![]) {
    try {
      const _0x2cc2f5 =
        -parseInt(_0x4b37b8(0x177)) / 0x1 +
        (-parseInt(_0x4b37b8(0x12c)) / 0x2) *
          (parseInt(_0x4b37b8(0x107)) / 0x3) +
        -parseInt(_0x4b37b8(0x111)) / 0x4 +
        (parseInt(_0x4b37b8(0x17a)) / 0x5) *
          (-parseInt(_0x4b37b8(0x109)) / 0x6) +
        (-parseInt(_0x4b37b8(0x16c)) / 0x7) *
          (-parseInt(_0x4b37b8(0x171)) / 0x8) +
        -parseInt(_0x4b37b8(0x139)) / 0x9 +
        (-parseInt(_0x4b37b8(0x134)) / 0xa) *
          (-parseInt(_0x4b37b8(0x162)) / 0xb);
      if (_0x2cc2f5 === _0x442bb5) break;
      else _0x3f0532['push'](_0x3f0532['shift']());
    } catch (_0x3b900d) {
      _0x3f0532['push'](_0x3f0532['shift']());
    }
  }
})(a23_0x315f, 0xdfe18);
function a23_0x4488(_0xb776e6, _0x565858) {
  const _0x315f7f = a23_0x315f();
  return (
    (a23_0x4488 = function (_0x448821, _0x108a48) {
      _0x448821 = _0x448821 - 0x105;
      let _0x2c0673 = _0x315f7f[_0x448821];
      return _0x2c0673;
    }),
    a23_0x4488(_0xb776e6, _0x565858)
  );
}
var __createBinding =
    (this && this['__createBinding']) ||
    (Object[a23_0x5b75ac(0x173)]
      ? function (_0x1a11ca, _0x2bdb6e, _0x4045ca, _0x372a6c) {
          const _0x2daa3f = a23_0x5b75ac;
          if (_0x372a6c === undefined) _0x372a6c = _0x4045ca;
          var _0xced67b = Object['getOwnPropertyDescriptor'](
            _0x2bdb6e,
            _0x4045ca
          );
          (!_0xced67b ||
            (_0x2daa3f(0x178) in _0xced67b
              ? !_0x2bdb6e[_0x2daa3f(0x189)]
              : _0xced67b[_0x2daa3f(0x138)] || _0xced67b[_0x2daa3f(0x165)])) &&
            (_0xced67b = {
              enumerable: !![],
              get: function () {
                return _0x2bdb6e[_0x4045ca];
              }
            }),
            Object['defineProperty'](_0x1a11ca, _0x372a6c, _0xced67b);
        }
      : function (_0x2c91ee, _0x228b25, _0x1af4aa, _0x232240) {
          if (_0x232240 === undefined) _0x232240 = _0x1af4aa;
          _0x2c91ee[_0x232240] = _0x228b25[_0x1af4aa];
        }),
  __setModuleDefault =
    (this && this[a23_0x5b75ac(0x11f)]) ||
    (Object['create']
      ? function (_0x5d5834, _0x5d6874) {
          const _0x4029d7 = a23_0x5b75ac;
          Object[_0x4029d7(0x17d)](_0x5d5834, _0x4029d7(0x146), {
            enumerable: !![],
            value: _0x5d6874
          });
        }
      : function (_0x43fdb3, _0x3762d2) {
          const _0x1b7c99 = a23_0x5b75ac;
          _0x43fdb3[_0x1b7c99(0x146)] = _0x3762d2;
        }),
  __importStar =
    (this && this[a23_0x5b75ac(0x168)]) ||
    function (_0x2ccec9) {
      const _0x3b38b4 = a23_0x5b75ac;
      if (_0x2ccec9 && _0x2ccec9[_0x3b38b4(0x189)]) return _0x2ccec9;
      var _0x4f279a = {};
      if (_0x2ccec9 != null) {
        for (var _0x952944 in _0x2ccec9)
          if (
            _0x952944 !== 'default' &&
            Object['prototype']['hasOwnProperty'][_0x3b38b4(0x169)](
              _0x2ccec9,
              _0x952944
            )
          )
            __createBinding(_0x4f279a, _0x2ccec9, _0x952944);
      }
      return __setModuleDefault(_0x4f279a, _0x2ccec9), _0x4f279a;
    },
  __importDefault =
    (this && this[a23_0x5b75ac(0x12e)]) ||
    function (_0x1276fc) {
      return _0x1276fc && _0x1276fc['__esModule']
        ? _0x1276fc
        : { default: _0x1276fc };
    };
Object[a23_0x5b75ac(0x17d)](exports, a23_0x5b75ac(0x189), { value: !![] }),
  (exports[a23_0x5b75ac(0x170)] =
    exports[a23_0x5b75ac(0x175)] =
    exports[a23_0x5b75ac(0x185)] =
    exports[a23_0x5b75ac(0x145)] =
    exports[a23_0x5b75ac(0x182)] =
    exports[a23_0x5b75ac(0x10d)] =
    exports[a23_0x5b75ac(0x163)] =
      void 0x0);
const AppError_1 = __importDefault(require(a23_0x5b75ac(0x141))),
  fs_1 = __importDefault(require('fs')),
  SetTicketMessagesAsRead_1 = __importDefault(require(a23_0x5b75ac(0x14d))),
  socket_1 = require(a23_0x5b75ac(0x115)),
  Message_1 = __importDefault(require(a23_0x5b75ac(0x157))),
  Queue_1 = __importDefault(require(a23_0x5b75ac(0x114))),
  User_1 = __importDefault(require('../models/User')),
  Whatsapp_1 = __importDefault(require('../models/Whatsapp')),
  jsonwebtoken_1 = require('jsonwebtoken'),
  auth_1 = __importDefault(require(a23_0x5b75ac(0x176))),
  path_1 = __importDefault(require(a23_0x5b75ac(0x10b))),
  lodash_1 = require('lodash'),
  ListMessagesService_1 = __importDefault(require(a23_0x5b75ac(0x113))),
  ShowTicketService_1 = __importDefault(require(a23_0x5b75ac(0x183))),
  DeleteWhatsAppMessage_1 = __importDefault(
    require('../services/WbotServices/DeleteWhatsAppMessage')
  ),
  SendWhatsAppMedia_1 = __importDefault(require(a23_0x5b75ac(0x11b))),
  SendWhatsAppMessage_1 = __importDefault(require(a23_0x5b75ac(0x147))),
  CreateMessageService_1 = __importDefault(require(a23_0x5b75ac(0x154))),
  sendFacebookMessageMedia_1 = require(a23_0x5b75ac(0x161)),
  sendFacebookMessage_1 = __importDefault(require(a23_0x5b75ac(0x156))),
  ShowPlanCompanyService_1 = __importDefault(require(a23_0x5b75ac(0x16f))),
  ListMessagesServiceAll_1 = __importDefault(require(a23_0x5b75ac(0x14c))),
  ShowContactService_1 = __importDefault(require(a23_0x5b75ac(0x12b))),
  FindOrCreateTicketService_1 = __importDefault(require(a23_0x5b75ac(0x14a))),
  UpdateTicketService_1 = __importDefault(require(a23_0x5b75ac(0x167))),
  ShowMessageService_1 = __importStar(
    require('../services/MessageServices/ShowMessageService')
  ),
  CompaniesSettings_1 = __importDefault(require(a23_0x5b75ac(0x13d))),
  facebookMessageListener_1 = require('../services/FacebookServices/facebookMessageListener'),
  index = async (_0x4a6377, _0xc7b343) => {
    const _0xa8671 = a23_0x5b75ac,
      { ticketId: _0x5b0b41 } = _0x4a6377['params'],
      { pageNumber: _0x2c855b, selectedQueues: _0x2a013b } =
        _0x4a6377[_0xa8671(0x117)],
      { companyId: _0x4e7e47, profile: _0x4668b2 } = _0x4a6377[_0xa8671(0x128)];
    let _0x41a0bb = [];
    const _0x5cf1f1 = await User_1[_0xa8671(0x146)]['findByPk'](
      _0x4a6377[_0xa8671(0x128)]['id'],
      { include: [{ model: Queue_1[_0xa8671(0x146)], as: 'queues' }] }
    );
    _0x2a013b
      ? (_0x41a0bb = JSON[_0xa8671(0x13b)](_0x2a013b))
      : _0x5cf1f1[_0xa8671(0x18b)][_0xa8671(0x143)](_0x2553be => {
          _0x41a0bb['push'](_0x2553be['id']);
        });
    const {
      count: _0x2dc53c,
      messages: _0x27ef3d,
      ticket: _0x34f297,
      hasMore: _0xfd38ae
    } = await (0x0, ListMessagesService_1[_0xa8671(0x146)])({
      pageNumber: _0x2c855b,
      ticketId: _0x5b0b41,
      companyId: _0x4e7e47,
      queues: _0x41a0bb,
      user: _0x5cf1f1
    });
    return (
      _0x34f297[_0xa8671(0x13a)] === _0xa8671(0x120) &&
        (0x0, SetTicketMessagesAsRead_1[_0xa8671(0x146)])(_0x34f297),
      _0xc7b343[_0xa8671(0x184)]({
        count: _0x2dc53c,
        messages: _0x27ef3d,
        ticket: _0x34f297,
        hasMore: _0xfd38ae
      })
    );
  };
exports[a23_0x5b75ac(0x163)] = index;
function obterNomeEExtensaoDoArquivo(_0x456b9b) {
  const _0x4814a6 = a23_0x5b75ac;
  var _0xf02234 = new URL(_0x456b9b),
    _0x4d1376 = _0xf02234[_0x4814a6(0x150)],
    _0x18e1f0 = _0x4d1376[_0x4814a6(0x11c)]('/')['pop'](),
    _0x19a751 = _0x18e1f0[_0x4814a6(0x11c)]('.'),
    _0x498f35 = _0x19a751[0x0],
    _0x15881d = _0x19a751[0x1];
  return _0x498f35 + '.' + _0x15881d;
}
const store = async (_0x58e548, _0x2bbce9) => {
  const _0x3b9cdf = a23_0x5b75ac,
    { ticketId: _0x44cd49 } = _0x58e548[_0x3b9cdf(0x153)],
    {
      body: _0x4d2089,
      quotedMsg: _0x2d03b5,
      isPrivate: _0x53f0fe,
      vCard: _0x572474
    } = _0x58e548[_0x3b9cdf(0x108)],
    _0x3cbad8 = _0x58e548[_0x3b9cdf(0x142)],
    { companyId: _0x34c334 } = _0x58e548['user'],
    _0x13d107 = await (0x0, ShowTicketService_1['default'])(
      _0x44cd49,
      _0x34c334
    );
  _0x13d107[_0x3b9cdf(0x13a)] === _0x3b9cdf(0x120) &&
    (0x0, SetTicketMessagesAsRead_1[_0x3b9cdf(0x146)])(_0x13d107);
  try {
    if (_0x3cbad8)
      await Promise[_0x3b9cdf(0x110)](
        _0x3cbad8[_0x3b9cdf(0x15d)](async (_0x1722c4, _0x458430) => {
          const _0x5d5faa = _0x3b9cdf;
          _0x13d107[_0x5d5faa(0x13a)] === _0x5d5faa(0x120) &&
            (await (0x0, SendWhatsAppMedia_1['default'])({
              media: _0x1722c4,
              ticket: _0x13d107,
              body: Array['isArray'](_0x4d2089)
                ? _0x4d2089[_0x458430]
                : _0x4d2089,
              isPrivate: /\u200d/[_0x5d5faa(0x133)](_0x4d2089),
              isForwarded: ![]
            }));
          if (
            _0x13d107[_0x5d5faa(0x13a)] === _0x5d5faa(0x179) ||
            _0x13d107[_0x5d5faa(0x13a)] === _0x5d5faa(0x11d)
          )
            try {
              const _0x3fe187 = await (0x0,
              sendFacebookMessageMedia_1['sendFacebookMessageMedia'])({
                media: _0x1722c4,
                ticket: _0x13d107
              });
              _0x13d107['channel'] === _0x5d5faa(0x179) &&
                (await (0x0, facebookMessageListener_1[_0x5d5faa(0x130)])(
                  _0x3fe187,
                  _0x13d107,
                  _0x13d107['contact'],
                  !![]
                ));
            } catch (_0x24f490) {
              console[_0x5d5faa(0x10c)](_0x24f490);
            }
          const _0x3f73d4 = path_1[_0x5d5faa(0x146)][_0x5d5faa(0x125)](
              _0x5d5faa(0x152),
              _0x5d5faa(0x158) + _0x34c334,
              _0x1722c4['filename']
            ),
            _0x536b31 = fs_1[_0x5d5faa(0x146)]['existsSync'](_0x3f73d4);
          _0x536b31 && fs_1[_0x5d5faa(0x146)][_0x5d5faa(0x16e)](_0x3f73d4);
        })
      );
    else {
      if (_0x13d107[_0x3b9cdf(0x13a)] === _0x3b9cdf(0x120) && !_0x53f0fe)
        await (0x0, SendWhatsAppMessage_1[_0x3b9cdf(0x146)])({
          body: _0x4d2089,
          ticket: _0x13d107,
          quotedMsg: _0x2d03b5,
          vCard: _0x572474
        });
      else {
        if (_0x13d107[_0x3b9cdf(0x13a)] === _0x3b9cdf(0x120) && _0x53f0fe) {
          const _0x1fd092 = {
            wid:
              _0x3b9cdf(0x124) +
              _0x13d107[_0x3b9cdf(0x180)]
                [_0x3b9cdf(0x17b)]()
                [_0x3b9cdf(0x13c)]('\x20', ''),
            ticketId: _0x13d107['id'],
            contactId: undefined,
            body: _0x4d2089,
            fromMe: !![],
            mediaType: !(0x0, lodash_1[_0x3b9cdf(0x148)])(_0x572474)
              ? _0x3b9cdf(0x188)
              : _0x3b9cdf(0x17e),
            read: !![],
            quotedMsgId: null,
            ack: 0x2,
            remoteJid: _0x13d107[_0x3b9cdf(0x14f)]?.[_0x3b9cdf(0x15f)],
            participant: null,
            dataJson: null,
            ticketTrakingId: null,
            isPrivate: _0x53f0fe
          };
          await (0x0, CreateMessageService_1[_0x3b9cdf(0x146)])({
            messageData: _0x1fd092,
            companyId: _0x13d107[_0x3b9cdf(0x119)]
          });
        } else {
          if (
            _0x13d107['channel'] === _0x3b9cdf(0x179) ||
            _0x13d107[_0x3b9cdf(0x13a)] === _0x3b9cdf(0x11d)
          ) {
            const _0x530cbc = await (0x0,
            sendFacebookMessage_1[_0x3b9cdf(0x146)])({
              body: _0x4d2089,
              ticket: _0x13d107,
              quotedMsg: _0x2d03b5
            });
            _0x13d107[_0x3b9cdf(0x13a)] === _0x3b9cdf(0x179) &&
              (await (0x0, facebookMessageListener_1[_0x3b9cdf(0x155)])(
                _0x530cbc,
                _0x4d2089,
                _0x13d107,
                _0x13d107[_0x3b9cdf(0x14f)],
                !![]
              ));
          }
        }
      }
    }
    return _0x2bbce9['send']();
  } catch (_0x500231) {
    return (
      console[_0x3b9cdf(0x10c)](_0x500231),
      _0x2bbce9[_0x3b9cdf(0x160)](0x190)[_0x3b9cdf(0x184)]({
        error: _0x500231[_0x3b9cdf(0x144)]
      })
    );
  }
};
exports[a23_0x5b75ac(0x10d)] = store;
const forwardmessage = async (_0x12baa4, _0x30ac66) => {
  const _0x4c88f4 = a23_0x5b75ac,
    _0x1c9c8f = _0x12baa4[_0x4c88f4(0x16a)][_0x4c88f4(0x181)],
    [, _0x384759] = _0x1c9c8f[_0x4c88f4(0x11c)]('\x20'),
    _0x29eaac = (0x0, jsonwebtoken_1[_0x4c88f4(0x122)])(
      _0x384759,
      auth_1[_0x4c88f4(0x146)][_0x4c88f4(0x127)]
    ),
    { id: _0x40d259 } = _0x12baa4[_0x4c88f4(0x128)],
    _0xaaa4b6 = await User_1[_0x4c88f4(0x146)][_0x4c88f4(0x140)](_0x40d259),
    {
      currentContacts: _0x345371,
      message: _0x16a680,
      signMessage: _0x8fe01d
    } = _0x12baa4['body'],
    { companyId: _0x22a3be } = _0x16a680,
    _0x3706f8 = await CompaniesSettings_1[_0x4c88f4(0x146)][_0x4c88f4(0x166)]({
      where: { companyId: _0x22a3be }
    }),
    _0x39c821 = _0x16a680[_0x4c88f4(0x12f)];
  let _0x1516b3;
  return (
    _0x345371['map'](async _0x212450 => {
      const _0x1c9c7f = _0x4c88f4,
        _0x20f908 = await (0x0, ShowContactService_1[_0x1c9c7f(0x146)])(
          _0x212450['id'],
          _0x16a680[_0x1c9c7f(0x119)]
        ),
        _0xead6ba = await (0x0, ShowTicketService_1['default'])(
          _0x16a680[_0x1c9c7f(0x15a)],
          _0x16a680[_0x1c9c7f(0x119)]
        ),
        { ticket: _0x11435d, isCreated: _0x2cf79f } = await (0x0,
        FindOrCreateTicketService_1[_0x1c9c7f(0x146)])(
          _0x20f908,
          _0xead6ba?.['whatsapp'],
          0x0,
          _0xead6ba[_0x1c9c7f(0x119)],
          _0xead6ba[_0x1c9c7f(0x13e)],
          _0xaaa4b6['id'],
          _0x20f908[_0x1c9c7f(0x11e)] ? _0x20f908 : null,
          _0x1c9c7f(0x120),
          null,
          !![],
          _0x3706f8
        ),
        _0x217764 = {
          status: _0x11435d[_0x1c9c7f(0x11e)]
            ? _0x1c9c7f(0x126)
            : _0x1c9c7f(0x14b),
          userId: _0xaaa4b6['id'],
          queueId: _0xead6ba[_0x1c9c7f(0x13e)]
        };
      await (0x0, UpdateTicketService_1[_0x1c9c7f(0x146)])({
        ticketData: _0x217764,
        ticketId: _0x11435d['id'],
        companyId: _0x11435d[_0x1c9c7f(0x119)]
      });
      if (_0xead6ba[_0x1c9c7f(0x13a)] === _0x1c9c7f(0x120)) {
        if (_0x16a680[_0x1c9c7f(0x131)]) {
          _0x1516b3 = _0x1c9c7f(0x105);
          const _0x3bb261 = _0x16a680['mediaUrl'][_0x1c9c7f(0x13c)](
              ':' + process[_0x1c9c7f(0x106)][_0x1c9c7f(0x116)],
              ''
            ),
            _0x5a9e68 = obterNomeEExtensaoDoArquivo(_0x3bb261),
            _0x3485d7 = path_1[_0x1c9c7f(0x146)][_0x1c9c7f(0x15c)](
              __dirname,
              '..',
              '..',
              '..',
              _0x1c9c7f(0x10f),
              _0x1c9c7f(0x152)
            ),
            _0x2826fb = path_1[_0x1c9c7f(0x146)][_0x1c9c7f(0x15c)](
              _0x3485d7,
              _0x1c9c7f(0x158) + _0xead6ba[_0x1c9c7f(0x119)],
              _0x5a9e68
            ),
            _0x155411 = {
              fieldname: _0x1c9c7f(0x14e),
              originalname: _0x5a9e68,
              encoding: _0x1c9c7f(0x15e),
              mimetype: _0x16a680[_0x1c9c7f(0x10a)],
              filename: _0x5a9e68,
              path: _0x2826fb
            };
          await (0x0, SendWhatsAppMedia_1[_0x1c9c7f(0x146)])({
            media: _0x155411,
            ticket: _0x11435d,
            body: _0x1516b3,
            isForwarded: ![]
          });
        } else
          _0x8fe01d
            ? (_0x1516b3 =
                _0x1c9c7f(0x12a) +
                _0xaaa4b6['name'] +
                '*\x0a\x0a' +
                _0x16a680['body'])
            : (_0x1516b3 = '' + _0x16a680[_0x1c9c7f(0x108)]),
            await (0x0, SendWhatsAppMessage_1[_0x1c9c7f(0x146)])({
              body: _0x1516b3,
              ticket: _0x11435d,
              quotedMsg: _0x39c821
            });
      }
    }),
    _0x30ac66[_0x4c88f4(0x184)](_0x4c88f4(0x123))
  );
};
exports[a23_0x5b75ac(0x182)] = forwardmessage;
const forwardMessage = async (_0x131399, _0x506a57) => {
  const _0x11d6f8 = a23_0x5b75ac,
    {
      quotedMsg: _0x5e5051,
      signMessage: _0x5c8af6,
      messageId: _0x41b2e0,
      contactId: _0x38b2fc
    } = _0x131399[_0x11d6f8(0x108)],
    { id: _0xb3c6af, companyId: _0x5979a0 } = _0x131399['user'],
    _0xd2d965 = await User_1[_0x11d6f8(0x146)][_0x11d6f8(0x140)](_0xb3c6af);
  if (!_0x41b2e0 || !_0x38b2fc)
    return _0x506a57[_0x11d6f8(0x160)](0xc8)[_0x11d6f8(0x170)](
      _0x11d6f8(0x135)
    );
  const _0x43e027 = await (0x0, ShowMessageService_1[_0x11d6f8(0x146)])(
      _0x41b2e0
    ),
    _0x13aaab = await (0x0, ShowContactService_1[_0x11d6f8(0x146)])(
      _0x38b2fc,
      _0x5979a0
    );
  if (!_0x43e027)
    return _0x506a57[_0x11d6f8(0x160)](0x194)[_0x11d6f8(0x170)](
      _0x11d6f8(0x121)
    );
  if (!_0x13aaab)
    return _0x506a57['status'](0x194)[_0x11d6f8(0x170)](_0x11d6f8(0x118));
  const _0x539fa4 = await CompaniesSettings_1[_0x11d6f8(0x146)][
      _0x11d6f8(0x166)
    ]({ where: { companyId: _0x5979a0 } }),
    _0x57f121 = await (0x0, ShowMessageService_1[_0x11d6f8(0x12d)])(_0x43e027);
  if (!_0x57f121)
    return _0x506a57[_0x11d6f8(0x160)](0x194)['send'](_0x11d6f8(0x16b));
  const _0x36f179 = await (0x0, ShowTicketService_1[_0x11d6f8(0x146)])(
      _0x43e027[_0x11d6f8(0x15a)],
      _0x43e027[_0x11d6f8(0x119)]
    ),
    { ticket: _0x19caaa } = await (0x0,
    FindOrCreateTicketService_1[_0x11d6f8(0x146)])(
      _0x13aaab,
      _0x36f179?.[_0x11d6f8(0x120)],
      0x0,
      _0x36f179['companyId'],
      _0x36f179[_0x11d6f8(0x13e)],
      _0xd2d965['id'],
      _0x13aaab[_0x11d6f8(0x11e)] ? _0x13aaab : null,
      _0x11d6f8(0x120),
      null,
      !![],
      _0x539fa4
    );
  let _0x214dcd;
  (0x0, lodash_1[_0x11d6f8(0x148)])(_0x19caaa?.[_0x11d6f8(0x13e)])
    ? (_0x214dcd = {
        status: _0x19caaa[_0x11d6f8(0x11e)] ? 'group' : _0x11d6f8(0x14b),
        userId: _0xd2d965['id'],
        queueId: _0x36f179[_0x11d6f8(0x13e)]
      })
    : (_0x214dcd = {
        status: _0x19caaa[_0x11d6f8(0x11e)] ? _0x11d6f8(0x126) : 'open',
        userId: _0xd2d965['id']
      });
  await (0x0, UpdateTicketService_1[_0x11d6f8(0x146)])({
    ticketData: _0x214dcd,
    ticketId: _0x19caaa['id'],
    companyId: _0x19caaa['companyId']
  });
  let _0x252dc2 = _0x43e027['body'];
  if (
    _0x43e027[_0x11d6f8(0x10a)] === _0x11d6f8(0x136) ||
    _0x43e027[_0x11d6f8(0x10a)] === _0x11d6f8(0x17e)
  )
    await (0x0, SendWhatsAppMessage_1[_0x11d6f8(0x146)])({
      body: _0x252dc2,
      ticket: _0x19caaa,
      quotedMsg: _0x5e5051,
      isForwarded: _0x43e027[_0x11d6f8(0x151)] ? ![] : !![]
    });
  else {
    const _0x218254 = _0x43e027[_0x11d6f8(0x131)][_0x11d6f8(0x13c)](
        ':' + process[_0x11d6f8(0x106)][_0x11d6f8(0x116)],
        ''
      ),
      _0x4a5902 = obterNomeEExtensaoDoArquivo(_0x218254);
    _0x252dc2 === _0x4a5902 && (_0x252dc2 = '');
    const _0x20295b = path_1[_0x11d6f8(0x146)][_0x11d6f8(0x15c)](
        __dirname,
        '..',
        '..',
        '..',
        _0x11d6f8(0x10f),
        _0x11d6f8(0x152)
      ),
      _0x51f8e6 = path_1[_0x11d6f8(0x146)][_0x11d6f8(0x15c)](
        _0x20295b,
        'company' + _0x19caaa[_0x11d6f8(0x119)],
        _0x4a5902
      ),
      _0x34f3ea = {
        fieldname: _0x11d6f8(0x14e),
        originalname: _0x4a5902,
        encoding: _0x11d6f8(0x15e),
        mimetype: _0x43e027[_0x11d6f8(0x10a)],
        filename: _0x4a5902,
        path: _0x51f8e6
      };
    await (0x0, SendWhatsAppMedia_1[_0x11d6f8(0x146)])({
      media: _0x34f3ea,
      ticket: _0x19caaa,
      body: _0x252dc2,
      isForwarded: _0x43e027[_0x11d6f8(0x151)] ? ![] : !![]
    });
  }
  return _0x506a57['send']();
};
function a23_0x315f() {
  const _0x328943 = [
    '445SeanZH',
    'toString',
    'SendMessage',
    'defineProperty',
    'extendedTextMessage',
    'add',
    'updatedAt',
    'authorization',
    'forwardmessage',
    '../services/TicketServices/ShowTicketService',
    'json',
    'remove',
    'useExternalApi',
    'plan',
    'contactMessage',
    '__esModule',
    'dateStart',
    'queues',
    '_Encaminhada_',
    'env',
    '30nOYPom',
    'body',
    '15906IFIEHb',
    'mediaType',
    'path',
    'log',
    'store',
    'keys',
    'backend',
    'all',
    '3597384dADbQV',
    '-appMessage',
    '../services/MessageServices/ListMessagesService',
    '../models/Queue',
    '../libs/socket',
    'PORT',
    'query',
    'Contact\x20not\x20found',
    'companyId',
    'number',
    '../services/WbotServices/SendWhatsAppMedia',
    'split',
    'instagram',
    'isGroup',
    '__setModuleDefault',
    'whatsapp',
    'Message\x20not\x20found',
    'verify',
    'count',
    'PVT',
    'resolve',
    'group',
    'secret',
    'user',
    'app',
    '*Mensagem\x20encaminhada\x20de\x20',
    '../services/ContactServices/ShowContactService',
    '195814czzqeG',
    'GetWhatsAppFromMessage',
    '__importDefault',
    'quotedMsgId',
    'verifyMessageMedia',
    'mediaUrl',
    'messageQueue',
    'test',
    '10tbcEzP',
    'MessageId\x20or\x20ContactId\x20not\x20found',
    'conversation',
    'Essa\x20empresa\x20não\x20tem\x20permissão\x20para\x20usar\x20a\x20API\x20Externa.\x20Entre\x20em\x20contato\x20com\x20o\x20Suporte\x20para\x20verificar\x20nossos\x20planos!',
    'writable',
    '6388560WeiQiN',
    'channel',
    'parse',
    'replace',
    '../models/CompaniesSettings',
    'queueId',
    'destroy',
    'findByPk',
    '../errors/AppError',
    'files',
    'forEach',
    'message',
    'forwardMessage',
    'default',
    '../services/WbotServices/SendWhatsAppMessage',
    'isNil',
    'Não\x20foi\x20possível\x20realizar\x20a\x20operação',
    '../services/TicketServices/FindOrCreateTicketService',
    'open',
    '../services/MessageServices/ListMessagesServiceAll',
    '../helpers/SetTicketMessagesAsRead',
    'medias',
    'contact',
    'pathname',
    'fromMe',
    'public',
    'params',
    '../services/MessageServices/CreateMessageService',
    'verifyMessageFace',
    '../services/FacebookServices/sendFacebookMessage',
    '../models/Message',
    'company',
    'isPrivate',
    'ticketId',
    'company-',
    'join',
    'map',
    '7bit',
    'remoteJid',
    'status',
    '../services/FacebookServices/sendFacebookMessageMedia',
    '38293222jOYVaZ',
    'index',
    'originalname',
    'configurable',
    'findOne',
    '../services/TicketServices/UpdateTicketService',
    '__importStar',
    'call',
    'headers',
    'Whatsapp\x20from\x20message\x20not\x20found',
    '349412OtPWUP',
    'Não\x20foi\x20possível\x20enviar\x20a\x20mensagem,\x20tente\x20novamente\x20em\x20alguns\x20instantes',
    'unlinkSync',
    '../services/CompanyService/ShowPlanCompanyService',
    'send',
    '208htRPGz',
    'delete',
    'create',
    'length',
    'allMe',
    '../config/auth',
    '1037807mbVDLl',
    'get',
    'facebook'
  ];
  a23_0x315f = function () {
    return _0x328943;
  };
  return a23_0x315f();
}
exports[a23_0x5b75ac(0x145)] = forwardMessage;
const remove = async (_0x286935, _0x4e9a9f) => {
  const _0x11eeb4 = a23_0x5b75ac,
    { messageId: _0x4c3e48 } = _0x286935['params'],
    { companyId: _0x303abd } = _0x286935[_0x11eeb4(0x128)],
    _0x1cc501 = await (0x0, DeleteWhatsAppMessage_1[_0x11eeb4(0x146)])(
      _0x4c3e48
    ),
    _0x4b9c21 = (0x0, socket_1['getIO'])();
  return (
    _0x1cc501[_0x11eeb4(0x159)] &&
      (await Message_1[_0x11eeb4(0x146)][_0x11eeb4(0x13f)]({
        where: { id: _0x1cc501['id'] }
      }),
      _0x4b9c21['to'](_0x1cc501[_0x11eeb4(0x15a)][_0x11eeb4(0x17b)]())['emit'](
        _0x11eeb4(0x15b) + _0x303abd + _0x11eeb4(0x112),
        { action: _0x11eeb4(0x172), message: _0x1cc501 }
      )),
    _0x4b9c21['to'](_0x1cc501[_0x11eeb4(0x15a)]['toString']())['emit'](
      _0x11eeb4(0x15b) + _0x303abd + '-appMessage',
      { action: 'update', message: _0x1cc501 }
    ),
    _0x4e9a9f[_0x11eeb4(0x170)]()
  );
};
exports[a23_0x5b75ac(0x185)] = remove;
const allMe = async (_0x35111b, _0x35564b) => {
  const _0x2e7bed = a23_0x5b75ac,
    _0x2dee42 = _0x35111b[_0x2e7bed(0x117)][_0x2e7bed(0x18a)],
    _0x32bd67 = _0x35111b['query']['dateEnd'],
    _0x5626cc = _0x35111b['query'][_0x2e7bed(0x151)],
    { companyId: _0x29a248 } = _0x35111b[_0x2e7bed(0x128)],
    { count: _0x2548e8 } = await (0x0,
    ListMessagesServiceAll_1[_0x2e7bed(0x146)])({
      companyId: _0x29a248,
      fromMe: _0x5626cc,
      dateStart: _0x2dee42,
      dateEnd: _0x32bd67
    });
  return _0x35564b[_0x2e7bed(0x184)]({ count: _0x2548e8 });
};
exports[a23_0x5b75ac(0x175)] = allMe;
const send = async (_0x5770ee, _0x240d9a) => {
  const _0x2da9c5 = a23_0x5b75ac,
    _0x53dae2 = _0x5770ee[_0x2da9c5(0x108)],
    _0x2a3aa3 = _0x5770ee[_0x2da9c5(0x142)];
  try {
    const _0x3915c6 = _0x5770ee[_0x2da9c5(0x16a)][_0x2da9c5(0x181)],
      [, _0x142a79] = _0x3915c6[_0x2da9c5(0x11c)]('\x20'),
      _0x15d672 = await Whatsapp_1[_0x2da9c5(0x146)][_0x2da9c5(0x166)]({
        where: { token: _0x142a79 }
      }),
      _0x3131dc = _0x15d672[_0x2da9c5(0x119)],
      _0x2ddeb1 = await (0x0, ShowPlanCompanyService_1[_0x2da9c5(0x146)])(
        _0x3131dc
      ),
      _0x1a0c77 = _0x2ddeb1[_0x2da9c5(0x187)][_0x2da9c5(0x186)];
    if (_0x1a0c77) {
      if (!_0x15d672) throw new Error(_0x2da9c5(0x149));
      if (_0x53dae2[_0x2da9c5(0x11a)] === undefined)
        throw new Error('O\x20número\x20é\x20obrigatório');
      const _0x3cdc10 = _0x53dae2[_0x2da9c5(0x11a)],
        _0x1ba041 = _0x53dae2[_0x2da9c5(0x108)];
      return (
        _0x2a3aa3
          ? await Promise[_0x2da9c5(0x110)](
              _0x2a3aa3[_0x2da9c5(0x15d)](async _0x3ca99e => {
                const _0x5b0dfd = _0x2da9c5;
                _0x5770ee[_0x5b0dfd(0x129)]
                  [_0x5b0dfd(0x178)](_0x5b0dfd(0x18b))
                  [
                    _0x5b0dfd(0x132)
                  ][_0x5b0dfd(0x17f)](_0x5b0dfd(0x17c), { whatsappId: _0x15d672['id'], data: { number: _0x3cdc10, body: _0x3ca99e[_0x5b0dfd(0x164)][_0x5b0dfd(0x13c)]('/', '-'), mediaPath: _0x3ca99e[_0x5b0dfd(0x10b)] } }, { removeOnComplete: !![], attempts: 0x3 });
              })
            )
          : _0x5770ee['app']
              [_0x2da9c5(0x178)](_0x2da9c5(0x18b))
              [
                'messageQueue'
              ][_0x2da9c5(0x17f)]('SendMessage', { whatsappId: _0x15d672['id'], data: { number: _0x3cdc10, body: _0x1ba041 } }, { removeOnComplete: !![], attempts: 0x3 }),
        _0x240d9a[_0x2da9c5(0x170)]({ mensagem: 'Mensagem\x20enviada!' })
      );
    }
    return _0x240d9a[_0x2da9c5(0x160)](0x190)[_0x2da9c5(0x184)]({
      error: _0x2da9c5(0x137)
    });
  } catch (_0x332d7a) {
    console['log'](_0x332d7a);
    if (Object[_0x2da9c5(0x10e)](_0x332d7a)[_0x2da9c5(0x174)] === 0x0)
      throw new AppError_1[_0x2da9c5(0x146)](_0x2da9c5(0x16d));
    else throw new AppError_1['default'](_0x332d7a[_0x2da9c5(0x144)]);
  }
};
exports['send'] = send;
