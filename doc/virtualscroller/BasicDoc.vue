<template>
    <DocSectionText v-bind="$attrs">
        <p>
            VirtualScroller requires <i>items</i> as the data to display, <i>itemSize</i> for the dimensions of an item and <i>item</i> template are required on component. In addition, an initial array is required based on the total number of items
            to display. Size of the viewport is configured using <i>scrollWidth</i>, <i>scrollHeight</i> properties directly or with CSS <i>width</i> and <i>height</i> styles.
        </p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
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
<VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
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
    <div class="card flex justify-content-center">
        <VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
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
