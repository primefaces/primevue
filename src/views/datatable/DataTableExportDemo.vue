<template>
	<div>
        <DataTableSubMenu />
        
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Export</h1>
				<p>DataTable can export its data to CSV format.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars" ref="dt">
                <template #header>
                    <div style="text-align: left">
                        <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                    </div>
                </template>
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
        this.carService.getCarsSmall().then(data => this.cars = data);
    },
    methods: {
        exportCSV() {
            this.$refs.dt.exportCSV();
        }
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>