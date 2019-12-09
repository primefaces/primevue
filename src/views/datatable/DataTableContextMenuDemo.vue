<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - ContextMenu</h1>
				<p>CDataTable has exclusive integration with ContextMenu.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars" :contextMenuSelection.sync="selectedCar" @row-contextmenu="onRowContextMenu">
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>

            <ContextMenu :model="menuModel" ref="cm" />
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :contextMenuSelection.sync="selectedCar" @row-contextmenu="onRowContextMenu"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;ContextMenu :model="menuModel" ref="cm" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            cars: null,
            selectedCar: null,
            menuModel: [
                {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewCar(this.selectedCar)},
                {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteCar(this.selectedCar)}
            ]
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
        onRowContextMenu(event) {
            this.$refs.cm.show(event.originalEvent);
        },
        viewCar(car) {
            this.$toast.add({severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand});
        },
        deleteCar(car) {
            this.cars = this.cars.filter((c) => c.vin !== car.vin);
            this.$toast.add({severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand});
            this.selectedCar = null;
        }
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
import DataTableSubMenu from './DataTableSubMenu';

export default {
    data() {
        return {
            cars: null,
            selectedCar: null,
            menuModel: [
                {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewCar(this.selectedCar)},
                {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteCar(this.selectedCar)}
            ]
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
        onRowContextMenu(event) {
            this.$refs.cm.show(event.originalEvent);
        },
        viewCar(car) {
            this.$toast.add({severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand});
        },
        deleteCar(car) {
            this.cars = this.cars.filter((c) => c.vin !== car.vin);
            this.$toast.add({severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand});
            this.selectedCar = null;
        }
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>