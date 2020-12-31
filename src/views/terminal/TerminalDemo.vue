<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Terminal</h1>
                <p>Terminal is a text based user interface.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <p>Enter "date" to display the current date, "greet {0}" for a message and "random" to get a random number.</p>
                <Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" class="dark-demo-terminal" />
            </div>
        </div>

        <TerminalDoc />
    </div>
</template>

<script>
import TerminalDoc from './TerminalDoc';
import TerminalService from '../../components/terminalservice/TerminalService';

export default {
    methods: {
        commandHandler(text) {
            let response;
            let argsIndex = text.indexOf(' ');
            let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

            switch(command) {
                case "date":
                    response = 'Today is ' + new Date().toDateString();
                    break;

                case "greet":
                    response = 'Hola ' + text.substring(argsIndex + 1);
                    break;

                case "random":
                    response = Math.floor(Math.random() * 100);
                    break;

                default:
                    response = "Unknown command: " + command;
            }

            TerminalService.$emit('response', response);
        }
    },
    mounted() {
        TerminalService.$on('command', this.commandHandler);
    },
    beforeDestroy() {
        TerminalService.$off('command', this.commandHandler);
    },
    components: {
        'TerminalDoc': TerminalDoc
	}
}
</script>

<style lang="scss" scoped>
p {
    margin-top: 0;
}

/deep/ .dark-demo-terminal {
    background-color: #212121;
    color: #ffffff;

    .p-terminal-command {
        color: #80CBC4;
    }

    .p-terminal-prompt {
        color: #FFD54F;
    }

    .p-terminal-response {
        color: #9FA8DA;
    }
}
</style>