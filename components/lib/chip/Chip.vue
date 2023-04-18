<template>
    <div v-if="visible" :class="containerClass" :aria-label="label">
        <slot></slot>
        <template v-if="!$slots.default">
            <img v-if="image" :src="image" />
            <component v-else-if="$slots.icon" :is="$slots.icon" class="p-chip-icon" />
            <span v-else-if="icon" :class="['p-chip-icon', icon]" />
            <div v-if="label" class="p-chip-text">{{ label }}</div>
        </template>
        <slot v-if="removable" name="removeicon" :onClick="close" :onKeydown="onKeydown">
            <component :is="removeIcon ? 'span' : 'TimesCircleIcon'" tabindex="0" :class="['p-chip-remove-icon', removeIcon]" @click="close" @keydown="onKeydown"></component>
        </slot>
    </div>
</template>

<script>
import TimesCircleIcon from 'primevue/icons/timescircle';

export default {
    name: 'Chip',
    emits: ['remove'],
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        removable: {
            type: Boolean,
            default: false
        },
        removeIcon: {
            type: String,
            default: undefined
        }
    },
    data() {
        return {
            visible: true
        };
    },
    methods: {
        onKeydown(event) {
            if (event.key === 'Enter' || event.key === 'Backspace') {
                this.close(event);
            }
        },
        close(event) {
            this.visible = false;
            this.$emit('remove', event);
        }
    },
    computed: {
        containerClass() {
            return [
                'p-chip p-component',
                {
                    'p-chip-image': this.image != null
                }
            ];
        }
    },
    components: {
        TimesCircleIcon
    }
};
</script>

<style>
.p-chip {
    display: inline-flex;
    align-items: center;
}

.p-chip-text {
    line-height: 1.5;
}

.p-chip-icon.pi {
    line-height: 1.5;
}

.p-chip-remove-icon {
    line-height: 1.5;
    cursor: pointer;
}

.p-chip img {
    border-radius: 50%;
}
</style>
