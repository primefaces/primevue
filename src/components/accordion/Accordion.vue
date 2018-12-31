<script>
export default {
    props: {
        multiple: Boolean
    },
    data() {
        return {
            tabs: []
        };
    },
    mounted() {
        this.tabs = this.$children;
    },
    methods: {
        onTabClick(event, tab) {
            if (!tab.disabled) {              
                if (!this.multiple && !tab.d_active) {
                    this.tabs.forEach(tab => tab.d_active = false);
                }

                tab.d_active = !tab.d_active;
                let eventName = !tab.active ? 'tabclose' : 'tabopen';
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
    render() {
        return (
            <div class="p-accordion p-component">
                {this.$slots.default}
                {
                    this.tabs.map((tab, i) => {
                        return (
                            <div key={tab.header||i} class="p-accordion-tab">
                                <div class={['p-accordion-header', {'p-highlight': tab.d_active, 'p-disabled': tab.disabled}]}>
                                    <a role="tab" on-click={event => this.onTabClick(event, tab)} on-keydown={event => this.onTabKeydown(event, tab)} tabindex={tab.disabled ? null : '0'}>
                                        <span class="p-accordion-toggle-icon pi pi-fw pi-caret-right"></span>
                                        {tab.header && <span class="p-accordion-header-text">{tab.header}</span>}
                                        {tab.$slots.header}
                                    </a>
                                </div>
                                <transition name="p-accordion-content-wrapper">
                                    {
                                        <div class="p-accordion-content-wrapper" v-show={tab.d_active}>
                                            <div class="p-accordion-content">
                                                {tab.$slots.default}
                                            </div>
                                        </div>
                                    }
                                </transition>
                            </div>
                        );
                    })
                }
            </div>
        )
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

.p-accordion .p-accordion-header > a { 
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

.p-accordion-content-wrapper-enter,
.p-accordion-content-wrapper-leave-to {
    max-height: 0;
}

.p-accordion-content-wrapper-enter-to,
.p-accordion-content-wrapper-leave {
    max-height: 1000px;
}

.p-accordion-content-wrapper-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-accordion-content-wrapper-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}
</style>