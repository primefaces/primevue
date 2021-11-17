<template>
	<AppDoc name="RadioButtonDemo" :sources="sources" github="radiobutton/RadioButtonDemo.vue" >
        <h5>Import via Module</h5>
<pre v-code.script><code>
import RadioButton from 'primevue/radiobutton';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/radiobutton/radiobutton.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Two-way value binding is defined using the standard v-model directive.</p>
<pre v-code><code>
&lt;RadioButton name="city" value="Chicago" v-model="city" /&gt;
&lt;RadioButton name="city" value="Los Angeles" v-model="city" /&gt;

</code></pre>
<pre v-code.script><code>
export default {
	data() {
		return {
			city: null
		}
	}
}

</code></pre>
				<p>As model is two-way binding enabled, giving a default value to the model is enough to display a radio button as checked by default.</p>
<pre v-code.script><code>
export default {
	data() {
		return {
			city: 'Chicago'
		}
	}
}

</code></pre>

		<h5>Properties</h5>
        <p>Any property such as name and autofocus are passed to the underlying input element. Following is the additional property to configure the component.</p>
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
                        <td>value</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Value of the checkbox.</td>
                    </tr>
                    <tr>
                        <td>modelValue</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Value binding of the checkbox.</td>
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
        <p>Any valid event such as focus and blur.</p>
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
                        <td>click</td>
                        <td>-</td>
                        <td>Callback to invoke on radio button click.</td>
                    </tr>
                    <tr>
                        <td>change</td>
                        <td>-</td>
                        <td>Callback to invoke on radio button value change.</td>
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
                        <td>p-radiobutton</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-radiobutton-box</td>
                        <td>Container of icon.</td>
                    </tr>
                    <tr>
                        <td>p-radiobutton-icon</td>
                        <td>Icon element.</td>
                    </tr>
                    <tr>
                        <td>p-radiobutton-label</td>
                        <td>Label element.</td>
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
        <h5>Basic</h5>
        <div class="p-field-radiobutton">
            <RadioButton id="city1" name="city" value="Chicago" v-model="city" />
            <label for="city1">Chicago</label>
        </div>
        <div class="p-field-radiobutton">
            <RadioButton id="city2" name="city" value="Los Angeles" v-model="city" />
            <label for="city2">Los Angeles</label>
        </div>
        <div class="p-field-radiobutton">
            <RadioButton id="city3" name="city" value="New York" v-model="city" />
            <label for="city3">New York</label>
        </div>
        <div class="p-field-radiobutton">
            <RadioButton id="city4" name="city" value="San Francisco" v-model="city" />
            <label for="city4">San Francisco</label>
        </div>

        <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
        <div v-for="category of categories" :key="category.key" class="p-field-radiobutton">
            <RadioButton :id="category.key" name="category" :value="category" v-model="selectedCategory" :disabled="category.key === 'R'" />
            <label :for="category.key">{{category.name}}</label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            city: null,
            categories: [
                {name: 'Accounting', key: 'A'}, 
                {name: 'Marketing', key: 'M'}, 
                {name: 'Production', key: 'P'}, 
                {name: 'Research', key: 'R'}
            ],
            selectedCategory: null
        }
    },
    created() {
        this.selectedCategory = this.categories[1];
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
        <h5>Basic</h5>
        <div class="p-field-radiobutton">
            <RadioButton id="city1" name="city" value="Chicago" v-model="city" />
            <label for="city1">Chicago</label>
        </div>
        <div class="p-field-radiobutton">
            <RadioButton id="city2" name="city" value="Los Angeles" v-model="city" />
            <label for="city2">Los Angeles</label>
        </div>
        <div class="p-field-radiobutton">
            <RadioButton id="city3" name="city" value="New York" v-model="city" />
            <label for="city3">New York</label>
        </div>
        <div class="p-field-radiobutton">
            <RadioButton id="city4" name="city" value="San Francisco" v-model="city" />
            <label for="city4">San Francisco</label>
        </div>

        <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
        <div v-for="category of categories" :key="category.key" class="p-field-radiobutton">
            <RadioButton :id="category.key" name="category" :value="category" v-model="selectedCategory" :disabled="category.key === 'R'" />
            <label :for="category.key">{{category.name}}</label>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const city = ref();
        const categories = ref([
            {name: 'Accounting', key: 'A'}, 
            {name: 'Marketing', key: 'M'}, 
            {name: 'Production', key: 'P'}, 
            {name: 'Research', key: 'R'}
        ]);
        const selectedCategory = ref(categories.value[1]);

        return { city, categories, selectedCategory }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/radiobutton/radiobutton.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Basic</h5>
            <div class="p-field-radiobutton">
                <p-radiobutton id="city1" name="city" value="Chicago" v-model="city"></p-radiobutton>
                <label for="city1">Chicago</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radiobutton id="city2" name="city" value="Los Angeles" v-model="city"></p-radiobutton>
                <label for="city2">Los Angeles</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radiobutton id="city3" name="city" value="New York" v-model="city"></p-radiobutton>
                <label for="city3">New York</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radiobutton id="city4" name="city" value="San Francisco" v-model="city"></p-radiobutton>
                <label for="city4">San Francisco</label>
            </div>

            <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
            <div v-for="category of categories" :key="category.key" class="p-field-radiobutton">
                <p-radiobutton :id="category.key" name="category" :value="category" v-model="selectedCategory" :disabled="category.key === 'R'"></p-radiobutton>
                <label :for="category.key">{{category.name}}</label>
            </div>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const city = ref();
                const categories = ref([
                    {name: 'Accounting', key: 'A'}, 
                    {name: 'Marketing', key: 'M'}, 
                    {name: 'Production', key: 'P'}, 
                    {name: 'Research', key: 'R'}
                ]);
                const selectedCategory = ref(categories.value[1]);

                return { city, categories, selectedCategory }
            },
            components: {
                "p-radiobutton": primevue.radiobutton
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