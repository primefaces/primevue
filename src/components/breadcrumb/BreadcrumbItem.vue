<template>
    <li v-if="visible()" :class="containerClass(item)">
        <template v-if="!template">
            <router-link v-if="item.to" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                <a :href="href" :class="linkClass({ isActive, isExactActive })" :aria-current="isCurrentUrl()" @click="onClick($event, navigate)">
                    <span v-if="item.icon" :class="iconClass"></span>
                    <span v-if="item.label" class="p-menuitem-text">{{ label() }}</span>
                </a>
            </router-link>
            <a v-else :href="item.url || '#'" :class="linkClass()" :target="item.target" :aria-current="isCurrentUrl()" @click="onClick">
                <span v-if="item.icon" :class="iconClass"></span>
                <span v-if="item.label" class="p-menuitem-text">{{ label() }}</span>
            </a>
        </template>
        <component v-else :is="template" :item="item"></component>
    </li>
</template>

<script>
export default {
    name: 'BreadcrumbItem',
    props: {
        item: null,
        template: null,
        exact: null
    },
    methods: {
        onClick(event, navigate) {
            if (this.item.command) {
                this.item.command({
                    originalEvent: event,
                    item: this.item
                });
            }

            if (this.item.to && navigate) {
                navigate(event);
            }
        },
        containerClass(item) {
            return ['p-menuitem', { 'p-disabled': this.disabled(item) }, this.item.class];
        },
        linkClass(routerProps) {
            return [
                'p-menuitem-link',
                {
                    'router-link-active': routerProps && routerProps.isActive,
                    'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
                }
            ];
        },
        visible() {
            return typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false;
        },
        disabled(item) {
            return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
        },
        label() {
            return typeof this.item.label === 'function' ? this.item.label() : this.item.label;
        },
        isCurrentUrl() {
            const { to, url } = this.item;
            const lastPath = `/${window.location.href.split('/').pop()}`;

            return to === lastPath || url === lastPath ? 'page' : undefined;
        }
    },
    computed: {
        iconClass() {
            return ['p-menuitem-icon', this.item.icon];
        }
    }
};
</script>
