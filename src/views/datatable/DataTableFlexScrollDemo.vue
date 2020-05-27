<template>
	<div class="content-section implementation" style="height: calc(100vh - 143px)">
		<DataTable :value="cars" :scrollable="true" scrollHeight="flex">
            <Column field="vin" header="Vin"></Column>
            <Column field="year" header="Year"></Column>
            <Column field="brand" header="Brand"></Column>
            <Column field="color" header="Color"></Column>
        </DataTable>
	</div>
</template>

<script>
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
        this.carService.getCarsLarge().then(data => this.cars = data);
    }
}
</script>