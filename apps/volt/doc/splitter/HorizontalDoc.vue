<template>
    <DocSectionText v-bind="$attrs">
        <p>Splitter requires two SplitterPanel components as children which are displayed horizontally by default.</p>
    </DocSectionText>
    <div class="card">
        <Splitter style="height: 300px" class="mb-8">
            <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Splitter from '@/volt/Splitter.vue';
import SplitterPanel from 'primevue/splitterpanel';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card">
        <Splitter style="height: 300px" class="mb-8">
            <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
import Splitter from '@/volt/Splitter.vue';
import SplitterPanel from 'primevue/splitterpanel';
<\/script>
`);
</script>
