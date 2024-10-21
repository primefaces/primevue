export interface useFormReturn {
    defineField: (field: string, options?: any) => any;
    handleSubmit: (event: any) => any;
    validate: (field: string) => any;
    reset: () => void;
    valid: boolean;
    states: any;
}

export interface useFormOptions {
    resolver?: (values: Record<string, any>) => Promise<Record<string, any>> | Record<string, any> | undefined;
    defaultValues?: Record<string, any> | undefined;
    validateOnValueUpdate?: boolean | string[];
    validateOnBlur?: boolean | string[];
    validateOnMount?: boolean | string[];
    validateOnSubmit?: boolean | string[];
}

export declare function useForm(options: useFormOptions): useFormReturn;
