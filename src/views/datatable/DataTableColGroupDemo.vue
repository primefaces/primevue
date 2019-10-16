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
                        <Column header="Last Year" />
                        <Column header="This Year" />
                        <Column header="Last Year" />
                        <Column header="This Year" />
                    </Row>
                </ColumnGroup>
               <Column field="brand" />
                <Column field="lastYearSale" />
                <Column field="thisYearSale" />
                <Column field="lastYearProfit" />
                <Column field="thisYearProfit" />
                <ColumnGroup type="footer">
                    <Row>
                        <Column footer="Totals:" :colspan="3" />
                        <Column footer="$506,202" />
                        <Column footer="$531,020" />
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
            &lt;Column header="Last Year" /&gt;
            &lt;Column header="This Year" /&gt;
            &lt;Column header="Last Year" /&gt;
            &lt;Column header="This Year" /&gt;
        &lt;/Row&gt;
    &lt;/ColumnGroup&gt;
    &lt;Column field="brand" /&gt;
    &lt;Column field="lastYearSale" /&gt;
    &lt;Column field="thisYearSale" /&gt;
    &lt;Column field="lastYearProfit" /&gt;
    &lt;Column field="thisYearProfit" /&gt;
    &lt;ColumnGroup type="footer"&gt;
        &lt;Row&gt;
            &lt;Column footer="Totals:" :colspan="3" /&gt;
            &lt;Column footer="$506,202" /&gt;
            &lt;Column footer="$531,020" /&gt;
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
            {brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'},
            {brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'},
            {brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'},
            {brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'},
            {brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'},
            {brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'},
            {brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'},
            {brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'},
            {brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'},
            {brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'}
        ];
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
            {brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'},
            {brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'},
            {brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'},
            {brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'},
            {brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'},
            {brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'},
            {brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'},
            {brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'},
            {brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'},
            {brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'}
        ];
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>