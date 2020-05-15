<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>InCell Edit</span></h1>
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
            <p>Custom implementation with validations, dynamic columns and reverting values with the escape key.</p>
			<DataTable :value="cars2" editMode="cell" @cell-edit-complete="onCellEditComplete">
                <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field">
                    <template #editor="slotProps">
                        <InputText :value="slotProps.data[slotProps.column.field]" @input="onCellEdit($event, slotProps)" />
                    </template>
                </Column>
            </DataTable>

            <h3>Row Editing</h3>
            <DataTable :value="cars3" editMode="row" dataKey="vin" :editingRows.sync="editingRows"
                @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel">
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.field]" />
                    </template>
                </Column>
                <Column field="brand" header="Brand">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.field]" />
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
                        &lt;span&gt;{{optionProps.option.brand}}&lt;/span&gt;
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
&lt;p&gt;Custom implementation with validations, dynamic columns and reverting values with the escape key.&lt;/p&gt;
&lt;DataTable :value="cars2" editMode="cell" @cell-edit-complete="onCellEditComplete"&gt;
    &lt;Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText :value="slotProps.data[slotProps.column.field]" @input="onCellEdit($event, slotProps)" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Row Editing&lt;/h3&gt;
&lt;DataTable :value="cars3" editMode="row" dataKey="vin" :editingRows.sync="editingRows"
    @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column :rowEditor="true" headerStyle="width:6em" bodyStyle="text-align:center"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';
import Vue from 'vue';

export default {
    data() {
        return {
            cars1: null,
            cars2: null,
            cars3: null,
            editingCellRows: {},
            editingRows: [],
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
    originalRows: null,
    created() {
        this.carService = new CarService();

        this.columns = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

        this.originalRows = {};
    },
    methods: {
        onCellEditComplete(event) {
            if (!this.editingCellRows[event.index]) {
                return;
            }

            const editingCellValue = this.editingCellRows[event.index][event.field];

            switch (event.field) {
                case 'year':
                    if (this.isPositiveInteger(editingCellValue))
                        Vue.set(this.cars2, event.index, this.editingCellRows[event.index]);
                    else
                        event.preventDefault();
                break;

                default:
                    if (editingCellValue.trim().length > 0)
                        Vue.set(this.cars2, event.index, this.editingCellRows[event.index]);
                    else
                        event.preventDefault();
                break;
            }
        },
        onCellEdit(newValue, props) {
            if (!this.editingCellRows[props.index]) {
                this.editingCellRows[props.index] = {...props.data};
            }

            this.editingCellRows[props.index][props.column.field] = newValue;
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
        },
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.cars3[event.index]};
        },
        onRowEditCancel(event) {
            Vue.set(this.cars3, event.index, this.originalRows[event.index]);
        }
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars1 = data);
        this.carService.getCarsSmall().then(data => this.cars2 = data);
        this.carService.getCarsSmall().then(data => this.cars3 = data);
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
import Vue from 'vue';

export default {
    data() {
        return {
            cars1: null,
            cars2: null,
            cars3: null,
            editingCellRows: {},
            editingRows: [],
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
    originalRows: null,
    created() {
        this.carService = new CarService();

        this.columns = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

        this.originalRows = {};
    },
    methods: {
        onCellEditComplete(event) {
            if (!this.editingCellRows[event.index]) {
                return;
            }

            const editingCellValue = this.editingCellRows[event.index][event.field];

            switch (event.field) {
                case 'year':
                    if (this.isPositiveInteger(editingCellValue))
                        Vue.set(this.cars2, event.index, this.editingCellRows[event.index]);
                    else
                        event.preventDefault();
                break;

                default:
                    if (editingCellValue.trim().length > 0)
                        Vue.set(this.cars2, event.index, this.editingCellRows[event.index]);
                    else
                        event.preventDefault();
                break;
            }
        },
        onCellEdit(newValue, props) {
            if (!this.editingCellRows[props.index]) {
                this.editingCellRows[props.index] = {...props.data};
            }

            this.editingCellRows[props.index][props.column.field] = newValue;
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
        },
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.cars3[event.index]};
        },
        onRowEditCancel(event) {
            Vue.set(this.cars3, event.index, this.originalRows[event.index]);
        }
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars1 = data);
        this.carService.getCarsSmall().then(data => this.cars2 = data);
        this.carService.getCarsSmall().then(data => this.cars3 = data);
    }
}
</script>

<style lang="scss" scoped>
/deep/ .p-datatable th,
/deep/ .p-datatable td {
    height: 3.5rem;
}

.p-dropdown-car-option {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        margin-right: .5rem;
        width: 24px;
    }

    span {
        margin-top: .125rem;
    }
}
</style>