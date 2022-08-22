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
                <DataTable :value="customers" :paginator="true" :rows="10" responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    :rowsPerPageOptions="[10,20,50]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <template #paginatorstart>
                        <Button type="button" icon="pi pi-refresh" class="p-button-text" />
                    </template>
                    <template #paginatorend>
                        <Button type="button" icon="pi pi-cloud" class="p-button-text" />
                    </template>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="customers" :paginator="true" :rows="10" responsiveLayout="scroll"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    :rowsPerPageOptions="[10,20,50]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"&gt;
    &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
    &lt;Column field="country.name" header="Country"&gt;&lt;/Column&gt;
    &lt;Column field="company" header="Company"&gt;&lt;/Column&gt;
    &lt;Column field="representative.name" header="Representative"&gt;&lt;/Column&gt;
    &lt;template #paginatorstart&gt;
        &lt;Button type="button" icon="pi pi-refresh" class="p-button-text" /&gt;
    &lt;/template&gt;
    &lt;template #paginatorend&gt;
        &lt;Button type="button" icon="pi pi-cloud" class="p-button-text" /&gt;
    &lt;/template&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CustomerService from '../../service/CustomerService';

export default {
    data() {
        return {
            customers: null
        }
    },
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => this.customers = data);
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
            customers: null
        }
    },
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => this.customers = data);
    }
}
</script>