<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Column Group</h1>
				<p>Columns can be grouped at header and footer using headerColumnGroup and footerColumnGroup components.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <DataTable :value="sales">
                <ColumnGroup type="header">
                    <Row>
                        <Column header="Brand" :rowspan="3" />
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
                <Column field="brand" />
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
                        ${{slotProps.data.lastYearProfit.toLocaleString()}}
                    </template>
                </Column>
                <Column field="thisYearProfit">
                    <template #body="slotProps">
                        ${{slotProps.data.thisYearProfit.toLocaleString()}}
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

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="sales"&gt;
    &lt;ColumnGroup type="header"&gt;
        &lt;Row&gt;
            &lt;Column header="Brand" :rowspan="3" /&gt;
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
    &lt;Column field="brand" /&gt;
    &lt;Column field="lastYearSale"&gt;
        &lt;template #body="slotProps"&gt;
            &#123;&#123;slotProps.data.lastYearSale&#125;&#125;%
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="thisYearSale"&gt;
        &lt;template #body="slotProps"&gt;
            &#123;&#123;slotProps.data.thisYearSale&#125;&#125;%
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="lastYearProfit"&gt;
        &lt;template #body="slotProps"&gt;
            $&#123;&#123;slotProps.data.lastYearProfit.toLocaleString()&#125;&#125;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="thisYearProfit"&gt;
        &lt;template #body="slotProps"&gt;
            $&#123;&#123;slotProps.data.thisYearProfit.toLocaleString()&#125;&#125;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;ColumnGroup type="footer"&gt;
        &lt;Row&gt;
            &lt;Column footer="Totals:" :colspan="3" footerStyle="text-align:right"/&gt;
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
    carService: null,
    created() {
        this.sales = [
            {brand: 'Apple', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
            {brand: 'Samsung', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
            {brand: 'Microsoft', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
            {brand: 'Philips', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
            {brand: 'Song', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
            {brand: 'LG', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
            {brand: 'Sharp', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
            {brand: 'Panasonic', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
            {brand: 'HTC', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
            {brand: 'Toshiba', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
        ];
    },
    computed: {
        lastYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.lastYearProfit;
            }

            return '$' + total.toLocaleString();
        },
        thisYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.thisYearProfit;
            }

            return '$' + total.toLocaleString();
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
import DataTableSubMenu from './DataTableSubMenu';

export default {
    data() {
        return {
            sales: null
        }
    },
    carService: null,
    created() {
        this.sales = [
            {brand: 'Apple', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
            {brand: 'Samsung', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
            {brand: 'Microsoft', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
            {brand: 'Philips', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
            {brand: 'Song', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
            {brand: 'LG', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
            {brand: 'Sharp', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
            {brand: 'Panasonic', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
            {brand: 'HTC', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
            {brand: 'Toshiba', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
        ];
    },
    computed: {
        lastYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.lastYearProfit;
            }

            return '$' + total.toLocaleString();
        },
        thisYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.thisYearProfit;
            }

            return '$' + total.toLocaleString();
        }
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>