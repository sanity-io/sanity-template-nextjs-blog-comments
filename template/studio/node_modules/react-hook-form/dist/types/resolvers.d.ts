import { EmptyObject } from './utils';
import { UnpackNestedValue } from './form';
import { FieldValues } from './fields';
import { FieldErrors } from './errors';
export declare type ResolverSuccess<TFieldValues extends FieldValues = FieldValues> = {
    values: UnpackNestedValue<TFieldValues>;
    errors: EmptyObject;
};
export declare type ResolverError<TFieldValues extends FieldValues = FieldValues> = {
    values: EmptyObject;
    errors: FieldErrors<TFieldValues>;
};
export declare type ResolverResult<TFieldValues extends FieldValues = FieldValues> = ResolverSuccess<TFieldValues> | ResolverError<TFieldValues>;
export declare type Resolver<TFieldValues extends FieldValues = FieldValues, TContext extends object = object> = (values: UnpackNestedValue<TFieldValues>, context?: TContext, validateAllFieldCriteria?: boolean) => Promise<ResolverResult<TFieldValues>> | ResolverResult<TFieldValues>;
