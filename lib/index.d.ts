import { IExtension } from 'phosphide';
import { IDisposable } from 'phosphor-disposable';
import { Tab } from 'phosphor-tabs';
import { Widget } from 'phosphor-widget';
/**
 * The interface that must be adhered to in order to interact
 * with the DockAreaExtensionPoint.
 */
export interface IItems {
    items: Widget[];
    tabs: Tab[];
}
export declare function receiveItems(extension: IExtension<IItems>): IDisposable;
export declare function initialize(): IDisposable;
