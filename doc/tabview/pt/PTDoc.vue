<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card">
        <TabView>
            <TabPanel
                v-for="(tab, index) in scrollableTabs"
                :key="tab.title"
                :header="tab.title"
                :pt="{
                    headeraction: ({ props, parent }) => ({
                        class: panelClass(props, parent, index)
                    })
                }"
            >
                <p>{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            scrollableTabs: Array.from({ length: 3 }, (_, i) => ({
                title: `Header ${i + 1}`,
                content: `Tab ${i + 1} Content`
            })),
            code: {
                basic: `
<TabView>
    <TabPanel v-for="(tab, index) in scrollableTabs" :key="tab.title" :header="tab.title"
        :pt="{
            headeraction: ({ props, parent }) => ({
                class: panelClass(props, parent, index)
            })
        }">
        <p>{{ tab.content }}</p>
    </TabPanel>
</TabView>`,
                options: `
<template>
    <div class="card">
        <TabView>
            <TabPanel v-for="(tab, index) in scrollableTabs" :key="tab.title" :header="tab.title"
                :pt="{
                    headeraction: ({ props, parent }) => ({
                        class: panelClass(props, parent, index)
                    })
                }">
                <p>{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollableTabs: Array.from({ length: 3 }, (_, i) => ({
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
<\/script>`,
                composition: `
<template>
    <div class="card">
        <TabView>
            <TabPanel v-for="(tab, index) in scrollableTabs" :key="tab.title" :header="tab.title"
                :pt="{
                    headeraction: ({ props, parent }) => ({
                        class: panelClass(props, parent, index)
                    })
                }">
                <p>{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const scrollableTabs = ref(Array.from({ length: 3 }, (_, i) => ({
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
<\/script>`
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
