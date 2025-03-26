<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Single row selection is enabled by defining <i>selectionMode</i> as <i>single</i> along with a value binding using <i>selection</i> property. When available, it is suggested to provide a unique identifier of a row with <i>dataKey</i> to
            optimize performance.
        </p>
        <p>
            By default, metaKey press (e.g. <i>⌘</i>) is necessary to unselect a row however this can be configured with disabling the <i>metaKeySelection</i> property. In touch enabled devices this option has no effect and behavior is same as
            setting it to false.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <div class="flex justify-center items-center mb-6 gap-2">
                <ToggleSwitch v-model="metaKey" inputId="input-metakey" />
                <label for="input-metakey">MetaKey</label>
            </div>
            <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" :metaKeySelection="metaKey" dataKey="id" pt:table="min-w-200">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import DataTable from '@/volt/DataTable.vue';
import ToggleSwitch from '@/volt/ToggleSwitch.vue';
import Column from 'primevue/column';
import { ref } from 'vue';
import { ProductService } from '~/service/ProductService';

const products = ref(null);
const selectedProduct = ref();
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
        <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" :metaKeySelection="metaKey" dataKey="id" pt:table="min-w-200">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ProductService } from '@/service/ProductService';
import DataTable from '@/volt/DataTable.vue';
import ToggleSwitch from '@/volt/ToggleSwitch.vue';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';

const products = ref(null);
const selectedProduct = ref();
const metaKey = ref(true);

onMounted(() => {
     ProductService.getProductsMini().then((data) => (products.value = data));
});
<\/script>
`);
</script>
