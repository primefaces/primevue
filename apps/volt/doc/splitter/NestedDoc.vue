<template>
    <DocSectionText v-bind="$attrs">
        <p>Splitters can be combined to create advanced layouts.</p>
    </DocSectionText>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel :size="80">
                <Splitter layout="vertical">
                    <SplitterPanel class="flex items-center justify-center" :size="15"> Panel 2 </SplitterPanel>
                    <SplitterPanel :size="85">
                        <Splitter>
                            <SplitterPanel class="flex items-center justify-center" :size="20"> Panel 3 </SplitterPanel>
                            <SplitterPanel class="flex items-center justify-center" :size="80"> Panel 4 </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Splitter from '@/volt/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel :size="80">
                <Splitter layout="vertical">
                    <SplitterPanel class="flex items-center justify-center" :size="15"> Panel 2 </SplitterPanel>
                    <SplitterPanel :size="85">
                        <Splitter>
                            <SplitterPanel class="flex items-center justify-center" :size="20"> Panel 3 </SplitterPanel>
                            <SplitterPanel class="flex items-center justify-center" :size="80"> Panel 4 </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
import Splitter from '@/volt/splitter';
import SplitterPanel from 'primevue/splitterpanel';
<\/script>
`);
</script>
