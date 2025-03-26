<template>
    <DocSectionText v-bind="$attrs">
        <p>Adding <i>scrollable</i> property along with a <i>scrollHeight</i> for the data viewport enables vertical scrolling with fixed headers.</p>
    </DocSectionText>
    <DocSectionText v-bind="$attrs">
        <p>
            Virtual Scrolling is an efficient way to render large amount data. Usage is similar to regular scrolling with the addition of <i>virtualScrollerOptions</i> property to define a fixed <i>itemSize</i>. Internally,
            <a href="https://primevue.org/virtualscroller" target="_blank" rel="noopener noreferrer">VirtualScroller</a> component is utilized so refer to the API of VirtualScroller for more information about the available options.
        </p>
        <p>In this example, <strong>100000</strong> preloaded records are rendered by the Table.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 44 }" tableStyle="min-width: 50rem">
                <Column field="id" header="Id" style="width: 20%; height: 44px"></Column>
                <Column field="vin" header="Vin" style="width: 20%; height: 44px"></Column>
                <Column field="year" header="Year" style="width: 20%; height: 44px"></Column>
                <Column field="brand" header="Brand" style="width: 20%; height: 44px"></Column>
                <Column field="color" header="Color" style="width: 20%; height: 44px"></Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { CarService } from '@/service/CarService';
import DataTable from '@/volt/DataTable.vue';
import Column from 'primevue/column';
import { ref } from 'vue';

const cars = ref(null);

const loadDemoData = () => {
    cars.value = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 44 }" tableStyle="min-width: 50rem">
            <Column field="id" header="Id" style="width: 20%; height: 44px"></Column>
            <Column field="vin" header="Vin" style="width: 20%; height: 44px"></Column>
            <Column field="year" header="Year" style="width: 20%; height: 44px"></Column>
            <Column field="brand" header="Brand" style="width: 20%; height: 44px"></Column>
            <Column field="color" header="Color" style="width: 20%; height: 44px"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { CarService } from '@/service/CarService';
import DataTable from '@/volt/DataTable.vue';
import Column from 'primevue/column';
import { ref } from 'vue';

const cars = ref(null);

onMounted(() => {
    cars.value = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
});
<\/script>
`);
</script>
