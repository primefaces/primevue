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