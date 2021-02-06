import ObjectUtils from './ObjectUtils';

export default class FilterUtils {

    static startsWith(value, filter, filterLocale)  {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);

        return stringValue.slice(0, filterValue.length) === filterValue;
    }

    static contains(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);

        return stringValue.indexOf(filterValue) !== -1;
    }

    static notContains(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);

        return stringValue.indexOf(filterValue) === -1;
    }

    static endsWith(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);

        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    }

    static equals(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() === filter.getTime();
        else
            return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    }

    static notEquals(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return false;
        }

        if (value === undefined || value === null) {
            return true;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() !== filter.getTime();
        else
            return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    }

    static in(value, filter) {
        if (filter === undefined || filter === null || filter.length === 0) {
            return true;
        }

        for (let i = 0; i < filter.length; i++) {
            if (ObjectUtils.equals(value, filter[i])) {
                return true;
            }
        }

        return false;
    }

    static between(value, filter) {
        if (filter == null || filter[0] == null || filter[1] == null) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime)
        return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
        else
            return filter[0] <= value && value <= filter[1];
    }

    static lt(value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() < filter.getTime();
        else
            return value < filter;
    }

    static lte(value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() <= filter.getTime();
        else
            return value <= filter;
    }

    static gt(value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() > filter.getTime();
        else
            return value > filter;
    }

    static gte(value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() >= filter.getTime();
        else
            return value >= filter;
    }

    static is(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() === filter.getTime();
        else
            return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    }

    static isNot(value, filter, filterLocale) {
        return this.filters.notEquals(value, filter, filterLocale);
    }

    static before(value, filter, filterLocale) {
        return this.filters.lt(value, filter, filterLocale);
    }

    static after(value, filter, filterLocale) {
        return this.filters.gt(value, filter, filterLocale);
    }

}