<template>
    <div :class="containerClass">
        <ToastMessage v-for="msg of messages" :key="msg.id" :message="msg" @close="remove($event)"/>
    </div>
</template>

<script>
import ToastEventBus from './ToastEventBus';
import ToastMessage from './ToastMessage';

var messageIdx = 0;

export default {
    props: {
        position: {
            type: String,
            default: 'topright'
        }
    },
    data() {
        return {
            messages: []
        }
    },
    mounted() {
        ToastEventBus.$on('add', (message) => this.add(message));
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

</style>
