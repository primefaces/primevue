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

export interface useFormFieldOptions {
    initialValue?: any;
    props?: Record<string, any> | ((state: useFormFieldState) => Record<string, any>);
    validateOnBlur?: boolean;
    validateOnValueUpdate?: boolean;
    resolver?: (options: { values: any; value: any; name: string }) => Promise<Record<string, any>> | Record<string, any> | undefined;
    onBlur?: (event: Event) => void;
    onInput?: (event: Event | any) => void;
    onChange?: (event: Event | any) => void;
    onInvalid?: (errors: any[]) => void;
    [key: string]: any;
}

export interface useFormFieldProps {
    name: string;
    onBlur: (event: Event) => void;
    onInput: (event: Event | any) => void;
    onChange: (event: Event | any) => void;
    onInvalid: (errors: any[]) => void;
    [key: string]: any;
}

export interface useFormFieldInstance {
    props: useFormFieldProps;
    states: useFormFieldState;
    options?: useFormFieldOptions;
    _watcher: {
        stop: () => void;
        pause: () => void;
        resume: () => void;
    };
}

export interface useFormReturn {
    defineField: (field: string, options?: useFormFieldOptions) => { state: useFormFieldState; props: useFormFieldProps };
    setFieldValue: (field: string, value: any) => void;
    getFieldState: (field: string) => useFormFieldState | undefined;
    handleSubmit: (event: any) => any;
    handleReset: (event: any) => any;
    validate: (field: string) => any;
    setValues: (values: Record<string, any>) => void;
    reset: () => void;
    valid: boolean;
    states: Record<string, useFormFieldState>;
    fields: Record<string, useFormFieldInstance>;
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
