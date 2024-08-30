import { equals, removeAccents, resolveFieldData } from '@primeuix/utils/object';

const FilterService = {
    filter(value: any, fields: string[], filterValue: any, filterMatchMode: keyof typeof this.filters, filterLocale?: string) {
        let filteredItems: string[] = [];

        if (!value) {
            return filteredItems;
        }

        for (const item of value) {
            if (typeof item === 'string') {
                if (this.filters[filterMatchMode](item, filterValue, filterLocale)) {
                    filteredItems.push(item);
                    continue;
                }
            } else {
                for (const field of fields) {
                    const fieldValue = resolveFieldData(item, field);

                    if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }

        return filteredItems;
    },
    filters: {
        startsWith(value: string, filter: string, filterLocale?: string) {
            if (filter === undefined || filter === null || filter === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            let filterValue = removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);

            return stringValue.slice(0, filterValue.length) === filterValue;
        },
        contains(value: string, filter: string, filterLocale?: string) {
            if (filter === undefined || filter === null || filter === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            let filterValue = removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);

            return stringValue.indexOf(filterValue) !== -1;
        },
        notContains(value: string, filter: string, filterLocale?: string) {
            if (filter === undefined || filter === null || filter === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            let filterValue = removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);

            return stringValue.indexOf(filterValue) === -1;
        },
        endsWith(value: string, filter: string, filterLocale?: string) {
            if (filter === undefined || filter === null || filter === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            let filterValue = removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);

            return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
        },
        equals(value: Date, filter: string | Date, filterLocale?: string) {
            if (filter === undefined || filter === null || filter === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            if (value.getTime && filter instanceof Date && filter.getTime) return value.getTime() === filter.getTime();
            else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        },
        notEquals<T extends string | Date>(value: T, filter: T, filterLocale?: string) {
            if (filter === undefined || filter === null || filter === '') {
                return false;
            }

            if (value === undefined || value === null) {
                return true;
            }

            if (value instanceof Date && filter instanceof Date) return value.getTime() !== filter.getTime();
            else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        },
        in(value: string, filter: string) {
            if (filter === undefined || filter === null || filter.length === 0) {
                return true;
            }

            for (let i = 0; i < filter.length; i++) {
                if (equals(value, filter)) {
                    return true;
                }
            }

            return false;
        },
        betweenM(value: Date, filter: Date[]) {
            if (filter == null || filter[0] == null || filter[1] == null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
            else return filter[0] <= value && value <= filter[1];
        },
        lt(value: Date, filter: Date) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            if (filter instanceof Date && value.getTime && filter.getTime) return value.getTime() < filter.getTime();
            else return value < filter;
        },
        lte(value: Date, filter: Date) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();
            else return value <= filter;
        },
        gt(value: Date, filter: Date) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();
            else return value > filter;
        },
        gte(value: Date, filter: Date) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();
            else return value >= filter;
        },
        dateIs(value: Date, filter: Date) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toDateString() === filter.toDateString();
        },
        dateIsNot(value: Date, filter: Date) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toDateString() !== filter.toDateString();
        },
        dateBefore(value: Date, filter: Date) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.getTime() < filter.getTime();
        },
        dateAfter(value: Date, filter: Date) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.getTime() > filter.getTime();
        }
    },
    register(rule: keyof typeof this.filters, fn: (...args: any[]) => boolean) {
        this.filters[rule] = fn;
    }
};

export default FilterService;
