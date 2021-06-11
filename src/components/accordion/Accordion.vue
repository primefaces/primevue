<template>
    <div class="p-accordion p-component">
        <div v-for="(tab,i) of tabs" :key="getKey(tab,i)" :class="getTabClass(i)">
            <div :class="getTabHeaderClass(tab, i)">
                <a role="tab" class="p-accordion-header-link" @click="onTabClick($event, tab, i)" @keydown="onTabKeydown($event, tab, i)" :tabindex="isTabDisabled(tab) ? null : '0'"
                    :aria-expanded="isTabActive(i)" :id="getTabAriaId(i) + '_header'" :aria-controls="getTabAriaId(i) + '_content'">
                    <span :class="getHeaderIcon(i)"></span>
                    <span class="p-accordion-header-text" v-if="tab.props && tab.props.header">{{tab.props.header}}</span>
                    <component :is="tab.children.header" v-if="tab.children && tab.children.header"></component>
                </a>
            </div>
            <transition name="p-toggleable-content">
                <div class="p-toggleable-content" v-if="lazy ? isTabActive(i) : true" v-show="lazy ? true: isTabActive(i)"
                    role="region" :id="getTabAriaId(i) + '_content'" :aria-labelledby="getTabAriaId(i) + '_header'">
                    <div class="p-accordion-content">
                        <component :is="tab"></component>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import {UniqueComponentId} from 'primevue/utils';

export default {
    name: 'Accordion',
    emits: ['tab-close', 'tab-open', 'update:activeIndex'],
    props: {
        multiple: {
            type: Boolean,
            default: false
        },
        activeIndex: {
            type: [Number,Array],
            default: null
        },
        lazy: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            d_activeIndex: this.activeIndex
        }
    },
    watch: {
        activeIndex(newValue) {
            this.d_activeIndex = newValue;
        }
    },
    methods: {
        onTabClick(event, tab, i) {
            if (!this.isTabDisabled(tab)) {
                const active = this.isTabActive(i);
                const eventName = active ? 'tab-close' : 'tab-open';

                if (this.multiple) {
                    if (active) {
                        this.d_activeIndex = this.d_activeIndex.filter(index => index !== i);
                    }
                    else {
                        if (this.d_activeIndex)
                            this.d_activeIndex.push(i);
                        else
                            this.d_activeIndex = [i];
                    }
                }
                else {
                    this.d_activeIndex = this.d_activeIndex === i ? null : i;
                }

                this.$emit('update:activeIndex', this.d_activeIndex);

                this.$emit(eventName, {
                    originalEvent: event,
                    index: i
                });
            }
        },
        onTabKeydown(event, tab, i) {
            if (event.which === 13) {
                this.onTabClick(event, i);
            }
        },
        isTabActive(index) {
            if (this.multiple)
                return this.d_activeIndex && this.d_activeIndex.includes(index);
            else
                return index === this.d_activeIndex;
        },
        getKey(tab, i) {
            return (tab.props && tab.props.header) ? tab.props.header : i;
        },
        isTabDisabled(tab) {
            return tab.props && tab.props.disabled;
        },
        getTabClass(i) {
            return ['p-accordion-tab', {'p-accordion-tab-active': this.isTabActive(i)}];
        },
        getTabHeaderClass(tab, i) {
            return ['p-accordion-header', {'p-highlight': this.isTabActive(i), 'p-disabled': this.isTabDisabled(tab)}];
        },
        getTabAriaId(i) {
            return this.ariaId + '_' + i;
        },
        getHeaderIcon(i) {
            const active = this.isTabActive(i);
            return ['p-accordion-toggle-icon pi', {'pi-chevron-right': !active, 'pi-chevron-down': active}];
        },
        isAccordionTab(child) {
            return child.type.name === 'AccordionTab'
        }
    },
    computed: {
        tabs() {
            const tabs = []
            this.$slots.default().forEach(child => {
                    if (this.isAccordionTab(child)) {
                        tabs.push(child);
                    }
                    else if (child.children && child.children instanceof Array) {
                        child.children.forEach(nestedChild => {
                            if (this.isAccordionTab(nestedChild)) {
                                tabs.push(nestedChild)
                            }
                        });
                    }
                }
            )
            return tabs;
        },
        ariaId() {
            return UniqueComponentId();
        }
    }
}
</script>

<style>
.p-accordion-header-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;
    text-decoration: none;
}

.p-accordion-header-link:focus {
    z-index: 1;
}

.p-accordion-header-text {
    line-height: 1;
}
</style>
