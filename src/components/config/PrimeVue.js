import {reactive,inject} from 'vue';

const defaultOptions = {
    ripple: false,
    locale: {
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
        clear: 'Clear',
        weekHeader: 'Wk',
        firstDayOfWeek: 0,
        dateFormat: 'mm/dd/yy',
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong',
        passwordPrompt: 'Enter a password'
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
        let configOptions = options ? {...defaultOptions, ...options} : {...defaultOptions};
        const PrimeVue = {
            config: reactive(configOptions)
        };
        app.config.globalProperties.$primevue = PrimeVue;
        app.provide(PrimeVueSymbol, PrimeVue);
    }
};