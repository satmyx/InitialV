(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{51:function(e,t,a){"use strict";var i=a(0),o=a.n(i);a(52);t.a=e=>{const t=e.backgroundColor||"#ffffff";return o.a.createElement("div",{className:"app-container",style:{backgroundColor:t}},e.children)}},52:function(e,t,a){var i=a(14),o=a(53);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1},r=(i(o,n),o.locals?o.locals:{});e.exports=r},53:function(e,t,a){(t=a(15)(!1)).push([e.i,".app-container{width:260px;height:555px;position:absolute;overflow:hidden;margin-top:-30px;padding-top:20px;color:black;-webkit-animation:scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;animation:scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both}.app-container.exit{-webkit-animation:scale-out-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;animation:scale-out-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both}.app-container *{color:inherit}\n",""]),e.exports=t},54:function(e,t,a){"use strict";var i=a(0),o=a.n(i),n=(a(55),a(12)),r=a(23),l=a(7);t.a=Object(l.g)(e=>{const t=e.color||"#397fda",a=e.titleColor||"black";return o.a.createElement("div",{className:"header-app",style:{color:t}},o.a.createElement("div",{className:"header-app-left"},o.a.createElement(n.a,{onClick:e.onClickOnArrow||(()=>{e.history.goBack()}),src:`${r.a}`,fallback:()=>o.a.createElement("span",null,"Error!"),className:"header-app-arrow",style:{fill:t}}),e.onClickOnLeftText&&e.leftText&&o.a.createElement("div",{className:"header-app-left-text",onClick:e.onClickOnLeftText},e.leftText)),e.title&&o.a.createElement("span",{className:"header-app-title",style:{color:a}},e.title),o.a.createElement("div",{className:"header-app-right"},e.onClickOnRightText&&e.rightText&&o.a.createElement("div",{className:"header-app-right-text",onClick:e.onClickOnRightText},e.rightText)))})},55:function(e,t,a){var i=a(14),o=a(56);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1},r=(i(o,n),o.locals?o.locals:{});e.exports=r},56:function(e,t,a){(t=a(15)(!1)).push([e.i,".header-app{display:flex;width:100%;font-size:12px;padding:10px 5px 5px 0px;border-bottom:thin solid;border-color:rgba(0,0,0,0.1);white-space:nowrap}.header-app>div{display:inline-block}.header-app-arrow{text-align:center;display:inline-block;width:8px;height:4px;padding-left:5px;padding-right:4px;padding-bottom:10px}.header-app-arrow:hover{border-radius:4px;background-color:rgba(19,12,12,0.07)}.header-app-left{flex:1;float:left;text-align:left;padding-top:5px}.header-app-left-text{display:inline-block;transition:0.5s;padding:0px 15px 5px 5px}.header-app-left-text:hover{border-radius:4px;background-color:rgba(19,12,12,0.07)}.header-app-title{flex:1;left:0;right:0;padding-top:5px;text-align:center}.header-app-right{flex:1;float:right;text-align:right;transition:0.5s}.header-app-right-text{display:inline-block;font-size:12px;padding:5px 15px 5px 5px}.header-app-right-text:hover{border-radius:4px;background-color:rgba(19,12,12,0.07)}\n",""]),e.exports=t},57:function(e,t,a){var i=a(14),o=a(58);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1},r=(i(o,n),o.locals?o.locals:{});e.exports=r},58:function(e,t,a){(t=a(15)(!1)).push([e.i,".item-mail{border-bottom:thin solid;border-color:rgba(0,0,0,0.1);transition:0.4s;cursor:pointer;padding-bottom:10px;padding-top:5px}#mail-sender{padding-top:5px;font-size:17px;font-family:'Segoe UI';font-weight:bold}#mail-topic{font-size:14px;font-family:'Segoe UI';letter-spacing:-0.5px;font-weight:400}#mail-content{margin-right:5%;font-family:'Segoe UI';overflow:hidden;color:grey;font-size:12px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.item-mail-top{display:block;width:100%}.item-mail-top-right{float:right;padding-right:10px}.item-mail-top-arrow{display:inline-block;width:8px;height:16px;padding-left:3px;overflow:hidden;fill:#8f8a8a}#mail-date{display:inline-block;font-family:'Segoe UI';letter-spacing:-0.5px;font-size:12px;color:#8f8a8a}.left{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.arrow:before,.arrow:after,.arrowDate:before,.arrowDate:after{border-right:0.1rem solid;content:'';display:block;height:9px;margin-top:-6px;position:absolute;-moz-transform:rotate(135deg);-o-transform:rotate(135deg);-webkit-transform:rotate(135deg);transform:rotate(135deg);right:10px;top:50%;width:0}.arrow:after,.arrowDate:after{margin-top:-1px;-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.mail-core{display:flex;transition:0.4s;user-select:none;transition:0.3s}.mail-core:hover{background-color:rgba(19,12,12,0.06)}.mail-core.edit{padding-left:20px}.mail-core>*{display:inline-block}.notif-container{display:flex;min-width:16px;justify-content:center;padding-top:14px}.mail-notification{display:inline-flex;background:#2c76d6;width:8px;height:8px;border-radius:50%;transition:0.3s}.mail-notification.edit{opacity:0}\n",""]),e.exports=t},59:function(e,t,a){"use strict";var i=a(0),o=a.n(i),n=(a(57),a(12)),r=a.p+"6183db20ccf09898f0656063ba4d0f22.svg";t.a=e=>o.a.createElement("div",{className:`mail-core ${e.edit?"edit":""}`,onClick:t=>{e.onClick&&e.onClick(t,e)}},o.a.createElement("div",{className:"notif-container"},!!e.notification&&o.a.createElement("div",{className:`mail-notification ${e.edit?"edit":""}`})),o.a.createElement("div",{className:"item-mail"},o.a.createElement("div",{className:"item-mail-top"},!!e.title&&o.a.createElement("span",{id:"mail-sender"},e.title),o.a.createElement("div",{className:"item-mail-top-right"},!!e.date&&o.a.createElement("span",{id:"mail-date"},e.date),o.a.createElement(n.a,{beforeInjection:e=>{e.setAttribute("width","8px"),e.setAttribute("height","8px")},src:`${r}`,fallback:()=>o.a.createElement("span",null,"Error!"),className:"item-mail-top-arrow"}))),!!e.topic&&o.a.createElement("div",{id:"mail-topic"},e.topic),o.a.createElement("div",{id:"mail-content"},e.content)))},60:function(e,t,a){var i=a(14),o=a(61);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1},r=(i(o,n),o.locals?o.locals:{});e.exports=r},61:function(e,t,a){(t=a(15)(!1)).push([e.i,".mail-box{height:calc(100% - 64px);overflow-y:scroll}\n",""]),e.exports=t},74:function(e,t,a){var i=a(14),o=a(75);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1},r=(i(o,n),o.locals?o.locals:{});e.exports=r},75:function(e,t,a){(t=a(15)(!1)).push([e.i,"",""]),e.exports=t},82:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),n=(a(74),a(60),a(54)),r=a(59),l=a(51);const d=[{id:1,title:"John Doe",date:"Yesterday",notification:!0,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae leo dapibus, accumsan lorem eleifend, pharetra quam. Quisque vestibulum commodo justo, eleifend mollis enim blandit eu. Aenean hendrerit nisl et elit maximus finibus. Suspendisse scelerisque consectetur nisl mollis scelerisque."},{id:2,title:"55545856",date:"Friday",notification:!1,content:"Hello John, I got the package you sent me yesterday. Thank you for that, David."},{id:2,title:"55545856",date:"Friday",notification:!1,content:"Hello John, I got the package you sent me yesterday. Thank you for that, David."},{id:2,title:"55545856",date:"Friday",notification:!1,content:"Hello John, I got the package you sent me yesterday. Thank you for that, David."},{id:2,title:"55545856",date:"Friday",notification:!1,content:"Hello John, I got the package you sent me yesterday. Thank you for that, David."},{id:2,title:"55545856",date:"Friday",notification:!1,content:"Hello John, I got the package you sent me yesterday. Thank you for that, David."},{id:2,title:"55545856",date:"Friday",notification:!1,content:"Hello John, I got the package you sent me yesterday. Thank you for that, David."},{id:2,title:"55545856",date:"Friday",notification:!1,content:"Hello John, I got the package you sent me yesterday. Thank you for that, David."},{id:2,title:"55545856",date:"Friday",notification:!1,content:"Hello John, I got the package you sent me yesterday. Thank you for that, David."},{id:2,title:"55545856",date:"Friday",notification:!1,content:"Hello John, I got the package you sent me yesterday. Thank you for that, David."}];t.default=e=>{const[t,a]=Object(i.useState)(!1);return o.a.createElement(l.a,null,o.a.createElement(n.a,{title:"Messages",leftText:"Edit",rightText:"Write",onClickOnLeftText:()=>a(!t),onClickOnRightText:()=>{}}),o.a.createElement("div",{className:"mail-box"},d.map((e,a)=>o.a.createElement(o.a.Fragment,{key:a},o.a.createElement(r.a,Object.assign({},e,{edit:t}))))))}}}]);