<template>
    <div class="p-tabmenu p-component">
        <ul class="p-tabmenu-nav p-reset" role="tablist">
            <template v-for="(item,i) of model">
                <li :key="item.label + '_' + i" :class="getItemClass(item)" :style="item.style" v-if="visible(item)" role="tab" :aria-selected="isActive(item)" :aria-expanded="isActive(item)">
                    <router-link v-if="item.to && !item.disabled" :to="item.to" class="p-menuitem-link" @click.native="onItemClick($event, item)" role="presentation">
                        <span :class="getItemIcon(item)" v-if="item.icon"></span>
                        <span class="p-menuitem-text">{{item.label}}</span>
                    </router-link>
                    <a v-else :href="item.url" class="p-menuitem-link" :target="item.target" @click="onItemClick($event, item)" role="presentation" :tabindex="item.disabled ? null : '0'">
                        <span :class="getItemIcon(item)" v-if="item.icon"></span>
                        <span class="p-menuitem-text">{{item.label}}</span>
                    </a>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
		model: {
            type: Array,
            default: null
        }
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
            return this.activeRoute === item.to || this.activeRoute === item.to + '/' ;
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
        }
    },
    computed: {
        activeRoute() {
            return this.$route.path;
        }
    }
}
</script>

<style>
.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-tabmenu-nav a {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
}

.p-tabmenu-nav a:focus {
    z-index: 1;
}

.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}
</style>
