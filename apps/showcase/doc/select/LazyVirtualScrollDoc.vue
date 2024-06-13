<template>
    <DocSectionText v-bind="$attrs" />
    <div class="card flex justify-center">
        <Select
            v-model="selectedItem"
            :options="items"
            optionLabel="label"
            optionValue="value"
            :virtualScrollerOptions="{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }"
            placeholder="Select Item"
            class="w-full md:w-56"
        />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedItem: null,
            items: Array.from({ length: 100000 }),
            loading: false,
            code: {
                basic: `
<Select v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" class="w-full md:w-56"
    :virtualScrollerOptions="{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }" placeholder="Select Item" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Select v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" class="w-full md:w-56"
            :virtualScrollerOptions="{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }" placeholder="Select Item" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedItem: null,
            items: Array.from({ length: 100000 }),
            loading: false
        };
    },
    loadLazyTimeout: null,
    methods: {
        onLazyLoad(event) {
            this.loading = true;

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //imitate delay of a backend call
            this.loadLazyTimeout = setTimeout(() => {
                const { first, last } = event;
                const _items = [...this.items];

                for (let i = first; i < last; i++) {
                    _items[i] = { label: \`Item #\${i}\`, value: i };
                }

                this.items = _items;
                this.loading = false;
            }, Math.random() * 1000 + 250);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Select v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" class="w-full md:w-56"
            :virtualScrollerOptions="{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }" placeholder="Select Item" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedItem = ref();
const items = ref(Array.from({ length: 100000 }));
const loading = ref(false);
const loadLazyTimeout = ref();
const onLazyLoad = (event) => {
    loading.value = true;

    if (loadLazyTimeout.value) {
        clearTimeout(loadLazyTimeout.value);
    }

    //imitate delay of a backend call
    loadLazyTimeout.value = setTimeout(() => {
        const { first, last } = event;
        const _items = [...items.value];

        for (let i = first; i < last; i++) {
            _items[i] = { label: \`Item #\${i}\`, value: i };
        }

        items.value = _items;
        loading.value = false;
    }, Math.random() * 1000 + 250);
}
<\/script>
`
            }
        };
    },
    loadLazyTimeout: null,
    methods: {
        onLazyLoad(event) {
            this.loading = true;

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //imitate delay of a backend call
            this.loadLazyTimeout = setTimeout(
                () => {
                    const { first, last } = event;
                    const items = [...this.items];

                    for (let i = first; i < last; i++) {
                        items[i] = { label: `Item #${i}`, value: i };
                    }

                    this.items = items;
                    this.loading = false;
                },
                Math.random() * 1000 + 250
            );
        }
    }
};
</script>
