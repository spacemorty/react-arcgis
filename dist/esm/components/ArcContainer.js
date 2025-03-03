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
import * as React from 'react';
var ArcContainer = /** @class */ (function (_super) {
    __extends(ArcContainer, _super);
    function ArcContainer(props) {
        return _super.call(this, props) || this;
    }
    ArcContainer.prototype.render = function () {
        return React.createElement("div", { id: this.props.id, style: this.props.style });
    };
    ArcContainer.prototype.shouldComponentUpdate = function () {
        return false;
    };
    return ArcContainer;
}(React.Component));
export default ArcContainer;
//# sourceMappingURL=ArcContainer.js.map