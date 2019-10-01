<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Templating</h1>
				<p>Custom content at header, body and footer sections are supported via templating.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars">
                <template #header>
                    <div style="line-height:1.87em" class="clearfix">
                        <Button icon="pi pi-refresh" style="float: left"/>
                        List of Cars
                    </div>
                </template>
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand">
                    <template #body="slotProps">
                        <img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"  width="48px"/>
                    </template>
                </Column>
                <Column field="color" header="Color"></Column>
                <Column headerStyle="width: 8em" bodyStyle="text-align: center">
                    <template #header>
                        <Button type="button" icon="pi pi-cog"></Button>
                    </template>
                    <template #body="slotProps">
                        <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
                        <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
                    </template>
                </Column>
                <template #footer>
                    In total there are {{cars ? cars.length : 0 }} cars.
                </template>
            </DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;template #header&gt;
        &lt;div style="line-height:1.87em" class="p-clearfix"&gt;
            &lt;Button icon="pi pi-refresh" style="float: left"/&gt;
            List of Cars
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"  width="48px"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;Column headerStyle="width: 8em" bodyStyle="text-align: center"&gt;
        &lt;template #header&gt;
            &lt;Button type="button" icon="pi pi-cog"&gt;&lt;/Button&gt;
        &lt;/template&gt;
        &lt;template #body="slotProps"&gt;
            &lt;Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"&gt;&lt;/Button&gt;
            &lt;Button type="button" icon="pi pi-pencil" class="p-button-warning"&gt;&lt;/Button&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;template #footer&gt;
        In total there are &#123;&#123;cars ? cars.length : 0 &#125;&#125; cars.
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
        this.carService.getCarsSmall().then(data => this.cars = data);
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>