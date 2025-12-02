<template>
    <div :ref="containerRef" :class="containerClass" :style="[style, sx('root')]" v-bind="ptmi('root')">
        <slot name="button" :visible="d_visible" :toggleCallback="onClick">
            <Button
                :class="[cx('pcButton'), buttonClass]"
                :disabled="disabled"
                :aria-expanded="d_visible"
                :aria-haspopup="true"
                :aria-controls="d_visible ? $id + '_list' : undefined"
                :aria-label="ariaLabel"
                :aria-labelledby="ariaLabelledby"
                :unstyled="unstyled"
                @click="onClick($event)"
                @keydown="onTogglerKeydown"
                v-bind="buttonProps"
                :pt="ptm('pcButton')"
            >
                <template #icon="slotProps">
                    <slot name="icon" :visible="d_visible">
                        <component v-if="d_visible && !!hideIcon" :is="hideIcon ? 'span' : 'PlusIcon'" :class="[hideIcon, slotProps.class]" v-bind="ptm('pcButton')['icon']" data-pc-section="icon" />
                        <component v-else :is="showIcon ? 'span' : 'PlusIcon'" :class="[d_visible && !!hideIcon ? hideIcon : showIcon, slotProps.class]" v-bind="ptm('pcButton')['icon']" data-pc-section="icon" />
                    </slot>
                </template>
            </Button>
        </slot>
        <ul :ref="listRef" :id="$id + '_list'" :class="cx('list')" :style="sx('list')" role="menu" tabindex="-1" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" v-bind="ptm('list')">
            <template v-for="(item, index) of model" :key="index">
                <li
                    v-if="isItemVisible(item)"
                    :id="`${$id}_${index}`"
                    :class="cx('item', { id: `${$id}_${index}` })"
                    :style="getItemStyle(index)"
                    role="none"
                    :data-p-active="isItemActive(`${$id}_${index}`)"
                    v-bind="getPTOptions(`${$id}_${index}`, 'item')"
                >
                    <template v-if="!$slots.item">
                        <Button
                            v-tooltip:[tooltipOptions]="{ value: item.label, disabled: !tooltipOptions }"
                            :tabindex="-1"
                            role="menuitem"
                            :class="cx('pcAction', { item })"
                            :aria-label="item.label"
                            :disabled="disabled"
                            :unstyled="unstyled"
                            @click="onItemClick($event, item)"
                            v-bind="actionButtonProps"
                            :pt="getPTOptions(`${$id}_${index}`, 'pcAction')"
                        >
                            <template v-if="item.icon" #icon="slotProps">
                                <slot name="itemicon" :item="item" :class="slotProps.class">
                                    <span :class="[item.icon, slotProps.class]" v-bind="getPTOptions(`${$id}_${index}`, 'actionIcon')"></span>
                                </slot>
                            </template>
                        </Button>
                    </template>
                    <component v-else :is="$slots.item" :item="item" :onClick="(event) => onItemClick(event, item)" :toggleCallback="(event) => onItemClick(event, item)"></component>
                </li>
            </template>
        </ul>
    </div>
    <Transition name="p-overlay-mask">
        <div v-if="mask && d_visible" :class="[cx('mask'), maskClass]" :style="maskStyle" v-bind="ptm('mask')"></div>
    </Transition>
</template>

<script>
import { $dt } from '@primeuix/styled';
import { find, findSingle, focus, hasClass } from '@primeuix/utils/dom';
import PlusIcon from '@primevue/icons/plus';
import Button from 'primevue/button';
import Ripple from 'primevue/ripple';
import Tooltip from 'primevue/tooltip';
import BaseSpeedDial from './BaseSpeedDial.vue';

// Set fix value for SSR.
const Math_PI = 3.14159265358979;

export default {
    name: 'SpeedDial',
    extends: BaseSpeedDial,
    inheritAttrs: false,
    emits: ['click', 'show', 'hide', 'focus', 'blur'],
    documentClickListener: null,
    container: null,
    list: null,
    data() {
        return {
            d_visible: this.visible,
            isItemClicked: false,
            focused: false,
            focusedOptionIndex: -1
        };
    },
    watch: {
        visible(newValue) {
            this.d_visible = newValue;
        }
    },
    mounted() {
        if (this.type !== 'linear') {
            const button = findSingle(this.container, '[data-pc-name="pcbutton"]');
            const firstItem = findSingle(this.list, '[data-pc-section="item"]');

            if (button && firstItem) {
                const wDiff = Math.abs(button.offsetWidth - firstItem.offsetWidth);
                const hDiff = Math.abs(button.offsetHeight - firstItem.offsetHeight);

                this.list.style.setProperty($dt('item.diff.x').name, `${wDiff / 2}px`);
                this.list.style.setProperty($dt('item.diff.y').name, `${hDiff / 2}px`);
            }
        }

        if (this.hideOnClickOutside) {
            this.bindDocumentClickListener();
        }
    },
    beforeUnmount() {
        this.unbindDocumentClickListener();
    },
    methods: {
        getPTOptions(id, key) {
            return this.ptm(key, {
                context: {
                    active: this.isItemActive(id),
                    hidden: !this.d_visible
                }
            });
        },
        onFocus(event) {
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focusedOptionIndex = -1;
            this.$emit('blur', event);
        },
        onItemClick(e, item) {
            if (item.command) {
                item.command({ originalEvent: e, item });
            }

            this.hide();

            this.isItemClicked = true;
            e.preventDefault();
        },
        onClick(event) {
            this.d_visible ? this.hide() : this.show();
            this.isItemClicked = true;
            this.$emit('click', event);
        },
        show() {
            this.d_visible = true;
            this.$emit('show');
        },
        hide() {
            this.d_visible = false;
            this.$emit('hide');
        },
        calculateTransitionDelay(index) {
            const length = this.model.length;
            const visible = this.d_visible;

            return (visible ? index : length - index - 1) * this.transitionDelay;
        },
        onTogglerKeydown(event) {
            switch (event.code) {
                case 'ArrowDown':
                case 'ArrowLeft':
                    this.onTogglerArrowDown(event);

                    break;

                case 'ArrowUp':
                case 'ArrowRight':
                    this.onTogglerArrowUp(event);

                    break;

                case 'Escape':
                    this.onEscapeKey();

                    break;

                default:
                    break;
            }
        },
        onKeyDown(event) {
            switch (event.code) {
                case 'ArrowDown':
                    this.onArrowDown(event);
                    break;

                case 'ArrowUp':
                    this.onArrowUp(event);
                    break;

                case 'ArrowLeft':
                    this.onArrowLeft(event);
                    break;

                case 'ArrowRight':
                    this.onArrowRight(event);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    this.onEnterKey(event);
                    break;

                case 'Escape':
                    this.onEscapeKey(event);
                    break;

                case 'Home':
                    this.onHomeKey(event);
                    break;

                case 'End':
                    this.onEndKey(event);
                    break;

                default:
                    break;
            }
        },
        onTogglerArrowUp(event) {
            this.show();
            this.navigatePrevItem(event);

            event.preventDefault();
        },
        onTogglerArrowDown(event) {
            this.show();
            this.navigateNextItem(event);

            event.preventDefault();
        },
        onEnterKey(event) {
            const items = find(this.container, '[data-pc-section="item"]');
            const itemIndex = [...items].findIndex((item) => item.id === this.focusedOptionIndex);
            const buttonEl = findSingle(this.container, 'button');

            this.onItemClick(event, this.model[itemIndex]);
            this.onBlur(event);

            buttonEl && focus(buttonEl);
        },
        onEscapeKey() {
            this.hide();

            const buttonEl = findSingle(this.container, 'button');

            buttonEl && focus(buttonEl);
        },
        onArrowUp(event) {
            if (this.direction === 'down') {
                this.navigatePrevItem(event);
            } else {
                this.navigateNextItem(event);
            }
        },
        onArrowDown(event) {
            if (this.direction === 'down') {
                this.navigateNextItem(event);
            } else {
                this.navigatePrevItem(event);
            }
        },

        onArrowLeft(event) {
            const leftValidDirections = ['left', 'up-right', 'down-left'];
            const rightValidDirections = ['right', 'up-left', 'down-right'];

            if (leftValidDirections.includes(this.direction)) {
                this.navigateNextItem(event);
            } else if (rightValidDirections.includes(this.direction)) {
                this.navigatePrevItem(event);
            } else {
                this.navigatePrevItem(event);
            }
        },

        onArrowRight(event) {
            const leftValidDirections = ['left', 'up-right', 'down-left'];
            const rightValidDirections = ['right', 'up-left', 'down-right'];

            if (leftValidDirections.includes(this.direction)) {
                this.navigatePrevItem(event);
            } else if (rightValidDirections.includes(this.direction)) {
                this.navigateNextItem(event);
            } else {
                this.navigateNextItem(event);
            }
        },
        onEndKey(event) {
            event.preventDefault();

            this.focusedOptionIndex = -1;
            this.navigatePrevItem(event);
        },
        onHomeKey(event) {
            event.preventDefault();

            this.focusedOptionIndex = -1;
            this.navigateNextItem(event);
        },
        navigateNextItem(event) {
            const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex);

            this.changeFocusedOptionIndex(optionIndex);

            event.preventDefault();
        },
        navigatePrevItem(event) {
            const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex);

            this.changeFocusedOptionIndex(optionIndex);

            event.preventDefault();
        },
        changeFocusedOptionIndex(index) {
            const items = find(this.container, '[data-pc-section="item"]');
            const filteredItems = [...items].filter((item) => !hasClass(findSingle(item, 'a'), 'p-disabled'));

            if (filteredItems[index]) {
                this.focusedOptionIndex = filteredItems[index].getAttribute('id');
                const buttonEl = findSingle(filteredItems[index], '[type="button"]');

                buttonEl && focus(buttonEl);
            }
        },
        findPrevOptionIndex(index) {
            const items = find(this.container, '[data-pc-section="item"]');
            const filteredItems = [...items].filter((item) => !hasClass(findSingle(item, 'a'), 'p-disabled'));
            const newIndex = index === -1 ? filteredItems[filteredItems.length - 1].id : index;
            let matchedOptionIndex = filteredItems.findIndex((link) => link.getAttribute('id') === newIndex);

            matchedOptionIndex = index === -1 ? filteredItems.length - 1 : matchedOptionIndex - 1;

            return matchedOptionIndex;
        },
        findNextOptionIndex(index) {
            const items = find(this.container, '[data-pc-section="item"]');
            const filteredItems = [...items].filter((item) => !hasClass(findSingle(item, 'a'), 'p-disabled'));
            const newIndex = index === -1 ? filteredItems[0].id : index;
            let matchedOptionIndex = filteredItems.findIndex((link) => link.getAttribute('id') === newIndex);

            matchedOptionIndex = index === -1 ? 0 : matchedOptionIndex + 1;

            return matchedOptionIndex;
        },
        calculatePointStyle(index) {
            const type = this.type;

            if (type !== 'linear') {
                const length = this.model.length;
                const radius = this.radius || length * 20;

                if (type === 'circle') {
                    const step = (2 * Math_PI) / length;

                    return {
                        left: `calc(${radius * Math.cos(step * index)}px + ${$dt('item.diff.x', '0px').variable})`,
                        top: `calc(${radius * Math.sin(step * index)}px + ${$dt('item.diff.y', '0px').variable})`
                    };
                } else if (type === 'semi-circle') {
                    const direction = this.direction;
                    const step = Math_PI / (length - 1);
                    const x = `calc(${radius * Math.cos(step * index)}px + ${$dt('item.diff.x', '0px').variable})`;
                    const y = `calc(${radius * Math.sin(step * index)}px + ${$dt('item.diff.y', '0px').variable})`;

                    if (direction === 'up') {
                        return { left: x, bottom: y };
                    } else if (direction === 'down') {
                        return { left: x, top: y };
                    } else if (direction === 'left') {
                        return { right: y, top: x };
                    } else if (direction === 'right') {
                        return { left: y, top: x };
                    }
                } else if (type === 'quarter-circle') {
                    const direction = this.direction;
                    const step = Math_PI / (2 * (length - 1));
                    const x = `calc(${radius * Math.cos(step * index)}px + ${$dt('item.diff.x', '0px').variable})`;
                    const y = `calc(${radius * Math.sin(step * index)}px + ${$dt('item.diff.y', '0px').variable})`;

                    if (direction === 'up-left') {
                        return { right: x, bottom: y };
                    } else if (direction === 'up-right') {
                        return { left: x, bottom: y };
                    } else if (direction === 'down-left') {
                        return { right: y, top: x };
                    } else if (direction === 'down-right') {
                        return { left: y, top: x };
                    }
                }
            }

            return {};
        },
        getItemStyle(index) {
            const transitionDelay = this.calculateTransitionDelay(index);
            const pointStyle = this.calculatePointStyle(index);

            return {
                transitionDelay: `${transitionDelay}ms`,
                ...pointStyle
            };
        },
        bindDocumentClickListener() {
            if (!this.documentClickListener) {
                this.documentClickListener = (event) => {
                    if (this.d_visible && this.isOutsideClicked(event)) {
                        this.hide();
                    }

                    this.isItemClicked = false;
                };

                document.addEventListener('click', this.documentClickListener);
            }
        },
        unbindDocumentClickListener() {
            if (this.documentClickListener) {
                document.removeEventListener('click', this.documentClickListener);
                this.documentClickListener = null;
            }
        },
        isOutsideClicked(event) {
            return this.container && !(this.container.isSameNode(event.target) || this.container.contains(event.target) || this.isItemClicked);
        },
        isItemVisible(item) {
            return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
        },
        isItemActive(id) {
            return id === this.focusedOptionId;
        },
        containerRef(el) {
            this.container = el;
        },
        listRef(el) {
            this.list = el;
        }
    },
    computed: {
        containerClass() {
            return [this.cx('root'), this.class];
        },
        focusedOptionId() {
            return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
        }
    },
    components: {
        Button,
        PlusIcon
    },
    directives: {
        ripple: Ripple,
        tooltip: Tooltip
    }
};
</script>
