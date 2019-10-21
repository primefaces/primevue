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
			<DataTable :value="cars" rowGroupMode="subheader" groupRowsBy="brand" 
                sortMode="single" sortField="brand" :sortOrder="1">
                <template #header>
                    Subheader Grouping
                </template>
                <Column field="brand" header="Brand"></Column>
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="color" header="Color"></Column>
                <template #groupheader="slotProps">
                    <strong>{{slotProps.data.brand}}</strong>
                </template>
                <template #groupfooter="slotProps">
                    <td colspan="3" style="text-align: right">Total Price</td>
                    <td>20000</td>
                </template>
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

export default {
    data() {
        return {
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