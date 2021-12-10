export const FilterMatchMode: {
    STARTS_WITH?: string,
    CONTAINS?: string,
    NOT_CONTAINS?: string,
    ENDS_WITH?: string,
    EQUALS?: string,
    NOT_EQUALS?: string,
    IN?: string,
    LESS_THAN?: string,
    LESS_THAN_OR_EQUAL_TO?: string,
    GREATER_THAN?: string,
    GREATER_THAN_OR_EQUAL_TO?: string,
    BETWEEN?: string,
    DATE_IS?: string,
    DATE_IS_NOT?: string,
    DATE_BEFORE?: string,
    DATE_AFTER?: string
}

export const FilterOperator: {
    AND?: string,
    OR?: string
}

interface FiltersOptions {
    startsWith?(value: any, filter: any, filterLocale: string): boolean,
    contains?(value: any, filter: any, filterLocale: string): boolean,
    notContains?(value: any, filter: any, filterLocale: string): boolean,
    endsWith?(value: any, filter: any, filterLocale: string): boolean,
    equals?(value: any, filter: any, filterLocale: string): boolean,
    notEquals?(value: any, filter: any, filterLocale: string): boolean,
    in?(value: any, filter: any): boolean,
    between?(value: any, filter: any): boolean,
    lt?(value: any, filter: any): boolean,
    lte?(value: any, filter: any): boolean,
    gt?(value: any, filter: any): boolean,
    gte?(value: any, filter: any): boolean,
    dateIs?(value: any, filter: any): boolean,
    dateIsNot?(value: any, filter: any): boolean,
    dateBefore?(value: any, filter: any): boolean,
    dateAfter?(value: any, filter: any): boolean
}

interface FilterServiceOptions {
    filter?(value: any[], fields: any[], filterValue: any, filterMatchMode: string, filterLocale: string): any[],
    filters?: FiltersOptions,
    register?(rule: string, fn: any): void
}

export const FilterService: FilterServiceOptions;
