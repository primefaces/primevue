<template>
    <div :class="cx('root')" @click="onClick" v-bind="ptmi('root')">
        <div v-if="welcomeMessage" v-bind="ptm('welcomeMessage')">{{ welcomeMessage }}</div>
        <div :class="cx('content')" v-bind="ptm('content')">
            <div v-for="(command, i) of commands" :key="command.text + i.toString()" v-bind="ptm('commands')">
                <span :class="cx('prompt')" v-bind="ptm('prompt')">{{ prompt }}</span>
                <span :class="cx('command')" v-bind="ptm('command')">{{ command.text }}</span>
                <div :class="cx('response')" aria-live="polite" v-bind="ptm('response')">{{ command.response }}</div>
            </div>
        </div>
        <div :class="cx('container')" v-bind="ptm('container')">
            <span :class="cx('prompt')" v-bind="ptm('prompt')">{{ prompt }}</span>
            <input ref="input" v-model="commandText" type="text" :class="cx('commandText')" autocomplete="off" @keydown="onKeydown" v-bind="ptm('commandText')" />
        </div>
    </div>
</template>

<script>
import TerminalService from 'primevue/terminalservice';
import BaseTerminal from './BaseTerminal.vue';

export default {
    name: 'Terminal',
    extends: BaseTerminal,
    inheritAttrs: false,
    data() {
        return {
            commandText: null,
            commands: []
        };
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
            if ((event.code === 'Enter' || event.code === 'NumpadEnter') && this.commandText) {
                this.commands.push({ text: this.commandText });
                TerminalService.emit('command', this.commandText);
                this.commandText = '';
            }
        },
        responseListener(response) {
            this.commands[this.commands.length - 1].response = response;
        }
    }
};
</script>
