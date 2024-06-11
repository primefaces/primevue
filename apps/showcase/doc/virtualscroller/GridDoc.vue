<template>
    <DocSectionText v-bind="$attrs">
        <p>Scrolling can be enabled vertically and horizontally when <i>orientation</i> is set as <i>both</i>. In this mode, <i>itemSize</i> should be an array where first value is the height of an item and second is the width.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <VirtualScroller :items="items" :itemSize="[50, 100]" orientation="both" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">
                    <template v-for="(el, index) of item" :key="index">
                        <div style="width: 100px">{{ el }}</div>
                    </template>
                </div>
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
<VirtualScroller :items="items" :itemSize="[50, 100]" orientation="both" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">
            <template v-for="(el, index) of item" :key="index">
                <div style="width: 100px">{{ el }}</div>
            </template>
        </div>
    </template>
</VirtualScroller>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <VirtualScroller :items="items" :itemSize="[50, 100]" orientation="both" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">
                    <template v-for="(el, index) of item" :key="index">
                        <div style="width: 100px">{{ el }}</div>
                    </template>
                </div>
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
        this.items = Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`));
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <VirtualScroller :items="items" :itemSize="[50, 100]" orientation="both" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">
                    <template v-for="(el, index) of item" :key="index">
                        <div style="width: 100px">{{ el }}</div>
                    </template>
                </div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`)));
<\/script>
`
            }
        };
    },
    mounted() {
        this.items = Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => `Item #${i}_${j}`));
    }
};
</script>
