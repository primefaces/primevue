<template>
    <AppDoc name="FocusTrapDemo" :sources="sources" github="focustrap/FocusTrapDemo.vue">
        <h5>Import via Module</h5>
        <pre v-code.script><code>
import FocusTrap from 'primevue/focustrap';

app.directive('focustrap', FocusTrap);

</code></pre>

        <h5>Import via CDN</h5>
        <pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/focustrap/focustrap.min.js"&gt;&lt;/script&gt;

</code></pre>

        <pre v-code.script><code>
directives: {
    'focustrap': FocusTrap
}

</code></pre>

        <h5>Getting Started</h5>
        <p>FocusTrap is applied to a container element with the v-focustrap directive.</p>
        <pre v-code><code><template v-pre>
&lt;div v-focustrap&gt;
    //content
&lt;/div&gt;
</template>
</code></pre>

        <h5>Properties</h5>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>focusTrapDisabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When set as true, focus wouldn't be managed.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Events</h5>
        <p>Directive has no events.</p>

        <h5>Dependencies</h5>
        <p>None.</p>
    </AppDoc>
</template>

<script>
export default {
    data() {
        return {
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <div class="card" v-focustrap>
            <h5>Input</h5>
            <InputText id="input" v-model="value1" type="text" size="30" />

            <h5>Float Label</h5>
            <span class="p-float-label">
                <InputText id="float-input" v-model="value2" type="text" size="30" />
                <label for="float-input">Username</label>
            </span>

            <h5>Disabled Input</h5>
            <InputText id="disabled-input" v-model="value3" type="text" size="30" disabled />

            <h5>Input with tabindex -1</h5>
            <InputText v-model="value4" type="text" size="30" tabindex="-1" />

            <h5>Button</h5>
            <Button type="button" icon="pi pi-check" label="Check"></Button>

            <h5>Disabled Button</h5>
            <Button type="button" icon="pi pi-check" disabled label="Disabled"></Button>

            <h5>Button with tabindex -1</h5>
            <Button type="button" icon="pi pi-check" tabindex="-1" label="Check"></Button>

            <h5>Dropdown</h5>
            <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a Country" :showClear="true" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            selectedCountry: null,
            countries: [
                { name: 'Australia', code: 'AU' },
                { name: 'Brazil', code: 'BR' },
                { name: 'China', code: 'CN' },
                { name: 'Egypt', code: 'EG' },
                { name: 'France', code: 'FR' },
                { name: 'Germany', code: 'DE' },
                { name: 'India', code: 'IN' },
                { name: 'Japan', code: 'JP' },
                { name: 'Spain', code: 'ES' },
                { name: 'United States', code: 'US' }
            ]
        };
    }
};
<\\/script>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <div class="card" v-focustrap>
            <h5>Input</h5>
            <InputText id="input" v-model="value1" type="text" size="30" />

            <h5>Float Label</h5>
            <span class="p-float-label">
                <InputText id="float-input" v-model="value2" type="text" size="30" />
                <label for="float-input">Username</label>
            </span>

            <h5>Disabled Input</h5>
            <InputText id="disabled-input" v-model="value3" type="text" size="30" disabled />

            <h5>Input with tabindex -1</h5>
            <InputText v-model="value4" type="text" size="30" tabindex="-1" />

            <h5>Button</h5>
            <Button type="button" icon="pi pi-check" label="Check"></Button>

            <h5>Disabled Button</h5>
            <Button type="button" icon="pi pi-check" disabled label="Disabled"></Button>

            <h5>Button with tabindex -1</h5>
            <Button type="button" icon="pi pi-check" tabindex="-1" label="Check"></Button>

            <h5>Dropdown</h5>
            <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a Country" :showClear="true" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const value1 = ref(null),
        const value2 = ref(null),
        const value3 = ref(null),
        const value4 = ref(null),
        const selectedCountry: null,
        const countries = ref([
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ]);

        return { value1, value2, value3, value4, countries, selectedCountry };
    };
};
<\\/script>`
                },
                'browser-source': {
                    tabName: 'Browser Demo Source',
                    content: `
<div id="app">
    <div class="card" v-focustrap>
        <h5>Input</h5>
        <p-inputtext id="input" v-model="value1" type="text" size="30"></p-inputtext>

        <h5>Float Label</h5>
        <span class="p-float-label">
            <p-inputtext id="float-input" v-model="value2" type="text" size="30"></p-inputtext>
            <label for="float-input">Username</label>
        </span>

        <h5>Disabled Input</h5>
        <p-inputtext id="disabled-input" v-model="value3" type="text" size="30" disabled></p-inputtext>

        <h5>Input with tabindex -1</h5>
        <p-inputtext v-model="value4" type="text" size="30" tabindex="-1"></p-inputtext>

        <h5>Button</h5>
        <p-button type="button" icon="pi pi-check" label="Check"></p-button>

        <h5>Disabled Button</h5>
        <p-button type="button" icon="pi pi-check" disabled label="Disabled"></p-button>

        <h5>Button with tabindex -1</h5>
        <p-button type="button" icon="pi pi-check" tabindex="-1" label="Check"></p-button>

        <h5>Dropdown</h5>
        <p-dropdown v-model="selectedCountry" :options="countries" option-label="name" placeholder="Select a Country" :show-clear="true"></p-dropdown>
    </div>
</div>

<script type="module">
    const { createApp, ref } = Vue;
    const FocusTrap = primevue.focustrap;
    
    const App = {
        setup() {
            const value1 = ref(null);
            const value2 = ref(null);
            const value3 = ref(null);
            const value4 = ref(null);
            const selectedCountry = ref(null);
            const countries = ref([
                { name: 'Australia', code: 'AU' },
                { name: 'Brazil', code: 'BR' },
                { name: 'China', code: 'CN' },
                { name: 'Egypt', code: 'EG' },
                { name: 'France', code: 'FR' },
                { name: 'Germany', code: 'DE' },
                { name: 'India', code: 'IN' },
                { name: 'Japan', code: 'JP' },
                { name: 'Spain', code: 'ES' },
                { name: 'United States', code: 'US' }
            ]);

            return { value1, value2, value3, value4, countries, selectedCountry };
        },
        components: {
            "p-button": primevue.button,
            "p-inputtext": primevue.inputtext,
            "p-dropdown": primevue.dropdown
        }
    }

    createApp(App)
        .use(primevue.config.default)
        .directive("focustrap", FocusTrap)
        .mount("#app");

<\\/script>`
                }
            }
        };
    }
};
</script>
