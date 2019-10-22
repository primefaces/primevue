<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - State</h1>
				<p>Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again, table would render the data using its last settings.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <h3>Session Storage</h3>
			<DataTable :value="cars" :paginator="true" :rows="10" :filters.sync="filters" :resizableColumns="true"
                :selection.sync="selectedCar1" selectionMode="single" dataKey="vin"
                stateStorage="session" stateKey="dt-state-demo-session">
                <template #header>
                    <div style="text-align: right">
                        <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>
                        <InputText v-model="filters['global']" placeholder="Global Search" size="50" />
                    </div>
                </template>
                <Column field="vin" header="Vin" filterMatchMode="startsWith" :sortable="true">
                    <template #filter>
                        <InputText type="text" v-model="filters['vin']" class="p-column-filter" placeholder="Starts with" />
                    </template>
                </Column>
                <Column field="year" header="Year" filterMatchMode="contains" :sortable="true">
                    <template #filter>
                        <InputText type="text" v-model="filters['year']" class="p-column-filter" placeholder="Contains" />
                    </template>
                </Column>
                <Column field="brand" header="Brand" filterMatchMode="equals" :sortable="true">
                    <template #filter>
                        <Dropdown v-model="filters['brand']" :options="brands" optionLabel="brand" optionValue="value" placeholder="Select a Brand" class="p-column-filter" :showClear="true">
                            <template #option="slotProps">
                                <div class="p-clearfix p-dropdown-car-option">
                                    <img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" />
                                    <span>{{slotProps.option.brand}}</span>
                                </div>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <Column field="color" header="Color" filterMatchMode="in" :sortable="true">
                    <template #filter>
                        <MultiSelect v-model="filters['color']" :options="colors" optionLabel="name" optionValue="value" placeholder="Select a Color" />
                    </template>
                </Column>
                <template #empty>
                    No records found.
                </template>
			</DataTable>

            <h3>Local Storage</h3>
			<DataTable :value="cars" :paginator="true" :rows="10" :filters.sync="filters" :resizableColumns="true"
                :selection.sync="selectedCar2" selectionMode="single" dataKey="vin"
                stateStorage="local" stateKey="dt-state-demo-local">
                <template #header>
                    <div style="text-align: right">
                        <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>
                        <InputText v-model="filters['global']" placeholder="Global Search" size="50" />
                    </div>
                </template>
                <Column field="vin" header="Vin" filterMatchMode="startsWith" :sortable="true">
                    <template #filter>
                        <InputText type="text" v-model="filters['vin']" class="p-column-filter" placeholder="Starts with" />
                    </template>
                </Column>
                <Column field="year" header="Year" filterMatchMode="contains" :sortable="true">
                    <template #filter>
                        <InputText type="text" v-model="filters['year']" class="p-column-filter" placeholder="Contains" />
                    </template>
                </Column>
                <Column field="brand" header="Brand" filterMatchMode="equals" :sortable="true">
                    <template #filter>
                        <Dropdown v-model="filters['brand']" :options="brands" optionLabel="brand" optionValue="value" placeholder="Select a Brand" class="p-column-filter" :showClear="true">
                            <template #option="slotProps">
                                <div class="p-clearfix p-dropdown-car-option">
                                    <img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" />
                                    <span>{{slotProps.option.brand}}</span>
                                </div>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <Column field="color" header="Color" filterMatchMode="in" :sortable="true">
                    <template #filter>
                        <MultiSelect v-model="filters['color']" :options="colors" optionLabel="name" optionValue="value" placeholder="Select a Color" />
                    </template>
                </Column>
                <template #empty>
                    No records found.
                </template>
			</DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Session Storage&lt;/h3&gt;
&lt;DataTable :value="cars" :paginator="true" :rows="10" :filters.sync="filters" :resizableColumns="true"
    :selection.sync="selectedCar1" selectionMode="single" dataKey="vin"
    stateStorage="session" stateKey="dt-state-demo-session"&gt;
    &lt;template #header&gt;
        &lt;div style="text-align: right"&gt;
            &lt;i class="pi pi-search" style="margin: 4px 4px 0px 0px;"&gt;&lt;/i&gt;
            &lt;InputText v-model="filters['global']" placeholder="Global Search" size="50" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin" filterMatchMode="startsWith" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['vin']" class="p-column-filter" placeholder="Starts with" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year" filterMatchMode="contains" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['year']" class="p-column-filter" placeholder="Contains" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand" filterMatchMode="equals" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;Dropdown v-model="filters['brand']" :options="brands" optionLabel="brand" optionValue="value" placeholder="Select a Brand" class="p-column-filter" :showClear="true"&gt;
                &lt;template #option="slotProps"&gt;
                    &lt;div class="p-clearfix p-dropdown-car-option"&gt;
                        &lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" /&gt;
                        &lt;span&gt;&#123;&#123;slotProps.option.brand&#125;&#125;&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/Dropdown&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color" filterMatchMode="in" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;MultiSelect v-model="filters['color']" :options="colors" optionLabel="name" optionValue="value" placeholder="Select a Color" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;template #empty&gt;
        No records found.
    &lt;/template&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Local Storage&lt;/h3&gt;
&lt;DataTable :value="cars" :paginator="true" :rows="10" :filters.sync="filters" :resizableColumns="true"
    :selection.sync="selectedCar2" selectionMode="single" dataKey="vin"
    stateStorage="local" stateKey="dt-state-demo-local"&gt;
    &lt;template #header&gt;
        &lt;div style="text-align: right"&gt;
            &lt;i class="pi pi-search" style="margin: 4px 4px 0px 0px;"&gt;&lt;/i&gt;
            &lt;InputText v-model="filters['global']" placeholder="Global Search" size="50" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin" filterMatchMode="startsWith" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['vin']" class="p-column-filter" placeholder="Starts with" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year" filterMatchMode="contains" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['year']" class="p-column-filter" placeholder="Contains" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand" filterMatchMode="equals" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;Dropdown v-model="filters['brand']" :options="brands" optionLabel="brand" optionValue="value" placeholder="Select a Brand" class="p-column-filter" :showClear="true"&gt;
                &lt;template #option="slotProps"&gt;
                    &lt;div class="p-clearfix p-dropdown-car-option"&gt;
                        &lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" /&gt;
                        &lt;span&gt;&#123;&#123;slotProps.option.brand&#125;&#125;&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/Dropdown&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color" filterMatchMode="in" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;MultiSelect v-model="filters['color']" :options="colors" optionLabel="name" optionValue="value" placeholder="Select a Color" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;template #empty&gt;
        No records found.
    &lt;/template&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

export default {
    data() {
        return {
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
            ],
            selectedCar1: null,
            selectedCar2: null,
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsMedium().then(data => this.cars = data);
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
            ],
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsMedium().then(data => this.cars = data);
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>

<style lang="scss" scoped>
/deep/ .p-dropdown-label {
    text-align: left;
}

.p-column-filter {
    margin-top: .5em;
}

.p-multiselect {
    width: 100%;
    margin-top: .5em;
}

.p-dropdown-car-option {
    img {
        vertical-align: middle;
        margin-right: .5em;
        width: 24px;
    }

    span {
        float: right;
        margin-top: .125em;
    }
}
</style>