(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{104:function(e,t){},105:function(e,t){},106:function(e,t){},107:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r(0),s=r(8),i=r(89);let o=class extends n.Component{constructor(e){super(e),this.formView=new i.a(this.props)}componentWillMount(){this.formView.setInitValues(this.props.initValues)}debug(){}render(){let{className:e,children:t,initValues:r}=this.props;return n.createElement("div",{className:e},void 0===t?this.formView.render():n.createElement("form",{onSubmit:this.formView.onSubmit},t))}};o=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}([s.a],o)},108:function(e,t,r){"use strict";r(0),r(2),r(78)},111:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r(0);class s extends n.Component{render(){let{date:e}=this.props;if(!e)return null;let t="string"===typeof e?new Date(Date.parse(e)):e,r=new Date,n=r.getTime()-t.getTime(),s=r.getDate(),i=t.getDate(),o=t.getHours(),l=t.getMinutes(),a=t.getMonth()+1,c=o+(l<10?":0":":")+l;return n<-864e5?t.getFullYear()+"\u5e74"+a+"\u6708"+i+"\u65e5 "+c:n<864e5?i!==s?(n<0?"\u660e\u5929 ":"\u6628\u5929 ")+c:c:n<31536e6?a+"\u6708"+i+"\u65e5 ":t.getFullYear()+"\u5e74"+a+"\u6708"+i+"\u65e5"}}},112:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r(0),s=r(2);const i={width:"4rem",height:"4rem"};class o extends n.Component{render(){let e,{icon:t,main:r,discription:o,px:l,py:a}=this.props;e="string"===typeof o?n.createElement("div",null,o):o;let c=t;"string"===typeof t&&(c=n.createElement("img",{className:"d-flex mr-3",src:t,alt:"img",style:i}));let u=s("media",void 0===l?"px-0":"px-"+l,void 0===a?"py-2":"py-"+a);return n.createElement("div",{className:u},c,n.createElement("div",{className:"media-body"},n.createElement("h5",{className:"mt-0"},r),e))}}},113:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r(0),s=r(2),i=function(e,t,r,n){return new(r||(r=Promise))(function(s,i){function o(e){try{a(n.next(e))}catch(t){i(t)}}function l(e){try{a(n.throw(e))}catch(t){i(t)}}function a(e){e.done?s(e.value):new r(function(t){t(e.value)}).then(o,l)}a((n=n.apply(e,t||[])).next())})};class o extends n.Component{constructor(e){super(e),this.onChange=(e=>{this.key=e.target.value,void 0!==this.key&&(this.key=this.key.trim()),this.setState({disabled:!this.key})}),this.ref=(e=>{this.input=e,this.key=this.props.initKey||"",null!==e&&(e.value=this.key)}),this.onSubmit=(e=>i(this,void 0,void 0,function*(){e.preventDefault(),this.key&&(this.input&&(this.input.disabled=!0),yield this.props.onSearch(this.key),this.input&&(this.input.disabled=!1))})),this.state={disabled:!1}}render(){let e,t,{className:r,label:i,placeholder:o,buttonText:l,maxLength:a,size:c}=this.props;switch(c){default:case"sm":e="input-group-sm";break;case"md":e="input-group-md";break;case"lg":e="input-group-lg"}return void 0!==i&&(t=n.createElement("label",{className:"input-group-addon"},i)),n.createElement("form",{className:r,onSubmit:this.onSubmit},n.createElement("div",{className:s("input-group",e)},t,n.createElement("input",{onChange:this.onChange,type:"text",name:"key",ref:this.ref,className:"form-control",placeholder:o,maxLength:a}),n.createElement("div",{className:"input-group-append"},n.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.state.disabled},n.createElement("i",{className:"fa fa-search"}),n.createElement("i",{className:"fa"}),l))))}}},114:function(e,t,r){"use strict";r(0),r(7),r(2),r(87)},118:function(e,t,r){"use strict";var n=r(0),s=r(2),i=r.n(s),o=r(8),l=r(1);class a{constructor(e){this.list=e}get isPaged(){let e=this.list.props.items;return null!==e&&void 0!==e&&!1===Array.isArray(e)}get items(){let e=this.list.props.items;return null===e?null:void 0!==e?!0===Array.isArray(e)?e:e.items:void 0}get loading(){let e=this.list.props.items;if(null===e)return!1;if(void 0===e)return!0;let t=e;return void 0!==t.items&&t.loading}get selectedItems(){}updateProps(e){}renderContent(e,t){let{render:r}=this.list.props.item;return void 0===r?n.createElement("div",{className:"px-3 py-2"},JSON.stringify(e)):r(e,t)}}(function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);i>3&&o&&Object.defineProperty(t,r,o)})([l.d],a.prototype,"loading",null);class c extends a{render(e,t){let{className:r,onClick:i}=this.list.props.item;return n.createElement("li",{className:s("va-row-clickable",r),onClick:()=>i(e)},this.renderContent(e,t))}}class u extends a{render(e,t){let{className:r,key:i,render:o}=this.list.props.item;if("string"===typeof e){let t=s("va-list-gap","px-3","pt-1");return n.createElement("li",{className:t},e)}return n.createElement("li",{className:s(r)},this.renderContent(e,t))}}var d=r(81);class h extends a{buildItems(){console.log("buildItems in selectable.tsx");let e,{items:t,selectedItems:r,compare:n}=this.list.props;return void 0===t?this._items=void 0:null===t?this._items=null:(e=!0===Array.isArray(t)?t:t.items,this._selectedItems=r,this._items=void 0===r?e.map(e=>({selected:!1,item:e,labelId:Object(d.a)()})):void 0===n?e.map(e=>({selected:void 0!==r.find(t=>t===e),item:e,labelId:Object(d.a)()})):e.map(e=>({selected:void 0!==r.find(t=>n(e,t)),item:e,labelId:Object(d.a)()})))}get items(){return this.buildItems(),this._items}updateProps(e){e.selectedItems!==this._selectedItems&&this.buildItems()}onSelect(e,t){e.selected=t;let r=this._items.some(e=>e.selected);this.list.props.item.onSelect(e.item,t,r)}get selectedItems(){return this._items.filter(e=>!0===e.selected).map(e=>e.item)}render(e,t){let{className:r,key:i,render:o,onSelect:l}=this.list.props.item,{labelId:a,selected:c}=e;return n.createElement("li",{className:s(r)},n.createElement("div",{className:"d-flex align-items-center px-3"},n.createElement("input",{ref:e=>{e&&(this.input=e,e.checked=c)},className:"",type:"checkbox",value:"",id:a,defaultChecked:c,onChange:t=>{this.onSelect(e,t.target.checked)}}),n.createElement("label",{className:"",style:{flex:1,marginBottom:0},htmlFor:a},this.renderContent(e.item,t))))}}(function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);i>3&&o&&Object.defineProperty(t,r,o)})([l.d],h.prototype,"items",null);r(149);let f=class extends n.Component{constructor(e){super(e),this._$scroll=(e=>{console.log("############### items scroll to "+e)});let{item:t}=this.props,{onClick:r,onSelect:n}=t;this.listBase=void 0!==n?new h(this):void 0!==r?new c(this):new u(this)}componentWillUpdate(e,t,r){this.listBase.updateProps(e)}get selectedItems(){return this.listBase.selectedItems}render(){let{className:e,header:t,footer:r,before:s,loading:o,none:l,item:a,selectedItems:c}=this.props;void 0===s&&(s="before"),void 0===o&&(o="loading"),void 0===l&&(l="none");let u,{isPaged:d,items:h,loading:f}=this.listBase;function p(e,t){if(e)switch(typeof e){default:case"string":return n.createElement("li",{className:"va-list-"+t},e);case"function":return n.createElement("li",{className:"va-list-"+t},e());case"object":return n.createElement("li",null,e)}}if(null===h)u=p(s,"before");else if(void 0===h)u=p(o,"loading");else if(0===h.length)u=p(l,"none");else{let{key:e}=this.props.item;u=h.map((t,r)=>{let s=void 0===e?r:e(t);return n.createElement(n.Fragment,{key:s},this.listBase.render(t,r))})}return n.createElement("ul",{className:i()("va-list",e)},p(t,"header"),u,p(r,"footer"))}};f=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}([o.a],f),r.d(t,"a",function(){return f})},119:function(e,t,r){"use strict";var n=r(0),s=r(8),i=r(2);r(143);let o=class extends n.Component{render(){let e,{className:t,badge:r,size:s,color:o,badgeAlign:l,badgeVertical:a,children:c}=this.props,u=i(t,"va-badge",s&&"va-badge-"+s,"va-badge-"+(o||"secondary"),l&&"va-badg-"+l,a&&"va-badg-"+a);return r&&(e=n.createElement("b",null,r)),n.createElement("div",{className:u},c,e)}};o=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}([s.a],o);r(145);let l=class extends n.Component{render(){let e,t,r,{className:s,left:o,children:l,right:a,onClick:c}=this.props;return void 0!==o&&(e=n.createElement("header",null,o)),void 0!==a&&(t=n.createElement("footer",null,a)),void 0!==c&&(r="cursor-pointer"),n.createElement("div",{className:i("va-lmr",s,r),onClick:c},e,n.createElement("div",null,l),t)}};l=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}([s.a],l);class a extends n.Component{render(){let{name:e,className:t,size:r,spin:s,fixWidth:o,border:l,pull:a,pulse:c,rotate:u,flip:d,inverse:h}=this.props,f=i(t,"fa",e&&"fa-"+e,r&&"fa-"+r,o&&"fa-fw",l&&"fa-border",a&&"fa-pull-"+a,s&&"fa-spin",c&&"fa-pulse",u&&"fa-rotate-"+u,d&&"fa-flip-"+d,h&&"fa-inverse");return n.createElement("i",{className:f})}}class c extends n.Component{render(){let{icon:e,iconClass:t,text:r,textClass:s}=this.props;return n.createElement("div",{className:"py-2"},n.createElement(a,{className:t,name:e,fixWidth:!0}),n.createElement("span",{className:s},r))}}const u=e=>n.createElement("small",{className:i("text-muted",e.className),style:e.style},e.children);r.d(t,"c",function(){return l}),r.d(t,"a",function(){return a}),r.d(t,"b",function(){return c}),r.d(t,"d",function(){return u})},120:function(e,t,r){"use strict";var n=r(0),s=r(2);class i{setValues(e){}}class o extends i{render(e){return n.createElement("div",{key:"_b_"+e,className:""},n.createElement("div",{className:"col-sm-12"},n.createElement("div",{style:{borderTop:"1px solid #f0f0f0"}})))}}class l extends i{constructor(e){super(),this.param=e}render(e){let t;switch(this.param){default:t="py-2";break;case"=":t="py-1";break;case"-":t="pb-1"}let r=s(t);return n.createElement("div",{key:"_g_"+e,className:r,style:{backgroundColor:"#f0f0f0"}})}}const a="justify-content-start",c="justify-content-center",u="justify-content-end";class d extends i{constructor(e,t){super(),this.gridProps=e,this.prop=t}render(e){let{onClick:t,bk:r}=this.prop,i=s({"cursor-pointer":void 0!==t,"bg-white":void 0===r,row:!0});return n.createElement("div",{key:e,className:i,onClick:t},this.renderLabel(),this.renderProp())}renderLabel(){let{label:e}=this.prop;return void 0===e?null:n.createElement("label",{className:"col-sm-2 col-form-label"},e)}renderProp(){let e,t,r,{label:i,full:o}=this.prop;switch(this.gridProps.alignValue){case"left":e=a;break;case"center":e=c;break;case"right":e=u}switch(this.prop.vAlign){case"top":t="align-items-start";break;default:case"center":t="align-items-center";break;case"bottom":t="align-items-end";break;case"stretch":t="align-items-stretch"}let l=s(e,t,r=!0!==o?void 0===i?"col-sm-12":"col-sm-10":"w-100","d-flex");return n.createElement("div",{className:l},this.renderPropBody())}renderPropBody(){return n.createElement("div",{className:"form-control-plaintext"},this.renderPropContent())}renderPropContent(){return this.content}}class h extends d{setValues(e){this.content=void 0===e?void 0:e[this.prop.name]}}class f extends d{setValues(e){this.content=void 0===e?void 0:e[this.prop.name]}}class p extends d{setValues(e){if(void 0===e)this.content=void 0;else{let t=this.prop.list;this.content="string"===typeof t?e[t]:void 0}}renderPropBody(){let{list:e,row:t}=this.prop,r="string"===typeof e?this.content:e;return void 0===r?n.createElement("div",null):n.createElement("div",{className:"w-100"},r.map((e,r)=>n.createElement(n.Fragment,{key:r},0===r?null:n.createElement("div",{style:{width:"100%",borderBottom:"1px solid #f0f0f0"}}),n.createElement(t,e))))}}class m extends d{renderPropBody(){let{component:e}=this.prop;return e}}class v{constructor(e,t){this.gridProps=e,this.props=t,this.buildRows()}buildRows(){this.rows=[];let e=!0;for(let t of this.props)if("string"===typeof t)this.rows.push(new l(t)),e=!0;else{let r;switch(e||this.rows.push(new o),t.type){default:continue;case"string":r=new h(this.gridProps,t);break;case"number":r=new f(this.gridProps,t);break;case"list":r=new p(this.gridProps,t);break;case"component":r=new m(this.gridProps,t)}this.rows.push(r),e=!1}}setValues(e){for(let t of this.rows)t.setValues(e)}render(){return this.rows.map((e,t)=>e.render(String(t)))}}var b=r(8);let g=class extends n.Component{render(){let{className:e,rows:t,values:r}=this.props,i=new v(this.props,t);i.setValues(r);let o=s("container-fluid",e);return n.createElement("div",{className:o},i.render())}};g=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}([b.a],g),r.d(t,"a",function(){return g})},121:function(e,t,r){"use strict";var n=r(0),s=r(2),i=r(8);r(147);let o=class extends n.Component{constructor(e){super(e),this.state={pressed:!1}}render(){let e,t,r,i,o,l,{date:a,main:c,vice:u,middle:d,midSize:h,icon:f,unread:p,right:m,onClick:v}=this.props;if(void 0!==p){let e;(e="number"===typeof p?p:p.get())>0?r=n.createElement("b",null,e):e<0&&(r=n.createElement("b",{className:"dot"}))}switch(typeof f){case"object":e=n.createElement("header",null,f,r),t=!1;break;case"string":e=n.createElement("header",{className:"icon"},n.createElement("img",{src:f}),r),t=!0}if(void 0!==d)switch(typeof d){case"string":i=n.createElement("div",{style:{flex:h}},d);break;default:i=d}void 0!==m&&(o="string"===typeof m?n.createElement("footer",null,n.createElement("small",{className:"text-muted"},m)):n.createElement("footer",null,m)),void 0!==u&&(l=n.createElement("span",null,u));let b=s("va-row",{icon:t,pressed:this.state.pressed},{"va-action":void 0!==v});return n.createElement("li",{className:b,onClick:v},e,n.createElement("div",null,n.createElement("div",null,c),l),i,o)}};o=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}([i.a],o);let l=class extends n.Component{render(){let e,t,{header:r,items:i,beforeLoad:l,none:a,renderRow:c,className:u,footer:d,itemClick:h,converter:f}=this.props,p=s(u,"va-list");return e=void 0===i?null===l?null:n.createElement("li",{className:"empty"},l||"..."):0===i.length?n.createElement("li",{className:"empty"},a||"[none]"):void 0!==c?i.map((e,t)=>c(e,t,this.props.ex)):i.map((e,t)=>{let r,s=e.onClick;if(void 0===s&&void 0!==h&&(s=(()=>h(e))),void 0!==f){if(void 0===(r=f(e)))return null}else r=Object.assign({},e);return void 0===r.key&&(r.key=r.main),n.createElement(o,Object.assign({key:t,onClick:s},r))}),void 0!==r&&(t="string"===typeof r?n.createElement("div",{className:"va-list-header"},r):r),n.createElement("div",{className:p},t,n.createElement("ul",null,e),d)}};l=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}([i.a],l)},143:function(e,t,r){},145:function(e,t,r){},147:function(e,t,r){},149:function(e,t,r){},75:function(e,t,r){"use strict";var n=r(87);r.o(n,"EasyDate")&&r.d(t,"EasyDate",function(){return n.EasyDate}),r.o(n,"FA")&&r.d(t,"FA",function(){return n.FA}),r.o(n,"IconText")&&r.d(t,"IconText",function(){return n.IconText}),r.o(n,"LMR")&&r.d(t,"LMR",function(){return n.LMR}),r.o(n,"List")&&r.d(t,"List",function(){return n.List}),r.o(n,"Media")&&r.d(t,"Media",function(){return n.Media}),r.o(n,"Muted")&&r.d(t,"Muted",function(){return n.Muted}),r.o(n,"PropGrid")&&r.d(t,"PropGrid",function(){return n.PropGrid}),r.o(n,"SearchBox")&&r.d(t,"SearchBox",function(){return n.SearchBox});r(108);var s=r(111);r.d(t,"EasyDate",function(){return s.a});var i=r(120);r.d(t,"PropGrid",function(){return i.a});var o=r(119);r.d(t,"FA",function(){return o.a}),r.d(t,"IconText",function(){return o.b}),r.d(t,"LMR",function(){return o.c}),r.d(t,"Muted",function(){return o.d});var l=r(112);r.d(t,"Media",function(){return l.a});r(121);var a=r(113);r.d(t,"SearchBox",function(){return a.a});r(114),r(81);var c=r(118);r.d(t,"List",function(){return c.a})},81:function(e,t,r){"use strict";r.d(t,"a",function(){return i});const n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",s=8;function i(){let e=n.length,t="";for(let r=0;r<s;r++)t+=n.charAt(Math.floor(Math.random()*e));return t}},83:function(e,t,r){"use strict";var n=r(0),s=r(1),i=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o};class o{constructor(e){this.formView=e}render(){return n.createElement("div",{className:"col-sm-10"},this.renderControl())}get hasError(){return!1}get filled(){return!1}clear(){}clearErrors(){}readValues(e){}setError(e,t){}setInitValues(e){}isOk(){return this.validate(),!this.hasError}validate(){}}i([s.d],o.prototype,"hasError",null),i([s.d],o.prototype,"filled",null);class l extends o{constructor(e,t,r){super(e),this.field=t,this.face=r,this.init(),this.setProps()}ref(e){this.element=e}init(){this.rules=[];let e=this.field.rules;void 0!==e&&(!0===Array.isArray(e)?this.rules.push(...e):this.rules.push(e))}setProps(){return this.props={ref:this.ref.bind(this),name:this.field.name}}get hasError(){return void 0!==this.error}get filled(){return void 0!==this.value&&this.value!==this.field.defaultValue}clearValue(){this.value=void 0}clear(){this.clearErrors(),this.clearValue()}clearErrors(){this.isOK=void 0,this.error=void 0}readValues(e){e[this.field.name]=this.value}setError(e,t){}setInitValues(e){}getValueFromElement(){return this.value}validate(){try{let t=this.getValueFromElement();if(this.rules.length>0){let e;for(let r of this.rules){console.log("validate: %s",t);let n=r(t);if(console.log("validate: %s err: %s",t,n),!0===n)this.error=void 0,e=!0;else if(void 0!==n)return this.error=n,void(this.isOK=!1)}this.isOK=e}this.value=t}catch(e){this.error=e.message}}render(){let e;if(void 0!==this.face){let{notes:t}=this.face;void 0!==t&&(e=n.createElement("small",{className:"text-muted"},t))}return n.createElement("div",{className:"col-sm-10"},this.renderControl(),e)}}i([s.k],l.prototype,"isOK",void 0),i([s.k],l.prototype,"error",void 0),i([s.k],l.prototype,"value",void 0),i([s.d],l.prototype,"hasError",null),i([s.d],l.prototype,"filled",null);class a extends o{constructor(e){super(e),this.otherClick=this.otherClick.bind(this)}otherClick(){let e=this.formView.props.onOther;void 0!==e&&e(this.formView.readValues())}renderControl(){console.log("buttons.renderControl");let e=this.formView.nothing,t=this.formView.hasError,r=this.formView.props;console.log("buttons.renderControl nothing:%s hasError:%s",e,t);let s,{submitButton:i,otherButton:o,onOther:l}=r;return void 0!==o&&(s=n.createElement("button",{className:"btn btn-outline-info ml-auto",onClick:this.otherClick},o)),n.createElement("div",{className:"d-flex justify-content-start"},n.createElement("button",{className:"btn btn-primary",type:"submit",disabled:e||t},i||"\u63d0\u4ea4"),s)}}var c=r(7),u=r(2);const d="\u5fc5\u987b\u586b\u5165\u8981\u6c42\u5185\u5bb9";class h extends l{init(){super.init(),!0===this.field.required&&this.rules.push(e=>null!==e&&void 0!==e&&0!==e.trim().length||d)}getValueFromElement(){return this.parseValue(this.element.value)}setProps(){super.setProps(),c.assign(this.props,{onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),onChange:this.onChange.bind(this)});let e=this.face;return void 0!==e&&c.assign(this.props,{placeholder:e.placeholder}),this.props}parseValue(e){return e}onBlur(){this.validate()}onChange(){console.log("onChange"),this.validate()}onFocus(){this.clearErrors()}className(){return u({"form-control":!0,"has-success":!0===this.isOK,"is-invalid":void 0!==this.error,"is-valid":void 0===this.error&&!0===this.isOK})}renderInput(){return n.createElement("input",Object.assign({className:this.className()},this.props))}ref(e){super.ref(e),e&&(e.value=void 0===this.value?"":this.value)}renderError(){return void 0===this.error?null:n.createElement("div",{className:"invalid-feedback"},this.error)}clearValue(){super.clearValue(),this.element.value=""}setError(e,t){this.field.name===e&&(this.error=t)}setInitValues(e){let t=e[this.field.name];void 0!==t&&(this.value=t)}renderControl(){return n.createElement(n.Fragment,null,this.renderInput(),this.renderError())}}class f extends h{setProps(){let e=super.setProps();return c.assign(e,{type:"text",maxLength:this.field.maxLength}),e}parseValue(e){if(void 0!==e&&0!==e.trim().length)return e}}const p="\u65e0\u6548\u7684\u6570\u5b57",m="\u6700\u5c0f\u503c\u4e3a",v="\u6700\u5927\u503c\u4e3a",b=45,g=46;class y extends l{renderControl(){return n.createElement("div",{className:"form-control-plaintext"},n.createElement("div",{className:"alert alert-primary",role:"alert"},"don't know how to create control",n.createElement("br",null),"field: ",JSON.stringify(this.field)," must be object ",n.createElement("br",null),"face: ",JSON.stringify(this.face)," must be object ",n.createElement("br",null)))}}class E extends o{constructor(e,t){super(e),this.element=t}renderControl(){return n.createElement("div",{className:"form-control-plaintext"},this.element)}}var w=function(e,t,r,n){return new(r||(r=Promise))(function(s,i){function o(e){try{a(n.next(e))}catch(t){i(t)}}function l(e){try{a(n.throw(e))}catch(t){i(t)}}function a(e){e.done?s(e.value):new r(function(t){t(e.value)}).then(o,l)}a((n=n.apply(e,t||[])).next())})};class x extends l{constructor(){super(...arguments),this.onClick=(()=>w(this,void 0,void 0,function*(){let{pick:e,fromPicked:t}=this.face,r=yield e(this.face,this.formView.props,this.formView.readValues());if(void 0===r)return void(this.value=void 0);if(void 0===t)return void(this.value=r.id);let{id:n,caption:s}=t(r);this.value=n,this.caption=s})),this.onPicked=(e=>{this.value=e.id})}setInitValues(e){let t=e[this.field.name];this.value=t}controlContent(){let{itemFromId:e,fromPicked:t,initCaption:r}=this.face;if(void 0===this.value)return r||"\u8bf7\u9009\u62e9Id";if(void 0!==this.caption)return this.caption;if(void 0!==e&&void 0!==t){let r=e(this.value);if(r){let e=t(r);if(void 0!==e)return e.caption}}return String(this.value)}renderControl(){let{tuid:e,input:t}=this.face;return void 0===t?n.createElement("div",{className:"form-control-plaintext px-2 border text-primary rounded cursor-pointer",onClick:this.onClick},this.controlContent()):n.createElement("div",{className:"form-control-static "},n.createElement(t.component,{id:this.value,ui:e}))}}(function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);i>3&&o&&Object.defineProperty(t,r,o)})([s.k],x.prototype,"caption",void 0);class k extends l{constructor(e,t,r){super(e,t,r),this.onIdChanged=this.onIdChanged.bind(this)}onIdChanged(e){this.value=e.id}setInitValues(e){let t=e[this.field.name];this.value=t}buildContent(){return n.createElement(this.face.input.component,Object.assign({},this.face,{id:this.value,onFormValues:()=>this.formView.readValues(),onIdChanged:this.onIdChanged}))}renderControl(){return n.createElement("div",{className:"form-control-static "},this.buildContent())}}(function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);i>3&&o&&Object.defineProperty(t,r,o)})([s.k],k.prototype,"caption",void 0);var N=r(8),C=function(e,t,r,n){return new(r||(r=Promise))(function(s,i){function o(e){try{a(n.next(e))}catch(t){i(t)}}function l(e){try{a(n.throw(e))}catch(t){i(t)}}function a(e){e.done?s(e.value):new r(function(t){t(e.value)}).then(o,l)}a((n=n.apply(e,t||[])).next())})};class P extends l{constructor(){super(...arguments),this.onClick=(()=>C(this,void 0,void 0,function*(){let{pick:e,fromPicked:t}=this.face,r=yield e(this.face,this.formView.props,this.formView.readValues());if(void 0===r)return void(this.value=void 0);let{id:n,caption:s}=t(r);this.value=n,this.caption=s})),this.view=Object(N.a)(()=>{let e,{content:t}=this.face;return e=void 0===this.value||null===this.value?"\u8bf7\u9009\u62e9":n.createElement(t,{id:this.value}),n.createElement("div",{className:"form-control-plaintext px-2 border text-primary rounded cursor-pointer bg-light",onClick:this.onClick},e)})}setInitValues(e){let t=e[this.field.name];this.value=t}renderControl(){return n.createElement(this.view,null)}}(function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);i>3&&o&&Object.defineProperty(t,r,o)})([s.k],P.prototype,"caption",void 0),r.d(t,"b",function(){return V}),r.d(t,"a",function(){return a});const V=(e,t)=>{t.label;return void 0!==t.group?function(e,t,r){return new y(e,r,void 0)}(e,0,t):void 0!==t.field?function(e,t,r){let{field:n,face:s}=r;switch(typeof n){case"string":n={name:n,type:"string"};break;case"object":break;default:return new y(e,n,s)}let i=n.type||"string";if(void 0===s){if(void 0===(s=R[i]))return new y(e,n,s)}else if(void 0===s.type){let e=R[i];s.type=void 0===e?"string":e.type}return new(O[s.type||i]||y)(e,n,s)}(e,0,t):new E(e,t.help)},O={string:f,password:class extends f{setProps(){let e=super.setProps();return c.assign(e,{type:"password",maxLength:this.field.maxLength}),e}},number:class extends h{init(){super.init(),this.extraChars=[];let{min:e,max:t}=this.field;switch(void 0!==e?(this.rules.push(t=>{if(void 0!==t)return!(t<e)||m+e}),e<0&&this.extraChars.push(b)):this.extraChars.push(b),void 0!==t&&this.rules.push(e=>{if(void 0!==e)return!(e>t)||v+t}),this.field.type){case"dec":case"number":this.extraChars.push(g)}}parseValue(e){if(void 0===e)return;if(0===e.trim().length)return;let t=Number.parseFloat(e);if(isNaN(t))throw new Error(p);return t}setProps(){super.setProps(),c.assign(this.props,{type:"number",step:this.field.step,onKeyPress:this.onKeyPress.bind(this)})}onKeyPress(e){let t=e.charCode;if(!(8===t||0===t||13===t||t>=48&&t<=57))if(void 0!==this.extraChars&&this.extraChars.indexOf(t)>=0)switch(t){case g:this.onKeyDot();break;case b:this.onKeyNeg(),e.preventDefault()}else e.preventDefault()}onKeyDot(){let e=this.element.value;e.indexOf(".")>=0&&(this.element.value=e.replace(".",""))}onKeyNeg(){let e=this.element.value,t=e.indexOf("-");e=t>=0?e.replace("-",""):"-"+e,this.element.value=e}},checkbox:class extends l{init(){super.init();let{trueValue:e,falseValue:t}=this.field;void 0===e&&(this.trueValue=1),void 0===t&&(this.falseValue=0)}setProps(){super.setProps(),c.assign(this.props,{onChange:this.onChange.bind(this)})}clearValue(){this.element.checked=this.field.defaultValue===this.trueValue,this.value=this.getValueFromElement()}setInitValues(e){let t=e[this.field.name];void 0===t&&(t=this.field.defaultValue)}getValueFromElement(){return this.element.checked?this.trueValue:this.falseValue}onChange(){this.value=this.getValueFromElement()}renderControl(){return n.createElement("div",{className:"form-control-static"},n.createElement("label",{className:"form-control"},n.createElement("label",{className:"custom-control custom-checkbox mb-0"},n.createElement("input",{type:"checkbox",name:this.field.name,ref:this.props.ref,onChange:this.props.onChange,className:"custom-control-input"}),n.createElement("span",{className:"custom-control-indicator"}),n.createElement("span",{className:"custom-control-description"},this.face.label))))}},radiobox:class extends l{renderControl(){return n.createElement("div",{className:"form-control-static"},n.createElement("div",{className:"form-control"},this.face.list.map((e,t)=>{let r,s;return"object"!==typeof e?r=s=e:(r=e.text,s=e.value),n.createElement("label",{key:t,className:"custom-control custom-radio w-25"},n.createElement("input",{type:"radio",name:this.field.name,className:"custom-control-input"}),n.createElement("span",{className:"custom-control-indicator"}),n.createElement("span",{className:"custom-control-description"},r))})))}},select:class extends l{constructor(e,t,r){super(e,t,r),this.ref=this.ref.bind(this)}getValueFromElement(){let{selectedIndex:e,selectedOptions:t}=this.element,r=t[0].value;switch(this.field.type){case"number":r=Number(r);break;case"date":r=new Date(r);break;case"bool":"string"===typeof r&&(r="true"===r.toLowerCase())}return r}renderControl(){let{list:e}=this.face,t=[];return void 0===this.face.default&&t.push(n.createElement("option",{key:-1,value:void 0},"\u8bf7\u9009\u62e9")),t.push(...e.map((e,t)=>{let r,s;return"object"!==typeof e?r=s=e:(r=e.text,s=e.value),n.createElement("option",{key:t,value:s},r)})),n.createElement("div",{className:"form-control-static"},n.createElement("select",{name:this.field.name,className:"form-control",ref:this.ref},t))}},"pick-id":x,"pick-tuid":k,textarea:class extends h{setProps(){let e=super.setProps(),{maxLength:t}=this.field,{rows:r}=this.face;return c.assign(e,{maxLength:t,rows:r}),e}renderInput(){return n.createElement("textarea",Object.assign({ref:e=>{this.el=e,void 0!==e&&(e.value="")},className:this.className()},this.props))}},pick:P},R={string:{type:"string"},number:{type:"number"},int:{type:"number"},dec:{type:"number"},bool:{type:"checkbox"}}},87:function(e,t,r){"use strict";var n=r(104);r.o(n,"EasyDate")&&r.d(t,"EasyDate",function(){return n.EasyDate}),r.o(n,"FA")&&r.d(t,"FA",function(){return n.FA}),r.o(n,"IconText")&&r.d(t,"IconText",function(){return n.IconText}),r.o(n,"LMR")&&r.d(t,"LMR",function(){return n.LMR}),r.o(n,"List")&&r.d(t,"List",function(){return n.List}),r.o(n,"Media")&&r.d(t,"Media",function(){return n.Media}),r.o(n,"Muted")&&r.d(t,"Muted",function(){return n.Muted}),r.o(n,"PropGrid")&&r.d(t,"PropGrid",function(){return n.PropGrid}),r.o(n,"SearchBox")&&r.d(t,"SearchBox",function(){return n.SearchBox}),r.o(n,"TonvaForm")&&r.d(t,"TonvaForm",function(){return n.TonvaForm});var s=r(105);r.o(s,"EasyDate")&&r.d(t,"EasyDate",function(){return s.EasyDate}),r.o(s,"FA")&&r.d(t,"FA",function(){return s.FA}),r.o(s,"IconText")&&r.d(t,"IconText",function(){return s.IconText}),r.o(s,"LMR")&&r.d(t,"LMR",function(){return s.LMR}),r.o(s,"List")&&r.d(t,"List",function(){return s.List}),r.o(s,"Media")&&r.d(t,"Media",function(){return s.Media}),r.o(s,"Muted")&&r.d(t,"Muted",function(){return s.Muted}),r.o(s,"PropGrid")&&r.d(t,"PropGrid",function(){return s.PropGrid}),r.o(s,"SearchBox")&&r.d(t,"SearchBox",function(){return s.SearchBox}),r.o(s,"TonvaForm")&&r.d(t,"TonvaForm",function(){return s.TonvaForm});var i=r(106);r.o(i,"EasyDate")&&r.d(t,"EasyDate",function(){return i.EasyDate}),r.o(i,"FA")&&r.d(t,"FA",function(){return i.FA}),r.o(i,"IconText")&&r.d(t,"IconText",function(){return i.IconText}),r.o(i,"LMR")&&r.d(t,"LMR",function(){return i.LMR}),r.o(i,"List")&&r.d(t,"List",function(){return i.List}),r.o(i,"Media")&&r.d(t,"Media",function(){return i.Media}),r.o(i,"Muted")&&r.d(t,"Muted",function(){return i.Muted}),r.o(i,"PropGrid")&&r.d(t,"PropGrid",function(){return i.PropGrid}),r.o(i,"SearchBox")&&r.d(t,"SearchBox",function(){return i.SearchBox}),r.o(i,"TonvaForm")&&r.d(t,"TonvaForm",function(){return i.TonvaForm});r(88),r(89);var o=r(107);r.d(t,"TonvaForm",function(){return o.a});r(83)},88:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return c});var n=r(0),s=r(83);class i{constructor(e,t){if(this.form=e,this.row=t,void 0===t.type){let r=t.createControl;void 0===r&&(r=e.createControl),void 0===r&&(r=s.b),this.control=r(e,t)}}isOk(){return void 0===this.control||this.control.isOk()}contains(e){let t=this.row.field;if(void 0!==t)return e===t.name;let r=this.row.group;return void 0!==r&&void 0!==r.find(t=>t.field.name===e)}get hasError(){return this.control.hasError}get filled(){return this.control.filled}clear(){void 0!==this.control&&this.control.clear()}clearErrors(){void 0!==this.control&&this.control.clearErrors()}readValues(e){void 0!==this.control&&this.control.readValues(e)}setError(e,t){void 0!==this.control&&this.control.setError(e,t)}setInitValues(e){void 0!==this.control&&this.control.setInitValues(e)}}class o extends i{render(e){return n.createElement("div",{key:e,className:"form-group"},this.row)}get hasError(){return!1}get filled(){return!1}}class l extends i{render(e){return n.createElement("div",{key:e,className:"form-group row"},n.createElement("label",{className:"col-sm-2 col-form-label"},this.row.label),this.control.render())}}function a(e,t){return new l(e,t)}function c(e,t){return new o(e,t)}},89:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r(0),s=r(1),i=r(81),o=r(83),l=r(88),a=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o},c=function(e,t,r,n){return new(r||(r=Promise))(function(s,i){function o(e){try{a(n.next(e))}catch(t){i(t)}}function l(e){try{a(n.throw(e))}catch(t){i(t)}}function a(e){e.done?s(e.value):new r(function(t){t(e.value)}).then(o,l)}a((n=n.apply(e,t||[])).next())})};class u{constructor(e){this.rows=[],this.uid=Object(i.a)(),this.props=e,this.buildRows(e),this.createControl=e.createControl,this.onSubmit=this.onSubmit.bind(this)}get hasError(){let e=this.rows.map((e,t)=>t+": "+e.hasError+"\n");return console.log(e),this.rows.some(e=>e.hasError)}get nothing(){return this.rows.every(e=>!e.filled)}readValues(){let e={};for(let t of this.rows)t.readValues(e);return e}clear(){for(let e of this.rows)e.clear()}clearErrors(){for(let e of this.rows)e.clearErrors()}setError(e,t){for(let r of this.rows)r.setError(e,t)}setInitValues(e){if(void 0!==e)for(let t of this.rows)t.setInitValues(e)}buildRows(e){let{formRows:t,createRow:r}=e;if(void 0!==t){for(let e of t)this.rows.push(this.buildRow(e,r));!0!==this.props.readOnly&&(this.buttonsRow=this.buildRow({createControl:this.createButtons.bind(this)},void 0))}else this.rows.push(Object(l.b)(this,n.createElement("div",{className:"text-warning"},"TonvaForm need formRows defined")))}buildRow(e,t){let r;return void 0!==e.type?r=l.b:void 0===(r=e.createRow)&&void 0===(r=t)&&(r=l.a),r(this,e)}createButtons(e,t){return new o.a(e)}isOk(){let e=!0;for(let t of this.rows)t.isOk()||(e=!1);return e}render(){return n.createElement("form",{onSubmit:this.onSubmit},this.rows.map((e,t)=>e.render(this.uid+t)),this.buttons())}buttons(){if(void 0!==this.buttonsRow)return this.buttonsRow.render(this.uid+this.rows.length)}onSubmit(e){return c(this,void 0,void 0,function*(){if(e.preventDefault(),!this.isOk())return;let t=this.readValues();yield this.props.onSubmit(t)})}}a([s.d],u.prototype,"hasError",null),a([s.d],u.prototype,"nothing",null)}}]);
//# sourceMappingURL=1.2f8a0e70.chunk.js.map