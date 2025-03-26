<template>
    <DocSectionText v-bind="$attrs">
        <p>
            A navigation menu is implemented using tabs without the panels where the content of a tab is provided by a route component like
            <a href="https://router.vuejs.org/guide/essentials/nested-routes#Nested-Named-Routes" target="_blank" rel="noopener noreferrer">router-view</a>. For the purpose of this demo, <i>router-view</i> is not included.
        </p>
    </DocSectionText>
    <div class="card">
        <Tabs value="/dashboard">
            <TabList>
                <Tab v-for="tab in items" :key="tab.label" :value="tab.route" as="div" class="flex items-center gap-2">
                    <i :class="tab.icon" />
                    <span>{{ tab.label }}</span>
                </Tab>
            </TabList>
        </Tabs>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Tab from '@/volt/Tab.vue';
import TabList from '@/volt/TabList.vue';
import Tabs from '@/volt/Tabs.vue';
import { ref } from 'vue';

const items = ref([
    { route: '/dashboard', label: 'Dashboard', icon: 'pi pi-home' },
    { route: '/transactions', label: 'Transactions', icon: 'pi pi-chart-line' },
    { route: '/products', label: 'Products', icon: 'pi pi-list' },
    { route: '/messages', label: 'Messages', icon: 'pi pi-inbox' }
]);

const code = ref(`
<template>
    <div class="card">
        <Tabs value="/dashboard">
            <TabList>
                <Tab v-for="tab in items" :key="tab.label" :value="tab.route" as="div" class="flex items-center gap-2">
                    <i :class="tab.icon" />
                    <span>{{ tab.label }}</span>
                </Tab>
            </TabList>
        </Tabs>
    </div>
</template>

<script setup>
import Tabs from '@/volt/Tabs.vue';
import Tab from '@/volt/Tab.vue';
import TabList from '@/volt/TabList.vue';
import { ref } from "vue";

const items = ref([
    { route: '/dashboard', label: 'Dashboard', icon: 'pi pi-home' },
    { route: '/transactions', label: 'Transactions', icon: 'pi pi-chart-line' },
    { route: '/products', label: 'Products', icon: 'pi pi-list' },
    { route: '/messages', label: 'Messages', icon: 'pi pi-inbox' }
]);
<\/script>
`);
</script>
