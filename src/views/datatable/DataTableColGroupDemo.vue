<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>ColumnGroup</span></h1>
				<p>Columns can be grouped at header and footer using headerColumnGroup and footerColumnGroup components.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="sales" responsiveLayout="scroll">
                    <ColumnGroup type="header">
                        <Row>
                            <Column header="Product" :rowspan="3" />
                            <Column header="Sale Rate" :colspan="4" />
                        </Row>
                        <Row>
                            <Column header="Sales" :colspan="2" />
                            <Column header="Profits" :colspan="2" />
                        </Row>
                        <Row>
                            <Column header="Last Year" :sortable="true" field="lastYearSale"/>
                            <Column header="This Year" :sortable="true" field="thisYearSale"/>
                            <Column header="Last Year" :sortable="true" field="lastYearProfit"/>
                            <Column header="This Year" :sortable="true" field="thisYearProfit"/>
                        </Row>
                    </ColumnGroup>
                    <Column field="product" />
                    <Column field="lastYearSale">
                        <template #body="slotProps">
                            {{slotProps.data.lastYearSale}}%
                        </template>
                    </Column>
                    <Column field="thisYearSale">
                        <template #body="slotProps">
                            {{slotProps.data.thisYearSale}}%
                        </template>
                    </Column>
                    <Column field="lastYearProfit">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.lastYearProfit)}}
                        </template>
                    </Column>
                    <Column field="thisYearProfit">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.thisYearProfit)}}
                        </template>
                    </Column>
                    <ColumnGroup type="footer">
                        <Row>
                            <Column footer="Totals:" :colspan="3" footerStyle="text-align:right"/>
                            <Column :footer="lastYearTotal" />
                            <Column :footer="thisYearTotal" />
                        </Row>
                    </ColumnGroup>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableColGroupDemo" :sources="sources" github="datatable/DataTableColGroupDemo.vue" />
	</div>
</template>

<script>
export default {
    data() {
        return {
            sales: null,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <DataTable :value="sales" responsiveLayout="scroll">
        <ColumnGroup type="header">
            <Row>
                <Column header="Product" :rowspan="3" />
                <Column header="Sale Rate" :colspan="4" />
            </Row>
            <Row>
                <Column header="Sales" :colspan="2" />
                <Column header="Profits" :colspan="2" />
            </Row>
            <Row>
                <Column header="Last Year" :sortable="true" field="lastYearSale"/>
                <Column header="This Year" :sortable="true" field="thisYearSale"/>
                <Column header="Last Year" :sortable="true" field="lastYearProfit"/>
                <Column header="This Year" :sortable="true" field="thisYearProfit"/>
            </Row>
        </ColumnGroup>
        <Column field="product" />
        <Column field="lastYearSale">
            <template #body="slotProps">
                {{slotProps.data.lastYearSale}}%
            </template>
        </Column>
        <Column field="thisYearSale">
            <template #body="slotProps">
                {{slotProps.data.thisYearSale}}%
            </template>
        </Column>
        <Column field="lastYearProfit">
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.lastYearProfit)}}
            </template>
        </Column>
        <Column field="thisYearProfit">
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.thisYearProfit)}}
            </template>
        </Column>
        <ColumnGroup type="footer">
            <Row>
                <Column footer="Totals:" :colspan="3" footerStyle="text-align:right"/>
                <Column :footer="lastYearTotal" />
                <Column :footer="thisYearTotal" />
            </Row>
        </ColumnGroup>
    </DataTable>
</template>

<script>
export default {
    data() {
        return {
            sales: null
        }
    },
    created() {
        this.sales = [
            {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
            {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
            {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
            {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
            {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
            {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
            {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
            {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
            {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
            {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
        ];
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    },
    computed: {
        lastYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.lastYearProfit;
            }

            return this.formatCurrency(total);
        },
        thisYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.thisYearProfit;
            }

            return this.formatCurrency(total);
        }
    }
}
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <DataTable :value="sales" responsiveLayout="scroll">
        <ColumnGroup type="header">
            <Row>
                <Column header="Product" :rowspan="3" />
                <Column header="Sale Rate" :colspan="4" />
            </Row>
            <Row>
                <Column header="Sales" :colspan="2" />
                <Column header="Profits" :colspan="2" />
            </Row>
            <Row>
                <Column header="Last Year" :sortable="true" field="lastYearSale"/>
                <Column header="This Year" :sortable="true" field="thisYearSale"/>
                <Column header="Last Year" :sortable="true" field="lastYearProfit"/>
                <Column header="This Year" :sortable="true" field="thisYearProfit"/>
            </Row>
        </ColumnGroup>
        <Column field="product" />
        <Column field="lastYearSale">
            <template #body="slotProps">
                {{slotProps.data.lastYearSale}}%
            </template>
        </Column>
        <Column field="thisYearSale">
            <template #body="slotProps">
                {{slotProps.data.thisYearSale}}%
            </template>
        </Column>
        <Column field="lastYearProfit">
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.lastYearProfit)}}
            </template>
        </Column>
        <Column field="thisYearProfit">
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.thisYearProfit)}}
            </template>
        </Column>
        <ColumnGroup type="footer">
            <Row>
                <Column footer="Totals:" :colspan="3" footerStyle="text-align:right"/>
                <Column :footer="lastYearTotal" />
                <Column :footer="thisYearTotal" />
            </Row>
        </ColumnGroup>
    </DataTable>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    setup() {
        const sales = ref([
            {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
            {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
            {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
            {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
            {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
            {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
            {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
            {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
            {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
            {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
        ]);

        const formatCurrency = (value) => {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        };

        const lastYearTotal = computed(() => {
            let total = 0;
            for(let sale of sales.value) {
                total += sale.lastYearProfit;
            }

            return formatCurrency(total);
        });

        const thisYearTotal = computed(() => {
            let total = 0;
            for(let sale of sales.value) {
                total += sale.thisYearProfit;
            }

            return formatCurrency(total);
        }) 

        return { sales, formatCurrency, lastYearTotal, thisYearTotal }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/columngroup/columngroup.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/row/row.min.js"><\\/script>`,
                    content: `<div id="app">
            <p-datatable :value="sales" responsive-layout="scroll">
                <p-columngroup type="header">
                    <p-row>
                        <p-column header="Product" :rowspan="3"></p-column>
                        <p-column header="Sale Rate" :colspan="4"></p-column>
                    </p-row>
                    <p-row>
                        <p-column header="Sales" :colspan="2"></p-column>
                        <p-column header="Profits" :colspan="2"></p-column>
                    </p-row>
                    <p-row>
                        <p-column header="Last Year" :sortable="true" field="lastYearSale"></p-column>
                        <p-column header="This Year" :sortable="true" field="thisYearSale"></p-column>
                        <p-column header="Last Year" :sortable="true" field="lastYearProfit"></p-column>
                        <p-column header="This Year" :sortable="true" field="thisYearProfit"></p-column>
                    </p-row>
                </p-columngroup>
                <p-column field="product"></p-column>
                <p-column field="lastYearSale">
                    <template #body="slotProps">
                        {{slotProps.data.lastYearSale}}%
                    </template>
                </p-column>
                <p-column field="thisYearSale">
                    <template #body="slotProps">
                        {{slotProps.data.thisYearSale}}%
                    </template>
                </p-column>
                <p-column field="lastYearProfit">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.lastYearProfit)}}
                    </template>
                </p-column>
                <p-column field="thisYearProfit">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.thisYearProfit)}}
                    </template>
                </p-column>
                <p-columngroup type="footer">
                    <p-row>
                        <p-column footer="Totals:" :colspan="3" footer-style="text-align:right"></p-column>
                        <p-column :footer="lastYearTotal"></p-column>
                        <p-column :footer="thisYearTotal"></p-column>
                    </p-row>
                </p-columngroup>
            </p-datatable>
        </div>

        <script type="module">
        const { createApp, ref, computed } = Vue;

        const App = {
            setup() {
                const sales = ref([
                    {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
                    {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
                    {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
                    {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
                    {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
                    {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
                    {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
                    {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
                    {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
                    {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
                ]);

                const formatCurrency = (value) => {
                    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
                };

                const lastYearTotal = computed(() => {
                    let total = 0;
                    for(let sale of sales.value) {
                        total += sale.lastYearProfit;
                    }

                    return formatCurrency(total);
                });

                const thisYearTotal = computed(() => {
                    let total = 0;
                    for(let sale of sales.value) {
                        total += sale.thisYearProfit;
                    }

                    return formatCurrency(total);
                });

                return { sales, formatCurrency, lastYearTotal, thisYearTotal }
            },
            components: {
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-columngroup": primevue.columngroup,
                "p-row": primevue.row
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>
`
                }
            }
        }
    },
    created() {
        this.sales = [
            {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
            {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
            {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
            {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
            {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
            {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
            {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
            {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
            {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
            {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
        ];
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    },
    computed: {
        lastYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.lastYearProfit;
            }

            return this.formatCurrency(total);
        },
        thisYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.thisYearProfit;
            }

            return this.formatCurrency(total);
        }
    }
}
</script>