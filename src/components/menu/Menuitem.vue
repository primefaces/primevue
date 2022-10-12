<template>
    <li v-if="visible()" :class="containerClass" role="presentation" :style="item.style">
        <template v-if="!template">
            <router-link v-if="item.to && !disabled(item)" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                <a :id="id" v-ripple :href="href" :class="linkClass(item, { isActive, isExactActive })" :tabindex="-1" role="menuitem" :aria-label="label()" :aria-disabled="disabled()" @click="onClick($event, navigate)">
                    <span v-if="item.icon" :class="['p-menuitem-icon', item.icon]"></span>
                    <span class="p-menuitem-text">{{ label() }}</span>
                </a>
            </router-link>
            <a v-else :id="id" v-ripple :href="item.url" :class="linkClass(item)" :target="item.target" :tabindex="-1" role="menuitem" :aria-label="label()" :aria-disabled="disabled()" @click="onClick">
                <span v-if="item.icon" :class="['p-menuitem-icon', item.icon]"></span>
                <span class="p-menuitem-text">{{ label() }}</span>
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
        exact: null,
        id: null,
        focusedOptionId: null
    },
    methods: {
        onClick(event, navigate) {
            this.$emit('click', {
                originalEvent: event,
                item: this.item,
                navigate: navigate,
                id: this.id
            });
        },
        linkClass(item, routerProps) {
            return [
                'p-menuitem-link',
                {
                    'p-focus': this.id === this.focusedOptionId,
                    'p-disabled': this.disabled(item),
                    'router-link-active': routerProps && routerProps.isActive,
                    'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
                }
            ];
        },
        visible() {
            return typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false;
        },
        disabled() {
            return typeof this.item.disabled === 'function' ? this.item.disabled() : this.item.disabled;
        },
        label() {
            return typeof this.item.label === 'function' ? this.item.label() : this.item.label;
        }
    },
    computed: {
        containerClass() {
            return ['p-menuitem', this.item.class];
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
