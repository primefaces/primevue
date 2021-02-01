<script>
import UniqueComponentId from '../utils/UniqueComponentId';

export default {
    name: 'accordion',
    props: {
        multiple: Boolean,
        activeIndex: [Number,Array]
    },
    data() {
        return {
            d_activeIndex: this.activeIndex,
            allChildren: null
        }
    },
    mounted() {
        this.allChildren = this.$children;
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
        isTabDisabled(tab) {
            return tab.disabled;
        },
        getTabClass(i) {
            return ['p-accordion-tab', {'p-accordion-tab-active': this.isTabActive(i)}];
        },
        getTabHeaderClass(tab, i) {
            return ['p-accordion-header', {'p-highlight': this.isTabActive(i), 'p-disabled': this.isTabDisabled(tab)}];
        },
        getTabAriaId(i) {
            return this.ariaId + + '_' + i;
        },
        getHeaderIcon(i) {
            const active = this.isTabActive(i);
            return ['p-accordion-toggle-icon pi', {'pi-chevron-right': !active, 'pi-chevron-down': active}];
        },
        isAccordionTab(child) {
            return child.componentOptions.tag === 'AccordionTab';
        }
    },
    computed: {
        tabs() {
           let tabs = [];

            if (this.allChildren) {
                tabs = this.allChildren.filter(child => child.$vnode.tag.indexOf('accordiontab') !== -1);
            }
            return tabs;
        },
        ariaId() {
            return UniqueComponentId();
        }
    },
    render() {
        return (
            <div class="p-accordion p-component">
             {this.$slots.default}
                {
                    this.tabs.map((tab, i) => {
                        const headerContent = tab.header || [
                            <span class="p-accordion-header-text">{tab.$slots.header}</span>,
                            <span></span>
                        ]
                        return ([
                            <div class={this.getTabClass(i)}>
                                <div class={this.getTabHeaderClass(tab, i)}>
                                    <a role="tab" class="p-accordion-header-link" on-click={e => this.onTabClick(e, tab, i)} on-keydown={e => this.onTabKeydown(e, tab, i)} tabindex={this.isTabDisabled(tab) ? null : '0'}
                                            aria-expanded={this.isTabActive(i)} id={this.getTabAriaId(i) + '_header'} aria-controls={this.getTabAriaId(i) + '_content'}>
                                        <span class={this.getHeaderIcon(i)}></span>
                                        {headerContent}
                                    </a>
                                </div>
                            </div>,
                            <transition name="p-toggleable-content">
                                <div class="p-toggleable-content" v-show={this.isTabActive(i)}
                                        role="region" id={this.getTabAriaId(i) + '_content'} aria-labelledby={this.getTabAriaId(i) + '_header'}>
                                    <div class="p-accordion-content">
                                        {tab.$slots.default}
                                    </div>
                                </div>
                            </transition>
                        ])
                    })
                }
            </div>
        );
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