<template>
    <ul ref="element" :class="containerClass" role="menu">
        <template v-for="(item, i) of model">
            <li role="menuitem" :class="getItemClass(item)" :style="item.style" v-if="item.visible !== false && !item.separator" :key="item.label + i">
                <router-link v-if="item.to" :to="item.to" class="p-menuitem-link">
                    <span :class="['p-menuitem-icon', item.icon]"></span>
                    <span class="p-menuitem-text">{{item.label}}</span>
                </router-link>
                <a v-else :href="item.url||'#'" class="p-menuitem-link" @click="onClick" :target="item.target">
                    <span :class="['p-menuitem-icon', item.icon]"></span>
                    <span class="p-menuitem-text">{{item.label}}</span>
                    <span class="p-submenu-icon pi pi-fw pi-caret-right" v-if="item.items"></span>
                </a>
                <sub-menu :model="item.items" v-if="item.visible !== false && item.items" :key="item.label + '_sub_'"></sub-menu>
            </li>
            <li class="p-menu-separator" :style="item.style" v-if="item.visible !== false && item.separator" :key="'separator' + i"></li>
        </template>
    </ul>
</template>

<script>
export default {
    name: 'sub-menu',
    props: {
        model: {
            type: Array,
            default: null
        },
        root: {
            type: Boolean,
            default: false
        },
        popup: {
            type: Boolean,
            default: false
        },
        parentActive: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        getItemClass(item) {
            return [
                'p-menuitem', {
                    'p-disabled': item.disabled
                }
            ]
        }
    },
    computed: {
        containerClass() {
            return {'p-submenu-list': !this.root};
        }
    } 
}
</script>