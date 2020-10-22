import { ResizeObserver } from '../ResizeObserver';
import { ResizeObserverEntry } from '../ResizeObserverEntry';
declare type IsomorphicWindow = Window & {
    ResizeObserver?: typeof ResizeObserver;
    ResizeObserverEntry?: typeof ResizeObserverEntry;
};
export declare const global: IsomorphicWindow;
export {};
