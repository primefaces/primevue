import { FilterMatchMode } from 'primevue/api';
import { inject, reactive } from 'vue';

const defaultOptions = {
    ripple: false,
    inputStyle: 'outlined',
    locale: {
        startsWith: 'Starts with',
        contains: 'Contains',
        notContains: 'Not contains',
        endsWith: 'Ends with',
        equals: 'Equals',
        notEquals: 'Not equals',
        noFilter: 'No Filter',
        lt: 'Less than',
        lte: 'Less than or equal to',
        gt: 'Greater than',
        gte: 'Greater than or equal to',
        dateIs: 'Date is',
        dateIsNot: 'Date is not',
        dateBefore: 'Date is before',
        dateAfter: 'Date is after',
        clear: 'Clear',
        apply: 'Apply',
        matchAll: 'Match All',
        matchAny: 'Match Any',
        addRule: 'Add Rule',
        removeRule: 'Remove Rule',
        accept: 'Yes',
        reject: 'No',
        choose: 'Choose',
        upload: 'Upload',
        cancel: 'Cancel',
        completed: 'Completed',
        pending: 'Pending',
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        chooseYear: 'Choose Year',
        chooseMonth: 'Choose Month',
        chooseDate: 'Choose Date',
        prevDecade: 'Previous Decade',
        nextDecade: 'Next Decade',
        prevYear: 'Previous Year',
        nextYear: 'Next Year',
        prevMonth: 'Previous Month',
        nextMonth: 'Next Month',
        prevHour: 'Previous Hour',
        nextHour: 'Next Hour',
        prevMinute: 'Previous Minute',
        nextMinute: 'Next Minute',
        prevSecond: 'Previous Second',
        nextSecond: 'Next Second',
        am: 'am',
        pm: 'pm',
        today: 'Today',
        weekHeader: 'Wk',
        firstDayOfWeek: 0,
        dateFormat: 'mm/dd/yy',
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong',
        passwordPrompt: 'Enter a password',
        emptyFilterMessage: 'No results found', // @deprecated Use 'emptySearchMessage' option instead.
        searchMessage: '{0} results are available',
        selectionMessage: '{0} items selected',
        emptySelectionMessage: 'No selected item',
        emptySearchMessage: 'No results found',
        emptyMessage: 'No available options',
        aria: {
            trueLabel: 'True',
            falseLabel: 'False',
            nullLabel: 'Not Selected',
            star: '1 star',
            stars: '{star} stars',
            selectAll: 'All items selected',
            unselectAll: 'All items unselected',
            close: 'Close',
            previous: 'Previous',
            next: 'Next',
            navigation: 'Navigation'
        }
    },
    filterMatchModeOptions: {
        text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
        numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
        date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    },
    zIndex: {
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100
    }
};

const PrimeVueSymbol = Symbol();

export function usePrimeVue() {
    const PrimeVue = inject(PrimeVueSymbol);

    if (!PrimeVue) {
        throw new Error('PrimeVue is not installed!');
    }

    return PrimeVue;
}

export default {
    install: (app, options) => {
        let configOptions = options ? { ...defaultOptions, ...options } : { ...defaultOptions };
        const PrimeVue = {
            config: reactive(configOptions)
        };

        app.config.globalProperties.$primevue = PrimeVue;
        app.provide(PrimeVueSymbol, PrimeVue);
    }
};
