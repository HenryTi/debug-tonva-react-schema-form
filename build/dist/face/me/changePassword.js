var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import { Page, nav, Form } from 'tonva-tools';
import center from './center';
var schema = [
    { name: 'orgPassword', type: 'string', required: true },
    { name: 'newPassword', type: 'string', required: true },
    { name: 'newPassword1', type: 'string', required: true },
    { name: 'submit', type: 'submit' },
];
var uiSchema = {
    items: {
        orgPassword: {
            widget: 'password',
            label: '原密码',
            maxLength: 60,
            placeholder: '输入原来的密码'
        },
        newPassword: {
            widget: 'password',
            label: '新密码',
            maxLength: 60,
            placeholder: '输入新设的密码'
        },
        newPassword1: {
            widget: 'password',
            label: '确认密码',
            maxLength: 60,
            placeholder: '再次输入新设密码'
        },
        submit: {
            widget: 'button',
            className: 'btn btn-primary',
            label: '提交'
        }
    }
};
var ChangePasswordPage = /** @class */ (function (_super) {
    __extends(ChangePasswordPage, _super);
    function ChangePasswordPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSubmit = function (name, context) { return __awaiter(_this, void 0, void 0, function () {
            var values, orgPassword, newPassword, newPassword1, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = context.form.data;
                        orgPassword = values.orgPassword, newPassword = values.newPassword, newPassword1 = values.newPassword1;
                        if (newPassword !== newPassword1) {
                            context.setValue('newPassword', '');
                            context.setValue('newPassword1', '');
                            return [2 /*return*/, '新密码错误，请重新输入'];
                        }
                        return [4 /*yield*/, center.changePassword({ orgPassword: orgPassword, newPassword: newPassword })];
                    case 1:
                        ret = _a.sent();
                        if (ret === false) {
                            context.setValue('orgPassword', '');
                            return [2 /*return*/, '原密码错误'];
                        }
                        nav.replace(React.createElement(Page, { header: "\u4FEE\u6539\u5BC6\u7801", back: "close" },
                            React.createElement("div", { className: "m-3  text-success" }, "\u5BC6\u7801\u4FEE\u6539\u6210\u529F\uFF01")));
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    ChangePasswordPage.prototype.render = function () {
        return React.createElement(Page, { header: "\u4FEE\u6539\u5BC6\u7801" },
            React.createElement(Form, { className: "m-3", schema: schema, uiSchema: uiSchema, requiredFlag: false, onButtonClick: this.onSubmit }));
    };
    return ChangePasswordPage;
}(React.Component));
export default ChangePasswordPage;
//# sourceMappingURL=changePassword.js.map