<template>
    <DocSectionText v-bind="$attrs">
        <p>
            VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with <i>virtualScrollerOptions</i> property, refer to the
            <a href="https://primevue.org/virtualscroller" target="_blank" rel="noopener noreferrer">VirtualScroller</a> for more information about the available options as it is used internally by Listbox.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Listbox v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" class="w-full md:w-56" listStyle="height:250px" striped />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Listbox from '@/volt/listbox';
import { ref } from 'vue';

const selectedItem = ref();
const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: `Item #${i}`, value: i })));

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Listbox v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" class="w-full md:w-56" listStyle="height:250px" striped />
    </div>
</template>

<script setup>
import Listbox from '@/volt/listbox';
import { ref } from 'vue';

const selectedItem = ref();
const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })));
<\/script>
`);
</script>
