<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>delay</i> property adds a threshold to wait in milliseconds during scrolling for render optimization.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-5">
        <div>
            <span class="font-bold block mb-2">No Delay</span>
            <VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">150ms</span>
            <VirtualScroller :items="items" :itemSize="50" :delay="150" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">500ms</span>
            <VirtualScroller :items="items" :itemSize="50" :delay="500" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
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

<VirtualScroller :items="items" :itemSize="50" :delay="150" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>

<VirtualScroller :items="items" :itemSize="50" :delay="500" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-5">
        <div>
            <span class="font-bold block mb-2">No Delay</span>
            <VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">150ms</span>
            <VirtualScroller :items="items" :itemSize="50" :delay="150" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">500ms</span>
            <VirtualScroller :items="items" :itemSize="50" :delay="500" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: null
        };
    },
    mounted() {
        this.items = Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`);
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-5">
        <div>
            <span class="font-bold block mb-2">No Delay</span>
            <VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">150ms</span>
            <VirtualScroller :items="items" :itemSize="50" :delay="150" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">500ms</span>
            <VirtualScroller :items="items" :itemSize="50" :delay="500" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
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
