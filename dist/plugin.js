!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=51)}({1:function(e,t,n){"use strict";t.a={ui:{generalSettings:{width:550,height:755},export:{width:550,height:340},urlExport:{width:550,height:575}},key:{lastVersionSettingsOpened:"lastVersionSettingsOpened",fileId:"fileId",settings:"settings",extensionPluginData:"org.lukasoppermann.figmaDesignTokens",extensionFigmaStyleId:"styleId",extensionAlias:"alias"},exclusionPrefixDefault:["_","."],fileExtensions:[{label:".tokens.json",value:".tokens.json"},{label:".tokens",value:".tokens"},{label:".json",value:".json"}]}},2:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i={generalSettings:"generalSettings",export:"export",sendSettings:"sendSettings",urlExport:"urlExport",help:"help",demo:"demo",openUrl:"openUrl",reset:"reset",saveSettings:"saveSettings",closePlugin:"closePlugin"}},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i={color:{label:"Colors",key:"color"},gradient:{label:"Gradients",key:"gradient"},font:{label:"Font Styles",key:"font"},typography:{label:"Typography",key:"typography",exclude:["original"]},effect:{label:"Effects",key:"effect"},grid:{label:"Grids",key:"grid"},border:{label:"Borders",key:"border"},breakpoint:{label:"Breakpoints",key:"breakpoint"},radius:{label:"Radii",key:"radius"},size:{label:"Sizes",key:"size"},spacing:{label:"Spacing",key:"spacing"},motion:{label:"Motion",key:"motion"}}},4:function(e,t,n){"use strict";t.a=(e,t=2)=>{if(void 0===e)return;if("number"!=typeof e||"number"!=typeof t)throw new Error(`Invalid parameters, both value "${e}" (${typeof e}) and decimalPlaces "${t}" (${typeof t}) must be of type number`);const n=Math.pow(10,t);return Math.round(e*n)/n}},5:function(e,t,n){"use strict";n.d(t,"d",(function(){return R})),n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return M}));var i=n(4);function r(e,t){(function(e){return"string"==typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var n=function(e){return"string"==typeof e&&-1!==e.indexOf("%")}(e);return e=360===t?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:e=360===t?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t))}function a(e){return Math.min(1,Math.max(0,e))}function o(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function s(e){return e<=1?100*Number(e)+"%":e}function u(e){return 1===e.length?"0"+e:String(e)}function l(e,t,n){e=r(e,255),t=r(t,255),n=r(n,255);var i=Math.max(e,t,n),a=Math.min(e,t,n),o=0,s=0,u=(i+a)/2;if(i===a)s=0,o=0;else{var l=i-a;switch(s=u>.5?l/(2-i-a):l/(i+a),i){case e:o=(t-n)/l+(t<n?6:0);break;case t:o=(n-e)/l+2;break;case n:o=(e-t)/l+4}o/=6}return{h:o,s:s,l:u}}function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*n*(t-e):n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function p(e,t,n){e=r(e,255),t=r(t,255),n=r(n,255);var i=Math.max(e,t,n),a=Math.min(e,t,n),o=0,s=i,u=i-a,l=0===i?0:u/i;if(i===a)o=0;else{switch(i){case e:o=(t-n)/u+(t<n?6:0);break;case t:o=(n-e)/u+2;break;case n:o=(e-t)/u+4}o/=6}return{h:o,s:l,v:s}}function f(e,t,n,i){var r=[u(Math.round(e).toString(16)),u(Math.round(t).toString(16)),u(Math.round(n).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function d(e){return Math.round(255*parseFloat(e)).toString(16)}function g(e){return h(e)/255}function h(e){return parseInt(e,16)}var y={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function m(e){var t,n,i,a={r:0,g:0,b:0},u=1,l=null,p=null,f=null,d=!1,m=!1;return"string"==typeof e&&(e=function(e){if(0===(e=e.trim().toLowerCase()).length)return!1;var t=!1;if(y[e])e=y[e],t=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var n=k.rgb.exec(e);if(n)return{r:n[1],g:n[2],b:n[3]};if(n=k.rgba.exec(e))return{r:n[1],g:n[2],b:n[3],a:n[4]};if(n=k.hsl.exec(e))return{h:n[1],s:n[2],l:n[3]};if(n=k.hsla.exec(e))return{h:n[1],s:n[2],l:n[3],a:n[4]};if(n=k.hsv.exec(e))return{h:n[1],s:n[2],v:n[3]};if(n=k.hsva.exec(e))return{h:n[1],s:n[2],v:n[3],a:n[4]};if(n=k.hex8.exec(e))return{r:h(n[1]),g:h(n[2]),b:h(n[3]),a:g(n[4]),format:t?"name":"hex8"};if(n=k.hex6.exec(e))return{r:h(n[1]),g:h(n[2]),b:h(n[3]),format:t?"name":"hex"};if(n=k.hex4.exec(e))return{r:h(n[1]+n[1]),g:h(n[2]+n[2]),b:h(n[3]+n[3]),a:g(n[4]+n[4]),format:t?"name":"hex8"};if(n=k.hex3.exec(e))return{r:h(n[1]+n[1]),g:h(n[2]+n[2]),b:h(n[3]+n[3]),format:t?"name":"hex"};return!1}(e)),"object"==typeof e&&(S(e.r)&&S(e.g)&&S(e.b)?(t=e.r,n=e.g,i=e.b,a={r:255*r(t,255),g:255*r(n,255),b:255*r(i,255)},d=!0,m="%"===String(e.r).substr(-1)?"prgb":"rgb"):S(e.h)&&S(e.s)&&S(e.v)?(l=s(e.s),p=s(e.v),a=function(e,t,n){e=6*r(e,360),t=r(t,100),n=r(n,100);var i=Math.floor(e),a=e-i,o=n*(1-t),s=n*(1-a*t),u=n*(1-(1-a)*t),l=i%6;return{r:255*[n,s,o,o,u,n][l],g:255*[u,n,n,s,o,o][l],b:255*[o,o,u,n,n,s][l]}}(e.h,l,p),d=!0,m="hsv"):S(e.h)&&S(e.s)&&S(e.l)&&(l=s(e.s),f=s(e.l),a=function(e,t,n){var i,a,o;if(e=r(e,360),t=r(t,100),n=r(n,100),0===t)a=n,o=n,i=n;else{var s=n<.5?n*(1+t):n+t-n*t,u=2*n-s;i=c(u,s,e+1/3),a=c(u,s,e),o=c(u,s,e-1/3)}return{r:255*i,g:255*a,b:255*o}}(e.h,l,f),d=!0,m="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(u=e.a)),u=o(u),{ok:d,format:e.format||m,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:u}}var b="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",v="[\\s|\\(]+("+b+")[,|\\s]+("+b+")[,|\\s]+("+b+")\\s*\\)?",x="[\\s|\\(]+("+b+")[,|\\s]+("+b+")[,|\\s]+("+b+")[,|\\s]+("+b+")\\s*\\)?",k={CSS_UNIT:new RegExp(b),rgb:new RegExp("rgb"+v),rgba:new RegExp("rgba"+x),hsl:new RegExp("hsl"+v),hsla:new RegExp("hsla"+x),hsv:new RegExp("hsv"+v),hsva:new RegExp("hsva"+x),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function S(e){return Boolean(k.CSS_UNIT.exec(String(e)))}var w=function(){function e(t,n){var i;if(void 0===t&&(t=""),void 0===n&&(n={}),t instanceof e)return t;"number"==typeof t&&(t=function(e){return{r:e>>16,g:(65280&e)>>8,b:255&e}}(t)),this.originalInput=t;var r=m(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(i=n.format)&&void 0!==i?i:r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},e.prototype.getLuminance=function(){var e=this.toRgb(),t=e.r/255,n=e.g/255,i=e.b/255;return.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(e){return this.a=o(e),this.roundA=Math.round(100*this.a)/100,this},e.prototype.toHsv=function(){var e=p(this.r,this.g,this.b);return{h:360*e.h,s:e.s,v:e.v,a:this.a}},e.prototype.toHsvString=function(){var e=p(this.r,this.g,this.b),t=Math.round(360*e.h),n=Math.round(100*e.s),i=Math.round(100*e.v);return 1===this.a?"hsv("+t+", "+n+"%, "+i+"%)":"hsva("+t+", "+n+"%, "+i+"%, "+this.roundA+")"},e.prototype.toHsl=function(){var e=l(this.r,this.g,this.b);return{h:360*e.h,s:e.s,l:e.l,a:this.a}},e.prototype.toHslString=function(){var e=l(this.r,this.g,this.b),t=Math.round(360*e.h),n=Math.round(100*e.s),i=Math.round(100*e.l);return 1===this.a?"hsl("+t+", "+n+"%, "+i+"%)":"hsla("+t+", "+n+"%, "+i+"%, "+this.roundA+")"},e.prototype.toHex=function(e){return void 0===e&&(e=!1),f(this.r,this.g,this.b,e)},e.prototype.toHexString=function(e){return void 0===e&&(e=!1),"#"+this.toHex(e)},e.prototype.toHex8=function(e){return void 0===e&&(e=!1),function(e,t,n,i,r){var a=[u(Math.round(e).toString(16)),u(Math.round(t).toString(16)),u(Math.round(n).toString(16)),u(d(i))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this.r,this.g,this.b,this.a,e)},e.prototype.toHex8String=function(e){return void 0===e&&(e=!1),"#"+this.toHex8(e)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return 1===this.a?"rgb("+e+", "+t+", "+n+")":"rgba("+e+", "+t+", "+n+", "+this.roundA+")"},e.prototype.toPercentageRgb=function(){var e=function(e){return Math.round(100*r(e,255))+"%"};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var e=function(e){return Math.round(100*r(e,255))};return 1===this.a?"rgb("+e(this.r)+"%, "+e(this.g)+"%, "+e(this.b)+"%)":"rgba("+e(this.r)+"%, "+e(this.g)+"%, "+e(this.b)+"%, "+this.roundA+")"},e.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var e="#"+f(this.r,this.g,this.b,!1),t=0,n=Object.entries(y);t<n.length;t++){var i=n[t],r=i[0];if(e===i[1])return r}return!1},e.prototype.toString=function(e){var t=Boolean(e);e=null!=e?e:this.format;var n=!1,i=this.a<1&&this.a>=0;return t||!i||!e.startsWith("hex")&&"name"!==e?("rgb"===e&&(n=this.toRgbString()),"prgb"===e&&(n=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(n=this.toHexString()),"hex3"===e&&(n=this.toHexString(!0)),"hex4"===e&&(n=this.toHex8String(!0)),"hex8"===e&&(n=this.toHex8String()),"name"===e&&(n=this.toName()),"hsl"===e&&(n=this.toHslString()),"hsv"===e&&(n=this.toHsvString()),n||this.toHexString()):"name"===e&&0===this.a?this.toName():this.toRgbString()},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){void 0===t&&(t=10);var n=this.toHsl();return n.l+=t/100,n.l=a(n.l),new e(n)},e.prototype.brighten=function(t){void 0===t&&(t=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),new e(n)},e.prototype.darken=function(t){void 0===t&&(t=10);var n=this.toHsl();return n.l-=t/100,n.l=a(n.l),new e(n)},e.prototype.tint=function(e){return void 0===e&&(e=10),this.mix("white",e)},e.prototype.shade=function(e){return void 0===e&&(e=10),this.mix("black",e)},e.prototype.desaturate=function(t){void 0===t&&(t=10);var n=this.toHsl();return n.s-=t/100,n.s=a(n.s),new e(n)},e.prototype.saturate=function(t){void 0===t&&(t=10);var n=this.toHsl();return n.s+=t/100,n.s=a(n.s),new e(n)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var n=this.toHsl(),i=(n.h+t)%360;return n.h=i<0?360+i:i,new e(n)},e.prototype.mix=function(t,n){void 0===n&&(n=50);var i=this.toRgb(),r=new e(t).toRgb(),a=n/100;return new e({r:(r.r-i.r)*a+i.r,g:(r.g-i.g)*a+i.g,b:(r.b-i.b)*a+i.b,a:(r.a-i.a)*a+i.a})},e.prototype.analogous=function(t,n){void 0===t&&(t=6),void 0===n&&(n=30);var i=this.toHsl(),r=360/n,a=[this];for(i.h=(i.h-(r*t>>1)+720)%360;--t;)i.h=(i.h+r)%360,a.push(new e(i));return a},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){void 0===t&&(t=6);for(var n=this.toHsv(),i=n.h,r=n.s,a=n.v,o=[],s=1/t;t--;)o.push(new e({h:i,s:r,v:a})),a=(a+s)%1;return o},e.prototype.splitcomplement=function(){var t=this.toHsl(),n=t.h;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var n=this.toRgb(),i=new e(t).toRgb();return new e({r:i.r+(n.r-i.r)*n.a,g:i.g+(n.g-i.g)*n.a,b:i.b+(n.b-i.b)*n.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var n=this.toHsl(),i=n.h,r=[this],a=360/t,o=1;o<t;o++)r.push(new e({h:(i+o*a)%360,s:n.s,l:n.l}));return r},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}();const R=(e,t)=>{var n;return{r:Object(i.a)(255*e.r,0),g:Object(i.a)(255*e.g,0),b:Object(i.a)(255*e.b,0),a:Object(i.a)(null!==(n=null!=t?t:e.a)&&void 0!==n?n:1)}},A=e=>"SOLID"===e.type&&!0===e.visible?R(e.color,e.opacity):null,O=e=>`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`,M=e=>{return(t=O(e),void 0===t&&(t=""),void 0===n&&(n={}),new w(t,n)).toHex8String();var t,n}},51:function(e,t,n){"use strict";n.r(t);var i=n(7),r=n(1),a=n(6);var o=function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{u(i.next(e))}catch(e){a(e)}}function s(e){try{u(i.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}u((i=i.apply(e,t||[])).next())}))};var s=n(2);var u=function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{u(i.next(e))}catch(e){a(e)}}function s(e){try{u(i.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}u((i=i.apply(e,t||[])).next())}))};var l=e=>u(void 0,void 0,void 0,(function*(){const t=yield e.clientStorage.getAsync(r.a.key.lastVersionSettingsOpened),n=((e,t="1.0.0")=>{const[n,i,r]=t.split("."),[a,o,s]=e.split(".");return n<a?"major":i<o?"minor":r<s?"patch":void 0})("6.2.5",t);return t&&"6.2.5"===t||(yield e.clientStorage.setAsync(r.a.key.lastVersionSettingsOpened,"6.2.5")),n}));var c=e=>{let t=e.root.getPluginData(r.a.key.fileId);return void 0!==t&&""!==t||(e.root.setPluginData(r.a.key.fileId,e.root.name+" "+Math.floor(1e9*Math.random())),t=e.root.getPluginData(r.a.key.fileId)),t},p=n(3),f=n(5),d=n(4);const g={fill:{value:{r:0,g:0,b:0,a:0},type:"color"}},h=e=>e?{[r.a.key.extensionAlias]:e}:{},y={GRADIENT_LINEAR:"linear",GRADIENT_RADIAL:"radial",GRADIENT_ANGULAR:"angular",GRADIENT_DIAMOND:"diamond"},m=([[e,t],[n,i]])=>{const r=Math.atan2(i-t,n-e)*(180/Math.PI)+315;return r>360?r-360:r};var b=(e,t)=>e.reduce((e,n)=>{const i=n.paints.filter(e=>"IMAGE"!==e.type);if(n.paints.length&&0===i.length)return e;n.paints=i;const{alias:a,description:o}=((e="",t)=>{t=t&&0!==t.filter(e=>e).length?t:["Ref:"];const n=new RegExp("("+t.join("|").toLowerCase()+"):?\\s");let i;const r=e.split(/\r?\n/).filter(e=>!e.toLowerCase().match(n)||(i=e.toLowerCase().replace(n,"").trim(),!1));return{alias:i,description:r.join("\n")}})(n.description,t.alias),s=(u=n.paints[0],["GRADIENT_LINEAR","GRADIENT_RADIAL","GRADIENT_ANGULAR","GRADIENT_DIAMOND"].includes(null==u?void 0:u.type));var u;const l=n.paints.length?n.paints.map(e=>(e=>"SOLID"===e.type?{fill:{value:Object(f.a)(e),type:"color"}}:["GRADIENT_LINEAR","GRADIENT_RADIAL","GRADIENT_ANGULAR","GRADIENT_DIAMOND"].includes(e.type)?{gradientType:{value:y[e.type],type:"string"},rotation:{value:m(e.gradientTransform),type:"number",unit:"degree"},stops:e.gradientStops.map(e=>({position:{value:Object(d.a)(e.position),type:"number"},color:{value:Object(f.d)(e.color),type:"color"}})),opacity:{value:Object(d.a)(e.opacity),type:"number"}}:null)(e)):[g];return[...e,{name:`${s?t.gradient[0]:t.color[0]}/${n.name}`,category:s?"gradient":"color",exportKey:s?p.a.gradient.key:p.a.color.key,description:o,values:l,extensions:{[r.a.key.extensionPluginData]:Object.assign({[r.a.key.extensionFigmaStyleId]:n.id,exportKey:s?p.a.gradient.key:p.a.color.key},h(a))}}]},[]);var v=(e,t)=>e.filter(e=>e.layoutGrids.length>0).map(e=>({name:`${t[0]}/${e.name}`,category:"grid",exportKey:p.a.grid.key,description:e.description||null,values:e.layoutGrids.map(e=>"GRID"===e.pattern?(e=>({pattern:{value:e.pattern.toLowerCase(),type:"string"},sectionSize:{value:e.sectionSize,unit:"pixel",type:"number"}}))(e):(e=>{return Object.assign(Object.assign(Object.assign({pattern:{value:e.pattern.toLowerCase(),type:"string"}},void 0!==e.sectionSize&&{sectionSize:{value:e.sectionSize,unit:"pixel",type:"number"}}),{gutterSize:{value:e.gutterSize,unit:"pixel",type:"number"},alignment:{value:e.alignment.toLowerCase(),type:"string"},count:(t=e.count,t===1/0?{value:"auto",type:"string"}:{value:t,type:"number"})}),void 0!==e.offset&&{offset:{value:e.offset,unit:"pixel",type:"number"}});var t})(e)),extensions:{[r.a.key.extensionPluginData]:{[r.a.key.extensionFigmaStyleId]:e.id,exportKey:p.a.grid.key}}}));const x={NONE:"none",UNDERLINE:"underline",STRIKETHROUGH:"line-through"},k={ORIGINAL:"none",UPPER:"uppercase",LOWER:"lowercase",TITLE:"capitalize"},S={100:100,thin:100,200:200,extralight:200,ultralight:200,extraleicht:200,300:300,light:300,leicht:300,400:400,normal:400,regular:400,buch:400,500:500,medium:500,kraeftig:500,"kräftig":500,600:600,semibold:600,demibold:600,halbfett:600,700:700,bold:700,dreiviertelfett:700,800:800,extrabold:800,ultabold:800,fett:800,900:900,black:900,heavy:900,super:900,extrafett:900},w={normal:"normal",condensed:"condensed",expanded:"expanded",extended:"expanded"},R={normal:"normal",italic:"italic",kursiv:"italic",oblique:"oblique"},A=e=>{const t=e.toLowerCase().split(" ");let n=t[0];return["extra","ultra","semi","demi"].includes(t[0])&&["bold","light"].includes(t[1])&&(n=`${t[0]}${t[1]}`),S[n]||400},O=e=>{const t=e.toLowerCase().split(" ");return w[t[t.length-1]]||w[t[t.length-2]]||"normal"},M=e=>{const t=e.toLowerCase().split(" ").pop();return R[t]||"normal"};var E=(e,t)=>e.map(e=>({name:`${t[0]}/${e.name}`,category:"font",exportKey:p.a.font.key,description:e.description||void 0,values:{fontSize:{value:e.fontSize,unit:"pixel",type:"number"},textDecoration:{value:x[e.textDecoration],type:"string"},fontFamily:{value:e.fontName.family,type:"string"},fontWeight:{value:A(e.fontName.style),type:"number"},fontStyle:{value:M(e.fontName.style),type:"string"},fontStretch:{value:O(e.fontName.style),type:"string"},_fontStyleOld:{value:e.fontName.style,type:"string"},letterSpacing:{value:Object(d.a)(e.letterSpacing.value),unit:"pixels"===e.letterSpacing.unit.toLowerCase()?"pixel":e.letterSpacing.unit.toLowerCase(),type:"number"},lineHeight:{value:Object(d.a)(e.lineHeight.value)||"normal",unit:"pixels"===e.lineHeight.unit.toLowerCase()?"pixel":e.lineHeight.unit.toLowerCase(),type:Object.prototype.hasOwnProperty.call(e.lineHeight,"value")?"number":"string"},paragraphIndent:{value:e.paragraphIndent,unit:"pixel",type:"number"},paragraphSpacing:{value:e.paragraphSpacing,unit:"pixel",type:"number"},textCase:{value:k[e.textCase],type:"string"}},extensions:{[r.a.key.extensionPluginData]:{[r.a.key.extensionFigmaStyleId]:e.id,exportKey:p.a.font.key}}}));const I={LAYER_BLUR:"layerBlur",BACKGROUND_BLUR:"backgroundBlur",DROP_SHADOW:"dropShadow",INNER_SHADOW:"innerShadow"};var N=(e,t)=>e.filter(e=>e.effects.length>0).map(e=>({name:`${t[0]}/${e.name}`,category:"effect",exportKey:p.a.effect.key,description:e.description||null,values:e.effects.map(e=>"LAYER_BLUR"===e.type||"BACKGROUND_BLUR"===e.type?(e=>({effectType:{value:I[e.type],type:"string"},radius:{value:e.radius,unit:"pixel",type:"number"}}))(e):(e=>({effectType:{value:I[e.type],type:"string"},radius:{value:e.radius,unit:"pixel",type:"number"},color:{value:Object(f.d)(e.color),type:"color"},offset:{x:{value:e.offset.x,unit:"pixel",type:"number"},y:{value:e.offset.y,unit:"pixel",type:"number"}},spread:{value:e.spread,unit:"pixel",type:"number"}}))(e)),extensions:{[r.a.key.extensionPluginData]:{[r.a.key.extensionFigmaStyleId]:e.id,exportKey:p.a.effect.key}}}));const C=e=>t=>e.includes(t.name.substr(0,t.name.indexOf("/")).replace(/\s+/g,"")),j=e=>{if(Object.prototype.hasOwnProperty.call(e,"direction"))return{direction:{value:e.direction.toLowerCase(),type:"string"}}},L={CUSTOM_CUBIC_BEZIER:{},LINEAR:{type:"linear",easingFunctionCubicBezier:{x1:0,y1:0,x2:1,y2:1}},EASE_IN:{type:"ease-in",easingFunctionCubicBezier:{x1:.41999998688697815,y1:0,x2:1,y2:1}},EASE_OUT:{type:"ease-out",easingFunctionCubicBezier:{x1:0,y1:0,x2:.5799999833106995,y2:1}},EASE_IN_AND_OUT:{type:"ease-in-out",easingFunctionCubicBezier:{x1:.41999998688697815,y1:0,x2:.5799999833106995,y2:1}},EASE_IN_BACK:{type:"ease-in-back",easingFunctionCubicBezier:{x1:.30000001192092896,y1:-.05000000074505806,x2:.699999988079071,y2:-.5}},EASE_OUT_BACK:{type:"ease-out-back",easingFunctionCubicBezier:{x1:.44999998807907104,y1:1.4500000476837158,x2:.800000011920929,y2:1}},EASE_IN_AND_OUT_BACK:{type:"ease-in-out-back",easingFunctionCubicBezier:{x1:.699999988079071,y1:-.4000000059604645,x2:.4000000059604645,y2:1.399999976158142}}},D=e=>{if("type"in e&&void 0!==L[e.type])return"CUSTOM_CUBIC_BEZIER"===e.type&&(L.CUSTOM_CUBIC_BEZIER={type:"cubic-bezier",easingFunctionCubicBezier:{x1:e.easingFunctionCubicBezier.x1,y1:e.easingFunctionCubicBezier.y1,x2:e.easingFunctionCubicBezier.x2,y2:e.easingFunctionCubicBezier.y2}}),{easing:{value:L[e.type].type,type:"string"},easingFunction:{x1:{value:L[e.type].easingFunctionCubicBezier.x1,type:"number"},x2:{value:L[e.type].easingFunctionCubicBezier.x2,type:"number"},y1:{value:L[e.type].easingFunctionCubicBezier.y1,type:"number"},y2:{value:L[e.type].easingFunctionCubicBezier.y2,type:"number"}}}};var T=(e,t)=>e.filter(C(t)).filter(e=>{var t;return e.reactions.length>0&&"NODE"===(null===(t=e.reactions[0].action)||void 0===t?void 0:t.type)&&null!==e.reactions[0].action.transition}).map(e=>({name:e.name,category:"motion",exportKey:p.a.motion.key,description:e.description||null,values:Object.assign(Object.assign({transitionType:{value:e.reactions[0].action.transition.type.toLocaleLowerCase(),type:"string"},duration:{value:Math.round(1e3*(e.reactions[0].action.transition.duration+Number.EPSILON))/1e3,unit:"s",type:"number"}},D(e.reactions[0].action.transition.easing)),j(e.reactions[0].action.transition)),extensions:{[r.a.key.extensionPluginData]:{exportKey:p.a.motion.key}}}));var P=(e,t)=>e.filter(C(t)).map(e=>({name:e.name,category:"size",exportKey:p.a.size.key,description:e.description||null,values:{width:{value:Object(d.a)(e.width,2),unit:"pixel",type:"number"},height:{value:Object(d.a)(e.height,2),unit:"pixel",type:"number"}},extensions:{[r.a.key.extensionPluginData]:{exportKey:p.a.size.key}}}));var F=(e,t)=>e.filter(C(t)).map(e=>({name:e.name,category:"spacing",exportKey:p.a.spacing.key,description:e.description||null,values:{top:{value:Object(d.a)(e.paddingTop,2),unit:"pixel",type:"number"},right:{value:Object(d.a)(e.paddingRight,2),unit:"pixel",type:"number"},bottom:{value:Object(d.a)(e.paddingBottom,2),unit:"pixel",type:"number"},left:{value:Object(d.a)(e.paddingLeft,2),unit:"pixel",type:"number"}},extensions:{[r.a.key.extensionPluginData]:{exportKey:p.a.spacing.key}}}));const _={MITER:"miter",BEVEL:"bevel",ROUND:"round"},z={CENTER:"center",INSIDE:"inside",OUTSIDE:"outside"};var B=(e,t)=>e.filter(C(t)).filter(e=>e.strokes.length>0).map(e=>({name:e.name,category:"border",exportKey:p.a.border.key,description:e.description||null,values:{strokeAlign:{value:z[e.strokeAlign],type:"string"},dashPattern:{value:[...void 0!==e.dashPattern&&e.dashPattern.length>0?e.dashPattern:[0,0]],type:"string"},strokeCap:{value:"string"==typeof e.strokeCap?e.strokeCap.toLowerCase():"mixed",type:"string"},strokeJoin:{value:_[e.strokeJoin],type:"string"},strokeMiterLimit:{value:Object(d.a)(e.strokeMiterLimit),unit:"degree",type:"number"},strokeWeight:{value:e.strokeWeight,unit:"pixel",type:"number"},stroke:{value:e.strokes[0],type:"color"}},extensions:{[r.a.key.extensionPluginData]:{exportKey:p.a.border.key}}}));var H=(e,t)=>{const n=e=>({topLeft:{value:e.topLeftRadius||0,unit:"pixel",type:"number"},topRight:{value:e.topRightRadius||0,unit:"pixel",type:"number"},bottomRight:{value:e.bottomRightRadius||0,unit:"pixel",type:"number"},bottomLeft:{value:e.bottomLeftRadius||0,unit:"pixel",type:"number"}});return e.filter(C(t)).map(e=>{return{name:e.name,category:"radius",exportKey:p.a.radius.key,description:e.description||null,values:Object.assign(Object.assign({},"number"==typeof e.cornerRadius&&{radius:{value:e.cornerRadius,unit:"pixel",type:"number"}}),{radiusType:{value:(t=e.cornerRadius,"number"==typeof t?"single":"mixed"),type:"string"},radii:n(e),smoothing:{value:Object(d.a)(e.cornerSmoothing,2),comment:"Percent as decimal from 0.0 - 1.0",type:"number"}}),extensions:{[r.a.key.extensionPluginData]:{exportKey:p.a.radius.key}}};var t})};var U=(e,t)=>e.filter(C(t)).map(e=>({name:e.name,category:"breakpoint",exportKey:p.a.breakpoint.key,description:e.description||null,values:{width:{value:Object(d.a)(e.width,2),unit:"pixel",type:"number"},height:{value:Object(d.a)(e.height,2),unit:"pixel",type:"number"}},extensions:{[r.a.key.extensionPluginData]:{exportKey:p.a.breakpoint.key}}}));var G=(e,t)=>!(e=>[...r.a.exclusionPrefixDefault,...e])(t).includes(e.name.trim().substr(0,1));var K=e=>{const t=[];return e.forEach(e=>{t.push({name:e.name,id:e.id,description:e.description,paints:e.paints})}),t};var $=e=>{const t=[];return e.forEach(e=>{t.push({name:e.name,id:e.id,description:e.description,layoutGrids:e.layoutGrids})}),t};var W=e=>{return{name:e.name,description:e.description||void 0,bottomLeftRadius:e.bottomLeftRadius,bottomRightRadius:e.bottomRightRadius,topLeftRadius:e.topLeftRadius,topRightRadius:e.topRightRadius,cornerRadius:e.cornerRadius||void 0,cornerSmoothing:e.cornerSmoothing,strokes:(t=e.strokes,[...t].map(e=>Object(f.a)(e)).filter(e=>null!=e)),strokeWeight:e.strokeWeight,strokeStyleId:e.strokeStyleId,strokeMiterLimit:e.strokeMiterLimit,strokeJoin:e.strokeJoin,strokeCap:e.strokeCap,dashPattern:e.dashPattern,strokeAlign:e.strokeAlign,width:e.width,height:e.height,reactions:e.reactions||void 0,paddingTop:e.paddingTop||0,paddingRight:e.paddingRight||0,paddingBottom:e.paddingBottom||0,paddingLeft:e.paddingLeft||0};var t};const q=["COMPONENT","COMPONENT_SET","RECTANGLE","FRAME"];var J=e=>"COMPONENT_SET"!==e.parent.type&&q.includes(e.type);const V=e=>"FRAME"===e.type&&"_tokens"===e.name.trim().toLowerCase().substr(0,"_tokens".length);var Z=e=>[...e.map(e=>e.findChildren(e=>V(e))).reduce((e,t)=>[...e,...t])].map(e=>e.findAll(e=>J(e))).reduce((e,t)=>[...e,...t],[]).map(e=>("RECTANGLE"!==e.type&&"FRAME"!==e.type||console.warn("Please use only main components and variants, other types may be deprecated as tokens in the future"),"COMPONENT_SET"===e.type?e.children.map(t=>{return Object.assign(Object.assign({},W(t)),{name:(n=e.name,i=t.name,`${n}/${i=i.split(",").filter(e=>!["_","."].includes(e.trim().substr(0,1))).map(e=>e.split("=")[1]).join("/")}`)});var n,i}):[W(e)])).reduce((e,t)=>[...e,...t],[]);var Q=e=>{const t=[];return e.forEach(e=>{t.push({name:e.name,id:e.id,description:e.description,fontSize:e.fontSize,textDecoration:e.textDecoration,fontName:e.fontName,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,paragraphIndent:e.paragraphIndent,paragraphSpacing:e.paragraphSpacing,textCase:e.textCase})}),t};var Y=e=>{const t=[];return e.forEach(e=>{t.push({name:e.name,id:e.id,description:e.description,effects:e.effects})}),t};var X=(e,t)=>{const n=Z([...e.root.children]),i=t.exclusionPrefix.split(",").map(e=>e.replace(/\s+/g,""));return{tokenFrames:n,paintStyles:K(e.getLocalPaintStyles()).filter(e=>G(e,i)),gridStyles:$(e.getLocalGridStyles()).filter(e=>G(e,i)),textStyles:Q(e.getLocalTextStyles()).filter(e=>G(e,i)),effectStyles:Y(e.getLocalEffectStyles()).filter(e=>G(e,i))}};const ee=e=>e.split(",").map(e=>e.replace(/\s+/g,"")),te=(e,t)=>{const n=X(e,t);return[...P(n.tokenFrames,ee(t.prefix.size)),...U(n.tokenFrames,ee(t.prefix.breakpoint)),...F(n.tokenFrames,ee(t.prefix.spacing)),...B(n.tokenFrames,ee(t.prefix.border)),...H(n.tokenFrames,ee(t.prefix.radius)),...T(n.tokenFrames,ee(t.prefix.motion)),...b(n.paintStyles,{color:ee(t.prefix.color),gradient:ee(t.prefix.gradient),alias:ee(t.alias)}),...v(n.gridStyles,ee(t.prefix.grid)),...E(n.textStyles,ee(t.prefix.font)),...N(n.effectStyles,ee(t.prefix.effect))]};var ne=function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{u(i.next(e))}catch(e){a(e)}}function s(e){try{u(i.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}u((i=i.apply(e,t||[])).next())}))};if(figma.showUI(__html__,{visible:!1}),[s.a.export,s.a.urlExport,s.a.generalSettings].includes(figma.command)){(()=>ne(void 0,void 0,void 0,(function*(){const e=(()=>{let e=figma.root.getPluginData(r.a.key.settings);return""===e?i.a:(e=JSON.parse(e),Object.fromEntries(Object.entries(i.a).map(([t,n])=>void 0!==n&&typeof e[t]!=typeof n?[t,i.a[t]]:[t,e[t]])))})(),t=yield l(figma);var n;figma.ui.resize(r.a.ui[figma.command].width,r.a.ui[figma.command].height),void 0!==t&&"patch"!==t&&figma.ui.resize(r.a.ui[figma.command].width,r.a.ui[figma.command].height+60),figma.ui.postMessage({command:figma.command,payload:{settings:Object.assign(Object.assign({},e),{accessToken:yield(n=c(figma),o(void 0,void 0,void 0,(function*(){const e=yield figma.clientStorage.getAsync("accessTokens");return void 0!==e&&e instanceof Object&&e[n]||""})))}),data:Object(a.a)(te(figma,e)),versionDifference:t,metadata:{filename:figma.root.name}}}),figma.ui.show()})))()}figma.command===s.a.help&&figma.ui.postMessage({command:s.a.help,payload:{url:"https://github.com/lukasoppermann/design-tokens"}}),figma.command===s.a.demo&&figma.ui.postMessage({command:s.a.demo,payload:{url:"https://www.figma.com/file/2MQ759R5kJtzQn4qSHuqR7/Design-Tokens-for-Figma?node-id=231%3A2"}}),figma.command===s.a.reset&&(figma.root.setPluginData(r.a.key.settings,Object(a.a)(i.a)),figma.notify("⚙️ Settings have been reset."),figma.closePlugin()),figma.ui.onmessage=e=>ne(void 0,void 0,void 0,(function*(){const{command:t,payload:n}=e;var u,l,p;t===s.a.closePlugin&&(void 0!==(null==n?void 0:n.notification)&&""!==(null==n?void 0:n.notification)&&figma.notify(n.notification),figma.ui.hide(),figma.closePlugin()),t===s.a.saveSettings&&(p=n.settings,p=Object.assign(Object.assign({},i.a),p),figma.root.setPluginData(r.a.key.settings,Object(a.a)(p)),yield(u=c(figma),l=n.accessToken,o(void 0,void 0,void 0,(function*(){const e=(yield figma.clientStorage.getAsync("accessTokens"))||{},t=Object.assign(Object.assign({},e),{[u]:l});return yield figma.clientStorage.setAsync("accessTokens",t)}))),n.closePlugin&&!0===n.closePlugin&&figma.closePlugin())}))},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=(e,t=!0)=>!0===t?JSON.stringify(e):JSON.stringify(e,null,2)},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i={filename:"design-tokens",extension:".tokens.json",nameConversion:"default",tokenFormat:"standard",compression:!1,urlJsonCompression:!0,serverUrl:void 0,eventType:"update-tokens",accessToken:void 0,acceptHeader:"application/vnd.github.everest-preview+json",contentType:"text/plain;charset=UTF-8",authType:"token",exclusionPrefix:"",alias:"alias, ref, reference",keyInName:!1,prefixInName:!0,prefix:{color:"color",gradient:"gradient",typography:"typography",font:"font",effect:"effect",grid:"grid",border:"border, borders",breakpoint:"breakpoint, breakpoints",radius:"radius, radii",size:"size, sizes",spacing:"spacing",motion:"motion"},exports:{color:!0,gradient:!0,font:!0,typography:!0,effect:!0,grid:!0,border:!0,breakpoint:!0,radius:!0,size:!0,spacing:!0,motion:!0}}}});