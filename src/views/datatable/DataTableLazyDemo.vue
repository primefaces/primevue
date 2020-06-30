<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Lazy</span></h1>
				<p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens.
                    Sample belows imitates lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration
                    so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.
                </p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="customers" :lazy="true" :paginator="true" :rows="10"
                    :totalRecords="totalRecords" :loading="loading" @page="onPage($event)">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="customers" :lazy="true" :paginator="true" :rows="10"
    :totalRecords="totalRecords" :loading="loading" @page="onPage($event)"&gt;
    &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
    &lt;Column field="country.name" header="Country"&gt;&lt;/Column&gt;
    &lt;Column field="company" header="Company"&gt;&lt;/Column&gt;
    &lt;Column field="representative.name" header="Representative"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CustomerService from '../../service/CustomerService';

export default {
    data() {
        return {
            loading: false,
            totalRecords: 0,
            customers: null
        }
    },
    datasource: null,
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.customerService.getCustomersLarge().then(data => {
                this.datasource = data;
                this.totalRecords = data.length,
                this.customers = this.datasource.slice(0, 10);
                this.loading = false;
            });
        }, 500);
    },
    methods: {
        onPage(event) {
            this.loading = true;

            setTimeout(() => {
                this.customers = this.datasource.slice(event.first, event.first + event.rows);
                this.loading = false;
            }, 500);
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
import CustomerService from '../../service/CustomerService';

export default {
    data() {
        return {
            loading: false,
            totalRecords: 0,
            customers: null
        }
    },
    datasource: null,
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.customerService.getCustomersLarge().then(data => {
                this.datasource = data;
                this.totalRecords = data.length,
                this.customers = this.datasource.slice(0, 10);
                this.loading = false;
            });
        }, 500);
    },
    methods: {
        onPage(event) {
            this.loading = true;

            setTimeout(() => {
                this.customers = this.datasource.slice(event.first, event.first + event.rows);
                this.loading = false;
            }, 500);
        }
    }
}
</script>