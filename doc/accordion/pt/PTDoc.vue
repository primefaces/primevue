<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab
                v-for="(tab, index) in tabs"
                :key="tab.title"
                :header="tab.title"
                :pt="{
                    headerAction: ({ props, parent }) => ({
                        class: panelClass(props, parent, index)
                    })
                }"
            >
                <p>{{ tab.content }}</p>
            </AccordionTab>
        </Accordion>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            tabs: Array.from({ length: 3 }, (_, i) => ({
                title: `Header ${i + 1}`,
                content: `Tab ${i + 1} Content`
            })),
            code: {
                basic: `
<Accordion :activeIndex="0">
    <AccordionTab v-for="(tab, index) in tabs" :key="tab.title" :header="tab.title"
        :pt="{
            headerAction: ({ props, parent }) => ({
                class: panelClass(props, parent, index)
            })
        }">
        <p>{{ tab.content }}</p>
    </AccordionTab>
</Accordion>
`,
                options: `
<template>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab v-for="(tab, index) in tabs" :key="tab.title" :header="tab.title"
                :pt="{
                    headerAction: ({ props, parent }) => ({
                        class: panelClass(props, parent, index)
                    })
                }">
                <p>{{ tab.content }}</p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: Array.from({ length: 3 }, (_, i) => ({
                title: \`Header \${i + 1}\`,
                content: \`Tab \${i + 1} Content\`
            }))
        }
    },
    methods: {
        panelClass(props, parent, index) {
            return [
                {
                    'bg-primary': parent.state.d_activeIndex === index
                }
            ];
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab v-for="(tab, index) in tabs" :key="tab.title" :header="tab.title"
                :pt="{
                    headerAction: ({ props, parent }) => ({
                        class: panelClass(props, parent, index)
                    })
                }">
                <p>{{ tab.content }}</p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref(Array.from({ length: 3 }, (_, i) => ({
    title: \`Header \${i + 1}\`,
    content: \`Tab \${i + 1} Content\`
})));

const panelClass = (props, parent, index) => {
    return [
        {
            'bg-primary': parent.state.d_activeIndex === index
        }
    ];
};
<\/script>
`
            }
        };
    },
    methods: {
        panelClass(props, parent, index) {
            return [
                {
                    'bg-primary': parent.state.d_activeIndex === index
                }
            ];
        }
    }
};
</script>
