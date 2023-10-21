<template>
    <DocSectionText v-bind="$attrs">
        <p>Adding <i>scrollable</i> property displays navigational buttons at each side to scroll between tabs.</p>
    </DocSectionText>
    <div class="card">
        <TabView :scrollable="true">
            <TabPanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">
                <p class="m-0">{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            scrollableTabs: Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` })),
            code: {
                basic: `
<TabView :scrollable="true">
    <TabPanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">
        <p class="m-0">{{ tab.content }}</p>
    </TabPanel>
</TabView>
`,
                options: `
<template>
    <div class="card">
        <TabView :scrollable="true">
            <TabPanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">
                <p class="m-0">{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollableTabs: Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` }))
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <TabView :scrollable="true">
            <TabPanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">
                <p class="m-0">{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const scrollableTabs = ref(Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` })));
<\/script>
`
            }
        };
    }
};
</script>
