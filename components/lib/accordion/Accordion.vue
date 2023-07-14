<template>
    <div :class="cx('root')" v-bind="ptm('root')">
        <div v-for="(tab, i) of tabs" :key="getKey(tab, i)" :class="cx('tab.root', { tab, index: i })" v-bind="getTabPT(tab, 'root', i)" data-pc-name="accordiontab" :data-pc-index="i" :data-p-active="isTabActive(i)">
            <div
                :style="getTabProp(tab, 'headerStyle')"
                :class="[cx('tab.header', { tab, index: i }), getTabProp(tab, 'headerClass')]"
                v-bind="{ ...getTabProp(tab, 'headerProps'), ...getTabPT(tab, 'header', i) }"
                :data-p-highlight="isTabActive(i)"
                :data-p-disabled="getTabProp(tab, 'disabled')"
            >
                <a
                    :id="getTabHeaderActionId(i)"
                    :class="cx('tab.headerAction')"
                    :tabindex="getTabProp(tab, 'disabled') ? -1 : tabindex"
                    role="button"
                    :aria-disabled="getTabProp(tab, 'disabled')"
                    :aria-expanded="isTabActive(i)"
                    :aria-controls="getTabContentId(i)"
                    @click="onTabClick($event, tab, i)"
                    @keydown="onTabKeyDown($event, tab, i)"
                    v-bind="{ ...getTabProp(tab, 'headeractionprops'), ...getTabPT(tab, 'headeraction', i) }"
                >
                    <component v-if="tab.children && tab.children.headericon" :is="tab.children.headericon" :isTabActive="isTabActive(i)" :index="i"></component>
                    <component v-else-if="isTabActive(i)" :is="collapseIcon ? 'span' : 'ChevronDownIcon'" :class="[cx('tab.headerIcon'), collapseIcon]" aria-hidden="true" v-bind="getTabPT(tab, 'headericon', i)" />
                    <component v-else :is="expandIcon ? 'span' : 'ChevronRightIcon'" :class="[cx('tab.headerIcon'), expandIcon]" aria-hidden="true" v-bind="getTabPT(tab, 'headericon', i)" />
                    <span v-if="tab.props && tab.props.header" :class="cx('tab.headerTitle')" v-bind="getTabPT(tab, 'headertitle', i)">{{ tab.props.header }}</span>
                    <component v-if="tab.children && tab.children.header" :is="tab.children.header"></component>
                </a>
            </div>
            <transition name="p-toggleable-content">
                <div
                    v-if="lazy ? isTabActive(i) : true"
                    v-show="lazy ? true : isTabActive(i)"
                    :id="getTabContentId(i)"
                    :style="getTabProp(tab, 'contentStyle')"
                    :class="[cx('tab.toggleableContent'), getTabProp(tab, 'contentClass')]"
                    role="region"
                    :aria-labelledby="getTabHeaderActionId(i)"
                    v-bind="{ ...getTabProp(tab, 'contentProps'), ...getTabPT(tab, 'toggleablecontent', i) }"
                >
                    <div :class="cx('tab.content')" v-bind="getTabPT(tab, 'content', i)">
                        <component :is="tab"></component>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import ChevronDownIcon from 'primevue/icons/chevrondown';
import ChevronRightIcon from 'primevue/icons/chevronright';
import Ripple from 'primevue/ripple';
import { DomHandler, UniqueComponentId } from 'primevue/utils';
import { mergeProps } from 'vue';
import BaseAccordion from './BaseAccordion.vue';

export default {
    name: 'Accordion',
    extends: BaseAccordion,
    emits: ['update:activeIndex', 'tab-open', 'tab-close', 'tab-click'],
    data() {
        return {
            id: this.$attrs.id,
            d_activeIndex: this.activeIndex
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        },
        activeIndex(newValue) {
            this.d_activeIndex = newValue;
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();
    },
    methods: {
        isAccordionTab(child) {
            return child.type.name === 'AccordionTab';
        },
        isTabActive(index) {
            return this.multiple ? this.d_activeIndex && this.d_activeIndex.includes(index) : this.d_activeIndex === index;
        },
        getTabProp(tab, name) {
            return tab.props ? tab.props[name] : undefined;
        },
        getKey(tab, index) {
            return this.getTabProp(tab, 'header') || index;
        },
        getTabHeaderActionId(index) {
            return `${this.id}_${index}_header_action`;
        },
        getTabContentId(index) {
            return `${this.id}_${index}_content`;
        },
        getTabPT(tab, key, index) {
            const count = this.tabs.length;
            const tabMetaData = {
                props: tab.props || {},
                parent: {
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index,
                    count,
                    first: index === 0,
                    last: index === count - 1,
                    active: this.isTabActive(index)
                }
            };

            return mergeProps(this.ptm(`tab.${key}`, { tab: tabMetaData }), this.ptm(`accordiontab.${key}`, { accordiontab: tabMetaData }), this.ptm(`accordiontab.${key}`, tabMetaData), this.ptmo(this.getTabProp(tab, 'pt'), key, tabMetaData));
        },
        onTabClick(event, tab, index) {
            this.changeActiveIndex(event, tab, index);
            this.$emit('tab-click', { originalEvent: event, index });
        },
        onTabKeyDown(event, tab, index) {
            switch (event.code) {
                case 'ArrowDown':
                    this.onTabArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    this.onTabArrowUpKey(event);
                    break;

                case 'Home':
                    this.onTabHomeKey(event);
                    break;

                case 'End':
                    this.onTabEndKey(event);
                    break;

                case 'Enter':
                case 'Space':
                    this.onTabEnterKey(event, tab, index);
                    break;

                default:
                    break;
            }
        },
        onTabArrowDownKey(event) {
            const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement.parentElement);

            nextHeaderAction ? this.changeFocusedTab(event, nextHeaderAction) : this.onTabHomeKey(event);
            event.preventDefault();
        },
        onTabArrowUpKey(event) {
            const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement.parentElement);

            prevHeaderAction ? this.changeFocusedTab(event, prevHeaderAction) : this.onTabEndKey(event);
            event.preventDefault();
        },
        onTabHomeKey(event) {
            const firstHeaderAction = this.findFirstHeaderAction();

            this.changeFocusedTab(event, firstHeaderAction);
            event.preventDefault();
        },
        onTabEndKey(event) {
            const lastHeaderAction = this.findLastHeaderAction();

            this.changeFocusedTab(event, lastHeaderAction);
            event.preventDefault();
        },
        onTabEnterKey(event, tab, index) {
            this.changeActiveIndex(event, tab, index);

            event.preventDefault();
        },
        findNextHeaderAction(tabElement, selfCheck = false) {
            const nextTabElement = selfCheck ? tabElement : tabElement.nextElementSibling;
            const headerElement = DomHandler.findSingle(nextTabElement, '[data-pc-section="header"]');

            return headerElement ? (DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findNextHeaderAction(headerElement.parentElement) : DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]')) : null;
        },
        findPrevHeaderAction(tabElement, selfCheck = false) {
            const prevTabElement = selfCheck ? tabElement : tabElement.previousElementSibling;
            const headerElement = DomHandler.findSingle(prevTabElement, '[data-pc-section="header"]');

            return headerElement ? (DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findPrevHeaderAction(headerElement.parentElement) : DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]')) : null;
        },
        findFirstHeaderAction() {
            return this.findNextHeaderAction(this.$el.firstElementChild, true);
        },
        findLastHeaderAction() {
            return this.findPrevHeaderAction(this.$el.lastElementChild, true);
        },
        changeActiveIndex(event, tab, index) {
            if (!this.getTabProp(tab, 'disabled')) {
                const active = this.isTabActive(index);
                const eventName = active ? 'tab-close' : 'tab-open';

                if (this.multiple) {
                    if (active) {
                        this.d_activeIndex = this.d_activeIndex.filter((i) => i !== index);
                    } else {
                        if (this.d_activeIndex) this.d_activeIndex.push(index);
                        else this.d_activeIndex = [index];
                    }
                } else {
                    this.d_activeIndex = this.d_activeIndex === index ? null : index;
                }

                this.$emit('update:activeIndex', this.d_activeIndex);
                this.$emit(eventName, { originalEvent: event, index });
            }
        },
        changeFocusedTab(event, element) {
            if (element) {
                DomHandler.focus(element);

                if (this.selectOnFocus) {
                    const index = parseInt(element.parentElement.parentElement.dataset.pcIndex, 10);
                    const tab = this.tabs[index];

                    this.changeActiveIndex(event, tab, index);
                }
            }
        }
    },
    computed: {
        tabs() {
            return this.$slots.default().reduce((tabs, child) => {
                if (this.isAccordionTab(child)) {
                    tabs.push(child);
                } else if (child.children && child.children instanceof Array) {
                    child.children.forEach((nestedChild) => {
                        if (this.isAccordionTab(nestedChild)) {
                            tabs.push(nestedChild);
                        }
                    });
                }

                return tabs;
            }, []);
        }
    },
    components: {
        ChevronDownIcon,
        ChevronRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
