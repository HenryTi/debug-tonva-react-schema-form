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
import { NumberWidget } from './numberWidget';
var UpdownWidget = /** @class */ (function (_super) {
    __extends(UpdownWidget, _super);
    function UpdownWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'number';
        return _this;
    }
    UpdownWidget.prototype.isValidKey = function (key) {
        return key === 46 || key === 8 || key === 37 || key === 39
            || key >= 48 && key <= 57
            || key >= 96 && key <= 105
            || key === 109 || key === 189;
    };
    UpdownWidget.prototype.internalOnKeyDown = function (evt) {
        var key = evt.keyCode;
        event.returnValue = this.isValidKey(key);
    };
    return UpdownWidget;
}(NumberWidget));
export { UpdownWidget };
//# sourceMappingURL=updownWidget.js.map