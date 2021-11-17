<template>
    <div :ref="containerRef" :class="containerClass" :style="style">
        <slot name="button" :toggle="onClick">
            <SDButton type="button" :class="buttonClassName" :icon="iconClassName" @click="onClick($event)" :disabled="disabled" />
        </slot>
        <ul :ref="listRef" class="p-speeddial-list" role="menu">
            <li v-for="(item, index) of model" :key="index" class="p-speeddial-item" :style="getItemStyle(index)" role="none">
                <template v-if="!$slots.item">
                    <a :href="item.url || '#'" role="menuitem" :class="['p-speeddial-action', { 'p-disabled': item.disabled }]" :target="item.target"
                        v-tooltip:[tooltipOptions]="{value: item.label, disabled: !tooltipOptions}" @click="onItemClick($event, item)" v-ripple>
                        <span v-if="item.icon" :class="['p-speeddial-action-icon', item.icon]"></span>
                    </a>
                </template>
                <component v-else :is="$slots.item" :item="item"></component>
            </li>
        </ul>
    </div>
    <template v-if="mask">
        <div :class="maskClassName" :style="maskStyle"></div>
    </template>
</template>

<script>
import Button from 'primevue/button';
import Ripple from 'primevue/ripple';
import {DomHandler} from 'primevue/utils';

export default {
    name: 'SpeedDial',
    emits: ['click', 'show', 'hide'],
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
            default: 'pi pi-plus'
        },
        hideIcon: null,
        rotateAnimation: {
            type: Boolean,
            default: true
        },
        tooltipOptions: null,
        style: null,
        class: null
    },
    documentClickListener: null,
    container: null,
    list: null,
    data() {
        return {
            d_visible: this.visible,
            isItemClicked: false
        }
    },
    watch: {
        visible(newValue) {
            this.d_visible = newValue;
        }
    },
    mounted() {
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
        calculatePointStyle(index) {
            const type = this.type;

            if (type !== 'linear') {
                const length = this.model.length;
                const radius = this.radius || (length * 20);

                if (type === 'circle') {
                    const step = 2 * Math.PI / length;

                    return {
                        left: `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`,
                        top: `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`,
                    }
                }
                else if (type === 'semi-circle') {
                    const direction = this.direction;
                    const step = Math.PI / (length - 1);
                    const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`;
                    const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`;
                    if (direction === 'up') {
                        return { left: x, bottom: y };
                    }
                    else if (direction === 'down') {
                        return { left: x, top: y };
                    }
                    else if (direction === 'left') {
                        return { right: y, top: x };
                    }
                    else if (direction === 'right') {
                        return { left: y, top: x };
                    }
                }
                else if (type === 'quarter-circle') {
                    const direction = this.direction;
                    const step = Math.PI / (2 * (length - 1));
                    const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`;
                    const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`;
                    if (direction === 'up-left') {
                        return { right: x, bottom: y };
                    }
                    else if (direction === 'up-right') {
                        return { left: x, bottom: y };
                    }
                    else if (direction === 'down-left') {
                        return { right: y, top: x };
                    }
                    else if (direction === 'down-right') {
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
        containerRef(el) {
            this.container = el;
        },
        listRef(el) {
            this.list = el;
        }
    },
    computed: {
        containerClass() {
            return [`p-speeddial p-component p-speeddial-${this.type}`, {
                [`p-speeddial-direction-${this.direction}`]: this.type !== 'circle',
                'p-speeddial-opened': this.d_visible,
                'p-disabled': this.disabled
            }, this.class];
        },
        buttonClassName() {
            return ['p-speeddial-button p-button-rounded', {
                'p-speeddial-rotate': this.rotateAnimation && !this.hideIcon
            }, this.buttonClass];
        },
        iconClassName() {
            return this.d_visible && !!this.hideIcon ? this.hideIcon : this.showIcon;
        },
        maskClassName() {
            return ['p-speeddial-mask', {
                'p-speeddial-mask-visible': this.d_visible
            }, this.maskClass];
        }
    },
    components: {
        'SDButton': Button
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-speeddial {
    position: absolute;
    display: flex;
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
