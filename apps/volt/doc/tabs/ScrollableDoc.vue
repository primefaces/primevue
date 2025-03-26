<template>
    <DocSectionText v-bind="$attrs">
        <p>Adding <i>scrollable</i> property displays navigational buttons at each side to scroll between tabs.</p>
    </DocSectionText>
    <div class="card">
        <Tabs value="0" scrollable>
            <TabList>
                <Tab v-for="tab in scrollableTabs" :key="tab.title" :value="tab.value">
                    {{ tab.title }}
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel v-for="tab in scrollableTabs" :key="tab.content" :value="tab.value">
                    <p class="m-0!">{{ tab.content }}</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Tab from '@/volt/Tab.vue';
import TabList from '@/volt/TabList.vue';
import TabPanel from '@/volt/TabPanel.vue';
import TabPanels from '@/volt/TabPanels.vue';
import Tabs from '@/volt/Tabs.vue';
import { ref } from 'vue';

const scrollableTabs = ref(Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content`, value: `${i}` })));

const code = ref(`
<template>
    <div class="card">
        <Tabs value="0" scrollable>
            <TabList>
                <Tab v-for="tab in scrollableTabs" :key="tab.title" :value="tab.value">
                    {{ tab.title }}
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel v-for="tab in scrollableTabs" :key="tab.content" :value="tab.value">
                    <p>{{ tab.content }}</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup lang="ts">
import Tabs from '@/volt/Tabs.vue';
import TabList from '@/volt/TabList.vue';
import Tab from '@/volt/Tab.vue';
import TabPanels from '@/volt/TabPanels.vue';
import TabPanel from '@/volt/TabPanel.vue';
import { ref } from 'vue';

const scrollableTabs = ref(Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\`, value: \`\${i}\` })));
<\/script>
`);
</script>
