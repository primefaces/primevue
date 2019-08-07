<template>
	<div>
        <DataTableSubMenu />
        
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Column Resize</h1>
				<p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized. 
                    In "expand" mode, table width also changes along with the column width. onColumnResize is a callback that passes the resized column header as a parameter.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <h3>Fit Mode</h3>
			<DataTable :value="cars" :resizableColumns="true" columnResizeMode="fit">
                <Column field="vin" header="Vin" :resizable="true"></Column>
                <Column field="year" header="Year" :resizable="true"></Column>
                <Column field="brand" header="Brand" :resizable="true"></Column>
                <Column field="color" header="Color" :resizable="true"></Column>
            </DataTable>

            <h3>Expand Mode</h3>
			<DataTable :value="cars" :resizableColumns="true" columnResizeMode="expand">
                <Column field="vin" header="Vin" :resizable="true"></Column>
                <Column field="year" header="Year" :resizable="true"></Column>
                <Column field="brand" header="Brand" :resizable="true"></Column>
                <Column field="color" header="Color" :resizable="true"></Column>
            </DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Fit Mode&lt;/h3&gt;
&lt;DataTable :value="cars" :resizableColumns="true" columnResizeMode="fit"&gt;
    &lt;Column field="vin" header="Vin" :resizable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :resizable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :resizable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :resizable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Expand Mode&lt;/h3&gt;
&lt;DataTable :value="cars" :resizableColumns="true" columnResizeMode="expand"&gt;
    &lt;Column field="vin" header="Vin" :resizable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :resizable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :resizable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :resizable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
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
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    }
}
</CodeHighlight>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<script>
import CarService from '../../service/CarService';
import DataTableSubMenu from './DataTableSubMenu';

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
        this.carService.getCarsSmall().then(data => this.cars = data);
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>