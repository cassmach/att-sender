'use strict';const a0_0x296f0f=a0_0x2a88;function a0_0x2a88(_0x6c589d,_0x1401f5){const _0x2ac980=a0_0x2ac9();return a0_0x2a88=function(_0x2a88a0,_0x1fdec3){_0x2a88a0=_0x2a88a0-0x150;let _0x7a06c9=_0x2ac980[_0x2a88a0];return _0x7a06c9;},a0_0x2a88(_0x6c589d,_0x1401f5);}(function(_0x1fbc7d,_0x220449){const _0x516349=a0_0x2a88,_0x54e352=_0x1fbc7d();while(!![]){try{const _0xc08acb=parseInt(_0x516349(0x153))/0x1+parseInt(_0x516349(0x158))/0x2+parseInt(_0x516349(0x159))/0x3*(-parseInt(_0x516349(0x17d))/0x4)+-parseInt(_0x516349(0x174))/0x5+parseInt(_0x516349(0x176))/0x6+parseInt(_0x516349(0x16c))/0x7+parseInt(_0x516349(0x156))/0x8*(parseInt(_0x516349(0x168))/0x9);if(_0xc08acb===_0x220449)break;else _0x54e352['push'](_0x54e352['shift']());}catch(_0x1a6b6d){_0x54e352['push'](_0x54e352['shift']());}}}(a0_0x2ac9,0x3b578));var __createBinding=this&&this[a0_0x296f0f(0x170)]||(Object[a0_0x296f0f(0x15c)]?function(_0x1dc849,_0x3d8350,_0x1118d4,_0x13c9d1){const _0xe4f09f=a0_0x296f0f;if(_0x13c9d1===undefined)_0x13c9d1=_0x1118d4;var _0x1b2062=Object[_0xe4f09f(0x164)](_0x3d8350,_0x1118d4);(!_0x1b2062||(_0xe4f09f(0x151)in _0x1b2062?!_0x3d8350[_0xe4f09f(0x15e)]:_0x1b2062[_0xe4f09f(0x169)]||_0x1b2062[_0xe4f09f(0x172)]))&&(_0x1b2062={'enumerable':!![],'get':function(){return _0x3d8350[_0x1118d4];}}),Object['defineProperty'](_0x1dc849,_0x13c9d1,_0x1b2062);}:function(_0xee8d34,_0x2f363e,_0x54b3e1,_0x184cc4){if(_0x184cc4===undefined)_0x184cc4=_0x54b3e1;_0xee8d34[_0x184cc4]=_0x2f363e[_0x54b3e1];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a0_0x296f0f(0x15c)]?function(_0xb315db,_0x2d8f42){Object['defineProperty'](_0xb315db,'default',{'enumerable':!![],'value':_0x2d8f42});}:function(_0x22ad60,_0x188002){const _0x3c9f25=a0_0x296f0f;_0x22ad60[_0x3c9f25(0x171)]=_0x188002;}),__importStar=this&&this['__importStar']||function(_0x57ff3a){const _0x5bd1e1=a0_0x296f0f;if(_0x57ff3a&&_0x57ff3a[_0x5bd1e1(0x15e)])return _0x57ff3a;var _0x388645={};if(_0x57ff3a!=null){for(var _0xefd7a1 in _0x57ff3a)if(_0xefd7a1!==_0x5bd1e1(0x171)&&Object[_0x5bd1e1(0x16d)][_0x5bd1e1(0x175)][_0x5bd1e1(0x161)](_0x57ff3a,_0xefd7a1))__createBinding(_0x388645,_0x57ff3a,_0xefd7a1);}return __setModuleDefault(_0x388645,_0x57ff3a),_0x388645;},__importDefault=this&&this['__importDefault']||function(_0x3b7598){const _0x3e46f2=a0_0x296f0f;return _0x3b7598&&_0x3b7598[_0x3e46f2(0x15e)]?_0x3b7598:{'default':_0x3b7598};};function a0_0x2ac9(){const _0x190bf7=['statusCode','logger','Internal\x20server\x20error','use','./utils/logger','defineProperty','get','./database','177178jvvYTQ','json','/public','506640CSkZtM','sendScheduledMessages','715016pIDMcW','3KLuCBS','init','FRONTEND_URL','create','warn','__esModule','requestHandler','./queues','call','static','./routes','getOwnPropertyDescriptor','./errors/AppError','errorHandler','cookie-parser','18lHxYSJ','writable','5mb','reflect-metadata','291949WDzswg','prototype','express-async-errors','env','__createBinding','default','configurable','SENTRY_DSN','1370740Ckorzz','hasOwnProperty','1210188SxBONQ','status','./config/upload','error','set','directory','Handlers','1550156RghOKe'];a0_0x2ac9=function(){return _0x190bf7;};return a0_0x2ac9();}Object[a0_0x296f0f(0x150)](exports,a0_0x296f0f(0x15e),{'value':!![]}),require('./bootstrap'),require(a0_0x296f0f(0x16b)),require(a0_0x296f0f(0x16e));const express_1=__importDefault(require('express')),cors_1=__importDefault(require('cors')),cookie_parser_1=__importDefault(require(a0_0x296f0f(0x167))),Sentry=__importStar(require('@sentry/node'));require(a0_0x296f0f(0x152));const upload_1=__importDefault(require(a0_0x296f0f(0x178))),AppError_1=__importDefault(require(a0_0x296f0f(0x165))),routes_1=__importDefault(require(a0_0x296f0f(0x163))),logger_1=require(a0_0x296f0f(0x182)),queues_1=require(a0_0x296f0f(0x160));Sentry[a0_0x296f0f(0x15a)]({'dsn':process[a0_0x296f0f(0x16f)][a0_0x296f0f(0x173)]});const app=(0x0,express_1['default'])();app[a0_0x296f0f(0x17a)]('queues',{'messageQueue':queues_1['messageQueue'],'sendScheduledMessages':queues_1[a0_0x296f0f(0x157)]});const allowedOrigins=[process[a0_0x296f0f(0x16f)][a0_0x296f0f(0x15b)],'https://pps.whatsapp.net/'],bodyParser=require('body-parser');app['use'](bodyParser[a0_0x296f0f(0x154)]({'limit':a0_0x296f0f(0x16a)})),app[a0_0x296f0f(0x181)](bodyParser['urlencoded']({'limit':a0_0x296f0f(0x16a),'extended':!![]})),app[a0_0x296f0f(0x181)]((0x0,cors_1[a0_0x296f0f(0x171)])({'credentials':!![],'origin':allowedOrigins})),app[a0_0x296f0f(0x181)]((0x0,cookie_parser_1[a0_0x296f0f(0x171)])()),app[a0_0x296f0f(0x181)](express_1[a0_0x296f0f(0x171)][a0_0x296f0f(0x154)]()),app[a0_0x296f0f(0x181)](Sentry['Handlers'][a0_0x296f0f(0x15f)]()),app['use'](a0_0x296f0f(0x155),express_1[a0_0x296f0f(0x171)][a0_0x296f0f(0x162)](upload_1[a0_0x296f0f(0x171)][a0_0x296f0f(0x17b)])),app[a0_0x296f0f(0x181)](routes_1[a0_0x296f0f(0x171)]),app['use'](Sentry[a0_0x296f0f(0x17c)][a0_0x296f0f(0x166)]()),app[a0_0x296f0f(0x181)](async(_0x2aea0d,_0x3d27b7,_0x36026f,_0x1f48f4)=>{const _0x1528d4=a0_0x296f0f;if(_0x2aea0d instanceof AppError_1['default'])return logger_1[_0x1528d4(0x17f)][_0x1528d4(0x15d)](_0x2aea0d),_0x36026f[_0x1528d4(0x177)](_0x2aea0d[_0x1528d4(0x17e)])[_0x1528d4(0x154)]({'error':_0x2aea0d['message']});return logger_1[_0x1528d4(0x17f)][_0x1528d4(0x179)](_0x2aea0d),_0x36026f[_0x1528d4(0x177)](0x1f4)[_0x1528d4(0x154)]({'error':_0x1528d4(0x180)});}),exports[a0_0x296f0f(0x171)]=app;