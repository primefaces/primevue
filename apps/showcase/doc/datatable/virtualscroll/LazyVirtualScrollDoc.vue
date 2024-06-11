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
                        <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                            <Skeleton width="60%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="vin" header="Vin" style="width: 20%">
                    <template #loading>
                        <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                            <Skeleton width="40%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="year" header="Year" style="width: 20%">
                    <template #loading>
                        <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                            <Skeleton width="30%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="brand" header="Brand" style="width: 20%">
                    <template #loading>
                        <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                            <Skeleton width="40%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="color" header="Color" style="width: 20%">
                    <template #loading>
                        <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                            <Skeleton width="60%" height="1rem" />
                        </div>
                    </template>
                </Column>
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
            virtualCars: Array.from({ length: 100000 }),
            lazyLoading: false,
            loadLazyTimeout: null,
            code: {
                basic: `
<DataTable :value="virtualCars" scrollable scrollHeight="400px" tableStyle="min-width: 50rem"
        :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">
    <Column field="id" header="Id" style="width: 20%">
        <template #loading>
            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                <Skeleton width="60%" height="1rem" />
            </div>
        </template>
    </Column>
    <Column field="vin" header="Vin" style="width: 20%">
        <template #loading>
            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                <Skeleton width="40%" height="1rem" />
            </div>
        </template>
    </Column>
    <Column field="year" header="Year" style="width: 20%">
        <template #loading>
            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                <Skeleton width="30%" height="1rem" />
            </div>
        </template>
    </Column>
    <Column field="brand" header="Brand" style="width: 20%">
        <template #loading>
            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                <Skeleton width="40%" height="1rem" />
            </div>
        </template>
    </Column>
    <Column field="color" header="Color" style="width: 20%">
        <template #loading>
            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                <Skeleton width="60%" height="1rem" />
            </div>
        </template>
    </Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable :value="virtualCars" scrollable scrollHeight="400px" tableStyle="min-width: 50rem"
                :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">
            <Column field="id" header="Id" style="width: 20%">
                <template #loading>
                    <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="60%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="vin" header="Vin" style="width: 20%">
                <template #loading>
                    <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="40%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="year" header="Year" style="width: 20%">
                <template #loading>
                    <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="30%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="brand" header="Brand" style="width: 20%">
                <template #loading>
                    <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="40%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="color" header="Color" style="width: 20%">
                <template #loading>
                    <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="60%" height="1rem" />
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { CarService } from '@/service/CarService';

export default {
    data() {
        return {
            cars: null,
            virtualCars: Array.from({ length: 100000 }),
            lazyLoading: false,
            loadLazyTimeout: null
        };
    },
    mounted() {
        this.cars = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
    },
    methods: {
        loadCarsLazy(event) {
            !this.lazyLoading && (this.lazyLoading = true);

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //simulate remote connection with a timeout
            this.loadLazyTimeout = setTimeout(() => {
                let _virtualCars = [...this.virtualCars];
                let { first, last } = event;

                //load data of required page
                const loadedCars = this.cars.slice(first, last);

                //populate page of virtual cars
                Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

                this.virtualCars = _virtualCars;
                this.lazyLoading = false;
            }, Math.random() * 1000 + 250);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable :value="virtualCars" scrollable scrollHeight="400px" tableStyle="min-width: 50rem"
                :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">
            <Column field="id" header="Id" style="width: 20%">
                <template #loading>
                    <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="60%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="vin" header="Vin" style="width: 20%">
                <template #loading>
                    <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="40%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="year" header="Year" style="width: 20%">
                <template #loading>
                    <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="30%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="brand" header="Brand" style="width: 20%">
                <template #loading>
                    <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="40%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="color" header="Color" style="width: 20%">
                <template #loading>
                    <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="60%" height="1rem" />
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CarService } from '@/service/CarService';

onMounted(() => {
    cars.value = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
});

const cars = ref();
const virtualCars = ref(Array.from({ length: 100000 }));
const lazyLoading = ref(false);
const loadLazyTimeout = ref();

const loadCarsLazy = (event) => {
    !lazyLoading.value && (lazyLoading.value = true);

    if (loadLazyTimeout.value) {
        clearTimeout(loadLazyTimeout.value);
    }

    //simulate remote connection with a timeout
    loadLazyTimeout.value = setTimeout(() => {
        let _virtualCars = [...virtualCars.value];
        let { first, last } = event;

        //load data of required page
        const loadedCars = cars.value.slice(first, last);

        //populate page of virtual cars
        Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

        virtualCars.value = _virtualCars;
        lazyLoading.value = false;
    }, Math.random() * 1000 + 250);
};
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
        },
        loadCarsLazy(event) {
            !this.lazyLoading && (this.lazyLoading = true);

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //simulate remote connection with a timeout
            this.loadLazyTimeout = setTimeout(
                () => {
                    let _virtualCars = [...this.virtualCars];
                    let { first, last } = event;

                    //load data of required page
                    const loadedCars = this.cars.slice(first, last);

                    //populate page of virtual cars
                    Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

                    this.virtualCars = _virtualCars;
                    this.lazyLoading = false;
                },
                Math.random() * 1000 + 250
            );
        }
    }
};
</script>
