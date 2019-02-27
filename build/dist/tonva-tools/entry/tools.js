import * as React from 'react';
var logo = require('../img/logo.svg');
export var tonvaTop = React.createElement("div", { className: "d-flex align-items-center" },
    React.createElement("img", { className: "App-logo h-3c position-absolute", src: logo }),
    React.createElement("div", { className: "h3 flex-fill text-center" },
        React.createElement("span", { className: "text-primary mr-3" }, "\u540C"),
        React.createElement("span", { className: "text-danger" }, "\u82B1")));
var senders = [
    { type: 'mobile', caption: '手机号', regex: /^[0-9]*$/ },
    { type: 'email', caption: '邮箱', regex: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/ }
];
export function getSender(un) {
    var sender = senders.find(function (v) { return v.regex.test(un) === true; });
    return sender;
}
//# sourceMappingURL=tools.js.map