<template>
    <div :style="containerStyle" :class="containerClass"></div>
</template>

<script>
export default {
    name: 'Skeleton',
    props: {
        shape: {
            type: String,
            default: 'rectangle'
        },
        size: {
            type: String,
            default: null
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '1rem'
        },
        borderRadius: {
            type: String,
            default: null
        },
        animation: {
            type: String,
            default: 'wave'
        }
    },
    computed: {
        containerClass() {
            return ['p-skeleton p-component', {
                'p-skeleton-circle': this.shape === 'circle',
                'p-skeleton-none': this.animation === 'none'
            }];
        },
        containerStyle() {
            if (this.size)
                return {width: this.size, height: this.size, borderRadius: this.borderRadius};
            else
                return {width: this.width, height: this.height, borderRadius: this.borderRadius};
        }
    }
}
</script>

<style>
.p-skeleton {
    position: relative;
    overflow: hidden;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
}

.p-skeleton.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-none::after {
   animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
</style>
