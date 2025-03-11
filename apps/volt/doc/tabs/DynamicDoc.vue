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
                    <p class="m-0!">{{ tab.content }}</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Tabs from '@/volt/tabs';
import Tab from '@/volt/tabs/tab';
import TabList from '@/volt/tabs/tablist';
import TabPanel from '@/volt/tabs/tabpanel';
import TabPanels from '@/volt/tabs/tabpanels';
import { ref } from 'vue';

const tabs = ref([
    { title: 'Tab 1', content: 'Tab 1 Content', value: '0' },
    { title: 'Tab 2', content: 'Tab 2 Content', value: '1' },
    { title: 'Tab 3', content: 'Tab 3 Content', value: '2' }
]);

const code = ref(`
<template>
    <div class="card">
        <Tabs value="0">
            <TabList>
                <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">{{ tab.title }}</Tab>
            </TabList>
            <TabPanels>
                <TabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
                    <p>{{ tab.content }}</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import Tabs from '@/volt/tabs';
import TabList from '@/volt/tabs/tablist';
import Tab from '@/volt/tabs/tab';
import TabPanels from '@/volt/tabs/tabpanels';
import TabPanel from '@/volt/tabs/tabpanel';
import { ref } from 'vue';

const tabs = ref([
    { title: 'Tab 1', content: 'Tab 1 Content', value: '0' },
    { title: 'Tab 2', content: 'Tab 2 Content', value: '1' },
    { title: 'Tab 3', content: 'Tab 3 Content', value: '2' }
]);
<\/script>
`);
</script>
