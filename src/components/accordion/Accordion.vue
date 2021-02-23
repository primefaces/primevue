<template>
    <div class="p-accordion p-component">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        multiple: Boolean
    },
    methods: {
        onToggle(tab) {
            if (!this.multiple && !tab.d_active) {
                this.$children.forEach(tab => tab.d_active = false);
            }
        }
    },
    computed: {
        tabs() {
            return this.$children.filter(child => child.$vnode.tag.indexOf('accordiontab') !== -1);
        }
    }
}
</script>

<style>
.p-accordion-header-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;
    text-decoration: none;
}

.p-accordion-header-link:focus {
    z-index: 1;
}

.p-accordion-header-text {
    line-height: 1;
}
</style>