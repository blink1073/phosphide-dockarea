import { IExtension, IExtensionPoint } from 'phosphide';
import { IDisposable } from 'phosphor-disposable';
export declare class DockAreaExtensionPoint {
    constructor(id: string);
    extend(item: any): IDisposable;
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
