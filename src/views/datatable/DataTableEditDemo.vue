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
			<DataTable :value="cars2" editMode="cell" @edit-init="onEditInit" @edit-complete="onEditComplete" @edit-cancel="onEditCancel">
                <Column field="vin" header="Vin">
                    <template #editor="slotProps">
                        <InputText :value="slotProps.data[slotProps.column.field]" @input="onEdit($event, slotProps)" />
                    </template>
                </Column>
                <Column field="year" header="Year">
                    <template #editor="slotProps">
                        <InputText :value="slotProps.data[slotProps.column.field]" @input="onEdit($event, slotProps)" />
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
                        <InputText :value="slotProps.data[slotProps.column.field]" @input="onEdit($event, slotProps)" />
                    </template>
                </Column>
            </DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Basic Cell Editing&lt;/h3&gt;
&lt;p&gt;Simple editors with v-model.&lt;/p&gt;
&lt;DataTable :value="cars1" editMode="cell"&gt;
    &lt;Column field="vin" header="Vin"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;Dropdown v-model="slotProps.data['brand']" :options="brands" optionLabel="brand" optionValue="value" placeholder="Select a Brand"&gt;
                &lt;template #option="optionProps"&gt;
                    &lt;div class="p-dropdown-car-option"&gt;
                        &lt;img :alt="optionProps.option.brand" :src="'demo/images/car/' + optionProps.option.brand + '.png'" /&gt;
                        &lt;span&gt;&#123;&#123;optionProps.option.brand&#125;&#125;&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/Dropdown&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Advanced Cell Editing&lt;/h3&gt;
&lt;p&gt;Advanced editors with validations and ability to revert values with escape key.&lt;/p&gt;
&lt;DataTable :value="cars2" editMode="cell" @edit-init="onEditInit" @edit-complete="onEditComplete" @edit-cancel="onEditCancel"&gt;
    &lt;Column field="vin" header="Vin"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText :value="slotProps.data[slotProps.column.field]" @input="onEdit($event, slotProps)" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText :value="slotProps.data[slotProps.column.field]" @input="onEdit($event, slotProps)" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;Dropdown v-model="slotProps.data['brand']" :options="brands" optionLabel="brand" optionValue="value" placeholder="Select a Brand"&gt;
                &lt;template #option="optionProps"&gt;
                    &lt;div class="p-dropdown-car-option"&gt;
                        &lt;img :alt="optionProps.option.brand" :src="'demo/images/car/' + optionProps.option.brand + '.png'" /&gt;
                        &lt;span&gt;&#123;&#123;optionProps.option.brand&#125;&#125;&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/Dropdown&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText :value="slotProps.data[slotProps.column.field]" @input="onEdit($event, slotProps)" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';
import DataTableSubMenu from './DataTableSubMenu';
import Vue from 'vue';

export default {
    data() {
        return {
            cars1: null,
            cars2: null,
            editingCar: null,
            editingCarIndex: null,
            originalCar: null,
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
        onEditInit(event) {
            this.editingCarIndex = event.index;
            this.editingCar = {...event.data};      //update on input
            this.originalCar = {...event.data};     //revert with escape key
        },
        onEditComplete(event) {
            switch (event.field) {
                case 'year':
                    if (this.isPositiveInteger(this.editingCar.year)) {
                        Vue.set(this.cars2, this.editingCarIndex, this.editingCar);
                    }
                    else {
                        this.$toast.add({severity:'error', summary: 'Validation Failed', detail:'Year must be a number', life: 3000});
                        event.preventDefault();
                    }
                break;

                default:
                    if (this.editingCar[event.field].trim().length > 0) {
                        Vue.set(this.cars2, this.editingCarIndex, this.editingCar);
                    }
                    else {
                        this.$toast.add({severity:'error', summary: 'Validation Failed', detail: event.field + ' is required', life: 3000});
                        event.preventDefault();
                    }
                break;
            }
        },
        clearEditorState() {
            this.editingCar = null;
            this.originalCar = null;
        },
        onEdit(newValue, props) {
            this.editingCar[props.column.field] = newValue;
        },
        onEditCancel(event) {
            Vue.set(this.cars2, event.index, this.originalCar);
            this.editingCar = null;
        },
        isPositiveInteger(val) {
            let str = String(val);
            str = str.trim();
            if (!str) {
                return false;
            }
            str = str.replace(/^0+/, "") || "0";
            var n = Math.floor(Number(str));
            return n !== Infinity &amp;&amp; String(n) === str &amp;&amp; n >= 0;
        }
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars1 = data);
        this.carService.getCarsSmall().then(data => this.cars2 = data);
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
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
import Vue from 'vue';

export default {
    data() {
        return {
            cars1: null,
            cars2: null,
            editingCar: null,
            editingCarIndex: null,
            originalCar: null,
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
        onEditInit(event) {
            this.editingCarIndex = event.index;
            this.editingCar = {...event.data};      //update on input
            this.originalCar = {...event.data};     //revert with escape key
        },
        onEditComplete(event) {
            switch (event.field) {
                case 'year':
                    if (this.isPositiveInteger(this.editingCar.year)) {
                        Vue.set(this.cars2, this.editingCarIndex, this.editingCar);
                    }
                    else {
                        this.$toast.add({severity:'error', summary: 'Validation Failed', detail:'Year must be a number', life: 3000});
                        event.preventDefault();
                    }
                break;

                default:
                    if (this.editingCar[event.field].trim().length > 0) {
                        Vue.set(this.cars2, this.editingCarIndex, this.editingCar);
                    }
                    else {
                        this.$toast.add({severity:'error', summary: 'Validation Failed', detail: event.field + ' is required', life: 3000});
                        event.preventDefault();
                    }
                break;
            }
        },
        clearEditorState() {
            this.editingCar = null;
            this.originalCar = null;
        },
        onEdit(newValue, props) {
            this.editingCar[props.column.field] = newValue;
        },
        onEditCancel(event) {
            Vue.set(this.cars2, event.index, this.originalCar);
            this.editingCar = null;
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