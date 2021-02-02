<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Scroll</span></h1>
				<p>Data scrolling is available horizontally, vertically or both. Virtual Scrolling mode is also provided to deal with large datasets by loading data on demand during scrolling.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h5>Vertical</h5>
                <DataTable :value="customers" :scrollable="true" scrollHeight="200px" :loading="loading">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Flexible Scroll</h5>
                <p>Flex scroll feature makes the scrollable viewport section dynamic so that it can grow or shrink relative to the parent size of the table.
                    Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

                <Button label="Show" icon="pi pi-external-link" @click="openDialog" />
            </div>

            <Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '75vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}">
                <DataTable :value="customers" :scrollable="true" scrollHeight="flex">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Company"></Column>
                </DataTable>
                <template #footer>
                    <Button label="Ok" icon="pi pi-check" @click="closeDialog" />
                </template>
            </Dialog>

            <div class="card">
                <h5>Virtual Scroll</h5>
                <DataTable :value="virtualCustomers" :scrollable="true" scrollHeight="200px" :lazy="true" :rows="20" :loading="loading"
                    :virtualScroll="true" :virtualRowHeight="45" @virtual-scroll="onVirtualScroll" :totalRecords="lazyTotalRecords">
                    <Column field="name" header="Name">
                        <template #loading>
                            <span class="loading-text"></span>
                        </template>
                    </Column>
                    <Column field="country.name" header="Country">
                        <template #loading>
                            <span class="loading-text"></span>
                        </template>
                    </Column>
                    <Column field="representative.name" header="Representative">
                        <template #loading>
                            <span class="loading-text"></span>
                        </template>
                    </Column>
                    <Column field="status" header="Status">
                        <template #loading>
                            <span class="loading-text"></span>
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Horizontal and Vertical</h5>
                <DataTable :value="customers" :scrollable="true" scrollHeight="200px" style="width: 600px" :loading="loading">
                    <Column field="id" header="Id" headerStyle="width: 250px" columnKey="id"></Column>
                    <Column field="name" header="Name" headerStyle="width: 250px" columnKey="name"></Column>
                    <Column field="country.name" header="Country" headerStyle="width: 250px" columnKey="country"></Column>
                    <Column field="date" header="Date" headerStyle="width: 250px" columnKey="date"></Column>
                    <Column field="company" header="Company" headerStyle="width: 250px" columnKey="company"></Column>
                    <Column field="status" header="Status" headerStyle="width: 250px" columnKey="status"></Column>
                    <Column field="activity" header="Activity" headerStyle="width: 250px" columnKey="activity"></Column>
                    <Column field="representative.name" header="Representative" headerStyle="width: 250px" columnKey="representative"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Frozen Rows</h5>
                <DataTable :value="customers" :frozenValue="frozenValue" :scrollable="true" scrollHeight="200px" :loading="loading">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Frozen Columns</h5>
                <DataTable :value="customers" :scrollable="true" scrollHeight="200px" frozenWidth="300px" :loading="loading">
                    <Column field="name" header="Name" headerStyle="width: 300px" columnKey="name" :frozen="true">
                        <template #body="slotProps">
                            <span style="font-weight: 700">{{slotProps.data.name}}</span>
                        </template>
                    </Column>
                    <Column field="id" header="Id" headerStyle="width: 300px" columnKey="id"></Column>
                    <Column field="country.name" header="Country" headerStyle="width: 300px" columnKey="country"></Column>
                    <Column field="date" header="Date" headerStyle="width: 300px" columnKey="date"></Column>
                    <Column field="company" header="Country" headerStyle="width: 300px" columnKey="company"></Column>
                    <Column field="status" header="Status" headerStyle="width: 300px" columnKey="status"></Column>
                    <Column field="activity" header="Activity" headerStyle="width: 300px" columnKey="activity"></Column>
                    <Column field="representative.name" header="Representative" headerStyle="width: 300px" columnKey="representative"></Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
                    <div class="p-d-flex p-jc-end">
                        <LiveEditor name="DataTableDemo" :sources="sources" service="CustomerService" data="customers-large" :components="['Column', 'Dialog', 'Button']" />
                    </div>
<pre v-code>
<code><template v-pre>
&lt;div class="card"&gt;
    &lt;h5&gt;Vertical&lt;/h5&gt;
    &lt;DataTable :value="customers" :scrollable="true" scrollHeight="200px" :loading="loading"&gt;
        &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
        &lt;Column field="country.name" header="Country"&gt;&lt;/Column&gt;
        &lt;Column field="representative.name" header="Representative"&gt;&lt;/Column&gt;
        &lt;Column field="status" header="Status"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Flexible Scroll&lt;/h5&gt;
    &lt;p&gt;Flex scroll feature makes the scrollable viewport section dynamic so that it can grow or shrink relative to the parent size of the table.
        Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.&lt;/p&gt;

    &lt;Button label="Show" icon="pi pi-external-link" @click="openDialog" /&gt;
&lt;/div&gt;

&lt;Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '75vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}"&gt;
    &lt;DataTable :value="customers" :scrollable="true" scrollHeight="flex"&gt;
        &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
        &lt;Column field="country.name" header="Country"&gt;&lt;/Column&gt;
        &lt;Column field="representative.name" header="Representative"&gt;&lt;/Column&gt;
        &lt;Column field="status" header="Company"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
    &lt;template #footer&gt;
        &lt;Button label="Ok" icon="pi pi-check" @click="closeDialog" /&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Virtual Scroll&lt;/h5&gt;
    &lt;DataTable :value="virtualCustomers" :scrollable="true" scrollHeight="200px" :lazy="true" :rows="20" :loading="loading"
        :virtualScroll="true" :virtualRowHeight="45" @virtual-scroll="onVirtualScroll" :totalRecords="lazyTotalRecords"&gt;
        &lt;Column field="name" header="Name"&gt;
            &lt;template #loading&gt;
                &lt;span class="loading-text"&gt;&lt;/span&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="country.name" header="Country"&gt;
            &lt;template #loading&gt;
                &lt;span class="loading-text"&gt;&lt;/span&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="representative.name" header="Representative"&gt;
            &lt;template #loading&gt;
                &lt;span class="loading-text"&gt;&lt;/span&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="status" header="Status"&gt;
            &lt;template #loading&gt;
                &lt;span class="loading-text"&gt;&lt;/span&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Horizontal and Vertical&lt;/h5&gt;
    &lt;DataTable :value="customers" :scrollable="true" scrollHeight="200px" style="width: 600px" :loading="loading"&gt;
        &lt;Column field="id" header="Id" headerStyle="width: 250px" columnKey="id"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name" headerStyle="width: 250px" columnKey="name"&gt;&lt;/Column&gt;
        &lt;Column field="country.name" header="Country" headerStyle="width: 250px" columnKey="country"&gt;&lt;/Column&gt;
        &lt;Column field="date" header="Date" headerStyle="width: 250px" columnKey="date"&gt;&lt;/Column&gt;
        &lt;Column field="company" header="Company" headerStyle="width: 250px" columnKey="company"&gt;&lt;/Column&gt;
        &lt;Column field="status" header="Status" headerStyle="width: 250px" columnKey="status"&gt;&lt;/Column&gt;
        &lt;Column field="activity" header="Activity" headerStyle="width: 250px" columnKey="activity"&gt;&lt;/Column&gt;
        &lt;Column field="representative.name" header="Representative" headerStyle="width: 250px" columnKey="representative"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Frozen Rows&lt;/h5&gt;
    &lt;DataTable :value="customers" :frozenValue="frozenValue" :scrollable="true" scrollHeight="200px" :loading="loading"&gt;
        &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
        &lt;Column field="country.name" header="Country"&gt;&lt;/Column&gt;
        &lt;Column field="representative.name" header="Representative"&gt;&lt;/Column&gt;
        &lt;Column field="status" header="Status"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Frozen Columns&lt;/h5&gt;
    &lt;DataTable :value="customers" :scrollable="true" scrollHeight="200px" frozenWidth="300px" :loading="loading"&gt;
        &lt;Column field="name" header="Name" headerStyle="width: 300px" columnKey="name" :frozen="true"&gt;
            &lt;template #body="slotProps"&gt;
                &lt;span style="font-weight: 700"&gt;{{slotProps.data.name}}&lt;/span&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="id" header="Id" headerStyle="width: 300px" columnKey="id"&gt;&lt;/Column&gt;
        &lt;Column field="country.name" header="Country" headerStyle="width: 300px" columnKey="country"&gt;&lt;/Column&gt;
        &lt;Column field="date" header="Date" headerStyle="width: 300px" columnKey="date"&gt;&lt;/Column&gt;
        &lt;Column field="company" header="Country" headerStyle="width: 300px" columnKey="company"&gt;&lt;/Column&gt;
        &lt;Column field="status" header="Status" headerStyle="width: 300px" columnKey="status"&gt;&lt;/Column&gt;
        &lt;Column field="activity" header="Activity" headerStyle="width: 300px" columnKey="activity"&gt;&lt;/Column&gt;
        &lt;Column field="representative.name" header="Representative" headerStyle="width: 300px" columnKey="representative"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import CustomerService from '../../service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            virtualCustomers: null,
            lazyTotalRecords: 0,
            frozenValue: null,
            loading: false,
            dialogVisible: false
        }
    },
    customerService: null,
    inmemoryData: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.loading = true;

        this.customerService.getCustomersLarge().then(data => {
            this.customers = data;
            this.loading = false;
        });
        this.customerService.getCustomersXLarge().then(data => this.inmemoryData = data);

        this.frozenValue = [
            {
                id: 1255,
                name: "James McAdams",
                country: {
                    name: "United States",
                    code: "us"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                status: "qualified",
                activity: 23,
                representative: {
                    name: "Ioni Bowcher",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 5135,
                name: "Geraldine Bisset",
                country: {
                    name: "France",
                    code: "fr"
                },
                company: "Bisset Group",
                status: "proposal",
                date: "2019-05-05",
                activity: 0,
                representative: {
                    name: "Amy Elsner",
                    image: "amyelsner.png"
                }
            }
        ];

        setTimeout(() => {
            this.virtualCustomers = this.loadChunk(0, 40);
            this.lazyTotalRecords = 500;
        }, 250);
    },
    methods: {
          loadChunk(index, length) {
            let chunk = [];
            for (let i = 0; i &lt; length; i++) {
                chunk[i] = {...this.inmemoryData[i]};
            }

            return chunk;
        },
        onVirtualScroll(event) {
            setTimeout(() => {
                //last chunk
                if (event.first === 480)
                    this.virtualCustomers = this.loadChunk(event.first, 20)
                else
                    this.virtualCustomers = this.loadChunk(event.first, event.rows)
            }, 250);
        },
        openDialog() {
            this.dialogVisible = true;
        },
        closeDialog() {
            this.dialogVisible = false;
        }
    }
}

</code></pre>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<script>
import CustomerService from '../../service/CustomerService';
import LiveEditor from '../liveeditor/LiveEditor';

export default {
    data() {
        return {
            customers: null,
            virtualCustomers: null,
            lazyTotalRecords: 0,
            frozenValue: null,
            loading: false,
            dialogVisible: false,
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <h5>Vertical</h5>
                <DataTable :value="customers" :scrollable="true" scrollHeight="200px" :loading="loading">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Flexible Scroll</h5>
                <p>Flex scroll feature makes the scrollable viewport section dynamic so that it can grow or shrink relative to the parent size of the table.
                    Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

                <Button label="Show" icon="pi pi-external-link" @click="openDialog" />
            </div>

            <Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '75vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}">
                <DataTable :value="customers" :scrollable="true" scrollHeight="flex">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Company"></Column>
                </DataTable>
                <template #footer>
                    <Button label="Ok" icon="pi pi-check" @click="closeDialog" />
                </template>
            </Dialog>

            <div class="card">
                <h5>Virtual Scroll</h5>
                <DataTable :value="virtualCustomers" :scrollable="true" scrollHeight="200px" :lazy="true" :rows="20" :loading="loading"
                    :virtualScroll="true" :virtualRowHeight="45" @virtual-scroll="onVirtualScroll" :totalRecords="lazyTotalRecords">
                    <Column field="name" header="Name">
                        <template #loading>
                            <span class="loading-text"></span>
                        </template>
                    </Column>
                    <Column field="country.name" header="Country">
                        <template #loading>
                            <span class="loading-text"></span>
                        </template>
                    </Column>
                    <Column field="representative.name" header="Representative">
                        <template #loading>
                            <span class="loading-text"></span>
                        </template>
                    </Column>
                    <Column field="status" header="Status">
                        <template #loading>
                            <span class="loading-text"></span>
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Horizontal and Vertical</h5>
                <DataTable :value="customers" :scrollable="true" scrollHeight="200px" style="width: 600px" :loading="loading">
                    <Column field="id" header="Id" headerStyle="width: 250px" columnKey="id"></Column>
                    <Column field="name" header="Name" headerStyle="width: 250px" columnKey="name"></Column>
                    <Column field="country.name" header="Country" headerStyle="width: 250px" columnKey="country"></Column>
                    <Column field="date" header="Date" headerStyle="width: 250px" columnKey="date"></Column>
                    <Column field="company" header="Company" headerStyle="width: 250px" columnKey="company"></Column>
                    <Column field="status" header="Status" headerStyle="width: 250px" columnKey="status"></Column>
                    <Column field="activity" header="Activity" headerStyle="width: 250px" columnKey="activity"></Column>
                    <Column field="representative.name" header="Representative" headerStyle="width: 250px" columnKey="representative"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Frozen Rows</h5>
                <DataTable :value="customers" :frozenValue="frozenValue" :scrollable="true" scrollHeight="200px" :loading="loading">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Frozen Columns</h5>
                <DataTable :value="customers" :scrollable="true" scrollHeight="200px" frozenWidth="300px" :loading="loading">
                    <Column field="name" header="Name" headerStyle="width: 300px" columnKey="name" :frozen="true">
                        <template #body="slotProps">
                            <span style="font-weight: 700">{{slotProps.data.name}}</span>
                        </template>
                    </Column>
                    <Column field="id" header="Id" headerStyle="width: 300px" columnKey="id"></Column>
                    <Column field="country.name" header="Country" headerStyle="width: 300px" columnKey="country"></Column>
                    <Column field="date" header="Date" headerStyle="width: 300px" columnKey="date"></Column>
                    <Column field="company" header="Country" headerStyle="width: 300px" columnKey="company"></Column>
                    <Column field="status" header="Status" headerStyle="width: 300px" columnKey="status"></Column>
                    <Column field="activity" header="Activity" headerStyle="width: 300px" columnKey="activity"></Column>
                    <Column field="representative.name" header="Representative" headerStyle="width: 300px" columnKey="representative"></Column>
                </DataTable>
            </div>
		</div>
    </div>                    
</template>

<script>
import CustomerService from '../service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            virtualCustomers: null,
            lazyTotalRecords: 0,
            frozenValue: null,
            loading: false,
            dialogVisible: false
        }
    },
    customerService: null,
    inmemoryData: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.loading = true;

        this.customerService.getCustomersLarge().then(data => {
            this.customers = data;
            this.loading = false;
        });
        this.customerService.getCustomersXLarge().then(data => this.inmemoryData = data);

        this.frozenValue = [
            {
                id: 1255,
                name: "James McAdams",
                country: {
                    name: "United States",
                    code: "us"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                status: "qualified",
                activity: 23,
                representative: {
                    name: "Ioni Bowcher",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 5135,
                name: "Geraldine Bisset",
                country: {
                    name: "France",
                    code: "fr"
                },
                company: "Bisset Group",
                status: "proposal",
                date: "2019-05-05",
                activity: 0,
                representative: {
                    name: "Amy Elsner",
                    image: "amyelsner.png"
                }
            }
        ];

        setTimeout(() => {
            this.virtualCustomers = this.loadChunk(0, 40);
            this.lazyTotalRecords = 500;
        }, 250);
    },
    methods: {
          loadChunk(index, length) {
            let chunk = [];
            for (let i = 0; i < length; i++) {
                chunk[i] = {...this.inmemoryData[i]};
            }

            return chunk;
        },
        onVirtualScroll(event) {
            setTimeout(() => {
                //last chunk
                if (event.first === 480)
                    this.virtualCustomers = this.loadChunk(event.first, 20)
                else
                    this.virtualCustomers = this.loadChunk(event.first, event.rows)
            }, 250);
        },
        openDialog() {
            this.dialogVisible = true;
        },
        closeDialog() {
            this.dialogVisible = false;
        }
    }
}`,
                    style: `<style lang="scss" scoped>
.loading-text {
    display: block;
    background-color: #f1f1f1;
    min-height: 19px;
    animation: pulse 1s infinite ease-in-out;
    text-indent: -99999px;
    overflow: hidden;
}
</style>`
                }
            }
        }
    },
    customerService: null,
    inmemoryData: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.loading = true;

        this.customerService.getCustomersLarge().then(data => {
            this.customers = data;
            this.loading = false;
        });
        this.customerService.getCustomersXLarge().then(data => this.inmemoryData = data);

        this.frozenValue = [
            {
                id: 1255,
                name: "James McAdams",
                country: {
                    name: "United States",
                    code: "us"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                status: "qualified",
                activity: 23,
                representative: {
                    name: "Ioni Bowcher",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 5135,
                name: "Geraldine Bisset",
                country: {
                    name: "France",
                    code: "fr"
                },
                company: "Bisset Group",
                status: "proposal",
                date: "2019-05-05",
                activity: 0,
                representative: {
                    name: "Amy Elsner",
                    image: "amyelsner.png"
                }
            }
        ];

        setTimeout(() => {
            this.virtualCustomers = this.loadChunk(0, 40);
            this.lazyTotalRecords = 500;
        }, 250);
    },
    methods: {
          loadChunk(index, length) {
            let chunk = [];
            for (let i = 0; i < length; i++) {
                chunk[i] = {...this.inmemoryData[i]};
            }

            return chunk;
        },
        onVirtualScroll(event) {
            setTimeout(() => {
                //last chunk
                if (event.first === 480)
                    this.virtualCustomers = this.loadChunk(event.first, 20)
                else
                    this.virtualCustomers = this.loadChunk(event.first, event.rows)
            }, 250);
        },
        openDialog() {
            this.dialogVisible = true;
        },
        closeDialog() {
            this.dialogVisible = false;
        }
    },
    components: {
        LiveEditor
    }
}
</script>

<style lang="scss" scoped>
.loading-text {
    display: block;
    background-color: #f1f1f1;
    min-height: 19px;
    animation: pulse 1s infinite ease-in-out;
    text-indent: -99999px;
    overflow: hidden;
}
</style>