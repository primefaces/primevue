<template>
    <div class="p-terminal p-component" @click="onClick">
        <div v-if="welcomeMessage">{{welcomeMessage}}</div>
        <div class="p-terminal-content">
            <div v-for="(command,i) of commands" :key="command.text + i.toString()">
                <span class="p-terminal-prompt">{{prompt}}</span>
                <span class="p-terminal-command">{{command.text}}</span>
                <div class="p-terminal-response">{{command.response}}</div>
            </div>
        </div>
        <div class="p-terminal-prompt-container">
            <span class="p-terminal-prompt">{{prompt}}</span>
            <input ref="input" type="text" v-model="commandText" class="p-terminal-input" autocomplete="off" @keydown="onKeydown">
        </div>
    </div>
</template>

<script>
import TerminalService from 'primevue/terminalservice';

export default {
    name: 'Terminal',
    props: {
        welcomeMessage: {
            type: String,
            default: null
        },
        prompt: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            commandText: null,
            commands: []
        }
    },
    mounted() {
        TerminalService.on('response', this.responseListener);
        this.$refs.input.focus();
    },
    updated() {
        this.$el.scrollTop = this.$el.scrollHeight;
    },
    beforeUnmount() {
        TerminalService.off('response', this.responseListener);
    },
    methods: {
        onClick() {
            this.$refs.input.focus();
        },
        onKeydown(event) {
            if (event.keyCode === 13 && this.commandText) {
                this.commands.push({text: this.commandText});
                TerminalService.emit('command', this.commandText);
                this.commandText = '';
            }
        },
        responseListener(response) {
            this.commands[this.commands.length - 1].response = response;
        }
    }
}
</script>

<style>
.p-terminal {
    height: 18rem;
    overflow: auto;
}

.p-terminal-prompt-container {
    display: flex;
    align-items: center;
}

.p-terminal-input {
    flex: 1 1 auto;
    border: 0 none;
    background-color: transparent;
    color: inherit;
    padding: 0;
    outline: 0 none;
}

.p-terminal-input::-ms-clear {
    display: none;
}
</style>
