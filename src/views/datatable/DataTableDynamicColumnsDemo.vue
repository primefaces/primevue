<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Dynamic Columns</h1>
				<p>Columns can be defined dynamically using the v-for directive.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars">
                <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
            </DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars"&gt;
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
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();

        this.columns = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
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

export default {
    data() {
        return {
            columns: null,
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();

        this.columns = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    }
}
</script>