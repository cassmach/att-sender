'use strict';
const a585_0x15d38e = a585_0x22da;
(function (_0x18fa39, _0x35f231) {
  const _0x4630e4 = a585_0x22da,
    _0x721283 = _0x18fa39();
  while (!![]) {
    try {
      const _0xbfcd7a =
        (-parseInt(_0x4630e4(0x168)) / 0x1) *
          (-parseInt(_0x4630e4(0x16b)) / 0x2) +
        (parseInt(_0x4630e4(0x170)) / 0x3) *
          (parseInt(_0x4630e4(0x16a)) / 0x4) +
        parseInt(_0x4630e4(0x164)) / 0x5 +
        -parseInt(_0x4630e4(0x175)) / 0x6 +
        -parseInt(_0x4630e4(0x171)) / 0x7 +
        (-parseInt(_0x4630e4(0x169)) / 0x8) *
          (-parseInt(_0x4630e4(0x16d)) / 0x9) +
        -parseInt(_0x4630e4(0x16c)) / 0xa;
      if (_0xbfcd7a === _0x35f231) break;
      else _0x721283['push'](_0x721283['shift']());
    } catch (_0xc83d1c) {
      _0x721283['push'](_0x721283['shift']());
    }
  }
})(a585_0x5436, 0x3d7d7);
var __importDefault =
  (this && this[a585_0x15d38e(0x165)]) ||
  function (_0xef7d0d) {
    const _0xc665ff = a585_0x15d38e;
    return _0xef7d0d && _0xef7d0d[_0xc665ff(0x167)]
      ? _0xef7d0d
      : { default: _0xef7d0d };
  };
Object[a585_0x15d38e(0x16e)](exports, '__esModule', { value: !![] });
function a585_0x22da(_0x29af4a, _0x371ec) {
  const _0x54360b = a585_0x5436();
  return (
    (a585_0x22da = function (_0x22da13, _0x93db0e) {
      _0x22da13 = _0x22da13 - 0x163;
      let _0x15aaac = _0x54360b[_0x22da13];
      return _0x15aaac;
    }),
    a585_0x22da(_0x29af4a, _0x371ec)
  );
}
function a585_0x5436() {
  const _0x2e0bb5 = [
    '1496532aQieHQ',
    '../../models/ScheduledMessages',
    '1943620YxDQpx',
    '__importDefault',
    'findOne',
    '__esModule',
    '31ZzKdTY',
    '1697464MhCRcN',
    '11948pfrHOt',
    '13798FyoOvR',
    '6378210JgqcDj',
    '9dwbSpG',
    'defineProperty',
    '../../errors/AppError',
    '390qlZYdX',
    '447860YbMRUp',
    'ERR_NO_SCHEDULE_FOUND',
    'destroy',
    'default'
  ];
  a585_0x5436 = function () {
    return _0x2e0bb5;
  };
  return a585_0x5436();
}
const ScheduledMessages_1 = __importDefault(require(a585_0x15d38e(0x163))),
  AppError_1 = __importDefault(require(a585_0x15d38e(0x16f))),
  DeleteService = async (_0x3ae5fd, _0x42fef5) => {
    const _0x587fe3 = a585_0x15d38e,
      _0x1fbc0f = await ScheduledMessages_1[_0x587fe3(0x174)][_0x587fe3(0x166)](
        { where: { id: _0x3ae5fd, companyId: _0x42fef5 } }
      );
    if (!_0x1fbc0f) throw new AppError_1['default'](_0x587fe3(0x172), 0x194);
    await _0x1fbc0f[_0x587fe3(0x173)]();
  };
exports[a585_0x15d38e(0x174)] = DeleteService;
