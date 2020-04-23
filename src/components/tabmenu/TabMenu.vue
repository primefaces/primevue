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
/** TabMenu **/
.p-tabmenu .p-tabmenu-nav {
    margin: 0;
    padding: .25em .5em 0 .25em;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
    list-style: none;
    float: left;
    position: relative;
    margin: 0 .2em 1px 0;
    padding: 0;
    white-space: nowrap;
    display: block;
    border-bottom: 0;
    top: 1px;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem a {
    float: left;
    padding: 0.5em 1em;
    text-decoration: none;
}

.p-tabmenu .p-tabmenu-nav a {
    padding: 0.5em 1em;
}

.p-tabmenu .p-menuitem-icon  {
    margin-right: .25em;
    vertical-align: middle;
}

.p-tabmenu .p-menuitem-text  {
    vertical-align: middle;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-disabled a {
     cursor: default;
}
</style>
