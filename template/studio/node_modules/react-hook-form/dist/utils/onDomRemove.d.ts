import * as React from 'react';
import { Field, FieldRefs } from '../types';
export default function onDomRemove<TFieldValues>(fieldsRef: React.MutableRefObject<FieldRefs<TFieldValues>>, removeFieldEventListenerAndRef: (field: Field | undefined, forceDelete?: boolean) => void): MutationObserver;
