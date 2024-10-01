<template>
    <DocPTViewer :docs="docs">
        <div>
            <p>Enter "<strong>date</strong>" to display the current date, "<strong>greet {0}</strong>" for a message and "<strong>random</strong>" to get a random number.</p>
            <Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" aria-label="PrimeVue Terminal Service" />
        </div>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';
import TerminalService from 'primevue/terminalservice';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Terminal'),
                    key: 'Terminal'
                }
            ]
        };
    },
    mounted() {
        TerminalService.on('command', this.commandHandler);
    },
    beforeUnmount() {
        TerminalService.off('command', this.commandHandler);
    },
    methods: {
        commandHandler(text) {
            let response;
            let argsIndex = text.indexOf(' ');
            let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

            switch (command) {
                case 'date':
                    response = 'Today is ' + new Date().toDateString();
                    break;

                case 'greet':
                    response = 'Hola ' + text.substring(argsIndex + 1);
                    break;

                case 'random':
                    response = Math.floor(Math.random() * 100);
                    break;

                default:
                    response = 'Unknown command: ' + command;
            }

            TerminalService.emit('response', response);
        }
    }
};
</script>
