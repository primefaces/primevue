<template>
	<div>
        <DataTableSubMenu />
        
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Crud</h1>
				<p>This samples demonstrates a CRUD implementation using various PrimeReact components.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars" selectionMode="single" :selection.sync="selectedCar" @row-select="onRowSelect" dataKey="vin"
                :paginator="true" :rows="15">
                <template #header>
                    CRUD for Cars
                </template>
                <Column field="vin" header="Vin" :sortable="true"></Column>
                <Column field="year" header="Year" :sortable="true"></Column>
                <Column field="brand" header="Brand" :sortable="true"></Column>
                <Column field="color" header="Color" :sortable="true"></Column>
                <template #footer>
                    <div style="text-align:left">
                        <Button abel="Add" icon="pi pi-plus" @click="addNewCar" />
                    </div>
                </template>
            </DataTable>

            <Dialog :visible.sync="dialogVisible" :style="{width: '400px'}" header="Car Details" :modal="true">
                <div class="p-cardialog-content">
                    <div class="p-grid p-fluid" v-if="car">
                        <div class="p-col-4"><label for="vin">Vin</label></div>
                        <div class="p-col-8">
                            <InputText id="vin" v-model="car.vin" :disabled="true" autocomplete="off" />
                        </div>

                        <div class="p-col-4"><label for="year">Year</label></div>
                        <div class="p-col-8">
                            <InputText id="year" v-model="car.year" autocomplete="off" />
                        </div>

                        <div class="p-col-4"><label for="brand">Brand</label></div>
                        <div class="p-col-8">
                            <InputText id="brand" v-model="car.brand" autocomplete="off" />
                        </div>
                        
                        <div class="p-col-4"><label for="color">Color</label></div>
                        <div class="p-col-8">
                            <InputText id="color" v-model="car.color" autocomplete="off" />
                        </div>
                    </div>
                </div>
                
                <template #footer>
                    <Button label="Delete" icon="pi pi-times" @click="deleteCar" class="p-button-danger" />
                    <Button label="Save" icon="pi pi-check" @click="saveCar" class="p-button-success" />
                </template>
            </Dialog>
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
            dialogVisible: false,
            car: null,
            selectedCar: null
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
        addNewCar() {
            this.car = {vin: this.generateVin(), year: '', brand: '', color: ''};
            this.dialogVisible = true;
        },
        deleteCar() {
            let index = this.findIndexByVin(this.car.vin);
            this.cars = this.cars.filter((val,i) => i !== index);
            this.dialogVisible = false;
            this.car = null;
            this.selectedCar = null;
        },
        saveCar() {
            let index = this.findIndexByVin(this.car.vin);
            let cars = [...this.cars];
            if (index === -1)
                cars.push(this.car);
            else
                cars[index] = this.car;

            this.cars = cars;
            this.dialogVisible = false;
            this.car = null;
            this.selectedCar = null;
        },
        onRowSelect(event) {
            this.car = {...event.data};
            this.dialogVisible = true;
        },
        generateVin() {
            let result = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for ( var i = 0; i < 8; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        },
        findIndexByVin(vin) {
            let index = -1;
            for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].vin === vin) {
                    index = i;
                    break;
                }
            }

            return index;
        }
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>

<style scoped>
.p-cardialog-content {
    padding: 1em;
}

.p-cardialog-content .p-col-4 {
    padding: .75em;
}

.p-cardialog-content .p-col-8 {
    padding: .5em;
}
</style>