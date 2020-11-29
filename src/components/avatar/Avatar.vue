<template>
    <div :class="containerClass">
        <slot>
            <span class="p-avatar-text" v-if="label">{{label}}</span>
            <span :class="iconClass" v-else-if="icon"></span>
            <img :src="image" v-else-if="image">
        </slot>
    </div>
</template>

<script>
export default {
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

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar .p-avatar-icon {
    font-size: 1rem;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar.p-avatar-sm {
    width: 1rem;
    height: 1rem;
    font-size: .75rem;
}

.p-avatar-sm .p-avatar-icon {
    font-size: .75rem;
}

.p-avatar.p-avatar-lg {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
}

.p-avatar-lg .p-avatar-icon {
    font-size: 1.5rem;
}

.p-avatar.p-avatar-xl {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
}

.p-avatar-xl .p-avatar-icon {
    font-size: 2rem;
}
</style>
