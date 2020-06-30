<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Responsive</span></h1>
				<p>DataTable display can be optimized according for different screen sizes, this example demonstrates a demo where columns are stacked on a small screens.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" class="p-datatable-responsive-demo" :paginator="true" :rows="10">
                    <template #header>
                        Responsive
                    </template>
                    <Column field="code" header="Code">
                        <template #body="slotProps">
                            <span class="p-column-title">Code</span>
                            {{slotProps.data.code}}
                        </template>
                    </Column>
                    <Column field="name" header="Name">
                        <template #body="slotProps">
                            <span class="p-column-title">Name</span>
                            {{slotProps.data.name}}
                        </template>
                    </Column>
                    <Column field="category" header="Category">
                        <template #body="slotProps">
                            <span class="p-column-title">Category</span>
                            {{slotProps.data.category}}
                        </template>
                    </Column>
                    <Column field="quantity" header="Quantity">
                        <template #body="slotProps">
                            <span class="p-column-title">Quantity</span>
                            {{slotProps.data.quantity}}
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="products" class="p-datatable-responsive-demo" :paginator="true" :rows="10"&gt;
    &lt;template #header&gt;
        Responsive
    &lt;/template&gt;
    &lt;Column field="code" header="Code"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Code&lt;/span&gt;
            {{slotProps.data.code}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="name" header="Name"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Name&lt;/span&gt;
            {{slotProps.data.name}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="category" header="Category"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Category&lt;/span&gt;
            {{slotProps.data.category}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="quantity" header="Quantity"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Quantity&lt;/span&gt;
            {{slotProps.data.quantity}}
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProducts().then(data => this.products = data);
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
                width: 100%;
                float: left;
                clear: left;
                border: 0 none;

                .p-column-title {
                    padding: .4rem;
                    min-width: 30%;
                    display: inline-block;
                    margin: -.4em 1em -.4em -.4rem;
                    font-weight: bold;
                }

                &:last-child {
                    border-bottom: 1px solid var(--surface-d);
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
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProducts().then(data => this.products = data);
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
                width: 100%;
                float: left;
                clear: left;
                border: 0 none;

                .p-column-title {
                    padding: .4rem;
                    min-width: 30%;
                    display: inline-block;
                    margin: -.4em 1em -.4em -.4rem;
                    font-weight: bold;
                }

                &:last-child {
                    border-bottom: 1px solid var(--surface-d);
                }
            }
        }
    }
}
</style>