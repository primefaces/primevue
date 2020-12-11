<template>
    <transition name="p-message">
        <div :class="containerClass" v-if="visible" role="alert">
            <div class="p-message-wrapper">
                <span :class="iconClass"></span>
                <div class="p-message-text">
                    <slot></slot>
                </div>
                <button class="p-message-close p-link" @click="close($event)" v-if="closable" type="button" v-ripple>
                    <i class="p-message-close-icon pi pi-times"></i>
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
import Ripple from '../ripple/Ripple';

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
    methods: {
        close(event) {
            this.visible = false;
            this.$emit('close', event);
        }
    },
    computed: {
        containerClass() {
            return 'p-message p-component p-message-' + this.severity;
        },
        iconClass() {
            return ['p-message-icon pi', {
                'pi-info-circle': this.severity === 'info',
                'pi-check': this.severity === 'success',
                'pi-exclamation-triangle': this.severity === 'warn',
                'pi-times-circle': this.severity === 'error'
            }];
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-message-wrapper {
    display: flex;
    align-items: center;
}

.p-message-close {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-message-close.p-link {
    margin-left: auto;
    overflow: hidden;
    position: relative;
}

.p-message-enter {
    opacity: 0;
}

.p-message-enter-active {
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
}

.p-message.p-message-leave {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0 !important;
}

.p-message-leave-active {
    overflow: hidden;
    -webkit-transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;
    transition: max-height .3 cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;
}

.p-message-leave-active .p-message-close {
    display: none;
}
</style>
