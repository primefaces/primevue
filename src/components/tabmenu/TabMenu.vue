<template>
    <div class="p-tabmenu p-component">
        <ul ref="nav" class="p-tabmenu-nav p-reset" role="tablist">
            <template v-for="(item,i) of model">
                <li :key="item.label + '_' + i" :class="getItemClass(item)" :style="item.style" v-if="visible(item)" role="tab" :aria-selected="isActive(item)" :aria-expanded="isActive(item)">
                    <router-link v-if="item.to && !item.disabled" :to="item.to" class="p-menuitem-link" @click.native="onItemClick($event, item)" role="presentation" v-ripple>
                        <span :class="getItemIcon(item)" v-if="item.icon"></span>
                        <span class="p-menuitem-text">{{item.label}}</span>
                    </router-link>
                    <a v-else :href="item.url" class="p-menuitem-link" :target="item.target" @click="onItemClick($event, item)" role="presentation" :tabindex="item.disabled ? null : '0'" v-ripple>
                        <span :class="getItemIcon(item)" v-if="item.icon"></span>
                        <span class="p-menuitem-text">{{item.label}}</span>
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
        }
    },
    mounted() {
        this.updateInkBar();
    },
    updated() {
        this.updateInkBar();
    },
    methods: {
        onItemClick(event, item) {
            if (item.disabled) {
                event.preventDefault();
                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }
        },
        isActive(item) {
            return this.activeRoute.startsWith(item.to);
        },
        getItemClass(item) {
            return ['p-tabmenuitem', item.class, {
                'p-highlight': this.isActive(item),
                'p-disabled': item.disabled
            }];
        },
        getItemIcon(item) {
            return ['p-menuitem-icon', item.icon];
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
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
.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: wrap;
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
