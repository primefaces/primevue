<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Responsive</h1>
				<p>DataTable display can be optimized according for different screen sizes, this example demonstrates a demo where columns are stacked on a small screens.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars" class="p-datatable-responsive-demo" :paginator="true" :rows="10" paginatorPosition="both">
                <template #header>
                    Responsive
                </template>
                <Column field="vin" header="Vin">
                    <template #body="slotProps">
                        <span class="p-column-title">Vin</span>
                        {{slotProps.data.vin}}
                    </template>
                </Column>
                <Column field="year" header="Year">
                    <template #body="slotProps">
                        <span class="p-column-title">Year</span>
                        {{slotProps.data.year}}
                    </template>
                </Column>
                <Column field="brand" header="Brand">
                    <template #body="slotProps">
                        <span class="p-column-title">Brand</span>
                        {{slotProps.data.brand}}
                    </template>
                </Column>
                <Column field="color" header="Color">
                    <template #body="slotProps">
                        <span class="p-column-title">Color</span>
                        {{slotProps.data.color}}
                    </template>
                </Column>
            </DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" class="p-datatable-responsive" :paginator="true" rows="10" paginatorPosition="both"&gt;
    &lt;template #header&gt;
        Responsive
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Vin&lt;/span&gt;
            {{slotProps.data.vin}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Year&lt;/span&gt;
            {{slotProps.data.year}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Brand&lt;/span&gt;
            {{slotProps.data.brand}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Color&lt;/span&gt;
            {{slotProps.data.color}}
        &lt;/template&gt;
    &lt;/Column&gt;
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

<CodeHighlight lang="css">
.p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {
    display: none;
}

@media screen and (max-width: 40em) {
    /deep/ .p-datatable {
        &.p-datatable-responsive-demo {
            .p-datatable-thead > tr > th,
            .p-datatable-tfoot > tr > td {
                display: none !important;
            }

            .p-datatable-tbody > tr > td {
                text-align: left;
                display: block;
                border: 0 none !important;
                width: 100% !important;
                float: left;
                clear: left;

                .p-column-title {
                    padding: .4em;
                    min-width: 30%;
                    display: inline-block;
                    margin: -.4em 1em -.4em -.4em;
                    font-weight: bold;
                }
            }
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
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsMedium().then(data => this.cars = data);
    }
}
</script>

<style lang="scss" scoped>
.p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {
    display: none;
}

@media screen and (max-width: 40em) {
    /deep/ .p-datatable {
        &.p-datatable-responsive-demo {
            .p-datatable-thead > tr > th,
            .p-datatable-tfoot > tr > td {
                display: none !important;
            }

            .p-datatable-tbody > tr > td {
                text-align: left;
                display: block;
                border: 0 none !important;
                width: 100% !important;
                float: left;
                clear: left;
                border: 0 none;

                .p-column-title {
                    padding: .4em;
                    min-width: 30%;
                    display: inline-block;
                    margin: -.4em 1em -.4em -.4em;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>