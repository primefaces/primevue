<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Paginator</h1>
				<p>Pagination is enabled by setting paginator property to true and defining the rows attribute as the number of rows per page.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars" :paginator="true" :rows="10">
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
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
        this.carService.getCarsLarge().then(data => this.cars = data);
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>