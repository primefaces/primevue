<template>
    <AppDoc name="FocusTrapDemo" :sources="sources">
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
        <pre v-code><code>
&lt;div v-focustrap&gt;
    //content
&lt;/div&gt;

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
                        <td>disabled</td>
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
    <div class="focustrap-demo">
        <div class="flex justify-content-center p-fluid">
            <div v-focustrap class="card">
                <div class="field">
                    <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
                </div>
                <div class="field">
                    <div class="p-input-icon-right">
                        <i class="pi pi-envelope" />
                        <InputText id="email" v-model="email" type="email" placeholder="Email" />
                    </div>
                </div>
                <div class="field">
                    <div class="p-float-label">
                        <Password v-model="password">
                            <template #header>
                                <h6>Pick a password</h6>
                            </template>
                            <template #footer>
                                <Divider />
                                <p class="mt-2">Suggestions</p>
                                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                    <li>At least one lowercase</li>
                                    <li>At least one uppercase</li>
                                    <li>At least one numeric</li>
                                    <li>Minimum 8 characters</li>
                                </ul>
                            </template>
                        </Password>
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="field-checkbox">
                    <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                    <label for="accept">I agree to the terms and conditions*</label>
                </div>
                <Button type="submit" label="Submit" class="mt-2" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            email: null,
            password: null,
            accept: null
        };
    }
};
<\\/script>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div class="focustrap-demo">
        <div class="flex justify-content-center p-fluid">
            <div v-focustrap class="card">
                <div class="field">
                    <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
                </div>
                <div class="field">
                    <div class="p-input-icon-right">
                        <i class="pi pi-envelope" />
                        <InputText id="email" v-model="email" type="email" placeholder="Email" />
                    </div>
                </div>
                <div class="field">
                    <div class="p-float-label">
                        <Password v-model="password">
                            <template #header>
                                <h6>Pick a password</h6>
                            </template>
                            <template #footer>
                                <Divider />
                                <p class="mt-2">Suggestions</p>
                                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                    <li>At least one lowercase</li>
                                    <li>At least one uppercase</li>
                                    <li>At least one numeric</li>
                                    <li>Minimum 8 characters</li>
                                </ul>
                            </template>
                        </Password>
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="field-checkbox">
                    <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                    <label for="accept">I agree to the terms and conditions*</label>
                </div>
                <Button type="submit" label="Submit" class="mt-2" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const name = ref(null),
        const email = ref(null),
        const password = ref(null),
        const accept = ref(null),

        return { name, email, password, accept };
    };
};
<\\/script>`
                },
                'browser-source': {
                    tabName: 'Browser Demo Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/password/password.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/divider/divider.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/checkbox/checkbox.min.js"><\\/script>`,
                    content: `
<div id="app">
    <div class="focustrap-demo">
        <div class="flex justify-content-center p-fluid">
            <div v-focustrap class="card">
                <div class="field">
                    <p-inputtext id="input" v-model="name" type="text" placeholder="Name" autofocus></p-inputtext>
                </div>
                <div class="field">
                    <div class="p-input-icon-right">
                        <i class="pi pi-envelope" />
                        <p-inputtext id="email" v-model="email" type="email" placeholder="Email"></p-inputtext>
                    </div>
                </div>
                <div class="field">
                    <div class="p-float-label">
                        <p-password v-model="password">
                            <template #header>
                                <h6>Pick a password</h6>
                            </template>
                            <template #footer>
                                <p-divider></p-divider>
                                <p class="mt-2">Suggestions</p>
                                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                    <li>At least one lowercase</li>
                                    <li>At least one uppercase</li>
                                    <li>At least one numeric</li>
                                    <li>Minimum 8 characters</li>
                                </ul>
                            </template>
                        </p-password>
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="field-checkbox">
                    <p-checkbox id="accept" v-model="accept" name="accept" value="Accept"></p-checkbox>
                    <label for="accept">I agree to the terms and conditions*</label>
                </div>
                <p-button type="submit" label="Submit" class="mt-2"></p-button>
            </div>
        </div>
    </div>
</div>

<script type="module">
    const { createApp, ref } = Vue;
    const FocusTrap = primevue.focustrap;

    const App = {
        setup() {
            const name = ref(null),
            const email = ref(null),
            const password = ref(null),
            const accept = ref(null),

            return { name, email, password, accept };
        },
        components: {
            "p-inputtext": primevue.inputtext,
            "p-button": primevue.button,
            "p-password": primevue.password,
            "p-divider": primevue.divider,
            "p-checkbox": primevue.checkbox,
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
