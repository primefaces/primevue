<template>
    <li :class="containerClass(item)" v-if="visible()">
        <router-link v-if="item.to" :to="item.to" custom v-slot="{navigate, href, isActive, isExactActive}">
            <a :href="href" @click="onClick($event, navigate)" :class="linkClass({isActive, isExactActive})">
                <span v-if="item.icon" :class="iconClass"></span>
                <span v-if="item.label" class="p-menuitem-text">{{label(item)}}</span>
            </a>
        </router-link>
        <a v-else :href="item.url||'#'" :class="linkClass()" @click="onClick" :target="item.target">
            <span v-if="item.icon" :class="iconClass"></span>
            <span v-if="item.label" class="p-menuitem-text">{{label(item)}}</span>
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
        containerClass(item) {
            return [{'p-disabled': this.disabled(item)}, item.class];
        },
        linkClass(routerProps) {
            return ['p-menuitem-link', {
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
        },
        visible() {
            return (typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false);
        },
        disabled(item) {
            return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
        },
        label() {
            return (typeof this.item.label === 'function' ? this.item.label() : this.item.label);
        }
    },
    computed: {
        iconClass() {
            return ['p-menuitem-icon', this.item.icon];
        }
    }
}
</script>