import { afterEach } from 'vitest';
import FilterService from '../FilterService';

const filters = FilterService.filters;

import { ObjectUtils } from 'primevue/utils';

afterEach(() => {
    vi.restoreAllMocks();
});

const checkParametersNullOrUndefined = (filterType) => {
    it('When value parameter is undefined', () => {
        expect(filters[filterType]('value', undefined)).toBeTruthy();
    });

    it('When value parameter is null', () => {
        expect(filters[filterType]('value', null)).toBeTruthy();
    });

    it('When filter parameter is undefined', () => {
        expect(filters[filterType](undefined, 'filter')).toBeFalsy();
    });

    it('When filter parameter is null', () => {
        expect(filters[filterType](undefined, 'filter')).toBeFalsy();
    });
};

describe('FilterService', () => {
    describe('StartsWith filter test', () => {
        checkParametersNullOrUndefined('startsWith');
        it('When value and filter parameter is not null or undefined', () => {
            vi.spyOn(ObjectUtils, 'removeAccents').mockReturnValue('value');

            const startsWith = filters.startsWith('value', 'filter', 'tr');

            expect(startsWith).toBeTruthy();
        });
    });

    describe('Contains filter test', () => {
        checkParametersNullOrUndefined('contains');

        it('When value and filter parameter is not null or undefined', () => {
            vi.spyOn(ObjectUtils, 'removeAccents').mockReturnValue('value');

            const contains = filters.contains('value', 'filter', 'tr');

            expect(contains).toBeTruthy();
        });
    });

    describe('NotContains filter test', () => {
        checkParametersNullOrUndefined('notContains');

        it('When value and filter parameter is not null or undefined', () => {
            vi.spyOn(ObjectUtils, 'removeAccents').mockReturnValue('value');

            const notContains = filters.notContains('value', 'filter', 'tr');

            expect(notContains).toBeFalsy();
        });
    });

    describe('endsWith filter test', () => {
        checkParametersNullOrUndefined('endsWith');

        it('When value and filter parameter is not null or undefined', () => {
            vi.spyOn(ObjectUtils, 'removeAccents').mockReturnValue('value');

            const endsWith = filters.endsWith('value', 'filter', 'tr');

            expect(endsWith).toBeTruthy();
        });
    });

    describe('equals filter test', () => {
        checkParametersNullOrUndefined('equals');

        it('When value and filter parameter has getTime property', () => {
            const getTimeMock = vi.fn(() => true);
            const equals = filters.equals({ getTime: getTimeMock }, { getTime: getTimeMock }, 'tr');

            expect(equals).toBeTruthy();
        });

        it('When value and filter parameter is not null or undefined', () => {
            vi.spyOn(ObjectUtils, 'removeAccents').mockReturnValue('value');

            const equals = filters.equals('value', 'filter', 'tr');

            expect(equals).toBeTruthy();
        });
    });

    describe('notEquals filter test', () => {
        it('When filter parameter is undefined', () => {
            expect(filters.notEquals('value', undefined)).toBeFalsy();
        });

        it('When value parameter is undefined', () => {
            expect(filters.notEquals(undefined, 'filter')).toBeTruthy();
        });

        it('When value parameter is null', () => {
            expect(filters.notEquals(undefined, 'filter')).toBeTruthy();
        });

        it('When value and filter parameter has getTime property', () => {
            const getTimeMock = vi.fn(() => true);
            const notEquals = filters.notEquals({ getTime: getTimeMock }, { getTime: getTimeMock }, 'tr');

            expect(notEquals).toBeFalsy();
        });

        it('When value and filter parameter is not null or undefined', () => {
            vi.spyOn(ObjectUtils, 'removeAccents').mockReturnValue('value');

            const notEquals = filters.notEquals('value', 'filter', 'tr');

            expect(notEquals).toBeFalsy();
        });
    });

    describe('in filter test', () => {
        checkParametersNullOrUndefined('in');

        it('When value parameter equal to any filter word', () => {
            vi.spyOn(ObjectUtils, 'removeAccents').mockImplementation((value, filter) => value === filter);

            const inFilter = filters.in('e', 'filter');

            expect(inFilter).toBeTruthy();
        });

        it('When value parameter not equal to any filter word', () => {
            vi.spyOn(ObjectUtils, 'removeAccents').mockImplementation((value, filter) => value === filter);

            const inFilter = filters.in('d', 'filter');

            expect(inFilter).toBeFalsy();
        });
    });

    describe('between filter test', () => {
        checkParametersNullOrUndefined('between');
        it('When value has getTime func and smaller than filter[0]', () => {
            const filterGetTime = vi.fn(() => 1);
            const filterGetTime1 = vi.fn(() => 3);
            const valueGetTime = vi.fn(() => 2);

            const between = filters.between({ getTime: valueGetTime }, [{ getTime: filterGetTime }, { getTime: filterGetTime1 }], 'tr');

            expect(between).toBeTruthy();
        });

        it('When value has getTime func and smaller than filter[0]', () => {
            const filter = 1;
            const filter1 = 2;
            const value = 2;

            const between = filters.between(value, [filter, filter1], 'tr');

            expect(between).toBeTruthy();
        });
    });

    describe('lt filter test', () => {
        checkParametersNullOrUndefined('lt');
        it('When value has getTime func and smaller than filter', () => {
            const filterGetTime = vi.fn(() => 2);
            const valueGetTime = vi.fn(() => 1);

            const lt = filters.lt({ getTime: valueGetTime }, { getTime: filterGetTime });

            expect(lt).toBeTruthy();
        });

        it('When value smaller than filter', () => {
            const filter = 2;
            const value = 1;

            const lt = filters.lt(value, filter);

            expect(lt).toBeTruthy();
        });
    });

    describe('lte filter test', () => {
        checkParametersNullOrUndefined('lte');
        it('When value has getTime func and smaller than filter', () => {
            const filterGetTime = vi.fn(() => 2);
            const valueGetTime = vi.fn(() => 1);

            const lte = filters.lte({ getTime: valueGetTime }, { getTime: filterGetTime });

            expect(lte).toBeTruthy();
        });

        it('When value  smaller than filter', () => {
            const filter = 2;
            const value = 1;

            const lte = filters.lte(value, filter);

            expect(lte).toBeTruthy();
        });
    });

    describe('gt filter test', () => {
        checkParametersNullOrUndefined('gt');
        it('When value has getTime func and smaller than filter[0]', () => {
            const filterGetTime = vi.fn(() => 2);
            const valueGetTime = vi.fn(() => 1);

            const gt = filters.gt({ getTime: valueGetTime }, { getTime: filterGetTime });

            expect(gt).toBeFalsy();
        });

        it('When value smaller than filter[0]', () => {
            const filter = 2;
            const value = 1;

            const gt = filters.gt(value, filter);

            expect(gt).toBeFalsy();
        });
    });
    describe('gte filter test', () => {
        checkParametersNullOrUndefined('gte');
        it('When value has getTime func and smaller than filter[0]', () => {
            const filterGetTime = vi.fn(() => 2);
            const valueGetTime = vi.fn(() => 1);

            const gte = filters.gte({ getTime: valueGetTime }, { getTime: filterGetTime });

            expect(gte).toBeFalsy();
        });

        it('When value parameter smaller than filter[0]', () => {
            const filter = 2;
            const value = 1;

            const gte = filters.gte(value, filter);

            expect(gte).toBeFalsy();
        });
    });

    describe('dateIs filter test', () => {
        checkParametersNullOrUndefined('dateIs');
        it('When value and filter are equal', () => {
            const filter = new Date(1993, 6, 28, 14, 39, 7);
            const value = new Date(1993, 6, 28, 14, 39, 7);

            const dateIs = filters.dateIs(value, filter);

            expect(dateIs).toBeTruthy();
        });
    });

    describe('dateIsNot filter test', () => {
        checkParametersNullOrUndefined('dateIsNot');
        it('When value and filter are not equal', () => {
            const filter = new Date(1993, 6, 28, 14, 39, 7);
            const value = new Date(1993, 6, 28, 14, 39, 7);

            const dateIsNot = filters.dateIsNot(value, filter);

            expect(dateIsNot).toBeFalsy();
        });
    });

    describe('dateBefore filter test', () => {
        checkParametersNullOrUndefined('dateBefore');
        it('When filter value bigger than value', () => {
            const filter = new Date(1996, 6, 28, 14, 39, 8);
            const value = new Date(1993, 6, 28, 14, 39, 7);

            const dateBefore = filters.dateBefore(value, filter);

            expect(dateBefore).toBeTruthy();
        });
    });

    describe('dateAfter filter test', () => {
        checkParametersNullOrUndefined('dateAfter');
        it('When value is not smaller than value', () => {
            const filter = new Date(1996, 6, 28, 14, 39, 8);
            const value = new Date(1993, 6, 28, 14, 39, 7);

            const dateAfter = filters.dateAfter(value, filter);

            expect(dateAfter).toBeFalsy();
        });
    });
});
