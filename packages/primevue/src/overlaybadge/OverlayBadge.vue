<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
        <Badge v-bind="$props" :pt="ptm('pcBadge')" />
    </div>
</template>

<script>
import Badge from 'primevue/badge';
import BaseOverlayBadge from './BaseOverlayBadge.vue';

export default {
    name: 'OverlayBadge',
    extends: BaseOverlayBadge,
    inheritAttrs: false,
    components: {
        Badge
    }
};
</script>
