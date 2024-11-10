<template>
    <li v-for="(menuitem, index) in menu" :key="`_root${index}`">
        <button v-if="menuitem.children && root" v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-slidedown', leaveToClass: 'hidden', leaveActiveClass: 'animate-slideup' }" type="button">
            <span class="menu-icon">
                <i :class="menuitem.icon"></i>
            </span>
            <span>{{ menuitem.name }}</span>
            <i class="menu-toggle-icon pi pi-angle-down"></i>
        </button>

        <a v-if="menuitem.href" :href="menuitem.href" target="_blank" rel="noopener noreferrer">
            <span v-if="menuitem.icon && root" class="menu-icon">
                <i :class="menuitem.icon"></i>
            </span>
            <span>{{ menuitem.name }}</span>
            <Tag v-if="menuitem.badge" :value="menuitem.badge"></Tag>
        </a>

        <PrimeVueNuxtLink v-if="menuitem.to" :to="menuitem.to" :class="{ 'router-link-active': menuitem.to === $route.fullPath }">
            <span v-if="menuitem.icon && root" class="menu-icon">
                <i :class="menuitem.icon"></i>
            </span>
            <span>{{ menuitem.name }}</span>
            <Tag v-if="menuitem.badge" :value="menuitem.badge"></Tag>
        </PrimeVueNuxtLink>

        <span v-if="!root && menuitem.children" class="menu-child-category">{{ menuitem.name }}</span>
        <div v-if="menuitem.children" :class="{ hidden: menuitem.children && root && isActiveRootmenuItem(menuitem) }">
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
            return (
                menuitem.children &&
                !menuitem.children.some((item) => item.to === `/${this.$router.currentRoute.value?.name?.replaceAll('-', '/')}` || (item.children && item.children.some((it) => it.to === `/${this.$router.currentRoute.value.name}`)))
            );
        }
    }
};
</script>
