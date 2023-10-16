<template>
    <DocSectionText v-bind="$attrs">
        <p>
            VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with <i>virtualScrollerOptions</i> property, refer to the
            <NuxtLink to="/virtualscroller">VirtualScroller</NuxtLink> for more information about the available options as it is used internally by Dropdown.
        </p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Item" class="w-full md:w-14rem" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedItem: null,
            items: Array.from({ length: 100000 }, (_, i) => ({ label: `Item #${i}`, value: i })),
            code: {
                basic: `
<Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value"
    :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Item" class="w-full md:w-14rem" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value"
            :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Item" class="w-full md:w-14rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedItem: null,
            items: Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i }))
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value"
            :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Item" class="w-full md:w-14rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedItem = ref();
const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })));
<\/script>
`
            }
        };
    }
};
</script>
