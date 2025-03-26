<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Enabling the <i>fluid</i> for each component individually may be cumbersome so wrap the content with <i>Fluid</i> to control all descendants. Note that the <i>fluid</i> property of a child component has higher precedence than the fluid
            container as shown in the last sample.
        </p>
    </DocSectionText>
    <div class="card">
        <Fluid>
            <div class="grid grid-cols-2 gap-4">
                <div><InputText /></div>
                <div><InputText /></div>
                <div class="col-span-full"><InputText /></div>
                <div><InputText :fluid="false" placeholder="Non-Fluid" /></div>
            </div>
        </Fluid>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Fluid from '@/volt/Fluid.vue';
import InputText from '@/volt/InputText.vue';
import { ref } from 'vue';

const code = ref(`
<template>
     <div class="card">
        <Fluid>
            <div class="grid grid-cols-2 gap-4">
                <div><InputText /></div>
                <div><InputText /></div>
                <div class="col-span-full"><InputText /></div>
                <div><InputText :fluid="false" placeholder="Non-Fluid" /></div>
            </div>
        </Fluid>
    </div>
</template>

<script setup lang="ts">
import Fluid from '@/volt/Fluid.vue';
import InputText from '@/volt/InputText.vue';
<\/script>
`);
</script>
