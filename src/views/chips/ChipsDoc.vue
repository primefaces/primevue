<template>
	<AppDoc name="ChipsDemo" :sources="sources" github="chips/ChipsDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Chips from 'primevue/chips';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/chips/chips.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>An array as the value can be bound using the standard v-model directive.</p>
<pre v-code><code>
&lt;Chips v-model="value" /&gt;

</code></pre>

		<h5>Custom Content</h5>
		<p>A chip is customized using the <i>chip</i> template where the chip value is passed to the slotProps with the value property.</p>
<pre v-code><code><template v-pre>
&lt;Chips v-model="value"&gt;
	&lt;template #chip="slotProps"&gt;
		&lt;div&gt;
			&lt;span&gt;{{slotProps.value}} - (active) &lt;/span&gt;
			&lt;i class="pi pi-user-plus" style="font-size: 14px"&gt;&lt;/i&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/Chips&gt;
</template>
</code></pre>

		<h5>Properties</h5>
        <p>Any property such as name and placeholder are passed to the underlying input element. Following are the additional properties to configure the component.</p>
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
                        <td>array</td>
                        <td>null</td>
                        <td>Value of the component.</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Maximum number of entries allowed.</td>
                    </tr>
                    <tr>
                        <td>separator</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Separator char to add an item when pressed in addition to the enter key. Currently only possible value is ","</td>
                    </tr>
                    <tr>
                        <td>addOnBlur</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to add an item when the input loses focus.</td>
                    </tr>
                    <tr>
                        <td>allowDuplicate</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to allow duplicate values or not.</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that the element should be disabled.</td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Placeholder text for the input.</td>
                    </tr>
                    <tr>
                        <td>inputId</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the component input field.</td>
                    </tr>
                    <tr>
                        <td>inputClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the input field.</td>
                    </tr>
                    <tr>
                        <td>inputStyle</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Inline style of the input field.</td>
                    </tr>
                    <tr>
                        <td>inputProps</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Events</h5>
        <p>Any valid event such as focus, blur and input are passed to the underlying input element. Following are the additional events to configure the component.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>add</td>
                        <td>originalEvent: Browser event <br/>
                            value: Added item value</td>
                        <td>Callback to invoke when a chip is added.</td>
                    </tr>
                    <tr>
                        <td>remove</td>
                        <td>originalEvent: Browser event <br/>
                            value: Removed item value</td>
                        <td>Callback to invoke when a chip is removed.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Slots</h5>
		<div class="doc-tablewrapper">
            <table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>chip</td>
                        <td>value: Value of the component</td>
                    </tr>
				</tbody>
			</table>
        </div>

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
                        <td>p-chips</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-chips-token</td>
                        <td>Chip element container.</td>
                    </tr>
                    <tr>
                        <td>p-chips-token-icon</td>
                        <td>Icon of a chip.</td>
                    </tr>
                    <tr>
                        <td>p-chips-token-label</td>
                        <td>label of a chip.</td>
                    </tr>
                    <tr>
                        <td>p-chips-input-token</td>
                        <td>Container of input element.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Accessibility</h5>
        <h6>Screen Reader</h6>
        <p>Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props.
        Chip list uses <i>listbox</i> role with <i>aria-orientation</i> set to horizontal whereas each chip has the <i>option</i> role with <i>aria-label</i> set to the label of the chip.</p>

<pre v-code><code>
&lt;label for="chips1"&gt;Tags&lt;/label&gt;
&lt;Chips inputId="chips1" /&gt;

&lt;span id="chips2"&gt;Tags&lt;/span&gt;
&lt;Chips aria-labelledby="chips2" /&gt;

&lt;Chips aria-label="Tags" /&gt;

</code></pre>

        <h6>Input Field Keyboard Support</h6>
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
                        <td>Moves focus to the input element</td>
                    </tr>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Adds a new chips using the input field value.</td>
                    </tr>
                    <tr>
                        <td><i>backspace</i></td>
                        <td>Deletes the previous chip if the input field is empty.</td>
                    </tr>
                    <tr>
                        <td><i>left arrow</i></td>
                        <td>Moves focus to the previous chip if available and input field is empty.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h6>Chip Keyboard Support</h6>
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
                        <td><i>left arrow</i></td>
                        <td>Moves focus to the previous chip if available.</td>
                    </tr>
                    <tr>
                        <td><i>right arrow</i></td>
                        <td>Moves focus to the next chip, if there is none then input field receives the focus.</td>
                    </tr>
                    <tr>
                        <td><i>backspace</i></td>
                        <td>Deletes the chips and adds focus to the input field.</td>
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
    <div class="p-fluid">
        <div class="card">
            <h5>Basic</h5>
            <Chips v-model="value1" />

            <h5>Comma Separator</h5>
            <Chips v-model="value2" separator="," />

            <h5>Template</h5>
            <Chips v-model="value3">
                <template #chip="slotProps">
                    <div>
                        <span>{{slotProps.value}} - (active) </span>
                        <i class="pi pi-user-plus" style="font-size: 14px"></i>
                    </div>
                </template>
            </Chips>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null
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
    <div class="p-fluid">
        <div class="card">
            <h5>Basic</h5>
            <Chips v-model="value1" />

            <h5>Comma Separator</h5>
            <Chips v-model="value2" separator="," />

            <h5>Template</h5>
            <Chips v-model="value3">
                <template #chip="slotProps">
                    <div>
                        <span>{{slotProps.value}} - (active) </span>
                        <i class="pi pi-user-plus" style="font-size: 14px"></i>
                    </div>
                </template>
            </Chips>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const value1 = ref();
        const value2 = ref();
        const value3 = ref();

        return { value1, value2, value3 }
    }
}
<\\/script>

`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/chips/chips.min.js"><\\/script>`,
                    content: `<div id="app">
            <div class="p-fluid">
                <div class="card">
                    <h5>Basic</h5>
                    <p-chips v-model="value1"></p-chips>

                    <h5>Comma Separator</h5>
                    <p-chips v-model="value2" separator=","></p-chips>

                    <h5>Template</h5>
                    <p-chips v-model="value3">
                        <template #chip="slotProps">
                            <div>
                                <span>{{slotProps.value}} - (active) </span>
                                <i class="pi pi-user-plus" style="font-size: 14px"></i>
                            </div>
                        </template>
                    </p-chips>
                </div>
            </div>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const value1 = ref();
                const value2 = ref();
                const value3 = ref();

                return { value1, value2, value3 }
            },
            components: {
                "p-chips": primevue.chips
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