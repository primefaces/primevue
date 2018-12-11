<template>
    <div class="p-tabview p-component p-tabview-top">
        <ul class="p-tabview-nav p-resest" role="tablist">
            <li role="presentation" v-for="(tab,i) of tabs" :key="tab.header" 
                :class="{'p-highlight': (d_activeTabIndex === i), 'p-disabled': tab.disabled}">
                <a role="tab" @click="onTabClick($event, tab, i)" @keydown.enter="onTabClick($event, tab, i)"> 
                    <span class="p-tabview-title">{{tab.header}}</span>
                </a>
            </li>
        </ul>
        <div class="p-tabview-panels">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        activeIndex: {
            type: Number,
            default: 0,
        },
        orientation: {
            type: String,
            default: 'top'
        }
    },
    data() {
        return {
            d_activeTabIndex: this.activeIndex,
            tabs: []
        };
    },
    watch: {
        activeIndex(newValue) {
            this.activateTab(newValue);
        }
    },
    mounted() {
        this.tabs = this.$children;
        this.tabs[this.activeIndex].active = true;
    },
    methods: {
        onTabClick(event, tab, index) {
            if (!tab.disabled) {
                this.activateTab(index);

                this.$emit('tabchange', {
                    tab: tab,
                    index: index
                });
            }           
        },
        activateTab(index) {
            this.d_activeTabIndex = index;
            for (let i = 0; i < this.tabs.length; i++) {
                this.tabs[i].active = (i === index);
            } 
        }
    }
}
</script>