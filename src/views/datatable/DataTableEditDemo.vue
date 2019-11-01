<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable</h1>
				<p>In cell editing provides a rapid and user friendly way to manipulate the data. The datatable provides a flexible API 
                    so that the editing behavior is implemented by the page author whether it utilizes v-model or vuex.
                </p>
			</div>
		</div>

		<div class="content-section implementation">
            <h3>Basic Cell Editing</h3>
            <p>Simple editors with v-model.</p>
			<DataTable :value="cars1" editMode="cell">
                <Column field="vin" header="Vin">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.field]" />
                    </template>
                </Column>
                <Column field="year" header="Year">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.field]" />
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
                        <InputText v-model="slotProps.data[slotProps.column.field]" />
                    </template>
                </Column>
            </DataTable>

            <h3>Advanced Cell Editing</h3>
            <p>Custom implementation with validations, dynamic columns and ability to revert values with the escape key.</p>
			<DataTable :value="cars2" editMode="cell" @cell-edit-complete="onCellEditComplete">
                <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field">
                    <template #editor="slotProps">
                        <InputText :value="slotProps.data[slotProps.column.field]" @input="onCellEdit($event, slotProps)" />
                    </template>
                </Column>
            </DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>

</template>
</CodeHighlight>

<CodeHighlight lang="javascript">

</CodeHighlight>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<script>
import CarService from '../../service/CarService';
import DataTableSubMenu from './DataTableSubMenu';
import Vue from 'vue';

export default {
    data() {
        return {
            cars1: null,
            cars2: null,
            cars3: null,
            editingRows: {},
            columns: null,
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
    methods: {
        onCellEditComplete(event) {
            if (!this.editingRows[event.index]) {
                return;
            }
            
            const editingCellValue = this.editingRows[event.index][event.field];

            switch (event.field) {
                case 'year':
                    if (this.isPositiveInteger(editingCellValue))
                        Vue.set(this.cars2, event.index, this.editingRows[event.index]);
                    else
                        event.preventDefault();
                break;

                default:
                    if (editingCellValue.trim().length > 0)
                        Vue.set(this.cars2, event.index, this.editingRows[event.index]);
                    else
                        event.preventDefault();
                break;
            }
        },
        onCellEdit(newValue, props) {
            if (!this.editingRows[props.index]) {
                this.editingRows[props.index] = {...props.data};
            }

            this.editingRows[props.index][props.column.field] = newValue;
        },
        isPositiveInteger(val) {
            let str = String(val);
            str = str.trim();
            if (!str) {
                return false;
            }
            str = str.replace(/^0+/, "") || "0";
            var n = Math.floor(Number(str));
            return n !== Infinity && String(n) === str && n >= 0;
        }
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars1 = data);
        this.carService.getCarsSmall().then(data => this.cars2 = data);
        this.carService.getCarsSmall().then(data => this.cars3 = data);
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