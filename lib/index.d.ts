import { IExtensionPoint, BaseDelegate } from 'phosphide';
import { IDisposable } from 'phosphor-disposable';
import { Tab } from 'phosphor-tabs';
/**
 * The interface that must be adhered to in order to interact
 * with the DockAreaExtensionPoint.
 */
export interface IDockAreaExtension {
    pointName: string;
    item: any;
    tab: Tab;
}
export declare class DockAreaExtensionPoint {
    constructor(id: string);
    extend(items: IDockAreaExtension[]): IDisposable;
    id: string;
    private _dockarea;
}
export declare class DockAreaPlugin extends BaseDelegate {
    constructor(id: string);
    extensionPoints(): IExtensionPoint[];
    private _dockAreaExtensionPoint;
}
