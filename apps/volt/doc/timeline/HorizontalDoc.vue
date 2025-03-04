<template>
    <DocSectionText v-bind="$attrs">
        <p>TimeLine orientation is controlled with the <i>layout</i> property, default is <i>vertical</i> having <i>horizontal</i> as the alternative.</p>
    </DocSectionText>
    <div class="card flex flex-col gap-4">
        <Timeline :value="events" layout="horizontal" align="top">
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>

        <Timeline :value="events" layout="horizontal" align="bottom">
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>

        <Timeline :value="events" layout="horizontal" align="alternate">
            <template #opposite> &nbsp; </template>
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Timeline from '@/volt/timeline';
import { ref } from 'vue';

const events = ref(['2020', '2021', '2022', '2023']);

const code = ref(`
<template>
     <div class="card flex flex-col gap-4">
        <Timeline :value="events" layout="horizontal" align="top">
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>

        <Timeline :value="events" layout="horizontal" align="bottom">
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>

        <Timeline :value="events" layout="horizontal" align="alternate">
            <template #opposite> &nbsp; </template>
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import Timeline from '@/volt/timeline';
import { ref } from 'vue';

const events = ref(['2020', '2021', '2022', '2023']);
<\/script>
`);
</script>
