<template>
<li :class="containerClass" role="menuitem" :style="item.style">
    <a :href="item.url||'#'" class="p-menuitem-link" @click="onClick" :target="item.target">
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
            event.preventDefault();
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