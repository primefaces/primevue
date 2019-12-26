<template>
    <div class="p-accordion p-component">
        <slot></slot>
        <div v-for="(tab, i) of tabs" :key="tab.header || i" class="p-accordion-tab">
            <div :class="['p-accordion-header', {'p-highlight': tab.d_active, 'p-disabled': tab.disabled}]">
                <a role="tab" @click="onTabClick($event, tab)" @keydown="onTabKeydown($event, tab)" :tabindex="tab.disabled ? null : '0'"
                    :aria-expanded="tab.d_active" :id="ariaId + i + '_header'" :aria-controls="ariaId + i + '_content'">
                    <span :class="['p-accordion-toggle-icon pi pi-fw', {'pi-caret-right': !tab.d_active, 'pi-caret-down': tab.d_active}]"></span>
                    <span class="p-accordion-header-text" v-if="tab.header">{{tab.header}}</span>
                    <AccordionTabSlot :tab="tab" type="header" v-if="tab.$scopedSlots.header" />
                </a>
            </div>
            <transition name="p-toggleable-content">
                <div class="p-toggleable-content" v-show="tab.d_active"
                    role="region" :id="ariaId + i + '_content' " :aria-labelledby="ariaId + i + '_header'">
                    <div class="p-accordion-content">
                        <AccordionTabSlot :tab="tab" type="default" v-if="tab.$scopedSlots.default" />
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import UniqueComponentId from '../utils/UniqueComponentId';

const AccordionTabSlot = {
    functional: true,
    props: {
        tab: {
            type: null,
            default: null
        },
        type: {
            type: String,
            default: null
        }
    },
    render(createElement, context) {
        return [context.props.tab.$scopedSlots[context.props.type]()];
    }
};

export default {
    props: {
        multiple: Boolean
    },
    data() {
        return {
            d_children: []
        };
    },
    mounted() {
        this.d_children = this.$children;
    },
    methods: {
        onTabClick(event, tab) {
            if (!tab.disabled) {
                if (!this.multiple && !tab.d_active) {
                    this.tabs.forEach(tab => tab.d_active = false);
                }

                const newActiveState = !tab.d_active;
                tab.d_active = newActiveState;
                tab.$emit('update:active', newActiveState);
                let eventName = newActiveState ? 'tab-open' : 'tab-close';
                this.$emit(eventName, {
                    originalEvent: event,
                    tab: tab
                });
            }
        },
        onTabKeydown(event, tab) {
            if (event.which === 13) {
                this.onTabClick(event, tab);
            }
        },
        isSelected(index) {
            return this.props.multiple ? (this.d_activeTabIndex && this.d_activeTabIndex.indexOf(index) >= 0) : this.d_activeTabIndex === index;
        }
    },
    computed: {
        tabs() {
            return this.d_children.filter(child => child.$vnode.tag.indexOf('accordiontab') !== -1);
        },
        ariaId() {
            return UniqueComponentId();
        }
    },
    components: {
        'AccordionTabSlot': AccordionTabSlot
    }
}
</script>

<style>
.p-accordion {
    width: 100%;
}

.p-accordion .p-accordion-header {
    cursor: pointer;
    position: relative;
    margin-top: 1px;
    zoom: 1;
}

.p-accordion .p-accordion-header a {
    display: block;
    padding: .5em;
}

.p-accordion .p-accordion-toggle-icon,
.p-accordion .p-accordion-header-text {
    vertical-align: middle;
}

.p-accordion .p-accordion-header a > span {
    display: inline-block;
    vertical-align: middle;
}

.p-accordion .p-accordion-content {
    padding: 1em;
    border-top: 0;
    zoom: 1;
}

.p-accordion .p-accordion-header.p-disabled,
.p-accordion .p-accordion-header.p-disabled a {
    cursor: default;
}
</style>