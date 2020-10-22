import * as React from 'react';
import { Field, FieldRefs, FieldValues } from '../types';
export default function findRemovedFieldAndRemoveListener<TFieldValues extends FieldValues>(fieldsRef: React.MutableRefObject<FieldRefs<TFieldValues>>, handleChange: ({ type, target }: Event) => Promise<void | boolean>, field: Field, shallowFieldsStateRef: React.MutableRefObject<FieldValues>, shouldUnregister?: boolean, forceDelete?: boolean): void;
