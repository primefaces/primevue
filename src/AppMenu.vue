<template>
    <div :class="['layout-sidebar', {'active': active}]">
        <div class="layout-menu">
            <template v-for="item of menu" :key="item.name">
                <div class="menu-category">{{item.name}}</div>
                <div class="menu-items">
                    <template v-for="child of item.children" :key="child.name">
                        <a v-if="child.href" :href="child.href" target="_blank">{{child.name}}</a>
                        <router-link v-if="child.to" :to="child.to">
                            {{child.name}}
                            <Tag v-if="child.badge" :value="child.badge"></Tag>
                        </router-link>
                        <template v-if="child.children">
                           <router-link :to="child.children[0].to" v-slot="{isActive}" custom>
                                <div>
                                    <a tabindex="0" @click="toggleSubmenu($event, child.meta[0])">{{child.name}}</a>
                                    <transition name="p-toggleable-content">
                                        <div class="p-toggleable-content" v-show="isSubmenuActive(child.meta[0], isActive)">
                                            <ul>
                                                <li v-for="(submenuitem, i) of child.children" :key="i">
                                                    <router-link :to="submenuitem.to">{{submenuitem.name}}</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </transition>
                                </div>
                            </router-link>
                        </template>
                    </template>
                </div>
            </template> 
        </div>
    </div>
</template>

<script>
import MenuService from './service/MenuService';

export default {
    props: {
        active: Boolean
    },
    data() {
        return {
            activeSubmenus: {},
            menu: null
        }
    },
    menuService: null,
    created() {
        this.menuService = new MenuService();
    },
    mounted() {
        this.menuService.getMenu().then(data => {
            this.menu = data;
            this.filteredMenu = data;
        })
    },
    methods: {
        toggleSubmenu(event, name) {
            this.activeSubmenus[name] = this.activeSubmenus[name] ? false: true;
            this.activeSubmenus = {...this.activeSubmenus};
            event.preventDefault();
        },
        isSubmenuActive(name, routerIsActive) {
            if (this.activeSubmenus[name]) {
                return true;
            }
            else if (routerIsActive) {
                this.activeSubmenus[name] = true;
                return true;
            }
            return false;
        }
    }
}
</script>
