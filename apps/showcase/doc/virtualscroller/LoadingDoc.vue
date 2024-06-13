<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Busy state is enabled by adding <i>showLoader</i> property which blocks the UI with a modal by default. Alternatively, <i>loader</i> template can be used to customize items e.g. with
            <PrimeVueNuxtLink to="/skeleton">Skeleton</PrimeVueNuxtLink>.
        </p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-8">
        <div>
            <span class="font-bold block mb-2">Modal</span>
            <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">Skeleton</span>
            <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
                <template v-slot:loader="{ options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">
                        <Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" />
                    </div>
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
<VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>

<VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
    <template v-slot:loader="{ options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">
            <Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" />
        </div>
    </template>
</VirtualScroller>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-8">
        <div>
            <span class="font-bold block mb-2">Modal</span>
            <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">Skeleton</span>
            <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
                <template v-slot:loader="{ options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">
                        <Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" />
                    </div>
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
    <div class="card flex flex-wrap justify-center gap-8">
        <div>
            <span class="font-bold block mb-2">Modal</span>
            <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">Skeleton</span>
            <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
                <template v-slot:loader="{ options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">
                        <Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" />
                    </div>
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
