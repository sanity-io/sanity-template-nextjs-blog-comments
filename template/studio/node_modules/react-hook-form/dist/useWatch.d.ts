import { DeepPartial, FieldValues, UnpackNestedValue, Control } from './types';
export declare function useWatch<TWatchFieldValues extends FieldValues>(props: {
    defaultValue?: UnpackNestedValue<DeepPartial<TWatchFieldValues>>;
    control?: Control;
}): UnpackNestedValue<DeepPartial<TWatchFieldValues>>;
export declare function useWatch<TWatchFieldValue extends any>(props: {
    name: string;
    control?: Control;
}): undefined | UnpackNestedValue<TWatchFieldValue>;
export declare function useWatch<TWatchFieldValue extends any>(props: {
    name: string;
    defaultValue: UnpackNestedValue<TWatchFieldValue>;
    control?: Control;
}): UnpackNestedValue<TWatchFieldValue>;
export declare function useWatch<TWatchFieldValues extends FieldValues>(props: {
    name: string[];
    defaultValue?: UnpackNestedValue<DeepPartial<TWatchFieldValues>>;
    control?: Control;
}): UnpackNestedValue<DeepPartial<TWatchFieldValues>>;
