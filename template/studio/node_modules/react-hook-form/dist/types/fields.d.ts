import { IsFlatObject } from './utils';
import { ValidationRules } from './validator';
export declare type RadioOrCheckboxOption = {
    ref: HTMLInputElement;
    mutationWatcher?: MutationObserver;
};
export declare type InternalFieldName<TFieldValues extends FieldValues> = (keyof TFieldValues & string) | string;
export declare type FieldName<TFieldValues extends FieldValues> = IsFlatObject<TFieldValues> extends true ? Extract<keyof TFieldValues, string> : string;
export declare type CustomElement<TFieldValues extends FieldValues> = {
    name: FieldName<TFieldValues>;
    type?: string;
    value?: any;
    disabled?: boolean;
    checked?: boolean;
    options?: HTMLOptionsCollection;
    files?: FileList | null;
    focus?: () => void;
};
export declare type FieldValue<TFieldValues extends FieldValues> = TFieldValues[InternalFieldName<TFieldValues>];
export declare type FieldValues = Record<string, any>;
export declare type FieldElement<TFieldValues extends FieldValues = FieldValues> = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | CustomElement<TFieldValues>;
export declare type Ref = FieldElement;
export declare type Field = {
    ref: Ref;
    options?: RadioOrCheckboxOption[];
} & ValidationRules;
export declare type FieldRefs<TFieldValues extends FieldValues> = Partial<Record<InternalFieldName<TFieldValues>, Field>>;
