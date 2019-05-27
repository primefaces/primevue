<template>
<li class="p-menuitem" role="menuitem">
    <a :href="item.url||'#'" class="p-menuitem-link" @click="onClick">
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
    }
}
</script>