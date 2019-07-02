<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Templating</h1>
				<p>Custom content at header, body and footer sections are supported via templating.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars">
                <template #header>
                    <div style="line-height:1.87em" class="clearfix">
                        <Button icon="pi pi-refresh" style="float: right"/>
                        List of Cars 
                    </div>
                </template>
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand">
                    <template #body="slotProps">
                        <img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"  width="48px"/>
                    </template>
                </Column>
                <Column field="color" header="Color"></Column>
                <Column headerStyle="width: 8em" bodyStyle="text-align: center">
                    <template #header>
                        <Button type="button" icon="pi pi-cog"></Button>
                    </template>
                    <template #body="slotProps">
                        <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
                        <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
                    </template>
                </Column>
                <template #footer>
                    In total there are {{cars ? cars.length : 0 }} cars.
                </template>
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