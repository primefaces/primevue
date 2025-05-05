<template>
    <div class="p-6 shadow-lg border border-transparent dark:border-surface-800 bg-surface-0 dark:bg-surface-900">
        <Tabs value="0">
            <TabList>
                <Tab value="0" class="grow">Overview</Tab>
                <Tab value="1" class="grow">Timeline</Tab>
            </TabList>
            <TabPanels class="!px-0">
                <TabPanel value="0">
                    <span class="block font-medium text-surface-900 dark:text-surface-0 mb-3">Chatbot & Cloud Migration</span>
                    <div class="flex flex-wrap items-center gap-2 mb-3">
                        <Chip label="In Progress" icon="pi pi-spinner" />
                        <Chip label="Q2" icon="pi pi-calendar" />
                    </div>
                    <span class="block mb-3 text-muted-color">This project is currently in progress, with key milestones in design and development phases.</span>
                    <MeterGroup :value="progress" class="mb-3" />
                </TabPanel>
                <TabPanel value="1">
                    <Timeline :value="events" class="mt-2">
                        <template #opposite="slotProps">
                            <small class="text-surface-500 dark:text-surface-400">{{ slotProps.item.date }}</small>
                        </template>
                        <template #content="slotProps">
                            {{ slotProps.item.status }}
                        </template>
                    </Timeline>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup lang="ts">
import Chip from '@/volt/Chip.vue';
import MeterGroup from '@/volt/MeterGroup.vue';
import Tab from '@/volt/Tab.vue';
import TabList from '@/volt/TabList.vue';
import TabPanel from '@/volt/TabPanel.vue';
import TabPanels from '@/volt/TabPanels.vue';
import Tabs from '@/volt/Tabs.vue';
import Timeline from '@/volt/Timeline.vue';

const progress = ref([{ label: 'Progress', value: 50, color: 'var(--p-primary-color)' }]);

const today = new Date().toLocaleDateString('en-US');

const events = ref([
    { status: 'Initialize', date: today + ' 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
    { status: 'Migration', date: today + ' 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Verified', date: today + ' 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Deployment', date: today + ' 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);
</script>
