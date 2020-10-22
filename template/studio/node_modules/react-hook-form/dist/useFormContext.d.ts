/// <reference types="react" />
import { UseFormMethods, FormProviderProps } from './types';
export declare const useFormContext: <TFieldValues extends Record<string, any>>() => UseFormMethods<TFieldValues>;
export declare const FormProvider: <TFieldValues extends Record<string, any>>({ children, ...props }: FormProviderProps<TFieldValues>) => JSX.Element;
