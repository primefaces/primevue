<template>
    <div class="p-tabview p-component">
        <ul ref="nav" class="p-tabview-nav" role="tablist">
            <li role="presentation" v-for="(tab, i) of tabs" :key="tab.header || i" :class="[{'p-highlight': (tab.d_active), 'p-disabled': tab.disabled}]">
                <a role="tab" class="p-tabview-nav-link" @click="onTabClick($event, tab)" @keydown="onTabKeydown($event, tab)" :tabindex="tab.disabled ? null : '0'" :aria-selected="tab.d_active" v-ripple>
                    <span class="p-tabview-title" v-if="tab.header">{{tab.header}}</span>
                    <TabPanelHeaderSlot :tab="tab" v-if="tab.$scopedSlots.header" />
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
    data() {
        return {
            d_children: []
        };
    },
    mounted() {
        this.d_children = this.$children;
    },
    updated() {
        let activeTab = this.tabs[this.findActiveTabIndex()];
        if (!activeTab && this.tabs.length) {
            this.tabs[0].d_active = true;
        }
        this.updateInkBar();
    },
    methods: {
        onTabClick(event, tab) {
            if (!tab.disabled && !tab.d_active) {
                this.activateTab(tab);

                this.$emit('tab-change', {
                    originalEvent: event,
                    tab: tab
                });
            }
        },
        activateTab(tab) {
            for (let i = 0; i < this.tabs.length; i++) {
                let active = this.tabs[i] === tab;
                this.tabs[i].d_active = active;
                this.tabs[i].$emit('update:active', active);
            }

            this.updateInkBar();
        },
        onTabKeydown(event, tab) {
            if (event.which === 13) {
                this.onTabClick(event, tab);
            }
        },
        findActiveTabIndex() {
            for (let i = 0; i < this.tabs.length; i++) {
                let tab = this.tabs[i];
                if (tab.d_active) {
                    return i;
                }
            }

            return null;
        },
        updateInkBar() {
            let tabHeader = this.$refs.nav.children[this.findActiveTabIndex()];
            this.$refs.inkbar.style.width = DomHandler.getWidth(tabHeader) + 'px';
            this.$refs.inkbar.style.left =  DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.$refs.nav).left + 'px';
        }
    },
    computed: {
        tabs() {
            return this.d_children.filter(child => child.$vnode.tag.indexOf('tabpanel') !== -1);
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