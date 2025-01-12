export interface useFormFieldState {
    value: any;
    touched: boolean;
    dirty: boolean;
    pristine: boolean;
    valid: boolean;
    invalid: boolean;
    error: any;
    errors: any[];
}

export interface useFormReturn {
    defineField: (field: string, options?: any) => any;
    setFieldValue: (field: string, value: any) => void;
    getFieldState: (field: string) => useFormFieldState | undefined;
    handleSubmit: (event: any) => any;
    handleReset: (event: any) => any;
    validate: (field: string) => any;
    setValues: (values: Record<string, any>) => void;
    reset: () => void;
    valid: boolean;
    states: Record<string, useFormFieldState>;
}

export interface useFormResolverOptions {
    values: Record<string, any>;
    names: string[] | undefined;
}

export interface useFormOptions {
    resolver?: (e: useFormResolverOptions) => Promise<Record<string, any>> | Record<string, any> | undefined;
    initialValues?: Record<string, any> | undefined;
    validateOnValueUpdate?: boolean | string[];
    validateOnBlur?: boolean | string[];
    validateOnMount?: boolean | string[];
    validateOnSubmit?: boolean | string[];
}

export declare function useForm(options: useFormOptions): useFormReturn;
