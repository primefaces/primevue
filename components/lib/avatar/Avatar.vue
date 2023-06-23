<template>
    <div :class="cx('root')" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel" v-bind="getPTOptions('root')" data-pc-name="avatar">
        <slot>
            <span v-if="label" :class="cx('label')" v-bind="getPTOptions('label')">{{ label }}</span>
            <component v-else-if="$slots.icon" :is="$slots.icon" :class="cx('icon')" />
            <span v-else-if="icon" :class="[cx('icon'), icon]" v-bind="getPTOptions('icon')" />
            <img v-else-if="image" :src="image" :alt="ariaLabel" @error="onError" v-bind="getPTOptions('image')" />
        </slot>
    </div>
</template>

<script>
import BaseAvatar from './BaseAvatar.vue';

export default {
    name: 'Avatar',
    extends: BaseAvatar,
    emits: ['error'],
    methods: {
        onError() {
            this.$emit('error');
        },
        getPTOptions(key) {
            return this.ptm(key, {
                parent: {
                    instance: this.$parent
                }
            });
        }
    }
};
</script>
