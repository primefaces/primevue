<template>
    <div :class="contentClasses" v-bind="ptm('root')">
        <div class="p-tabview-nav-container" v-bind="ptm('navcontainer')">
            <button
                v-if="scrollable && !isPrevButtonDisabled"
                ref="prevBtn"
                v-ripple
                type="button"
                class="p-tabview-nav-prev p-tabview-nav-btn p-link"
                :tabindex="tabindex"
                :aria-label="prevButtonAriaLabel"
                @click="onPrevButtonClick"
                v-bind="{ ...previousButtonProps, ...ptm('prevbutton') }"
            >
                <slot name="previcon">
                    <component :is="prevIcon ? 'span' : 'ChevronLeftIcon'" aria-hidden="true" :class="prevIcon" v-bind="ptm('previcon')" />
                </slot>
            </button>
            <div ref="content" class="p-tabview-nav-content" @scroll="onScroll" v-bind="ptm('navcontent')">
                <ul ref="nav" class="p-tabview-nav" role="tablist" v-bind="ptm('nav')">
                    <li
                        v-for="(tab, i) of tabs"
                        :key="getKey(tab, i)"
                        :style="getTabProp(tab, 'headerStyle')"
                        :class="getTabHeaderClass(tab, i)"
                        role="presentation"
                        :data-index="i"
                        v-bind="{ ...getTabProp(tab, 'headerProps'), ...getTabPT(tab, 'root'), ...getTabPT(tab, 'header') }"
                    >
                        <a
                            :id="getTabHeaderActionId(i)"
                            v-ripple
                            class="p-tabview-nav-link p-tabview-header-action"
                            :tabindex="getTabProp(tab, 'disabled') || !isTabActive(i) ? -1 : tabindex"
                            role="tab"
                            :aria-disabled="getTabProp(tab, 'disabled')"
                            :aria-selected="isTabActive(i)"
                            :aria-controls="getTabContentId(i)"
                            @click="onTabClick($event, tab, i)"
                            @keydown="onTabKeyDown($event, tab, i)"
                            v-bind="{ ...getTabProp(tab, 'headerActionProps'), ...getTabPT(tab, 'headeraction') }"
                        >
                            <span v-if="tab.props && tab.props.header" class="p-tabview-title" v-bind="getTabPT(tab, 'headertitle')">{{ tab.props.header }}</span>
                            <component v-if="tab.children && tab.children.header" :is="tab.children.header"></component>
                        </a>
                    </li>
                    <li ref="inkbar" class="p-tabview-ink-bar" role="presentation" aria-hidden="true" v-bind="ptm('inkbar')"></li>
                </ul>
            </div>
            <button
                v-if="scrollable && !isNextButtonDisabled"
                ref="nextBtn"
                v-ripple
                type="button"
                class="p-tabview-nav-next p-tabview-nav-btn p-link"
                :tabindex="tabindex"
                :aria-label="nextButtonAriaLabel"
                @click="onNextButtonClick"
                v-bind="{ ...nextButtonProps, ...ptm('nextbutton') }"
            >
                <slot name="nexticon">
                    <component :is="nextIcon ? 'span' : 'ChevronRightIcon'" aria-hidden="true" :class="nextIcon" v-bind="ptm('nexticon')" />
                </slot>
            </button>
        </div>
        <div class="p-tabview-panels" v-bind="ptm('panelcontainer')">
            <template v-for="(tab, i) of tabs" :key="getKey(tab, i)">
                <div
                    v-if="lazy ? isTabActive(i) : true"
                    v-show="lazy ? true : isTabActive(i)"
                    :style="getTabProp(tab, 'contentStyle')"
                    :class="getTabContentClass(tab)"
                    role="tabpanel"
                    :aria-labelledby="getTabHeaderActionId(i)"
                    v-bind="{ ...getTabProp(tab, 'contentProps'), ...getTabPT(tab, 'root'), ...getTabPT(tab, 'content') }"
                >
                    <component :is="tab"></component>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import ChevronLeftIcon from 'primevue/icons/chevronleft';
import ChevronRightIcon from 'primevue/icons/chevronright';
import Ripple from 'primevue/ripple';
import { DomHandler, UniqueComponentId } from 'primevue/utils';

export default {
    name: 'TabView',
    extends: BaseComponent,
    emits: ['update:activeIndex', 'tab-change', 'tab-click'],
    props: {
        activeIndex: {
            type: Number,
            default: 0
        },
        lazy: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        },
        previousButtonProps: {
            type: null,
            default: null
        },
        nextButtonProps: {
            type: null,
            default: null
        },
        prevIcon: {
            type: String,
            default: undefined
        },
        nextIcon: {
            type: String,
            default: undefined
        }
    },
    data() {
        return {
            id: this.$attrs.id,
            d_activeIndex: this.activeIndex,
            isPrevButtonDisabled: true,
            isNextButtonDisabled: false
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        },
        activeIndex(newValue) {
            this.d_activeIndex = newValue;

            this.scrollInView({ index: newValue });
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();

        this.updateInkBar();
        this.scrollable && this.updateButtonState();
    },
    updated() {
        this.updateInkBar();
    },
    methods: {
        isTabPanel(child) {
            return child.type.name === 'TabPanel';
        },
        isTabActive(index) {
            return this.d_activeIndex === index;
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
        onScroll(event) {
            this.scrollable && this.updateButtonState();

            event.preventDefault();
        },
        onPrevButtonClick() {
            const content = this.$refs.content;
            const width = DomHandler.getWidth(content);
            const pos = content.scrollLeft - width;

            content.scrollLeft = pos <= 0 ? 0 : pos;
        },
        onNextButtonClick() {
            const content = this.$refs.content;
            const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
            const pos = content.scrollLeft + width;
            const lastPos = content.scrollWidth - width;

            content.scrollLeft = pos >= lastPos ? lastPos : pos;
        },
        onTabClick(event, tab, index) {
            this.changeActiveIndex(event, tab, index);
            this.$emit('tab-click', { originalEvent: event, index });
        },
        onTabKeyDown(event, tab, index) {
            switch (event.code) {
                case 'ArrowLeft':
                    this.onTabArrowLeftKey(event);
                    break;

                case 'ArrowRight':
                    this.onTabArrowRightKey(event);
                    break;

                case 'Home':
                    this.onTabHomeKey(event);
                    break;

                case 'End':
                    this.onTabEndKey(event);
                    break;

                case 'PageDown':
                    this.onPageDownKey(event);
                    break;

                case 'PageUp':
                    this.onPageUpKey(event);
                    break;

                case 'Enter':
                case 'Space':
                    this.onTabEnterKey(event, tab, index);
                    break;

                default:
                    break;
            }
        },
        onTabArrowRightKey(event) {
            const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement);

            nextHeaderAction ? this.changeFocusedTab(event, nextHeaderAction) : this.onTabHomeKey(event);
            event.preventDefault();
        },
        onTabArrowLeftKey(event) {
            const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement);

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
        onPageDownKey(event) {
            this.scrollInView({ index: this.$refs.nav.children.length - 2 });
            event.preventDefault();
        },
        onPageUpKey(event) {
            this.scrollInView({ index: 0 });
            event.preventDefault();
        },
        onTabEnterKey(event, tab, index) {
            this.changeActiveIndex(event, tab, index);

            event.preventDefault();
        },
        findNextHeaderAction(tabElement, selfCheck = false) {
            const headerElement = selfCheck ? tabElement : tabElement.nextElementSibling;

            return headerElement
                ? DomHandler.hasClass(headerElement, 'p-disabled') || DomHandler.hasClass(headerElement, 'p-tabview-ink-bar')
                    ? this.findNextHeaderAction(headerElement)
                    : DomHandler.findSingle(headerElement, '.p-tabview-header-action')
                : null;
        },
        findPrevHeaderAction(tabElement, selfCheck = false) {
            const headerElement = selfCheck ? tabElement : tabElement.previousElementSibling;

            return headerElement
                ? DomHandler.hasClass(headerElement, 'p-disabled') || DomHandler.hasClass(headerElement, 'p-tabview-ink-bar')
                    ? this.findPrevHeaderAction(headerElement)
                    : DomHandler.findSingle(headerElement, '.p-tabview-header-action')
                : null;
        },
        findFirstHeaderAction() {
            return this.findNextHeaderAction(this.$refs.nav.firstElementChild, true);
        },
        findLastHeaderAction() {
            return this.findPrevHeaderAction(this.$refs.nav.lastElementChild, true);
        },
        changeActiveIndex(event, tab, index) {
            if (!this.getTabProp(tab, 'disabled') && this.d_activeIndex !== index) {
                this.d_activeIndex = index;

                this.$emit('update:activeIndex', index);
                this.$emit('tab-change', { originalEvent: event, index });

                this.scrollInView({ index });
            }
        },
        changeFocusedTab(event, element) {
            if (element) {
                DomHandler.focus(element);
                this.scrollInView({ element });

                if (this.selectOnFocus) {
                    const index = parseInt(element.parentElement.dataset.index, 10);
                    const tab = this.tabs[index];

                    this.changeActiveIndex(event, tab, index);
                }
            }
        },
        scrollInView({ element, index = -1 }) {
            const currentElement = element || this.$refs.nav.children[index];

            if (currentElement) {
                currentElement.scrollIntoView && currentElement.scrollIntoView({ block: 'nearest' });
            }
        },
        updateInkBar() {
            let tabHeader = this.$refs.nav.children[this.d_activeIndex];

            this.$refs.inkbar.style.width = DomHandler.getWidth(tabHeader) + 'px';
            this.$refs.inkbar.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.$refs.nav).left + 'px';
        },
        updateButtonState() {
            const content = this.$refs.content;
            const { scrollLeft, scrollWidth } = content;
            const width = DomHandler.getWidth(content);

            this.isPrevButtonDisabled = scrollLeft === 0;
            this.isNextButtonDisabled = parseInt(scrollLeft) === scrollWidth - width;
        },
        getVisibleButtonWidths() {
            const { prevBtn, nextBtn } = this.$refs;

            return [prevBtn, nextBtn].reduce((acc, el) => (el ? acc + DomHandler.getWidth(el) : acc), 0);
        },
        getTabHeaderClass(tab, i) {
            return [
                'p-tabview-header',
                this.getTabProp(tab, 'headerClass'),
                {
                    'p-highlight': this.d_activeIndex === i,
                    'p-disabled': this.getTabProp(tab, 'disabled')
                }
            ];
        },
        getTabContentClass(tab) {
            return ['p-tabview-panel', this.getTabProp(tab, 'contentClass')];
        }
    },
    computed: {
        contentClasses() {
            return [
                'p-tabview p-component',
                {
                    'p-tabview-scrollable': this.scrollable
                }
            ];
        },
        tabs() {
            return this.$slots.default().reduce((tabs, child) => {
                if (this.isTabPanel(child)) {
                    tabs.push(child);
                } else if (child.children && child.children instanceof Array) {
                    child.children.forEach((nestedChild) => {
                        if (this.isTabPanel(nestedChild)) {
                            tabs.push(nestedChild);
                        }
                    });
                }

                return tabs;
            }, []);
        },
        prevButtonAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.previous : undefined;
        },
        nextButtonAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.next : undefined;
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        ChevronLeftIcon,
        ChevronRightIcon
    }
};
</script>

<style>
.p-tabview-nav-container {
    position: relative;
}

.p-tabview-scrollable .p-tabview-nav-container {
    overflow: hidden;
}

.p-tabview-nav-content {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tabview-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
}

.p-tabview-header-action {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    overflow: hidden;
}

.p-tabview-ink-bar {
    display: none;
    z-index: 1;
}

.p-tabview-header-action:focus {
    z-index: 1;
}

.p-tabview-title {
    line-height: 1;
    white-space: nowrap;
}

.p-tabview-nav-btn {
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-tabview-nav-prev {
    left: 0;
}

.p-tabview-nav-next {
    right: 0;
}

.p-tabview-nav-content::-webkit-scrollbar {
    display: none;
}
</style>
