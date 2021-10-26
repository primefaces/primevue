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
                        <td>style</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Style class of the component input field.</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Inline style of the component.</td>
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