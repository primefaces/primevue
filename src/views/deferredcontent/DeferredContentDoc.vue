<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import DeferredContent from 'primevue/deferredcontent';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>DeferredContent is used as a wrapper element of its content..</p>
<CodeHighlight>
<template v-pre>
&lt;DeferredContent&gt;
    &lt;DataTable :value="cars"&gt;
        &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
        &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
        &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
        &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/DeferredContent&gt;
</template>
</CodeHighlight>

                <h3>Load Event</h3>
                <p>onLoad callback is useful to initialize the content when it becomes visible on scroll such as loading data.</p>
<CodeHighlight>
<template v-pre>
&lt;DeferredContent @load="onDataLoad"&gt;
    &lt;DataTable :value="cars"&gt;
        &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
        &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
        &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
        &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/DeferredContent&gt;
</template>
</CodeHighlight>

				<h3>Properties</h3>
				<p>Component has no properties.</p>

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
                                <td>load</td>
                                <td>event: Event object</td>
                                <td>Callback to invoke when deferred content is loaded..</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Styling</h3>
				<p>Component does not apply any styling.</p>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/deferredcontent" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;div&gt;
    &lt;div class="content-section introduction"&gt;
        &lt;div class="feature-intro"&gt;
            &lt;h1&gt;DeferredContent&lt;/h1&gt;
            &lt;p&gt;DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll..&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="content-section implementation"&gt;
        &lt;div style="height: 800px"&gt;
            Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
        &lt;/div&gt;

        &lt;DeferredContent @load="onImageLoad"&gt;
            &lt;img src="demo/images/nature/nature4.jpg" alt="Nature"/&gt;
        &lt;/DeferredContent&gt;

        &lt;div style="height: 500px"&gt;
        &lt;/div&gt;

        &lt;DeferredContent @load="onDataLoad"&gt;
            &lt;DataTable :value="cars"&gt;
                &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
                &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
                &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
                &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
            &lt;/DataTable&gt;
        &lt;/DeferredContent&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
    methods: {
        onImageLoad() {
            this.$toast.add({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'});
        },
        onDataLoad() {
            this.carService.getCarsSmall().then(data => this.cars = data);
            this.$toast.add({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
        }
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>