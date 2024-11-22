<template>
    <div ref="list" :class="cx('root')" v-bind="ptmi('root')">
        <button
            v-if="showNavigators && isPrevButtonEnabled"
            ref="prevButton"
            v-ripple
            :class="cx('prevButton')"
            :aria-label="prevButtonAriaLabel"
            :tabindex="$pcTabs.tabindex"
            @click="onPrevButtonClick"
            v-bind="ptm('prevButton')"
            data-pc-group-section="navigator"
        >
            <component :is="templates.previcon || 'ChevronLeftIcon'" aria-hidden="true" v-bind="ptm('prevIcon')" />
        </button>
        <div ref="content" :class="cx('content')" @scroll="onScroll" v-bind="ptm('content')">
            <div ref="tabs" :class="cx('tabList')" role="tablist" :aria-orientation="$pcTabs.orientation || 'horizontal'" v-bind="ptm('tabList')">
                <slot></slot>
                <span ref="inkbar" :class="cx('activeBar')" role="presentation" aria-hidden="true" v-bind="ptm('activeBar')"></span>
            </div>
        </div>
        <button
            v-if="showNavigators && isNextButtonEnabled"
            ref="nextButton"
            v-ripple
            :class="cx('nextButton')"
            :aria-label="nextButtonAriaLabel"
            :tabindex="$pcTabs.tabindex"
            @click="onNextButtonClick"
            v-bind="ptm('nextButton')"
            data-pc-group-section="navigator"
        >
            <component :is="templates.nexticon || 'ChevronRightIcon'" aria-hidden="true" v-bind="ptm('nextIcon')" />
        </button>
    </div>
</template>

<script>
import { findSingle, getHeight, getOffset, getOuterHeight, getOuterWidth, getWidth, isRTL } from '@primeuix/utils/dom';
import ChevronLeftIcon from '@primevue/icons/chevronleft';
import ChevronRightIcon from '@primevue/icons/chevronright';
import Ripple from 'primevue/ripple';
import BaseTabList from './BaseTabList.vue';

export default {
    name: 'TabList',
    extends: BaseTabList,
    inheritAttrs: false,
    inject: ['$pcTabs'],
    data() {
        return {
            isPrevButtonEnabled: false,
            isNextButtonEnabled: true
        };
    },
    resizeObserver: undefined,
    watch: {
        showNavigators(newValue) {
            newValue ? this.bindResizeObserver() : this.unbindResizeObserver();
        },
        activeValue: {
            flush: 'post',
            handler() {
                this.updateInkBar();
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.updateInkBar();
        });

        if (this.showNavigators) {
            this.updateButtonState();
            this.bindResizeObserver();
        }
    },
    updated() {
        this.showNavigators && this.updateButtonState();
    },
    beforeUnmount() {
        this.unbindResizeObserver();
    },
    methods: {
        onScroll(event) {
            this.showNavigators && this.updateButtonState();

            event.preventDefault();
        },
        onPrevButtonClick() {
            const content = this.$refs.content;
            const width = getWidth(content);
            const pos = Math.abs(content.scrollLeft) - width;
            const scrollLeft = pos <= 0 ? 0 : pos;

            content.scrollLeft = isRTL(content) ? -1 * scrollLeft : scrollLeft;
        },
        onNextButtonClick() {
            const content = this.$refs.content;
            const width = getWidth(content) - this.getVisibleButtonWidths();
            const pos = width + Math.abs(content.scrollLeft);
            const lastPos = content.scrollWidth - width;
            const scrollLeft = pos >= lastPos ? lastPos : pos;

            content.scrollLeft = isRTL(content) ? -1 * scrollLeft : scrollLeft;
        },
        bindResizeObserver() {
            this.resizeObserver = new ResizeObserver(() => this.updateButtonState());
            this.resizeObserver.observe(this.$refs.list);
        },
        unbindResizeObserver() {
            this.resizeObserver?.unobserve(this.$refs.list);
            this.resizeObserver = undefined;
        },
        updateInkBar() {
            const { content, inkbar, tabs } = this.$refs;
            const activeTab = findSingle(content, '[data-pc-name="tab"][data-p-active="true"]');

            if (this.$pcTabs.isVertical()) {
                inkbar.style.height = getOuterHeight(activeTab) + 'px';
                inkbar.style.top = getOffset(activeTab).top - getOffset(tabs).top + 'px';
            } else {
                inkbar.style.width = getOuterWidth(activeTab) + 'px';
                inkbar.style.left = getOffset(activeTab).left - getOffset(tabs).left + 'px';
            }
        },
        updateButtonState() {
            const { list, content } = this.$refs;
            const { scrollTop, scrollWidth, scrollHeight, offsetWidth, offsetHeight } = content;
            const scrollLeft = Math.abs(content.scrollLeft);
            const [width, height] = [getWidth(content), getHeight(content)];

            if (this.$pcTabs.isVertical()) {
                this.isPrevButtonEnabled = scrollTop !== 0;
                this.isNextButtonEnabled = list.offsetHeight >= offsetHeight && parseInt(scrollTop) !== scrollHeight - height;
            } else {
                this.isPrevButtonEnabled = scrollLeft !== 0;
                this.isNextButtonEnabled = list.offsetWidth >= offsetWidth && parseInt(scrollLeft) !== scrollWidth - width;
            }
        },
        getVisibleButtonWidths() {
            const { prevBtn, nextBtn } = this.$refs;

            return [prevBtn, nextBtn].reduce((acc, el) => (el ? acc + getWidth(el) : acc), 0);
        }
    },
    computed: {
        templates() {
            return this.$pcTabs.$slots;
        },
        activeValue() {
            return this.$pcTabs.d_value;
        },
        showNavigators() {
            return this.$pcTabs.scrollable && this.$pcTabs.showNavigators;
        },
        prevButtonAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.previous : undefined;
        },
        nextButtonAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.next : undefined;
        }
    },
    components: {
        ChevronLeftIcon,
        ChevronRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
