<template>
    <span :class="cx('root')" v-bind="ptm('root')">
        <component v-if="$slots.icon" :is="$slots.icon" :class="cx('icon')" v-bind="ptm('icon')" />
        <span v-else-if="icon" :class="cx('icon')" v-bind="ptm('icon')"></span>
        <slot>
            <span :class="cx('value')" v-bind="ptm('value')">{{ value }}</span>
        </slot>
    </span>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'Tag',
    extends: BaseComponent
};
</script>
