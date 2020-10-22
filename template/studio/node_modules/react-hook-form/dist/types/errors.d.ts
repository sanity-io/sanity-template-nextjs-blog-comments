import { DeepMap, LiteralUnion } from './utils';
import { FieldValues, InternalFieldName, Ref } from './fields';
import { Message } from './form';
import { ValidateResult, ValidationRules } from './validator';
export declare type MultipleFieldErrors = {
    [K in keyof ValidationRules]?: ValidateResult;
} & {
    [key: string]: ValidateResult;
};
export declare type FieldError = {
    type: LiteralUnion<keyof ValidationRules, string>;
    ref?: Ref;
    types?: MultipleFieldErrors;
    message?: Message;
};
export declare type ErrorOption = {
    types: MultipleFieldErrors;
    shouldFocus?: boolean;
} | {
    message?: Message;
    type?: LiteralUnion<keyof ValidationRules, string>;
    shouldFocus?: boolean;
};
export declare type FieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<TFieldValues, FieldError>;
export declare type InternalFieldErrors<TFieldValues extends FieldValues> = Partial<Record<InternalFieldName<TFieldValues>, FieldError>>;
