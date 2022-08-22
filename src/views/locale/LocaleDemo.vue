<template>
    <div>
        <div class="content-section documentation">
            <h1>Internationalization and Localization</h1>
            <p>The Locale API allows setting <b>i18n</b> and <b>l7n</b> options globally for the components.</p>

            <h5>Getting Started</h5>
            <p>Locale values are stored in the global configuration that becomes accessible after installing the PrimeVue.</p>
<CodeHighlight lang="javascript">
import PrimeVue from 'primevue/config';

Vue.use(PrimeVue);
</CodeHighlight>

            <p>Second parameter of the <i>use</i> function can be used to initiate the locale during PrimeVue installation.</p>
<CodeHighlight lang="javascript">
Vue.use(PrimeVue, {
    locale: {
        accept: 'Aceptar',
        reject: 'Rechazar',
        //...
    }
});
</CodeHighlight>

            <p>The locale configuration is reactive so that any changes are instantly reflected in the UI. Suppose you are doing a multi language
                application and need to change the language dynamically.</p>

            <h6>Options API</h6>
<CodeHighlight lang="javascript">
export default {
    methods: {
        changeToSpanish() {
            this.$primevue.config.locale.accept = 'Aceptar';
            this.$primevue.config.locale.reject = 'Rechazar';
        }
    }
}
</CodeHighlight>

            <h5>Locale Options</h5>
<CodeHighlight lang="javascript">
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
}
</CodeHighlight>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
li {
    line-height: 1.5;
}
</style>
