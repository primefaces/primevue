<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Virtual Scrolling is an efficient way to render large amount data. Usage is similar to regular scrolling with the addition of <i>virtualScrollerOptions</i> property to define a fixed <i>itemSize</i>. Internally,
            <PrimeVueNuxtLink to="/virtualscroller">VirtualScroller</PrimeVueNuxtLink> component is utilized so refer to the API of VirtualScroller for more information about the available options.
        </p>
        <p>In this example, <strong>100000</strong> preloaded records are rendered by the Table.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }" tableStyle="min-width: 50rem">
                <Column field="id" header="Id" style="width: 20%"></Column>
                <Column field="vin" header="Vin" style="width: 20%"></Column>
                <Column field="year" header="Year" style="width: 20%"></Column>
                <Column field="brand" header="Brand" style="width: 20%"></Column>
                <Column field="color" header="Color" style="width: 20%"></Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['CarService']" />
</template>

<script>
import { CarService } from '@/service/CarService';

export default {
    data() {
        return {
            cars: null,
            code: {
                basic: `
<DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }" tableStyle="min-width: 50rem">
    <Column field="id" header="Id" style="width: 20%"></Column>
    <Column field="vin" header="Vin" style="width: 20%"></Column>
    <Column field="year" header="Year" style="width: 20%"></Column>
    <Column field="brand" header="Brand" style="width: 20%"></Column>
    <Column field="color" header="Color" style="width: 20%"></Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }" tableStyle="min-width: 50rem">
            <Column field="id" header="Id" style="width: 20%"></Column>
            <Column field="vin" header="Vin" style="width: 20%"></Column>
            <Column field="year" header="Year" style="width: 20%"></Column>
            <Column field="brand" header="Brand" style="width: 20%"></Column>
            <Column field="color" header="Color" style="width: 20%"></Column>
        </DataTable>
    </div>
</template>

<script>
import { CarService } from '@/service/CarService';

export default {
    data() {
        return {
            cars: null
        };
    },
    mounted() {
        this.cars = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }" tableStyle="min-width: 50rem">
            <Column field="id" header="Id" style="width: 20%"></Column>
            <Column field="vin" header="Vin" style="width: 20%"></Column>
            <Column field="year" header="Year" style="width: 20%"></Column>
            <Column field="brand" header="Brand" style="width: 20%"></Column>
            <Column field="color" header="Color" style="width: 20%"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CarService } from '@/service/CarService';

const cars = ref();

onMounted(() => {
    cars.value = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
});
<\/script>
`,
                data: `
{
    id: 1
    vin: tvACo,
    brand: Norma,
    color: Black,
    year: 2002
}`
            }
        };
    },
    methods: {
        loadDemoData() {
            this.cars = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
        }
    }
};
</script>
