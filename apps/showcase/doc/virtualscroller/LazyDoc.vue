<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded on demand. To implement lazy loading, enable the <i>lazy</i>property and implement <i>onLazyLoad</i> callback to return
            data.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" lazy @lazy-load="onLazyLoad" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            lazyItems: null,
            lazyLoading: false,
            loadLazyTimeout: null,
            code: {
                basic: `
<VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" lazy @lazy-load="onLazyLoad" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" lazy @lazy-load="onLazyLoad" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lazyItems: null,
            lazyLoading: false,
            loadLazyTimeout: null
        };
    },
    mounted() {
        this.lazyItems = Array.from({ length: 100000 });
    },
    methods: {
        onLazyLoad(event) {
            this.lazyLoading = true;

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //imitate delay of a backend call
            this.loadLazyTimeout = setTimeout(() => {
                const { first, last } = event;
                const lazyItems = [...this.lazyItems];

                for (let i = first; i < last; i++) {
                    lazyItems[i] = \`Item #\${i}\`;
                }

                this.lazyItems = lazyItems;
                this.lazyLoading = false;

            }, Math.random() * 1000 + 250);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" lazy @lazy-load="onLazyLoad" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const lazyItems = ref(Array.from({ length: 10000 }));
const lazyLoading = ref(false);
const loadLazyTimeout = ref();
const onLazyLoad = (event) => {
    lazyLoading.value = true;

    if (loadLazyTimeout.value) {
        clearTimeout(loadLazyTimeout.value);
    }

    //imitate delay of a backend call
    loadLazyTimeout.value = setTimeout(() => {
        const { first, last } = event;
        const _lazyItems = [...lazyItems.value];

        for (let i = first; i < last; i++) {
            _lazyItems[i] = \`Item #\${i}\`;
        }

        lazyItems.value = _lazyItems;
        lazyLoading.value = false;

    }, Math.random() * 1000 + 250);
};
<\/script>
`
            }
        };
    },
    mounted() {
        this.lazyItems = Array.from({ length: 100000 });
    },
    methods: {
        onLazyLoad(event) {
            this.lazyLoading = true;

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //imitate delay of a backend call
            this.loadLazyTimeout = setTimeout(
                () => {
                    const { first, last } = event;
                    const lazyItems = [...this.lazyItems];

                    for (let i = first; i < last; i++) {
                        lazyItems[i] = `Item #${i}`;
                    }

                    this.lazyItems = lazyItems;
                    this.lazyLoading = false;
                },
                Math.random() * 1000 + 250
            );
        }
    }
};
</script>
