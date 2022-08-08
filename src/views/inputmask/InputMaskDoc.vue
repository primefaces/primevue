<template>
    <AppDoc name="InputMaskDemo" :sources="sources" github="inputmask/InputMaskDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import InputMask from 'primevue/inputmask';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/inputmask/inputmask.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>A model can be bound using the standard v-model directive.</p>
<pre v-code><code>
&lt;InputMask v-model="value" mask="99-999999" /&gt;

</code></pre>

		<h5>Mask</h5>
        <p>Mask format can be a combination of the the following built-in definitions.</p>

        <ul>
            <li>
                a - Alpha character (A-Z,a-z)
            </li>
            <li>
                9 - Numeric character (0-9)
            </li>
            <li>
                * - Alpha numberic character (A-Z,a-z,0-9)
            </li>
        </ul>
<pre v-code><code>
&lt;InputMask v-model="value" mask="a*-999-a999" /&gt;

</code></pre>

        <h5>SlotChar</h5>
        <p>Underscore is the default placeholder for a mask and this can be customized using <i>slotChart</i> option.</p>
<pre v-code><code>
&lt;InputMask v-model="value" mask="99/99/9999" slotChar="mm/dd/yyyy" /&gt;

</code></pre>
        <h5>Optional Values</h5>
        <p>If the input does not complete the mask definition, it is cleared by default.
            Use <i>autoClear</i> property to control this behavior. In addition, certain part of
            a mask can be made optional by using ? symbol where anything after the question
            mark becomes optional.</p>
<pre v-code><code>
&lt;InputMask v-model="value" mask="(999) 999-9999? x99999" /&gt;

</code></pre>

		<h5>Properties</h5>
		<p>InputText passes any valid attribute to the underlying input element. In addition;</p>
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
                        <td>modelValue</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Value of the component.</td>
                    </tr>
                    <tr>
                        <td>mask</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Mask pattern.</td>
                    </tr>
                    <tr>
                        <td>slotChar</td>
                        <td>string</td>
                        <td>_</td>
                        <td>Placeholder character in mask, default is underscore.</td>
                    </tr>
                    <tr>
                        <td>autoClear</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Clears the incomplete value on blur.</td>
                    </tr>
                    <tr>
                        <td>unmask</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Defines if model sets the raw unmasked value to bound value or the formatted mask value.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Events</h5>
        <p>Any valid event such as focus, blur and input are passed to the underlying input element.</p>

		<h5>Styling</h5>
		<p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>p-inputmask p-inputtext</td>
                        <td>Input element</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Accessibility</h5>
        <h6>Screen Reader</h6>
        <p>InputMask component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via <i>label</i> tag combined with <i>id</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props.</p>

<pre v-code><code>
&lt;label for="date"&gt;Date&lt;/label&gt;
&lt;InputMask id="date" /&gt;

&lt;span id="phone"&gt;Phone&lt;/span&gt;
&lt;InputMask aria-labelledby="phone" /&gt;

&lt;InputMask aria-label="Age" /&gt;

</code></pre>

        <h6>Keyboard Support</h6>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i>tab</i></td>
                        <td>Moves focus to the input.</td>
                    </tr>
                </tbody>
            </table>
        </div>

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
        <div class="p-fluid formgrid grid">
            <div class="field col-12 md:col-4">
                <label for="basic">Basic</label>
                <InputMask mask="99-999999" v-model="val1" placeholder="99-999999" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="ssn">SSN</label>
                <InputMask mask="999-99-9999" v-model="val2" placeholder="999-99-9999" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="date">Date</label>
                <InputMask mask="99/99/9999" v-model="val3" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="Phone">Phone</label>
                <InputMask mask="(999) 999-9999" v-model="val4" placeholder="(999) 999-9999" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="phoneext">Phone Ext</label>
                <InputMask mask="(999) 999-9999? x99999" v-model="val5" placeholder="(999) 999-9999? x99999"/>
            </div>

            <div class="field col-12 md:col-4">
                <label for="serial">Serial</label>
                <InputMask mask="a*-999-a999" v-model="val6" placeholder="a*-999-a999" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            val1: null,
            val2: null,
            val3: null,
            val4: null,
            val5: null,
            val6: null
        }
    }
}
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <div class="p-fluid formgrid grid">
            <div class="field col-12 md:col-4">
                <label for="basic">Basic</label>
                <InputMask mask="99-999999" v-model="val1" placeholder="99-999999" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="ssn">SSN</label>
                <InputMask mask="999-99-9999" v-model="val2" placeholder="999-99-9999" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="date">Date</label>
                <InputMask mask="99/99/9999" v-model="val3" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="Phone">Phone</label>
                <InputMask mask="(999) 999-9999" v-model="val4" placeholder="(999) 999-9999" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="phoneext">Phone Ext</label>
                <InputMask mask="(999) 999-9999? x99999" v-model="val5" placeholder="(999) 999-9999? x99999"/>
            </div>

            <div class="field col-12 md:col-4">
                <label for="serial">Serial</label>
                <InputMask mask="a*-999-a999" v-model="val6" placeholder="a*-999-a999" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const val1 = ref();
        const val2 = ref();
        const val3 = ref();
        const val4 = ref();
        const val5 = ref();
        const val6 = ref();

        return { val1, val2, val3, val4, val5, val6 }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/inputmask/inputmask.min.js"><\\/script>`,
                    content: `<div id="app">
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-4">
                    <label for="basic">Basic</label>
                    <p-inputmask mask="99-999999" v-model="val1" placeholder="99-999999"></p-inputmask>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="ssn">SSN</label>
                    <p-inputmask mask="999-99-9999" v-model="val2" placeholder="999-99-9999"></p-inputmask>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="date">Date</label>
                    <p-inputmask mask="99/99/9999" v-model="val3" placeholder="99/99/9999" slot-char="mm/dd/yyyy"></p-inputmask>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="Phone">Phone</label>
                    <p-inputmask mask="(999) 999-9999" v-model="val4" placeholder="(999) 999-9999"></p-inputmask>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="phoneext">Phone Ext</label>
                    <p-inputmask mask="(999) 999-9999? x99999" v-model="val5" placeholder="(999) 999-9999? x99999"></p-inputmask>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="serial">Serial</label>
                    <p-inputmask mask="a*-999-a999" v-model="val6" placeholder="a*-999-a999"></p-inputmask>
                </div>
            </div>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const val1 = ref();
                const val2 = ref();
                const val3 = ref();
                const val4 = ref();
                const val5 = ref();
                const val6 = ref();

                return { val1, val2, val3, val4, val5, val6 }
            },
            components: {
                "p-inputmask": primevue.inputmask
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>
`
                }
            }
        }
    }
}
</script>