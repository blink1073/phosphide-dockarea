/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
'use strict';
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
    DockAreaExtensionPoint.prototype.extend = function (item) {
        phosphor_dockpanel_1.DockPanel.setTab(item.item, item.tab);
        this._dockarea.addWidget(item.item);
        return;
    };
    return DockAreaExtensionPoint;
})();
exports.DockAreaExtensionPoint = DockAreaExtensionPoint;
var DockAreaPlugin = (function () {
    function DockAreaPlugin(id) {
        this.id = id;
        this._dockareaExtensionPoint = new DockAreaExtensionPoint('dockarea.main');
    }
    DockAreaPlugin.prototype.extensionPoints = function () {
        return [this._dockareaExtensionPoint];
    };
    DockAreaPlugin.prototype.extensions = function () {
        return [];
    };
    DockAreaPlugin.prototype.load = function () {
        console.log('Loading dockarea plugin');
        return;
    };
    DockAreaPlugin.prototype.unload = function () {
        console.log('Unloading dockarea plugin');
    };
    DockAreaPlugin.prototype.isRuntimeLoaded = function () {
        return true;
    };
    return DockAreaPlugin;
})();
exports.DockAreaPlugin = DockAreaPlugin;
//# sourceMappingURL=index.js.map