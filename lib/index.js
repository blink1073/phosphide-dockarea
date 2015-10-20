/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var phosphide_1 = require('phosphide');
var phosphor_dockpanel_1 = require('phosphor-dockpanel');
var phosphor_tabs_1 = require('phosphor-tabs');
var phosphor_widget_1 = require('phosphor-widget');
require('./index.css');
function createContent(title) {
    var widget = new phosphor_widget_1.Widget();
    var tab = new phosphor_tabs_1.Tab(title);
    tab.closable = true;
    phosphor_dockpanel_1.DockPanel.setTab(widget, tab);
    return widget;
}
var DockAreaExtensionPoint = (function () {
    function DockAreaExtensionPoint(id) {
        var _this = this;
        this.id = id;
        var initialView = createContent('Initial Tab');
        this._dockarea = new phosphor_dockpanel_1.DockPanel();
        this._dockarea.id = 'main';
        this._dockarea.addWidget(initialView);
        phosphor_widget_1.attachWidget(this._dockarea, document.body);
        window.onresize = function () { return _this._dockarea.update(); };
    }
    DockAreaExtensionPoint.prototype.extend = function (items) {
        for (var i = 0; i < items.length; ++i) {
            phosphor_dockpanel_1.DockPanel.setTab(items[i].item, items[i].tab);
            this._dockarea.addWidget(items[i].item);
        }
        return; // TODO : return disposable.
    };
    return DockAreaExtensionPoint;
})();
exports.DockAreaExtensionPoint = DockAreaExtensionPoint;
var DockAreaPlugin = (function (_super) {
    __extends(DockAreaPlugin, _super);
    function DockAreaPlugin(id) {
        _super.call(this, id, []);
        this.id = id;
        this._dockAreaExtensionPoint = new DockAreaExtensionPoint('dockarea.main');
    }
    DockAreaPlugin.prototype.extensionPoints = function () {
        return [this._dockAreaExtensionPoint];
    };
    return DockAreaPlugin;
})(phosphide_1.BaseDelegate);
exports.DockAreaPlugin = DockAreaPlugin;
//# sourceMappingURL=index.js.map