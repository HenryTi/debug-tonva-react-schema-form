(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"MyApp",function(){return p});var n=a(0),r=a(1),i=a(4),l=a(115),m=a.n(l),c=function(e,t,a,n){var r,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var m=e.length-1;m>=0;m--)(r=e[m])&&(l=(i<3?r(l):i>3?r(t,a,l):r(t,a))||l);return i>3&&l&&Object.defineProperty(t,a,l),l},s=function(e,t,a,n){return new(a||(a=Promise))(function(r,i){function l(e){try{c(n.next(e))}catch(t){i(t)}}function m(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new a(function(t){t(e.value)}).then(l,m)}c((n=n.apply(e,t||[])).next())})};const d=[{name:"id",type:"id",required:!0},{name:"number",type:"number",required:!0},{name:"integer",type:"integer",min:10,max:30},{name:"date",type:"date"},{name:"text",type:"string",maxLength:5},{name:"arr1",type:"arr",arr:[{name:"selected",type:"boolean"},{name:"arr1-c",type:"string"},{name:"arr1-b",type:"string"},{name:"arr1-a",type:"string"},{name:"n1",type:"integer"},{name:"n2",type:"integer"},{name:"n3",type:"integer"}]},{name:"submit",type:"submit"}],o={a:"aa",b:"bb",c:"ccc",number:2,integer:3,text:"???",arr1:[{$a:1,"arr1-b":"arb--dddd0","arr1-c":"arr1-c-cc-cc0",n1:1},{$a:1,"arr1-b":"arb--dddd1","arr1-c":"arr1-c-cc-cc1",n1:2},{$a:1,"arr1-b":"arb--dddd1","arr1-c":"asd fsd farr1-c-cc-cc1",n1:3}]},u=(e,t)=>{if("$row"!==e)return t};class p extends n.Component{constructor(){super(...arguments),this.a=1,this.arr=[{label:"a",v:1},{label:"b",v:2}],this.onFormButtonClick=((e,t)=>s(this,void 0,void 0,function*(){let a;return a=!1===t.isRow?`button ${e} clicked!\n      form data: ${JSON.stringify(t.form.data,u)}\n`:`button ${t.arrName}.${e} clicked!\nrow data: ${JSON.stringify(t.data,u)}\nform data: ${JSON.stringify(t.form.data,u)}\n`,alert(a),"submit error"})),this.onBChange=(e=>{1===e.$a?e.$a=0:e.$a=1}),this.arrTemplet=(()=>n.createElement("div",{className:"form-inline"},n.createElement(i.Field,{name:"selected"}),n.createElement(i.Field,{name:"arr1-c"}),n.createElement(i.Field,{name:"n1"}),n.createElement(i.Field,{name:"n2"}),n.createElement(i.Field,{name:"n3"}))),this.arrTemplet1=n.createElement("div",{className:"form-inline"},n.createElement(i.Field,{name:"selected"}),n.createElement(i.Field,{name:"arr1-c"}),n.createElement(i.Field,{name:"n1"}),n.createElement(i.Field,{name:"n2"}),n.createElement(i.Field,{name:"n3"})),this.uiSchema={rules:e=>{if(e.getValue("number")!==e.getValue("integer"))return{integer:"number must equal intege!"}},items:{id:{widget:"id",pickId:(e,t,a)=>s(this,void 0,void 0,function*(){return alert("\u8f93\u51652"),2})},text:{widget:"textarea",rows:7},a:{widget:"text"},integer:{rules:e=>19===e?"\u4e0d\u80fd\u4e3a19":void 0},submit:{widget:"button",className:"btn btn-primary",Templet:n.createElement(n.Fragment,null,n.createElement("i",{className:"fa fa-diamond"}),"\xa0 \u63d0\u4ea4")},arr1:{widget:"arr",Templet:this.arrTemplet1,items:{"arr1-c":{className:"w-max-6c"},n1:{widget:"radio",className:"flex-grow-1",defaultValue:2,list:[{value:1,title:"\u5c0f\u63d0\u7434"},{value:2,title:"\u94a2\u7434"},{value:3,title:"\u5355\u7c27\u7ba1"}]},n2:{widget:"select",list:[{value:null,title:" - "},{value:1,title:"\u6570\u5b571"},{value:2}]},n3:{widget:"range"}}}},Templet:()=>n.createElement(n.Fragment,null,n.createElement("div",{className:"form-inline"},n.createElement(i.Field,{name:"id"}),"af sasdf as fd",n.createElement("b",null,"dasdf asdf sad"),n.createElement(i.Field,{name:"number"})," \xa0",n.createElement(i.Field,{name:"integer"}),"\xa0 ",n.createElement("i",null,"adsfas dfasdf asd fas fda"),n.createElement("div",{className:"font-weight-bold text-success h3"},"nnn",n.createElement(i.Field,{name:"date"}),n.createElement("br",null)),n.createElement("div",{className:"font-weight-bold text-success h3"},"text",n.createElement(i.Field,{name:"text"}))),n.createElement(i.Field,{name:"arr1"}),n.createElement("div",{className:"text-center"},n.createElement(i.Field,{name:"submit"})))},this.uiSchema1={items:{id:{widget:"id",pickId:(e,t,a)=>s(this,void 0,void 0,function*(){return 2})},a:{widget:"text"},submit:{widget:"button",className:"btn btn-primary"},arr1:{widget:"arr",items:{n1:{widget:"radio",list:[{title:" - "},{value:1,title:"\u6570\u5b571"},{value:2}]},n2:{widget:"select",list:[{value:null,title:" - "},{value:1,title:"\u6570\u5b571"},{value:2}]},n3:{widget:"range"}}}},selectable:!0,deletable:!0,restorable:!0},this.schema3=[{name:"a",type:"string",maxLength:10},{name:"b",type:"number",max:20,min:10},{name:"submit",type:"submit"}],this.uiSchema3={items:{a:{widget:"text",label:"\u6b22\u8fce\u8f93\u5165a",rules:e=>{if("a"===e)return"a is not valid"}}}}}render(){return n.createElement("div",{className:"App"},n.createElement("header",{className:"App-header"},n.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),n.createElement("h1",{className:"App-title"},"Welcome to React")),n.createElement("p",{className:"App-intro"},"To get started, edit ",n.createElement("code",null,"src/App.tsx")," and save to reload."),n.createElement("div",{className:"App-container container text-left"},n.createElement(i.Form,{className:"mb-3",schema:d,uiSchema:this.uiSchema,formData:o,onButtonClick:this.onFormButtonClick,beforeShow:e=>{}}),n.createElement(i.Form,{className:"mb-3",schema:d,uiSchema:this.uiSchema1,formData:o,onButtonClick:this.onFormButtonClick,fieldLabelSize:2,beforeShow:e=>{e.setVisible("date",!1)}}),n.createElement(i.Form,{schema:this.schema3,uiSchema:this.uiSchema3})))}}c([r.k],p.prototype,"a",void 0),c([r.k],p.prototype,"arr",void 0),t.default=p}}]);
//# sourceMappingURL=8.08441a4d.chunk.js.map