<template>
    <DocSectionText v-bind="$attrs">
        <p>Initial dimension of a panel is percentage based and defined using the <i>size</i> property. In addition,<i>minSize</i> is provided to set a minimum value during a resize.</p>
    </DocSectionText>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center" :size="25" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center" :size="75"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Splitter from '@/volt/Splitter.vue';
import SplitterPanel from 'primevue/splitterpanel';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center" :size="25" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center" :size="75"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup lang="ts">
import Splitter from '@/volt/Splitter.vue';
import SplitterPanel from 'primevue/splitterpanel';
<\/script>
`);
</script>
