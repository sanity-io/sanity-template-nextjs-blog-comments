import { DeepPartial, FieldValue, InternalFieldName, UnpackNestedValue } from '../types';
declare const _default: <TFieldValues extends Record<string, any>>(fieldValues: TFieldValues, fieldName: InternalFieldName<TFieldValues>, watchFields: Set<InternalFieldName<TFieldValues>>, inputValue: UnpackNestedValue<DeepPartial<TFieldValues>>, isSingleField?: boolean | undefined) => UnpackNestedValue<DeepPartial<TFieldValues>> | FieldValue<TFieldValues> | undefined;
export default _default;
