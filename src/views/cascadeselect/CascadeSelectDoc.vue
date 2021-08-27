<template>
	<AppDoc name="CascadeSelectDemo" :sources="sources" github="cascadeselect/CascadeSelectDemo.vue">
        <h5>Import</h5>
<pre v-code.script><code>
import CascadeSelect from 'primevue/cascadeselect';

</code></pre>

		<h5>Getting Started</h5>
		<p>CascadeSelect requires a value to bind and a collection of arbitrary objects with a nested hierarchy. <i>optionGroupLabel</i>
            is used for the text of a category and <i>optionGroupChildren</i> is to define the children of the category. Note that order of the <i>optionGroupChildren</i>
            matters and it should correspond to the data hierarchy.</p>
                    
<pre v-code><code>
&lt;CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name" 
                        :optionGroupChildren="['states', 'cities']" style="minWidth: 14rem" &gt;

</code></pre>

<pre v-code.script><code>
data() {
	data() &#123;
        return &#123;
            selectedCity: null,
            countries: [
                &#123;
                    name: 'Australia',
                    code: 'AU',
                    states: [
                        &#123;
                            name: 'New South Wales',
                            cities: [
                                &#123;cname: 'Sydney', code: 'A-SY'&#125;,
                                &#123;cname: 'Newcastle', code: 'A-NE'&#125;,
                                &#123;cname: 'Wollongong', code: 'A-WO'&#125;
                            ]
                        &#125;,
                        &#123;
                            name: 'Queensland',
                            cities: [
                                &#123;cname: 'Brisbane', code: 'A-BR'&#125;,
                                &#123;cname: 'Townsville', code: 'A-TO'&#125;
                            ]
                        &#125;,
                        
                    ]
                &#125;,
                &#123;
                    name: 'Canada', 
                    code: 'CA',
                    states: [
                        &#123;
                            name: 'Quebec',
                            cities: [
                                &#123;cname: 'Montreal', code: 'C-MO'&#125;,
                                &#123;cname: 'Quebec City', code: 'C-QU'&#125;
                            ]
                        &#125;,
                        &#123;
                            name: 'Ontario',
                            cities: [
                                &#123;cname: 'Ottawa', code: 'C-OT'&#125;,
                                &#123;cname: 'Toronto', code: 'C-TO'&#125;
                            ]
                        &#125;,
                        
                    ]
                &#125;,
                &#123;
                    name: 'United States',
                    code: 'US',
                    states: [
                        &#123;
                            name: 'California',
                            cities: [
                                &#123;cname: 'Los Angeles', code: 'US-LA'&#125;,
                                &#123;cname: 'San Diego', code: 'US-SD'&#125;,
                                &#123;cname: 'San Francisco', code: 'US-SF'&#125;
                            ]
                        &#125;,
                        &#123;
                            name: 'Florida',
                            cities: [
                                &#123;cname: 'Jacksonville', code: 'US-JA'&#125;,
                                &#123;cname: 'Miami', code: 'US-MI'&#125;,
                                &#123;cname: 'Tampa', code: 'US-TA'&#125;,
                                &#123;cname: 'Orlando', code: 'US-OR'&#125;
                            ]
                        &#125;,
                        &#123;
                            name: 'Texas',
                            cities: [
                                &#123;cname: 'Austin', code: 'US-AU'&#125;,
                                &#123;cname: 'Dallas', code: 'US-DA'&#125;,
                                &#123;cname: 'Houston', code: 'US-HO'&#125;
                            ]
                        &#125;
                    ]
                &#125;
            ]
        &#125; 
    &#125;
}

</code></pre>

        <h5>Templating</h5>
        <p>Content of an item can be customized with the <i>option</i> template.</p>

<pre v-code><code><template v-pre>
&lt;CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name" 
        :optionGroupChildren="['states', 'cities']" style="minWidth: 14rem"&gt;
    &lt;template #option="slotProps"&gt;
        &lt;div class="country-item"&gt;
            &lt;img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" v-if="slotProps.option.states" /&gt;
            &lt;i class="pi pi-compass p-mr-2" v-if="slotProps.option.cities"&gt;&lt;/i&gt;
            &lt;i class="pi pi-map-marker p-mr-2" v-if="slotProps.option.cname"&gt;&lt;/i&gt;
            &lt;span&gt;{{slotProps.option.cname || slotProps.option.name}}&lt;/span&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/CascadeSelect&gt;
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
                        <td>string</td>
                        <td>null</td>
                        <td>Property name or getter function to use as the label of an option.</td>
                    </tr>
                    <tr>
                        <td>optionValue</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Property name or getter function to use as the value of an option, defaults to the option itself when not defined.</td>
                    </tr>
                    <tr>
                        <td>optionGroupLabel</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Property name or getter function to use as the label of an option group.</td>
                    </tr>
                    <tr>
                        <td>optionGroupChildren</td>
                        <td>array</td>
                        <td>null</td>
                        <td>Property name or getter function to retrieve the items of a group.</td>
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
                        <td>group-change</td>
                        <td>event.originalEvent: Original event <br />
                            event.value: Selected option group </td>
                        <td>Callback to invoke when a group changes.</td>
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
                        <td>value</td>
                        <td>value: Value of the component <br />
                            placeholder: Placeholder text to show</td>
                    </tr>
                    <tr>
                        <td>option</td>
                        <td>option: Option instance</td>
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
                        <td>p-cascadeselect</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-cascadeselect-label</td>
                        <td>Element to display label of selected option.</td>
                    </tr>
                    <tr>
                        <td>p-cascadeselect-trigger</td>
                        <td>Icon element.</td>
                    </tr>
                    <tr>
                        <td>p-cascadeselect-panel</td>
                        <td>Icon element.</td>
                    </tr>
                    <tr>
                        <td>p-cascadeselect-items-wrapper</td>
                        <td>Wrapper element of items list.</td>
                    </tr>
                    <tr>
                        <td>p-cascadeselect-items</td>
                        <td>List element of items.</td>
                    </tr>
                    <tr>
                        <td>p-cascadeselect-item</td>
                        <td>An item in the list.</td>
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
        <CascadeSelect v-model="selectedCity1" :options="countries" optionLabel="cname" optionGroupLabel="name"
                :optionGroupChildren="['states', 'cities']" style="minWidth: 14rem" placeholder="Select a City" />

        <h5>Templating</h5>
        <CascadeSelect v-model="selectedCity2" :options="countries" optionLabel="cname" optionGroupLabel="name" 
                :optionGroupChildren="['states', 'cities']" style="minWidth: 14rem" placeholder="Select a City">
            <template #option="slotProps">
                <div class="country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" v-if="slotProps.option.states" />
                    <i class="pi pi-compass p-mr-2" v-if="slotProps.option.cities"></i>
                    <i class="pi pi-map-marker p-mr-2" v-if="slotProps.option.cname"></i>
                    <span>{{slotProps.option.cname || slotProps.option.name}}</span>
                </div>
            </template>
        </CascadeSelect>

        <h5>Loading State</h5>
        <CascadeSelect placeholder="Loading..." loading style="minWidth: 14rem"></CascadeSelect>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity1: null,
            selectedCity2: null,
            countries: [
                {
                    name: 'Australia',
                    code: 'AU',
                    states: [
                        {
                            name: 'New South Wales',
                            cities: [
                                {cname: 'Sydney', code: 'A-SY'},
                                {cname: 'Newcastle', code: 'A-NE'},
                                {cname: 'Wollongong', code: 'A-WO'}
                            ]
                        },
                        {
                            name: 'Queensland',
                            cities: [
                                {cname: 'Brisbane', code: 'A-BR'},
                                {cname: 'Townsville', code: 'A-TO'}
                            ]
                        },
                        
                    ]
                },
                {
                    name: 'Canada', 
                    code: 'CA',
                    states: [
                        {
                            name: 'Quebec',
                            cities: [
                                {cname: 'Montreal', code: 'C-MO'},
                                {cname: 'Quebec City', code: 'C-QU'}
                            ]
                        },
                        {
                            name: 'Ontario',
                            cities: [
                                {cname: 'Ottawa', code: 'C-OT'},
                                {cname: 'Toronto', code: 'C-TO'}
                            ]
                        },
                        
                    ]
                },
                {
                    name: 'United States',
                    code: 'US',
                    states: [
                        {
                            name: 'California',
                            cities: [
                                {cname: 'Los Angeles', code: 'US-LA'},
                                {cname: 'San Diego', code: 'US-SD'},
                                {cname: 'San Francisco', code: 'US-SF'}
                            ]
                        },
                        {
                            name: 'Florida',
                            cities: [
                                {cname: 'Jacksonville', code: 'US-JA'},
                                {cname: 'Miami', code: 'US-MI'},
                                {cname: 'Tampa', code: 'US-TA'},
                                {cname: 'Orlando', code: 'US-OR'}
                            ]
                        },
                        {
                            name: 'Texas',
                            cities: [
                                {cname: 'Austin', code: 'US-AU'},
                                {cname: 'Dallas', code: 'US-DA'},
                                {cname: 'Houston', code: 'US-HO'}
                            ]
                        }
                    ]
                }
            ]
        } 
    }
}
<\\/script>

<style>
img {
    width: 18px;
    margin-right: 0.5rem;
}
</style>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Basic</h5>
        <CascadeSelect v-model="selectedCity1" :options="countries" optionLabel="cname" optionGroupLabel="name"
                :optionGroupChildren="['states', 'cities']" style="minWidth: 14rem" placeholder="Select a City" />

        <h5>Templating</h5>
        <CascadeSelect v-model="selectedCity2" :options="countries" optionLabel="cname" optionGroupLabel="name" 
                :optionGroupChildren="['states', 'cities']" style="minWidth: 14rem" placeholder="Select a City">
            <template #option="slotProps">
                <div class="country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" v-if="slotProps.option.states" />
                    <i class="pi pi-compass p-mr-2" v-if="slotProps.option.cities"></i>
                    <i class="pi pi-map-marker p-mr-2" v-if="slotProps.option.cname"></i>
                    <span>{{slotProps.option.cname || slotProps.option.name}}</span>
                </div>
            </template>
        </CascadeSelect>

        <h5>Loading State</h5>
        <CascadeSelect placeholder="Loading..." loading style="minWidth: 14rem"></CascadeSelect>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const selectedCity1 = ref();
        const selectedCity2 = ref();
        const countries = ref([
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            {cname: 'Sydney', code: 'A-SY'},
                            {cname: 'Newcastle', code: 'A-NE'},
                            {cname: 'Wollongong', code: 'A-WO'}
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            {cname: 'Brisbane', code: 'A-BR'},
                            {cname: 'Townsville', code: 'A-TO'}
                        ]
                    },
                    
                ]
            },
            {
                name: 'Canada', 
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            {cname: 'Montreal', code: 'C-MO'},
                            {cname: 'Quebec City', code: 'C-QU'}
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            {cname: 'Ottawa', code: 'C-OT'},
                            {cname: 'Toronto', code: 'C-TO'}
                        ]
                    },
                    
                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            {cname: 'Los Angeles', code: 'US-LA'},
                            {cname: 'San Diego', code: 'US-SD'},
                            {cname: 'San Francisco', code: 'US-SF'}
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            {cname: 'Jacksonville', code: 'US-JA'},
                            {cname: 'Miami', code: 'US-MI'},
                            {cname: 'Tampa', code: 'US-TA'},
                            {cname: 'Orlando', code: 'US-OR'}
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            {cname: 'Austin', code: 'US-AU'},
                            {cname: 'Dallas', code: 'US-DA'},
                            {cname: 'Houston', code: 'US-HO'}
                        ]
                    }
                ]
            }
        ]);

        return { selectedCity1, selectedCity2, countries }
    }
}
<\\/script>

<style>
img {
    width: 18px;
    margin-right: 0.5rem;
}
</style>
`
                }
            }
        }
    }
}
</script>
