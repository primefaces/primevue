<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Scroll</h1>
				<p>Data scrolling is available horizontally, vertically or both. Virtual Scrolling mode is also provided to deal with large datasets by loading data on demand during scrolling.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <h3>Vertical</h3>
			<DataTable :value="cars" :scrollable="true" scrollHeight="200px">
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>

            <h3>Horizontal and Vertical</h3>
            <DataTable :value="cars" :scrollable="true" scrollHeight="200px" style="width: 600px">
                <Column field="vin" header="Vin" headerStyle="width: 250px" columnKey="vin_1"></Column>
                <Column field="year" header="Year" headerStyle="width: 250px" columnKey="year_1"></Column>
                <Column field="brand" header="Brand" headerStyle="width: 250px" columnKey="brand_1"></Column>
                <Column field="color" header="Color" headerStyle="width: 250px" columnKey="color_1"></Column>
                <Column field="vin" header="Vin" headerStyle="width: 250px" columnKey="vin_2"></Column>
                <Column field="year" header="Year" headerStyle="width: 250px" columnKey="year_2"></Column>
                <Column field="brand" header="Brand" headerStyle="width: 250px" columnKey="brand_2"></Column>
                <Column field="color" header="Color" headerStyle="width: 250px" columnKey="color_2"></Column>
            </DataTable>

            <h3>Frozen Rows</h3>
            <DataTable :value="cars" :frozenValue="frozenCars" :scrollable="true" scrollHeight="200px">
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>

            <h3>Frozen Columns</h3>
            <DataTable :value="cars" :scrollable="true" scrollHeight="200px" frozenWidth="300px">
                <Column field="vin" header="Vin" headerStyle="width: 300px" columnKey="vin_1" :frozen="true">
                    <template #body="slotProps">
                        <span style="font-weight: bold">{{slotProps.data.vin}}</span>
                    </template>
                </Column>
                <Column field="year" header="Year" headerStyle="width: 300px" columnKey="year_1"></Column>
                <Column field="brand" header="Brand" headerStyle="width: 300px" columnKey="brand_1"></Column>
                <Column field="color" header="Color" headerStyle="width: 300px" columnKey="color_1"></Column>
                <Column field="year" header="Year" headerStyle="width: 300px" columnKey="year_2"></Column>
                <Column field="brand" header="Brand" headerStyle="width: 300px" columnKey="brand_2"></Column>
                <Column field="color" header="Color" headerStyle="width: 300px" columnKey="color_2"></Column>
                <Column field="year" header="Year" headerStyle="width: 300px" columnKey="year_3"></Column>
                <Column field="brand" header="Brand" headerStyle="width: 300px" columnKey="brand_3"></Column>
                <Column field="color" header="Color" headerStyle="width: 300px" columnKey="color_3"></Column>
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
            cars: null,
            frozenCars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsLarge().then(data => this.cars = data);

        this.frozenCars = [
            {brand: "BMW", year: 2013, color: "Grey", vin: "fh2uf23"},
            {brand: "Chevrolet", year: 2011, color: "Black", vin: "4525g23"}
        ];
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>