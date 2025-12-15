# Vue Table Component

DataTable displays data in tabular format.

## Import

```javascript
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; // optional
import Row from 'primevue/row'; // optional
```

## AccessibilityDoc

Screen Reader DataTable uses a table element whose attributes can be extended with the tableProps option. This property allows passing aria roles and attributes like aria-label and aria-describedby to define the table for readers. Default role of the table is table . Header, body and footer elements use rowgroup , rows use row role, header cells have columnheader and body cells use cell roles. Sortable headers utilizer aria-sort attribute either set to "ascending" or "descending". Built-in checkbox and radiobutton components for row selection use checkbox and radiobutton . The label to describe them is retrieved from the aria.selectRow and aria.unselectRow properties of the locale API. Similarly header checkbox uses selectAll and unselectAll keys. When a row is selected, aria-selected is set to true on a row. The element to expand or collapse a row is a button with aria-expanded and aria-controls properties. Value to describe the buttons is derived from aria.expandRow and aria.collapseRow properties of the locale API. The filter menu button use aria.showFilterMenu and aria.hideFilterMenu properties as aria-label in addition to the aria-haspopup , aria-expanded and aria-controls to define the relation between the button and the overlay. Popop menu has dialog role with aria-modal as focus is kept within the overlay. The operator dropdown use aria.filterOperator and filter constraints dropdown use aria.filterConstraint properties. Buttons to add rules on the other hand utilize aria.addRule and aria.removeRule properties. The footer buttons similarly use aria.clear and aria.apply properties. filterInputProps of the Column component can be used to define aria labels for the built-in filter components, if a custom component is used with templating you also may define your own aria labels as well. Editable cells use custom templating so you need to manage aria roles and attributes manually if required. The row editor controls are button elements with aria.editRow , aria.cancelEdit and aria.saveEdit used for the aria-label . Paginator is a standalone component used inside the DataTable, refer to the paginator for more information about the accessibility features. Keyboard Support Any button element inside the DataTable used for cases like filter, row expansion, edit are tabbable and can be used with space and enter keys. Sortable Headers Keyboard Support Key Function tab Moves through the headers. enter Sorts the column. space Sorts the column. Filter Menu Keyboard Support Key Function tab Moves through the elements inside the popup. escape Hides the popup. Selection Keyboard Support Key Function tab Moves focus to the first selected row, if there is none then first row receives the focus. up arrow Moves focus to the previous row. down arrow Moves focus to the next row. enter Toggles the selected state of the focused row depending on the metaKeySelection setting. space Toggles the selected state of the focused row depending on the metaKeySelection setting. home Moves focus to the first row. end Moves focus to the last row. shift + down arrow Moves focus to the next row and toggles the selection state. shift + up arrow Moves focus to the previous row and toggles the selection state. shift + space Selects the rows between the most recently selected row and the focused row. control + shift + home Selects the focused rows and all the options up to the first one. control + shift + end Selects the focused rows and all the options down to the last one. control + a Selects all rows.

## Basic

DataTable requires a value as data to display and Column components as children for the representation.

```vue
<DataTable :value="products" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
```

## ColumnGroupDoc

Columns can be grouped within a Row component and groups can be displayed within a ColumnGroup component. These groups can be displayed using type property that can be header or footer . Number of cells and rows to span are defined with the colspan and rowspan properties of a Column.

```vue
<DataTable :value="sales" tableStyle="min-width: 50rem">
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
            <Column header="Last Year" sortable field="lastYearSale" />
            <Column header="This Year" sortable field="thisYearSale" />
            <Column header="Last Year" sortable field="lastYearProfit" />
            <Column header="This Year" sortable field="thisYearProfit" />
        </Row>
    </ColumnGroup>
    <Column field="product" />
    <Column field="lastYearSale">
        <template #body="slotProps"> {{ slotProps.data.lastYearSale }}% </template>
    </Column>
    <Column field="thisYearSale">
        <template #body="slotProps"> {{ slotProps.data.thisYearSale }}% </template>
    </Column>
    <Column field="lastYearProfit">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.lastYearProfit) }}
        </template>
    </Column>
    <Column field="thisYearProfit">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.thisYearProfit) }}
        </template>
    </Column>
    <ColumnGroup type="footer">
        <Row>
            <Column footer="Totals:" :colspan="3" footerStyle="text-align:right" />
            <Column :footer="lastYearTotal" />
            <Column :footer="thisYearTotal" />
        </Row>
    </ColumnGroup>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <DataTable :value="sales" tableStyle="min-width: 50rem">
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
                <Column header="Last Year" sortable field="lastYearSale"/>
                <Column header="This Year" sortable field="thisYearSale"/>
                <Column header="Last Year" sortable field="lastYearProfit"/>
                <Column header="This Year" sortable field="thisYearProfit"/>
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

<script setup>
import { ref, computed } from 'vue';

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

<\/script>
```

</details>

## ColumnToggleDoc

Column visibility based on a condition can be implemented with dynamic columns, in this sample a MultiSelect is used to manage the visible columns.

```vue
<DataTable :value="products" tableStyle="min-width: 50rem">
    <template #header>
        <div style="text-align:left">
            <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"
                display="chip" placeholder="Select Columns" />
        </div>
    </template>
    <Column field="code" header="Code" />
    <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div>
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"
                        display="chip" placeholder="Select Columns" />
                </div>
            </template>
            <Column field="code" header="Code" />
            <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const columns = ref([
    {field: 'name', header: 'Name'},
    {field: 'category', header: 'Category'},
    {field: 'quantity', header: 'Quantity'}
]);
const selectedColumns = ref(columns.value);
const products = ref();
const onToggle = (val) => {
    selectedColumns.value = columns.value.filter(col => val.includes(col));
};

<\/script>
```

</details>

## ConditionalStyleDoc

Particular rows and cells can be styled based on conditions. The rowClass receives a row data as a parameter to return a style class for a row whereas cells are customized using the body template.

```vue
<DataTable :value="products" :rowClass="rowClass" :rowStyle="rowStyle" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity">
        <template #body="slotProps">
            <Badge :value="slotProps.data.quantity" :severity="stockSeverity(slotProps.data)" />
        </template>
    </Column>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DataTable :value="products" :rowClass="rowClass" :rowStyle="rowStyle" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity">
                <template #body="slotProps">
                    <Badge :value="slotProps.data.quantity" :severity="stockSeverity(slotProps.data)" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (this.products = data));
});

const products = ref();

const rowClass = (data) => {
    return [{ '!bg-primary !text-primary-contrast': data.category === 'Fitness' }];
};
const rowStyle = (data) => {
    if (data.quantity === 0) {
        return { fontWeight: 'bold', fontStyle: 'italic' };
    }
};
const stockSeverity = (data) => {
    if (data.quantity === 0) return 'danger';
    else if (data.quantity > 0 && data.quantity < 10) return 'warn';
    else return 'success';
}

<\/script>
```

</details>

## ContextMenuDoc

DataTable has exclusive integration with ContextMenu using the contextMenu event to open a menu on right click along with contextMenuSelection property and row-contextmenu event to control the selection via the menu.

```vue
<ContextMenu ref="cm" :model="menuModel" @hide="selectedProduct = null" />
<DataTable v-model:contextMenuSelection="selectedProduct" :value="products" contextMenu @row-contextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="price" header="Price">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
        </template>
    </Column>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <ContextMenu ref="cm" :model="menuModel" @hide="selectedProduct = null" />
        <DataTable :value="products" contextMenu v-model:contextMenuSelection="selectedProduct"
                @rowContextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.price)}}
                </template>
                </Column>
        </DataTable>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const cm = ref();
const toast = useToast();
const products = ref();
const selectedProduct = ref();
const menuModel = ref([
    {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct)},
    {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct)}
]);
const onRowContextMenu = (event) => {
    cm.value.show(event.originalEvent);
};
const viewProduct = (product) => {
    toast.add({severity: 'info', summary: 'Product Selected', detail: product.value.name, life: 3000});
};
const deleteProduct = (product) => {
    products.value = products.value.filter((p) => p.id !== product.value.id);
    toast.add({severity: 'error', summary: 'Product Deleted', detail: product.value.name, life: 3000});
    selectedProduct.value = null;
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
};

<\/script>
```

</details>

## DynamicColumnsDoc

Columns can be created programmatically.

```vue
<DataTable :value="products" tableStyle="min-width: 50rem">
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const columns = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
];

<\/script>
```

</details>

## ExportDoc

DataTable can export its data to CSV format.

```vue
<DataTable :value="products" ref="dt" tableStyle="min-width: 50rem">
    <template #header>
        <div class="text-end pb-4">
            <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
        </div>
    </template>
    <Column field="code" header="Code" exportHeader="Product Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div>
        <DataTable :value="products" ref="dt" tableStyle="min-width: 50rem">
            <template #header>
                <div class="text-end pb-4">
                    <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                </div>
            </template>
            <Column field="code" header="Code" exportHeader="Product Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const dt = ref();
const products = ref();
const exportCSV = () => {
    dt.value.exportCSV();
};
<\/script>
```

</details>

## Grid Lines

Enabling showGridlines displays borders between cells.

```vue
<DataTable :value="products" showGridlines tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DataTable :value="products" showGridlines tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();

<\/script>
```

</details>

## LazyLoadDoc

Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging , sorting and filtering occurs. Sample below imitates lazy loading data from a remote datasource using an in-memory list and timeouts to mimic network connection. Enabling the lazy property and assigning the logical number of rows to totalRecords by doing a projection query are the key elements of the implementation so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they are not present on page, only the records that are displayed on the current page exist. Note that, the implementation of checkbox selection in lazy mode needs to be handled manually as in this example since the DataTable cannot know about the whole dataset.

```vue
<DataTable
    :value="customers"
    lazy
    paginator
    :first="first"
    :rows="10"
    v-model:filters="filters"
    ref="dt"
    dataKey="id"
    :totalRecords="totalRecords"
    :loading="loading"
    @page="onPage($event)"
    @sort="onSort($event)"
    @filter="onFilter($event)"
    filterDisplay="row"
    :globalFilterFields="['name', 'country.name', 'company', 'representative.name']"
    v-model:selection="selectedCustomers"
    :selectAll="selectAll"
    @select-all-change="onSelectAllChange"
    @row-select="onRowSelect"
    @row-unselect="onRowUnselect"
    tableStyle="min-width: 75rem"
>
    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
    <Column field="name" header="Name" filterMatchMode="startsWith" sortable>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search" fluid/>
        </template>
    </Column>
    <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" sortable>
        <template #body="{ data }">
            <div class="flex items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                <span>{{ data.country.name }}</span>
            </div>
        </template>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search" fluid/>
        </template>
    </Column>
    <Column field="company" header="Company" filterMatchMode="contains" sortable>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search" fluid/>
        </template>
    </Column>
    <Column field="representative.name" header="Representative" filterField="representative.name" sortable>
        <template #body="{ data }">
            <div class="flex items-center gap-2">
                <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                <span>{{ data.representative.name }}</span>
            </div>
        </template>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search" fluid/>
        </template>
    </Column>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
	<div class="card">
        <DataTable :value="customers" lazy paginator :first="first" :rows="10" v-model:filters="filters" ref="dt" dataKey="id"
            :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
            :globalFilterFields="['name','country.name', 'company', 'representative.name']"
            v-model:selection="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect" tableStyle="min-width: 75rem">
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="name" header="Name" filterMatchMode="startsWith" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search" fluid/>
                </template>
            </Column>
            <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" sortable>
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search" fluid/>
                </template>
            </Column>
            <Column field="company" header="Company" filterMatchMode="contains" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search" fluid/>
                </template>
            </Column>
            <Column field="representative.name" header="Representative" filterField="representative.name" sortable>
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search" fluid/>
                </template>
            </Column>
        </DataTable>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

onMounted(() => {
    loading.value = true;

    lazyParams.value = {
        first: 0,
        rows: 10,
        sortField: null,
        sortOrder: null,
        filters: filters.value
    };

    loadLazyData();
});

const dt = ref();
const loading = ref(false);
const totalRecords = ref(0);
const customers = ref();
const selectedCustomers = ref();
const selectAll = ref(false);
const first = ref(0);
const filters = ref({
    'name': {value: '', matchMode: 'contains'},
    'country.name': {value: '', matchMode: 'contains'},
    'company': {value: '', matchMode: 'contains'},
    'representative.name': {value: '', matchMode: 'contains'},
});
const lazyParams = ref({});
const columns = ref([
    {field: 'name', header: 'Name'},
    {field: 'country.name', header: 'Country'},
    {field: 'company', header: 'Company'},
    {field: 'representative.name', header: 'Representative'}
]);

const loadLazyData = (event) => {
    loading.value = true;
    lazyParams.value = { ...lazyParams.value, first: event?.first || first.value };

    setTimeout(() => {
        CustomerService.getCustomers({ lazyEvent: JSON.stringify(lazyParams.value) }).then((data) => {
            customers.value = data.customers;
            totalRecords.value = data.totalRecords;
            loading.value = false;
        });
    }, Math.random() * 1000 + 250);
};
const onPage = (event) => {
    lazyParams.value = event;
    loadLazyData(event);
};
const onSort = (event) => {
    lazyParams.value = event;
    loadLazyData(event);
};
const onFilter = (event) => {
    lazyParams.value.filters = filters.value ;
    loadLazyData(event);
};
const onSelectAllChange = (event) => {
    selectAll.value = event.checked;

    if (selectAll) {
        CustomerService.getCustomers().then(data => {
            selectAll.value = true;
            selectedCustomers.value = data.customers;
        });
    }
    else {
        selectAll.value = false;
        selectedCustomers.value = [];
    }
};
const onRowSelect = () => {
    selectAll.value = selectedCustomers.value.length === totalRecords.value;
};
const onRowUnselect = () => {
    selectAll.value = false;
};

<\/script>
```

</details>

## ReorderDoc

Order of the columns and rows can be changed using drag and drop. Column reordering is configured by adding reorderableColumns property. Similarly, adding rowReorder property to a column enables draggable rows. For the drag handle a column needs to have rowReorder property and table needs to have row-reorder event is required to control the state of the rows after reorder completes.

```vue
<DataTable :value="products" :reorderableColumns="true" @columnReorder="onColReorder" @rowReorder="onRowReorder" tableStyle="min-width: 50rem">
    <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
	<div>
        <DataTable :value="products" :reorderableColumns="true" @columnReorder="onColReorder" @rowReorder="onRowReorder" tableStyle="min-width: 50rem">
            <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
            <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </DataTable>
        <Toast />
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then(data => products.value = data);
});

const toast = useToast();
const columns = ref([
    {field: 'code', header: 'Code'},
    {field: 'name', header: 'Name'},
    {field: 'category', header: 'Category'},
    {field: 'quantity', header: 'Quantity'}
]);
const products = ref();

const onColReorder = () => {
    toast.add({severity:'success', summary: 'Column Reordered', life: 3000});
};
const onRowReorder = (event) => {
    products.value = event.value;
    toast.add({severity:'success', summary: 'Rows Reordered', life: 3000});
};

<\/script>
```

</details>

## RowExpansionDoc

Row expansion is controlled with expandedRows property. The column that has the expander element requires expander property to be enabled. Optional rowExpand and rowCollapse events are available as callbacks. Expanded rows can either be an array of row data or when dataKey is present, an object whose keys are strings referring to the identifier of the row data and values are booleans to represent the expansion state e.g. &#123;'1004': true&#125; . The dataKey alternative is more performant for large amounts of data.

```vue
<DataTable v-model:expandedRows="expandedRows" :value="products" dataKey="id"
        @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">
    <template #header>
        <div class="flex flex-wrap justify-end gap-2">
            <Button variant="text" icon="pi pi-plus" label="Expand All" @click="expandAll" />
            <Button variant="text" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
    </template>
    <Column expander style="width: 5rem" />
    <Column field="name" header="Name"></Column>
    <Column header="Image">
        <template #body="slotProps">
            <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="shadow-lg" width="64" />
        </template>
    </Column>
    <Column field="price" header="Price">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
        </template>
    </Column>
    <Column field="category" header="Category"></Column>
    <Column field="rating" header="Reviews">
        <template #body="slotProps">
            <Rating :modelValue="slotProps.data.rating" readonly />
        </template>
    </Column>
    <Column header="Status">
        <template #body="slotProps">
            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
        </template>
    </Column>
    <template #expansion="slotProps">
        <div class="p-4">
            <h5>Orders for {{ slotProps.data.name }}</h5>
            <DataTable :value="slotProps.data.orders">
                <Column field="id" header="Id" sortable></Column>
                <Column field="customer" header="Customer" sortable></Column>
                <Column field="date" header="Date" sortable></Column>
                <Column field="amount" header="Amount" sortable>
                    <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.amount) }}
                    </template>
                </Column>
                <Column field="status" header="Status" sortable>
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.status.toLowerCase()" :severity="getOrderSeverity(slotProps.data)" />
                    </template>
                </Column>
                <Column headerStyle="width:4rem">
                    <template #body>
                        <Button icon="pi pi-search" />
                    </template>
                </Column>
            </DataTable>
        </div>
    </template>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DataTable v-model:expandedRows="expandedRows" :value="products" dataKey="id"
                @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">
            <template #header>
                <div class="flex flex-wrap justify-end gap-2">
                    <Button variant="text" icon="pi pi-plus" label="Expand All" @click="expandAll" />
                    <Button variant="text" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
                </div>
            </template>
            <Column expander style="width: 5rem" />
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="shadow-lg" width="64" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <template #expansion="slotProps">
                <div class="p-4">
                    <h5>Orders for {{ slotProps.data.name }}</h5>
                    <DataTable :value="slotProps.data.orders">
                        <Column field="id" header="Id" sortable></Column>
                        <Column field="customer" header="Customer" sortable></Column>
                        <Column field="date" header="Date" sortable></Column>
                        <Column field="amount" header="Amount" sortable>
                            <template #body="slotProps">
                                {{ formatCurrency(slotProps.data.amount) }}
                            </template>
                        </Column>
                        <Column field="status" header="Status" sortable>
                            <template #body="slotProps">
                                <Tag :value="slotProps.data.status.toLowerCase()" :severity="getOrderSeverity(slotProps.data)" />
                            </template>
                        </Column>
                        <Column headerStyle="width:4rem">
                            <template #body>
                                <Button icon="pi pi-search" />
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </template>
        </DataTable>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

const products = ref();
const expandedRows = ref({});
const toast = useToast();

onMounted(() => {
    ProductService.getProductsWithOrdersSmall().then((data) => (products.value = data));
});

const onRowExpand = (event) => {
    toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
};
const onRowCollapse = (event) => {
    toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
};
const expandAll = () => {
    expandedRows.value = products.value.reduce((acc, p) => (acc[p.id] = true) && acc, {});
};
const collapseAll = () => {
    expandedRows.value = null;
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
const getOrderSeverity = (order) => {
    switch (order.status) {
        case 'DELIVERED':
            return 'success';

        case 'CANCELLED':
            return 'danger';

        case 'PENDING':
            return 'warn';

        case 'RETURNED':
            return 'info';

        default:
            return null;
    }
};

<\/script>
```

</details>

## Size

In addition to a regular table, alternatives with alternative sizes are available.

```vue
<SelectButton v-model="size" :options="sizeOptions" optionLabel="label" dataKey="label" />
<DataTable :value="products" :size="size.value" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="flex justify-center mb-6">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" dataKey="label" />
        </div>
        <DataTable :value="products" :size="size.value" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const size = ref({ label: 'Normal', value: 'null' });
const sizeOptions = ref([
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'null' },
    { label: 'Large', value: 'large' }
]);

<\/script>
```

</details>

## StatefulDoc

Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again, table would render the data using the last settings. Change the state of the table e.g paginate, navigate away and then return to this table again to test this feature, the setting is set as session with the stateStorage property so that Table retains the state until the browser is closed. Other alternative is local referring to localStorage for an extended lifetime.

```vue
<DataTable
    v-model:filters="filters"
    v-model:selection="selectedCustomer"
    :value="customers"
    stateStorage="session"
    stateKey="dt-state-demo-session"
    paginator
    :rows="5"
    filterDisplay="menu"
    selectionMode="single"
    dataKey="id"
    :globalFilterFields="['name', 'country.name', 'representative.name', 'status']"
    tableStyle="min-width: 50rem"
>
    <template #header>
        <IconField>
            <InputIcon>
                <i class="pi pi-search" />
            </InputIcon>
            <InputText v-model="filters['global'].value" placeholder="Global Search" />
        </IconField>
    </template>
    <Column field="name" header="Name" sortable style="width: 25%">
        <template #filter="{ filterModel }">
            <InputText v-model="filterModel.value" type="text" placeholder="Search by name" />
        </template>
    </Column>
    <Column header="Country" sortable sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width: 25%">
        <template #body="{ data }">
            <div class="flex items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                <span>{{ data.country.name }}</span>
            </div>
        </template>
        <template #filter="{ filterModel }">
            <InputText v-model="filterModel.value" type="text" placeholder="Search by country" />
        </template>
    </Column>
    <Column header="Representative" sortable sortField="representative.name" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="width: 25%">
        <template #body="{ data }">
            <div class="flex items-center gap-2">
                <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                <span>{{ data.representative.name }}</span>
            </div>
        </template>
        <template #filter="{ filterModel }">
            <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any">
                <template #option="slotProps">
                    <div class="flex items-center gap-2">
                        <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                        <span>{{ slotProps.option.name }}</span>
                    </div>
                </template>
            </MultiSelect>
        </template>
    </Column>
    <Column field="status" header="Status" sortable filterMatchMode="equals" style="width: 25%">
        <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
        <template #filter="{ filterModel }">
            <Select v-model="filterModel.value" :options="statuses" placeholder="Select One" showClear>
                <template #option="slotProps">
                    <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                </template>
            </Select>
        </template>
    </Column>
    <template #empty> No customers found. </template>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DataTable v-model:filters="filters" v-model:selection="selectedCustomer" :value="customers"
                stateStorage="session" stateKey="dt-state-demo-session" paginator :rows="5" filterDisplay="menu"
                selectionMode="single" dataKey="id" :globalFilterFields="['name', 'country.name', 'representative.name', 'status']" tableStyle="min-width: 50rem">
            <template #header>
                <IconField>
                <InputIcon>
                    <i class="pi pi-search" />
                </InputIcon>
                <InputText v-model="filters['global'].value" placeholder="Global Search" />
            </IconField>
            </template>
            <Column field="name" header="Name" sortable style="width: 25%">
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" sortable sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width: 25%">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" placeholder="Search by country" />
                </template>
            </Column>
            <Column header="Representative" sortable sortField="representative.name" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="width: 25%">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any">
                        <template #option="slotProps">
                            <div class="flex items-center gap-2">
                                <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="status" header="Status" sortable filterMatchMode="equals" style="width: 25%">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel }">
                    <Select v-model="filterModel.value" :options="statuses" placeholder="Select One" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Select>
                </template>
            </Column>
            <template #empty> No customers found. </template>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';

const customers = ref();
const selectedCustomer = ref();
const filters = ref(
    {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    }
);
const representatives = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);

onMounted(() => {
    CustomerService.getCustomersSmall().then((data) => (customers.value = data));
});

const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warn';

        case 'renewal':
            return null;
    }
};

<\/script>
```

</details>

## StripedRowsDoc

Alternating rows are displayed when stripedRows property is present.

```vue
<DataTable :value="products" stripedRows tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DataTable :value="products" stripedRows tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();

<\/script>
```

</details>

## Template

Custom content at header and footer sections are supported via templating.

```vue
<DataTable :value="products" tableStyle="min-width: 50rem">
    <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-xl font-bold">Products</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    </template>
    <Column field="name" header="Name"></Column>
    <Column header="Image">
        <template #body="slotProps">
            <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="w-24 rounded" />
        </template>
    </Column>
    <Column field="price" header="Price">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
        </template>
    </Column>
    <Column field="category" header="Category"></Column>
    <Column field="rating" header="Reviews">
        <template #body="slotProps">
            <Rating :modelValue="slotProps.data.rating" readonly />
        </template>
    </Column>
    <Column header="Status">
        <template #body="slotProps">
            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
        </template>
    </Column>
    <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="text-xl font-bold">Products</span>
                    <Button icon="pi pi-refresh" rounded raised />
                </div>
            </template>
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="w-24 rounded" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

<\/script>
```

</details>

## Data Table

### Props

| Name                      | Type                                          | Default                                                                            | Description                                                                                                                                                                                                                                                                        |
| ------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value                     | null \| readonly T[]                          | -                                                                                  | An array of objects to display.                                                                                                                                                                                                                                                    |
| dataKey                   | keyof T \| Function                           | -                                                                                  | Name of the field that uniquely identifies the a record in the data.                                                                                                                                                                                                               |
| rows                      | number                                        | 0                                                                                  | Number of rows to display per page.                                                                                                                                                                                                                                                |
| first                     | number                                        | 0                                                                                  | Index of the first row to be displayed.                                                                                                                                                                                                                                            |
| totalRecords              | number                                        | 0                                                                                  | Number of total records, defaults to length of value when not defined.                                                                                                                                                                                                             |
| paginator                 | boolean                                       | false                                                                              | When specified as true, enables the pagination.                                                                                                                                                                                                                                    |
| paginatorPosition         | HintedString<"top" \| "bottom" \| "both">     | bottom                                                                             | Position of the paginator, options are 'top','bottom' or 'both'.                                                                                                                                                                                                                   |
| alwaysShowPaginator       | boolean                                       | true                                                                               | Whether to show it even there is only one page.                                                                                                                                                                                                                                    |
| paginatorTemplate         | any                                           | FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown | Template of the paginator. It can be customized using the template property using the predefined keys. - FirstPageLink - PrevPageLink - PageLinks - NextPageLink - LastPageLink - RowsPerPageDropdown - JumpToPageDropdown - JumpToPageInput - CurrentPageReport                   |
| pageLinkSize              | number                                        | 5                                                                                  | Number of page links to display.                                                                                                                                                                                                                                                   |
| rowsPerPageOptions        | number[]                                      | -                                                                                  | Array of integer values to display inside rows per page dropdown.                                                                                                                                                                                                                  |
| currentPageReportTemplate | string                                        | '({currentPage} of {totalPages})'                                                  | Template of the current page report element. It displays information about the pagination state. Available placeholders are the following; - {currentPage} - {totalPages} - {rows} - {first} - {last} - {totalRecords}                                                             |
| lazy                      | boolean                                       | false                                                                              | Defines if data is loaded and interacted with in lazy manner.                                                                                                                                                                                                                      |
| loading                   | boolean                                       | false                                                                              | Displays a loader to indicate data load is in progress.                                                                                                                                                                                                                            |
| loadingIcon               | string                                        | -                                                                                  | The icon to show while indicating data load is in progress.                                                                                                                                                                                                                        |
| sortField                 | keyof T \| Function                           | -                                                                                  | Property name or a getter function of a row data used for sorting by default                                                                                                                                                                                                       |
| sortOrder                 | number                                        | -                                                                                  | Order to sort the data by default.                                                                                                                                                                                                                                                 |
| nullSortOrder             | number                                        | 1                                                                                  | Determines how null values are sorted.                                                                                                                                                                                                                                             |
| defaultSortOrder          | number                                        | 1                                                                                  | Default sort order of an unsorted column.                                                                                                                                                                                                                                          |
| multiSortMeta             | DataTableSortMeta[]                           | -                                                                                  | An array of SortMeta objects to sort the data.                                                                                                                                                                                                                                     |
| sortMode                  | HintedString<"single" \| "multiple">          | single                                                                             | Defines whether sorting works on single column or on multiple columns.                                                                                                                                                                                                             |
| removableSort             | boolean                                       | false                                                                              | When enabled, columns can have an un-sorted state.                                                                                                                                                                                                                                 |
| filters                   | DataTableFilterMeta                           | -                                                                                  | Filters object with key-value pairs to define the filters.                                                                                                                                                                                                                         |
| filterDisplay             | HintedString<"menu" \| "row">                 | -                                                                                  | Layout of the filter elements.                                                                                                                                                                                                                                                     |
| globalFilterFields        | (keyof T \| Function)[]                       | -                                                                                  | An array of fields as string or function to use in global filtering.                                                                                                                                                                                                               |
| filterLocale              | string                                        | -                                                                                  | Locale to use in filtering. The default locale is the host environment's current locale.                                                                                                                                                                                           |
| selection                 | NoInfer<T> \| NoInfer<T>[]                    | -                                                                                  | Selected row in single mode or an array of values in multiple mode.                                                                                                                                                                                                                |
| selectionMode             | HintedString<"single" \| "multiple">          | -                                                                                  | Specifies the selection mode.                                                                                                                                                                                                                                                      |
| compareSelectionBy        | HintedString<"equals" \| "deepEquals">        | deepEquals                                                                         | Algorithm to define if a row is selected.                                                                                                                                                                                                                                          |
| metaKeySelection          | boolean                                       | false                                                                              | Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. |
| contextMenu               | boolean                                       | false                                                                              | Enables context menu integration.                                                                                                                                                                                                                                                  |
| contextMenuSelection      | NoInfer<T> \| NoInfer<T>[]                    | -                                                                                  | Selected row instance with the ContextMenu.                                                                                                                                                                                                                                        |
| selectAll                 | Nullable<boolean>                             | -                                                                                  | Whether all data is selected.                                                                                                                                                                                                                                                      |
| rowHover                  | boolean                                       | false                                                                              | When enabled, background of the rows change on hover.                                                                                                                                                                                                                              |
| csvSeparator              | string                                        | ,                                                                                  | Character to use as the csv separator.                                                                                                                                                                                                                                             |
| exportFilename            | string                                        | download                                                                           | Name of the exported file.                                                                                                                                                                                                                                                         |
| exportFunction            | Function                                      | -                                                                                  |                                                                                                                                                                                                                                                                                    |
| resizableColumns          | boolean                                       | false                                                                              | When enabled, columns can be resized using drag and drop.                                                                                                                                                                                                                          |
| columnResizeMode          | HintedString<"fit" \| "expand">               | fit                                                                                | Defines whether the overall table width.                                                                                                                                                                                                                                           |
| reorderableColumns        | boolean                                       | false                                                                              | When enabled, columns can be reordered using drag and drop.                                                                                                                                                                                                                        |
| expandedRows              | null \| DataTableExpandedRows \| NoInfer<T>[] | -                                                                                  | A collection of row data display as expanded.                                                                                                                                                                                                                                      |
| expandedRowIcon           | string                                        | -                                                                                  | Icon of the row toggler to display the row as expanded.                                                                                                                                                                                                                            |
| collapsedRowIcon          | string                                        | -                                                                                  | Icon of the row toggler to display the row as collapsed.                                                                                                                                                                                                                           |
| rowGroupMode              | HintedString<"subheader" \| "rowspan">        | -                                                                                  | Defines the row group mode.                                                                                                                                                                                                                                                        |
| groupRowsBy               | keyof T \| Function \| (keyof T)[]            | -                                                                                  | One or more field names to use in row grouping.                                                                                                                                                                                                                                    |
| expandableRowGroups       | boolean                                       | false                                                                              | Whether the row groups can be expandable.                                                                                                                                                                                                                                          |
| expandedRowGroups         | DataTableExpandedRows \| NoInfer<T>[]         | -                                                                                  | An array of group field values whose groups would be rendered as expanded.                                                                                                                                                                                                         |
| stateStorage              | HintedString<"session" \| "local">            | session                                                                            | Defines where a stateful table keeps its state.                                                                                                                                                                                                                                    |
| stateKey                  | string                                        | -                                                                                  | Unique identifier of a stateful table to use in state storage.                                                                                                                                                                                                                     |
| editMode                  | HintedString<"row" \| "cell">                 | -                                                                                  | Defines the incell editing mode.                                                                                                                                                                                                                                                   |
| editingRows               | DataTableEditingRows \| NoInfer<T>[]          | -                                                                                  | A collection of rows to represent the current editing data in row edit mode.                                                                                                                                                                                                       |
| rowClass                  | Function                                      | -                                                                                  |                                                                                                                                                                                                                                                                                    |
| rowStyle                  | Function                                      | -                                                                                  |                                                                                                                                                                                                                                                                                    |
| scrollable                | boolean                                       | false                                                                              | When specified, enables horizontal and/or vertical scrolling.                                                                                                                                                                                                                      |
| scrollHeight              | HintedString<"flex">                          | -                                                                                  | Height of the scroll viewport in fixed pixels or the 'flex' keyword for a dynamic size.                                                                                                                                                                                            |
| virtualScrollerOptions    | any                                           | -                                                                                  | Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it. Note: Currently only vertical orientation mode is supported.                                                                                             |
| frozenValue               | null \| NoInfer<T>[]                          | -                                                                                  | Items of the frozen part in scrollable DataTable.                                                                                                                                                                                                                                  |
| breakpoint                | string                                        | 960px                                                                              | The breakpoint to define the maximum width boundary when using stack responsive layout.                                                                                                                                                                                            |
| showHeaders               | boolean                                       | true                                                                               | Whether to display table headers                                                                                                                                                                                                                                                   |
| showGridlines             | boolean                                       | false                                                                              | Whether to show grid lines between cells.                                                                                                                                                                                                                                          |
| stripedRows               | boolean                                       | false                                                                              | Whether to displays rows with alternating colors.                                                                                                                                                                                                                                  |
| highlightOnSelect         | boolean                                       | false                                                                              | Highlights automatically the first item.                                                                                                                                                                                                                                           |
| size                      | HintedString<"small" \| "large">              | -                                                                                  | Defines the size of the table.                                                                                                                                                                                                                                                     |
| tableStyle                | string \| object                              | -                                                                                  | Inline style of the table element.                                                                                                                                                                                                                                                 |
| tableClass                | string \| object                              | -                                                                                  | Style class of the table element.                                                                                                                                                                                                                                                  |
| tableProps                | TableHTMLAttributes                           | -                                                                                  | Used to pass all properties of the TableHTMLAttributes to table element inside the component.                                                                                                                                                                                      |
| filterInputProps          | InputHTMLAttributes                           | -                                                                                  | Used to pass all properties of the HTMLInputElement to the focusable filter input element inside the component.                                                                                                                                                                    |
| filterButtonProps         | Partial<DataTableFilterButtonPropsOptions>    | -                                                                                  | Used to pass all filter button property object                                                                                                                                                                                                                                     |
| editButtonProps           | DataTableEditButtonPropsOptions               | -                                                                                  | Used to pass all edit button property object                                                                                                                                                                                                                                       |
| dt                        | any                                           | -                                                                                  | It generates scoped CSS variables using design tokens for the component.                                                                                                                                                                                                           |
| pt                        | PassThrough<DataTablePassThroughOptions>      | -                                                                                  | Used to pass attributes to DOM elements inside the component.                                                                                                                                                                                                                      |
| ptOptions                 | any                                           | -                                                                                  | Used to configure passthrough(pt) options of the component.                                                                                                                                                                                                                        |
| unstyled                  | boolean                                       | false                                                                              | When enabled, it removes component related styles in the core.                                                                                                                                                                                                                     |

## Pass Through Options

| Name                    | Type                               | Description                                                              |
| ----------------------- | ---------------------------------- | ------------------------------------------------------------------------ |
| root                    | DataTablePassThroughOptionType     | Used to pass attributes to the root's DOM element.                       |
| mask                    | DataTablePassThroughOptionType     | Used to pass attributes to the mask's DOM element.                       |
| loadingIcon             | DataTablePassThroughOptionType     | Used to pass attributes to the loading icon's DOM element.               |
| header                  | DataTablePassThroughOptionType     | Used to pass attributes to the header's DOM element.                     |
| pcPaginator             | any                                | Used to pass attributes to the Paginator component.                      |
| tableContainer          | DataTablePassThroughOptionType     | Used to pass attributes to the table container's DOM element.            |
| virtualScroller         | any                                | Used to pass attributes to the VirtualScroller component.                |
| table                   | DataTablePassThroughOptionType     | Used to pass attributes to the table's DOM element.                      |
| virtualScrollerSpacer   | DataTablePassThroughOptionType     | Used to pass attributes to the virtual scroller spacer's DOM element.    |
| footer                  | DataTablePassThroughOptionType     | Used to pass attributes to the footer's DOM element.                     |
| thead                   | DataTablePassThroughOptionType     | Used to pass attributes to the thead's DOM element.                      |
| headerRow               | DataTablePassThroughOptionType     | Used to pass attributes to the header row's DOM element.                 |
| tbody                   | DataTablePassThroughOptionType     | Used to pass attributes to the tbody's DOM element.                      |
| rowGroupHeader          | DataTablePassThroughOptionType     | Used to pass attributes to the rowg roup header's DOM element.           |
| rowGroupHeaderCell      | DataTablePassThroughOptionType     | Used to pass attributes to the row group header cell's DOM element.      |
| bodyRow                 | DataTablePassThroughOptionType     | Used to pass attributes to the body row's DOM element.                   |
| rowExpansion            | DataTablePassThroughOptionType     | Used to pass attributes to the row expansion's DOM element.              |
| rowExpansionCell        | DataTablePassThroughOptionType     | Used to pass attributes to the row expansion cell's DOM element.         |
| rowGroupFooter          | DataTablePassThroughOptionType     | Used to pass attributes to the row group footer's DOM element.           |
| rowGroupFooterCell      | DataTablePassThroughOptionType     | Used to pass attributes to the row group footer cell's DOM element.      |
| emptyMessage            | DataTablePassThroughOptionType     | Used to pass attributes to the empty message's DOM element.              |
| emptyMessageCell        | DataTablePassThroughOptionType     | Used to pass attributes to the empty message cell's DOM element.         |
| tfoot                   | DataTablePassThroughOptionType     | Used to pass attributes to the tfoot's DOM element.                      |
| footerRow               | DataTablePassThroughOptionType     | Used to pass attributes to the footer row's DOM element.                 |
| columnResizeIndicator   | DataTablePassThroughOptionType     | Used to pass attributes to the column resize indicator's DOM element.    |
| rowReorderIndicatorUp   | DataTablePassThroughOptionType     | Used to pass attributes to the row reorder indicator up's DOM element.   |
| rowReorderIndicatorDown | DataTablePassThroughOptionType     | Used to pass attributes to the row reorder indicator down's DOM element. |
| columnGroup             | any                                | Used to pass attributes to the ColumnGroup helper components.            |
| row                     | any                                | Used to pass attributes to the Row helper components.                    |
| column                  | any                                | Used to pass attributes to the Column helper components.                 |
| hooks                   | any                                | Used to manage all lifecycle hooks.                                      |
| transition              | DataTablePassThroughTransitionType | Used to control Vue Transition API.                                      |

## Theming

### CSS Classes

| Class                                   | Description                                           |
| --------------------------------------- | ----------------------------------------------------- |
| p-datatable                             | Class name of the root element                        |
| p-datatable-mask                        | Class name of the mask element                        |
| p-datatable-loading-icon                | Class name of the loading icon element                |
| p-datatable-header                      | Class name of the header element                      |
| p-datatable-paginator-[position]        | Class name of the paginator element                   |
| p-datatable-table-container             | Class name of the table container element             |
| p-datatable-table                       | Class name of the table element                       |
| p-datatable-thead                       | Class name of the thead element                       |
| p-datatable-column-resizer              | Class name of the column resizer element              |
| p-datatable-column-header-content       | Class name of the column header content element       |
| p-datatable-column-title                | Class name of the column title element                |
| p-datatable-sort-icon                   | Class name of the sort icon element                   |
| p-datatable-sort-badge                  | Class name of the sort badge element                  |
| p-datatable-filter                      | Class name of the filter element                      |
| p-datatable-filter-element-container    | Class name of the filter element container element    |
| p-datatable-column-filter-button        | Class name of the column filter button element        |
| p-datatable-column-filter-clear-button  | Class name of the column filter clear button element  |
| p-datatable-filter-overlay              | Class name of the filter overlay element              |
| p-datatable-filter-constraint-list      | Class name of the filter constraint list element      |
| p-datatable-filter-constraint           | Class name of the filter constraint element           |
| p-datatable-filter-constraint-separator | Class name of the filter constraint separator element |
| p-datatable-filter-operator             | Class name of the filter operator element             |
| p-datatable-filter-operator-dropdown    | Class name of the filter operator dropdown element    |
| p-datatable-filter-rule-list            | Class name of the filter rule list element            |
| p-datatable-filter-rule                 | Class name of the filter rule element                 |
| p-datatable-filter-constraint-dropdown  | Class name of the filter constraint dropdown element  |
| p-datatable-filter-remove-rule-button   | Class name of the filter remove rule button element   |
| p-datatable-filter-add-rule-button      | Class name of the filter add rule button element      |
| p-datatable-filter-buttonbar            | Class name of the filter buttonbar element            |
| p-datatable-filter-clear-button         | Class name of the filter clear button element         |
| p-datatable-filter-apply-button         | Class name of the filter apply button element         |
| p-datatable-tbody                       | Class name of the tbody element                       |
| p-datatable-row-group-header            | Class name of the row group header element            |
| p-datatable-row-toggle-button           | Class name of the row toggle button element           |
| p-datatable-row-toggle-icon             | Class name of the row toggle icon element             |
| p-datatable-row-expansion               | Class name of the row expansion element               |
| p-datatable-row-group-footer            | Class name of the row group footer element            |
| p-datatable-empty-message               | Class name of the empty message element               |
| p-datatable-reorderable-row-handle      | Class name of the reorderable row handle element      |
| p-datatable-row-editor-init             | Class name of the row editor init element             |
| p-datatable-row-editor-save             | Class name of the row editor save element             |
| p-datatable-row-editor-cancel           | Class name of the row editor cancel element           |
| p-datatable-tfoot                       | Class name of the tfoot element                       |
| p-datatable-virtualscroller-spacer      | Class name of the virtual scroller spacer element     |
| p-datatable-footer                      | Class name of the footer element                      |
| p-datatable-column-resize-indicator     | Class name of the column resize indicator element     |
| p-datatable-row-reorder-indicator-up    | Class name of the row reorder indicator up element    |
| p-datatable-row-reorder-indicator-down  | Class name of the row reorder indicator down element  |

### Design Tokens

| Token                                                 | CSS Variable                                              | Description                                    |
| ----------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------- |
| datatable.transition.duration                         | --p-datatable-transition-duration                         | Transition duration of root                    |
| datatable.border.color                                | --p-datatable-border-color                                | Border color of root                           |
| datatable.header.background                           | --p-datatable-header-background                           | Background of header                           |
| datatable.header.border.color                         | --p-datatable-header-border-color                         | Border color of header                         |
| datatable.header.color                                | --p-datatable-header-color                                | Color of header                                |
| datatable.header.border.width                         | --p-datatable-header-border-width                         | Border width of header                         |
| datatable.header.padding                              | --p-datatable-header-padding                              | Padding of header                              |
| datatable.header.sm.padding                           | --p-datatable-header-sm-padding                           | Sm padding of header                           |
| datatable.header.lg.padding                           | --p-datatable-header-lg-padding                           | Lg padding of header                           |
| datatable.header.cell.background                      | --p-datatable-header-cell-background                      | Background of header cell                      |
| datatable.header.cell.hover.background                | --p-datatable-header-cell-hover-background                | Hover background of header cell                |
| datatable.header.cell.selected.background             | --p-datatable-header-cell-selected-background             | Selected background of header cell             |
| datatable.header.cell.border.color                    | --p-datatable-header-cell-border-color                    | Border color of header cell                    |
| datatable.header.cell.color                           | --p-datatable-header-cell-color                           | Color of header cell                           |
| datatable.header.cell.hover.color                     | --p-datatable-header-cell-hover-color                     | Hover color of header cell                     |
| datatable.header.cell.selected.color                  | --p-datatable-header-cell-selected-color                  | Selected color of header cell                  |
| datatable.header.cell.gap                             | --p-datatable-header-cell-gap                             | Gap of header cell                             |
| datatable.header.cell.padding                         | --p-datatable-header-cell-padding                         | Padding of header cell                         |
| datatable.header.cell.focus.ring.width                | --p-datatable-header-cell-focus-ring-width                | Focus ring width of header cell                |
| datatable.header.cell.focus.ring.style                | --p-datatable-header-cell-focus-ring-style                | Focus ring style of header cell                |
| datatable.header.cell.focus.ring.color                | --p-datatable-header-cell-focus-ring-color                | Focus ring color of header cell                |
| datatable.header.cell.focus.ring.offset               | --p-datatable-header-cell-focus-ring-offset               | Focus ring offset of header cell               |
| datatable.header.cell.focus.ring.shadow               | --p-datatable-header-cell-focus-ring-shadow               | Focus ring shadow of header cell               |
| datatable.header.cell.sm.padding                      | --p-datatable-header-cell-sm-padding                      | Sm padding of header cell                      |
| datatable.header.cell.lg.padding                      | --p-datatable-header-cell-lg-padding                      | Lg padding of header cell                      |
| datatable.column.title.font.weight                    | --p-datatable-column-title-font-weight                    | Font weight of column title                    |
| datatable.row.background                              | --p-datatable-row-background                              | Background of row                              |
| datatable.row.hover.background                        | --p-datatable-row-hover-background                        | Hover background of row                        |
| datatable.row.selected.background                     | --p-datatable-row-selected-background                     | Selected background of row                     |
| datatable.row.color                                   | --p-datatable-row-color                                   | Color of row                                   |
| datatable.row.hover.color                             | --p-datatable-row-hover-color                             | Hover color of row                             |
| datatable.row.selected.color                          | --p-datatable-row-selected-color                          | Selected color of row                          |
| datatable.row.focus.ring.width                        | --p-datatable-row-focus-ring-width                        | Focus ring width of row                        |
| datatable.row.focus.ring.style                        | --p-datatable-row-focus-ring-style                        | Focus ring style of row                        |
| datatable.row.focus.ring.color                        | --p-datatable-row-focus-ring-color                        | Focus ring color of row                        |
| datatable.row.focus.ring.offset                       | --p-datatable-row-focus-ring-offset                       | Focus ring offset of row                       |
| datatable.row.focus.ring.shadow                       | --p-datatable-row-focus-ring-shadow                       | Focus ring shadow of row                       |
| datatable.row.striped.background                      | --p-datatable-row-striped-background                      | Striped background of row                      |
| datatable.body.cell.border.color                      | --p-datatable-body-cell-border-color                      | Border color of body cell                      |
| datatable.body.cell.padding                           | --p-datatable-body-cell-padding                           | Padding of body cell                           |
| datatable.body.cell.sm.padding                        | --p-datatable-body-cell-sm-padding                        | Sm padding of body cell                        |
| datatable.body.cell.lg.padding                        | --p-datatable-body-cell-lg-padding                        | Lg padding of body cell                        |
| datatable.body.cell.selected.border.color             | --p-datatable-body-cell-selected-border-color             | Selected border color of body cell             |
| datatable.footer.cell.background                      | --p-datatable-footer-cell-background                      | Background of footer cell                      |
| datatable.footer.cell.border.color                    | --p-datatable-footer-cell-border-color                    | Border color of footer cell                    |
| datatable.footer.cell.color                           | --p-datatable-footer-cell-color                           | Color of footer cell                           |
| datatable.footer.cell.padding                         | --p-datatable-footer-cell-padding                         | Padding of footer cell                         |
| datatable.footer.cell.sm.padding                      | --p-datatable-footer-cell-sm-padding                      | Sm padding of footer cell                      |
| datatable.footer.cell.lg.padding                      | --p-datatable-footer-cell-lg-padding                      | Lg padding of footer cell                      |
| datatable.column.footer.font.weight                   | --p-datatable-column-footer-font-weight                   | Font weight of column footer                   |
| datatable.footer.background                           | --p-datatable-footer-background                           | Background of footer                           |
| datatable.footer.border.color                         | --p-datatable-footer-border-color                         | Border color of footer                         |
| datatable.footer.color                                | --p-datatable-footer-color                                | Color of footer                                |
| datatable.footer.border.width                         | --p-datatable-footer-border-width                         | Border width of footer                         |
| datatable.footer.padding                              | --p-datatable-footer-padding                              | Padding of footer                              |
| datatable.footer.sm.padding                           | --p-datatable-footer-sm-padding                           | Sm padding of footer                           |
| datatable.footer.lg.padding                           | --p-datatable-footer-lg-padding                           | Lg padding of footer                           |
| datatable.drop.point.color                            | --p-datatable-drop-point-color                            | Color of drop point                            |
| datatable.column.resizer.width                        | --p-datatable-column-resizer-width                        | Width of column resizer                        |
| datatable.resize.indicator.width                      | --p-datatable-resize-indicator-width                      | Width of resize indicator                      |
| datatable.resize.indicator.color                      | --p-datatable-resize-indicator-color                      | Color of resize indicator                      |
| datatable.sort.icon.color                             | --p-datatable-sort-icon-color                             | Color of sort icon                             |
| datatable.sort.icon.hover.color                       | --p-datatable-sort-icon-hover-color                       | Hover color of sort icon                       |
| datatable.sort.icon.size                              | --p-datatable-sort-icon-size                              | Size of sort icon                              |
| datatable.loading.icon.size                           | --p-datatable-loading-icon-size                           | Size of loading icon                           |
| datatable.row.toggle.button.hover.background          | --p-datatable-row-toggle-button-hover-background          | Hover background of row toggle button          |
| datatable.row.toggle.button.selected.hover.background | --p-datatable-row-toggle-button-selected-hover-background | Selected hover background of row toggle button |
| datatable.row.toggle.button.color                     | --p-datatable-row-toggle-button-color                     | Color of row toggle button                     |
| datatable.row.toggle.button.hover.color               | --p-datatable-row-toggle-button-hover-color               | Hover color of row toggle button               |
| datatable.row.toggle.button.selected.hover.color      | --p-datatable-row-toggle-button-selected-hover-color      | Selected hover color of row toggle button      |
| datatable.row.toggle.button.size                      | --p-datatable-row-toggle-button-size                      | Size of row toggle button                      |
| datatable.row.toggle.button.border.radius             | --p-datatable-row-toggle-button-border-radius             | Border radius of row toggle button             |
| datatable.row.toggle.button.focus.ring.width          | --p-datatable-row-toggle-button-focus-ring-width          | Focus ring width of row toggle button          |
| datatable.row.toggle.button.focus.ring.style          | --p-datatable-row-toggle-button-focus-ring-style          | Focus ring style of row toggle button          |
| datatable.row.toggle.button.focus.ring.color          | --p-datatable-row-toggle-button-focus-ring-color          | Focus ring color of row toggle button          |
| datatable.row.toggle.button.focus.ring.offset         | --p-datatable-row-toggle-button-focus-ring-offset         | Focus ring offset of row toggle button         |
| datatable.row.toggle.button.focus.ring.shadow         | --p-datatable-row-toggle-button-focus-ring-shadow         | Focus ring shadow of row toggle button         |
| datatable.filter.inline.gap                           | --p-datatable-filter-inline-gap                           | Inline gap of filter                           |
| datatable.filter.overlay.select.background            | --p-datatable-filter-overlay-select-background            | Overlay select background of filter            |
| datatable.filter.overlay.select.border.color          | --p-datatable-filter-overlay-select-border-color          | Overlay select border color of filter          |
| datatable.filter.overlay.select.border.radius         | --p-datatable-filter-overlay-select-border-radius         | Overlay select border radius of filter         |
| datatable.filter.overlay.select.color                 | --p-datatable-filter-overlay-select-color                 | Overlay select color of filter                 |
| datatable.filter.overlay.select.shadow                | --p-datatable-filter-overlay-select-shadow                | Overlay select shadow of filter                |
| datatable.filter.overlay.popover.background           | --p-datatable-filter-overlay-popover-background           | Overlay popover background of filter           |
| datatable.filter.overlay.popover.border.color         | --p-datatable-filter-overlay-popover-border-color         | Overlay popover border color of filter         |
| datatable.filter.overlay.popover.border.radius        | --p-datatable-filter-overlay-popover-border-radius        | Overlay popover border radius of filter        |
| datatable.filter.overlay.popover.color                | --p-datatable-filter-overlay-popover-color                | Overlay popover color of filter                |
| datatable.filter.overlay.popover.shadow               | --p-datatable-filter-overlay-popover-shadow               | Overlay popover shadow of filter               |
| datatable.filter.overlay.popover.padding              | --p-datatable-filter-overlay-popover-padding              | Overlay popover padding of filter              |
| datatable.filter.overlay.popover.gap                  | --p-datatable-filter-overlay-popover-gap                  | Overlay popover gap of filter                  |
| datatable.filter.rule.border.color                    | --p-datatable-filter-rule-border-color                    | Rule border color of filter                    |
| datatable.filter.constraint.list.padding              | --p-datatable-filter-constraint-list-padding              | Constraint list padding of filter              |
| datatable.filter.constraint.list.gap                  | --p-datatable-filter-constraint-list-gap                  | Constraint list gap of filter                  |
| datatable.filter.constraint.focus.background          | --p-datatable-filter-constraint-focus-background          | Constraint focus background of filter          |
| datatable.filter.constraint.selected.background       | --p-datatable-filter-constraint-selected-background       | Constraint selected background of filter       |
| datatable.filter.constraint.selected.focus.background | --p-datatable-filter-constraint-selected-focus-background | Constraint selected focus background of filter |
| datatable.filter.constraint.color                     | --p-datatable-filter-constraint-color                     | Constraint color of filter                     |
| datatable.filter.constraint.focus.color               | --p-datatable-filter-constraint-focus-color               | Constraint focus color of filter               |
| datatable.filter.constraint.selected.color            | --p-datatable-filter-constraint-selected-color            | Constraint selected color of filter            |
| datatable.filter.constraint.selected.focus.color      | --p-datatable-filter-constraint-selected-focus-color      | Constraint selected focus color of filter      |
| datatable.filter.constraint.separator.border.color    | --p-datatable-filter-constraint-separator-border-color    | Constraint separator border color of filter    |
| datatable.filter.constraint.padding                   | --p-datatable-filter-constraint-padding                   | Constraint padding of filter                   |
| datatable.filter.constraint.border.radius             | --p-datatable-filter-constraint-border-radius             | Constraint border radius of filter             |
| datatable.paginator.top.border.color                  | --p-datatable-paginator-top-border-color                  | Border color of paginator top                  |
| datatable.paginator.top.border.width                  | --p-datatable-paginator-top-border-width                  | Border width of paginator top                  |
| datatable.paginator.bottom.border.color               | --p-datatable-paginator-bottom-border-color               | Border color of paginator bottom               |
| datatable.paginator.bottom.border.width               | --p-datatable-paginator-bottom-border-width               | Border width of paginator bottom               |
