<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Reorder</h1>
				<p>Order of the columns and rows can be changed using drag and drop.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars" :reorderableColumns="true" @colreorder="onColReorder">
                <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
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
import DataTableDoc from './DataTableDoc';

export default {
    data() {
        return {
            columns: null,
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();

        this.columns = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    },
    methods: {
        onColReorder(event) {
            this.$toast.add({severity:'success', summary: 'Column Reordered', life: 3000});
        }
    },
    components: {
        'DataTableDoc': DataTableDoc,
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>