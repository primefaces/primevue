<template>
    <div ref="container" class="card flex flex-col md:flex-row !p-0">
        <div class="flex items-center justify-center md:border-r border-b md:border-b-0 border-surface md:w-3/4 w-full p-4">
            <slot />
        </div>
        <div class="flex flex-col gap-2 p-8 md:p-2 md:w-1/4 w-full max-h-[720px] overflow-y-auto">
            <template v-if="docs[0].data">
                <template v-for="doc of docs" :key="doc.key">
                    <div v-for="item of handleData(doc.data)" :key="item.value" class="flex flex-col p-2 cursor-pointer hover:bg-emphasis" @mouseenter="enterSection(item, doc.key)" @mouseleave="leaveSection">
                        <span>{{ item.label }}</span>
                        <span class="text-muted-color text-sm">{{ item.label }} element of {{ doc.key }} component</span>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
import { addClass, find, removeClass } from '@primeuix/utils/dom';

export default {
    props: ['docs'],
    data() {
        return {
            hoveredElements: []
        };
    },
    methods: {
        enterSection(item, componentName) {
            let selector;

            if (item.label === 'root') selector = `[data-pc-name="${componentName.toLowerCase()}"]`;
            else if (item.label.startsWith('pc')) selector = `[data-pc-name="${item.label.toLowerCase()}"]`;
            else selector = `[data-pc-section="${item.label.toLowerCase()}"]`;

            this.hoveredElements = find(this.$refs.container, selector);

            this.hoveredElements.forEach((el) => {
                addClass(el, '!ring !ring-red-500');
            });
        },
        leaveSection() {
            this.hoveredElements.forEach((el) => {
                removeClass(el, '!ring !ring-red-500');
            });

            this.hoveredElements = [];
        },
        handleData(doc) {
            return doc.filter((item) => item.label !== 'hooks' && item.label !== 'transition');
        }
    }
};
</script>
