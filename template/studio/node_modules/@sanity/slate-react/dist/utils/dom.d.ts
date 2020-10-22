/**
 * Types.
 */
import DOMNode = globalThis.Node;
import DOMComment = globalThis.Comment;
import DOMElement = globalThis.Element;
import DOMText = globalThis.Text;
import DOMRange = globalThis.Range;
import DOMSelection = globalThis.Selection;
import DOMStaticRange = globalThis.StaticRange;
export { DOMNode, DOMComment, DOMElement, DOMText, DOMRange, DOMSelection, DOMStaticRange, };
export declare type DOMPoint = [Node, number];
/**
 * Check if a DOM node is a comment node.
 */
export declare const isDOMComment: (value: any) => value is DOMComment;
/**
 * Check if a DOM node is an element node.
 */
export declare const isDOMElement: (value: any) => value is DOMElement;
/**
 * Check if a value is a DOM node.
 */
export declare const isDOMNode: (value: any) => value is DOMNode;
/**
 * Check if a DOM node is an element node.
 */
export declare const isDOMText: (value: any) => value is DOMText;
/**
 * Checks whether a paste event is a plaintext-only event.
 */
export declare const isPlainTextOnlyPaste: (event: ClipboardEvent) => boolean | null;
/**
 * Normalize a DOM point so that it always refers to a text node.
 */
export declare const normalizeDOMPoint: (domPoint: DOMPoint) => DOMPoint;
/**
 * Get the nearest editable child at `index` in a `parent`, preferring
 * `direction`.
 */
export declare const getEditableChild: (parent: DOMElement, index: number, direction: "forward" | "backward") => DOMNode;
/**
 * Get a plaintext representation of the content of a node, accounting for block
 * elements which get a newline appended.
 *
 * The domNode must be attached to the DOM.
 */
export declare const getPlainText: (domNode: DOMNode) => string;
/**
 * there is no way to create a reverse DOM Range using Range.setStart/setEnd
 * according to https://dom.spec.whatwg.org/#concept-range-bp-set.
 * Luckily it's possible to create a reverse selection via Selection.extend
 *
 * Note: Selection.extend is not implement in any version of IE (up to and including version 11)
 */
export declare const setReverseDomSelection: (domRange: DOMRange, domSelection: DOMSelection) => void;
//# sourceMappingURL=dom.d.ts.map