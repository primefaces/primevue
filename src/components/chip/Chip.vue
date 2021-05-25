<template>
    <div :class="containerClass" v-if="visible">
        <slot>
            <img :src="image" v-if="image">
            <span :class="iconClass" v-else-if="icon"></span>
            <div class="p-chip-text" v-if="label">{{label}}</div>
        </slot>
        <span v-if="removable" tabindex="0" :class="removeIconClass"
            @click="close" @keydown.enter="close"></span>
    </div>
</template>

<script>
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
            default: 'pi pi-times-circle'
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
        },
        iconClass() {
            return ['p-chip-icon', this.icon];
        },
        removeIconClass() {
            return ['p-chip-remove-icon', this.removeIcon];
        }
    }
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
