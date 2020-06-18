<template>
	<div>
        <div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Paginator</span></h1>
				<p>Pagination is enabled by setting paginator property to true and defining the rows attribute as the number of rows per page.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="cars" :paginator="true" :rows="10">
                    <Column field="vin" header="Vin"></Column>
                    <Column field="year" header="Year"></Column>
                    <Column field="brand" header="Brand"></Column>
                    <Column field="color" header="Color"></Column>
                    <template #paginatorLeft>
                        <Button type="button" icon="pi pi-refresh" />
                    </template>
                    <template #paginatorRight>
                        <Button type="button" icon="pi pi-cloud" />
                    </template>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :paginator="true" :rows="10"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;template #paginatorLeft&gt;
        &lt;Button type="button" icon="pi pi-refresh" /&gt;
    &lt;/template&gt;
    &lt;template #paginatorRight&gt;
        &lt;Button type="button" icon="pi pi-cloud" /&gt;
    &lt;/template&gt;
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