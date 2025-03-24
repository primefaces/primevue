<template>
    <DocSectionText v-bind="$attrs">
        <p>
            More than one row is selectable by setting <i>selectionMode</i> to <i>multiple</i>. By default in multiple selection mode, metaKey press (e.g. <i>⌘</i>) is not necessary to add to existing selections. When the optional
            <i>metaKeySelection</i> is present, behavior is changed in a way that selecting a new row requires meta key to be present. Note that in touch enabled devices, DataTable always ignores metaKey.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <div class="flex justify-center items-center mb-6 gap-2">
                <ToggleSwitch v-model="metaKey" inputId="input-metakey" />
                <label for="input-metakey">MetaKey</label>
            </div>
            <DataTable v-model:selection="selectedProducts" :value="products" selectionMode="multiple" :metaKeySelection="metaKey" dataKey="id" tableStyle="min-width: 50rem">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { ProductService } from '@/service/ProductService';
import DataTable from '@/volt/datatable';
import ToggleSwitch from '@/volt/toggleswitch';
import Column from 'primevue/column';
import { ref } from 'vue';

const products = ref(null);
const selectedProducts = ref(null);
const metaKey = ref(true);

const loadDemoData = () => {
    ProductService.getProductsMini().then((data) => (products.value = data));
};

const code = ref(`
<template>
    <div class="card">
        <div class="flex justify-center items-center mb-6 gap-2">
            <ToggleSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <DataTable v-model:selection="selectedProducts" :value="products" selectionMode="multiple" :metaKeySelection="metaKey" dataKey="id" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ProductService } from '@/service/ProductService';
import DataTable from '@/volt/datatable';
import ToggleSwitch from '@/volt/toggleswitch';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';

const products = ref(null);
const selectedProducts = ref(null);
const metaKey = ref(true);

onMounted(() => {
     ProductService.getProductsMini().then((data) => (products.value = data));
});
<\/script>
`);
</script>
