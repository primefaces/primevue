<template>
    <div class="p-tabmenu p-component">
        <ul ref="nav" class="p-tabmenu-nav p-reset" role="tablist">
            <template v-for="(item,i) of model">
                <li :key="label(item) + '_' + i" :class="getItemClass(item, i)" :style="item.style" v-if="visible(item)" role="tab" :aria-selected="isActive(item)" :aria-expanded="isActive(item)">
                    <router-link v-if="item.to && !disabled(item)" :to="item.to" class="p-menuitem-link" @click.native="onItemClick($event, item, i)" role="presentation" v-ripple>
                        <span :class="getItemIcon(item)" v-if="item.icon"></span>
                        <span class="p-menuitem-text">{{label(item)}}</span>
                    </router-link>
                    <a v-else :href="item.url" class="p-menuitem-link" :target="item.target" @click="onItemClick($event, item, i)" role="presentation" :tabindex="disabled(item) ? null : '0'" v-ripple>
                        <span :class="getItemIcon(item)" v-if="item.icon"></span>
                        <span class="p-menuitem-text">{{label(item)}}</span>
                    </a>
                </li>
            </template>
            <li ref="inkbar" class="p-tabmenu-ink-bar"></li>
        </ul>
    </div>
</template>

<script>
import DomHandler from '../utils/DomHandler';
import Ripple from '../ripple/Ripple';

export default {
    props: {
		model: {
            type: Array,
            default: null
        },
        activeIndex: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            d_activeIndex: this.activeIndex
        }
    },
    mounted() {
        this.updateInkBar();
    },
    updated() {
        this.updateInkBar();
    },
    watch: {
        activeIndex(newValue) {
            this.d_activeIndex = newValue;
        }
    },
    methods: {
        onItemClick(event, item, index) {
            if (this.disabled(item)) {
                event.preventDefault();
                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }

            if (index !== this.d_activeIndex) {
                this.d_activeIndex = index;
                this.$emit('update:activeIndex', this.d_activeIndex);
            }
            this.$emit('tab-change', {
                originalEvent: event,
                index: index
            });
        },
        isActive(item) {
            return this.activeRoute.startsWith(item.to);
        },
        getItemClass(item, index) {
            return ['p-tabmenuitem', item.class, {
                'p-highlight': this.isActive(item) || this.d_activeIndex === index,
                'p-disabled': this.disabled(item)
            }];
        },
        getItemIcon(item) {
            return ['p-menuitem-icon', item.icon];
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        },
        disabled(item) {
            return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
        },
        label(item) {
            return (typeof item.label === 'function' ? item.label() : item.label);
        },
        findActiveTabIndex() {
            if (this.model) {
                for (let i = 0; i < this.model.length; i++) {
                    if (this.isActive(this.model[i])) {
                        return i;
                    }
                }
            }

            return null;
        },
        updateInkBar() {
            let activeTabIndex = this.findActiveTabIndex();
            if (activeTabIndex !== null) {
                let tabHeader = this.$refs.nav.children[activeTabIndex];
                this.$refs.inkbar.style.width = DomHandler.getWidth(tabHeader) + 'px';
                this.$refs.inkbar.style.left =  DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.$refs.nav).left + 'px';
            }
            else {
                this.$refs.inkbar.style.width = '0px';
                this.$refs.inkbar.style.left =  '0px';
            }

        }
    },
    computed: {
        activeRoute() {
            return this.$route.path;
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: nowrap;
}

.p-tabmenu-nav a {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    text-decoration: none;
    overflow: hidden;
}

.p-tabmenu-nav a:focus {
    z-index: 1;
}

.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}

.p-tabmenu-ink-bar {
    display: none;
    z-index: 1;
}
</style>
