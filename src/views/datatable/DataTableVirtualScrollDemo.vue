<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>VirtualScroll</span></h1>
				<p>VirtualScroller is a performant approach to handle huge data efficiently.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h5>Preloaded Data (100000 Rows)</h5>
                <DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }">
                    <Column field="id" header="Id" style="min-width: '200px'"></Column>
                    <Column field="vin" header="Vin" style="min-width: '200px'"></Column>
                    <Column field="year" header="Year" style="min-width: '200px'"></Column>
                    <Column field="brand" header="Brand" style="min-width: '200px'"></Column>
                    <Column field="color" header="Color" style="min-width: '200px'"></Column>
                </DataTable>
            </div>
            <div class="card">
                <h5>Lazy Loading from a Remote Datasource (100000 Rows)</h5>
                <DataTable :value="virtualCars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">
                    <Column field="id" header="Id" style="min-width: '200px'">
                        <template #loading>
                            <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="vin" header="Vin" style="min-width: '200px'">
                        <template #loading>
                            <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                                <Skeleton width="40%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="year" header="Year" style="min-width: '200px'">
                        <template #loading>
                            <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                                <Skeleton width="30%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="brand" header="Brand" style="min-width: '200px'">
                        <template #loading>
                            <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                                <Skeleton width="40%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="color" header="Color" style="min-width: '200px'">
                        <template #loading>
                            <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableVirtualScrollDemo" :sources="sources" :service="['CarService']" github="datatable/DataTableVirtualScrollDemo.vue" />
    </div>
</template>

<script>
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            cars: null,
            virtualCars: Array.from({ length: 100000 }),
            lazyLoading: false,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
	<div>
         <div class="card">
            <h5>Preloaded Data (100000 Rows)</h5>
            <DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }">
                <Column field="id" header="Id" style="min-width: '200px'"></Column>
                <Column field="vin" header="Vin" style="min-width: '200px'"></Column>
                <Column field="year" header="Year" style="min-width: '200px'"></Column>
                <Column field="brand" header="Brand" style="min-width: '200px'"></Column>
                <Column field="color" header="Color" style="min-width: '200px'"></Column>
            </DataTable>
        </div>
        <div class="card">
            <h5>Lazy Loading from a Remote Datasource (100000 Rows)</h5>
            <DataTable :value="virtualCars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">
                <Column field="id" header="Id" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="60%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="vin" header="Vin" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="40%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="year" header="Year" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="30%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="brand" header="Brand" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="40%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="color" header="Color" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="60%" height="1rem" />
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
	</div>
</template>

<script>
import CarService from './service/CarService';

export default {
    data() {
        return {
            cars: null,
            virtualCars: Array.from({ length: 100000 }),
            lazyLoading: false
        }
    },
    carService: null,
    loadLazyTimeout: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.cars = Array.from({ length: 100000 }).map((_, i) => this.carService.generateCar(i + 1));
    },
    methods: {
        loadCarsLazy(event) {
            !this.lazyLoading && (this.lazyLoading = true);

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //simulate remote connection with a timeout
            this.loadLazyTimeout = setTimeout(() => {
                let virtualCars = [...this.virtualCars];
                let { first, last } = event;

                //load data of required page
                const loadedCars = this.cars.slice(first, last);

                //populate page of virtual cars
                Array.prototype.splice.apply(virtualCars, [...[first, last - first], ...loadedCars]);

                this.virtualCars = virtualCars;
                this.lazyLoading = false;
            }, Math.random() * 1000 + 250);
        }
    }
}
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
	<div>
         <div class="card">
            <h5>Preloaded Data (100000 Rows)</h5>
            <DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }">
                <Column field="id" header="Id" style="min-width: '200px'"></Column>
                <Column field="vin" header="Vin" style="min-width: '200px'"></Column>
                <Column field="year" header="Year" style="min-width: '200px'"></Column>
                <Column field="brand" header="Brand" style="min-width: '200px'"></Column>
                <Column field="color" header="Color" style="min-width: '200px'"></Column>
            </DataTable>
        </div>
        <div class="card">
            <h5>Lazy Loading from a Remote Datasource (100000 Rows)</h5>
            <DataTable :value="virtualCars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">
                <Column field="id" header="Id" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="60%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="vin" header="Vin" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="40%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="year" header="Year" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="30%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="brand" header="Brand" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="40%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="color" header="Color" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="60%" height="1rem" />
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import CustomerService from './service/CustomerService';

export default {
    setup() {
        onMounted(() => {
            cars.value = Array.from({ length: 100000 }).map((_, i) => carService.value.generateCar(i + 1));
        })

        const cars = ref(null);
        const virtualCars = ref(Array.from({ length: 100000 }));
        const lazyLoading = ref(false);
        const carService = ref(new CarService());
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
        }

        return { cars, virtualCars, lazyLoading, loadCarsLazy };
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/skeleton/skeleton.min.js"><\\/script>
        <script src="./CarService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <h5>Preloaded Data (100000 Rows)</h5>
                <p-datatable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }">
                    <p-column field="id" header="Id" style="min-width: '200px'"></p-column>
                    <p-column field="vin" header="Vin" style="min-width: '200px'"></p-column>
                    <p-column field="year" header="Year" style="min-width: '200px'"></p-column>
                    <p-column field="brand" header="Brand" style="min-width: '200px'"></p-column>
                    <p-column field="color" header="Color" style="min-width: '200px'"></p-column>
                </p-datatable>
            </div>
            <div class="card">
                <h5>Lazy Loading from a Remote Datasource (100000 Rows)</h5>
                <p-datatable :value="virtualCars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">
                    <p-column field="id" header="Id" style="min-width: '200px'">
                        <template #loading>
                            <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                                <p-skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </p-column>
                    <p-column field="vin" header="Vin" style="min-width: '200px'">
                        <template #loading>
                            <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                                <p-skeleton width="40%" height="1rem" />
                            </div>
                        </template>
                    </p-column>
                    <p-column field="year" header="Year" style="min-width: '200px'">
                        <template #loading>
                            <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                                <p-skeleton width="30%" height="1rem" />
                            </div>
                        </template>
                    </p-column>
                    <p-column field="brand" header="Brand" style="min-width: '200px'">
                        <template #loading>
                            <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                                <p-skeleton width="40%" height="1rem" />
                            </div>
                        </template>
                    </p-column>
                    <p-column field="color" header="Color" style="min-width: '200px'">
                        <template #loading>
                            <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                                <p-skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </p-column>
                </p-datatable>
            </div>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    cars.value = Array.from({ length: 100000 }).map((_, i) => carService.value.generateCar(i + 1));
                })

                const cars = ref(null);
                const virtualCars = ref(Array.from({ length: 100000 }));
                const lazyLoading = ref(false);
                const carService = ref(new CarService());
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
                }

                return { cars, virtualCars, lazyLoading, loadCarsLazy };
            },
            components: {
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-skeleton": primevue.skeleton
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>
`
                }
            }
        }
    },
    carService: null,
    loadLazyTimeout: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.cars = Array.from({ length: 100000 }).map((_, i) => this.carService.generateCar(i + 1));
    },
    methods: {
        loadCarsLazy(event) {
            !this.lazyLoading && (this.lazyLoading = true);

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //simulate remote connection with a timeout
            this.loadLazyTimeout = setTimeout(() => {
                let virtualCars = [...this.virtualCars];
                let { first, last } = event;

                //load data of required page
                const loadedCars = this.cars.slice(first, last);

                //populate page of virtual cars
                Array.prototype.splice.apply(virtualCars, [...[first, last - first], ...loadedCars]);

                this.virtualCars = virtualCars;
                this.lazyLoading = false;
            }, Math.random() * 1000 + 250);
        }
    }
}
</script>
