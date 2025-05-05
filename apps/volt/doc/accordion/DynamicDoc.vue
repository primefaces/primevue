<template>
    <DocSectionText v-bind="$attrs">
        <p>AccordionPanel can be generated dynamically using the standard <i>v-for</i> directive.</p>
    </DocSectionText>
    <div class="card">
        <Accordion value="0">
            <AccordionPanel v-for="tab in tabs" :key="tab.title" :value="tab.value">
                <AccordionHeader>{{ tab.title }}</AccordionHeader>
                <AccordionContent>
                    <p class="m-0!">{{ tab.content }}</p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Accordion from '@/volt/Accordion.vue';
import AccordionContent from '@/volt/AccordionContent.vue';
import AccordionHeader from '@/volt/AccordionHeader.vue';
import AccordionPanel from '@/volt/AccordionPanel.vue';
import { ref } from 'vue';

const tabs = ref([
    { title: 'Title 1', content: 'Content 1', value: '0' },
    { title: 'Title 2', content: 'Content 2', value: '1' },
    { title: 'Title 3', content: 'Content 3', value: '2' }
]);

const code = ref(`
<template>
    <div class="card">
        <Accordion value="0">
            <AccordionPanel v-for="tab in tabs" :key="tab.title" :value="tab.value">
                <AccordionHeader>{{ tab.title }}</AccordionHeader>
                <AccordionContent>
                    <p>{{ tab.content }}</p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
</template>

<script setup lang="ts">
import Accordion from '@/volt/Accordion.vue';
import AccordionPanel from '@/volt/AccordionPanel.vue';
import AccordionHeader from '@/volt/AccordionHeader.vue';
import AccordionContent from '@/volt/AccordionContent.vue';
import { ref } from 'vue';

const tabs = ref([
    { title: 'Title 1', content: 'Content 1', value: '0' },
    { title: 'Title 2', content: 'Content 2', value: '1' },
    { title: 'Title 3', content: 'Content 3', value: '2' }
]);
<\/script>
`);
</script>
