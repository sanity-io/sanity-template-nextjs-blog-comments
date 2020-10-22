import * as React from 'react';
import { FieldRefs, FieldValues, InternalFieldName } from '../types';
export default function getFieldValue<TFieldValues extends FieldValues>(fieldsRef: React.MutableRefObject<FieldRefs<TFieldValues>>, name: InternalFieldName<TFieldValues>, shallowFieldsStateRef?: React.MutableRefObject<Partial<FieldValues>>, excludeDisabled?: boolean): any;
