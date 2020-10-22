import * as React from 'react';
import { InternalFieldName, FieldRefs } from '../types';
declare const _default: <TFieldValues extends Record<string, any>>(fieldsRef: React.MutableRefObject<Partial<Record<InternalFieldName<TFieldValues>, import("../types").Field>>>, shallowFieldsStateRef?: React.MutableRefObject<Record<string, any>> | undefined, excludeDisabled?: boolean | undefined, search?: string | (keyof TFieldValues & string) | {
    nest: boolean;
} | InternalFieldName<TFieldValues>[] | undefined) => any;
export default _default;
