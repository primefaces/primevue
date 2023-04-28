<template>
    <div class="p-accordion p-component" v-bind="ptm('root')">
        <div v-for="(tab, i) of tabs" :key="getKey(tab, i)" :class="getTabClass(i)" :data-index="i" v-bind="getTabPT(tab, 'root')">
            <div :style="getTabProp(tab, 'headerStyle')" :class="getTabHeaderClass(tab, i)" v-bind="{ ...getTabProp(tab, 'headerProps'), ...getTabPT(tab, 'header') }">
                <a
                    :id="getTabHeaderActionId(i)"
                    class="p-accordion-header-link p-accordion-header-action"
                    :tabindex="getTabProp(tab, 'disabled') ? -1 : tabindex"
                    role="button"
                    :aria-disabled="getTabProp(tab, 'disabled')"
                    :aria-expanded="isTabActive(i)"
                    :aria-controls="getTabContentId(i)"
                    @click="onTabClick($event, tab, i)"
                    @keydown="onTabKeyDown($event, tab, i)"
                    v-bind="{ ...getTabProp(tab, 'headeractionprops'), ...getTabPT(tab, 'headeraction') }"
                >
                    <component v-if="tab.children && tab.children.headericon" :is="tab.children.headericon" :isTabActive="isTabActive(i)" :index="i"></component>
                    <component v-else-if="isTabActive(i)" :is="collapseIcon ? 'span' : 'ChevronDownIcon'" :class="['p-accordion-toggle-icon', collapseIcon]" aria-hidden="true" v-bind="getTabPT(tab, 'headericon')" />
                    <component v-else :is="expandIcon ? 'span' : 'ChevronRightIcon'" :class="['p-accordion-toggle-icon', expandIcon]" aria-hidden="true" v-bind="getTabPT(tab, 'headericon')" />
                    <span v-if="tab.props && tab.props.header" class="p-accordion-header-text" v-bind="getTabPT(tab, 'headertitle')">{{ tab.props.header }}</span>
                    <component v-if="tab.children && tab.children.header" :is="tab.children.header"></component>
                </a>
            </div>
            <transition name="p-toggleable-content">
                <div
                    v-if="lazy ? isTabActive(i) : true"
                    v-show="lazy ? true : isTabActive(i)"
                    :id="getTabContentId(i)"
                    :style="getTabProp(tab, 'contentStyle')"
                    :class="getTabContentClass(tab)"
                    role="region"
                    :aria-labelledby="getTabHeaderActionId(i)"
                    v-bind="{ ...getTabProp(tab, 'contentProps'), ...getTabPT(tab, 'toggleablecontent') }"
                >
                    <div class="p-accordion-content" v-bind="getTabPT(tab, 'content')">
                        <component :is="tab"></component>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import ChevronDownIcon from 'primevue/icons/chevrondown';
import ChevronRightIcon from 'primevue/icons/chevronright';
import Ripple from 'primevue/ripple';
import { DomHandler, UniqueComponentId } from 'primevue/utils';

export default {
    name: 'Accordion',
    extends: BaseComponent,
    emits: ['update:activeIndex', 'tab-open', 'tab-close', 'tab-click'],
    props: {
        multiple: {
            type: Boolean,
            default: false
        },
        activeIndex: {
            type: [Number, Array],
            default: null
        },
        lazy: {
            type: Boolean,
            default: false
        },
        expandIcon: {
            type: String,
            default: undefined
        },
        collapseIcon: {
            type: String,
            default: undefined
        },
        tabindex: {
            type: Number,
            default: 0
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        }
    },
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
        getTabPT(tab, key) {
            return this.ptmo(this.getTabProp(tab, 'pt'), key, {
                props: tab.props,
                parent: {
                    props: this.$props,
                    state: this.$data
                }
            });
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
            const headerElement = DomHandler.findSingle(nextTabElement, '.p-accordion-header');

            return headerElement ? (DomHandler.hasClass(headerElement, 'p-disabled') ? this.findNextHeaderAction(headerElement.parentElement) : DomHandler.findSingle(headerElement, '.p-accordion-header-action')) : null;
        },
        findPrevHeaderAction(tabElement, selfCheck = false) {
            const prevTabElement = selfCheck ? tabElement : tabElement.previousElementSibling;
            const headerElement = DomHandler.findSingle(prevTabElement, '.p-accordion-header');

            return headerElement ? (DomHandler.hasClass(headerElement, 'p-disabled') ? this.findPrevHeaderAction(headerElement.parentElement) : DomHandler.findSingle(headerElement, '.p-accordion-header-action')) : null;
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
                    const index = parseInt(element.parentElement.parentElement.dataset.index, 10);
                    const tab = this.tabs[index];

                    this.changeActiveIndex(event, tab, index);
                }
            }
        },
        getTabClass(i) {
            return [
                'p-accordion-tab',
                {
                    'p-accordion-tab-active': this.isTabActive(i)
                }
            ];
        },
        getTabHeaderClass(tab, i) {
            return [
                'p-accordion-header',
                this.getTabProp(tab, 'headerClass'),
                {
                    'p-highlight': this.isTabActive(i),
                    'p-disabled': this.getTabProp(tab, 'disabled')
                }
            ];
        },
        getTabContentClass(tab) {
            return ['p-toggleable-content', this.getTabProp(tab, 'contentClass')];
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

<style>
.p-accordion-header-action {
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;
    text-decoration: none;
}

.p-accordion-header-action:focus {
    z-index: 1;
}

.p-accordion-header-text {
    line-height: 1;
}
</style>
