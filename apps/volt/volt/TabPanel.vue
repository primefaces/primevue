<template>
    <TabPanel
        :value="props.value"
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </TabPanel>
</template>

<script setup lang="ts">
import TabPanel, { type TabPanelPassThroughOptions, type TabPanelProps } from 'primevue/tabpanel';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ TabPanelProps {}
const props = defineProps<Props>();

const theme = ref<TabPanelPassThroughOptions>({
    root: ``
});
</script>
