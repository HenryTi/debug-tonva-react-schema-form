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
import { observable } from 'mobx';
import _ from 'lodash';
import { Entity } from './entity';
import { isNumber } from 'util';
var BoxId = /** @class */ (function () {
    function BoxId() {
    }
    return BoxId;
}());
export { BoxId };
var maxCacheSize = 1000;
var Tuid = /** @class */ (function (_super) {
    __extends(Tuid, _super);
    function Tuid(entities, name, typeId) {
        var _this = _super.call(this, entities, name, typeId) || this;
        _this.queue = []; // 每次使用，都排到队头
        _this.waitingIds = []; // 等待loading的
        _this.cache = observable.map({}, { deep: false }); // 已经缓冲的
        _this.buildIdBoxer();
        return _this;
    }
    Object.defineProperty(Tuid.prototype, "typeName", {
        get: function () { return 'tuid'; },
        enumerable: true,
        configurable: true
    });
    Tuid.prototype.buildIdBoxer = function () {
        this.BoxId = function () { };
        var prototype = this.BoxId.prototype;
        Object.defineProperty(prototype, '_$tuid', {
            value: this,
            writable: false,
            enumerable: false,
        });
        Object.defineProperty(prototype, 'obj', {
            enumerable: false,
            get: function () {
                if (this.id === undefined || this.id <= 0)
                    return undefined;
                return this._$tuid.valueFromId(this.id);
            }
        });
        prototype.valueFromFieldName = function (fieldName) {
            var t = this._$tuid;
            return t.valueFromFieldName(fieldName, this.obj);
        };
        prototype.getObj = function () {
            if (this._$tuid !== undefined) {
                return this._$tuid.getCacheValue(this.id);
            }
        };
        prototype.toJSON = function () { return this.id; };
    };
    Tuid.prototype.boxId = function (id) {
        this.useId(id);
        var ret = new this.BoxId();
        ret.id = id;
        return ret;
    };
    Tuid.prototype.getTuidContent = function () {
        return this.entities.cUq.getTuidContent(this);
    };
    Tuid.prototype.getIdFromObj = function (item) {
        return item[this.idName];
    };
    Tuid.prototype.setSchema = function (schema) {
        _super.prototype.setSchema.call(this, schema);
        var id = schema.id, unique = schema.unique;
        this.idName = id;
        this.unique = unique;
        this.schemaFrom = this.schema.from;
    };
    Tuid.prototype.moveToHead = function (id) {
        var index = this.queue.findIndex(function (v) { return v === id; });
        this.queue.splice(index, 1);
        this.queue.push(id);
    };
    Tuid.prototype.valueFromId = function (id) {
        var _id;
        var tId = typeof id;
        switch (typeof id) {
            case 'object':
                _id = id.id;
                break;
            case 'number':
                _id = id;
                break;
            default: return;
        }
        return this.getCacheValue(_id);
    };
    Tuid.prototype.getCacheValue = function (id) {
        var v = this.cache.get(id);
        if (this.owner !== undefined && typeof v === 'object') {
            v.$owner = this.owner.boxId(v.owner); // this.owner.valueFromId(v.owner);
        }
        return v;
    };
    Tuid.prototype.valueFromFieldName = function (fieldName, obj) {
        if (obj === undefined)
            return;
        var f = this.fields.find(function (v) { return v.name === fieldName; });
        if (f === undefined)
            return;
        var v = obj[fieldName];
        var _tuid = f._tuid;
        if (_tuid === undefined)
            return v;
        return _tuid.valueFromId(v);
    };
    Tuid.prototype.resetCache = function (id) {
        this.cache.delete(id);
        var index = this.queue.findIndex(function (v) { return v === id; });
        this.queue.splice(index, 1);
        this.useId(id);
    };
    Tuid.prototype.useId = function (id, defer) {
        if (id === undefined || id === 0)
            return;
        if (isNumber(id) === false)
            return;
        if (this.cache.has(id) === true) {
            this.moveToHead(id);
            return;
        }
        this.entities.cacheTuids(defer === true ? 70 : 20);
        //let idVal = this.createID(id);
        this.cache.set(id, id);
        if (this.waitingIds.findIndex(function (v) { return v === id; }) >= 0) {
            this.moveToHead(id);
            return;
        }
        if (this.queue.length >= maxCacheSize) {
            // 缓冲已满，先去掉最不常用的
            var r_1 = this.queue.shift();
            if (r_1 === id) {
                // 如果移除的，正好是现在用的，则插入
                this.queue.push(r_1);
                return;
            }
            //let rKey = String(r);
            if (this.cache.has(r_1) === true) {
                // 如果移除r已经缓存
                this.cache.delete(r_1);
            }
            else {
                // 如果移除r还没有缓存
                var index = this.waitingIds.findIndex(function (v) { return v === r_1; });
                this.waitingIds.splice(index, 1);
            }
        }
        this.waitingIds.push(id);
        this.queue.push(id);
        return;
    };
    Tuid.prototype.proxied = function (name, id) {
        return __awaiter(this, void 0, void 0, function () {
            var proxyTuid, proxied;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        proxyTuid = this.entities.getTuid(name, undefined);
                        proxyTuid.useId(id);
                        return [4 /*yield*/, this.tvApi.proxied(this.name, name, id)];
                    case 1:
                        proxied = _a.sent();
                        this.cacheValue(proxied);
                        return [2 /*return*/, proxied];
                }
            });
        });
    };
    Tuid.prototype.cacheValue = function (val) {
        if (val === undefined)
            return false;
        var id = this.getIdFromObj(val);
        if (id === undefined)
            return false;
        var index = this.waitingIds.findIndex(function (v) { return v === id; });
        if (index >= 0)
            this.waitingIds.splice(index, 1);
        //let cacheVal = this.createID(id, val);
        this.cache.set(id, val);
        // 下面的代码应该是cache proxy id, 需要的时候再写吧
        /*
        let {tuids, fields} = this.schema;
        if (tuids !== undefined && fields !== undefined) {
            for (let f of fields) {
                let {name, tuid} = f;
                if (tuid === undefined) continue;
                let t = this.entities.tuid(tuid);
                if (t === undefined) continue;
                t.useId(val[name]);
            }
        }*/
        return true;
    };
    Tuid.prototype.afterCacheId = function (tuidValue) {
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var f = _a[_i];
            var _tuid = f._tuid;
            if (_tuid === undefined)
                continue;
            _tuid.useId(tuidValue[f.name]);
        }
    };
    Tuid.prototype.cacheIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name, arr, api, tuids, _i, tuids_1, tuidValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.waitingIds.length === 0)
                            return [2 /*return*/];
                        if (this.owner === undefined) {
                            name = this.name;
                        }
                        else {
                            name = this.owner.name;
                            arr = this.name;
                        }
                        return [4 /*yield*/, this.getApiFrom()];
                    case 1:
                        api = _a.sent();
                        return [4 /*yield*/, api.tuidIds(name, arr, this.waitingIds)];
                    case 2:
                        tuids = _a.sent();
                        for (_i = 0, tuids_1 = tuids; _i < tuids_1.length; _i++) {
                            tuidValue = tuids_1[_i];
                            if (this.cacheValue(tuidValue) === false)
                                continue;
                            this.cacheTuidFieldValues(tuidValue);
                            this.afterCacheId(tuidValue);
                        }
                        return [4 /*yield*/, this.cacheDivIds()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tuid.prototype.cacheDivIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Tuid.prototype.load = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var api, values;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (id === undefined || id === 0)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.getApiFrom()];
                    case 1:
                        api = _a.sent();
                        return [4 /*yield*/, api.tuidGet(this.name, id)];
                    case 2:
                        values = _a.sent();
                        if (values === undefined)
                            return [2 /*return*/];
                        values._$tuid = this;
                        this.cacheValue(values);
                        this.cacheTuidFieldValues(values);
                        return [2 /*return*/, values];
                }
            });
        });
    };
    Tuid.prototype.getDiv = function (divName) { return; };
    Tuid.prototype.cacheTuidFieldValues = function (values) {
        var _a = this.schema, fields = _a.fields, arrs = _a.arrs;
        this.cacheFieldsInValue(values, fields);
        if (arrs !== undefined) {
            for (var _i = 0, _b = arrs; _i < _b.length; _i++) {
                var arr = _b[_i];
                var name_1 = arr.name, fields_1 = arr.fields;
                var arrValues = values[name_1];
                if (arrValues === undefined)
                    continue;
                var tuidDiv = this.getDiv(name_1);
                for (var _c = 0, arrValues_1 = arrValues; _c < arrValues_1.length; _c++) {
                    var row = arrValues_1[_c];
                    row._$tuid = tuidDiv;
                    row.$owner = this.boxId(row.owner);
                    tuidDiv.cacheValue(row);
                    this.cacheFieldsInValue(row, fields_1);
                }
            }
        }
    };
    Tuid.prototype.cacheFieldsInValue = function (values, fields) {
        for (var _i = 0, _a = fields; _i < _a.length; _i++) {
            var f = _a[_i];
            var name_2 = f.name, _tuid = f._tuid;
            if (_tuid === undefined)
                continue;
            var id = values[name_2];
            //_tuid.useId(id);
            values[name_2] = _tuid.boxId(id);
        }
    };
    Tuid.prototype.save = function (id, props) {
        return __awaiter(this, void 0, void 0, function () {
            var params, ret, retId, inId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = _.clone(props);
                        params["$id"] = id;
                        return [4 /*yield*/, this.tvApi.tuidSave(this.name, params)];
                    case 1:
                        ret = _a.sent();
                        retId = ret.id, inId = ret.inId;
                        if (retId === undefined) {
                            params.id = id;
                            this.cacheValue(params);
                        }
                        else if (retId > 0) {
                            params.id = retId;
                            this.cacheValue(params);
                        }
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Tuid.prototype.search = function (key, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.searchArr(undefined, key, pageStart, pageSize)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Tuid.prototype.searchArr = function (owner, key, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var fields, name, arr, api, ret, _i, ret_1, row;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fields = this.schema.fields;
                        if (this.owner !== undefined) {
                            name = this.owner.name;
                            arr = this.name;
                        }
                        else {
                            name = this.name;
                            arr = undefined;
                        }
                        return [4 /*yield*/, this.getApiFrom()];
                    case 1:
                        api = _a.sent();
                        return [4 /*yield*/, api.tuidSearch(name, arr, owner, key, pageStart, pageSize)];
                    case 2:
                        ret = _a.sent();
                        for (_i = 0, ret_1 = ret; _i < ret_1.length; _i++) {
                            row = ret_1[_i];
                            this.cacheFieldsInValue(row, fields);
                            if (this.owner !== undefined)
                                row.$owner = this.owner.boxId(row.owner);
                        }
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Tuid.prototype.loadArr = function (arr, owner, id) {
        return __awaiter(this, void 0, void 0, function () {
            var api;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (id === undefined || id === 0)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.getApiFrom()];
                    case 1:
                        api = _a.sent();
                        return [4 /*yield*/, api.tuidArrGet(this.name, arr, owner, id)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /*
    async loadArrAll(owner:number):Promise<any[]> {
        return this.all = await this.tvApi.tuidGetAll(this.name);
    }*/
    Tuid.prototype.saveArr = function (arr, owner, id, props) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = _.clone(props);
                        params["$id"] = id;
                        return [4 /*yield*/, this.tvApi.tuidArrSave(this.name, arr, owner, params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tuid.prototype.posArr = function (arr, owner, id, order) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tvApi.tuidArrPos(this.name, arr, owner, id, order)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // cache放到Tuid里面之后，这个函数不再需要公开调用了
    //private async ids(idArr:number[]) {
    //    return await this.tvApi.tuidIds(this.name, idArr);
    //}
    Tuid.prototype.showInfo = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.entities.cUq.showTuid(this, id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Tuid;
}(Entity));
export { Tuid };
var TuidMain = /** @class */ (function (_super) {
    __extends(TuidMain, _super);
    function TuidMain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TuidMain.prototype, "Main", {
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TuidMain.prototype, "uqApi", {
        get: function () { return this.entities.uqApi; },
        enumerable: true,
        configurable: true
    });
    ;
    TuidMain.prototype.setSchema = function (schema) {
        _super.prototype.setSchema.call(this, schema);
        var arrs = schema.arrs;
        if (arrs !== undefined) {
            this.divs = {};
            for (var _i = 0, arrs_1 = arrs; _i < arrs_1.length; _i++) {
                var arr = arrs_1[_i];
                var name_3 = arr.name;
                var tuidDiv = new TuidDiv(this.entities, name_3, this.typeId);
                tuidDiv.owner = this;
                this.divs[name_3] = tuidDiv;
                tuidDiv.setSchema(arr);
            }
        }
    };
    TuidMain.prototype.getDiv = function (divName) { return this.divs[divName]; };
    /* 努力回避async里面的super调用，edge不兼容
    async cacheIds():Promise<void> {
        await super.cacheIds();
        if (this.divs === undefined) return;
        for (let i in this.divs) {
            await this.divs[i].cacheIds();
        }
    }
    */
    TuidMain.prototype.cacheDivIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _i, i;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.divs === undefined)
                            return [2 /*return*/];
                        _a = [];
                        for (_b in this.divs)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        i = _a[_i];
                        return [4 /*yield*/, this.divs[i].cacheIds()];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TuidMain.prototype.cUqFrom = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, owner, uq, cUq, cApp, cUqFrm, retErrors;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.schemaFrom === undefined)
                            return [2 /*return*/, this.entities.cUq];
                        _a = this.schemaFrom, owner = _a.owner, uq = _a.uq;
                        return [4 /*yield*/, this.entities.cUq];
                    case 1:
                        cUq = _b.sent();
                        cApp = cUq.cApp;
                        if (cApp === undefined)
                            return [2 /*return*/, cUq];
                        return [4 /*yield*/, cApp.getImportUq(owner, uq)];
                    case 2:
                        cUqFrm = _b.sent();
                        if (cUqFrm === undefined) {
                            console.error(owner + "/" + uq + " \u4E0D\u5B58\u5728");
                            debugger;
                            return [2 /*return*/, cUq];
                        }
                        return [4 /*yield*/, cUqFrm.loadSchema()];
                    case 3:
                        retErrors = _b.sent();
                        if (retErrors !== undefined) {
                            console.error('cUq.loadSchema: ' + retErrors);
                            debugger;
                            return [2 /*return*/, cUq];
                        }
                        return [2 /*return*/, cUqFrm];
                }
            });
        });
    };
    TuidMain.prototype.getApiFrom = function () {
        return __awaiter(this, void 0, void 0, function () {
            var from;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.from()];
                    case 1:
                        from = _a.sent();
                        if (from !== undefined) {
                            return [2 /*return*/, from.entities.uqApi];
                        }
                        return [2 /*return*/, this.entities.uqApi];
                }
            });
        });
    };
    TuidMain.prototype.from = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cUq;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cUqFrom()];
                    case 1:
                        cUq = _a.sent();
                        return [2 /*return*/, cUq.tuid(this.name)];
                }
            });
        });
    };
    TuidMain.prototype.cFrom = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cUq;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cUqFrom()];
                    case 1:
                        cUq = _a.sent();
                        return [2 /*return*/, cUq.cTuidMainFromName(this.name)];
                }
            });
        });
    };
    TuidMain.prototype.cEditFrom = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cUq;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cUqFrom()];
                    case 1:
                        cUq = _a.sent();
                        return [2 /*return*/, cUq.cTuidEditFromName(this.name)];
                }
            });
        });
    };
    TuidMain.prototype.cInfoFrom = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cUq;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cUqFrom()];
                    case 1:
                        cUq = _a.sent();
                        return [2 /*return*/, cUq.cTuidInfoFromName(this.name)];
                }
            });
        });
    };
    TuidMain.prototype.cSelectFrom = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cUq;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cUqFrom()];
                    case 1:
                        cUq = _a.sent();
                        if (cUq === undefined)
                            return [2 /*return*/];
                        return [2 /*return*/, cUq.cTuidSelectFromName(this.name)];
                }
            });
        });
    };
    TuidMain.prototype.afterCacheId = function (tuidValue) {
        _super.prototype.afterCacheId.call(this, tuidValue);
        if (this.proxies === undefined)
            return;
        var type = tuidValue.type, $proxy = tuidValue.$proxy;
        var pTuid = this.proxies[type];
        pTuid.useId($proxy);
    };
    return TuidMain;
}(Tuid));
export { TuidMain };
var TuidDiv = /** @class */ (function (_super) {
    __extends(TuidDiv, _super);
    function TuidDiv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TuidDiv.prototype, "Main", {
        get: function () { return this.owner; },
        enumerable: true,
        configurable: true
    });
    TuidDiv.prototype.getApiFrom = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.owner.getApiFrom()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TuidDiv;
}(Tuid));
export { TuidDiv };
//# sourceMappingURL=tuid.js.map