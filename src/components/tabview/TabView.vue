<script>
import DomHandler from '../utils/DomHandler';
import Ripple from '../ripple/Ripple';

export default {
    data() {
        return {
            allChildren: null,
            d_activeIndex: this.activeIndex
        };
    },
    props: {
        activeIndex: {
            type: Number,
            default: 0
        }
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
        },
        onTabKeydown(event, i) {
            if (event.which === 13) {
                this.onTabClick(event, i);
            }
        },
        updateInkBar() {
            let tabHeader = this.$refs.nav.children[this.d_activeIndex];
            this.$refs.inkbar.style.width = DomHandler.getWidth(tabHeader) + 'px';
            this.$refs.inkbar.style.left =  DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.$refs.nav).left + 'px';
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
    render() {
        return (
            <div class="p-tabview p-component">
                {this.$slots.default}
                <ul ref="nav" class="p-tabview-nav" role="tablist">
                    {
                        this.tabs.map((tab, i) => {
                            const headerContent = tab.header || [
                                <span class="p-tabview-title">{tab.$slots.header}</span>,
                                <span></span>
                            ]
                            return ([
                                <li role="presentation" key={tab.header || i} class={[{'p-highlight': (this.d_activeIndex === i), 'p-disabled': tab.disabled}]}>
                                    <a role="tab" class="p-tabview-nav-link" on-click={e => this.onTabClick(e, i)} on-keydown={e => this.onTabKeydown(e, tab)}
                                            tabindex={tab.disabled ? null : '0'} aria-selected={tab.d_activeIndex} v-ripple>
                                        {headerContent}
                                    </a>
                                </li>
                            ])
                        })
                    }
                    <li ref="inkbar" class="p-tabview-ink-bar"></li>
                </ul>
                <div class="p-tabview-panels">
                {
                    this.tabs.map((tab, i) => {
                        return(
                            <div class="p-tabview-panel" role="tabpanel" v-show={(this.d_activeIndex === i)}>
                                {tab.$slots.default}
                            </div>
                        )
                    })
                }
            </div>
                </div>
        );
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