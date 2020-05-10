<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Size</h1>
				<p>In addition to a regular table, a smaller and a larger alternatives available.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars" class="p-datatable-sm" style="margin-bottom: 2rem">
                <template #header>
                    Small Table
                </template>
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>

            <DataTable :value="cars" style="margin-bottom: 2rem">
                <template #header>
                    Normal Table
                </template>
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>

            <DataTable :value="cars" class="p-datatable-lg">
                <template #header>
                    Large Table
                </template>
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" class="p-datatable-sm" style="margin-bottom: 2rem"&gt;
    &lt;template #header&gt;
        Small Table
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;DataTable :value="cars" style="margin-bottom: 2rem"&gt;
    &lt;template #header&gt;
        Normal Table
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;DataTable :value="cars" class="p-datatable-lg"&gt;
    &lt;template #header&gt;
        Large Table
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
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