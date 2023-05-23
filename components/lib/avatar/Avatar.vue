<template>
    <div :class="cx('root')" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel" v-bind="ptm('root')" data-pc-name="avatar" data-pc-section="root">
        <slot>
            <span v-if="label" :class="cx('label')" v-bind="ptm('label')" data-pc-section="label">{{ label }}</span>
            <component v-else-if="$slots.icon" :is="$slots.icon" :class="cx('icon')" v-bind="ptm('icon')" data-pc-section="icon" />
            <span v-else-if="icon" :class="cx('icon')" v-bind="ptm('icon')" data-pc-section="icon" />
            <img v-else-if="image" :src="image" :alt="ariaLabel" @error="onError" v-bind="ptm('image')" data-pc-section="image" />
        </slot>
    </div>
</template>

<script>
import BaseAvatar from './BaseAvatar';

export default {
    name: 'Avatar',
    extends: BaseAvatar,
    emits: ['error'],
    methods: {
        onError() {
            this.$emit('error');
        }
    }
};
</script>
