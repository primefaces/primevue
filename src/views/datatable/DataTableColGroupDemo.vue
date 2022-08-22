<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>ColumnGroup</span></h1>
				<p>Columns can be grouped at header and footer using headerColumnGroup and footerColumnGroup components.</p>
			</div>
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
                            <Column footer="Totals:" :colspan="3" :footerStyle="{'text-align':'right'}"/>
                            <Column :footer="lastYearTotal" />
                            <Column :footer="thisYearTotal" />
                        </Row>
                    </ColumnGroup>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="sales" responsiveLayout="scroll"&gt;
    &lt;ColumnGroup type="header"&gt;
        &lt;Row&gt;
            &lt;Column header="Product" :rowspan="3" /&gt;
            &lt;Column header="Sale Rate" :colspan="4" /&gt;
        &lt;/Row&gt;
        &lt;Row&gt;
            &lt;Column header="Sales" :colspan="2" /&gt;
            &lt;Column header="Profits" :colspan="2" /&gt;
        &lt;/Row&gt;
        &lt;Row&gt;
            &lt;Column header="Last Year" :sortable="true" field="lastYearSale"/&gt;
            &lt;Column header="This Year" :sortable="true" field="thisYearSale"/&gt;
            &lt;Column header="Last Year" :sortable="true" field="lastYearProfit"/&gt;
            &lt;Column header="This Year" :sortable="true" field="thisYearProfit"/&gt;
        &lt;/Row&gt;
    &lt;/ColumnGroup&gt;
    &lt;Column field="product" /&gt;
    &lt;Column field="lastYearSale"&gt;
        &lt;template #body="slotProps"&gt;
            {{slotProps.data.lastYearSale}}%
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="thisYearSale"&gt;
        &lt;template #body="slotProps"&gt;
            {{slotProps.data.thisYearSale}}%
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="lastYearProfit"&gt;
        &lt;template #body="slotProps"&gt;
            {{formatCurrency(slotProps.data.lastYearProfit)}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="thisYearProfit"&gt;
        &lt;template #body="slotProps"&gt;
            {{formatCurrency(slotProps.data.thisYearProfit)}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;ColumnGroup type="footer"&gt;
        &lt;Row&gt;
            &lt;Column footer="Totals:" :colspan="3" :footerStyle="{'text-align':'right'}"/&gt;
            &lt;Column :footer="lastYearTotal" /&gt;
            &lt;Column :footer="thisYearTotal" /&gt;
        &lt;/Row&gt;
    &lt;/ColumnGroup&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
</CodeHighlight>
                </TabPanel>
            </TabView>
        </div>
	</div>
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
</script>