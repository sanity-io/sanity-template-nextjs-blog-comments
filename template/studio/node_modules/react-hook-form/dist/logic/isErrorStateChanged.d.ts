import { FieldValues, InternalFieldName, FieldErrors, FieldNamesMarkedBoolean, FieldError } from '../types';
export default function isErrorStateChanged<TFieldValues extends FieldValues>({ errors, name, error, validFields, fieldsWithValidation, }: {
    errors: FieldErrors<TFieldValues>;
    error: FieldError | undefined;
    name: InternalFieldName<TFieldValues>;
    validFields: FieldNamesMarkedBoolean<TFieldValues>;
    fieldsWithValidation: FieldNamesMarkedBoolean<TFieldValues>;
}): boolean;
