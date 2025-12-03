<template>
    <DocSectionText v-bind="$attrs">
        <p>Skeleton component can be used as a placeholder during the loading process.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <TreeTable :value="nodes" tableStyle="min-width: 50rem">
                <Column field="name" header="Name" style="width: 34%">
                    <template #body>
                        <Skeleton />
                    </template>
                </Column>
                <Column field="size" header="Size" style="width: 33%">
                    <template #body>
                        <Skeleton />
                    </template>
                </Column>
                <Column field="type" header="Type" style="width: 33%">
                    <template #body>
                        <Skeleton />
                    </template>
                </Column>
            </TreeTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script>

export default {
    data() {
        return {
            nodes: null,
            code: {
                basic: `
<TreeTable :value="nodes" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" style="width: 34%">
        <template #body>
            <Skeleton />
        </template>
    </Column>
    <Column field="size" header="Size" style="width: 33%">
        <template #body>
            <Skeleton />
        </template>
    </Column>
    <Column field="type" header="Type" style="width: 33%">
        <template #body>
            <Skeleton />
        </template>
    </Column>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <TreeTable :value="nodes" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" style="width: 34%">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
            <Column field="size" header="Size" style="width: 33%">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
            <Column field="type" header="Type" style="width: 33%">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
        </TreeTable>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null
        };
    },
    mounted() {
        this.nodes = Array.from({ length: 10 }).map((_, i) => ({id: i.toString()}));
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <TreeTable :value="nodes" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" style="width: 34%">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
            <Column field="size" header="Size" style="width: 33%">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
            <Column field="type" header="Type" style="width: 33%">
                <template #body>
                    <Skeleton />
                </template>
            </Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
    nodes.value = Array.from({ length: 10 }).map((_, i) => ({id: i.toString()}));
});

const nodes = ref();

<\/script>
`,
            }
        };
    },
    methods: {
        loadDemoData() {
            this.nodes = Array.from({ length: 10 }).map((_, i) => ({id: i.toString()}));
        }
    }
};
</script>
