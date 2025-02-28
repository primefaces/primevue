<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Virtual Scrolling is a performant way to render large lists. Configuration of the scroll behavior is defined with <i>virtualScrollerOptions</i> that requires <i>itemSize</i> as the mandatory value to set the height of an item. Visit
            <PrimeVueNuxtLink to="/virtualscroller">VirtualScroller</PrimeVueNuxtLink> documentation for more information about the configuration API.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtualScrollerOptions="{ itemSize: 38 }" optionLabel="label" dropdown />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: Array.from({ length: 1000 }, (_, i) => ({ label: `Item #${i}`, value: i })),
            selectedItem: null,
            filteredItems: null,
            code: {
                basic: `
<AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems"
    :virtualScrollerOptions="{ itemSize: 38 }" optionLabel="label" dropdown />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtualScrollerOptions="{ itemSize: 38 }" optionLabel="label" dropdown />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: Array.from({ length: 1000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })),
            selectedItem: null,
            filteredItems: null,
        };
    },
    methods: {
        searchItems(event) {
            //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
            let query = event.query;
            let _filteredItems = [];

            for (let i = 0; i < this.items.length; i++) {
                let item = this.items[i];

                if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                    _filteredItems.push(item);
                }
            }

            this.filteredItems = _filteredItems;
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtualScrollerOptions="{ itemSize: 38 }" optionLabel="label" dropdown />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref(Array.from({ length: 1000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })));
const selectedItem = ref();
const filteredItems = ref();
const searchItems = (event) => {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let query = event.query;
    let _filteredItems = [];

    for (let i = 0; i < items.value.length; i++) {
        let item = items.value[i];

        if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
            _filteredItems.push(item);
        }
    }

    filteredItems.value = _filteredItems;
};
<\/script>
`
            }
        };
    },
    methods: {
        searchItems(event) {
            //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
            let query = event.query;
            let _filteredItems = [];

            for (let i = 0; i < this.items.length; i++) {
                let item = this.items[i];

                if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                    _filteredItems.push(item);
                }
            }

            this.filteredItems = _filteredItems;
        }
    }
};
</script>
