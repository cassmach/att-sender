'use strict';function a461_0x5178(){const _0x167b69=['17846760dTqLSR','178276ZmtcvE','query','549pDHQGy','__esModule','11vCoNnn','6884cNjGMG','3813470mhokHw','\x0a\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentSchedule,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeA\x27)\x20\x22startTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeA\x27)\x20\x22endTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeB\x27)\x20\x22startTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeB\x27)\x20\x22endTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeA\x27\x20=\x20\x27\x27\x20then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeA\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20)\x20)\x20or\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20))\x20\x22inActivity\x22\x0a\x20\x20\x20\x20\x20\x20from\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20q.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to_char(current_date,\x20\x27day\x27)\x20currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(array_to_json(array_agg(s))->>0)::jsonb\x20currentSchedule\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20\x22Queues\x22\x20q,\x20jsonb_array_elements(q.schedules)\x20s\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20s->>\x27weekdayEn\x27\x20like\x20trim(to_char(current_date,\x20\x27day\x27))\x20and\x20q.id\x20=\x20:queueId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20q.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20\x20\x20\x20\x20\x20\x20GROUP\x20BY\x201,\x202\x0a\x20\x20\x20\x20\x20\x20)\x20s\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20','381wNgGrx','161805IYMKCp','\x0a\x20\x20\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentSchedule,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeA\x27)\x20\x22startTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeA\x27)\x20\x22endTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeB\x27)\x20\x22startTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeB\x27)\x20\x22endTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeA\x27\x20=\x20\x27\x27\x20then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeA\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20)\x20)\x20or\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20))\x20\x22inActivity\x22\x0a\x20\x20\x20\x20\x20\x20from\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20c.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to_char(current_date,\x20\x27day\x27)\x20currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(array_to_json(array_agg(s))->>0)::jsonb\x20currentSchedule\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20\x22Companies\x22\x20c,\x20jsonb_array_elements(c.schedules)\x20s\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20s->>\x27weekdayEn\x27\x20like\x20trim(to_char(current_date,\x20\x27day\x27))\x20and\x20c.id\x20=\x20:companyId\x0a\x20\x20\x20\x20\x20\x20\x20\x20GROUP\x20BY\x201,\x202\x0a\x20\x20\x20\x20\x20\x20)\x20s\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20','../../database','SELECT','defineProperty','default','\x0a\x20\x20\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentSchedule,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeA\x27)\x20\x22startTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeA\x27)\x20\x22endTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeB\x27)\x20\x22startTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeB\x27)\x20\x22endTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeA\x27\x20=\x20\x27\x27\x20then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeA\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20)\x20)\x20or\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20))\x20\x22inActivity\x22\x0a\x20\x20\x20\x20\x20\x20from\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20c.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to_char(current_date,\x20\x27day\x27)\x20currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(array_to_json(array_agg(s))->>0)::jsonb\x20currentSchedule\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20\x22Whatsapps\x22\x20c,\x20jsonb_array_elements(c.schedules)\x20s\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20s->>\x27weekdayEn\x27\x20like\x20trim(to_char(current_date,\x20\x27day\x27))\x20and\x20c.id\x20=\x20:whatsappId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20c.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20\x20\x20\x20\x20\x20\x20GROUP\x20BY\x201,\x202\x0a\x20\x20\x20\x20\x20\x20)\x20s\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20','10lcJMHq','__importDefault','492216lgDjaQ','8dRcGZN','QueryTypes','131624WzAEgI'];a461_0x5178=function(){return _0x167b69;};return a461_0x5178();}const a461_0x1b1d64=a461_0x4d01;(function(_0x1940f1,_0xad5d9d){const _0x3e379f=a461_0x4d01,_0x454876=_0x1940f1();while(!![]){try{const _0x4a551d=-parseInt(_0x3e379f(0x1ca))/0x1*(-parseInt(_0x3e379f(0x1c6))/0x2)+-parseInt(_0x3e379f(0x1d2))/0x3*(parseInt(_0x3e379f(0x1cf))/0x4)+-parseInt(_0x3e379f(0x1da))/0x5*(-parseInt(_0x3e379f(0x1c5))/0x6)+-parseInt(_0x3e379f(0x1d3))/0x7+parseInt(_0x3e379f(0x1c8))/0x8*(parseInt(_0x3e379f(0x1cc))/0x9)+parseInt(_0x3e379f(0x1d0))/0xa*(parseInt(_0x3e379f(0x1ce))/0xb)+-parseInt(_0x3e379f(0x1c9))/0xc;if(_0x4a551d===_0xad5d9d)break;else _0x454876['push'](_0x454876['shift']());}catch(_0x39c43b){_0x454876['push'](_0x454876['shift']());}}}(a461_0x5178,0x822fc));var __importDefault=this&&this[a461_0x1b1d64(0x1c4)]||function(_0x4a9b9e){const _0x5c0fff=a461_0x1b1d64;return _0x4a9b9e&&_0x4a9b9e[_0x5c0fff(0x1cd)]?_0x4a9b9e:{'default':_0x4a9b9e};};Object[a461_0x1b1d64(0x1d7)](exports,a461_0x1b1d64(0x1cd),{'value':!![]});const sequelize_1=require('sequelize'),database_1=__importDefault(require(a461_0x1b1d64(0x1d5))),VerifyCurrentSchedule=async(_0x61393a,_0x8e5a05,_0x4ca94b)=>{const _0x9a971b=a461_0x1b1d64;if(Number(_0x4ca94b)>0x0&&Number(_0x8e5a05===0x0)){const _0x46e9a6=_0x9a971b(0x1d9),_0x1a70cb=await database_1[_0x9a971b(0x1d8)][_0x9a971b(0x1cb)](_0x46e9a6,{'replacements':{'whatsappId':_0x4ca94b,'companyId':_0x61393a},'type':sequelize_1[_0x9a971b(0x1c7)][_0x9a971b(0x1d6)],'plain':!![]});return _0x1a70cb;}else{if(Number(_0x8e5a05)===0x0&&Number(_0x4ca94b)===0x0){const _0x5cf073=_0x9a971b(0x1d4),_0x352c22=await database_1[_0x9a971b(0x1d8)][_0x9a971b(0x1cb)](_0x5cf073,{'replacements':{'companyId':_0x61393a},'type':sequelize_1[_0x9a971b(0x1c7)][_0x9a971b(0x1d6)],'plain':!![]});return _0x352c22;}else{const _0x527b2b=_0x9a971b(0x1d1),_0x3cfdb9=await database_1[_0x9a971b(0x1d8)][_0x9a971b(0x1cb)](_0x527b2b,{'replacements':{'queueId':_0x8e5a05,'companyId':_0x61393a},'type':sequelize_1[_0x9a971b(0x1c7)][_0x9a971b(0x1d6)],'plain':!![]});return _0x3cfdb9;}}};function a461_0x4d01(_0x4f422f,_0x4f66e3){const _0x5178e7=a461_0x5178();return a461_0x4d01=function(_0x4d01bb,_0x5918eb){_0x4d01bb=_0x4d01bb-0x1c4;let _0x2ae2cf=_0x5178e7[_0x4d01bb];return _0x2ae2cf;},a461_0x4d01(_0x4f422f,_0x4f66e3);}exports[a461_0x1b1d64(0x1d8)]=VerifyCurrentSchedule;