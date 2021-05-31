<template>
    <div class="p-tabview-panel" role="tabpanel" v-show="showPanel">
        <slot></slot>
    </div>
</template>

<script>
import DomHandler from '../utils/DomHandler';
export default {
    name: 'tabpanel',
    props: {
        header: null,
        disabled: Boolean
    },
    data() {
        return {
            el: null
        }
    },
    mounted() {
        this.el = this.$el;
    },
    computed: {
        showPanel() {
            if (this.el) {
                return this.findIsActive();
            }
            return false;
        }
    },
    methods: {
        findIsActive() {
            return this.isTabActive(DomHandler.index(this.el));
        },
        isTabActive(index) {
            let activeArray = this.$parent.d_activeIndex;
            if (this.$parent.multiple) {
                return activeArray && activeArray.includes(index);
            }
            else {
                return index === activeArray;
            }
        }
    }
}
</script>