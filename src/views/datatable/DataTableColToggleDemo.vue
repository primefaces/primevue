<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Column Toggle</span></h1>
				<p>MultiSelect component can be used to implement column toggle functionality.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="cars">
                    <template #header>
                        <div style="text-align:left">
                            <MultiSelect :value="selectedColumns" :options="columns" optionLabel="header" @input="onToggle"
                                placeholder="Select Columns" style="width: 20em"/>
                        </div>
                    </template>
                    <Column field="vin" header="Vin" />
                    <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;template #header&gt;
        &lt;div style="text-align:left"&gt;
            &lt;MultiSelect :value="selectedColumns" :options="columns" optionLabel="header" @input="onToggle"
                placeholder="Select Columns" style="width: 20em"/&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin" /&gt;
    &lt;Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            selectedColumns: null,
            columns: null,
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
        this.selectedColumns = this.columns;
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    },
    methods: {
        onToggle(value) {
            this.selectedColumns = this.columns.filter(col => value.includes(col));
        }
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

export default {
    data() {
        return {
            selectedColumns: null,
            columns: null,
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
        this.selectedColumns = this.columns;
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    },
    methods: {
        onToggle(value) {
            this.selectedColumns = this.columns.filter(col => value.includes(col));
        }
    }
}
</script>