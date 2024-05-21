<template>
    <DocSectionText v-bind="$attrs">
        <p>Setting <i>orientation</i> to <i>horizontal</i> enables scrolling horizontally. In this case, the <i>itemSize</i> should refer to the width of an item.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <VirtualScroller :items="items" :itemSize="50" orientation="horizontal" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px" :pt="{ content: 'flex flex-row' }">
            <template v-slot:item="{ item, options }">
                <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="width: 50px; writing-mode: vertical-lr">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: null,
            code: {
                basic: `
<VirtualScroller :items="items" :itemSize="50" orientation="horizontal" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px" :pt="{ content: 'flex flex-row' }">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="width: 50px; writing-mode: vertical-lr;">{{ item }}</div>
    </template>
</VirtualScroller>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <VirtualScroller :items="items" :itemSize="50" orientation="horizontal" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px" :pt="{ content: 'flex flex-row' }">
            <template v-slot:item="{ item, options }">
                <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="width: 50px; writing-mode: vertical-lr;">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: null
        };
    },
    created() {
        this.items = Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`);
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <VirtualScroller :items="items" :itemSize="50" orientation="horizontal" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px" :pt="{ content: 'flex flex-row' }">
            <template v-slot:item="{ item, options }">
                <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="width: 50px; writing-mode: vertical-lr;">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
<\/script>
`
            }
        };
    },
    mounted() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
};
</script>
