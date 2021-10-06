<template>
    <div :class="containerClass">
        <slot>
            <span class="p-avatar-text" v-if="label">{{label}}</span>
            <Icon v-else-if="icon" class="p-avatar-icon" :icon="icon" />
            <img :src="image" v-else-if="image">
        </slot>
    </div>
</template>

<script>
import Icon from 'primevue/icon';

export default {
    name: 'Avatar',
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
        size: {
            type: String,
            default: 'normal'
        },
        shape: {
            type: String,
            default: "square"
        }
    },
    computed: {
        containerClass() {
            return ['p-avatar p-component', {
                'p-avatar-image': this.image != null,
                'p-avatar-circle': this.shape === 'circle',
                'p-avatar-lg': this.size === 'large',
                'p-avatar-xl': this.size === 'xlarge'
            }];
        },
        iconClass() {
            return ['p-avatar-icon', this.icon];
        }
    },
    components: {
        'Icon': Icon
    }
}
</script>

<style>
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
}

.p-avatar.p-avatar-image {
    background-color: transparent;
}

.p-avatar.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar .p-avatar-icon {
    font-size: 1rem;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}
</style>
