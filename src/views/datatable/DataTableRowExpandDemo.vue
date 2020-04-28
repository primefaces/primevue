<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Row Expansion</h1>
				<p>A row can be expanded to display additional content.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars" :expandedRows.sync="expandedRows" dataKey="vin"
                @row-expand="onRowExpand" @row-collapse="onRowCollapse">
                <template #header>
                    <div class="table-header-container">
                        <Button icon="pi pi-plus" label="Expand All" @click="expandAll" />
                        <Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
                    </div>
                </template>
                <Column :expander="true" headerStyle="width: 3em" />
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
                <template #expansion="slotProps">
                    <div class="car-details">
                        <div>
                            <img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/>
                            <div class="p-grid">
                                <div class="p-col-12">Vin: <b>{{slotProps.data.vin}}</b></div>
                                <div class="p-col-12">Year: <b>{{slotProps.data.year}}</b></div>
                                <div class="p-col-12">Brand: <b>{{slotProps.data.brand}}</b></div>
                                <div class="p-col-12">Color: <b>{{slotProps.data.color}}</b></div>
                            </div>
                        </div>
                        <Button icon="pi pi-search"></Button>
                    </div>
                </template>
            </DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :expandedRows.sync="expandedRows" dataKey="vin"
    @row-expand="onRowExpand" @row-collapse="onRowCollapse"&gt;
    &lt;template #header&gt;
        &lt;div class="table-header-container"&gt;
            &lt;Button icon="pi pi-plus" label="Expand All" @click="expandAll" /&gt;
            &lt;Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column :expander="true" headerStyle="width: 3em" /&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;template #expansion="slotProps"&gt;
        &lt;div class="car-details"&gt;
            &lt;div&gt;
                &lt;img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/&gt;
                &lt;div class="p-grid"&gt;
                    &lt;div class="p-col-12"&gt;Vin: &lt;b&gt;&#123;&#123;slotProps.data.vin&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                    &lt;div class="p-col-12"&gt;Year: &lt;b&gt;&#123;&#123;slotProps.data.year&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                    &lt;div class="p-col-12"&gt;Brand: &lt;b&gt;&#123;&#123;slotProps.data.brand&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                    &lt;div class="p-col-12"&gt;Color: &lt;b&gt;&#123;&#123;slotProps.data.color&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;Button icon="pi pi-search"&gt;&lt;/Button&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            cars: null,
            expandedRows: []
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
        onRowExpand(event) {
            this.$toast.add({severity: 'info', summary: 'Row Expanded', detail: 'Vin: ' + event.data.vin, life: 3000});
        },
        onRowCollapse(event) {
            this.$toast.add({severity: 'success', summary: 'Row Collapsed', detail: 'Vin: ' + event.data.vin, life: 3000});
        },
        expandAll() {
            this.expandedRows = this.cars.filter(car => car.vin);
            this.$toast.add({severity: 'success', summary: 'All Rows Expanded', life: 3000});
        },
        collapseAll() {
            this.expandedRows = null;
            this.$toast.add({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
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
            expandedRows: []
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
        onRowExpand(event) {
            this.$toast.add({severity: 'info', summary: 'Row Expanded', detail: 'Vin: ' + event.data.vin, life: 3000});
        },
        onRowCollapse(event) {
            this.$toast.add({severity: 'success', summary: 'Row Collapsed', detail: 'Vin: ' + event.data.vin, life: 3000});
        },
        expandAll() {
            this.expandedRows = this.cars.filter(car => car.vin);
            this.$toast.add({severity: 'success', summary: 'All Rows Expanded', life: 3000});
        },
        collapseAll() {
            this.expandedRows = null;
            this.$toast.add({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
        }
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>

<style lang="scss" scoped>
.table-header-container {
    text-align: left;

    button {
        min-width: 10em;

        &:first-child {
            margin-right: .5em;
        }
    }
}

.car-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;

    & > div {
        display: flex;
        align-items: center;

        img {
            margin-right: 14px;
        }
    }
}

@media (max-width: 1024px) {
	.car-details {
        img {
            width: 75px;
        }
    }
}
</style>