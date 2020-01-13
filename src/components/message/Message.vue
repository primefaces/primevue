<template>
    <transition name="p-messages">
        <div :class="containerClass" v-if="visible" role="alert">
            <div class="p-messages-wrapper">
                <span :class="iconClass"></span>
                <div class="p-messages-text">
                    <slot></slot>
                </div>
                <button class="p-messages-close p-link" @click="visible = false" v-if="closable" type="button">
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
                'pi-info-circle': this.severity === 'info',
                'pi-check': this.severity === 'success',
                'pi-exclamation-triangle': this.severity === 'warn',
                'pi-times-circle': this.severity === 'error'
            }];
        }
    }
}
</script>

<style>
.p-messages-wrapper {
    padding: 1em;
    position: relative;
}

.p-messages-icon-container,
.p-messages-close-container {
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
}

.p-messages-text {
    display: inline-block;
    vertical-align: middle;
}

.p-messages-icon {
    padding: 0;
    margin-right: .25em;
    vertical-align: middle;
}

.p-messages .p-messages-summary {
    font-weight: bold;
    margin-right: .25em;
}

.p-messages-close {
    position: absolute;
}

.p-messages-enter {
    opacity: 0;
}

.p-messages-enter-active {
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
}

.p-messages.p-messages-leave {
    max-height: 1000px;
}

.p-messages.p-messages-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0 !important;
}

.p-messages-leave-active {
    overflow: hidden;
    -webkit-transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;
    transition: max-height .3 cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;
}

.p-messages-leave-active .p-messages-close {
    display: none;
}
</style>
