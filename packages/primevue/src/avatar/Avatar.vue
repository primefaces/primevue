<template>
    <div :class="cx('root')" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel" v-bind="ptmi('root')" :data-p="dataP">
        <slot>
            <span v-if="label" :class="cx('label')" v-bind="ptm('label')" :data-p="dataP">{{ label }}</span>
            <component v-else-if="$slots.icon" :is="$slots.icon" :class="cx('icon')" />
            <span v-else-if="icon" :class="[cx('icon'), icon]" v-bind="ptm('icon')" :data-p="dataP" />
            <img v-else-if="image" :src="image" :alt="ariaLabel" @error="onError" v-bind="ptm('image')" :data-p="dataP" />
        </slot>
    </div>
</template>

<script>
import { cn } from '@primeuix/utils';
import BaseAvatar from './BaseAvatar.vue';

export default {
    name: 'Avatar',
    extends: BaseAvatar,
    inheritAttrs: false,
    emits: ['error'],
    methods: {
        onError(event) {
            this.$emit('error', event);
        }
    },
    computed: {
        dataP() {
            return cn({
                [this.shape]: this.shape,
                [this.size]: this.size
            });
        }
    }
};
</script>
