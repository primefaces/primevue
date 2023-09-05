<template>
    <div :class="containerClass" :style="style" v-bind="ptm('root')" data-pc-name="dock">
        <DockSub
            :model="model"
            :templates="$slots"
            :exact="exact"
            :tooltipOptions="tooltipOptions"
            :position="position"
            :menuId="menuId"
            :aria-label="ariaLabel"
            :aria-labelledby="ariaLabelledby"
            :tabindex="tabindex"
            :pt="pt"
            :unstyled="unstyled"
        ></DockSub>
    </div>
</template>

<script>
import BaseDock from './BaseDock.vue';
import DockSub from './DockSub.vue';

export default {
    name: 'Dock',
    extends: BaseDock,
    beforeMount() {
        if (!this.$slots.item) {
            console.warn('In future versions, vue-router support will be removed. Item templating should be used.');
        }
    },
    computed: {
        containerClass() {
            return [this.class, this.cx('root')];
        }
    },
    components: {
        DockSub
    }
};
</script>
