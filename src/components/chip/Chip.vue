<template>
    <div :class="containerClass" v-if="visible">
        <slot>
            <img v-if="image" :src="image">
            <Icon v-else-if="icon" class="p-chip-icon" :icon="icon" />
            <div class="p-chip-text" v-if="label">{{label}}</div>
        </slot>
        <Icon v-if="removable" tabindex="0" class="p-chip-remove-icon"
            :icon="removeIcon" @click="close" @keydown.enter="close" />
    </div>
</template>

<script>
import Icon from 'primevue/icon';

export default {
    name: 'Chip',
    emits: ['remove'],
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: [String, Object],
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
            type: [String, Object],
            default: () => ({ commonIcon: 'times-circle', context: 'Chip' }),
        }
    },
    data() {
        return {
            visible: true
        }
    },
    methods: {
        close(event) {
            this.visible = false;
            this.$emit('remove', event);
        }
    },
    computed: {
        containerClass() {
            return ['p-chip p-component', {
                'p-chip-image': this.image != null
            }];
        }
    },
    components: {
        'Icon': Icon,
    },
}
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
