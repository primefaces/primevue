<template>
	<AppDoc name="DropdownDemo" :sources="sources" github="dropdown/DropdownDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Dropdown from 'primevue/dropdown';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Dropdown requires a value to bind and a collection of arbitrary objects along with the <i>optionLabel</i> property to specify the label property of the option.</p>
<pre v-code><code>
&lt;Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" /&gt;

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

		<h5>Placeholder</h5>
		<p>Common pattern is providing an empty option as the placeholder when using native selects, however Dropdown has built-in support using the placeholder option so it is suggested to use it instead of creating an empty option.</p>

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
&lt;Dropdown v-model="selectedGroupedCity" :options="groupedCities"
        optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"&gt;
&lt;/Dropdown&gt;
</template>
</code></pre>

		<h5>Filtering</h5>
		<p>Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable <i>filter</i> property. By default,
        optionLabel is used when searching and <i>filterFields</i> can be used to customize the fields being utilized. Furthermore, <i>filterMatchMode</i> is available
        to define the search algorithm. Valid values are "contains" (default), "startsWith" and "endsWith".</p>

<pre v-code><code>
&lt;Dropdown v-model="selectedCar" :options="cars" optionLabel="brand" placeholder="Select a Car" :filter="true" filterPlaceholder="Find Car"/&gt;

</code></pre>

		<h5>Templating</h5>
		<p>Label of an option is used as the display text of an item by default, for custom content support define an <i>option</i> template that gets the option instance as a parameter.
        In addition <i>value</i>, <i>optiongroup</i>, <i>header</i>, <i>footer</i>, <i>emptyfilter</i> and <i>empty</i> slots are provided for further customization.</p>
<pre v-code><code><template v-pre>
&lt;Dropdown v-model="selectedCar" :options="cars" optionLabel="brand" :filter="true" placeholder="Select a Car" :showClear="true"&gt;
    &lt;template #value="slotProps"&gt;
        &lt;div class="p-dropdown-car-value" v-if="slotProps.value"&gt;
            &lt;img :alt="slotProps.value.brand" :src="'demo/images/car/' + slotProps.value.brand + '.png'" /&gt;
            &lt;span&gt;{{slotProps.value.brand}}&lt;/span&gt;
        &lt;/div&gt;
        &lt;span v-else&gt;
            {{slotProps.placeholder}}
        &lt;/span&gt;
    &lt;/template&gt;
    &lt;template #option="slotProps"&gt;
		&lt;div class="p-dropdown-car-option"&gt;
			&lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" /&gt;
			&lt;span&gt;{{slotProps.option.brand}}&lt;/span&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/Dropdown&gt;
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
                        <td>scrollHeight</td>
                        <td>string</td>
                        <td>200px</td>
                        <td>Height of the viewport, a scrollbar is defined if height of list exceeds this value.</td>
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
                        <td>editable</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, custom value instead of predefined options can be entered using the editable input field.</td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Default text to display when no option is selected.</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that the component should be disabled.</td>
                    </tr>
                    <tr>
                        <td>dataKey</td>
                        <td>string</td>
                        <td>null</td>
                        <td>A property to uniquely identify an option.</td>
                    </tr>
                    <tr>
                        <td>showClear</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, a clear icon is displayed to clear the value.</td>
                    </tr>
                    <tr>
                        <td>tabindex</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Index of the element in tabbing order.</td>
                    </tr>
                    <tr>
                        <td>inputId</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Identifier of the underlying input element.</td>
                    </tr>
                    <tr>
                        <td>ariaLabelledBy</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
                    </tr>
                    <tr>
                        <td>appendTo</td>
                        <td>string</td>
                        <td>body</td>
                        <td>A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body
                        and "self" for the element itself.</td>
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
                        <td>panelClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the overlay panel.</td>
                    </tr>
                    <tr>
                        <td>loading</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether the dropdown is in loading state.</td>
                    </tr>
                    <tr>
                        <td>loadingIcon</td>
                        <td>string</td>
                        <td>pi pi-spinner pi-spin</td>
                        <td>Icon to display in loading state.</td>
                    </tr>
                    <tr>
                        <td>virtualScrollerOptions</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Whether to use the virtualScroller feature. The properties of <router-link to="/virtualscroller">VirtualScroller</router-link> component can be used like an object in it.</td>
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
                        <td>event</td>
                        <td>Callback to invoke on value change.</td>
                    </tr>
                    <tr>
                        <td>before-show</td>
                        <td>-</td>
                        <td>Callback to invoke before the overlay is shown.</td>
                    </tr>
                    <tr>
                        <td>before-hide</td>
                        <td>-</td>
                        <td>Callback to invoke before the overlay is hidden.</td>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td>-</td>
                        <td>Callback to invoke when the overlay is shown.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Callback to invoke when the overlay is hidden.</td>
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

        <h5>Methods</h5>
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
                        <td>show</td>
                        <td>-</td>
                        <td>Shows the overlay.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Hides the overlay.</td>
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
                        <td>value</td>
                        <td>value: Value of the component <br />
                            placeholder: Placeholder prop value</td>
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
                    <tr>
                        <td>indicator</td>
                        <td>-</td>
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
                        <td>p-dropdown</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-dropdown-label</td>
                        <td>Element to display label of selected option.</td>
                    </tr>
                    <tr>
                        <td>p-dropdown-trigger</td>
                        <td>Icon element.</td>
                    </tr>
                    <tr>
                        <td>p-dropdown-panel</td>
                        <td>Icon element.</td>
                    </tr>
                    <tr>
                        <td>p-dropdown-items-wrapper</td>
                        <td>Wrapper element of items list.</td>
                    </tr>
                    <tr>
                        <td>p-dropdown-items</td>
                        <td>List element of items.</td>
                    </tr>
                    <tr>
                        <td>p-dropdown-item</td>
                        <td>An item in the list.</td>
                    </tr>
                    <tr>
                        <td>p-dropdown-filter-container</td>
                        <td>Container of filter input.</td>
                    </tr>
                    <tr>
                        <td>p-dropdown-filter</td>
                        <td>Filter element.</td>
                    </tr>
                    <tr>
                        <td>p-dropdown-open</td>
                        <td>Container element when overlay is visible.</td>
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
        <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" optionValue="code" placeholder="Select a City" />

        <h5>Editable</h5>
        <Dropdown v-model="selectedCity2" :options="cities" optionLabel="name" :editable="true"/>

        <h5>Grouped</h5>
        <Dropdown v-model="selectedGroupedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                    <div>{{slotProps.option.label}}</div>
                </div>
            </template>
        </Dropdown>

        <h5>Advanced with Templating, Filtering and Clear Icon</h5>
        <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" :filter="true" placeholder="Select a Country" :showClear="true">
            <template #value="slotProps">
                <div class="country-item country-item-value" v-if="slotProps.value">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
                    <div>{{slotProps.value.name}}</div>
                </div>
                <span v-else>
                    {{slotProps.placeholder}}
                </span>
            </template>
            <template #option="slotProps">
                <div class="country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
                    <div>{{slotProps.option.name}}</div>
                </div>
            </template>
        </Dropdown>

        <h5>Loading State</h5>
        <Dropdown placeholder="Loading..." loading></Dropdown>

        <h5>Virtual Scroll (1000 Items)</h5>
        <Dropdown v-model="selectedItem1" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Item"></Dropdown>

        <h5>Virtual Scroll (1000 Items) and Lazy</h5>
        <Dropdown v-model="selectedItem2" :options="lazyItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }" placeholder="Select Item">
            <template v-slot:loader="{ options }">
                <div class="flex align-items-center p-2" style="height: 38px" >
                    <Skeleton :width="options.even ? '60%' : '50%'" height="1rem" />
                </div>
            </template>
        </Dropdown>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity1: null,
            selectedCity2: null,
            selectedCountry: null,
            selectedGroupedCity: null,
            selectedItem1: null,
            selectedItem2: null,
            loading: false,
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
            items: Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })),
            lazyItems: Array.from({ length: 100000 })
        }
    },
    loadLazyTimeout: null,
    methods: {
        onLazyLoad(event) {
            this.loading = true;

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //imitate delay of a backend call
            this.loadLazyTimeout = setTimeout(() => {
                const { first, last } = event;
                const lazyItems = [...this.lazyItems];

                for (let i = first; i < last; i++) {
                    lazyItems[i] = { label: \`Item #\${i}\`, value: i };
                }

                this.lazyItems = lazyItems;
                this.loading = false;
            }, Math.random() * 1000 + 250);
        }
    },
}
<\\/script>

<style lang="scss" scoped>
.p-dropdown {
    width: 14rem;
}

.country-item {
    img {
        width: 17px;
        margin-right: 0.5rem;
    }
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Basic</h5>
        <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" optionValue="code" placeholder="Select a City" />

        <h5>Editable</h5>
        <Dropdown v-model="selectedCity2" :options="cities" optionLabel="name" :editable="true"/>

        <h5>Grouped</h5>
        <Dropdown v-model="selectedGroupedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                    <div>{{slotProps.option.label}}</div>
                </div>
            </template>
        </Dropdown>

        <h5>Advanced with Templating, Filtering and Clear Icon</h5>
        <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" :filter="true" placeholder="Select a Country" :showClear="true">
            <template #value="slotProps">
                <div class="country-item country-item-value" v-if="slotProps.value">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
                    <div>{{slotProps.value.name}}</div>
                </div>
                <span v-else>
                    {{slotProps.placeholder}}
                </span>
            </template>
            <template #option="slotProps">
                <div class="country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
                    <div>{{slotProps.option.name}}</div>
                </div>
            </template>
        </Dropdown>

        <h5>Loading State</h5>
        <Dropdown placeholder="Loading..." loading></Dropdown>

        <h5>Virtual Scroll (1000 Items)</h5>
        <Dropdown v-model="selectedItem1" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Item"></Dropdown>

        <h5>Virtual Scroll (1000 Items) and Lazy</h5>
        <Dropdown v-model="selectedItem2" :options="lazyItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }" placeholder="Select Item">
            <template v-slot:loader="{ options }">
                <div class="flex align-items-center p-2" style="height: 38px" >
                    <Skeleton :width="options.even ? '60%' : '50%'" height="1rem" />
                </div>
            </template>
        </Dropdown>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const selectedCity1 = ref();
        const selectedCity2 = ref();
        const selectedCountry = ref();
        const selectedGroupedCity = ref();
        const selectedItem1 = ref();
        const selectedItem2 = ref();
        const loading = ref(false);
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
        const lazyItems = ref(Array.from({ length: 100000 }));

        return { selectedCity1, selectedCity2, selectedCountry, selectedGroupedCity, cities, countries, groupedCities, selectedItem1, selectedItem2, loading, items, lazyItems}
    },
    loadLazyTimeout: null,
    methods: {
        onLazyLoad(event) {
            this.loading = true;

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //imitate delay of a backend call
            this.loadLazyTimeout = setTimeout(() => {
                const { first, last } = event;
                const lazyItems = [...this.lazyItems];

                for (let i = first; i < last; i++) {
                    lazyItems[i] = { label: \`Item #\${i}\`, value: i };
                }

                this.lazyItems = lazyItems;
                this.loading = false;
            }, Math.random() * 1000 + 250);
        }
    }
}
<\\/script>

<style lang="scss" scoped>
.p-dropdown {
    width: 14rem;
}

.country-item {
    img {
        width: 17px;
        margin-right: 0.5rem;
    }
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/skeleton/skeleton.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Basic</h5>
            <p-dropdown v-model="selectedCity1" :options="cities" option-label="name" option-value="code" placeholder="Select a City"></p-dropdown>

            <h5>Editable</h5>
            <p-dropdown v-model="selectedCity2" :options="cities" option-label="name" :editable="true"></p-dropdown>

            <h5>Grouped</h5>
            <p-dropdown v-model="selectedGroupedCity" :options="groupedCities" option-label="label" option-group-label="label" option-group-children="items">
                <template #optiongroup="slotProps">
                    <div class="flex align-items-center country-item">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                        <div>{{slotProps.option.label}}</div>
                    </div>
                </template>
            </p-dropdown>

            <h5>Advanced with Templating, Filtering and Clear Icon</h5>
            <p-dropdown v-model="selectedCountry" :options="countries" option-label="name" :filter="true" placeholder="Select a Country" :show-clear="true">
                <template #value="slotProps">
                    <div class="country-item country-item-value" v-if="slotProps.value">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
                        <div>{{slotProps.value.name}}</div>
                    </div>
                    <span v-else>
                        {{slotProps.placeholder}}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="country-item">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
                        <div>{{slotProps.option.name}}</div>
                    </div>
                </template>
            </p-dropdown>

            <h5>Loading State</h5>
            <p-dropdown placeholder="Loading..." loading></p-dropdown>

            <h5>Virtual Scroll (1000 Items)</h5>
            <p-dropdown v-model="selectedItem1" :options="items" option-label="label" option-value="value" :virtual-scroller-options="{ itemSize: 38 }" placeholder="Select Item"></p-dropdown>

            <h5>Virtual Scroll (1000 Items) and Lazy</h5>
            <p-dropdown v-model="selectedItem2" :options="lazyItems" option-label="label" option-value="value" :virtual-scroller-options="{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }" placeholder="Select Item">
                <template v-slot:loader="{ options }">
                    <div class="flex align-items-center p-2" style="height: 38px" >
                        <p-skeleton :width="options.even ? '60%' : '50%'" height="1rem"></p-skeleton>
                    </div>
                </template>
            </p-dropdown>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const selectedCity1 = ref();
                const selectedCity2 = ref();
                const selectedCountry = ref();
                const selectedGroupedCity = ref();
                const selectedItem1 = ref();
                const selectedItem2 = ref();
                const loading = ref(false);
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
                const lazyItems = ref(Array.from({ length: 100000 }));

                return { selectedCity1, selectedCity2, selectedCountry, selectedGroupedCity, cities, countries, groupedCities, selectedItem1, selectedItem2, loading, items, lazyItems}
            },
            loadLazyTimeout: null,
            methods: {
                onLazyLoad(event) {
                    this.loading = true;

                    if (this.loadLazyTimeout) {
                        clearTimeout(this.loadLazyTimeout);
                    }

                    //imitate delay of a backend call
                    this.loadLazyTimeout = setTimeout(() => {
                        const { first, last } = event;
                        const lazyItems = [...this.lazyItems];

                        for (let i = first; i < last; i++) {
                            lazyItems[i] = { label: \`Item #\${i}\`, value: i };
                        }

                        this.lazyItems = lazyItems;
                        this.loading = false;
                    }, Math.random() * 1000 + 250);
                }
            },
            components: {
                "p-dropdown": primevue.dropdown,
                "p-skeleton": primevue.skeleton
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .p-dropdown {
            width: 14rem;
        }

        .country-item img{
            width: 17px;
            margin-right: 0.5rem;
        }
        </style>`
                }
            }
        }
    }
}
</script>
