<template>
    <DocSectionText v-bind="$attrs">
        <p>Tabs can be generated dynamically using the standard <i>v-for</i> directive on Tab and TabPanel.</p>
    </DocSectionText>
    <div class="card">
        <Tabs value="0">
            <TabList>
                <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">{{ tab.title }}</Tab>
            </TabList>
            <TabPanels>
                <TabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
                    <p class="m-0">{{ tab.content }}</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                { title: 'Tab 1', content: 'Tab 1 Content', value: '0' },
                { title: 'Tab 2', content: 'Tab 2 Content', value: '1' },
                { title: 'Tab 3', content: 'Tab 3 Content', value: '2' }
            ],
            code: {
                basic: `
<Tabs value="0">
    <TabList>
        <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">{{ tab.title }}</Tab>
    </TabList>
    <TabPanels>
        <TabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
            <p class="m-0">{{ tab.content }}</p>
        </TabPanel>
    </TabPanels>
</Tabs>
`,
                options: `
<template>
    <div class="card">
        <Tabs value="0">
            <TabList>
                <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">{{ tab.title }}</Tab>
            </TabList>
            <TabPanels>
                <TabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
                    <p class="m-0">{{ tab.content }}</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                { title: 'Tab 1', content: 'Tab 1 Content', value: '0' },
                { title: 'Tab 2', content: 'Tab 2 Content', value: '1' },
                { title: 'Tab 3', content: 'Tab 3 Content', value: '2' }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Tabs value="0">
            <TabList>
                <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">{{ tab.title }}</Tab>
            </TabList>
            <TabPanels>
                <TabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
                    <p class="m-0">{{ tab.content }}</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref([
    { title: 'Tab 1', content: 'Tab 1 Content', value: '0' },
    { title: 'Tab 2', content: 'Tab 2 Content', value: '1' },
    { title: 'Tab 3', content: 'Tab 3 Content', value: '2' }
]);
<\/script>
`
            }
        };
    }
};
</script>
