/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
'use strict';

import {
  IExtension, IExtensionPoint
} from 'phosphide';

import {
  IDisposable, DisposableDelegate
} from 'phosphor-disposable';

import {
  DockPanel
} from 'phosphor-dockpanel';

import {
  Tab
} from 'phosphor-tabs';

import {
  Widget, attachWidget
} from 'phosphor-widget';

import './index.css';


function createContent(title: string): Widget {
  var widget = new Widget();
  var tab = new Tab(title);
  tab.closable = true;
  DockPanel.setTab(widget, tab);
  return widget;
}


export
class DockAreaExtensionPoint {
  constructor(id: string) {
    this.id = id;

    var initialView = createContent('Initial Tab');
    this._dockarea = new DockPanel();
    this._dockarea.id = 'main';
    this._dockarea.addWidget(initialView);
    attachWidget(this._dockarea, document.body);

    window.onresize = () => this._dockarea.update();
  }

  extend(item: any): IDisposable {
    this._dockarea.addWidget( item );
    return;
  }

  id: string;
  private _dockarea: DockPanel;
}


export
class DockAreaPlugin {
  constructor(id: string) {
    this.id = id;
    this._dockareaExtensionPoint = new DockAreaExtensionPoint('dockarea.main');
  }

  extensionPoints(): IExtensionPoint[] {
    return [this._dockareaExtensionPoint];
  }

  extensions(): IExtension[] {
    return [];
  }

  load(): IDisposable {
    console.log('Loading dockarea plugin');
    return;
  }

  unload(): void {
    console.log('Unloading dockarea plugin');
  }

  isRuntimeLoaded(): boolean {
    return true;
  }

  id: string;
  private _dockareaExtensionPoint: IExtensionPoint;
}
