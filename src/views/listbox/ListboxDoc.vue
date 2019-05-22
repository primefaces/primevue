<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Listbox from 'primevue/listbox';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Listbox requires a value to bind and a collection of arbitrary objects along with the <i>optionLabel</i> property to specify the label property of the option.</p>
<CodeHighlight>
&lt;Listbox v-model=&quot;selectedCity&quot; :options=&quot;cities&quot; optionLabel=&quot;name&quot; /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
data() {
	return {
		selectedCity: null,
		cities: [
			{name: 'New York', code: 'NY'},
			{name: 'Rome', code: 'RM'},
			{name: 'London', code: 'LDN'},
			{name: 'Istanbul', code: 'IST'},
			{name: 'Paris', code: 'PRS'}
		]
	}
}
</CodeHighlight>

				<h3>Selection</h3>
				<p>Listbox allows selection of either single or multiple items. In single case, model should be a single object reference whereas in multiple case should be an array. Multiple items can either be selected
					using metaKey or toggled individually depending on the value of <i>metaKeySelection</i> property value which is true by default. On touch enabled
					devices metaKeySelection is turned off automatically.</p>
<CodeHighlight>
&lt;Listbox v-model=&quot;selectedCity&quot; :options=&quot;cities&quot; optionLabel=&quot;name&quot; :multiple=&quot;true&quot;/&gt;
</CodeHighlight>

				<h3>Custom Content</h3>
				<p>Label of an option is used as the display text of an item by default, for custom content support define an <i>option</i> template that gets the option instance as a parameter.</p>
<CodeHighlight>
<template v-pre>
&lt;Listbox v-model=&quot;selectedCars&quot; :options=&quot;cars&quot; :multiple=&quot;true&quot; :filter=&quot;true&quot; optionLabel=&quot;brand&quot; listStyle=&quot;max-height:250px&quot; style=&quot;width:15em&quot;&gt;
	&lt;template #option=&quot;slotProps&quot;&gt;
		&lt;div class=&quot;p-clearfix&quot;&gt;
			&lt;img :alt=&quot;slotProps.option.brand&quot; :src=&quot;'/demo/images/car/' + slotProps.option.brand + '.png'&quot; style=&quot;display:inline-block;margin:5px 0 0 5px;width:48px&quot; /&gt;
			&lt;span style=&quot;float:right;margin:1.25em .5em 0 0&quot;&gt;{{slotProps.option.brand}}&lt;/span&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/Listbox&gt;
</template>
</CodeHighlight>

				<h3>Filter</h3>
				<p>Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable <i>filter</i> property.</p>
<CodeHighlight>
&lt;Listbox v-model=&quot;selectedCity&quot; :options=&quot;cities&quot; optionLabel=&quot;name&quot; :filter=&quot;true&quot;/&gt;
</CodeHighlight>

				<h3>Properties</h3>
                <p>Any attribute such as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                                <td>Value of the component.</td>
                            </tr>
                            <tr>
                                <td>options</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of selectitems to display as the available options.</td>
                            </tr>
                            <tr>
                                <td>optionLabel</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property name to use as the label of an option.</td>
                            </tr>
                            <tr>
                                <td>optionValue</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property name to use as the value of an option, defaults to the option itself when not defined.</td>
                            </tr>
                            <tr>
                                <td>optionDisabled</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Property name to use as the disabled flag of an option, defaults to false when not defined.</td>
                            </tr>
                            <tr>
                                <td>listStyle</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of inner list element.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When specified, disables the component.</td>
                            </tr>
                            <tr>
                                <td>dataKey</td>
                                <td>string</td>
                                <td>false</td>
                                <td>A property to uniquely match the value in options for better performance.</td>
                            </tr>
                            <tr>
                                <td>multiple</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When specified, allows selecting multiple values.</td>
                            </tr>
                            <tr>
                                <td>metaKeySelection</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item
                                    can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
                            </tr>
                            <tr>
                                <td>filter</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When specified, displays a filter input at header.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Events</h3>
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
                                <td>event.originalEvent: Original event <br />
                                    event.value: Selected option value </td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                            <tr>
                                <td>input</td>
                                <td>value: New value</td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Styling</h3>
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
                                <td>p-listbox</td>
                                <td>Main container element.</td>
                            </tr>
                            <tr>
                                <td>p-listbox-header</td>
                                <td>Header element.</td>
                            </tr>
                            <tr>
                                <td>p-listbox-list-wrapper</td>
                                <td>Container of list element.</td>
                            </tr>
                            <tr>
                                <td>p-listbox-list</td>
                                <td>List element.</td>
                            </tr>
                            <tr>
                                <td>p-listbox-item</td>
                                <td>An item in the list element.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/listbox" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;Listbox&lt;/h1&gt;
				&lt;p&gt;Listbox is used to select one or more values from a list of items.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;h3 class=&quot;first&quot;&gt;Single&lt;/h3&gt;
			&lt;Listbox v-model=&quot;selectedCity&quot; :options=&quot;cities&quot; optionLabel=&quot;name&quot; /&gt;

			&lt;h3&gt;Advanced with Templating, Filtering and Multiple Selection&lt;/h3&gt;
			&lt;Listbox v-model=&quot;selectedCars&quot; :options=&quot;cars&quot; :multiple=&quot;true&quot; :filter=&quot;true&quot; optionLabel=&quot;brand&quot; listStyle=&quot;max-height:250px&quot; style=&quot;width:15em&quot;&gt;
				&lt;template #option=&quot;slotProps&quot;&gt;
					&lt;div class=&quot;p-clearfix&quot;&gt;
						&lt;img :alt=&quot;slotProps.option.brand&quot; :src=&quot;'/demo/images/car/' + slotProps.option.brand + '.png'&quot; style=&quot;display:inline-block;margin:5px 0 0 5px;width:48px&quot; /&gt;
						&lt;span style=&quot;float:right;margin:1.25em .5em 0 0&quot;&gt;{{slotProps.option.brand}}&lt;/span&gt;
					&lt;/div&gt;
				&lt;/template&gt;
			&lt;/Listbox&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			selectedCity: null,
			selectedCars: null,
			cities: [
				{name: 'New York', code: 'NY'},
				{name: 'Rome', code: 'RM'},
				{name: 'London', code: 'LDN'},
				{name: 'Istanbul', code: 'IST'},
				{name: 'Paris', code: 'PRS'}
			],
			cars: [
				{brand: 'Audi', value: 'Audi'},
				{brand: 'Bmw', value: 'Bmw'},
				{brand: 'Fiat', value: 'Fiat'},
				{brand: 'Honda', value: 'Honda'},
				{brand: 'Jaguar', value: 'Jaguar'},
				{brand: 'Mercedes', value: 'Mercedes'},
				{brand: 'Renault', value: 'Renault'},
				{brand: 'Volkswagen', value: 'Volkswagen'},
				{brand: 'Volvo', value: 'Volvo'}
			]
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>