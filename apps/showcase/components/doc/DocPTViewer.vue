<template>
    <DocSectionText v-bind="$attrs">
        <p>The Pass Through attributes is an API to access the internal DOM Structure of the components. Visit the <NuxtLink to="/passthrough">Pass Through</NuxtLink> documentation for more information.</p>
        <p>Some sections may not be visible due to the availability of the particular feature. Section names that start with the <i>pc</i> prefix indicate that the element is a PrimeVue component not a DOM element.</p>
    </DocSectionText>
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
                            {{ findComponentName(item.label, doc) }}
                        </span>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
import { addClass, find, removeClass } from '@primeuix/utils/dom';
import { defaultOptions } from '@primevue/core/config';

export default {
    props: ['docs'],
    data() {
        return {
            hoveredElements: []
        };
    },
    methods: {
        findComponentName(label, doc) {
            let text = '';

            if (this.docs.length > 1) {
                text += `| ${doc.key}`;
            }

            if (label.includes('pc')) {
                let reservedNames = ['Decrement', 'File', 'Increment', 'JumpToPage', 'Maximize', 'Node', 'Option', 'Prev', 'Remove', 'RowPerPage', 'Source', 'Target', 'MoveAllTo', 'MoveAll', 'MoveTop', 'MoveTo']; // the order of this list is important!
                let whiteList = [...reservedNames, ...Object.keys(defaultOptions.locale), ...Object.keys(defaultOptions.locale.aria)];
                let elemName = label.replace('pc', '');

                if (elemName.includes('FilterContainer')) elemName = elemName.replace('FilterContainer', 'IconField');
                else if (elemName.includes('FilterIconContainer')) elemName = elemName.replace('FilterIconContainer', 'InputIcon');
                else if (elemName.includes('Filter')) elemName = elemName.replace('Filter', 'InputText');

                if (elemName.includes('Action')) elemName = elemName.replace('Action', 'Button');
                if (elemName.includes('Dropdown')) elemName = elemName.replace('Dropdown', 'Select');

                for (const word of whiteList) {
                    if (elemName.toLowerCase().includes(word.toLowerCase())) {
                        const regex = new RegExp(word, 'gi');

                        elemName = elemName.replace(regex, '');
                    }
                }

                text += ` | ${elemName}`;
            }

            return text;
        },
        enterSection(item, componentName) {
            let selector,
                cmpName = componentName;

            if (componentName === 'ConfirmDialog') cmpName = 'Dialog';
            else if (componentName === 'Galleria') cmpName = 'GalleriaContent';

            if (componentName === 'ScrollTop') selector = `[data-pc-extend="button"][data-pc-section="root"]`;
            else if (item.label === 'root') selector = `[data-pc-name="${cmpName.toLowerCase()}"]`;
            else if (item.label.startsWith('pc')) selector = `[data-pc-name="${item.label.toLowerCase()}"]`;
            else if (componentName === 'InputMask') selector = `[data-pc-name="inputtext"][data-pc-section="root"]`;
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
            return doc.filter((item) => item.label !== 'hooks' && item.label !== 'transition' && !item.label.includes('hidden'));
        }
    }
};
</script>
