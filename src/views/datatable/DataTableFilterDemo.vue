<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Filter</h1>
				<p>Filtering is enabled by defining a filter template per column to populate the filters property of the DataTable.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars" :filters="filters" :paginator="true" :rows="10">
                <template #header>
                    <div style="text-align: right">
                        <i class="pi pi-search" style="margin: 4px 4px 0 0"></i>
                        <InputText v-model="filters['global']" placeholder="Global Search" size="50" />
                    </div>
                </template>
                <Column field="vin" header="Vin" filterMatchMode="startsWith">
                    <template #filter>
                        <InputText type="text" v-model="filters['vin']" class="p-column-filter" placeholder="Starts with" />
                    </template>
                </Column>
                <Column field="year" header="Year" filterMatchMode="contains">
                    <template #filter>
                        <InputText type="text" v-model="filters['year']" class="p-column-filter" placeholder="Contains" />
                    </template>
                </Column>
                <Column field="brand" header="Brand" filterMatchMode="equals">
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
                <Column field="color" header="Color" filterMatchMode="in">
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
&lt;DataTable :value="cars" :filters="filters" :paginator="true" :rows="10"&gt;
    &lt;template #header&gt;
        &lt;div style="text-align: right"&gt;
            &lt;i class="pi pi-search" style="margin: 4px 4px 0 0"&gt;&lt;/i&gt;
            &lt;InputText v-model="filters['global']" placeholder="Global Search" size="50" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin" filterMatchMode="startsWith"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['vin']" class="p-column-filter" placeholder="Starts with" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year" filterMatchMode="contains"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['year']" class="p-column-filter" placeholder="Contains" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand" filterMatchMode="equals"&gt;
        &lt;template #filter&gt;
            &lt;Dropdown v-model="filters['brand']" :options="brands" optionLabel="brand" optionValue="value" placeholder="Select a Brand" class="p-column-filter" :showClear="true"&gt;
                &lt;template #option="slotProps"&gt;
                    &lt;div class="p-clearfix p-dropdown-car-option"&gt;
                        &lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" /&gt;
                        &lt;span&gt;{{slotProps.option.brand}}&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/Dropdown&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color" filterMatchMode="in"&gt;
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
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsLarge().then(data => this.cars = data);
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
        this.carService.getCarsLarge().then(data => this.cars = data);
    }
}
</script>

<style lang="scss" scoped>
/deep/ .p-dropdown-label {
    text-align: left;
}

.p-filter-column {
    .p-multiselect, .p-dropdown, .p-inputtext {
        width: 100%;
    }
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
