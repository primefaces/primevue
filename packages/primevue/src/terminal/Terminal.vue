<template>
    <div :class="cx('root')" @click="onClick" v-bind="ptmi('root')">
        <div v-if="welcomeMessage" :class="cx('welcomeMessage')" v-bind="ptm('welcomeMessage')">{{ welcomeMessage }}</div>
        <div :class="cx('commandList')" v-bind="ptm('content')">
            <div v-for="(command, i) of commands" :key="command.text + i.toString()" :class="cx('command')" v-bind="ptm('commands')">
                <span :class="cx('promptLabel')" v-bind="ptm('prompt')">{{ prompt }}</span>
                <span :class="cx('commandValue')" v-bind="ptm('command')">{{ command.text }}</span>
                <div :class="cx('commandResponse')" aria-live="polite" v-bind="ptm('response')">{{ command.response }}</div>
            </div>
        </div>
        <div :class="cx('prompt')" v-bind="ptm('container')">
            <span :class="cx('promptLabel')" v-bind="ptm('prompt')">{{ prompt }}</span>
            <input ref="input" v-model="commandText" :class="cx('promptValue')" type="text" autocomplete="off" @keydown="onKeydown" v-bind="ptm('commandText')" />
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
            if (event.key === 'Enter' && this.commandText) {
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
