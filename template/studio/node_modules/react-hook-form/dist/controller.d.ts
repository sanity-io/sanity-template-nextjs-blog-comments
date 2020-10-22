import * as React from 'react';
import { Control } from './types';
import { ControllerProps } from './types';
declare const Controller: <TAs extends React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ComponentClass<any, any> | React.FunctionComponent<any> | "input" | "select" | "textarea", TControl extends Control<Record<string, any>> = Control<Record<string, any>>>({ name, rules, as, render, defaultValue, control, onFocus, ...rest }: import("./types").Assign<({
    as: TAs;
    render?: undefined;
} & {
    name: import("./types").FieldName<import("./types").FieldValuesFromControl<TControl>>;
    rules?: Partial<{
        required: string | boolean | import("./types").ValidationValueMessage<boolean>;
        min: import("./types").ValidationRule<React.ReactText>;
        max: import("./types").ValidationRule<React.ReactText>;
        maxLength: import("./types").ValidationRule<React.ReactText>;
        minLength: import("./types").ValidationRule<React.ReactText>;
        pattern: import("./types").ValidationRule<RegExp>;
        validate: import("./types").Validate | Record<string, import("./types").Validate>;
    }> | undefined;
    onFocus?: (() => void) | undefined;
    defaultValue?: unknown;
    control?: TControl | undefined;
}) | ({
    as?: undefined;
    render: (data: {
        onChange: (...event: any[]) => void;
        onBlur: () => void;
        value: any;
        name: import("./types").FieldName<import("./types").FieldValuesFromControl<TControl>>;
    }) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
} & {
    name: import("./types").FieldName<import("./types").FieldValuesFromControl<TControl>>;
    rules?: Partial<{
        required: string | boolean | import("./types").ValidationValueMessage<boolean>;
        min: import("./types").ValidationRule<React.ReactText>;
        max: import("./types").ValidationRule<React.ReactText>;
        maxLength: import("./types").ValidationRule<React.ReactText>;
        minLength: import("./types").ValidationRule<React.ReactText>;
        pattern: import("./types").ValidationRule<RegExp>;
        validate: import("./types").Validate | Record<string, import("./types").Validate>;
    }> | undefined;
    onFocus?: (() => void) | undefined;
    defaultValue?: unknown;
    control?: TControl | undefined;
}), TAs extends undefined ? {} : TAs extends React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> ? Record<string, any> : TAs extends React.ComponentType<infer P> ? P : TAs extends "symbol" | "object" | "input" | "select" | "textarea" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" ? JSX.IntrinsicElements[TAs] : never>) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
export { Controller };
