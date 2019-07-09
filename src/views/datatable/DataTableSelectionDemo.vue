<template>
	<div>
        <DataTableSubMenu />
        
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Selection</h1>
				<p>DataTable provides single and multiple selection modes based on row click or using radio button and checkbox elements.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<h3 class="first">Single</h3>
            <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>
			<DataTable :value="cars" :selection.sync="selectedCar1" selectionMode="single" dataKey="vin">
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>

            <h3>Multiple</h3>
            <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required. 
                    Setting metaKeySelection property as false enables multiple selection without meta key.</p>
			<DataTable :value="cars" :selection.sync="selectedCars1" selectionMode="multiple" dataKey="vin">
                <template #header>
                    Multiple Selection with MetaKey
                </template>
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>

            <DataTable :value="cars" :selection.sync="selectedCars2" selectionMode="multiple" dataKey="vin" :metaKeySelection="false" style="margin-top: 2em">
                <template #header>
                    Multiple Selection without MetaKey
                </template>
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>

            <h3>Events</h3>
            <p>row-select and row-unselects are available as selection events.</p>
			<DataTable :value="cars" :selection.sync="selectedCar2" selectionMode="single" dataKey="vin"
                @row-select="onRowSelect" @row-unselect="onRowUnselect">
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>

            <h3>RadioButton</h3>
            <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".</p>
			<DataTable :value="cars" :selection.sync="selectedCar3" dataKey="vin">
                <Column selectionMode="single" headerStyle="width: 3em"></Column>
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>
            {{selectedCar3 ? selectedCar3.vin : 'none'}}
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
            cars: null,
            selectedCar1: null,
            selectedCar2: null,
            selectedCar3: null,
            selectedCars1: null,
            selectedCars2: null,
            selectedCars3: null
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
        onRowSelect(event) {
            this.$toast.add({severity: 'info', summary: 'Car Selected', detail: 'Vin: ' + event.data.vin, life: 3000});
        },
        onRowUnselect(event) {
            this.$toast.add({severity: 'warn', summary: 'Car Unselected', detail: 'Vin: ' + event.data.vin, life: 3000});
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