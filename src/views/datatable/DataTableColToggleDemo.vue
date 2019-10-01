<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Column Toggle</h1>
				<p>MultiSelect component can be used to implement column toggle functionality.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars">
                <template #header>
                    <div style="text-align:left">
                        <MultiSelect v-model="columns" :options="columnOptions" optionLabel="header" placeholder="Select Columns" style="width: 20em"/>
                    </div>
                </template>
                <Column field="vin" header="Vin" />
                <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
            </DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;template #header&gt;
        &lt;div style="text-align:left"&gt;
            &lt;MultiSelect v-model="columns" :options="columnOptions" optionLabel="header" placeholder="Select Columns" style="width: 20em"/&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin" /&gt;
    &lt;Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            columns: null,
            columnOptions: null,
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();

        this.columns = [
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

        this.columnOptions = [...this.columns];
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
            columns: null,
            columnOptions: null,
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();

        this.columns = [
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

        this.columnOptions = [...this.columns];
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>