<template>
    <div ref="list" :class="cx('root')" v-bind="ptmi('root')">
        <Button
            v-if="showNavigators && isPrevButtonEnabled"
            ref="prevButton"
            :class="cx('previousButton')"
            :aria-label="prevButtonAriaLabel"
            :unstyled="$pcTabs.unstyled"
            :tabindex="$pcTabs.tabindex"
            @click="onPrevButtonClick"
            v-bind="$pcTabs.previousButtonProps"
            :pt="ptm('previousButton')"
            data-pc-group-section="navigator"
        >
            <template #icon="slotProps">
                <component :is="templates.previousicon || 'ChevronLeftIcon'" aria-hidden="true" :class="slotProps.icon" v-bind="ptm('previousButton.icon')" />
            </template>
        </Button>
        <div ref="content" :class="cx('content')" role="tablist" :aria-orientation="$pcTabs.orientation" @scroll="onScroll" v-bind="ptm('content')">
            <slot></slot>
            <span ref="inkbar" :class="cx('inkbar')" role="presentation" aria-hidden="true" v-bind="ptm('inkbar')"></span>
        </div>
        <Button
            v-if="showNavigators && isNextButtonEnabled"
            ref="nextButton"
            :class="cx('nextButton')"
            :aria-label="nextButtonAriaLabel"
            :unstyled="$pcTabs.unstyled"
            :tabindex="$pcTabs.tabindex"
            @click="onNextButtonClick"
            v-bind="$pcTabs.nextButtonProps"
            :pt="ptm('nextButton')"
            data-pc-group-section="navigator"
        >
            <template #icon="slotProps">
                <component :is="templates.nexticon || 'ChevronRightIcon'" aria-hidden="true" :class="slotProps.icon" v-bind="ptm('nextButton.icon')" />
            </template>
        </Button>
    </div>
</template>

<script>
import Button from 'primevue/button';
import ChevronLeftIcon from 'primevue/icons/chevronleft';
import ChevronRightIcon from 'primevue/icons/chevronright';
import { DomHandler } from 'primevue/utils';
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
        this.updateInkBar();

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
        bindResizeObserver() {
            this.resizeObserver = new ResizeObserver(() => this.updateButtonState());
            this.resizeObserver.observe(this.$refs.list);
        },
        unbindResizeObserver() {
            this.resizeObserver?.unobserve(this.$refs.list);
            this.resizeObserver = undefined;
        },
        updateInkBar() {
            const { content, inkbar } = this.$refs;
            const activeTab = DomHandler.findSingle(content, '[data-pc-name="tab"][data-p-active="true"]');

            inkbar.style.width = DomHandler.getOuterWidth(activeTab) + 'px';
            inkbar.style.left = DomHandler.getOffset(activeTab).left - DomHandler.getOffset(content).left + 'px';
        },
        updateButtonState() {
            const { list, content } = this.$refs;
            const { scrollLeft, scrollWidth, offsetWidth } = content;
            const width = DomHandler.getWidth(content);

            this.isPrevButtonEnabled = scrollLeft !== 0;
            this.isNextButtonEnabled = list.offsetWidth >= offsetWidth && parseInt(scrollLeft) !== scrollWidth - width;
        },
        getVisibleButtonWidths() {
            const { prevBtn, nextBtn } = this.$refs;

            return [prevBtn, nextBtn].reduce((acc, el) => (el ? acc + DomHandler.getWidth(el) : acc), 0);
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
        Button,
        ChevronLeftIcon,
        ChevronRightIcon
    }
};
</script>
