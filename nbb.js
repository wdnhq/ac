/**
 * 
 * ========= 青龙--配置文件 ===========
 * 抓sc.gdzfxc.com的session_id和手机ua
 * 变量名字：nbb一天一次即可
 * const $ = new Env('农粑粑'); 
 * ====================================
 *   
 */
const _0x1a8b7e=_0xf7ee;function _0xf7ee(_0x149587,_0x9c4d21){const _0x47bccf=_0x47bc();return _0xf7ee=function(_0xf7ee7a,_0xc66ab9){_0xf7ee7a=_0xf7ee7a-0x17f;let _0x56fe2e=_0x47bccf[_0xf7ee7a];return _0x56fe2e;},_0xf7ee(_0x149587,_0x9c4d21);}(function(_0x2272cb,_0x677a56){const _0x3abde3=_0xf7ee,_0x5934fc=_0x2272cb();while(!![]){try{const _0x2a24ad=parseInt(_0x3abde3(0x1be))/0x1*(parseInt(_0x3abde3(0x20d))/0x2)+parseInt(_0x3abde3(0x1d2))/0x3*(parseInt(_0x3abde3(0x209))/0x4)+-parseInt(_0x3abde3(0x1b1))/0x5*(-parseInt(_0x3abde3(0x1db))/0x6)+parseInt(_0x3abde3(0x1ee))/0x7*(parseInt(_0x3abde3(0x1b7))/0x8)+parseInt(_0x3abde3(0x20f))/0x9*(parseInt(_0x3abde3(0x202))/0xa)+-parseInt(_0x3abde3(0x212))/0xb*(parseInt(_0x3abde3(0x210))/0xc)+-parseInt(_0x3abde3(0x1c7))/0xd*(parseInt(_0x3abde3(0x1bc))/0xe);if(_0x2a24ad===_0x677a56)break;else _0x5934fc['push'](_0x5934fc['shift']());}catch(_0x411446){_0x5934fc['push'](_0x5934fc['shift']());}}}(_0x47bc,0x7ac70));const $=new Env('农粑粑'),notify=$['isNode']()?require('./sendNotify'):'',Notify=0x1,debug=0x0;let nbb=process[_0x1a8b7e(0x181)][_0x1a8b7e(0x1fe)],nbbArr=[],data='',msg='';!(async()=>{const _0x374f20=_0x1a8b7e;if(!await Envs())return;else{console[_0x374f20(0x207)](_0x374f20(0x1a1)),console[_0x374f20(0x207)](_0x374f20(0x1b4)+new Date(new Date()[_0x374f20(0x1ab)]()+new Date()[_0x374f20(0x1ba)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x374f20(0x1c8)]()+_0x374f20(0x1e3)),await wyy(),console[_0x374f20(0x207)](_0x374f20(0x203)+nbbArr[_0x374f20(0x20e)]+'\x20个账号\x20===================');debug&&console['log']('【debug】\x20这是你的全部账号数组:\x0a\x20'+nbbArr);for(let _0x5b8535=0x0;_0x5b8535<nbbArr[_0x374f20(0x20e)];_0x5b8535++){let _0x5b7e3a=_0x5b8535+0x1;console[_0x374f20(0x207)](_0x374f20(0x18f)+_0x5b7e3a+'\x20个账号】=========\x0a'),data=nbbArr[_0x5b8535][_0x374f20(0x1c5)]('&'),debug&&console['log']('\x0a\x20【debug】\x20这是你第\x20'+_0x5b7e3a+_0x374f20(0x218)+data+'\x0a'),console['log']('大吊告诉你开始执行签到！'),await signin(),await $[_0x374f20(0x1a2)](0x2*0x3e8),await SendMsg(msg);}}})()['catch'](_0x30382f=>console[_0x1a8b7e(0x207)](_0x30382f))[_0x1a8b7e(0x193)](()=>$['done']());function signin(_0x8723d=0x3*0x3e8){return new Promise(_0x1546db=>{const _0x3ef319=_0xf7ee;let _0x310f80={'url':_0x3ef319(0x1d7)+data[0x0]+'&pid=0','headers':{'Host':_0x3ef319(0x211),'User-Agent':data[0x1]}};debug&&(console[_0x3ef319(0x207)](_0x3ef319(0x1da)),console[_0x3ef319(0x207)](JSON['stringify'](_0x310f80))),$[_0x3ef319(0x1ef)](_0x310f80,async(_0x5ac539,_0x5bfe35,_0x2fcd0c)=>{const _0xca2596=_0x3ef319;try{debug&&(console['log'](_0xca2596(0x1b6)),console[_0xca2596(0x207)](_0x2fcd0c));let _0x1eff2d=JSON['parse'](_0x2fcd0c);if(_0x5bfe35[_0xca2596(0x1fc)]===0xc8&&_0x2fcd0c[_0xca2596(0x1fc)]===0x1)console['log'](_0xca2596(0x1ed)),msg+='\x0a签到成功🎉';else _0x5bfe35[_0xca2596(0x1fc)]===0xc8&&_0x2fcd0c['status']===0x0&&console[_0xca2596(0x207)](_0xca2596(0x1f6)+_0x1eff2d['msg']+_0xca2596(0x197));}catch(_0x245385){console['log'](_0x245385);}finally{_0x1546db();}},_0x8723d);});}async function Envs(){const _0xd59857=_0x1a8b7e;if(nbb)nbb[_0xd59857(0x1f4)]('#')!=-0x1?nbb[_0xd59857(0x1c5)]('#')['forEach'](_0x432854=>{const _0x1ab0bf=_0xd59857;nbbArr[_0x1ab0bf(0x200)](_0x432854);}):nbbArr[_0xd59857(0x200)](nbb);else{console['log'](_0xd59857(0x1f8)+$[_0xd59857(0x1bb)]+_0xd59857(0x1cd));return;}return!![];}async function SendMsg(_0x39cf63){const _0x3fd04b=_0x1a8b7e;if(!_0x39cf63)return;if(Notify>0x0){if($[_0x3fd04b(0x1f2)]()){var _0x5dd39c=require('./sendNotify');await _0x5dd39c[_0x3fd04b(0x1cf)]($[_0x3fd04b(0x1bb)],_0x39cf63);}else $['msg'](_0x39cf63);}else console[_0x3fd04b(0x207)](_0x39cf63);}function randomString(_0x218c14){const _0x51cdb8=_0x1a8b7e;_0x218c14=_0x218c14||0x20;var _0x1df2ef='QWERTYUIOPASDFGHJKLZXCVBNM1234567890',_0x4c6ab7=_0x1df2ef[_0x51cdb8(0x20e)],_0x50952d='';for(i=0x0;i<_0x218c14;i++)_0x50952d+=_0x1df2ef[_0x51cdb8(0x1af)](Math[_0x51cdb8(0x213)](Math[_0x51cdb8(0x19b)]()*_0x4c6ab7));return _0x50952d;}function randomInt(_0x5a8d79,_0x46037c){const _0x13b1fb=_0x1a8b7e;return Math[_0x13b1fb(0x20b)](Math[_0x13b1fb(0x19b)]()*(_0x46037c-_0x5a8d79)+_0x5a8d79);}function _0x47bc(){const _0x241d0b=['length','9JRrjSX','24ajexxK','sc.gdzfxc.com','5180219Jmdjbt','floor','music','getScript','abs','logs','\x20账号信息:\x0a\x20','getval','substr','opts','env','Content-Length','setval','content','getMinutes','media-url','isLoon','writedata','slice','write','GITHUB','exec','reduce','getDate','\x0a=========\x20开始【第\x20','assign','Cookie','isNeedRewrite','finally','getSeconds','set-cookie','lodash_set','!\x0a\x20','cwd','mediaUrl','time','random','https://keai.icu/apiwyy/api','setdata','undefined','fetch','tough-cookie','脚本通知群777974608，后期联合一些大佬发布感谢支持','wait','send','got','toString','null','get','getdata','runScript','@chavy_boxjs_userCfgs.httpapi','getTime','url','test',',\x20结束!\x20🕛\x20','charAt','valueForKey','22760MmXCIk','then','toStr','\x0a\x0a=========================================\x20\x20\x20\x20\x0a脚本执行\x20-\x20北京时间(UTC+8)：','trim','\x0a\x0a【debug】===============这是\x20签到\x20返回data==============','25040yNUFMX','loaddata','getHours','getTimezoneOffset','name','142268LpJxui','*/*','43PLbUdu','http','call','concat','openUrl','body','lodash_get','split','\x0a\x20【网抑云时间】:\x20','1495uFIMaD','toLocaleString','data','isMute','startTime','resolve','】：未填写变量\x20nbb','stack','sendNotify','object','isQuanX','441537EaXDzT','getFullYear','existsSync','headers','\x20\x20by--','https://sc.gdzfxc.com/?s=/ApiSign/signin&aid=1&platform=wx&session_id=','getMonth','logErr','\x0a【debug】===============\x20这是\x20签到\x20请求\x20url\x20===============','888fNwlBi','readFileSync','statusCode','path','.$1','replace','timeout','getjson','\x20\x0a=========================================\x0a','stringify','exports',',\x20开始!',',\x20错误!','parse','/v1/scripting/evaluate','isMuteLog','ckjar','isArray','签到成功\x20🎉','1722HxDfcp','post','cktough','cookieJar','isNode','map','indexOf','match','\x0a签到结果:','CookieJar','\x0a\x20【','open-url','join','setValueForKey','status','toObj','nbb','Content-Type','push','method','5041510WGycuN','\x0a===================\x20共找到\x20','setjson','dataFile','string','log','initGotEnv','16DewDJl','isSurge','round','POST','3574mkpAgd'];_0x47bc=function(){return _0x241d0b;};return _0x47bc();}function wyy(_0x5d9597=0x3*0x3e8){return new Promise(_0x2238f9=>{const _0x9d501b=_0xf7ee;let _0x493380={'url':_0x9d501b(0x19c)};$['get'](_0x493380,async(_0xbb52ac,_0x52d6a9,_0x19e53b)=>{const _0x19e283=_0x9d501b;try{_0x19e53b=JSON['parse'](_0x19e53b),console['log'](_0x19e283(0x1c6)+_0x19e53b[_0x19e283(0x184)]+_0x19e283(0x1d6)+_0x19e53b[_0x19e283(0x214)]);}catch(_0x1fbad8){console['logErr'](_0x1fbad8,_0x52d6a9);}finally{_0x2238f9();}},_0x5d9597);});}function Env(_0x131ad7,_0x5dbc2b){const _0x436521=_0x1a8b7e;'undefined'!=typeof process&&JSON[_0x436521(0x1e4)](process[_0x436521(0x181)])[_0x436521(0x1f4)](_0x436521(0x18b))>-0x1&&process['exit'](0x0);class _0xe6dd5{constructor(_0x504438){const _0x2d4928=_0x436521;this[_0x2d4928(0x181)]=_0x504438;}[_0x436521(0x1a3)](_0x3799b8,_0x11e3ac='GET'){const _0xb74673=_0x436521;_0x3799b8=_0xb74673(0x206)==typeof _0x3799b8?{'url':_0x3799b8}:_0x3799b8;let _0xbcb399=this[_0xb74673(0x1a7)];return _0xb74673(0x20c)===_0x11e3ac&&(_0xbcb399=this[_0xb74673(0x1ef)]),new Promise((_0x396d1b,_0x47c1bb)=>{const _0x5afd0f=_0xb74673;_0xbcb399[_0x5afd0f(0x1c0)](this,_0x3799b8,(_0x42f199,_0x41beee,_0x9142b5)=>{_0x42f199?_0x47c1bb(_0x42f199):_0x396d1b(_0x41beee);});});}[_0x436521(0x1a7)](_0x7ddbb0){const _0x45e5ef=_0x436521;return this[_0x45e5ef(0x1a3)][_0x45e5ef(0x1c0)](this['env'],_0x7ddbb0);}[_0x436521(0x1ef)](_0x550b44){const _0x167687=_0x436521;return this[_0x167687(0x1a3)][_0x167687(0x1c0)](this[_0x167687(0x181)],_0x550b44,'POST');}}return new class{constructor(_0x563946,_0x56688f){const _0x38ce18=_0x436521;this[_0x38ce18(0x1bb)]=_0x563946,this[_0x38ce18(0x1bf)]=new _0xe6dd5(this),this[_0x38ce18(0x1c9)]=null,this[_0x38ce18(0x205)]='box.dat',this[_0x38ce18(0x217)]=[],this[_0x38ce18(0x1ca)]=!0x1,this[_0x38ce18(0x192)]=!0x1,this['logSeparator']='\x0a',this[_0x38ce18(0x1cb)]=new Date()[_0x38ce18(0x1ab)](),Object['assign'](this,_0x56688f),this[_0x38ce18(0x207)]('','🔔'+this[_0x38ce18(0x1bb)]+_0x38ce18(0x1e6));}['isNode'](){const _0xf9a211=_0x436521;return _0xf9a211(0x19e)!=typeof module&&!!module[_0xf9a211(0x1e5)];}[_0x436521(0x1d1)](){return'undefined'!=typeof $task;}[_0x436521(0x20a)](){const _0x445ce9=_0x436521;return _0x445ce9(0x19e)!=typeof $httpClient&&_0x445ce9(0x19e)==typeof $loon;}[_0x436521(0x187)](){const _0x89df1d=_0x436521;return _0x89df1d(0x19e)!=typeof $loon;}[_0x436521(0x1fd)](_0x1ac450,_0x20bb90=null){try{return JSON['parse'](_0x1ac450);}catch{return _0x20bb90;}}[_0x436521(0x1b3)](_0x1f5f6e,_0x54645e=null){const _0x138331=_0x436521;try{return JSON[_0x138331(0x1e4)](_0x1f5f6e);}catch{return _0x54645e;}}[_0x436521(0x1e2)](_0x5da1d0,_0x50072d){const _0x454525=_0x436521;let _0x59ade5=_0x50072d;const _0x4e755a=this[_0x454525(0x1a8)](_0x5da1d0);if(_0x4e755a)try{_0x59ade5=JSON[_0x454525(0x1e8)](this[_0x454525(0x1a8)](_0x5da1d0));}catch{}return _0x59ade5;}[_0x436521(0x204)](_0x20ad49,_0xf33181){const _0x7cf39b=_0x436521;try{return this[_0x7cf39b(0x19d)](JSON[_0x7cf39b(0x1e4)](_0x20ad49),_0xf33181);}catch{return!0x1;}}[_0x436521(0x215)](_0x4fb1b7){return new Promise(_0x2bf12c=>{this['get']({'url':_0x4fb1b7},(_0xd08d1c,_0x30cc8e,_0x217167)=>_0x2bf12c(_0x217167));});}[_0x436521(0x1a9)](_0x42e03d,_0x10e662){const _0x258943=_0x436521;return new Promise(_0x165ced=>{const _0x49ef24=_0xf7ee;let _0x47683d=this[_0x49ef24(0x1a8)](_0x49ef24(0x1aa));_0x47683d=_0x47683d?_0x47683d[_0x49ef24(0x1e0)](/\n/g,'')[_0x49ef24(0x1b5)]():_0x47683d;let _0x5d5fc1=this[_0x49ef24(0x1a8)]('@chavy_boxjs_userCfgs.httpapi_timeout');_0x5d5fc1=_0x5d5fc1?0x1*_0x5d5fc1:0x14,_0x5d5fc1=_0x10e662&&_0x10e662['timeout']?_0x10e662[_0x49ef24(0x1e1)]:_0x5d5fc1;const [_0x54dec3,_0x538185]=_0x47683d[_0x49ef24(0x1c5)]('@'),_0x32b4fb={'url':'http://'+_0x538185+_0x49ef24(0x1e9),'body':{'script_text':_0x42e03d,'mock_type':'cron','timeout':_0x5d5fc1},'headers':{'X-Key':_0x54dec3,'Accept':_0x49ef24(0x1bd)}};this[_0x49ef24(0x1ef)](_0x32b4fb,(_0x39545c,_0x16c66e,_0x2c699e)=>_0x165ced(_0x2c699e));})['catch'](_0x165207=>this[_0x258943(0x1d9)](_0x165207));}['loaddata'](){const _0x59f785=_0x436521;if(!this[_0x59f785(0x1f2)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x59f785(0x1de)]=this['path']?this[_0x59f785(0x1de)]:require(_0x59f785(0x1de));const _0x4aab1f=this[_0x59f785(0x1de)][_0x59f785(0x1cc)](this[_0x59f785(0x205)]),_0x1ced06=this['path']['resolve'](process[_0x59f785(0x198)](),this['dataFile']),_0x426fc5=this['fs'][_0x59f785(0x1d4)](_0x4aab1f),_0x13f3d7=!_0x426fc5&&this['fs'][_0x59f785(0x1d4)](_0x1ced06);if(!_0x426fc5&&!_0x13f3d7)return{};{const _0x7eeadb=_0x426fc5?_0x4aab1f:_0x1ced06;try{return JSON[_0x59f785(0x1e8)](this['fs'][_0x59f785(0x1dc)](_0x7eeadb));}catch(_0x56145b){return{};}}}}[_0x436521(0x188)](){const _0x2a3de=_0x436521;if(this[_0x2a3de(0x1f2)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x2a3de(0x1de)]=this[_0x2a3de(0x1de)]?this[_0x2a3de(0x1de)]:require(_0x2a3de(0x1de));const _0x344d15=this[_0x2a3de(0x1de)]['resolve'](this[_0x2a3de(0x205)]),_0x47a623=this['path'][_0x2a3de(0x1cc)](process[_0x2a3de(0x198)](),this[_0x2a3de(0x205)]),_0x508e9e=this['fs'][_0x2a3de(0x1d4)](_0x344d15),_0x9a4f14=!_0x508e9e&&this['fs'][_0x2a3de(0x1d4)](_0x47a623),_0x3c3353=JSON[_0x2a3de(0x1e4)](this[_0x2a3de(0x1c9)]);_0x508e9e?this['fs']['writeFileSync'](_0x344d15,_0x3c3353):_0x9a4f14?this['fs']['writeFileSync'](_0x47a623,_0x3c3353):this['fs']['writeFileSync'](_0x344d15,_0x3c3353);}}[_0x436521(0x1c4)](_0x54b1e9,_0x83fcfe,_0x38a695){const _0x3fc513=_0x436521,_0x3b7c35=_0x83fcfe[_0x3fc513(0x1e0)](/\[(\d+)\]/g,_0x3fc513(0x1df))[_0x3fc513(0x1c5)]('.');let _0x36fee8=_0x54b1e9;for(const _0x30dc29 of _0x3b7c35)if(_0x36fee8=Object(_0x36fee8)[_0x30dc29],void 0x0===_0x36fee8)return _0x38a695;return _0x36fee8;}[_0x436521(0x196)](_0x514132,_0x5a3ed1,_0x349c7d){const _0x16e2e8=_0x436521;return Object(_0x514132)!==_0x514132?_0x514132:(Array[_0x16e2e8(0x1ec)](_0x5a3ed1)||(_0x5a3ed1=_0x5a3ed1[_0x16e2e8(0x1a5)]()[_0x16e2e8(0x1f5)](/[^.[\]]+/g)||[]),_0x5a3ed1[_0x16e2e8(0x189)](0x0,-0x1)[_0x16e2e8(0x18d)]((_0x2a075f,_0xce7ea7,_0x5b65c5)=>Object(_0x2a075f[_0xce7ea7])===_0x2a075f[_0xce7ea7]?_0x2a075f[_0xce7ea7]:_0x2a075f[_0xce7ea7]=Math[_0x16e2e8(0x216)](_0x5a3ed1[_0x5b65c5+0x1])>>0x0==+_0x5a3ed1[_0x5b65c5+0x1]?[]:{},_0x514132)[_0x5a3ed1[_0x5a3ed1[_0x16e2e8(0x20e)]-0x1]]=_0x349c7d,_0x514132);}[_0x436521(0x1a8)](_0x3f044a){const _0x1bb201=_0x436521;let _0x471eaf=this['getval'](_0x3f044a);if(/^@/[_0x1bb201(0x1ad)](_0x3f044a)){const [,_0x2c8a08,_0x379d4b]=/^@(.*?)\.(.*?)$/['exec'](_0x3f044a),_0x3b568e=_0x2c8a08?this[_0x1bb201(0x219)](_0x2c8a08):'';if(_0x3b568e)try{const _0x30fd65=JSON['parse'](_0x3b568e);_0x471eaf=_0x30fd65?this['lodash_get'](_0x30fd65,_0x379d4b,''):_0x471eaf;}catch(_0x3e9ae){_0x471eaf='';}}return _0x471eaf;}[_0x436521(0x19d)](_0x4de186,_0xedfc3d){const _0x546fd7=_0x436521;let _0x4fc01f=!0x1;if(/^@/[_0x546fd7(0x1ad)](_0xedfc3d)){const [,_0x3d852b,_0x300375]=/^@(.*?)\.(.*?)$/[_0x546fd7(0x18c)](_0xedfc3d),_0x1725b1=this[_0x546fd7(0x219)](_0x3d852b),_0x5dcf17=_0x3d852b?_0x546fd7(0x1a6)===_0x1725b1?null:_0x1725b1||'{}':'{}';try{const _0x20de74=JSON[_0x546fd7(0x1e8)](_0x5dcf17);this[_0x546fd7(0x196)](_0x20de74,_0x300375,_0x4de186),_0x4fc01f=this[_0x546fd7(0x183)](JSON[_0x546fd7(0x1e4)](_0x20de74),_0x3d852b);}catch(_0x22f2b0){const _0x2894b2={};this[_0x546fd7(0x196)](_0x2894b2,_0x300375,_0x4de186),_0x4fc01f=this[_0x546fd7(0x183)](JSON[_0x546fd7(0x1e4)](_0x2894b2),_0x3d852b);}}else _0x4fc01f=this[_0x546fd7(0x183)](_0x4de186,_0xedfc3d);return _0x4fc01f;}[_0x436521(0x219)](_0x5a3e25){const _0x527208=_0x436521;return this[_0x527208(0x20a)]()||this['isLoon']()?$persistentStore['read'](_0x5a3e25):this['isQuanX']()?$prefs[_0x527208(0x1b0)](_0x5a3e25):this[_0x527208(0x1f2)]()?(this[_0x527208(0x1c9)]=this['loaddata'](),this[_0x527208(0x1c9)][_0x5a3e25]):this[_0x527208(0x1c9)]&&this[_0x527208(0x1c9)][_0x5a3e25]||null;}[_0x436521(0x183)](_0x43fdb0,_0x5c97b0){const _0x46e621=_0x436521;return this[_0x46e621(0x20a)]()||this[_0x46e621(0x187)]()?$persistentStore[_0x46e621(0x18a)](_0x43fdb0,_0x5c97b0):this[_0x46e621(0x1d1)]()?$prefs[_0x46e621(0x1fb)](_0x43fdb0,_0x5c97b0):this[_0x46e621(0x1f2)]()?(this[_0x46e621(0x1c9)]=this[_0x46e621(0x1b8)](),this[_0x46e621(0x1c9)][_0x5c97b0]=_0x43fdb0,this[_0x46e621(0x188)](),!0x0):this[_0x46e621(0x1c9)]&&this[_0x46e621(0x1c9)][_0x5c97b0]||null;}['initGotEnv'](_0x132f7f){const _0x32e0a4=_0x436521;this['got']=this['got']?this[_0x32e0a4(0x1a4)]:require(_0x32e0a4(0x1a4)),this[_0x32e0a4(0x1f0)]=this['cktough']?this['cktough']:require(_0x32e0a4(0x1a0)),this['ckjar']=this[_0x32e0a4(0x1eb)]?this[_0x32e0a4(0x1eb)]:new this[(_0x32e0a4(0x1f0))][(_0x32e0a4(0x1f7))](),_0x132f7f&&(_0x132f7f[_0x32e0a4(0x1d5)]=_0x132f7f[_0x32e0a4(0x1d5)]?_0x132f7f[_0x32e0a4(0x1d5)]:{},void 0x0===_0x132f7f[_0x32e0a4(0x1d5)]['Cookie']&&void 0x0===_0x132f7f[_0x32e0a4(0x1f1)]&&(_0x132f7f[_0x32e0a4(0x1f1)]=this[_0x32e0a4(0x1eb)]));}[_0x436521(0x1a7)](_0x4d4c06,_0x2e124d=()=>{}){const _0x2641e3=_0x436521;_0x4d4c06[_0x2641e3(0x1d5)]&&(delete _0x4d4c06['headers'][_0x2641e3(0x1ff)],delete _0x4d4c06[_0x2641e3(0x1d5)][_0x2641e3(0x182)]),this[_0x2641e3(0x20a)]()||this['isLoon']()?(this[_0x2641e3(0x20a)]()&&this[_0x2641e3(0x192)]&&(_0x4d4c06[_0x2641e3(0x1d5)]=_0x4d4c06[_0x2641e3(0x1d5)]||{},Object[_0x2641e3(0x190)](_0x4d4c06[_0x2641e3(0x1d5)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x2641e3(0x1a7)](_0x4d4c06,(_0x10b480,_0x4e58af,_0x3730dd)=>{const _0x5ae4ec=_0x2641e3;!_0x10b480&&_0x4e58af&&(_0x4e58af[_0x5ae4ec(0x1c3)]=_0x3730dd,_0x4e58af[_0x5ae4ec(0x1dd)]=_0x4e58af[_0x5ae4ec(0x1fc)]),_0x2e124d(_0x10b480,_0x4e58af,_0x3730dd);})):this[_0x2641e3(0x1d1)]()?(this[_0x2641e3(0x192)]&&(_0x4d4c06[_0x2641e3(0x180)]=_0x4d4c06[_0x2641e3(0x180)]||{},Object['assign'](_0x4d4c06[_0x2641e3(0x180)],{'hints':!0x1})),$task['fetch'](_0x4d4c06)[_0x2641e3(0x1b2)](_0x29dbbb=>{const {statusCode:_0x4f43ec,statusCode:_0x3b5ab5,headers:_0x16f026,body:_0x2a5538}=_0x29dbbb;_0x2e124d(null,{'status':_0x4f43ec,'statusCode':_0x3b5ab5,'headers':_0x16f026,'body':_0x2a5538},_0x2a5538);},_0x38cbd3=>_0x2e124d(_0x38cbd3))):this[_0x2641e3(0x1f2)]()&&(this[_0x2641e3(0x208)](_0x4d4c06),this['got'](_0x4d4c06)['on']('redirect',(_0x1d88ea,_0x1eb64b)=>{const _0x39a17a=_0x2641e3;try{if(_0x1d88ea[_0x39a17a(0x1d5)][_0x39a17a(0x195)]){const _0x1325e2=_0x1d88ea['headers'][_0x39a17a(0x195)][_0x39a17a(0x1f3)](this[_0x39a17a(0x1f0)][_0x39a17a(0x191)]['parse'])[_0x39a17a(0x1a5)]();_0x1325e2&&this['ckjar']['setCookieSync'](_0x1325e2,null),_0x1eb64b[_0x39a17a(0x1f1)]=this[_0x39a17a(0x1eb)];}}catch(_0x5930c3){this[_0x39a17a(0x1d9)](_0x5930c3);}})[_0x2641e3(0x1b2)](_0x21ef78=>{const {statusCode:_0x54b492,statusCode:_0x1bc123,headers:_0x3d079d,body:_0x4f9858}=_0x21ef78;_0x2e124d(null,{'status':_0x54b492,'statusCode':_0x1bc123,'headers':_0x3d079d,'body':_0x4f9858},_0x4f9858);},_0x5bd656=>{const _0x33f9b0=_0x2641e3,{message:_0x5d10f8,response:_0x2de70f}=_0x5bd656;_0x2e124d(_0x5d10f8,_0x2de70f,_0x2de70f&&_0x2de70f[_0x33f9b0(0x1c3)]);}));}[_0x436521(0x1ef)](_0x3b9b47,_0x2e83e3=()=>{}){const _0x146aaf=_0x436521;if(_0x3b9b47['body']&&_0x3b9b47['headers']&&!_0x3b9b47['headers'][_0x146aaf(0x1ff)]&&(_0x3b9b47[_0x146aaf(0x1d5)]['Content-Type']='application/x-www-form-urlencoded'),_0x3b9b47[_0x146aaf(0x1d5)]&&delete _0x3b9b47[_0x146aaf(0x1d5)][_0x146aaf(0x182)],this[_0x146aaf(0x20a)]()||this[_0x146aaf(0x187)]())this[_0x146aaf(0x20a)]()&&this[_0x146aaf(0x192)]&&(_0x3b9b47['headers']=_0x3b9b47[_0x146aaf(0x1d5)]||{},Object[_0x146aaf(0x190)](_0x3b9b47['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['post'](_0x3b9b47,(_0x10bb53,_0x4f32dd,_0x35133a)=>{const _0x3dba23=_0x146aaf;!_0x10bb53&&_0x4f32dd&&(_0x4f32dd[_0x3dba23(0x1c3)]=_0x35133a,_0x4f32dd[_0x3dba23(0x1dd)]=_0x4f32dd[_0x3dba23(0x1fc)]),_0x2e83e3(_0x10bb53,_0x4f32dd,_0x35133a);});else{if(this['isQuanX']())_0x3b9b47[_0x146aaf(0x201)]='POST',this[_0x146aaf(0x192)]&&(_0x3b9b47[_0x146aaf(0x180)]=_0x3b9b47[_0x146aaf(0x180)]||{},Object[_0x146aaf(0x190)](_0x3b9b47[_0x146aaf(0x180)],{'hints':!0x1})),$task[_0x146aaf(0x19f)](_0x3b9b47)[_0x146aaf(0x1b2)](_0x45b878=>{const {statusCode:_0x540ab9,statusCode:_0x16dfc5,headers:_0x81ccd4,body:_0x2b3c72}=_0x45b878;_0x2e83e3(null,{'status':_0x540ab9,'statusCode':_0x16dfc5,'headers':_0x81ccd4,'body':_0x2b3c72},_0x2b3c72);},_0x4d240e=>_0x2e83e3(_0x4d240e));else{if(this['isNode']()){this['initGotEnv'](_0x3b9b47);const {url:_0x32cd5f,..._0x13a3cd}=_0x3b9b47;this[_0x146aaf(0x1a4)]['post'](_0x32cd5f,_0x13a3cd)[_0x146aaf(0x1b2)](_0x492ad1=>{const {statusCode:_0x1c5c91,statusCode:_0x375da5,headers:_0x1a1c54,body:_0x32122a}=_0x492ad1;_0x2e83e3(null,{'status':_0x1c5c91,'statusCode':_0x375da5,'headers':_0x1a1c54,'body':_0x32122a},_0x32122a);},_0x1a88cb=>{const _0x192d8c=_0x146aaf,{message:_0x39dcc9,response:_0x2d6388}=_0x1a88cb;_0x2e83e3(_0x39dcc9,_0x2d6388,_0x2d6388&&_0x2d6388[_0x192d8c(0x1c3)]);});}}}}[_0x436521(0x19a)](_0x52d02d,_0x39cc6e=null){const _0x13e9d3=_0x436521,_0x47bdee=_0x39cc6e?new Date(_0x39cc6e):new Date();let _0x5b6ce9={'M+':_0x47bdee['getMonth']()+0x1,'d+':_0x47bdee[_0x13e9d3(0x18e)](),'H+':_0x47bdee[_0x13e9d3(0x1b9)](),'m+':_0x47bdee[_0x13e9d3(0x185)](),'s+':_0x47bdee[_0x13e9d3(0x194)](),'q+':Math[_0x13e9d3(0x213)]((_0x47bdee[_0x13e9d3(0x1d8)]()+0x3)/0x3),'S':_0x47bdee['getMilliseconds']()};/(y+)/['test'](_0x52d02d)&&(_0x52d02d=_0x52d02d[_0x13e9d3(0x1e0)](RegExp['$1'],(_0x47bdee[_0x13e9d3(0x1d3)]()+'')[_0x13e9d3(0x17f)](0x4-RegExp['$1'][_0x13e9d3(0x20e)])));for(let _0x2414bb in _0x5b6ce9)new RegExp('('+_0x2414bb+')')[_0x13e9d3(0x1ad)](_0x52d02d)&&(_0x52d02d=_0x52d02d[_0x13e9d3(0x1e0)](RegExp['$1'],0x1==RegExp['$1'][_0x13e9d3(0x20e)]?_0x5b6ce9[_0x2414bb]:('00'+_0x5b6ce9[_0x2414bb])[_0x13e9d3(0x17f)]((''+_0x5b6ce9[_0x2414bb])[_0x13e9d3(0x20e)])));return _0x52d02d;}['msg'](_0x21d281=_0x131ad7,_0x21fb16='',_0x44b68d='',_0x169fea){const _0x217ae7=_0x436521,_0x30f6ae=_0x6c01e1=>{const _0x5e5176=_0xf7ee;if(!_0x6c01e1)return _0x6c01e1;if(_0x5e5176(0x206)==typeof _0x6c01e1)return this[_0x5e5176(0x187)]()?_0x6c01e1:this['isQuanX']()?{'open-url':_0x6c01e1}:this['isSurge']()?{'url':_0x6c01e1}:void 0x0;if(_0x5e5176(0x1d0)==typeof _0x6c01e1){if(this[_0x5e5176(0x187)]()){let _0x10b619=_0x6c01e1[_0x5e5176(0x1c2)]||_0x6c01e1[_0x5e5176(0x1ac)]||_0x6c01e1[_0x5e5176(0x1f9)],_0x2d6858=_0x6c01e1[_0x5e5176(0x199)]||_0x6c01e1[_0x5e5176(0x186)];return{'openUrl':_0x10b619,'mediaUrl':_0x2d6858};}if(this['isQuanX']()){let _0x11d2bc=_0x6c01e1['open-url']||_0x6c01e1[_0x5e5176(0x1ac)]||_0x6c01e1[_0x5e5176(0x1c2)],_0x5efc7a=_0x6c01e1[_0x5e5176(0x186)]||_0x6c01e1[_0x5e5176(0x199)];return{'open-url':_0x11d2bc,'media-url':_0x5efc7a};}if(this['isSurge']()){let _0x410133=_0x6c01e1[_0x5e5176(0x1ac)]||_0x6c01e1['openUrl']||_0x6c01e1[_0x5e5176(0x1f9)];return{'url':_0x410133};}}};if(this[_0x217ae7(0x1ca)]||(this['isSurge']()||this['isLoon']()?$notification[_0x217ae7(0x1ef)](_0x21d281,_0x21fb16,_0x44b68d,_0x30f6ae(_0x169fea)):this['isQuanX']()&&$notify(_0x21d281,_0x21fb16,_0x44b68d,_0x30f6ae(_0x169fea))),!this[_0x217ae7(0x1ea)]){let _0x152a6f=['','==============📣系统通知📣=============='];_0x152a6f[_0x217ae7(0x200)](_0x21d281),_0x21fb16&&_0x152a6f[_0x217ae7(0x200)](_0x21fb16),_0x44b68d&&_0x152a6f[_0x217ae7(0x200)](_0x44b68d),console[_0x217ae7(0x207)](_0x152a6f['join']('\x0a')),this['logs']=this[_0x217ae7(0x217)][_0x217ae7(0x1c1)](_0x152a6f);}}[_0x436521(0x207)](..._0x2d91de){const _0x449d4f=_0x436521;_0x2d91de['length']>0x0&&(this[_0x449d4f(0x217)]=[...this[_0x449d4f(0x217)],..._0x2d91de]),console[_0x449d4f(0x207)](_0x2d91de[_0x449d4f(0x1fa)](this['logSeparator']));}[_0x436521(0x1d9)](_0xffe84d,_0x419360){const _0x80c192=_0x436521,_0x7df5c9=!this['isSurge']()&&!this[_0x80c192(0x1d1)]()&&!this[_0x80c192(0x187)]();_0x7df5c9?this[_0x80c192(0x207)]('','❗️'+this[_0x80c192(0x1bb)]+_0x80c192(0x1e7),_0xffe84d[_0x80c192(0x1ce)]):this[_0x80c192(0x207)]('','❗️'+this[_0x80c192(0x1bb)]+_0x80c192(0x1e7),_0xffe84d);}[_0x436521(0x1a2)](_0x36b913){return new Promise(_0x225844=>setTimeout(_0x225844,_0x36b913));}['done'](_0x4926b1={}){const _0x152249=_0x436521,_0x295dc3=new Date()[_0x152249(0x1ab)](),_0x3f74bd=(_0x295dc3-this[_0x152249(0x1cb)])/0x3e8;this[_0x152249(0x207)]('','🔔'+this[_0x152249(0x1bb)]+_0x152249(0x1ae)+_0x3f74bd+'\x20秒'),this[_0x152249(0x207)](),(this[_0x152249(0x20a)]()||this[_0x152249(0x1d1)]()||this[_0x152249(0x187)]())&&$done(_0x4926b1);}}(_0x131ad7,_0x5dbc2b);}