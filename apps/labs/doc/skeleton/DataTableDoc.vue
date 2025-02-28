<template>
    <DocSectionText v-bind="$attrs">
        <p>Sample DataTable implementation using different Skeleton components and PrimeFlex CSS utilities.</p>
    </DocSectionText>
    <div class="card">
        <DataTable :value="products">
            <Column field="code" header="Code">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="name" header="Name">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="category" header="Category">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="quantity" header="Quantity">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
        </DataTable>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<DataTable :value="products">
    <Column field="code" header="Code">
        <template #body>
            <Skeleton></Skeleton>
        </template>
    </Column>
    <Column field="name" header="Name">
        <template #body>
            <Skeleton></Skeleton>
        </template>
    </Column>
    <Column field="category" header="Category">
        <template #body>
            <Skeleton></Skeleton>
        </template>
    </Column>
    <Column field="quantity" header="Quantity">
        <template #body>
            <Skeleton></Skeleton>
        </template>
    </Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable :value="products">
            <Column field="code" header="Code">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="name" header="Name">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="category" header="Category">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="quantity" header="Quantity">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: new Array(4)
        };
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable :value="products">
            <Column field="code" header="Code">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="name" header="Name">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="category" header="Category">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="quantity" header="Quantity">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref(new Array(4));
<\/script>
`
            },
            products: new Array(4)
        };
    }
};
</script>
