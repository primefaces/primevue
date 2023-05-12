<template>
    <div :ref="containerRef" :class="containerClass" :style="style" v-bind="ptm('root')">
        <slot name="button" :toggle="onClick">
            <SDButton
                type="button"
                :class="buttonClassName"
                @click="onClick($event)"
                :disabled="disabled"
                @keydown="onTogglerKeydown"
                :aria-expanded="d_visible"
                :aria-haspopup="true"
                :aria-controls="id + '_list'"
                :aria-label="ariaLabel"
                :aria-labelledby="ariaLabelledby"
                :pt="ptm('button')"
            >
                <template #icon>
                    <slot name="icon" :visible="d_visible">
                        <component v-if="d_visible && !!hideIcon" :is="hideIcon ? 'span' : 'PlusIcon'" :class="hideIcon" v-bind="ptm('button')['icon']" />
                        <component v-else :is="showIcon ? 'span' : 'PlusIcon'" :class="showIcon" v-bind="ptm('button')['icon']" />
                    </slot>
                </template>
            </SDButton>
        </slot>
        <ul :ref="listRef" :id="id + '_list'" class="p-speeddial-list" role="menu" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" :aria-activedescendant="focused ? focusedOptionId : undefined" tabindex="-1" v-bind="ptm('menu')">
            <template v-for="(item, index) of model" :key="index">
                <li
                    v-if="isItemVisible(item)"
                    :id="`${id}_${index}`"
                    :aria-controls="`${id}_item`"
                    class="p-speeddial-item"
                    :class="itemClass(`${id}_${index}`)"
                    :style="getItemStyle(index)"
                    role="menuitem"
                    v-bind="getPTOptions(`${id}_${index}`, 'menuitem')"
                >
                    <template v-if="!$slots.item">
                        <a
                            v-tooltip:[tooltipOptions]="{ value: item.label, disabled: !tooltipOptions }"
                            v-ripple
                            :tabindex="-1"
                            :href="item.url || '#'"
                            role="menuitem"
                            :class="['p-speeddial-action', { 'p-disabled': item.disabled }]"
                            :target="item.target"
                            @click="onItemClick($event, item)"
                            :aria-label="item.label"
                            v-bind="getPTOptions(`${id}_${index}`, 'action')"
                        >
                            <span v-if="item.icon" :class="['p-speeddial-action-icon', item.icon]" v-bind="getPTOptions(`${id}_${index}`, 'actionIcon')"></span>
                        </a>
                    </template>
                    <component v-else :is="$slots.item" :item="item" :onClick="(event) => onItemClick(event, item)"></component>
                </li>
            </template>
        </ul>
    </div>
    <template v-if="mask">
        <div :class="maskClassName" :style="maskStyle" v-bind="ptm('mask')"></div>
    </template>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import Button from 'primevue/button';
import PlusIcon from 'primevue/icons/plus';
import Ripple from 'primevue/ripple';
import Tooltip from 'primevue/tooltip';
import { DomHandler, UniqueComponentId } from 'primevue/utils';

export default {
    name: 'SpeedDial',
    extends: BaseComponent,
    emits: ['click', 'show', 'hide', 'focus', 'blur'],
    props: {
        model: null,
        visible: {
            type: Boolean,
            default: false
        },
        direction: {
            type: String,
            default: 'up'
        },
        transitionDelay: {
            type: Number,
            default: 30
        },
        type: {
            type: String,
            default: 'linear'
        },
        radius: {
            type: Number,
            default: 0
        },
        mask: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        hideOnClickOutside: {
            type: Boolean,
            default: true
        },
        buttonClass: null,
        maskStyle: null,
        maskClass: null,
        showIcon: {
            type: String,
            default: undefined
        },
        hideIcon: {
            type: String,
            default: undefined
        },
        rotateAnimation: {
            type: Boolean,
            default: true
        },
        tooltipOptions: null,
        style: null,
        class: null,
        'aria-labelledby': {
            type: String,
            default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    documentClickListener: null,
    container: null,
    list: null,
    data() {
        return {
            id: this.$attrs.id,
            d_visible: this.visible,
            isItemClicked: false,
            focused: false,
            focusedOptionIndex: -1
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        },
        visible(newValue) {
            this.d_visible = newValue;
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();

        if (this.type !== 'linear') {
            const button = DomHandler.findSingle(this.container, '.p-speeddial-button');
            const firstItem = DomHandler.findSingle(this.list, '.p-speeddial-item');

            if (button && firstItem) {
                const wDiff = Math.abs(button.offsetWidth - firstItem.offsetWidth);
                const hDiff = Math.abs(button.offsetHeight - firstItem.offsetHeight);

                this.list.style.setProperty('--item-diff-x', `${wDiff / 2}px`);
                this.list.style.setProperty('--item-diff-y', `${hDiff / 2}px`);
            }
        }

        if (this.hideOnClickOutside) {
            this.bindDocumentClickListener();
        }
    },
    beforeMount() {
        this.unbindDocumentClickListener();
    },
    methods: {
        getPTOptions(id, key) {
            return this.ptm(key, {
                context: {
                    active: this.isItemActive(id)
                }
            });
        },
        onFocus(event) {
            this.focused = true;

            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
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
            this.focused = true;
            DomHandler.focus(this.list);

            this.show();
            this.navigatePrevItem(event);

            event.preventDefault();
        },
        onTogglerArrowDown(event) {
            this.focused = true;
            DomHandler.focus(this.list);

            this.show();
            this.navigateNextItem(event);

            event.preventDefault();
        },
        onEnterKey(event) {
            const items = DomHandler.find(this.container, '.p-speeddial-item');
            const itemIndex = [...items].findIndex((item) => item.id === this.focusedOptionIndex);

            this.onItemClick(event, this.model[itemIndex]);
            this.onBlur(event);

            const buttonEl = DomHandler.findSingle(this.container, 'button');

            buttonEl && DomHandler.focus(buttonEl);
        },
        onEscapeKey() {
            this.hide();

            const buttonEl = DomHandler.findSingle(this.container, 'button');

            buttonEl && DomHandler.focus(buttonEl);
        },
        onArrowUp(event) {
            if (this.direction === 'up') {
                this.navigateNextItem(event);
            } else if (this.direction === 'down') {
                this.navigatePrevItem(event);
            } else {
                this.navigateNextItem(event);
            }
        },
        onArrowDown(event) {
            if (this.direction === 'up') {
                this.navigatePrevItem(event);
            } else if (this.direction === 'down') {
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
            const items = DomHandler.find(this.container, '.p-speeddial-item');
            const filteredItems = [...items].filter((item) => !DomHandler.hasClass(DomHandler.findSingle(item, 'a'), 'p-disabled'));

            if (filteredItems[index]) {
                this.focusedOptionIndex = filteredItems[index].getAttribute('id');
            }
        },
        findPrevOptionIndex(index) {
            const items = DomHandler.find(this.container, '.p-speeddial-item');
            const filteredItems = [...items].filter((item) => !DomHandler.hasClass(DomHandler.findSingle(item, 'a'), 'p-disabled'));
            const newIndex = index === -1 ? filteredItems[filteredItems.length - 1].id : index;
            let matchedOptionIndex = filteredItems.findIndex((link) => link.getAttribute('id') === newIndex);

            matchedOptionIndex = index === -1 ? filteredItems.length - 1 : matchedOptionIndex - 1;

            return matchedOptionIndex;
        },
        findNextOptionIndex(index) {
            const items = DomHandler.find(this.container, '.p-speeddial-item');
            const filteredItems = [...items].filter((item) => !DomHandler.hasClass(DomHandler.findSingle(item, 'a'), 'p-disabled'));
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
                    const step = (2 * Math.PI) / length;

                    return {
                        left: `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`,
                        top: `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`
                    };
                } else if (type === 'semi-circle') {
                    const direction = this.direction;
                    const step = Math.PI / (length - 1);
                    const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`;
                    const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`;

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
                    const step = Math.PI / (2 * (length - 1));
                    const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`;
                    const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`;

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
        },
        itemClass(id) {
            return [
                {
                    'p-focus': this.isItemActive(id)
                }
            ];
        }
    },
    computed: {
        containerClass() {
            return [
                `p-speeddial p-component p-speeddial-${this.type}`,
                {
                    [`p-speeddial-direction-${this.direction}`]: this.type !== 'circle',
                    'p-speeddial-opened': this.d_visible,
                    'p-disabled': this.disabled
                },
                this.class
            ];
        },
        buttonClassName() {
            return [
                'p-speeddial-button p-button-rounded',
                {
                    'p-speeddial-rotate': this.rotateAnimation && !this.hideIcon
                },
                this.buttonClass
            ];
        },
        maskClassName() {
            return [
                'p-speeddial-mask',
                {
                    'p-speeddial-mask-visible': this.d_visible
                },
                this.maskClass
            ];
        },
        focusedOptionId() {
            return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
        }
    },
    components: {
        SDButton: Button,
        PlusIcon: PlusIcon
    },
    directives: {
        ripple: Ripple,
        tooltip: Tooltip
    }
};
</script>

<style>
.p-speeddial {
    position: absolute;
    display: flex;
}

.p-speeddial-button {
    z-index: 1;
}

.p-speeddial-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: top 0s linear 0.2s;
    pointer-events: none;
    z-index: 2;
}

.p-speeddial-item {
    transform: scale(0);
    opacity: 0;
    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;
    will-change: transform;
}

.p-speeddial-action {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
}

.p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
    position: absolute;
}

.p-speeddial-rotate {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    will-change: transform;
}

.p-speeddial-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-speeddial-mask-visible {
    pointer-events: none;
    opacity: 1;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-speeddial-opened .p-speeddial-list {
    pointer-events: auto;
}

.p-speeddial-opened .p-speeddial-item {
    transform: scale(1);
    opacity: 1;
}

.p-speeddial-opened .p-speeddial-rotate {
    transform: rotate(45deg);
}

/* Direction */
.p-speeddial-direction-up {
    align-items: center;
    flex-direction: column-reverse;
}

.p-speeddial-direction-up .p-speeddial-list {
    flex-direction: column-reverse;
}

.p-speeddial-direction-down {
    align-items: center;
    flex-direction: column;
}

.p-speeddial-direction-down .p-speeddial-list {
    flex-direction: column;
}

.p-speeddial-direction-left {
    justify-content: center;
    flex-direction: row-reverse;
}

.p-speeddial-direction-left .p-speeddial-list {
    flex-direction: row-reverse;
}

.p-speeddial-direction-right {
    justify-content: center;
    flex-direction: row;
}

.p-speeddial-direction-right .p-speeddial-list {
    flex-direction: row;
}
</style>
