# Vue TreeTable Component

TreeTable is used to display hierarchical data in tabular format.

## Import

```javascript
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
```

## AccessibilityDoc

Screen Reader DataTable uses a treegrid element whose attributes can be extended with the tableProps option. This property allows passing aria roles and attributes like aria-label and aria-describedby to define the table for readers. Default role of the table is table . Header, body and footer elements use rowgroup , rows use row role, header cells have columnheader and body cells use cell roles. Sortable headers utilizer aria-sort attribute either set to "ascending" or "descending". Row elements manage aria-expanded for state along with aria-posinset , aria-setsize and aria-level attribute to define the hierachy. When selection is enabled, aria-selected is set to true on a row. In checkbox mode, TreeTable component uses a hidden native checkbox element. Editable cells use custom templating so you need to manage aria roles and attributes manually if required. Paginator is a standalone component used inside the DataTable, refer to the paginator for more information about the accessibility features. Sortable Headers Keyboard Support Key Function tab Moves through the headers. enter Sorts the column. space Sorts the column. Keyboard Support Key Function tab Moves focus to the first selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the next focusable element in the page tab sequence. shift + tab Moves focus to the last selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the previous focusable element in the page tab sequence. enter Selects the focused treenode. space Selects the focused treenode. down arrow Moves focus to the next treenode. up arrow Moves focus to the previous treenode. right arrow If node is closed, opens the node otherwise moves focus to the first child node. left arrow If node is open, closes the node otherwise moves focus to the parent node. home Moves focus to the first same-level node. end Moves focus to the last same-level node.

## Basic

TreeTable requires a collection of TreeNode instances as a value and Column components as children for the representation. The column with the element to toggle a node should have expander enabled.

```vue
<TreeTable :value="nodes" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" expander style="width: 34%"></Column>
    <Column field="size" header="Size" style="width: 33%"></Column>
    <Column field="type" header="Type" style="width: 33%"></Column>
</TreeTable>
```

## ColumnToggleDoc

Column visibility based on a condition can be implemented with dynamic columns, in this sample a MultiSelect is used to manage the visible columns.

```vue
<TreeTable :value="nodes" tableStyle="min-width: 50rem">
    <template #header>
        <div style="text-align:left">
            <MultiSelect :modelValue="selectedColumns" @update:modelValue="onToggle" :options="columns" optionLabel="header" class="w-full sm:w-64" display="chip"/>
        </div>
    </template>
    <Column field="name" header="Name" :expander="true"></Column>
    <Column v-for="col of selectedColumns" :field="col.field" :header="col.header" :key="col.field"></Column>
</TreeTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <TreeTable :value="nodes" tableStyle="min-width: 50rem">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" @update:modelValue="onToggle" :options="columns" optionLabel="header" class="w-full sm:w-64" display="chip"/>
                </div>
            </template>
            <Column field="name" header="Name" :expander="true"></Column>
            <Column v-for="col of selectedColumns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const columns = ref([
    {field: 'size', header: 'Size'},
    {field: 'type', header: 'Type'}
]);
const nodes = ref();
const selectedColumns = ref(columns.value);
const onToggle = (val) => {
    selectedColumns.value = columns.value.filter(col => val.includes(col));
};
<\/script>
```

</details>

## ContextMenuDoc

TreeTable has exclusive integration with ContextMenu using the contextMenu event to open a menu on right click along with contextMenuSelection property and row-contextmenu event to control the selection via the menu.

```vue
<ContextMenu ref="cm" :model="menuModel" @hide="selectedNode = null" />
<TreeTable v-model:contextMenuSelection="selectedNode" :value="nodes" contextMenu @row-contextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" expander style="width: 34%"></Column>
    <Column field="size" header="Size" style="width: 33%"></Column>
    <Column field="type" header="Type" style="width: 33%"></Column>
</TreeTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <ContextMenu ref="cm" :model="menuModel" @hide="selectedNode = null" />
        <TreeTable v-model:contextMenuSelection="selectedNode" :value="nodes" contextMenu @row-contextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" expander style="width: 34%"></Column>
            <Column field="size" header="Size" style="width: 33%"></Column>
            <Column field="type" header="Type" style="width: 33%"></Column>
        </TreeTable>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const cm = ref();
const toast = useToast();
const nodes = ref();
const selectedNode = ref();
const menuModel = ref(
    [
        { label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewNode(this.selectedNode) },
        { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteNode(this.selectedNode) }
    ]
);

const onRowContextMenu = (event) => {
    cm.value.show(event.originalEvent);
};

const viewNode = (product) => {
    toast.add({severity: 'info', summary: 'Node Selected', detail: node.data.name, life: 3000});
};

const deleteProduct = (node) => {
    nodes.value = filterNodes(nodes.value, node.key);
    toast.add({severity: 'error', summary: 'Node Deleted', detail: node.data.name, life: 3000});
    selectedProduct.value = null;
};

const filterNodes = (nodeList, keyToRemove) => {
    return nodes
        .map((node) => {
            if (node.key === keyToRemove) {
                return null;
            }

            if (node.children) {
                const filteredChildren = filterNodes(node.children, keyToRemove);

                return { ...node, children: filteredChildren };
            }

            return node;
        })
        .filter((node) => node !== null);
}
<\/script>
```

</details>

## Controlled

Expansion state is controlled with expandedKeys property. The expandedKeys should be an object whose keys refer to the node key and values represent the expanded state e.g. &#123;'0-0': true&#125; .

```vue
<Button @click="toggleApplications" label="Toggle Applications" />
<TreeTable v-model:expandedKeys="expandedKeys" :value="nodes" class="mt-6" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" expander style="width: 34%"></Column>
    <Column field="size" header="Size" style="width: 33%"></Column>
    <Column field="type" header="Type" style="width: 33%"></Column>
</TreeTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Button @click="toggleApplications" label="Toggle Applications" />
        <TreeTable v-model:expandedKeys="expandedKeys" :value="nodes" class="mt-6" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" expander style="width: 34%"></Column>
            <Column field="size" header="Size" style="width: 33%"></Column>
            <Column field="type" header="Type" style="width: 33%"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const expandedKeys = ref({});
const toggleApplications = () => {
    let _expandedKeys = { ...expandedKeys.value };

    if (_expandedKeys['0']) delete _expandedKeys['0'];
    else _expandedKeys['0'] = true;

    expandedKeys.value = _expandedKeys;
}
<\/script>
```

</details>

## DynamicColumnsDoc

Columns can be created programmatically.

```vue
<TreeTable :value="nodes" tableStyle="min-width: 50rem">
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" :expander="col.expander"></Column>
</TreeTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <TreeTable :value="nodes" tableStyle="min-width: 50rem">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" :expander="col.expander"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const columns = ref([
    { field: 'name', header: 'Name', expander: true },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
]);
<\/script>
```

</details>

## FilterDoc

Filtering is enabled by adding the filter property to a Column. The filterMode specifies the filtering strategy, in lenient mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in strict mode when the query matches a node, filtering continues on all descendants. A general filled called globalFilter is also provided to search all columns that support filtering.

```vue
<SelectButton v-model="filterMode" optionLabel="label" dataKey="label" :options="filterOptions" />
<TreeTable :value="nodes" :filters="filters" :filterMode="filterMode.value">
    <template #header>
        <div class="flex justify-end">
            <IconField>
                <InputIcon class="pi pi-search" />
                <InputText v-model="filters['global']" placeholder="Global Search" />
            </IconField>
        </div>
    </template>
    <template #empty> No customers found.</template>
    <Column field="name" header="Name" expander style="min-width: 12rem">
        <template #filter>
            <InputText v-model="filters['name']" type="text" placeholder="Filter by name" />
        </template>
    </Column>
    <Column field="size" header="Size" style="min-width: 12rem">
        <template #filter>
            <InputText v-model="filters['size']" type="text" placeholder="Filter by size" />
        </template>
    </Column>
    <Column field="type" header="Type" style="min-width: 12rem">
        <template #filter>
            <InputText v-model="filters['type']" type="text" placeholder="Filter by type" />
        </template>
    </Column>
</TreeTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="flex justify-center mb-6">
            <SelectButton v-model="filterMode" optionLabel="label" dataKey="label" :options="filterOptions" />
        </div>
        <TreeTable :value="nodes" :filters="filters" :filterMode="filterMode.value">
            <template #header>
                <div class="flex justify-end">
                    <IconField>
                        <InputIcon class="pi pi-search" />
                        <InputText v-model="filters['global']" placeholder="Global Search" />
                    </IconField>
                </div>
            </template>
            <template #empty> No customers found.</template>
            <Column field="name" header="Name" expander style="min-width: 12rem">
                <template #filter>
                    <InputText v-model="filters['name']" type="text" placeholder="Filter by name" />
                </template>
            </Column>
            <Column field="size" header="Size" style="min-width: 12rem">
                <template #filter>
                    <InputText v-model="filters['size']" type="text" placeholder="Filter by size" />
                </template>
            </Column>
            <Column field="type" header="Type" style="min-width: 12rem">
                <template #filter>
                    <InputText v-model="filters['type']" type="text" placeholder="Filter by type" />
                </template>
            </Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const filters = ref({});
const filterMode = ref({ label: 'Lenient', value: 'lenient' });
const filterOptions = ref([
    { label: 'Lenient', value: 'lenient' },
    { label: 'Strict', value: 'strict' }
]);
<\/script>
```

</details>

## GridLinesDoc

Enabling showGridlines displays grid lines.

```vue
<TreeTable :value="nodes" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" expander style="width: 34%"></Column>
    <Column field="size" header="Size" style="width: 33%"></Column>
    <Column field="type" header="Type" style="width: 33%"></Column>
</TreeTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <TreeTable :value="nodes" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" expander style="width: 34%"></Column>
            <Column field="size" header="Size" style="width: 33%"></Column>
            <Column field="type" header="Type" style="width: 33%"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
<\/script>
```

</details>

## LazyLoadDoc

Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging , sorting and filtering occurs. Sample below imitates lazy loading data from a remote datasource using an in-memory list and timeouts to mimic network connection. Enabling the lazy property and assigning the logical number of rows to totalRecords by doing a projection query are the key elements of the implementation so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they are not present on page, only the records that are displayed on the current page exist. In addition, only the root elements should be loaded, children can be loaded on demand using nodeExpand callback.

```vue
<TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading" @nodeExpand="onExpand" @page="onPage" :totalRecords="totalRecords" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div>
        <TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
            @nodeExpand="onExpand" @page="onPage" :totalRecords="totalRecords" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" :expander="true"></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
    loading.value = true;

    setTimeout(() => {
        loading.value = false;
        nodes.value = loadNodes(0, rows.value);
        totalRecords.value = 1000;
    }, 1000);
});

const nodes = ref();
const rows = ref(10);
const loading = ref(false);
const totalRecords = ref(0);
const onExpand = (node) => {
    if (!node.children) {
        loading.value = true;

        setTimeout(() => {
            let lazyNode = {...node};

            lazyNode.children = [
                {
                    data: {
                        name: lazyNode.data.name + ' - 0',
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'File'
                    },
                },
                {
                    data: {
                        name: lazyNode.data.name + ' - 1',
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'File'
                    }
                }
            ];

            let newNodes = nodes.value.map(n => {
                if (n.key === node.key) {
                    n = lazyNode;
                }

                return n;
            });

            loading.value = false;
            nodes.value = newNodes;
        }, 250);
    }
};
const onPage = (event) => {
    loading.value = true;

    //imitate delay of a backend call
    setTimeout(() => {
        loading.value = false;
        nodes.value = loadNodes(event.first, rows.value);
    }, 1000);
};
const loadNodes = (first, rows) => {
    let nodes = [];

    for(let i = 0; i < rows; i++) {
        let node = {
            key: (first + i),
            data: {
                name: 'Item ' + (first + i),
                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                type: 'Type ' + (first + i)
            },
            leaf: false
        };

        nodes.push(node);
    }

    return nodes;
};
<\/script>
```

</details>

## Size

In addition to a regular table, alternatives with alternative sizes are available.

```vue
<TreeTable :value="nodes" :size="size.value" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" expander style="width: 34%"></Column>
    <Column field="size" header="Size" style="width: 33%"></Column>
    <Column field="type" header="Type" style="width: 33%"></Column>
</TreeTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <TreeTable :value="nodes" :size="size.value" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" expander style="width: 34%"></Column>
            <Column field="size" header="Size" style="width: 33%"></Column>
            <Column field="type" header="Type" style="width: 33%"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const size = ref({ label: 'Normal', value: 'normal' });
const sizeOptions = ref([
    { label: 'Small', value: 'small', class: 'sm' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large', class: 'lg' }
]);
<\/script>
```

</details>

## Template

Custom content at header and footer slots are supported via templating.

```vue
<TreeTable :value="nodes" tableStyle="min-width: 50rem">
    <template #header>
        <div class="text-xl font-bold">File Viewer</div>
    </template>
    <Column field="name" header="Name" expander style="width: 250px"></Column>
    <Column field="size" header="Size" style="width: 150px"></Column>
    <Column field="type" header="Type" style="width: 150px"></Column>
    <Column style="width: 10rem">
        <template #body>
            <div class="flex flex-wrap gap-2">
                <Button type="button" icon="pi pi-search" rounded />
                <Button type="button" icon="pi pi-pencil" rounded severity="success" />
            </div>
        </template>
    </Column>
    <template #footer>
        <div class="flex justify-start">
            <Button icon="pi pi-refresh" label="Reload" severity="warn" />
        </div>
    </template>
</TreeTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <TreeTable :value="nodes" tableStyle="min-width: 50rem">
            <template #header>
                <div class="text-xl font-bold">File Viewer</div>
            </template>
            <Column field="name" header="Name" expander style="width: 250px"></Column>
            <Column field="size" header="Size" style="width: 150px"></Column>
            <Column field="type" header="Type" style="width: 150px"></Column>
            <Column style="width: 10rem">
                <template #body>
                    <div class="flex flex-wrap gap-2">
                        <Button type="button" icon="pi pi-search" rounded/>
                        <Button type="button" icon="pi pi-pencil" rounded severity="success" />
                    </div>
                </template>
            </Column>
            <template #footer>
                <div class="flex justify-start">
                    <Button icon="pi pi-refresh" label="Reload" severity="warn" />
                </div>
            </template>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
<\/script>
```

</details>

## Tree Table

### Props

| Name                      | Type                                               | Default                                                                            | Description                                                                                                                                                                                                                                                                                                                                          |
| ------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value                     | TreeNode[]                                         | -                                                                                  | An array of treenodes.                                                                                                                                                                                                                                                                                                                               |
| dataKey                   | string \| Function                                 | "key"                                                                              | Name of the field that uniquely identifies the a record in the data.                                                                                                                                                                                                                                                                                 |
| expandedKeys              | TreeTableExpandedKeys                              | -                                                                                  | A map of keys to represent the state of the tree expansion state in controlled mode.                                                                                                                                                                                                                                                                 |
| selectionKeys             | TreeTableSelectionKeys                             | -                                                                                  | A map of keys to control the selection state.                                                                                                                                                                                                                                                                                                        |
| selectionMode             | HintedString<"single" \| "multiple" \| "checkbox"> | -                                                                                  | Defines the selection mode.                                                                                                                                                                                                                                                                                                                          |
| metaKeySelection          | boolean                                            | false                                                                              | Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.                                                                                    |
| contextMenu               | boolean                                            | false                                                                              | Enables context menu integration.                                                                                                                                                                                                                                                                                                                    |
| contextMenuSelection      | any                                                | -                                                                                  | Selected row instance with the ContextMenu.                                                                                                                                                                                                                                                                                                          |
| rows                      | number                                             | -                                                                                  | Number of rows to display per page.                                                                                                                                                                                                                                                                                                                  |
| first                     | number                                             | 0                                                                                  | Index of the first row to be displayed.                                                                                                                                                                                                                                                                                                              |
| totalRecords              | number                                             | -                                                                                  | Number of total records, defaults to length of value when not defined.                                                                                                                                                                                                                                                                               |
| paginator                 | boolean                                            | false                                                                              | When specified as true, enables the pagination.                                                                                                                                                                                                                                                                                                      |
| paginatorPosition         | HintedString<"top" \| "bottom" \| "both">          | bottom                                                                             | Position of the paginator, options are 'top','bottom' or 'both'.                                                                                                                                                                                                                                                                                     |
| alwaysShowPaginator       | boolean                                            | true                                                                               | Whether to show it even there is only one page.                                                                                                                                                                                                                                                                                                      |
| paginatorTemplate         | string                                             | FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown | Template of the paginator. It can be customized using the template property using the predefined keys. Here are the available elements that can be placed inside a paginator in any order. - FirstPageLink - PrevPageLink - PageLinks - NextPageLink - LastPageLink - RowsPerPageDropdown - JumpToPageDropdown - JumpToPageInput - CurrentPageReport |
| pageLinkSize              | number                                             | 5                                                                                  | Number of page links to display.                                                                                                                                                                                                                                                                                                                     |
| rowsPerPageOptions        | number[]                                           | -                                                                                  | Array of integer values to display inside rows per page dropdown.                                                                                                                                                                                                                                                                                    |
| currentPageReportTemplate | string                                             | '({currentPage} of {totalPages})'                                                  | Template of the current page report element. It displays information about the pagination state. - {currentPage} - {totalPages} - {rows} - {first} - {last} - {totalRecords}                                                                                                                                                                         |
| lazy                      | boolean                                            | false                                                                              | Defines if data is loaded and interacted with in lazy manner.                                                                                                                                                                                                                                                                                        |
| loading                   | boolean                                            | false                                                                              | Displays a loader to indicate data load is in progress.                                                                                                                                                                                                                                                                                              |
| loadingIcon               | string                                             | -                                                                                  | The icon to show while indicating data load is in progress.                                                                                                                                                                                                                                                                                          |
| loadingMode               | HintedString<"mask" \| "icon">                     | mask                                                                               | Loading mode display.                                                                                                                                                                                                                                                                                                                                |
| rowHover                  | boolean                                            | false                                                                              | When enabled, background of the rows change on hover.                                                                                                                                                                                                                                                                                                |
| autoLayout                | boolean                                            | false                                                                              | Whether the cell widths scale according to their content or not.                                                                                                                                                                                                                                                                                     |
| sortField                 | string \| Function                                 | -                                                                                  | Property name or a getter function of a row data used for sorting by default.                                                                                                                                                                                                                                                                        |
| sortOrder                 | number                                             | -                                                                                  | Order to sort the data by default.                                                                                                                                                                                                                                                                                                                   |
| defaultSortOrder          | number                                             | 1                                                                                  | Default sort order of an unsorted column.                                                                                                                                                                                                                                                                                                            |
| multiSortMeta             | null \| TreeTableSortMeta[]                        | -                                                                                  | An array of SortMeta objects to sort the data by default in multiple sort mode.                                                                                                                                                                                                                                                                      |
| sortMode                  | HintedString<"single" \| "multiple">               | single                                                                             | Defines whether sorting works on single column or on multiple columns.                                                                                                                                                                                                                                                                               |
| removableSort             | boolean                                            | false                                                                              | When enabled, columns can have an un-sorted state.                                                                                                                                                                                                                                                                                                   |
| filters                   | TreeTableFilterMeta                                | -                                                                                  | Filters object with key-value pairs to define the filters.                                                                                                                                                                                                                                                                                           |
| filterMode                | HintedString<"lenient" \| "strict">                | lenient                                                                            | Mode for filtering.                                                                                                                                                                                                                                                                                                                                  |
| filterLocale              | string                                             | -                                                                                  | Locale to use in filtering. The default locale is the host environment's current locale.                                                                                                                                                                                                                                                             |
| resizableColumns          | boolean                                            | false                                                                              | When enabled, columns can be resized using drag and drop.                                                                                                                                                                                                                                                                                            |
| columnResizeMode          | HintedString<"fit" \| "expand">                    | fit                                                                                | Defines whether the overall table width should change on column resize.                                                                                                                                                                                                                                                                              |
| indentation               | number                                             | 1                                                                                  | Indentation factor as rem value for children nodes.                                                                                                                                                                                                                                                                                                  |
| showGridlines             | boolean                                            | false                                                                              | Whether to show grid lines between cells.                                                                                                                                                                                                                                                                                                            |
| scrollable                | boolean                                            | false                                                                              | When specified, enables horizontal and/or vertical scrolling.                                                                                                                                                                                                                                                                                        |
| scrollHeight              | HintedString<"flex">                               | -                                                                                  | Height of the scroll viewport in fixed pixels or the 'flex' keyword for a dynamic size.                                                                                                                                                                                                                                                              |
| size                      | HintedString<"small" \| "large">                   | -                                                                                  | Defines the size of the table.                                                                                                                                                                                                                                                                                                                       |
| tableStyle                | string \| object                                   | -                                                                                  | Inline style of the table element.                                                                                                                                                                                                                                                                                                                   |
| tableClass                | string \| object                                   | -                                                                                  | Style class of the table element.                                                                                                                                                                                                                                                                                                                    |
| tableProps                | any                                                | -                                                                                  | Props to pass to the table element.                                                                                                                                                                                                                                                                                                                  |
| dt                        | any                                                | -                                                                                  | It generates scoped CSS variables using design tokens for the component.                                                                                                                                                                                                                                                                             |
| pt                        | PassThrough<TreeTablePassThroughOptions>           | -                                                                                  | Used to pass attributes to DOM elements inside the component.                                                                                                                                                                                                                                                                                        |
| ptOptions                 | any                                                | -                                                                                  | Used to configure passthrough(pt) options of the component.                                                                                                                                                                                                                                                                                          |
| unstyled                  | boolean                                            | false                                                                              | When enabled, it removes component related styles in the core.                                                                                                                                                                                                                                                                                       |

## Pass Through Options

| Name                  | Type                           | Description                                                           |
| --------------------- | ------------------------------ | --------------------------------------------------------------------- |
| root                  | TreeTablePassThroughOptionType | Used to pass attributes to the root's DOM element.                    |
| loading               | TreeTablePassThroughOptionType | Used to pass attributes to the loading wrapper's DOM element.         |
| mask                  | TreeTablePassThroughOptionType | Used to pass attributes to the mask's DOM element.                    |
| loadingIcon           | TreeTablePassThroughOptionType | Used to pass attributes to the loading icon's DOM element.            |
| header                | TreeTablePassThroughOptionType | Used to pass attributes to the header's DOM element.                  |
| pcPaginator           | any                            | Used to pass attributes to the Paginator component.                   |
| tableContainer        | TreeTablePassThroughOptionType | Used to pass attributes to the table container's DOM element.         |
| table                 | TreeTablePassThroughOptionType | Used to pass attributes to the table's DOM element.                   |
| thead                 | TreeTablePassThroughOptionType | Used to pass attributes to the thead's DOM element.                   |
| headerRow             | TreeTablePassThroughOptionType | Used to pass attributes to the header row's DOM element.              |
| tbody                 | TreeTablePassThroughOptionType | Used to pass attributes to the tbody's DOM element.                   |
| row                   | TreeTablePassThroughOptionType | Used to pass attributes to the row's DOM element.                     |
| emptyMessage          | TreeTablePassThroughOptionType | Used to pass attributes to the empty message's DOM element.           |
| emptyMessageCell      | TreeTablePassThroughOptionType | Used to pass attributes to the empty message cell's DOM element.      |
| tfoot                 | TreeTablePassThroughOptionType | Used to pass attributes to the tfoot's DOM element.                   |
| footerRow             | TreeTablePassThroughOptionType | Used to pass attributes to the footer row's DOM element.              |
| footer                | TreeTablePassThroughOptionType | Used to pass attributes to the footer's DOM element.                  |
| columnResizeIndicator | TreeTablePassThroughOptionType | Used to pass attributes to the column resize indicator's DOM element. |
| column                | any                            | Used to pass attributes to the Column helper components.              |
| hooks                 | any                            | Used to manage all lifecycle hooks.                                   |

## Theming

### CSS Classes

| Class                               | Description                                       |
| ----------------------------------- | ------------------------------------------------- |
| p-treetable                         | Class name of the root element                    |
| p-treetable-loading                 | Class name of the loading element                 |
| p-treetable-mask                    | Class name of the mask element                    |
| p-treetable-loading-icon            | Class name of the loading icon element            |
| p-treetable-header                  | Class name of the header element                  |
| p-treetable-paginator-[position]    | Class name of the paginator element               |
| p-treetable-table-container         | Class name of the table container element         |
| p-treetable-table                   | Class name of the table element                   |
| p-treetable-thead                   | Class name of the thead element                   |
| p-treetable-column-resizer          | Class name of the column resizer element          |
| p-treetable-column-title            | Class name of the column title element            |
| p-treetable-sort-icon               | Class name of the sort icon element               |
| p-treetable-sort-badge              | Class name of the sort badge element              |
| p-treetable-tbody                   | Class name of the tbody element                   |
| p-treetable-node-toggle-button      | Class name of the node toggle button element      |
| p-treetable-node-toggle-icon        | Class name of the node toggle icon element        |
| p-treetable-node-checkbox           | Class name of the node checkbox element           |
| p-treetable-empty-message           | Class name of the empty message element           |
| p-treetable-tfoot                   | Class name of the tfoot element                   |
| p-treetable-footer                  | Class name of the footer element                  |
| p-treetable-column-resize-indicator | Class name of the column resize indicator element |

### Design Tokens

| Token                                                  | CSS Variable                                               | Description                                     |
| ------------------------------------------------------ | ---------------------------------------------------------- | ----------------------------------------------- |
| treetable.transition.duration                          | --p-treetable-transition-duration                          | Transition duration of root                     |
| treetable.border.color                                 | --p-treetable-border-color                                 | Border color of root                            |
| treetable.header.background                            | --p-treetable-header-background                            | Background of header                            |
| treetable.header.border.color                          | --p-treetable-header-border-color                          | Border color of header                          |
| treetable.header.color                                 | --p-treetable-header-color                                 | Color of header                                 |
| treetable.header.border.width                          | --p-treetable-header-border-width                          | Border width of header                          |
| treetable.header.padding                               | --p-treetable-header-padding                               | Padding of header                               |
| treetable.header.cell.background                       | --p-treetable-header-cell-background                       | Background of header cell                       |
| treetable.header.cell.hover.background                 | --p-treetable-header-cell-hover-background                 | Hover background of header cell                 |
| treetable.header.cell.selected.background              | --p-treetable-header-cell-selected-background              | Selected background of header cell              |
| treetable.header.cell.border.color                     | --p-treetable-header-cell-border-color                     | Border color of header cell                     |
| treetable.header.cell.color                            | --p-treetable-header-cell-color                            | Color of header cell                            |
| treetable.header.cell.hover.color                      | --p-treetable-header-cell-hover-color                      | Hover color of header cell                      |
| treetable.header.cell.selected.color                   | --p-treetable-header-cell-selected-color                   | Selected color of header cell                   |
| treetable.header.cell.gap                              | --p-treetable-header-cell-gap                              | Gap of header cell                              |
| treetable.header.cell.padding                          | --p-treetable-header-cell-padding                          | Padding of header cell                          |
| treetable.header.cell.focus.ring.width                 | --p-treetable-header-cell-focus-ring-width                 | Focus ring width of header cell                 |
| treetable.header.cell.focus.ring.style                 | --p-treetable-header-cell-focus-ring-style                 | Focus ring style of header cell                 |
| treetable.header.cell.focus.ring.color                 | --p-treetable-header-cell-focus-ring-color                 | Focus ring color of header cell                 |
| treetable.header.cell.focus.ring.offset                | --p-treetable-header-cell-focus-ring-offset                | Focus ring offset of header cell                |
| treetable.header.cell.focus.ring.shadow                | --p-treetable-header-cell-focus-ring-shadow                | Focus ring shadow of header cell                |
| treetable.column.title.font.weight                     | --p-treetable-column-title-font-weight                     | Font weight of column title                     |
| treetable.row.background                               | --p-treetable-row-background                               | Background of row                               |
| treetable.row.hover.background                         | --p-treetable-row-hover-background                         | Hover background of row                         |
| treetable.row.selected.background                      | --p-treetable-row-selected-background                      | Selected background of row                      |
| treetable.row.color                                    | --p-treetable-row-color                                    | Color of row                                    |
| treetable.row.hover.color                              | --p-treetable-row-hover-color                              | Hover color of row                              |
| treetable.row.selected.color                           | --p-treetable-row-selected-color                           | Selected color of row                           |
| treetable.row.focus.ring.width                         | --p-treetable-row-focus-ring-width                         | Focus ring width of row                         |
| treetable.row.focus.ring.style                         | --p-treetable-row-focus-ring-style                         | Focus ring style of row                         |
| treetable.row.focus.ring.color                         | --p-treetable-row-focus-ring-color                         | Focus ring color of row                         |
| treetable.row.focus.ring.offset                        | --p-treetable-row-focus-ring-offset                        | Focus ring offset of row                        |
| treetable.row.focus.ring.shadow                        | --p-treetable-row-focus-ring-shadow                        | Focus ring shadow of row                        |
| treetable.body.cell.border.color                       | --p-treetable-body-cell-border-color                       | Border color of body cell                       |
| treetable.body.cell.padding                            | --p-treetable-body-cell-padding                            | Padding of body cell                            |
| treetable.body.cell.gap                                | --p-treetable-body-cell-gap                                | Gap of body cell                                |
| treetable.body.cell.selected.border.color              | --p-treetable-body-cell-selected-border-color              | Selected border color of body cell              |
| treetable.footer.cell.background                       | --p-treetable-footer-cell-background                       | Background of footer cell                       |
| treetable.footer.cell.border.color                     | --p-treetable-footer-cell-border-color                     | Border color of footer cell                     |
| treetable.footer.cell.color                            | --p-treetable-footer-cell-color                            | Color of footer cell                            |
| treetable.footer.cell.padding                          | --p-treetable-footer-cell-padding                          | Padding of footer cell                          |
| treetable.column.footer.font.weight                    | --p-treetable-column-footer-font-weight                    | Font weight of column footer                    |
| treetable.footer.background                            | --p-treetable-footer-background                            | Background of footer                            |
| treetable.footer.border.color                          | --p-treetable-footer-border-color                          | Border color of footer                          |
| treetable.footer.color                                 | --p-treetable-footer-color                                 | Color of footer                                 |
| treetable.footer.border.width                          | --p-treetable-footer-border-width                          | Border width of footer                          |
| treetable.footer.padding                               | --p-treetable-footer-padding                               | Padding of footer                               |
| treetable.column.resizer.width                         | --p-treetable-column-resizer-width                         | Width of column resizer                         |
| treetable.resize.indicator.width                       | --p-treetable-resize-indicator-width                       | Width of resize indicator                       |
| treetable.resize.indicator.color                       | --p-treetable-resize-indicator-color                       | Color of resize indicator                       |
| treetable.sort.icon.color                              | --p-treetable-sort-icon-color                              | Color of sort icon                              |
| treetable.sort.icon.hover.color                        | --p-treetable-sort-icon-hover-color                        | Hover color of sort icon                        |
| treetable.sort.icon.size                               | --p-treetable-sort-icon-size                               | Size of sort icon                               |
| treetable.loading.icon.size                            | --p-treetable-loading-icon-size                            | Size of loading icon                            |
| treetable.node.toggle.button.hover.background          | --p-treetable-node-toggle-button-hover-background          | Hover background of node toggle button          |
| treetable.node.toggle.button.selected.hover.background | --p-treetable-node-toggle-button-selected-hover-background | Selected hover background of node toggle button |
| treetable.node.toggle.button.color                     | --p-treetable-node-toggle-button-color                     | Color of node toggle button                     |
| treetable.node.toggle.button.hover.color               | --p-treetable-node-toggle-button-hover-color               | Hover color of node toggle button               |
| treetable.node.toggle.button.selected.hover.color      | --p-treetable-node-toggle-button-selected-hover-color      | Selected hover color of node toggle button      |
| treetable.node.toggle.button.size                      | --p-treetable-node-toggle-button-size                      | Size of node toggle button                      |
| treetable.node.toggle.button.border.radius             | --p-treetable-node-toggle-button-border-radius             | Border radius of node toggle button             |
| treetable.node.toggle.button.focus.ring.width          | --p-treetable-node-toggle-button-focus-ring-width          | Focus ring width of node toggle button          |
| treetable.node.toggle.button.focus.ring.style          | --p-treetable-node-toggle-button-focus-ring-style          | Focus ring style of node toggle button          |
| treetable.node.toggle.button.focus.ring.color          | --p-treetable-node-toggle-button-focus-ring-color          | Focus ring color of node toggle button          |
| treetable.node.toggle.button.focus.ring.offset         | --p-treetable-node-toggle-button-focus-ring-offset         | Focus ring offset of node toggle button         |
| treetable.node.toggle.button.focus.ring.shadow         | --p-treetable-node-toggle-button-focus-ring-shadow         | Focus ring shadow of node toggle button         |
| treetable.paginator.top.border.color                   | --p-treetable-paginator-top-border-color                   | Border color of paginator top                   |
| treetable.paginator.top.border.width                   | --p-treetable-paginator-top-border-width                   | Border width of paginator top                   |
| treetable.paginator.bottom.border.color                | --p-treetable-paginator-bottom-border-color                | Border color of paginator bottom                |
| treetable.paginator.bottom.border.width                | --p-treetable-paginator-bottom-border-width                | Border width of paginator bottom                |
