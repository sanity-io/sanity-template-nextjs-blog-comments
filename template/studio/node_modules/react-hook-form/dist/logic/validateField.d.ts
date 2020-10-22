import * as React from 'react';
import { Field, FieldRefs, FieldError, InternalFieldName, InternalFieldErrors } from '../types';
declare const _default: <TFieldValues extends Record<string, any>>(fieldsRef: React.MutableRefObject<Partial<Record<InternalFieldName<TFieldValues>, Field>>>, validateAllFieldCriteria: boolean, { ref, ref: { type, value }, options, required, maxLength, minLength, min, max, pattern, validate, }: Field, shallowFieldsStateRef: React.MutableRefObject<Record<string, any>>) => Promise<Partial<Record<InternalFieldName<TFieldValues>, FieldError>>>;
export default _default;
