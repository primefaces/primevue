<template>
    <DocSectionText v-bind="$attrs">
        <p>When lazy loading is enabled via the <i>virtualScrollerOptions</i>, data is fetched on demand during scrolling instead of preload.</p>
        <p>In sample below, an in-memory list and timeout is used to mimic fetching from a remote datasource. The <i>virtualCars</i> is an empty array that is populated on scroll.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable
                :value="virtualCars"
                scrollable
                scrollHeight="400px"
                :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }"
                tableStyle="min-width: 50rem"
            >
                <Column field="id" header="Id" style="width: 20%">
                    <template #loading>
                        <div class="flex items-center h-[17px] grow overflow-hidden">
                            <Skeleton width="60%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="vin" header="Vin" style="width: 20%">
                    <template #loading>
                        <div class="flex items-center h-[17px] grow overflow-hidden">
                            <Skeleton width="40%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="year" header="Year" style="width: 20%">
                    <template #loading>
                        <div class="flex items-center h-[17px] grow overflow-hidden">
                            <Skeleton width="30%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="brand" header="Brand" style="width: 20%">
                    <template #loading>
                        <div class="flex items-center h-[17px] grow overflow-hidden">
                            <Skeleton width="40%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="color" header="Color" style="width: 20%">
                    <template #loading>
                        <div class="flex items-center h-[17px] grow overflow-hidden">
                            <Skeleton width="60%" height="1rem" />
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { CarService } from '@/service/CarService';
import DataTable from '@/volt/datatable';
import Skeleton from '@/volt/skeleton';
import Column from 'primevue/column';
import { ref } from 'vue';

const cars = ref(null);
const virtualCars = ref(Array.from({ length: 100000 }));
const lazyLoading = ref(false);
const loadLazyTimeout = ref(null);

const loadCarsLazy = (event) => {
    !lazyLoading.value && (lazyLoading.value = true);

    if (loadLazyTimeout.value) {
        clearTimeout(loadLazyTimeout.value);
    }

    //simulate remote connection with a timeout
    loadLazyTimeout.value = setTimeout(
        () => {
            let _virtualCars = [...virtualCars.value];
            let { first, last } = event;

            //load data of required page
            const loadedCars = cars.value.slice(first, last);

            //populate page of virtual cars
            Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

            virtualCars.value = _virtualCars;
            lazyLoading.value = false;
        },
        Math.random() * 1000 + 250
    );
};

const loadDemoData = () => {
    cars.value = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
};

const code = ref(`
<template>
    <div class="card">
        <DataTable
            :value="virtualCars"
            scrollable
            scrollHeight="400px"
            :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }"
            tableStyle="min-width: 50rem"
        >
            <Column field="id" header="Id" style="width: 20%">
                <template #loading>
                    <div class="flex items-center h-[17px] grow overflow-hidden">
                        <Skeleton width="60%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="vin" header="Vin" style="width: 20%">
                <template #loading>
                    <div class="flex items-center h-[17px] grow overflow-hidden">
                        <Skeleton width="40%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="year" header="Year" style="width: 20%">
                <template #loading>
                    <div class="flex items-center h-[17px] grow overflow-hidden">
                        <Skeleton width="30%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="brand" header="Brand" style="width: 20%">
                <template #loading>
                    <div class="flex items-center h-[17px] grow overflow-hidden">
                        <Skeleton width="40%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="color" header="Color" style="width: 20%">
                <template #loading>
                    <div class="flex items-center h-[17px] grow overflow-hidden">
                        <Skeleton width="60%" height="1rem" />
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { CarService } from '@/service/CarService';
import DataTable from '@/volt/datatable';
import Skeleton from '@/volt/skeleton';
import Column from 'primevue/column';
import { ref } from 'vue';

const cars = ref(null);
const virtualCars = ref(Array.from({ length: 100000 }));
const lazyLoading = ref(false);
const loadLazyTimeout = ref(null);

const loadCarsLazy = (event) => {
    !lazyLoading.value && (lazyLoading.value = true);

    if (loadLazyTimeout.value) {
        clearTimeout(loadLazyTimeout.value);
    }

    //simulate remote connection with a timeout
    loadLazyTimeout.value = setTimeout(
        () => {
            let _virtualCars = [...virtualCars.value];
            let { first, last } = event;

            //load data of required page
            const loadedCars = cars.value.slice(first, last);

            //populate page of virtual cars
            Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

            virtualCars.value = _virtualCars;
            lazyLoading.value = false;
        },
        Math.random() * 1000 + 250
    );
};

onMounted(() => {
    cars.value = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
});
<\/script>
`);
</script>
