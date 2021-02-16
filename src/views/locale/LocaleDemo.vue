<template>
    <div>
        <div class="content-section documentation">
            <h1>Internationalization and Localization</h1>
            <p>The Locale API allows setting <b>i18n</b> and <b>l7n</b> options globally for the components.</p>

            <h5>Getting Started</h5>
            <p>Locale values are stored in the global configuration that becomes accessible after installing the PrimeVue.</p>
<pre v-code.script><code>
import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue);

</code></pre>

            <p>Second parameter of the <i>use</i> function can be used to initiate the locale during PrimeVue installation.</p>
<pre v-code.script><code>
app.use(PrimeVue, {
    locale: {
        accept: 'Aceptar',
        reject: 'Rechazar',
        //...
    }
});

</code></pre>

            <p>The locale configuration is reactive so that any changes are instantly reflected in the UI. Suppose you are doing a multi language
                application and need to change the language dynamically.</p>

            <h6>Options API</h6>
<pre v-code.script><code>
export default {
    methods: {
        changeToSpanish() {
            this.$primevue.config.locale.accept = 'Aceptar';
            this.$primevue.config.locale.reject = 'Rechazar';
        }
    }
}

</code></pre>

            <h6>Composition API</h6>
<pre v-code.script><code>

import { usePrimeVue } from "primevue/config";
import { onMounted } from "vue";

export default defineComponent({
    setup() {
        const changeToSpanish = () => {
            const primevue = usePrimeVue();
            primevue.config.locale.accept = 'Aceptar';
            primevue.config.locale.reject = 'Rechazar';
        }

        onMounted(async () => {
            changeToSpanish()
        }
    }
});

</code></pre>



            <h5>Locale Options</h5>
            <div class="doc-tablewrapper">
                <table class="doc-table">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>accept</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>reject</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>choose</td>
                            <td>Choose</td>
                        </tr>
                        <tr>
                            <td>upload</td>
                            <td>Upload</td>
                        </tr>
                        <tr>
                            <td>cancel</td>
                            <td>Cancel</td>
                        </tr>
                        <tr>
                            <td>dayNames</td>
                            <td>["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]</td>
                        </tr>
                        <tr>
                            <td>dayNamesShort</td>
                            <td>["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]</td>
                        </tr>
                        <tr>
                            <td>dayNamesMin</td>
                            <td>["Su","Mo","Tu","We","Th","Fr","Sa"]</td>
                        </tr>
                        <tr>
                            <td>monthNames</td>
                            <td>["January","February","March","April","May","June","July","August","September","October","November","December"]</td>
                        </tr>
                        <tr>
                            <td>monthNamesShort</td>
                            <td>["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]</td>
                        </tr>
                        <tr>
                            <td>today</td>
                            <td>Today</td>
                        </tr>
                        <tr>
                            <td>today</td>
                            <td>Today</td>
                        </tr>
                        <tr>
                            <td>weekHeader</td>
                            <td>Wk</td>
                        </tr>
                        <tr>
                            <td>firstDayOfWeek</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>dateFormat</td>
                            <td>mm/dd/yy</td>
                        </tr>
                        <tr>
                            <td>weak</td>
                            <td>Weak</td>
                        </tr>
                        <tr>
                            <td>medium</td>
                            <td>Medium</td>
                        </tr>
                        <tr>
                            <td>strong</td>
                            <td>Strong</td>
                        </tr>
                        <tr>
                            <td>passwordPrompt</td>
                            <td>Enter a password</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
