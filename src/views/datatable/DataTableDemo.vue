<template>
	<div>
        <DataTableSubMenu />
        
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable</h1>
				<p>DataTable displays data in tabular format.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<h3 class="first">Basic</h3>
			<DataTable :value="cars">
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>

            <h3>Dynamic Columns</h3>
			<DataTable :value="cars" :columns="columns">
                <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
            </DataTable>

            <button type="button" @click="add">Add</button>
		</div>

        <DataTableDoc />
	</div>
</template>

<script>
import CarService from '../../service/CarService';
import DataTableSubMenu from './DataTableSubMenu';
import DataTableDoc from './DataTableDoc';

export default {
    data() {
        return {
            columns: null,
            cars: null,
            i: 0
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
        ]
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    },
    methods: {
        add() {
            this.i++;
            this.columns.push({field: 'color' + this.i, header: 'Color' + this.i});
            this.columns = [...this.columns];
        }
    },
    components: {
        'DataTableDoc': DataTableDoc,
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>

<style lang="scss">

</style>