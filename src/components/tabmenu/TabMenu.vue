<template>
    <div class="p-tabmenu p-component">
        <ul ref="nav" class="p-tabmenu-nav p-reset" role="tablist">
            <template v-for="(item,i) of model" :key="item.label + '_' + i.toString()">
                <router-link v-if="item.to && !disabled(item)" :to="item.to" custom v-slot="{navigate, href, isActive, isExactActive}">
                    <li :class="getRouteItemClass(item,isActive,isExactActive)" :style="item.style" v-if="visible(item)" role="tab">
                        <template v-if="!$slots.item">
                            <a :href="href" class="p-menuitem-link" @click="onItemClick($event, item, i, navigate)" role="presentation" v-ripple>
                                <span :class="getItemIcon(item)" v-if="item.icon"></span>
                                <span class="p-menuitem-text">{{item.label}}</span>
                            </a>
                        </template>
                        <component v-else :is="$slots.item" :item="item"></component>
                    </li>
                </router-link>
                <li v-else-if="visible(item)" :class="getItemClass(item, i)" role="tab">
                    <template v-if="!$slots.item">
                        <a :href="item.url" class="p-menuitem-link" :target="item.target" @click="onItemClick($event, item, i)" role="presentation" :tabindex="disabled(item) ? null : '0'" v-ripple>
                            <span :class="getItemIcon(item)" v-if="item.icon"></span>
                            <span class="p-menuitem-text">{{item.label}}</span>
                        </a>
                     </template>
                     <component v-else :is="$slots.item" :item="item"></component>
                </li>
            </template>
            <li ref="inkbar" class="p-tabmenu-ink-bar"></li>
        </ul>
    </div>
</template>

<script>
import {DomHandler} from 'primevue/utils';
import Ripple from 'primevue/ripple';

export default {
    name: 'TabMenu',
    emits: ['update:activeIndex', 'tab-change'],
    props: {
		model: {
            type: Array,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        },
        activeIndex: {
            type: Number,
            default: 0
        }
    },
    timeout: null,
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
    beforeUnmount() {
        clearTimeout(this.timeout);
    },
    watch: {
        $route() {
            this.timeout = setTimeout(() => this.updateInkBar(), 50);
        },
        activeIndex(newValue) {
            this.d_activeIndex = newValue;
        }
    },
    methods: {
        onItemClick(event, item, index, navigate) {
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

            if (item.to && navigate) {
                navigate(event);
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
        getItemClass(item, index) {
            return ['p-tabmenuitem', item.class, {
                'p-highlight': this.d_activeIndex === index,
                'p-disabled': this.disabled(item)
            }];
        },
        getRouteItemClass(item, isActive, isExactActive) {
            return ['p-tabmenuitem', item.class, {
                 'p-highlight': this.exact ? isExactActive : isActive,
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
        updateInkBar() {
            let tabs = this.$refs.nav.children;
            let inkHighlighted = false;
            for (let i = 0; i < tabs.length; i++) {
                let tab = tabs[i];
                if (DomHandler.hasClass(tab, 'p-highlight')) {
                    this.$refs.inkbar.style.width = DomHandler.getWidth(tab) + 'px';
                    this.$refs.inkbar.style.left =  DomHandler.getOffset(tab).left - DomHandler.getOffset(this.$refs.nav).left + 'px';
                    inkHighlighted = true;
                }
            }

            if (!inkHighlighted) {
                this.$refs.inkbar.style.width = '0px';
                this.$refs.inkbar.style.left =  '0px';
            }
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

.p-tabmenu::-webkit-scrollbar {
    display: none;
}
</style>
