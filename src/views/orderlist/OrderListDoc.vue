<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import OrderList from 'primevue/orderlist';
</CodeHighlight>

				<h3>Getting Started</h3>
                <p>OrderList requires an array as its value bound with the v-model directive and a template for its content.</p>
                <p>Header of the component is defined with the "header" template and to define the content of an item in the list a named template called "item" needs to be defined which gets the 
                    <i>item</i> and the <i>index</i> via slotProps.
                </p>
<CodeHighlight>
<template v-pre>
&lt;OrderList v-model="cars" listStyle="height:auto" dataKey="vin"&gt;
    &lt;template #header&gt;
        List of Cars
    &lt;/template&gt;
    &lt;template #item="slotProps"&gt;
        &lt;div class="p-caritem"&gt;
            &lt;img :src="'demo/images/car/' + slotProps.item.brand + '.png'"&gt;
            &lt;div&gt;&#123;&#123;slotProps.item.brand&#125;&#125; - &#123;&#123;slotProps.item.year&#125;&#125; - &#123;&#123;slotProps.item.color&#125;&#125;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/OrderList&gt;
</template>
</CodeHighlight>

                <h3>Selection</h3>
                <p>In case you'd need to access the selected items in the list, define a binding to the <i>selection</i> property with the sync operator so that
                it gets updated when the user makes a selection. Since it is two-way binding enabled, your changes to the selection will be reflected as well.  Note that
                this is optional and only necessary when you need to access the selection.</p>

                <p>Use the sync operator to enable two-way binding.</p>

<CodeHighlight>
<template v-pre>
&lt;OrderList v-model="cars" dataKey="vin" :selection.sync="selection"&gt;
    &lt;template #header&gt;
        List of Cars
    &lt;/template&gt;
    &lt;template #item="slotProps"&gt;
        &lt;div class="p-caritem"&gt;
            &lt;img :src="'demo/images/car/' + slotProps.item.brand + '.png'"&gt;
            &lt;div&gt;&#123;&#123;slotProps.item.brand&#125;&#125; - &#123;&#123;slotProps.item.year&#125;&#125; - &#123;&#123;slotProps.item.color&#125;&#125;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/OrderList&gt;
</template>
</CodeHighlight>

                <h3>DataKey</h3>
                <p>It is recommended to provide the name of the field that uniquely identifies the a record in the data via the <i>dataKey</i> property for better performance.</p>

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
                                <td>array</td>
                                <td>null</td>
                                <td>Value of the component.</td>
                            </tr>
                            <tr>
                                <td>selection</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Selected items in the list.</td>
                            </tr>
                            <tr>
                                <td>metaKeySelection</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Defines whether metaKey is requred or not for the selection. <br/>
                                    When true metaKey needs to be pressed to select or unselect an item and <br/>
                                    when set to false selection of each item
                                    can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
                            </tr>
                            <tr>
                                <td>dataKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the field that uniquely identifies the a record in the data.</td>
                            </tr>
                            <tr>
                                <td>listStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the the list element.</td>
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
                                <td>reorder</td>
                                <td>event.originalEvent: browser event <br />
                                    event.value: Ordered list <br />
                                    event.direction: Direction of the change; "up", "down", "bottom", "top"
                                </td>
                                <td>Callback to invoke when the list is reordered.</td>
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
                                <td>p-orderlist</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-orderlist-list</td>
                                <td>List container.</td>
                            </tr>
                            <tr>
                                <td>p-orderlist-item</td>
                                <td>An item in the list</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/panel" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;OrderList v-model="cars" listStyle="height:auto" dataKey="vin"&gt;
    &lt;template #header&gt;
        List of Cars
    &lt;/template&gt;
    &lt;template #item="slotProps"&gt;
        &lt;div class="p-caritem"&gt;
            &lt;img :src="'demo/images/car/' + slotProps.item.brand + '.png'"&gt;
            &lt;div&gt;&#123;&#123;slotProps.item.brand&#125;&#125; - &#123;&#123;slotProps.item.year&#125;&#125; - &#123;&#123;slotProps.item.color&#125;&#125;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/OrderList&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="js">
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data.slice(0,5));
    }
}
</CodeHighlight>

<CodeHighlight lang="css">
.p-caritem {
    &amp;:after {
        content: "";
        display: table;
        clear: both;
    }

    img {
        display:inline-block;
        margin:2px 0 2px 2px;
        width: 48px;
        height: 48px;
    }

    div {
        font-size:14px;
        float:right;
        margin: 16px 6px 0 0;
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>