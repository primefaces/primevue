<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Lazy</h1>
				<p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens.
                    Sample belows imitates lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration
                    so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.
                </p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars" :lazy="true" :paginator="true" :rows="10"
                :totalRecords="totalRecords" :loading="loading" @page="onPage($event)">
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :lazy="true" :paginator="true" :rows="10"
    :totalRecords="totalRecords" :loading="loading" @page="onPage($event)"&gt;
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
            loading: false,
            totalRecords: 0,
            cars: null
        }
    },
    datasource: null,
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.carService.getCarsLarge().then(data => {
                this.datasource = data;
                this.totalRecords = data.length,
                this.cars = this.datasource.slice(0, 10);
                this.loading = false;
            });
        }, 1000);
    },
    methods: {
        onPage(event) {
            this.loading = true;

            setTimeout(() => {
                this.cars = this.datasource.slice(event.first, event.first + event.rows);
                this.loading = false;
            }, 1000);
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
            loading: false,
            totalRecords: 0,
            cars: null
        }
    },
    datasource: null,
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.carService.getCarsLarge().then(data => {
                this.datasource = data;
                this.totalRecords = data.length,
                this.cars = this.datasource.slice(0, 10);
                this.loading = false;
            });
        }, 1000);
    },
    methods: {
        onPage(event) {
            this.loading = true;

            setTimeout(() => {
                this.cars = this.datasource.slice(event.first, event.first + event.rows);
                this.loading = false;
            }, 1000);
        }
    }
}
</script>