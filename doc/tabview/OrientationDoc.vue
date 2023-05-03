<template>
    <DocSectionText v-bind="$attrs">
        <p>Tabs orientation can be changed to vertical by set <i> isVertical </i> props to true </p>
    </DocSectionText>
    <div class="card">
        <TabView :isVertical="true">
            <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
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
            tabs: [
                { title: 'Tab 1', content: 'Tab 1 Lorem ipsum dolor sit amet' },
                { title: 'Tab 2', content: 'Tab 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
                { title: 'Tab 3', content: 'Tab 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' }
            ],
            code: {
                basic: `
<TabView :isVertical="true">
    <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
        <p>{{ tab.content }}</p>
    </TabPanel>
</TabView>`,
                options: `
<template>
    <div class="card">
        <TabView :isVertical="true">
            <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p>{{ tab.content }}</p>
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
<\/script>`,
                composition: `
<template>
    <div class="card">
        <TabView :isVertical="true">
            <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p>{{ tab.content }}</p>
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
<\/script>`
            }
        };
    }
};
</script>
