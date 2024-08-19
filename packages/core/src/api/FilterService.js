import { equals, removeAccents, resolveFieldData } from '@primeuix/utils/object';

const FilterService = {
    filter(value, fields, filterValue, filterMatchMode, filterLocale) {
        let filteredItems = [];

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
        startsWith(value, filter, filterLocale) {
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
        contains(value, filter, filterLocale) {
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
        notContains(value, filter, filterLocale) {
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
        endsWith(value, filter, filterLocale) {
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
        equals(value, filter, filterLocale) {
            if (filter === undefined || filter === null || filter === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();
            else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        },
        notEquals(value, filter, filterLocale) {
            if (filter === undefined || filter === null || filter === '') {
                return false;
            }

            if (value === undefined || value === null) {
                return true;
            }

            if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();
            else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        },
        in(value, filter) {
            if (filter === undefined || filter === null || filter.length === 0) {
                return true;
            }

            for (let i = 0; i < filter.length; i++) {
                if (equals(value, filter[i])) {
                    return true;
                }
            }

            return false;
        },
        between(value, filter) {
            if (filter == null || filter[0] == null || filter[1] == null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
            else return filter[0] <= value && value <= filter[1];
        },
        lt(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            // Function to check if a string is a valid version
            const isVersionString = (v) => /^\d+(\.\d+)*$/.test(v);

            // Custom logic for comparing version strings
            if (isVersionString(value) && isVersionString(filter)) {
                const parseVersion = (version) => version.split(".").map(Number);
                const valueArray = parseVersion(value);
                const filterArray = parseVersion(filter);

                // Compare each part of the version
                for (let i = 0; i < Math.max(valueArray.length, filterArray.length); i++) {
                    const valPart = valueArray[i] || 0;
                    const filterPart = filterArray[i] || 0;

                    if (valPart < filterPart)
                        return true;
                    if (valPart > filterPart)
                        return false;
                }
                return false;
            }

            if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();
            else return value < filter;
        },
        lte(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            // Function to check if a string is a valid version
            const isVersionString = (v) => /^\d+(\.\d+)*$/.test(v);

            // Custom logic for comparing version strings
            if (isVersionString(value) && isVersionString(filter)) {
                const parseVersion = (version) => version.split('.').map(Number);
                const valueArray = parseVersion(value);
                const filterArray = parseVersion(filter);

                // Compare each part of the version
                for (let i = 0; i < Math.max(valueArray.length, filterArray.length); i++) {
                    const valPart = valueArray[i] || 0;
                    const filterPart = filterArray[i] || 0;

                    if (valPart < filterPart) return true;
                    if (valPart > filterPart) return false;
                }

                // If we reach here, it means the versions are equal
                return true;
            }

            if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();
            else return value <= filter;
        },
        gt(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            // Function to check if a string is a valid version
            const isVersionString = (v) => /^\d+(\.\d+)*$/.test(v);

            // Custom logic for comparing version strings
            if (isVersionString(value) && isVersionString(filter)) {
                const parseVersion = (version) => version.split('.').map(Number);
                const valueArray = parseVersion(value);
                const filterArray = parseVersion(filter);

                // Compare each part of the version
                for (let i = 0; i < Math.max(valueArray.length, filterArray.length); i++) {
                    const valPart = valueArray[i] || 0;
                    const filterPart = filterArray[i] || 0;

                    if (valPart > filterPart) return true;
                    if (valPart < filterPart) return false;
                }

                // If we reach here, it means the versions are equal, so return false
                return false;
            }

            if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();
            else return value > filter;
        },
        gte(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            // Function to check if a string is a valid version
            const isVersionString = (v) => /^\d+(\.\d+)*$/.test(v);

            // Custom logic for comparing version strings
            if (isVersionString(value) && isVersionString(filter)) {
                const parseVersion = (version) => version.split('.').map(Number);
                const valueArray = parseVersion(value);
                const filterArray = parseVersion(filter);

                // Compare each part of the version
                for (let i = 0; i < Math.max(valueArray.length, filterArray.length); i++) {
                    const valPart = valueArray[i] || 0;
                    const filterPart = filterArray[i] || 0;

                    if (valPart > filterPart) return true;
                    if (valPart < filterPart) return false;
                }

                // If we reach here, it means the versions are equal, so return true
                return true;
            }

            if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();
            else return value >= filter;
        },
        dateIs(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toDateString() === filter.toDateString();
        },
        dateIsNot(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toDateString() !== filter.toDateString();
        },
        dateBefore(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.getTime() < filter.getTime();
        },
        dateAfter(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.getTime() > filter.getTime();
        }
    },
    register(rule, fn) {
        this.filters[rule] = fn;
    }
};

export default FilterService;
