<template>
    <transition name="p-messages">
        <div :class="containerClass" v-if="visible">
            <div class="p-messages-wrapper">
                <span :class="iconClass"></span>
                <div class="p-messages-text">
                    <slot></slot>
                </div>
                <button class="p-messages-close p-link" @click="visible = false" v-if="closable">
                    <i class="p-messages-close-icon pi pi-times"></i>
                </button>   
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        severity: {
            type: String,
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: true
        },
        sticky: {
            type: Boolean,
            default: true
        },
        life: {
            type: Number,
            default: 3000
        }
    },
    timeout: null,
    data() {
        return {
            visible: true
        }
    },
    mounted() {
        if (!this.sticky) {
            setTimeout(() => {
                this.visible = false;
            }, this.life);
        }
    },
    computed: {
        containerClass() {
            return 'p-messages p-component p-messages-' + this.severity;
        },
        iconClass() {
            return ['p-messages-icon pi', {
                'pi-check': this.severity === 'info',
                'pi-info-circle': this.severity === 'success',
                'pi-exclamation-triangle': this.severity === 'warn',
                'pi-times-circle': this.severity === 'error'
            }];
        }
    }
}
</script>

<style>

</style>
