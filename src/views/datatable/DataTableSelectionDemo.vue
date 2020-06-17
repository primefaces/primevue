<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Selection</span></h1>
				<p>DataTable provides single and multiple selection modes based on row click or using radio button and checkbox elements.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h3 class="first">Single</h3>
                <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>
                <DataTable :value="cars" :selection.sync="selectedCar1" selectionMode="single" dataKey="vin">
                    <Column field="vin" header="Vin"></Column>
                    <Column field="year" header="Year"></Column>
                    <Column field="brand" header="Brand"></Column>
                    <Column field="color" header="Color"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h3>Multiple</h3>
                <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
                        Setting metaKeySelection property as false enables multiple selection without meta key.</p>
                <DataTable :value="cars" :selection.sync="selectedCars1" selectionMode="multiple" dataKey="vin">
                    <template #header>
                        Multiple Selection with MetaKey
                    </template>
                    <Column field="vin" header="Vin"></Column>
                    <Column field="year" header="Year"></Column>
                    <Column field="brand" header="Brand"></Column>
                    <Column field="color" header="Color"></Column>
                </DataTable>

                <DataTable :value="cars" :selection.sync="selectedCars2" selectionMode="multiple" dataKey="vin" :metaKeySelection="false" style="margin-top: 2em">
                    <template #header>
                        Multiple Selection without MetaKey
                    </template>
                    <Column field="vin" header="Vin"></Column>
                    <Column field="year" header="Year"></Column>
                    <Column field="brand" header="Brand"></Column>
                    <Column field="color" header="Color"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h3>Events</h3>
                <p>row-select and row-unselects are available as selection events.</p>
                <DataTable :value="cars" :selection.sync="selectedCar2" selectionMode="single" dataKey="vin"
                    @row-select="onRowSelect" @row-unselect="onRowUnselect">
                    <Column field="vin" header="Vin"></Column>
                    <Column field="year" header="Year"></Column>
                    <Column field="brand" header="Brand"></Column>
                    <Column field="color" header="Color"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h3>RadioButton</h3>
                <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".</p>
                <DataTable :value="cars" :selection.sync="selectedCar3" dataKey="vin">
                    <Column selectionMode="single" headerStyle="width: 3em"></Column>
                    <Column field="vin" header="Vin"></Column>
                    <Column field="year" header="Year"></Column>
                    <Column field="brand" header="Brand"></Column>
                    <Column field="color" header="Color"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h3>Checkbox</h3>
                <p>Multiple selection can also be handled using checkboxes by enabling the selectionMode property of column as "multiple".</p>
                <DataTable :value="cars" :selection.sync="selectedCars3" dataKey="vin">
                    <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
                    <Column field="vin" header="Vin"></Column>
                    <Column field="year" header="Year"></Column>
                    <Column field="brand" header="Brand"></Column>
                    <Column field="color" header="Color"></Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h3 class="first"&gt;Single&lt;/h3&gt;
&lt;p&gt;In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.&lt;/p&gt;
&lt;DataTable :value="cars" :selection.sync="selectedCar1" selectionMode="single" dataKey="vin"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Multiple&lt;/h3&gt;
&lt;p&gt;In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
        Setting metaKeySelection property as false enables multiple selection without meta key.&lt;/p&gt;
&lt;DataTable :value="cars" :selection.sync="selectedCars1" selectionMode="multiple" dataKey="vin"&gt;
    &lt;template #header&gt;
        Multiple Selection with MetaKey
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;DataTable :value="cars" :selection.sync="selectedCars2" selectionMode="multiple" dataKey="vin" :metaKeySelection="false" style="margin-top: 2em"&gt;
    &lt;template #header&gt;
        Multiple Selection without MetaKey
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Events&lt;/h3&gt;
&lt;p&gt;row-select and row-unselects are available as selection events.&lt;/p&gt;
&lt;DataTable :value="cars" :selection.sync="selectedCar2" selectionMode="single" dataKey="vin"
    @row-select="onRowSelect" @row-unselect="onRowUnselect"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;h3&gt;RadioButton&lt;/h3&gt;
&lt;p&gt;Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".&lt;/p&gt;
&lt;DataTable :value="cars" :selection.sync="selectedCar3" dataKey="vin"&gt;
    &lt;Column selectionMode="single" headerStyle="width: 3em"&gt;&lt;/Column&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Checkbox&lt;/h3&gt;
&lt;p&gt;Multiple selection can also be handled using checkboxes by enabling the selectionMode property of column as "multiple".&lt;/p&gt;
&lt;DataTable :value="cars" :selection.sync="selectedCars3" dataKey="vin"&gt;
    &lt;Column selectionMode="multiple" headerStyle="width: 3em"&gt;&lt;/Column&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            cars: null,
            selectedCar1: null,
            selectedCar2: null,
            selectedCar3: null,
            selectedCars1: null,
            selectedCars2: null,
            selectedCars3: null
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
        onRowSelect(event) {
            this.$toast.add({severity: 'info', summary: 'Car Selected', detail: 'Vin: ' + event.data.vin, life: 3000});
        },
        onRowUnselect(event) {
            this.$toast.add({severity: 'warn', summary: 'Car Unselected', detail: 'Vin: ' + event.data.vin, life: 3000});
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

export default {
    data() {
        return {
            cars: null,
            selectedCar1: null,
            selectedCar2: null,
            selectedCar3: null,
            selectedCars1: null,
            selectedCars2: null,
            selectedCars3: null
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
        onRowSelect(event) {
            this.$toast.add({severity: 'info', summary: 'Car Selected', detail: 'Vin: ' + event.data.vin, life: 3000});
        },
        onRowUnselect(event) {
            this.$toast.add({severity: 'warn', summary: 'Car Unselected', detail: 'Vin: ' + event.data.vin, life: 3000});
        }
    }
}
</script>