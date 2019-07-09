<template>
	<div>
        <DataTableSubMenu />
        
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Responsive</h1>
				<p>DataTable display can be optimized according to screen sizes, this example demonstrates a demo where columns are stacked on small screens.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars" class="p-datatable-responsive">
                <template #header>
                    Responsive
                </template>
                <Column field="vin" header="Vin">
                    <template #body="slotProps">
                        <span class="p-column-title">Vin</span>
                        {{slotProps.data.vin}}
                    </template>
                </Column>
                <Column field="year" header="Year">
                    <template #body="slotProps">
                        <span class="p-column-title">Year</span>
                        {{slotProps.data.year}}
                    </template>
                </Column>
                <Column field="brand" header="Brand">
                    <template #body="slotProps">
                        <span class="p-column-title">Brand</span>
                        {{slotProps.data.brand}}
                    </template>
                </Column>
                <Column field="color" header="Color">
                    <template #body="slotProps">
                        <span class="p-column-title">Color</span>
                        {{slotProps.data.color}}
                    </template>
                </Column>
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

<style>
.p-datatable-responsive .p-datatable-tbody > tr > td .p-column-title {
    display: none;
}

@media screen and (max-width: 40em) {
    .p-datatable-responsive .p-datatable-thead > tr > th,
    .p-datatable-responsive .p-datatable-tfoot > tr > td {
        display: none !important;
    }

    .p-datatable-responsive .p-datatable-tbody > tr > td {
        text-align: left;
        display: block;
        border: 0 none;
        width: 100% !important;
		float: left;
		clear: left;
    }

    .p-datatable-responsive .p-datatable-tbody > tr > td .p-column-title {
        padding: .4em;
        min-width: 30%;
        display: inline-block;
        margin: -.4em 1em -.4em -.4em;
        font-weight: bold;
    }
}
</style>