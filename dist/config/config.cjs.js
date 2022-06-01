'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var api = require('primevue/api');

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
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
        monthNames: ["January","February","March","April","May","June","July","August","September","October","November","December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: 'Today',
        weekHeader: 'Wk',
        firstDayOfWeek: 0,
        dateFormat: 'mm/dd/yy',
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong',
        passwordPrompt: 'Enter a password',
        emptyFilterMessage: 'No results found',
        emptyMessage: 'No available options'
    },
    filterMatchModeOptions: {
        text: [
            api.FilterMatchMode.STARTS_WITH,
            api.FilterMatchMode.CONTAINS,
            api.FilterMatchMode.NOT_CONTAINS,
            api.FilterMatchMode.ENDS_WITH,
            api.FilterMatchMode.EQUALS,
            api.FilterMatchMode.NOT_EQUALS
        ],
        numeric: [
            api.FilterMatchMode.EQUALS,
            api.FilterMatchMode.NOT_EQUALS,
            api.FilterMatchMode.LESS_THAN,
            api.FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
            api.FilterMatchMode.GREATER_THAN,
            api.FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
        ],
        date: [
            api.FilterMatchMode.DATE_IS,
            api.FilterMatchMode.DATE_IS_NOT,
            api.FilterMatchMode.DATE_BEFORE,
            api.FilterMatchMode.DATE_AFTER
        ]
    },
    zIndex: {
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100
    }
};

const PrimeVueSymbol = Symbol();

function usePrimeVue() {
    const PrimeVue = vue.inject(PrimeVueSymbol);
    if (!PrimeVue) {
        throw new Error('PrimeVue is not installed!');
    } 
    
    return PrimeVue;
}

var PrimeVue = {
    install: (app, options) => {
        let configOptions = options ? {...defaultOptions, ...options} : {...defaultOptions};
        const PrimeVue = {
            config: vue.reactive(configOptions)
        };
        app.config.globalProperties.$primevue = PrimeVue;
        app.provide(PrimeVueSymbol, PrimeVue);
    }
};

exports["default"] = PrimeVue;
exports.usePrimeVue = usePrimeVue;
