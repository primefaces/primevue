<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Sort</h1>
				<p>Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and used with metaKey.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars">
                <Column field="vin" header="Vin" :sortable="true"></Column>
                <Column field="year" header="Year" :sortable="true"></Column>
                <Column field="brand" header="Brand" :sortable="true"></Column>
                <Column field="color" header="Color" :sortable="true"></Column>
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