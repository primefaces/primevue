<template>
    <li v-for="(menuitem, index) in menu" :key="`_root${index}`">
        <button v-if="menuitem.children && root" v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }" type="button" class="p-link">
            <div class="menu-icon">
                <i :class="menuitem.icon"></i>
            </div>
            <span>{{ menuitem.name }}</span>
            <i class="menu-toggle-icon pi pi-angle-down"></i>
        </button>

        <a v-if="menuitem.href" :href="menuitem.href" target="_blank" rel="noopener noreferrer">
            <div v-if="menuitem.icon && root" class="menu-icon">
                <i :class="menuitem.icon"></i>
            </div>
            {{ menuitem.name }}
        </a>
        <PrimeVueNuxtLink v-if="menuitem.to" :to="menuitem.to" :class="{ 'router-link-active': menuitem.to === $route.fullPath }">
            <div v-if="menuitem.icon && root" class="menu-icon">
                <i :class="menuitem.icon"></i>
            </div>
            {{ menuitem.name }}
        </PrimeVueNuxtLink>

        <span v-if="!root && menuitem.children" class="menu-child-category">{{ menuitem.name }}</span>
        <div class="overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out" :class="{ hidden: menuitem.children && root && isActiveRootmenuItem(menuitem) }">
            <ol>
                <AppMenuItem :root="false" :menu="menuitem.children"></AppMenuItem>
            </ol>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        root: {
            type: Boolean,
            default: true
        },
        menu: {
            type: Object,
            default: null
        }
    },
    methods: {
        isActiveRootmenuItem(menuitem) {
            return menuitem.children && !menuitem.children.some((item) => item.to === `/${this.$router.currentRoute.value.name}` || (item.children && item.children.some((it) => it.to === `/${this.$router.currentRoute.value.name}`)));
        }
    }
};
</script>
