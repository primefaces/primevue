<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Sort</span></h1>
				<p>Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and used with metaKey.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <h5>Single Column</h5>
			<DataTable :value="cars">
                <Column field="vin" header="Vin" :sortable="true"></Column>
                <Column field="year" header="Year" :sortable="true"></Column>
                <Column field="brand" header="Brand" :sortable="true"></Column>
                <Column field="color" header="Color" :sortable="true"></Column>
            </DataTable>

            <h5>Multiple Columns</h5>
			<DataTable :value="cars" sortMode="multiple">
                <Column field="vin" header="Vin" :sortable="true"></Column>
                <Column field="year" header="Year" :sortable="true"></Column>
                <Column field="brand" header="Brand" :sortable="true"></Column>
                <Column field="color" header="Color" :sortable="true"></Column>
            </DataTable>

            <h5>Presort</h5>
            <DataTable :value="cars" sortField="year" :sortOrder="-1">
                <Column field="vin" header="Vin" :sortable="true"></Column>
                <Column field="year" header="Year" :sortable="true"></Column>
                <Column field="brand" header="Brand" :sortable="true"></Column>
                <Column field="color" header="Color" :sortable="true"></Column>
            </DataTable>

            <h5>Removable Sort</h5>
			<DataTable :value="cars" removableSort>
                <Column field="vin" header="Vin" :sortable="true"></Column>
                <Column field="year" header="Year" :sortable="true"></Column>
                <Column field="brand" header="Brand" :sortable="true"></Column>
                <Column field="color" header="Color" :sortable="true"></Column>
            </DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h5&gt;Single Column&lt;/h3&gt;
&lt;DataTable :value="cars"&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Multiple Columns&lt;/h3&gt;
&lt;DataTable :value="cars" sortMode="multiple"&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Presort&lt;/h3&gt;
&lt;DataTable :value="cars" sortField="year" :sortOrder="-1"&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Removable Sort&lt;/h3&gt;
&lt;DataTable :value="cars" removableSort&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

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
        this.carService.getCarsSmall().then(data => this.cars = data);
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
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    }
}
</script>