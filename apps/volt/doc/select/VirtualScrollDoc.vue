<template>
    <DocSectionText v-bind="$attrs">
        <p>
            VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with <i>virtualScrollerOptions</i> property, refer to the
            <a href="https://primevue.org/virtualscroller" target="_blank" rel="noopener noreferrer">VirtualScroller</a> for more information about the available options as it is used internally by Select.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Select v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Item" class="w-full md:w-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Select from '@/volt/Select.vue';
import { ref } from 'vue';

const selectedItem = ref();
const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: `Item #${i}`, value: i })));

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Select v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Item" class="w-full md:w-56" />
    </div>
</template>

<script setup lang="ts">
import Select from '@/volt/Select.vue';
import { ref } from 'vue';

const selectedItem = ref();
const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })));
<\/script>
`);
</script>
