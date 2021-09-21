<template>
    <li :class="containerClass" role="none" :style="item.style" v-if="visible()">
        <router-link v-if="item.to && !item.disabled" :to="item.to" custom v-slot="{navigate, href, isActive, isExactActive}">
            <a :href="href" @click="onClick($event, navigate)" :class="linkClass(item, {isActive, isExactActive})" role="menuitem" v-ripple>
                <span :class="['p-menuitem-icon', item.icon]"></span>
                <span class="p-menuitem-text">{{item.label}}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :class="linkClass(item)" @click="onClick" :target="item.target" role="menuitem" :tabindex="item.disabled ? null : '0'" v-ripple>
            <span :class="['p-menuitem-icon', item.icon]"></span>
            <span class="p-menuitem-text">{{item.label}}</span>
        </a>
    </li>
</template>

<script>
import Ripple from '../ripple/Ripple';

export default {
    props: {
        item: null,
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
                'p-disabled': item.disabled,
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
            return ['p-menuitem', this.item.class];
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>