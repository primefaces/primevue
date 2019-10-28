<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable</h1>
				<p>Cell and Row editing provide a rapid and user friendly way to manipulate data within the table.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <h3>Cell Editing</h3>
			<DataTable :value="cars">
                <Column field="vin" header="Vin">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.field]" />
                    </template>
                </Column>
                <Column field="year" header="Year">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data['year']" />
                    </template>
                </Column>
                <Column field="brand" header="Brand">
                    <template #editor="slotProps">
                        <Dropdown v-model="slotProps.data['brand']" :options="brands" optionLabel="brand" optionValue="value" placeholder="Select a Brand">
                            <template #option="optionProps">
                                <div class="p-dropdown-car-option">
                                    <img :alt="optionProps.option.brand" :src="'demo/images/car/' + optionProps.option.brand + '.png'" />
                                    <span>{{optionProps.option.brand}}</span>
                                </div>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <Column field="color" header="Color">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data['color']" />
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
            columns: null,
            cars: null,
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
            ]
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();

        this.columns = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>

<style lang="scss" scoped>
/deep/ .p-datatable th,
/deep/ .p-datatable td {
    height: 3.5em;
}

.p-dropdown-car-option {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        margin-right: .5em;
        width: 24px;
    }

    span {
        margin-top: .125em;
    }
}
</style>