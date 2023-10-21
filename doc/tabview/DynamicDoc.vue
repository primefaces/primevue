<template>
    <DocSectionText v-bind="$attrs">
        <p>Tabs can be generated dynamically using the standard <i>v-for</i> directive.</p>
    </DocSectionText>
    <div class="card">
        <TabView>
            <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
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
            tabs: [
                { title: 'Tab 1', content: 'Tab 1 Content' },
                { title: 'Tab 2', content: 'Tab 2 Content' },
                { title: 'Tab 3', content: 'Tab 3 Content' }
            ],
            code: {
                basic: `
<TabView>
    <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
        <p class="m-0">{{ tab.content }}</p>
    </TabPanel>
</TabView>
`,
                options: `
<template>
    <div class="card">
        <TabView>
            <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p class="m-0">{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                { title: 'Tab 1', content: 'Tab 1 Content' },
                { title: 'Tab 2', content: 'Tab 2 Content' },
                { title: 'Tab 3', content: 'Tab 3 Content' }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <TabView>
            <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p class="m-0">{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref([
    { title: 'Tab 1', content: 'Tab 1 Content' },
    { title: 'Tab 2', content: 'Tab 2 Content' },
    { title: 'Tab 3', content: 'Tab 3 Content' }
]);
<\/script>
`
            }
        };
    }
};
</script>
