<template>
    <div class="p-tabview p-component p-tabview-top">
        <ul class="p-tabview-nav p-reset" role="tablist">
            <li role="presentation" v-for="(tab, i) of tabs" :key="tab.header || i" :class="['p-unselectable-text', {'p-highlight': (tab.d_active), 'p-disabled': tab.disabled}]">
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
.p-tabview {
    padding: .25em;
}

.p-tabview .p-tabview-nav {
    margin: 0;
}

.p-tabview .p-tabview-nav:after {
    content: "";
    display: table;
    clear: both;
}

.p-tabview .p-tabview-nav li {
    list-style: none;
    float: left;
    position: relative;
    margin: 0 .125em 1px 0;
    padding: 0;
    white-space: nowrap;
}

.p-tabview .p-tabview-nav li a {
    float: left;
    padding: .5em 1em;
    text-decoration: none;
}

.p-tabview .p-tabview-nav li.p-tabview-selected a,
.p-tabview .p-tabview-nav li.p-disabled a,
.p-tabview .p-tabview-nav li.p-state-processing a {
    cursor: text;
}

.p-tabview .p-tabview-nav li a,
.p-tabview.p-tabview-collapsible .p-tabview-nav li.p-tabview-selected a {
    cursor: pointer;
}

.p-tabview .p-tabview-panel {
    border-width: 0;
    padding: 1em;
    background: none;
}

.p-tabview .p-tabview-nav li {
    display: block;
}

.p-tabview .p-tabview-nav li .p-tabview-left-icon,
.p-tabview .p-tabview-nav li .p-tabview-right-icon,
.p-tabview .p-tabview-nav li .p-tabview-title {
    vertical-align: middle;
}

.p-tabview .p-tabview-nav li .p-tabview-left-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.p-tabview .p-tabview-nav li .p-tabview-right-icon {
    margin-left: .25em;
    vertical-align: middle;
}

.p-tabview .p-tabview-nav li .p-tabview-close {
    margin: 0.5em 0.3em 0 0;
    cursor: pointer;
}

/* per orientation settings */
/* top and bottom */
.p-tabview.p-tabview-top > .p-tabview-nav li {
    border-bottom: 0;
    top: 1px;
}

.p-tabview.p-tabview-top > .p-tabview-nav {
    padding: .2em .2em 0;
}

.p-tabview.p-tabview-bottom > .p-tabview-nav {
    padding: 0 .2em .2em;
}

.p-tabview.p-tabview-bottom > .p-tabview-nav li {
    border-top: 0;
}

/* left and right*/
.p-tabview-left:after,
.p-tabview-right:after {
    clear:both;
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
}

.p-tabview-left > .p-tabview-nav {
    float:left;
    width: 25%;
    height: 300px;
    background-image: none;
    padding-top: 1px;
}

.p-tabview-left > .p-tabview-panels {
    float:right;
    width: 75%;
}

.p-tabview.p-tabview-left > .p-tabview-nav li,
.p-tabview.p-tabview-right > .p-tabview-nav li{
    display: block;
    float: right;
    white-space: normal;
    width: 99%;
}

.p-tabview.p-tabview-left > .p-tabview-nav li {
    margin: 0 0 1px 0;
    border-right:0 none;
}

.p-tabview.p-tabview-right > .p-tabview-nav {
    float:right;
    width: 25%;
    height: 300px;
    background-image: none;
    padding-top: 1px;
}

.p-tabview.p-tabview-right > .p-tabview-panels {
    float:left;
    width: 75%;
}

.p-tabview.p-tabview-right > .p-tabview-nav li {
    margin: 0 0 1px 0;
    border-left:0 none;
}
/* RTL */
.p-rtl .p-tabview .p-tabview-nav li {
    float: right;
}
</style>