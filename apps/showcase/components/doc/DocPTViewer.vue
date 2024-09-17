<template>
    <div ref="container" class="doc-ptviewerwrapper card">
        <div id="doc-ptviewer" class="doc-ptviewer">
            <slot />
        </div>
        <div class="doc-ptoptions">
            <template v-if="docs[0].data">
                <template v-for="doc of docs" :key="doc.key">
                    <div v-for="item of handleData(doc.data)" :key="item.value" class="doc-ptoption" @mouseenter="enterSection(item, doc.key)" @mouseleave="leaveSection">
                        <span class="doc-ptoption-text">
                            {{ item.label }}
                            <template v-if="docs.length > 1">| {{ doc.key }}</template>
                        </span>
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
            let selector,
                cmpName = componentName;

            if (componentName === 'ConfirmDialog') cmpName = 'Dialog';
            else if (componentName === 'ScrollTop') cmpName = 'Button';

            if (item.label === 'root') selector = `[data-pc-name="${cmpName.toLowerCase()}"]`;
            else if (item.label.startsWith('pc')) selector = `[data-pc-name="${item.label.toLowerCase()}"]`;
            else selector = `[data-pc-section="${item.label.toLowerCase()}"]`;

            this.hoveredElements = find(this.$refs.container, selector);

            if (this.hoveredElements.length === 0) this.hoveredElements = find(document.querySelector('body'), selector); //TODO:

            this.hoveredElements?.forEach((el) => {
                addClass(el, '!ring !ring-blue-500 !z-10');
            });
        },
        leaveSection() {
            this.hoveredElements.forEach((el) => {
                removeClass(el, '!ring !ring-blue-500 !z-10');
            });

            this.hoveredElements = [];
        },
        handleData(doc) {
            return doc.filter((item) => item.label !== 'hooks' && item.label !== 'transition');
        }
    }
};
</script>
