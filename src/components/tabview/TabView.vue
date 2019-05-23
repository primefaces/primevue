<script>
export default {
    data() {
        return {
            tabs: []
        };
    },
    mounted() {
        this.tabs = this.$children;
        
        let activeTab = this.findActiveTab();
        if (!activeTab && this.tabs.length) {
            this.tabs[0].d_active = true;
        }
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
                this.tabs[i].d_active = this.tabs[i] === tab;
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
    render() {
        return (
            <div class="p-tabview p-component p-tabview-top">
                <ul class="p-tabview-nav p-reset" role="tablist">
                    {
                        this.tabs.map(tab => {
                            return (
                                <li role="presentation" key={tab.header} class={['p-unselectable-text', {'p-highlight': (tab.d_active), 'p-disabled': tab.disabled}]}>
                                     <a role="tab" on-click={event => this.onTabClick(event, tab)} on-keydown={event => this.onTabKeydown(event, tab)} tabindex={tab.disabled ? null : '0'}>
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