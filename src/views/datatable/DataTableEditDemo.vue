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
            <p>Advanced editors with validations and ability to revert values with escape key.</p>
			<DataTable :value="cars2" editMode="cell" @cell-edit-init="onCellEditInit" @cell-edit-complete="onCellEditComplete" @cell-edit-cancel="onCellEditCancel">
                <Column field="vin" header="Vin">
                    <template #editor="slotProps">
                        <InputText :value="slotProps.data[slotProps.column.field]" @input="onCellEdit($event)" />
                    </template>
                </Column>
                <Column field="year" header="Year">
                    <template #editor="slotProps">
                        <InputText :value="slotProps.data[slotProps.column.field]" @input="onCellEdit($event)" />
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
                        <InputText :value="slotProps.data[slotProps.column.field]" @input="onCellEdit($event)" />
                    </template>
                </Column>
            </DataTable>

            <h3>Row Editing</h3>
			<DataTable :value="cars3" editMode="row" dataKey="vin" :editingRows.sync="editingRows">
                <Column field="vin" header="Vin"></Column>
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
                <Column :rowEditor="true" headerStyle="width:6em" bodyStyle="text-align:center"></Column>
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
            editingCell: null,
            editingCellIndex: null,
            originalCell: null,
            editingRows: null,
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
    },
    methods: {
        onCellEditInit(event) {
            this.editingRowIndex = event.index;
            this.editingCellValue = event.data[event.field];       //update on input
            this.originalCellValue = event.data[event.field];      //revert with escape key
        },
        onCellEditComplete(event) {
            switch (event.field) {
                case 'year':
                    if (this.isPositiveInteger(this.editingCellValue)) {
                        let editingRow = {...this.cars2[this.editingRowIndex]};
                        editingRow.year = parseInt(this.editingCellValue);
                        Vue.set(this.cars2, this.editingRowIndex, editingRow);
                        this.clearEditState();
                    }
                    else {
                        this.$toast.add({severity:'error', summary: 'Validation Failed', detail:'Year must be a number', life: 3000});
                        event.preventDefault();
                    }
                break;

                default:
                    if (this.editingCellValue.trim().length > 0) {
                        let editingRow = {...this.cars2[this.editingRowIndex]};
                        editingRow[event.field] = this.editingCellValue;
                        Vue.set(this.cars2, this.editingRowIndex, editingRow);
                        this.clearEditState();
                    }
                    else {
                        this.$toast.add({severity:'error', summary: 'Validation Failed', detail: event.field + ' is required', life: 3000});
                        event.preventDefault();
                    }
                break;
            }
        },
        onCellEditCancel(event) {
            
            this.clearEditState();
        },
        onCellEdit(newValue) {
            this.editingCellValue = newValue;
        },
        clearEditState() {
            this.editingCellValue = null;
            this.editingCellValue = null;
            this.originalCellValue = null;
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