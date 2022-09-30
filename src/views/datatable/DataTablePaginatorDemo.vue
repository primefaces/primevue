<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>DataTable <span>Paginator</span></h1>
                <p>Pagination is enabled by setting paginator property to true and defining the rows attribute as the number of rows per page.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>

                <DataTable
                    :value="customers"
                    :paginator="true"
                    :rows="10"
                    paginatorTemplate="PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport"
                    :rowsPerPageOptions="[10, 20, 50]"
                    responsiveLayout="scroll"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                >
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
            <div class="card">
                <h5>Custom Template</h5>

                <DataTable
                    :value="customers"
                    :paginator="true"
                    :rows="10"
                    paginatorTemplate="PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport"
                    :rowsPerPageOptions="[10, 20, 50]"
                    responsiveLayout="scroll"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                >
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="representative.name" header="Representative"></Column>

                    <template #paginatorPrevPageLink="{ options }">
                        <button type="button" class="p-paginator-prev p-paginator-element p-link" :class="{ 'p-disabled': options.disabled }" :disabled="options.disabled" @click="options.onClick($event)">
                            <span class="p-3">Previous</span>
                        </button>
                    </template>
                    <template #paginatorPageLinks="{ options }">
                        <span class="p-paginator-pages">
                            <button
                                v-for="pageLink of options.pageLinks"
                                :key="pageLink"
                                v-ripple
                                :class="['p-paginator-page p-paginator-element p-link', { 'p-highlight': pageLink - 1 === options.page }]"
                                type="button"
                                @click="options.onClick({ value: pageLink })"
                            >
                                {{ setPageLinks(options, pageLink) ? '...' : pageLink }}
                            </button>
                        </span>
                    </template>
                    <template #paginatorNextPageLink="{ options }">
                        <button type="button" class="p-paginator-prev p-paginator-element p-link" :class="{ 'p-disabled': options.disabled }" :disabled="options.disabled" @click="options.onClick($event)">
                            <span class="p-3">Next</span>
                        </button>
                    </template>
                    <template #paginatorRowsPerPageDropdown="{ options }"> <Dropdown v-model="dropdownValue" :options="dropdownOptions(options)" optionLabel="label" @change="options.onChange($event.value)" /> </template>
                    <template #paginatorCurrentPageReport="{ options }">
                        <span class="mx-3"> Go to <InputText v-model="currentPage" size="2" class="ml-1" @keydown="(e) => onPageInputKeyDown(e, options)" /> </span>
                    </template>
                </DataTable>

                <DataTable
                    :value="customers"
                    class="custom-paginator mt-5"
                    :paginator="true"
                    :rows="10"
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink"
                    :rowsPerPageOptions="[10, 20, 50]"
                    responsiveLayout="scroll"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                >
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="representative.name" header="Representative"></Column>

                    <template #paginatorRowsPerPageDropdown="{ options }">
                        <span class="mx-1"> Items per page: </span>
                        <Dropdown v-model="dropdownValue" :options="dropdownOptions(options)" optionLabel="label" @change="options.onChange($event.value)" />
                    </template>
                    <template #paginatorCurrentPageReport="{ options }">
                        <span> {{ options.first }} - {{ options.last }} of {{ options.totalRecords }} </span>
                    </template>
                </DataTable>
            </div>
        </div>

        <AppDoc name="DataTablePaginatorDemo" :sources="sources" :service="['CustomerService']" :data="['customers-large']" github="datatable/DataTablePaginatorDemo.vue" />
    </div>
</template>

<script>
import CustomerService from '../../service/CustomerService';

export default {
    data() {
        return {
            dropdownValue: { label: 10, value: 10 },
            currentPage: 1,
            customers: null,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
	<div>
        <DataTable :value="customers" :paginator="true" :rows="10"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
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

        <DataTable :value="customers" :paginator="true" :rows="10" paginatorTemplate="PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport" :rowsPerPageOptions="[10, 20, 50]" responsiveLayout="scroll" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="representative.name" header="Representative"></Column>

                    <template #paginatorPrevPageLink="{ options }">
                        <button type="button" class="p-paginator-prev p-paginator-element p-link" :class="{ 'p-disabled': options.disabled }" :disabled="options.disabled" @click="options.onClick($event)">
                            <span class="p-3">Previous</span>
                        </button>
                    </template>
                    <template #paginatorPageLinks="{ options }">
                        <span class="p-paginator-pages">
                            <button
                                v-for="pageLink of options.pageLinks"
                                :key="pageLink"
                                v-ripple
                                :class="['p-paginator-page p-paginator-element p-link', { 'p-highlight': pageLink - 1 === options.page }]"
                                type="button"
                                @click="options.onClick({ value: pageLink })"
                            >
                                {{ setPageLinks(options, pageLink) ? '...' : pageLink }}
                            </button>
                        </span>
                    </template>
                    <template #paginatorNextPageLink="{ options }">
                        <button type="button" class="p-paginator-prev p-paginator-element p-link" :class="{ 'p-disabled': options.disabled }" :disabled="options.disabled" @click="options.onClick($event)">
                            <span class="p-3">Next</span>
                        </button>
                    </template>
                    <template #paginatorRowsPerPageDropdown="{ options }"> <Dropdown v-model="dropdownValue" :options="dropdownOptions(options)" optionLabel="label" @change="options.onChange($event.value)" /> </template>
                    <template #paginatorCurrentPageReport="{ options }">
                        <span class="mx-3"> Go to <InputText v-model="currentPage" size="2" class="ml-1" @keydown="(e) => onPageInputKeyDown(e, options)" /> </span>
                    </template>
                </DataTable>

                <DataTable
                    :value="customers"
                    class="custom-paginator mt-5"
                    :paginator="true"
                    :rows="10"
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink"
                    :rowsPerPageOptions="[10, 20, 50]"
                    responsiveLayout="scroll"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                >
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="representative.name" header="Representative"></Column>

                    <template #paginatorRowsPerPageDropdown="{ options }">
                        <span class="mx-1"> Items per page: </span>
                        <Dropdown v-model="dropdownValue" :options="dropdownOptions(options)" optionLabel="label" @change="options.onChange($event.value)" />
                    </template>
                    <template #paginatorCurrentPageReport="{ options }">
                        <span> {{ options.first }} - {{ options.last }} of {{ options.totalRecords }} </span>
                    </template>
                </DataTable>

	</div>
</template>

<script>
import CustomerService from './service/CustomerService';

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
    },
    methods: {
        setPageLinks({ pageLinks, pageCount }, pageLink) {
            return (pageLinks[0] === pageLink || pageLinks[pageLinks.length - 1] === pageLink) && pageLink !== 1 && pageLink !== pageCount;
        },
        dropdownOptions(options) {
            return [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 30, value: 30 },
                { label: 'All', value: options.totalRecords }
            ];
        },
        onPageInputKeyDown(e, options) {
            if (e.code === 'Enter') {
                options.onChange(parseInt(this.currentPage));
            }
        }
    }
}
<\\/script>
<style scoped>
    .custom-paginator :deep(.p-paginator) {
        justify-content: end;
    }
</style>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
	<div>
        <DataTable :value="customers" :paginator="true" :rows="10"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
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
        <DataTable :value="customers" :paginator="true" :rows="10" paginatorTemplate="PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport" :rowsPerPageOptions="[10, 20, 50]" responsiveLayout="scroll" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="representative.name" header="Representative"></Column>

                    <template #paginatorPrevPageLink="{ options }">
                        <button type="button" class="p-paginator-prev p-paginator-element p-link" :class="{ 'p-disabled': options.disabled }" :disabled="options.disabled" @click="options.onClick($event)">
                            <span class="p-3">Previous</span>
                        </button>
                    </template>
                    <template #paginatorPageLinks="{ options }">
                        <span class="p-paginator-pages">
                            <button
                                v-for="pageLink of options.pageLinks"
                                :key="pageLink"
                                v-ripple
                                :class="['p-paginator-page p-paginator-element p-link', { 'p-highlight': pageLink - 1 === options.page }]"
                                type="button"
                                @click="options.onClick({ value: pageLink })"
                            >
                                {{ setPageLinks(options, pageLink) ? '...' : pageLink }}
                            </button>
                        </span>
                    </template>
                    <template #paginatorNextPageLink="{ options }">
                        <button type="button" class="p-paginator-prev p-paginator-element p-link" :class="{ 'p-disabled': options.disabled }" :disabled="options.disabled" @click="options.onClick($event)">
                            <span class="p-3">Next</span>
                        </button>
                    </template>
                    <template #paginatorRowsPerPageDropdown="{ options }"> <Dropdown v-model="dropdownValue" :options="dropdownOptions(options)" optionLabel="label" @change="options.onChange($event.value)" /> </template>
                    <template #paginatorCurrentPageReport="{ options }">
                        <span class="mx-3"> Go to <InputText v-model="currentPage" size="2" class="ml-1" @keydown="(e) => onPageInputKeyDown(e, options)" /> </span>
                    </template>
                </DataTable>

                <DataTable
                    :value="customers"
                    class="custom-paginator mt-5"
                    :paginator="true"
                    :rows="10"
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink"
                    :rowsPerPageOptions="[10, 20, 50]"
                    responsiveLayout="scroll"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                >
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="representative.name" header="Representative"></Column>

                    <template #paginatorRowsPerPageDropdown="{ options }">
                        <span class="mx-1"> Items per page: </span>
                        <Dropdown v-model="dropdownValue" :options="dropdownOptions(options)" optionLabel="label" @change="options.onChange($event.value)" />
                    </template>
                    <template #paginatorCurrentPageReport="{ options }">
                        <span> {{ options.first }} - {{ options.last }} of {{ options.totalRecords }} </span>
                    </template>
                </DataTable>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import CustomerService from './service/CustomerService';

export default {
    setup() {
        onMounted(() => {
            customerService.value.getCustomersLarge().then(data => customers.value = data);
        })

        const customers = ref();
        const customerService = ref(new CustomerService());

        const setPageLinks= ({ pageLinks, pageCount }, pageLink) => {
            return (pageLinks[0] === pageLink || pageLinks[pageLinks.length - 1] === pageLink) && pageLink !== 1 && pageLink !== pageCount;
        }

        const dropdownOptions = (options) => {
            return [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 30, value: 30 },
                { label: 'All', value: options.totalRecords }
            ];
        }

        const onPageInputKeyDown = (e, options) => {
            if (e.code === 'Enter') {
                options.onChange(parseInt(currentPage.value));
            }
        }

        return { customers, dropdownOptions, setPageLinks, onPageInputKeyDown };
    }
}
<\\/script>
<style scoped>
    .custom-paginator :deep(.p-paginator) {
        justify-content: end;
    }
</style>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="./CustomerService.js"><\\/script>`,
                    content: `<div id="app">
            <p-datatable :value="customers" :paginator="true" :rows="10"
                paginator-template="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                :rows-per-page-options="[10,20,50]" responsive-layout="scroll"
                current-page-report-template="Showing {first} to {last} of {totalRecords}">
                <p-column field="name" header="Name"></p-column>
                <p-column field="country.name" header="Country"></p-column>
                <p-column field="company" header="Company"></p-column>
                <p-column field="representative.name" header="Representative"></p-column>
                <template #paginatorstart>
                    <p-button type="button" icon="pi pi-refresh" class="p-button-text"></p-button>
                </template>
                <template #paginatorend>
                    <p-button type="button" icon="pi pi-cloud" class="p-button-text"></p-button>
                </template>
            </p-datatable>
            <p-datatable
                    :value="customers"
                    :paginator="true"
                    :rows="10"
                    paginatorTemplate="PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport"
                    :rowsPerPageOptions="[10, 20, 50]"
                    responsiveLayout="scroll"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                >
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="country.name" header="Country"></p-column>
                    <p-column field="company" header="Company"></p-column>
                    <p-column field="representative.name" header="Representative"></p-column>

                    <template #paginatorPrevPageLink="{ options }">
                        <button type="button" class="p-paginator-prev p-paginator-element p-link" :class="{ 'p-disabled': options.disabled }" :disabled="options.disabled" @click="options.onClick($event)">
                            <span class="p-3">Previous</span>
                        </button>
                    </template>
                    <template #paginatorPageLinks="{ options }">
                        <span class="p-paginator-pages">
                            <button
                                v-for="pageLink of options.pageLinks"
                                :key="pageLink"
                                v-ripple
                                :class="['p-paginator-page p-paginator-element p-link', { 'p-highlight': pageLink - 1 === options.page }]"
                                type="button"
                                @click="options.onClick({ value: pageLink })"
                            >
                                {{ setPageLinks(options, pageLink) ? '...' : pageLink }}
                            </button>
                        </span>
                    </template>
                    <template #paginatorNextPageLink="{ options }">
                        <button type="button" class="p-paginator-prev p-paginator-element p-link" :class="{ 'p-disabled': options.disabled }" :disabled="options.disabled" @click="options.onClick($event)">
                            <span class="p-3">Next</span>
                        </button>
                    </template>
                    <template #paginatorRowsPerPageDropdown="{ options }"> <Dropdown v-model="dropdownValue" :options="dropdownOptions(options)" optionLabel="label" @change="options.onChange($event.value)" /> </template>
                    <template #paginatorCurrentPageReport="{ options }">
                        <span class="mx-3"> Go to <InputText v-model="currentPage" size="2" class="ml-1" @keydown="(e) => onPageInputKeyDown(e, options)" /> </span>
                    </template>
                </p-datatable>

                <p-datatable
                    :value="customers"
                    class="custom-paginator mt-5"
                    :paginator="true"
                    :rows="10"
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink"
                    :rowsPerPageOptions="[10, 20, 50]"
                    responsiveLayout="scroll"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                >
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="country.name" header="Country"></p-column>
                    <p-column field="company" header="Company"></p-column>
                    <p-column field="representative.name" header="Representative"></p-column>

                    <template #paginatorRowsPerPageDropdown="{ options }">
                        <span class="mx-1"> Items per page: </span>
                        <Dropdown v-model="dropdownValue" :options="dropdownOptions(options)" optionLabel="label" @change="options.onChange($event.value)" />
                    </template>
                    <template #paginatorCurrentPageReport="{ options }">
                        <span> {{ options.first }} - {{ options.last }} of {{ options.totalRecords }} </span>
                    </template>
                </p-datatable>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    customerService.value.getCustomersLarge().then(data => customers.value = data);
                })

                const customers = ref();
                const customerService = ref(new CustomerService());
                const setPageLinks= ({ pageLinks, pageCount }, pageLink) => {
            return (pageLinks[0] === pageLink || pageLinks[pageLinks.length - 1] === pageLink) && pageLink !== 1 && pageLink !== pageCount;
        }

                const dropdownOptions = (options) => {
                    return [
                        { label: 10, value: 10 },
                        { label: 20, value: 20 },
                        { label: 30, value: 30 },
                        { label: 'All', value: options.totalRecords }
                    ];
                }

                const onPageInputKeyDown = (e, options) => {
                    if (e.code === 'Enter') {
                        options.onChange(parseInt(currentPage.value));
                    }
                }

                return { customers, dropdownOptions, setPageLinks, onPageInputKeyDown };
            },
            components: {
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style scoped>
        .custom-paginator :deep(.p-paginator) {
            justify-content: end;
        }
        </style>
`
                }
            }
        };
    },
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersLarge().then((data) => (this.customers = data));
    },
    methods: {
        setPageLinks({ pageLinks, pageCount }, pageLink) {
            return (pageLinks[0] === pageLink || pageLinks[pageLinks.length - 1] === pageLink) && pageLink !== 1 && pageLink !== pageCount;
        },
        dropdownOptions(options) {
            return [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 30, value: 30 },
                { label: 'All', value: options.totalRecords }
            ];
        },
        onPageInputKeyDown(e, options) {
            if (e.code === 'Enter') {
                options.onChange(parseInt(this.currentPage));
            }
        }
    }
};
</script>

<style scoped>
.custom-paginator :deep(.p-paginator) {
    justify-content: end;
}
</style>
