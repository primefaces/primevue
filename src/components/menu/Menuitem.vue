<template>
    <li :class="containerClass" role="none" :style="item.style" v-if="item.visible !== false">
        <router-link v-if="item.to" :to="item.to" class="p-menuitem-link" role="menuitem">
            <span :class="['p-menuitem-icon', item.icon]"></span>
            <span class="p-menuitem-text">{{item.label}}</span>
        </router-link>
        <a v-else :href="item.url||'#'" class="p-menuitem-link" @click="onClick" :target="item.target" role="menuitem" >
            <span :class="['p-menuitem-icon', item.icon]"></span>
            <span class="p-menuitem-text">{{item.label}}</span>
        </a>
    </li>
</template>

<script>
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
        }
    },
    computed: {
        containerClass() {
            return [
                'p-menitem',
                this.item.class
            ]
        }
    }
}
</script>