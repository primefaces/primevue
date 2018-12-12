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
            if (!tab.disabled && index !== this.d_activeTabIndex) {
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
        },
        onTabKeydown(event, index) {
            if (event.which === 13) {
                this.onTabClick(index);
            }
        }
    },
    render() {
        return (
            <div class="p-tabview p-component p-tabview-top">
                <ul class="p-tabview-nav p-resest" role="tablist">
                    {
                        this.tabs.map((tab, i) => {
                            return (
                                <li role="presentation" key={tab.header} class={{'p-highlight': (this.d_activeTabIndex === i), 'p-disabled': tab.disabled}}>
                                     <a role="tab" on-click={event => this.onTabClick(event, tab, i)} on-keydown={event => this.onTabKeydown(event, i)} tabindex={tab.disabled ? null : '0'}>
                                        {tab.header && <span class="p-tabview-title">{tab.header}</span>}
                                        {tab.$slots.header}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
                <div class="p-tabview-panels">
                    {this.$slots.default}
                </div>
            </div>
        );
    }
}
</script>