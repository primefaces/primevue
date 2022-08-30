<template>
	<AppDoc name="ListboxDemo" :sources="sources" github="listbox/ListboxDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Listbox from 'primevue/listbox';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/listbox/listbox.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Listbox requires a value to bind and a collection of arbitrary objects along with the <i>optionLabel</i> property to specify the label property of the option.</p>
<pre v-code><code>
&lt;Listbox v-model="selectedCity" :options="cities" optionLabel="name" /&gt;

</code></pre>

<pre v-code.script><code>
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

</code></pre>

		<h5>Selection</h5>
		<p>Listbox allows selection of either single or multiple items. In single case, model should be a single object reference whereas in multiple case should be an array. Multiple items can either be selected
			using metaKey or toggled individually depending on the value of <i>metaKeySelection</i> property value which is true by default. On touch enabled
			devices metaKeySelection is turned off automatically.</p>
<pre v-code><code>
&lt;Listbox v-model="selectedCity" :options="cities" optionLabel="name" :multiple="true"/&gt;

</code></pre>

        <h5>Grouping</h5>
		<p>Options groups are specified with the <i>optionGroupLabel</i> and <i>optionGroupChildren</i> properties.</p>
<pre v-code.script><code>
export default {
    data() {
        return {
            selectedGroupedCity: null,
            groupedCities: [{
                label: 'Germany', code: 'DE',
                items: [
                    {label: 'Berlin', value: 'Berlin'},
                    {label: 'Frankfurt', value: 'Frankfurt'},
                    {label: 'Hamburg', value: 'Hamburg'},
                    {label: 'Munich', value: 'Munich'}
                ]
            },
            {
                label: 'USA', code: 'US',
                items: [
                    {label: 'Chicago', value: 'Chicago'},
                    {label: 'Los Angeles', value: 'Los Angeles'},
                    {label: 'New York', value: 'New York'},
                    {label: 'San Francisco', value: 'San Francisco'}
                ]
            },
            {
                label: 'Japan', code: 'JP',
                items: [
                    {label: 'Kyoto', value: 'Kyoto'},
                    {label: 'Osaka', value: 'Osaka'},
                    {label: 'Tokyo', value: 'Tokyo'},
                    {label: 'Yokohama', value: 'Yokohama'}
                ]
            }]
        }
    }
}
</code></pre>

<pre v-code><code><template v-pre>
&lt;Listbox v-model="selectedGroupedCity" :options="groupedCities"
        optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"&gt;
&lt;/Listbox&gt;
</template>
</code></pre>

		<h5>Filter</h5>
		<p>Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable <i>filter</i> property. By default,
        optionLabel is used when searching and <i>filterFields</i> can be used to customize the fields being utilized. Furthermore, <i>filterMatchMode</i> is available
        to define the search algorithm. Valid values are "contains" (default), "startsWith" and "endsWith".</p>
<pre v-code><code>
&lt;Listbox v-model="selectedCity" :options="cities" optionLabel="name" :filter="true"/&gt;

</code></pre>

        <h5>Templating</h5>
		<p>Label of an option is used as the display text of an item by default, for custom content support define an <i>option</i> template that gets the option instance as a parameter.
        In addition <i>optiongroup</i>, <i>header</i>, <i>footer</i>, <i>emptyfilter</i> and <i>empty</i> slots are provided for further customization.</p>
<pre v-code><code><template v-pre>
&lt;Listbox v-model="selectedCars" :options="cars" :multiple="true" :filter="true" optionLabel="brand" listStyle="max-height:250px" style="width:15em"&gt;
    &lt;template #option="slotProps"&gt;
		&lt;div&gt;
			&lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" /&gt;
			&lt;span&gt;{{slotProps.option.brand}}&lt;/span&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/Listbox&gt;
</template>
</code></pre>

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
                        <td>modelValue</td>
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
                        <td>string | function</td>
                        <td>null</td>
                        <td>Property name or getter function to use as the label of an option.</td>
                    </tr>
                    <tr>
                        <td>optionValue</td>
                        <td>string | function</td>
                        <td>null</td>
                        <td>Property name or getter function to use as the value of an option, defaults to the option itself when not defined.</td>
                    </tr>
                    <tr>
                        <td>optionDisabled</td>
                        <td>string | function</td>
                        <td>null</td>
                        <td>Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.</td>
                    </tr>
                    <tr>
                        <td>optionGroupLabel</td>
                        <td>string | function</td>
                        <td>null</td>
                        <td>Property name or getter function to use as the label of an option group.</td>
                    </tr>
                    <tr>
                        <td>optionGroupChildren</td>
                        <td>string | function</td>
                        <td>null</td>
                        <td>Property name or getter function that refers to the children options of option group.</td>
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
                        <td>null</td>
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
                    <tr>
                        <td>filterMatchMode</td>
                        <td>string</td>
                        <td>contains</td>
                        <td>Defines the filtering algorithm to use when searching the options. Valid values are "contains" (default), "startsWith" and "endsWith"</td>
                    </tr>
                    <tr>
                        <td>filterFields</td>
                        <td>array</td>
                        <td>null</td>
                        <td>Fields used when filtering the options, defaults to optionLabel.</td>
                    </tr>
                    <tr>
                        <td>filterInputProps</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Uses to pass all properties of the HTMLInputElement to the filter input inside the component.</td>
                    </tr>
                    <tr>
                        <td>virtualScrollerOptions</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Whether to use the virtualScroller feature. The properties of <router-link to="/virtualscroller">VirtualScroller</router-link> component can be used like an object in it.</td>
                    </tr>
                    <tr>
                        <td>autoOptionFocus</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to focus on the first visible or selected element.</td>
                    </tr>
                    <tr>
                        <td>selectOnFocus</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, the focused option is selected.</td>
                    </tr>
                    <tr>
                        <td>filterMessage</td>
                        <td>string</td>
                        <td>{0} results are available</td>
                        <td>Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration.</td>
                    </tr>
                    <tr>
                        <td>selectionMessage</td>
                        <td>string</td>
                        <td>{0} items selected</td>
                        <td>Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration.</td>
                    </tr>
                    <tr>
                        <td>emptySelectionMessage</td>
                        <td>string</td>
                        <td>No selected item</td>
                        <td>Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration.</td>
                    </tr>
                    <tr>
                        <td>emptyFilterMessage</td>
                        <td>string</td>
                        <td>No results found</td>
                        <td>Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration.</td>
                    </tr>
                    <tr>
                        <td>emptyMessage</td>
                        <td>string</td>
                        <td>No results found</td>
                        <td>Text to display when there are no options available. Defaults to value from PrimeVue locale configuration.</td>
                    </tr>
                    <tr>
                        <td>tabindex</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Index of the element in tabbing order.</td>
                    </tr>
                    <tr>
                        <td>aria-label</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Defines a string value that labels an interactive element.</td>
                    </tr>
                    <tr>
                        <td>aria-labelledby</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
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
                        <td>focus</td>
                        <td>event</td>
                        <td>Callback to invoke when the component receives focus.</td>
                    </tr>
                    <tr>
                        <td>blur</td>
                        <td>event</td>
                        <td>Callback to invoke when the component loses focus.</td>
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
                        <td>option</td>
                        <td>option: Option instance <br />
                            index: Index of the option</td>
                    </tr>
                    <tr>
                        <td>optiongroup</td>
                        <td>option: OptionGroup instance <br />
                            index: Index of the option group</td>
                    </tr>
                    <tr>
                        <td>header</td>
                        <td>value: Value of the component <br />
                            options: Displayed options</td>
                    </tr>
                    <tr>
                        <td>footer</td>
                        <td>value: Value of the component <br />
                            options: Displayed options</td>
                    </tr>
                    <tr>
                        <td>emptyfilter</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>empty</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>content</td>
                        <td>items: An array of objects to display for virtualscroller<br />
                            styleClass: Style class of the component<br />
                            contentRef: Referance of the content<br />
                            getItemOptions: Options of the items</td>
                    </tr>
                    <tr>
                        <td>loader</td>
                        <td>options: Options of the loader items for virtualscroller</td>
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

        <h5>Accessibility</h5>
        <h6>Screen Reader</h6>
        <p>Value to describe the component can be provided  <i>aria-labelledby</i> or <i>aria-label</i> props. The list element has a <i>listbox</i> role with the <i>aria-multiselectable</i> attribute that sets to true when multiple selection is enabled.
        Each list item has an <i>option</i> role with <i>aria-selected</i> and <i>aria-disabled</i> as their attributes.</p>
        <p>If filtering is enabled, <i>filterInputProps</i> can be defined to give <i>aria-*</i> props to the input element. Alternatively <i>filterPlaceholder</i> is usually utilized by the screen readers as well.</p>
<pre v-code><code>
&lt;span id="lb"&gt;Options&lt;/span&gt;
&lt;ListBox aria-labelledby="lb" /&gt;

&lt;ListBox aria-label="City" /&gt;

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
                        <td>Moves focus to the first selected option, if there is none then first option receives the focus.</td>
                    </tr>
                    <tr>
                        <td><i>up arrow</i></td>
                        <td>Moves focus to the previous option.</td>
                    </tr>
                    <tr>
                        <td><i>down arrow</i></td>
                        <td>Moves focus to the next option.</td>
                    </tr>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Toggles the selected state of the focused option.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Toggles the selected state of the focused option.</td>
                    </tr>
                    <tr>
                        <td><i>home</i></td>
                        <td>Moves focus to the first option.</td>
                    </tr>
                    <tr>
                        <td><i>end</i></td>
                        <td>Moves focus to the last option.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>down arrow</i></td>
                        <td>Moves focus to the next option and toggles the selection state.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>up arrow</i></td>
                        <td>Moves focus to the previous option and toggles the selection state.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>space</i></td>
                        <td>Selects the items between the most recently selected option and the focused option.</td>
                    </tr>
                    <tr>
                        <td><i>control</i> + <i>shift</i> + <i>home</i></td>
                        <td>Selects the focused options and all the options up to the first one.</td>
                    </tr>
                    <tr>
                        <td><i>control</i> + <i>shift</i> + <i>end</i></td>
                        <td>Selects the focused options and all the options down to the last one.</td>
                    </tr>
                    <tr>
                        <td><i>control</i> + <i>a</i></td>
                        <td>Selects all options.</td>
                    </tr>
                    <tr>
                        <td><i>pageUp</i></td>
                        <td>Jumps visual focus to first option.</td>
                    </tr>
                    <tr>
                        <td><i>pageDown</i></td>
                        <td>Jumps visual focus to last option.</td>
                    </tr>
                    <tr>
                        <td><i>any printable character</i></td>
                        <td>Moves focus to the option whose label starts with the characters being typed.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h6>Filter Input Keyboard Support</h6>
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
                        <td><i>down arrow</i></td>
                        <td>Moves focus to the next option, if there is none then visual focus does not change.</td>
                    </tr>
                    <tr>
                        <td><i>up arrow</i></td>
                        <td>Moves focus to the previous option, if there is none then visual focus does not change.</td>
                    </tr>
                    <tr>
                        <td><i>left arrow</i></td>
                        <td>Removes the visual focus from the current option and moves input cursor to one character left.</td>
                    </tr>
                    <tr>
                        <td><i>right arrow</i></td>
                        <td>Removes the visual focus from the current option and moves input cursor to one character right.</td>
                    </tr>
                    <tr>
                        <td><i>home</i></td>
                        <td>Moves input cursor at the end, if not then moves focus to the first option.</td>
                    </tr>
                    <tr>
                        <td><i>end</i></td>
                        <td>Moves input cursor at the beginning, if not then moves focus to the last option.</td>
                    </tr>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Closes the popup and moves focus to the multiselect element.</td>
                    </tr>
                    <tr>
                        <td><i>escape</i></td>
                        <td>Closes the popup and moves focus to the multiselect element.</td>
                    </tr>
                    <tr>
                        <td><i>tab</i></td>
                        <td>Moves focus to the next focusable element in the component. If there is none, moves focus to next element in page.</td>
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
        <h5>Single</h5>
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" style="width:15rem" />

        <h5>Grouped</h5>
        <Listbox v-model="selectedGroupedCity" :options="groupedCities" optionLabel="label" style="width:15rem" optionGroupLabel="label" optionGroupChildren="items" listStyle="max-height:250px">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" class="mr-2" />
                    <div>{{slotProps.option.label}}</div>
                </div>
            </template>
        </Listbox>

        <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
        <Listbox v-model="selectedCountries" :options="countries" :multiple="true" :filter="true" optionLabel="name" listStyle="max-height:250px" style="width:15rem" filterPlaceholder="Search">
            <template #option="slotProps">
                <div class="country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" class="mr-2" />
                    <div>{{slotProps.option.name}}</div>
                </div>
            </template>
        </Listbox>

        <h5>Virtual Scroll (1000 Items)</h5>
        <Listbox v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" style="width:15rem" listStyle="height:250px" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            selectedCountries: null,
            selectedGroupedCity: null,
            selectedItem: null,
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
            ],
            groupedCities: [{
                label: 'Germany', code: 'DE',
                items: [
                    {label: 'Berlin', value: 'Berlin'},
                    {label: 'Frankfurt', value: 'Frankfurt'},
                    {label: 'Hamburg', value: 'Hamburg'},
                    {label: 'Munich', value: 'Munich'}
                ]
            },
            {
                label: 'USA', code: 'US',
                items: [
                    {label: 'Chicago', value: 'Chicago'},
                    {label: 'Los Angeles', value: 'Los Angeles'},
                    {label: 'New York', value: 'New York'},
                    {label: 'San Francisco', value: 'San Francisco'}
                ]
            },
            {
                label: 'Japan', code: 'JP',
                items: [
                    {label: 'Kyoto', value: 'Kyoto'},
                    {label: 'Osaka', value: 'Osaka'},
                    {label: 'Tokyo', value: 'Tokyo'},
                    {label: 'Yokohama', value: 'Yokohama'}
                ]
            }],
            items: Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i }))
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
        <h5>Single</h5>
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" style="width:15rem" />

        <h5>Grouped</h5>
        <Listbox v-model="selectedGroupedCity" :options="groupedCities" optionLabel="label" style="width:15rem" optionGroupLabel="label" optionGroupChildren="items" listStyle="max-height:250px">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" class="mr-2" />
                    <div>{{slotProps.option.label}}</div>
                </div>
            </template>
        </Listbox>

        <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
        <Listbox v-model="selectedCountries" :options="countries" :multiple="true" :filter="true" optionLabel="name" listStyle="max-height:250px" style="width:15rem" filterPlaceholder="Search">
            <template #option="slotProps">
                <div class="country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" class="mr-2" />
                    <div>{{slotProps.option.name}}</div>
                </div>
            </template>
        </Listbox>

        <h5>Virtual Scroll (1000 Items)</h5>
        <Listbox v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" style="width:15rem" listStyle="height:250px" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const selectedCity = ref();
        const selectedCountries = ref();
        const selectedGroupedCity = ref();
        const selectedItem = ref();
        const cities = ref([
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ]);
        const countries = ref([
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
        ]);
        const groupedCities = ref([
            {
                label: 'Germany', code: 'DE',
                items: [
                    {label: 'Berlin', value: 'Berlin'},
                    {label: 'Frankfurt', value: 'Frankfurt'},
                    {label: 'Hamburg', value: 'Hamburg'},
                    {label: 'Munich', value: 'Munich'}
                ]
            },
            {
                label: 'USA', code: 'US',
                items: [
                    {label: 'Chicago', value: 'Chicago'},
                    {label: 'Los Angeles', value: 'Los Angeles'},
                    {label: 'New York', value: 'New York'},
                    {label: 'San Francisco', value: 'San Francisco'}
                ]
            },
            {
                label: 'Japan', code: 'JP',
                items: [
                    {label: 'Kyoto', value: 'Kyoto'},
                        {label: 'Osaka', value: 'Osaka'},
                        {label: 'Tokyo', value: 'Tokyo'},
                        {label: 'Yokohama', value: 'Yokohama'}
                    ]
                }
            ]);

        const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })));

        return { selectedCity, selectedCountries, selectedGroupedCity, cities, countries, groupedCities, items, selectedItem }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/listbox/listbox.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Single</h5>
            <p-listbox v-model="selectedCity" :options="cities" option-label="name" style="width:15rem"></p-listbox>

            <h5>Grouped</h5>
            <p-listbox v-model="selectedGroupedCity" :options="groupedCities" option-label="label" style="width:15rem" option-group-label="label" option-group-children="items" list-style="max-height:250px">
                <template #optiongroup="slotProps">
                    <div class="flex align-items-center country-item">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" class="mr-2" />
                        <div>{{slotProps.option.label}}</div>
                    </div>
                </template>
            </p-listbox>

        <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
        <p-listbox v-model="selectedCountries" :options="countries" :multiple="true" :filter="true" option-label="name" list-style="max-height:250px" style="width:15rem" filter-placeholder="Search">
            <template #option="slotProps">
                <div class="country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" class="mr-2" />
                    <div>{{slotProps.option.name}}</div>
                </div>
            </template>
        </p-listbox>

            <h5>Virtual Scroll (1000 Items)</h5>
            <p-listbox v-model="selectedItem" :options="items" option-label="label" option-value="value" :virtual-scroller-options="{ itemSize: 38 }" style="width:15rem" list-style="height:250px"></p-listbox>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const selectedCity = ref();
                const selectedCountries = ref();
                const selectedGroupedCity = ref();
                const selectedItem = ref();
                const cities = ref([
                    {name: 'New York', code: 'NY'},
                    {name: 'Rome', code: 'RM'},
                    {name: 'London', code: 'LDN'},
                    {name: 'Istanbul', code: 'IST'},
                    {name: 'Paris', code: 'PRS'}
                ]);
                const countries = ref([
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
                ]);
                const groupedCities = ref([
                    {
                        label: 'Germany', code: 'DE',
                        items: [
                            {label: 'Berlin', value: 'Berlin'},
                            {label: 'Frankfurt', value: 'Frankfurt'},
                            {label: 'Hamburg', value: 'Hamburg'},
                            {label: 'Munich', value: 'Munich'}
                        ]
                    },
                    {
                        label: 'USA', code: 'US',
                        items: [
                            {label: 'Chicago', value: 'Chicago'},
                            {label: 'Los Angeles', value: 'Los Angeles'},
                            {label: 'New York', value: 'New York'},
                            {label: 'San Francisco', value: 'San Francisco'}
                        ]
                    },
                    {
                        label: 'Japan', code: 'JP',
                        items: [
                            {label: 'Kyoto', value: 'Kyoto'},
                                {label: 'Osaka', value: 'Osaka'},
                                {label: 'Tokyo', value: 'Tokyo'},
                                {label: 'Yokohama', value: 'Yokohama'}
                            ]
                        }
                    ]);

                const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })));

                return { selectedCity, selectedCountries, selectedGroupedCity, cities, countries, groupedCities, items, selectedItem }
            },
            components: {
                "p-listbox": primevue.listbox
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
