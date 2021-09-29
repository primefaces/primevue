<template>
    <div ref="container" :class="containerClass">
        <transition-group name="p-toast-message" tag="div" @enter="onEnter">
            <ToastMessage v-for="msg of messages" :key="msg.id" :message="msg" :templates="$scopedSlots" @close="remove($event)"/>
        </transition-group>
    </div>
</template>

<script>
import ToastEventBus from '../toastservice/ToastEventBus';
import ToastMessage from './ToastMessage';
import DomHandler from '../utils/DomHandler';
import UniqueComponentId from '../utils/UniqueComponentId';

var messageIdx = 0;

export default {
    props: {
        group: {
            type: String,
            default: null
        },
        position: {
            type: String,
            default: 'top-right'
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        breakpoints: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            messages: []
        }
    },
    styleElement: null,
    mounted() {
        ToastEventBus.$on('add', (message) => {
            if (this.group == message.group) {
                this.add(message);
            }
        });
        ToastEventBus.$on('remove-group', (group) => {
            if (this.group === group) {
                this.messages = [];
            }
        });
        ToastEventBus.$on('remove-all-groups', () => {
            this.messages = [];
        });

        this.updateZIndex();

        if (this.breakpoints) {
            this.createStyle();
        }
    },
    beforeUpdate() {
        this.updateZIndex();
    },
    beforeDestroy() {
        this.destroyStyle();
    },
    methods: {
        add(message) {
            if (message.id == null) {
                message.id = messageIdx++;
            }

            this.messages = [...this.messages, message];
        },
        remove(message) {
            let index = -1;
            for (let i = 0; i < this.messages.length; i++) {
                if (this.messages[i] === message) {
                    index = i;
                    break;
                }
            }

            this.messages.splice(index, 1);
        },
        updateZIndex() {
            if (this.autoZIndex) {
                this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
        },
        onEnter() {
            this.$refs.container.setAttribute(this.attributeSelector, '');
        },
        createStyle() {
            if (!this.styleElement) {
                this.styleElement = document.createElement('style');
                this.styleElement.type = 'text/css';
                document.head.appendChild(this.styleElement);
                let innerHTML = '';
                for (let breakpoint in this.breakpoints) {
                    let breakpointStyle = '';
                    for (let styleProp in this.breakpoints[breakpoint]) {
                        breakpointStyle += styleProp + ':' + this.breakpoints[breakpoint][styleProp] + '!important;';
                    }
                    innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-toast[${this.attributeSelector}] {
                                ${breakpointStyle}
                            }
                        }
                    `;
                }
                this.styleElement.innerHTML = innerHTML;
            }
        },
        destroyStyle() {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
            }
        }
    },
    components: {
        'ToastMessage': ToastMessage
    },
    computed: {
        containerClass() {
            return 'p-toast p-component p-toast-' + this.position;
        },
        attributeSelector() {
            return UniqueComponentId();
        }
    }
}
</script>

<style>
.p-toast {
    position: fixed;
    width: 25rem;
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
}

.p-toast-message-text {
    flex: 1 1 auto;
}

.p-toast-top-right {
	top: 20px;
	right: 20px;
}

.p-toast-top-left {
	top: 20px;
	left: 20px;
}

.p-toast-bottom-left {
	bottom: 20px;
	left: 20px;
}

.p-toast-bottom-right {
	bottom: 20px;
	right: 20px;
}

.p-toast-top-center {
	top: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.p-toast-bottom-center {
	bottom: 20px;
	left: 50%;
    transform: translateX(-50%);
}

.p-toast-center {
	left: 50%;
	top: 50%;
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-icon-close {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

.p-toast-icon-close.p-link {
	cursor: pointer;
}

/* Animations */
.p-toast-message-enter {
    opacity: 0;
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
}

.p-toast-message-leave {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    -webkit-transition: transform .3s, opacity .3s;
    transition: transform .3s, opacity .3s;
}

.p-toast-message-leave-active {
    -webkit-transition: max-height .45s cubic-bezier(0, 1, 0, 1), opacity .3s, margin-bottom .3s;
    transition: max-height .45s cubic-bezier(0, 1, 0, 1), opacity .3s, margin-bottom .3s;
}
</style>
