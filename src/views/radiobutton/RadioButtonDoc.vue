<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import RadioButton from 'primevue/radiobutton';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Two-way value binding is defined using the standard v-model directive.</p>
<CodeHighlight>
&lt;RadioButton inputId="city1" name="city" value="Chicago" v-model="city" /&gt;
&lt;RadioButton inputId="city2" name="city" value="Los Angeles" v-model="city" /&gt;
</CodeHighlight>
<CodeHighlight lang="js">
export default {
	data() {
		return {
			city: null
		}
	}
}
</CodeHighlight>
				<p>As model is two-way binding enabled, giving a default value to the model is enough to display a radio button as checked by default.</p>
<CodeHighlight lang="js">
export default {
	data() {
		return {
			city: 'Chicago'
		}
	}
}
</CodeHighlight>

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
                                <td>boolean</td>
                                <td>null</td>
                                <td>Value of the component.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Events</h5>
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
                                <td>change</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                            <tr>
                                <td>input</td>
                                <td>event: Value of checkbox</td>
                                <td>Callback to invoke on click.</td>
                            </tr>
                            <tr>
                                <td>click</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke click.</td>
                            </tr>
                            <tr>
                                <td>focus</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke on focus.</td>
                            </tr>
                            <tr>
                                <td>blur</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke on blur.</td>
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
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/radiobutton" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Basic&lt;/h3&gt;
    &lt;div class="p-field-radiobutton"&gt;
    &lt;RadioButton id="city1" name="city" value="Chicago" v-model="city" /&gt;
    &lt;label for="city1"&gt;Chicago&lt;/label&gt;
&lt;/div&gt;
&lt;div class="p-field-radiobutton"&gt;
    &lt;RadioButton id="city2" name="city" value="Los Angeles" v-model="city" /&gt;
    &lt;label for="city2"&gt;Los Angeles&lt;/label&gt;
&lt;/div&gt;
&lt;div class="p-field-radiobutton"&gt;
    &lt;RadioButton id="city3" name="city" value="New York" v-model="city" /&gt;
    &lt;label for="city3"&gt;New York&lt;/label&gt;
&lt;/div&gt;
&lt;div class="p-field-radiobutton"&gt;
    &lt;RadioButton id="city4" name="city" value="San Francisco" v-model="city" /&gt;
    &lt;label for="city4"&gt;San Francisco&lt;/label&gt;
&lt;/div&gt;

&lt;h5&gt;Dynamic Values, Preselection, Value Binding and Disabled Option&lt;/h5&gt;
&lt;div v-for="category of categories" :key="category.key" class="p-field-radiobutton"&gt;
    &lt;RadioButton :id="category.key" name="category" :value="category" v-model="selectedCategory" :disabled="category.key === 'R'" /&gt;
    &lt;label :for="category.key"&gt;{{category.name}}&lt;/label&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            city: null,
            categories: [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}],
            selectedCategory: null
        }
    },
    created() {
        this.selectedCategory = this.categories[1];
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>