/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
'use strict';

import {
  IExtension, IExtensionPoint, BaseDelegate
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


/**
 * The interface that must be adhered to in order to interact
 * with the DockAreaExtensionPoint.
 */
export 
interface IDockAreaExtension {
  pointName: string;
  item: any; // Widget?
  tab: Tab;
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

  extend(items: IDockAreaExtension[]): IDisposable {
    for (var i = 0; i < items.length; ++i) {
      DockPanel.setTab(items[i].item, items[i].tab);
      this._dockarea.addWidget(items[i].item);
    }

    return; // TODO : return disposable.
  }

  id: string;
  private _dockarea: DockPanel;
}


export 
class DockAreaPlugin extends BaseDelegate {
  constructor(id: string) {
    super(id);
    this.id = id;
    this._dockAreaExtensionPoint = new DockAreaExtensionPoint(
      'dockarea.main'
    );
  }

  extensionPoints(): IExtensionPoint[] {
    return [this._dockAreaExtensionPoint];
  }
  
  private _dockAreaExtensionPoint: IExtensionPoint;
}


