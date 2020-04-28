<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Row Grouping</h1>
				<p>Rows can either be grouped by a separate grouping row or using rowspan.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <h3>Subheader Grouping</h3>
			<DataTable :value="cars" rowGroupMode="subheader" groupRowsBy="brand"
                sortMode="single" sortField="brand" :sortOrder="1">
                <Column field="brand" header="Brand"></Column>
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="color" header="Color"></Column>
                <Column field="price" header="Price"></Column>
                <template #groupheader="slotProps">
                    <span>{{slotProps.data.brand}}</span>
                </template>
                <template #groupfooter="slotProps">
                    <td colspan="3" style="text-align: right">Total Price</td>
                    <td>{{calculateGroupTotal(slotProps.data.brand)}}</td>
                </template>
            </DataTable>

            <h3>Expandable Row Groups</h3>
			<DataTable :value="cars" rowGroupMode="subheader" groupRowsBy="brand"
                sortMode="single" sortField="brand" :sortOrder="1"
                :expandableRowGroups="true" :expandedRowGroups.sync="expandedRowGroups"
                @rowgroup-expand="onRowGroupExpand" @rowgroup-collapse="onRowGroupCollapse">
                <Column field="brand" header="Brand"></Column>
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="color" header="Color"></Column>
                <Column field="price" header="Price"></Column>
                <template #groupheader="slotProps">
                    <span>{{slotProps.data.brand}}</span>
                </template>
                <template #groupfooter="slotProps">
                    <td colspan="3" style="text-align: right">Total Price</td>
                    <td>{{calculateGroupTotal(slotProps.data.brand)}}</td>
                </template>
            </DataTable>

            <h3>RowSpan Grouping</h3>
			<DataTable :value="cars" rowGroupMode="rowspan" groupRowsBy="brand"
                sortMode="single" sortField="brand" :sortOrder="1">
                <Column header="#" headerStyle="width:3em">
                    <template #body="slotProps">
                        {{slotProps.index}}
                    </template>
                </Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="vin" header="Vin"></Column>
                <Column field="color" header="Color"></Column>
                <Column field="price" header="Price"></Column>
            </DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Subheader Grouping&lt;/h3&gt;
&lt;DataTable :value="cars" rowGroupMode="subheader" groupRowsBy="brand"
    sortMode="single" sortField="brand" :sortOrder="1"&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;Column field="price" header="Price"&gt;&lt;/Column&gt;
    &lt;template #groupheader="slotProps"&gt;
        &lt;span&gt;&#123;&#123;slotProps.data.brand&#125;&#125;&lt;/span&gt;
    &lt;/template&gt;
    &lt;template #groupfooter="slotProps"&gt;
        &lt;td colspan="3" style="text-align: right"&gt;Total Price&lt;/td&gt;
        &lt;td&gt;&#123;&#123;calculateGroupTotal(slotProps.data.brand)&#125;&#125;&lt;/td&gt;
    &lt;/template&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Expandable Row Groups&lt;/h3&gt;
&lt;DataTable :value="cars" rowGroupMode="subheader" groupRowsBy="brand"
    sortMode="single" sortField="brand" :sortOrder="1"
    :expandableRowGroups="true" :expandedRowGroups.sync="expandedRowGroups"
    @rowgroup-expand="onRowExpand" @rowgroup-collapse="onRowCollapse"&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;Column field="price" header="Price"&gt;&lt;/Column&gt;
    &lt;template #groupheader="slotProps"&gt;
        &lt;span&gt;&#123;&#123;slotProps.data.brand&#125;&#125;&lt;/span&gt;
    &lt;/template&gt;
    &lt;template #groupfooter="slotProps"&gt;
        &lt;td colspan="3" style="text-align: right"&gt;Total Price&lt;/td&gt;
        &lt;td&gt;&#123;&#123;calculateGroupTotal(slotProps.data.brand)&#125;&#125;&lt;/td&gt;
    &lt;/template&gt;
&lt;/DataTable&gt;

&lt;h3&gt;RowSpan Grouping&lt;/h3&gt;
&lt;DataTable :value="cars" rowGroupMode="rowspan" groupRowsBy="brand"
    sortMode="single" sortField="brand" :sortOrder="1"&gt;
    &lt;Column header="#" headerStyle="width:3em"&gt;
        &lt;template #body="slotProps"&gt;
            &#123;&#123;slotProps.index&#125;&#125;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;Column field="price" header="Price"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            cars: null,
            expandedRowGroups: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsMedium().then(data => this.cars = data);
    },
    methods: {
        onRowGroupExpand(event) {
            this.$toast.add({severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000});
        },
        onRowGroupCollapse(event) {
            this.$toast.add({severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000});
        },
        calculateGroupTotal(brand) {
            let total = 0;

            if (this.cars) {
                for (let car of this.cars) {
                    if (car.brand === brand) {
                        total += car.price;
                    }
                }
            }

            return total;
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
            expandedRowGroups: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsMedium().then(data => this.cars = data);
    },
    methods: {
        onRowGroupExpand(event) {
            this.$toast.add({severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000});
        },
        onRowGroupCollapse(event) {
            this.$toast.add({severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000});
        },
        calculateGroupTotal(brand) {
            let total = 0;

            if (this.cars) {
                for (let car of this.cars) {
                    if (car.brand === brand) {
                        total += car.price;
                    }
                }
            }

            return total;
        }
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>

<style lang="scss" scoped>
.p-rowgroup-footer td {
    font-weight: 700;
}

::v-deep .p-rowgroup-header {
    span {
        font-weight: 700;
    }

    .p-row-toggler {
        vertical-align: middle;
        margin-right: .25em;
    }
}


</style>