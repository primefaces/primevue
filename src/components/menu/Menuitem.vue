<template>
    <li :class="containerClass" role="none" :style="item.style" v-if="visible()">
        <router-link v-if="item.to && !item.disabled" :to="item.to" custom v-slot="{navigate, href}">
            <a :href="href" @click="onClick($event, navigate)" :class="linkClass" v-ripple role="menuitem">
                <span :class="['p-menuitem-icon', item.icon]"></span>
                <span class="p-menuitem-text">{{item.label}}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :class="linkClass" @click="onClick" :target="item.target" role="menuitem" :tabindex="item.disabled ? null : '0'" v-ripple>
            <span :class="['p-menuitem-icon', item.icon]"></span>
            <span class="p-menuitem-text">{{item.label}}</span>
        </a>
    </li>
</template>

<script>
import Ripple from 'primevue/ripple';

export default {
    inheritAttrs: false,
    emits: ['click'],
    props: {
        item: null
    },
    methods: {
        onClick(event, navigate) {
            this.$emit('click', {
                originalEvent: event,
                item: this.item,
                navigate: navigate
            });
        },
        visible() {
            return (typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false);
        }
    },
    computed: {
        containerClass() {
            return ['p-menuitem', this.item.class];
        },
        linkClass() {
            return ['p-menuitem-link', {'p-disabled': this.item.disabled}];
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>