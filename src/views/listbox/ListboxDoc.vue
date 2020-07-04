<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Listbox from 'primevue/listbox';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Listbox requires a value to bind and a collection of arbitrary objects along with the <i>optionLabel</i> property to specify the label property of the option.</p>
<CodeHighlight>
&lt;Listbox v-model="selectedCity" :options="cities" optionLabel="name" /&gt;
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

				<h5>Selection</h5>
				<p>Listbox allows selection of either single or multiple items. In single case, model should be a single object reference whereas in multiple case should be an array. Multiple items can either be selected
					using metaKey or toggled individually depending on the value of <i>metaKeySelection</i> property value which is true by default. On touch enabled
					devices metaKeySelection is turned off automatically.</p>
<CodeHighlight>
&lt;Listbox v-model="selectedCity" :options="cities" optionLabel="name" :multiple="true"/&gt;
</CodeHighlight>

				<h5>Custom Content</h5>
				<p>Label of an option is used as the display text of an item by default, for custom content support define an <i>option</i> template that gets the option instance as a parameter.</p>
<CodeHighlight>
<template v-pre>
&lt;Listbox v-model="selectedCars" :options="cars" :multiple="true" :filter="true" optionLabel="brand" listStyle="max-height:250px" style="width:15em"&gt;
	&lt;template #option="slotProps"&gt;
		&lt;div&gt;
			&lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" /&gt;
			&lt;span&gt;{{slotProps.option.brand}}&lt;/span&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/Listbox&gt;
</template>
</CodeHighlight>

				<h5>Filter</h5>
				<p>Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable <i>filter</i> property.</p>
<CodeHighlight>
&lt;Listbox v-model="selectedCity" :options="cities" optionLabel="name" :filter="true"/&gt;
</CodeHighlight>

				<h5>Properties</h5>
                <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                                <td>A property to uniquely identify an option.</td>
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
                            <tr>
                                <td>filterPlaceholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Placeholder text to show when filter input is empty.</td>
                            </tr>
                            <tr>
                                <td>filterLocale</td>
                                <td>string</td>
                                <td>undefined</td>
                                <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
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
                                <td>event.originalEvent: Original event <br />
                                    event.value: Selected option value </td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                            <tr>
                                <td>input</td>
                                <td>value: New value</td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                            <tr>
                                <td>filter</td>
                                <td>event.originalEvent: Original event <br />
                                    event.value: Filter value </td>
                                <td>Callback to invoke on filter input.</td>
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

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/listbox" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h5&gt;Single&lt;/h5&gt;
&lt;Listbox v-model="selectedCity" :options="cities" optionLabel="name" style="width:15rem" /&gt;

&lt;h5&gt;Advanced with Templating, Filtering and Multiple Selection&lt;/h5&gt;
&lt;Listbox v-model="selectedCountries" :options="countries" :multiple="true" :filter="true" optionLabel="name" listStyle="max-height:250px" style="width:15rem"&gt;
    &lt;template #option="slotProps"&gt;
        &lt;div class="country-item"&gt;
            &lt;img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" /&gt;
            &lt;div&gt;{{slotProps.option.name}}&lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Listbox&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            selectedCity: null,
            selectedCountries: null,
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            countries: [
                {name: 'Australia', code: 'AU'},
                {name: 'Brazil', code: 'BR'},
                {name: 'China', code: 'CN'},
                {name: 'Egypt', code: 'EG'},
                {name: 'France', code: 'FR'},
                {name: 'Germany', code: 'DE'},
                {name: 'India', code: 'IN'},
                {name: 'Japan', code: 'JP'},
                {name: 'Spain', code: 'ES'},
                {name: 'United States', code: 'US'}
            ]
        }
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>