"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var CreateCourseClass = /** @class */ (function () {
    function CreateCourseClass() {
    }
    CreateCourseClass.prototype.execute = function (_a) {
        var name = _a.name, _b = _a.duration, duration = _b === void 0 ? 8 : _b, educator = _a.educator;
        console.log('name: ', name);
        console.log('duration: ', duration);
        console.log('educator: ', educator);
    };
    return CreateCourseClass;
}());
;
exports.default = new CreateCourseClass();
