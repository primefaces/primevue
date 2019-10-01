<template>
    <div ref="container" :class="containerClass">
        <transition-group name="p-toast-message" tag="div">
            <ToastMessage v-for="msg of messages" :key="msg.id" :message="msg" @close="remove($event)"/>
        </transition-group>
    </div>
</template>

<script>
import ToastEventBus from './ToastEventBus';
import ToastMessage from './ToastMessage';
import DomHandler from '../utils/DomHandler';

var messageIdx = 0;

export default {
    props: {
        group: {
            type: String,
            default: null
        },
        position: {
            type: String,
            default: 'topright'
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            messages: []
        }
    },
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
    },
    beforeUpdate() {
        this.updateZIndex();
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
        }
    },
    components: {
        'ToastMessage': ToastMessage
    },
    computed: {
        containerClass() {
            return 'p-toast p-component p-toast-' + this.position;
        }
    }
}
</script>

<style>
.p-toast {
    position: fixed;
    width: 20em;
}

.p-toast-topright {
	top: 20px;
	right: 20px;
}

.p-toast-topleft {
	top: 20px;
	left: 20px;
}

.p-toast-bottomleft {
	bottom: 20px;
	left: 20px;
}

.p-toast-bottomright {
	bottom: 20px;
	right: 20px;
}

.p-toast-item-container {
    position: relative;
}

.p-toast-item {
	position: relative;
	display: block;
    padding: .5em 1em;
    overflow: hidden;
}

.p-toast-item .p-toast-detail {
	padding: 0;
	margin: 0;
}

.p-toast-icon-close {
	position: absolute;
	top: 4px;
	right: 4px;
	cursor: pointer;
}

.p-toast-title {
	font-weight: bold;
	padding: 0 0 .5em 0;
	display: block;
}

.p-toast-image {
    position: absolute;
    display: inline-block;
    left: .5em;
    top: .25em;
    padding: 0;
	font-size: 2em;
}

.p-toast-message {
	padding: 0 0 .25em 0;
    margin-left: 2.5em;
}

.p-toast-message p {
	font-weight: normal;
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

.p-toast .p-toast-item-container.p-toast-message-leave-to {
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
