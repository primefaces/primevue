<template>
    <div>
        <Head>
            <Title>Vue Terminal Component</Title>
            <Meta name="description" content="Terminal is a text based user interface." />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Terminal</h1>
                <p>Terminal is a text based user interface.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <p>Enter "date" to display the current date, "greet {0}" for a message and "random" to get a random number.</p>
                <Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" class="dark-demo-terminal" aria-label="PrimeVue Terminal Service" />
            </div>
        </div>

        <TerminalDoc />
    </div>
</template>

<script>
import TerminalService from 'primevue/terminalservice';
import TerminalDoc from './TerminalDoc';

export default {
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
    },
    components: {
        TerminalDoc: TerminalDoc
    }
};
</script>

<style lang="scss" scoped>
p {
    margin-top: 0;
}

::v-deep(.dark-demo-terminal) {
    background-color: #212121;
    color: #ffffff;

    .p-terminal-command {
        color: #80cbc4;
    }

    .p-terminal-prompt {
        color: #ffd54f;
    }

    .p-terminal-response {
        color: #9fa8da;
    }
}
</style>
