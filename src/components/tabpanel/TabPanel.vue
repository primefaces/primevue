<template>
    <div class="p-tabview-panel" role="tabpanel" v-show="isTabActive()">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tabpanel',
    props: {
        header: null,
        disabled: Boolean
    },
    data() {
        return {
            index: null
        }
    },
    created() {
        this.$parent.$children.forEach((child, i) => {
            if (child === this) this.index = i
        })
    },
    methods: {
        isTabActive() {
            let activeArray = this.$parent.d_activeIndex;
            return this.$parent.multiple ? activeArray && activeArray.includes(this.index) :this.index === activeArray;
        }
    }
}
</script>