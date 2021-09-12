<template>
    <li :class="containerClass" role="none" :style="item.style" v-if="visible()">
        <template v-if="!template">
            <router-link v-if="item.to && !disabled(item)" :to="item.to" custom v-slot="{navigate, href, isActive, isExactActive}">
                <a :href="href" @click="onClick($event, navigate)" :class="linkClass(item, {isActive, isExactActive})" v-ripple role="menuitem">
                    <span :class="['p-menuitem-icon', item.icon]"></span>
                    <span class="p-menuitem-text">{{item.label}}</span>
                </a>
            </router-link>
            <a v-else :href="item.url" :class="linkClass(item)" @click="onClick" :target="item.target" role="menuitem" :tabindex="disabled(item) ? null : '0'" v-ripple>
                <span :class="['p-menuitem-icon', item.icon]"></span>
                <span class="p-menuitem-text">{{item.label}}</span>
            </a>
        </template>
        <component v-else :is="template" :item="item"></component>
    </li>
</template>

<script>
import Ripple from 'primevue/ripple';

export default {
    name: 'Menuitem',
    inheritAttrs: false,
    emits: ['click'],
    props: {
        item: null,
        template: null,
        exact: null
    },
    methods: {
        onClick(event, navigate) {
            this.$emit('click', {
                originalEvent: event,
                item: this.item,
                navigate: navigate
            });
        },
        linkClass(item, routerProps) {
            return ['p-menuitem-link', {
                'p-disabled': this.disabled(item),
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
        },
        visible() {
            return (typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false);
        },
        disabled(item) {
            return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
        }
    },
    computed: {
        containerClass() {
            return ['p-menuitem', this.item.class];
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
