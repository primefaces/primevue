<template>
    <div :class="['layout-sidebar', {'active': active}]">
        <div class="layout-sidebar-filter p-fluid p-input-filled">
            <AutoComplete v-model="selectedRoute" :suggestions="filteredRoutes" @complete="searchRoute($event)" @item-select="onItemSelect($event)" scrollHeight="300px" placeholder="Search" 
                field="name" optionGroupLabel="name" optionGroupChildren="children">
            </AutoComplete>
        </div>
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
                                    <a tabindex="0" @click="toggleSubmenu($event, child.meta[0])">
                                        {{child.name}}
                                        <Tag v-if="child.badge" :value="child.badge"></Tag>
                                    </a>
                                    <transition name="p-toggleable-content">
                                        <div class="p-toggleable-content" v-show="isSubmenuActive(child.meta[0], isActive)">
                                            <ul>
                                                <li v-for="(submenuitem, i) of child.children" :key="i">
                                                    <router-link :to="submenuitem.to">
                                                        {{submenuitem.name}}
                                                        <Tag v-if="submenuitem.badge" :value="submenuitem.badge"></Tag>
                                                    </router-link>
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
import {FilterService,FilterMatchMode} from 'primevue/api';

export default {
    props: {
        active: Boolean
    },
    data() {
        return {
            activeSubmenus: {},
            menu: null,
            filteredRoutes: null,
            selectedRoute: null,
            routes: []
        }
    },
    menuService: null,
    created() {
        this.menuService = new MenuService();
    },
    mounted() {
        this.menuService.getMenu().then(data => {
            this.menu = data;

            data.forEach((route) => {
                let childRoute = {...route};
                childRoute.children = childRoute.children.filter((child) => {
                    if (child.meta) {
                        this.routes.push(child);
                    }

                    return !child.meta;
                })

                this.routes.push(childRoute);            
            });
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
        },
        searchRoute(event) {
            let query = event.query;
            let filteredRoutes = [];

            for (let route of this.routes) {
                let filteredItems = FilterService.filter(route.children, ['to', 'href'], query, FilterMatchMode.CONTAINS);
                if (filteredItems && filteredItems.length) {
                    filteredRoutes.push({name: route.name, children: filteredItems});
                }
            }

            this.filteredRoutes = filteredRoutes;
        },
        onItemSelect(event) {
            this.selectedRoute = null;
            
            if (event.value.to)
                this.$router.push(event.value.to)
            else if (event.value.href)
                window.location.href = event.value.href;
        }
    }
}
</script>
