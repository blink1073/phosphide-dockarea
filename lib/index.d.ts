import { IExtension, IExtensionPoint } from 'phosphide';
import { IDisposable } from 'phosphor-disposable';
import { Tab } from 'phosphor-tabs';
/**
 * The interface that must be adhered to in order to interact
 * with the DockAreaExtensionPoint.
 */
export interface IDockAreaExtension {
    pointName: string;
    item: any;
    tab?: Tab;
}
export declare class DockAreaExtensionPoint {
    constructor(id: string);
    extend(item: IDockAreaExtension): IDisposable;
    id: string;
    private _dockarea;
}
export declare class DockAreaPlugin {
    constructor(id: string);
    extensionPoints(): IExtensionPoint[];
    extensions(): IExtension[];
    load(): IDisposable;
    unload(): void;
    isRuntimeLoaded(): boolean;
    id: string;
    private _dockareaExtensionPoint;
}
