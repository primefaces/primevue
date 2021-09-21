<template>
    <li :class="containerClass" v-if="visible()">
        <router-link v-if="item.to" :to="item.to" custom v-slot="{navigate, href, isActive, isExactActive}">
            <a :href="href" @click="onClick($event, navigate)" :class="linkClass({isActive, isExactActive})">
                <span v-if="item.icon" :class="iconClass"></span>
                <span v-if="item.label" class="p-menuitem-text">{{item.label}}</span>
            </a>
        </router-link>
        <a v-else :href="item.url||'#'" :class="linkClass()" @click="onClick" :target="item.target">
            <span v-if="item.icon" :class="iconClass"></span>
            <span v-if="item.label" class="p-menuitem-text">{{item.label}}</span>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        item: null,
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
        linkClass(routerProps) {
            return ['p-menuitem-link', {
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
        },
        visible() {
            return (typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false);
        }
    },
    computed: {
        containerClass() {
            return [{'p-disabled': this.item.disabled}, this.item.class];
        },
        iconClass() {
            return ['p-menuitem-icon', this.item.icon];
        }
    }
}
</script>