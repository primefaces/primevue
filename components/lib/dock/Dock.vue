<template>
    <div :class="cx('root')" :style="style" v-bind="ptm('root')" data-pc-name="dock">
        <DockSub :model="model" :templates="$slots" :exact="exact" :tooltipOptions="tooltipOptions" :position="position" :menuId="menuId" :aria-label="ariaLabel" :aria-labelledby="ariaLabelledby" :tabindex="tabindex" :pt="pt"></DockSub>
    </div>
</template>

<script>
import BaseDock from './BaseDock.vue';
import DockSub from './DockSub.vue';

export default {
    name: 'Dock',
    extends: BaseDock,
    components: {
        DockSub
    }
};
</script>
