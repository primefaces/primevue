<template>
    <div class="p-tabview p-component">
        <ul class="p-tabview-nav" role="tablist">
            <li role="presentation" v-for="(tab, i) of tabs" :key="tab.header || i" :class="[{'p-highlight': (tab.d_active), 'p-disabled': tab.disabled}]">
                <a role="tab" @click="onTabClick($event, tab)" @keydown="onTabKeydown($event, tab)" :tabindex="tab.disabled ? null : '0'" :aria-selected="tab.d_active">
                    <span class="p-tabview-title" v-if="tab.header">{{tab.header}}</span>
                    <TabPanelHeaderSlot :tab="tab" v-if="tab.$scopedSlots.header" />
                </a>
            </li>
        </ul>
        <div class="p-tabview-panels">
            <slot></slot>
        </div>
    </div>
</template>

<script>
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
        },
        onTabKeydown(event, tab) {
            if (event.which === 13) {
                this.onTabClick(event, tab);
            }
        },
        findActiveTab() {
            let activeTab;
            for (let i = 0; i < this.tabs.length; i++) {
                let tab = this.tabs[i];
                if (tab.d_active) {
                    activeTab = tab;
                    break;
                }
            }

            return activeTab;
        }
    },
    updated() {
        let activeTab = this.findActiveTab();
        if (!activeTab && this.tabs.length) {
            this.tabs[0].d_active = true;
        }
    },
    computed: {
        tabs() {
            return this.d_children.filter(child => child.$vnode.tag.indexOf('tabpanel') !== -1);
        }
    },
    components: {
        'TabPanelHeaderSlot': TabPanelHeaderSlot
    }
}
</script>

<style>
.p-tabview-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-tabview-nav a {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
}

.p-tabview-nav li.p-disabled a {
    cursor: auto;
}
</style>