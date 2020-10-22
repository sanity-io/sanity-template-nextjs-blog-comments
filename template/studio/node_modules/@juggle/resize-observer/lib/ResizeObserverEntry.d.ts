import { DOMRectReadOnly } from './DOMRectReadOnly';
import { ResizeObserverSize } from './ResizeObserverSize';
declare class ResizeObserverEntry {
    target: Element;
    contentRect: DOMRectReadOnly;
    borderBoxSize: ResizeObserverSize[];
    contentBoxSize: ResizeObserverSize[];
    devicePixelContentBoxSize: ResizeObserverSize[];
    constructor(target: Element);
}
export { ResizeObserverEntry };
