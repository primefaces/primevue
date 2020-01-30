<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable</h1>
				<p>DataTable displays data in tabular format.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="p-card">
                <div class="p-card-body" style="padding:0">
                    <DataTable :value="cars" class="p-datatable-responsive p-datatable-cars" :selection.sync="selectedCar" selectionMode="single" 
                        dataKey="vin" :paginator="true" :rows="10" :filters="filters">
                        <template #header>
                            List of Cars
                            <div class="p-datatable-globalfilter-container">
                                <InputText v-model="filters['global']" placeholder="Global Search" />
                            </div>
                        </template>
                        <Column field="vin" header="Vin" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Vin</span>
                                {{slotProps.data.vin}}
                            </template>
                            <template #filter>
                                <InputText type="text" v-model="filters['vin']" class="p-column-filter" placeholder="Starts with" />
                            </template>
                        </Column>
                        <Column field="year" header="Year" :sortable="true" filterMatchMode="contains">
                            <template #body="slotProps">
                                <span class="p-column-title">Year</span>
                                {{slotProps.data.year}}
                            </template>
                            <template #filter>
                                <InputText type="text" v-model="filters['year']" class="p-column-filter" placeholder="Contains" />
                            </template>
                        </Column>
                        <Column field="brand" header="Brand" :sortable="true" filterMatchMode="equals">
                            <template #body="slotProps">
                                <span class="p-column-title">Brand</span>
                                <img :alt="slotProps.data.brand" :src="'demo/images/car/' + slotProps.data.brand + '.png'" width="50" style="vertical-align:middle; margin-right: 1em"/>
                                <span style="vertical-align:middle">{{slotProps.data.brand}}</span>
                            </template>
                            <template #filter>
                                <Dropdown v-model="filters['brand']" :options="brands" optionLabel="brand" optionValue="value" placeholder="Select a Brand" class="p-column-filter" :showClear="true">
                                    <template #option="brandSlotProps">
                                        <div class="p-clearfix p-dropdown-car-option">
                                            <img :alt="brandSlotProps.option.brand" :src="'demo/images/car/' + brandSlotProps.option.brand + '.png'" />
                                            <span>{{brandSlotProps.option.brand}}</span>
                                        </div>
                                    </template>
                                </Dropdown>
                            </template>
                        </Column>
                        <Column field="color" header="Color" :sortable="true" filterMatchMode="in">
                            <template #body="slotProps">
                                <span class="p-column-title">Color</span>
                                {{slotProps.data.color}}
                            </template>
                            <template #filter>
                                <MultiSelect v-model="filters['color']" :options="colors" optionLabel="name" optionValue="value" placeholder="Select a Color" class="p-column-filter" />
                            </template>
                        </Column>
                        <Column headerStyle="width: 8em; text-align: center" bodyStyle="text-align: center">
                            <template #body="slotProps">
                                <span class="p-column-title">Color</span>
                                {{slotProps.data.color}}
                            </template>
                            <template #header>
                                <Button type="button" icon="pi pi-cog"></Button>
                            </template>
                            <template #body>
                                <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
                                <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>
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
            selectedCar: null,
            filters: {},
            brands: [
                {brand: 'Audi', value: 'Audi'},
                {brand: 'BMW', value: 'BMW'},
                {brand: 'Fiat', value: 'Fiat'},
                {brand: 'Honda', value: 'Honda'},
                {brand: 'Jaguar', value: 'Jaguar'},
                {brand: 'Mercedes', value: 'Mercedes'},
                {brand: 'Renault', value: 'Renault'},
                {brand: 'Volkswagen', value: 'Volkswagen'},
                {brand: 'Volvo', value: 'Volvo'}
            ],
            colors: [
                {name: 'White', value: 'White'},
                {name: 'Green', value: 'Green'},
                {name: 'Silver', value: 'Silver'},
                {name: 'Black', value: 'Black'},
                {name: 'Red', value: 'Red'},
                {name: 'Maroon', value: 'Maroon'},
                {name: 'Brown', value: 'Brown'},
                {name: 'Orange', value: 'Orange'},
                {name: 'Blue', value: 'Blue'}
            ]
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
        'DataTableDoc': DataTableDoc,
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>

<style lang="scss" scoped>
.p-column-filter {
    margin-top: 1em;
}

.p-dropdown-car-option {
    display: flex;
    align-items: center;
    text-align: left;

    img {
        margin-right: .5em;
        width: 24px;
    }

    span {
        margin-top: .125em;
    }
}

.p-datatable-globalfilter-container {
    float: right;

    input {
        width: 250px;
    }
}

/deep/ .p-datatable.p-datatable-cars {
    .p-datatable-header {
        border: 0 none;
        padding: 12px;
        text-align: left;
        font-size: 20px;
    }

    .p-paginator {
        border: 0 none;
        padding: 1em;
    }

    .p-datatable-thead > tr > th {
        border: 0 none;
        text-align: left;
    }

    .p-column-title {
        font-size: 16px;
    }

    .p-datatable-tbody > tr > td {
        border: 0 none;
    }
}
</style>