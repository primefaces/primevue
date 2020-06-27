<template>
    <li :class="containerClass" role="none" :style="item.style" v-if="visible()">
        <router-link v-if="item.to && !item.disabled" :to="item.to" :class="linkClass" role="menuitem" v-ripple>
            <span :class="['p-menuitem-icon', item.icon]"></span>
            <span class="p-menuitem-text">{{item.label}}</span>
        </router-link>
        <a v-else :href="item.url" :class="linkClass" @click="onClick" :target="item.target" role="menuitem" :tabindex="item.disabled ? null : '0'" v-ripple>
            <span :class="['p-menuitem-icon', item.icon]"></span>
            <span class="p-menuitem-text">{{item.label}}</span>
        </a>
    </li>
</template>

<script>
import Ripple from '../ripple/Ripple';

export default {
    props: {
        item: null
    },
    methods: {
        onClick(event) {
            this.$emit('click', {
                originalEvent: event,
                item: this.item
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