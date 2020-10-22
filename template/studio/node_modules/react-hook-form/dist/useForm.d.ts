import { UseFormMethods, FieldValues, UseFormOptions } from './types';
export declare function useForm<TFieldValues extends FieldValues = FieldValues, TContext extends object = object>({ mode, reValidateMode, resolver, context, defaultValues, shouldFocusError, shouldUnregister, criteriaMode, }?: UseFormOptions<TFieldValues, TContext>): UseFormMethods<TFieldValues>;
