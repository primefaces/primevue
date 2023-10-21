<template>
    <DocSectionText v-bind="$attrs">
        <p>AccordionTabs can be generated dynamically using the standard <i>v-for</i> directive.</p>
    </DocSectionText>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p class="m-0">{{ tab.content }}</p>
            </AccordionTab>
        </Accordion>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                { title: 'Title 1', content: 'Content 1' },
                { title: 'Title 2', content: 'Content 2' },
                { title: 'Title 3', content: 'Content 3' }
            ],
            code: {
                basic: `
<Accordion :activeIndex="0">
    <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
        <p class="m-0">{{ tab.content }}</p>
    </AccordionTab>
</Accordion>
`,
                options: `
<template>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p class="m-0">{{ tab.content }}</p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                { title: 'Title 1', content: 'Content 1' },
                { title: 'Title 2', content: 'Content 2' },
                { title: 'Title 3', content: 'Content 3' }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p class="m-0">{{ tab.content }}</p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref([
    { title: 'Title 1', content: 'Content 1' },
    { title: 'Title 2', content: 'Content 2' },
    { title: 'Title 3', content: 'Content 3' }
]);
<\/script>
`
            }
        };
    }
};
</script>
