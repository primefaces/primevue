<template>
    <DocSectionText v-bind="$attrs">
        <p>Skeleton component can be used as a placeholder during the loading process.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="products" tableStyle="min-width: 50rem">
                <Column field="code" header="Code">
                    <template #body>
                        <Skeleton />
                    </template>
                </Column>
                <Column field="name" header="Name">
                    <template #body>
                        <Skeleton />
                    </template>
                </Column>
                <Column field="category" header="Category">
                    <template #body>
                        <Skeleton />
                    </template>
                </Column>
                <Column field="quantity" header="Quantity">
                    <template #body>
                        <Skeleton />
                    </template>
                </Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script>

export default {
    data() {
        return {
            products: null,
            code: {
                basic: `
<DataTable :value="products" tableStyle="min-width: 50rem">
    <Column field="code" header="Code">
        <template #body>
            <Skeleton />
        </template>
    </Column>
    <Column field="name" header="Name">
        <template #body>
            <Skeleton />
        </template>
    </Column>
    <Column field="category" header="Category">
        <template #body>
            <Skeleton />
        </template>
    </Column>
    <Column field="quantity" header="Quantity">
        <template #body>
            <Skeleton />
        </template>
    </Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="code" header="Code">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
            <Column field="name" header="Name">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
            <Column field="category" header="Category">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
            <Column field="quantity" header="Quantity">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        this.products = Array.from({ length: 10 }).map((_, i) => ({id: i.toString()}));
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="code" header="Code">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
            <Column field="name" header="Name">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
            <Column field="category" header="Category">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
            <Column field="quantity" header="Quantity">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
    products.value = Array.from({ length: 10 }).map((_, i) => ({id: i.toString()}));
});

const products = ref();

<\/script>
`,
            }
        };
    },
    methods: {
        loadDemoData() {
            this.products = Array.from({ length: 10 }).map((_, i) => ({id: i.toString()}));
        }
    }
};
</script>
