function a240_0x5cfe() {
  var _0x19217e = [
    '5KRdXwh',
    '1603960VZMfRc',
    '11yHgYKW',
    '39580FYCZjc',
    '2547000xIoPKf',
    '252PSoNNd',
    '27FDqsMs',
    'sequelize',
    'DELETE\x20FROM\x20\x22CompaniesSettings\x22\x20WHERE\x20\x22companyId\x22\x20<>\x201',
    'exports',
    '4739BCeFOQ',
    '5070WtWxDb',
    '1045776woiCOf',
    '641121LEaCxM',
    '99671emCOiU',
    'query',
    '\x0a\x20\x20\x20\x20\x20\x20do\x0a\x20\x20\x20\x20\x20\x20\x20\x20$$\x0a\x20\x20\x20\x20\x20\x20declare\x0a\x20\x20\x20\x20\x20\x20\x20\x20a\x20record;\x0a\x20\x20\x20\x20\x20\x20begin\x0a\x20\x20\x20\x20\x20\x20\x20\x20for\x20a\x20in\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20*\x20from\x20\x22Companies\x22\x20c\x20\x20where\x20id\x20not\x20in\x20(select\x20\x22companyId\x22\x20from\x20\x22CompaniesSettings\x22)\x0a\x20\x20\x20\x20\x20\x20\x20\x20loop\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20insert\x20into\x20\x22CompaniesSettings\x22\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22companyId\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22hoursCloseTicketsAuto\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22chatBotType\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22acceptCallWhatsapp\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22userRandom\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sendGreetingMessageOneQueues\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sendSignMessage\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sendFarewellWaitingTicket\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22userRating\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sendGreetingAccepted\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22CheckMsgIsGroup\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sendQueuePosition\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22scheduleType\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22acceptAudioMessageContact\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sendMsgTransfTicket\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22enableLGPD\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22requiredTag\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22lgpdDeleteMessage\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22lgpdHideNumber\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22lgpdConsent\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22lgpdLink\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22lgpdMessage\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22createdAt\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22updatedAt\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22DirectTicketsToWallets\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22closeTicketOnTransfer\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20values\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20a.\x22id\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x279999999999\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27text\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27disabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27enabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27disabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27disabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27disabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27disabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27disabled\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20current_timestamp,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20current_timestamp,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20false,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20false\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20\x20\x20end\x20loop;\x0a\x20\x20\x20\x20\x20\x20end;\x0a\x20\x20\x20\x20\x20\x20$$'
  ];
  a240_0x5cfe = function () {
    return _0x19217e;
  };
  return a240_0x5cfe();
}
var a240_0x31d48c = a240_0x5b41;
function a240_0x5b41(_0x2ce696, _0x300e0e) {
  var _0x5cfe73 = a240_0x5cfe();
  return (
    (a240_0x5b41 = function (_0x5b4135, _0x5af206) {
      _0x5b4135 = _0x5b4135 - 0x76;
      var _0x7ca941 = _0x5cfe73[_0x5b4135];
      return _0x7ca941;
    }),
    a240_0x5b41(_0x2ce696, _0x300e0e)
  );
}
(function (_0x4e7a61, _0x164105) {
  var _0xc58acd = a240_0x5b41,
    _0x3bee42 = _0x4e7a61();
  while (!![]) {
    try {
      var _0xb44a15 =
        (parseInt(_0xc58acd(0x7c)) / 0x1) * (parseInt(_0xc58acd(0x7d)) / 0x2) +
        -parseInt(_0xc58acd(0x76)) / 0x3 +
        (-parseInt(_0xc58acd(0x86)) / 0x4) *
          (-parseInt(_0xc58acd(0x7a)) / 0x5) +
        (parseInt(_0xc58acd(0x85)) / 0x6) * (-parseInt(_0xc58acd(0x84)) / 0x7) +
        (-parseInt(_0xc58acd(0x7b)) / 0x8) *
          (-parseInt(_0xc58acd(0x80)) / 0x9) +
        parseInt(_0xc58acd(0x7e)) / 0xa +
        (parseInt(_0xc58acd(0x77)) / 0xb) * (-parseInt(_0xc58acd(0x7f)) / 0xc);
      if (_0xb44a15 === _0x164105) break;
      else _0x3bee42['push'](_0x3bee42['shift']());
    } catch (_0x501d87) {
      _0x3bee42['push'](_0x3bee42['shift']());
    }
  }
})(a240_0x5cfe, 0x57b62),
  (module[a240_0x31d48c(0x83)] = {
    up: async _0x41c8f6 => {
      var _0x55dea4 = a240_0x31d48c;
      await _0x41c8f6[_0x55dea4(0x81)][_0x55dea4(0x78)](_0x55dea4(0x79));
    },
    down: async (_0x4c4841, _0x399616) => {
      var _0x2c8e25 = a240_0x31d48c;
      await _0x4c4841[_0x2c8e25(0x81)][_0x2c8e25(0x78)](_0x2c8e25(0x82));
    }
  });
