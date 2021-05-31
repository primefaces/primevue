<template>
    <div class="p-tabview p-component">
        <ul ref="nav" class="p-tabview-nav" role="tablist">
            <li role="presentation" v-for="(tab, i) of tabs" :key="getKey(tab, i)" :class="[{'p-highlight': (d_activeIndex === i), 'p-disabled': isTabDisabled(tab)}]">
                <a role="tab" class="p-tabview-nav-link" @click="onTabClick($event, i)" @keydown="onTabKeydown($event, i)" :tabindex="isTabDisabled(tab) ? null : '0'" :aria-selected="d_activeIndex" v-ripple>
                    <span class="p-tabview-title" v-if="tab.header">{{tab.header}}</span>
                    <TabPanelHeaderSlot :tab="tab" v-if="tab.$scopedSlots.header"/>
                </a>
            </li>
            <li ref="inkbar" class="p-tabview-ink-bar"></li>
        </ul>
        <div class="p-tabview-panels">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import Ripple from '../ripple/Ripple';

const TabPanelHeaderSlot = {
    functional: true,
    props: {
        tab: {
            type: null,
            default: null
        }
    },
    render(createElement, context) {
        return [context.props.tab.$scopedSlots['header']()];
    }
};

export default {
    props: {
        activeIndex: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            allChildren: [],
            d_activeIndex: this.activeIndex,
        };
    },
    watch: {
        activeIndex(newValue) {
            this.d_activeIndex = newValue;
        }
    },
    mounted() {
        this.allChildren = this.$children;
        this.updateInkBar();
    },
    updated() {
        this.updateInkBar();
    },
    methods: {
        onTabClick(event, i) {
            if (!this.isTabDisabled(this.tabs[i]) && i !== this.d_activeIndex) {
                this.d_activeIndex = i;
                this.$emit('update:activeIndex', this.d_activeIndex);

                this.$emit('tab-change', {
                    originalEvent: event,
                    index: i
                });
            }

            this.$emit('tab-click', {
                originalEvent: event,
                index: i
            });
        },
        onTabKeydown(event, i) {
            if (event.which === 13) {
                this.onTabClick(event, i);
            }
        },
        updateInkBar() {
            if (this.$refs.nav.children.length > 1) {
                let tabHeader = this.$refs.nav.children[this.d_activeIndex];
                this.$refs.inkbar.style.width = DomHandler.getWidth(tabHeader) + 'px';
                this.$refs.inkbar.style.left =  DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.$refs.nav).left + 'px';
            }
        },
        getKey(tab, index) {
            return tab.header ? ObjectUtils.resolveFieldData(tab, tab.header) : index;
        },
        isTabDisabled(tab) {
            return tab.disabled;
        },
    },
    computed: {
        tabs() {
            let tabs = [];

            if (this.allChildren) {
                tabs = this.allChildren.filter(child => child.$vnode.tag.indexOf('tabpanel') !== -1);
            }

            return tabs;
        }
    },
    components: {
        'TabPanelHeaderSlot': TabPanelHeaderSlot
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-tabview-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: wrap;
}

.p-tabview-nav-link {
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

.p-tabview-nav-link:focus {
    z-index: 1;
}

.p-tabview-title {
    line-height: 1;
}
</style>