<template>
	<AppDoc name="TerminalDemo" :sources="sources" github="terminal/TerminalDemo.vue" >
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Terminal from 'primevue/terminal';
import TerminalService from 'primevue/terminalservice';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/terminal/terminal.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Commands are processed using an EventBus implementation called TerminalService.
            Import this service into your component and subscribe to the <i>command</i> event to process the commands by
                sending replies with the <i>response</i> event.</p>
<pre v-code><code>
&lt;Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" /&gt;

</code></pre>

<pre v-code.script><code>
import TerminalService from 'primevue/terminalservice';

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
    beforeUnmount() {
        TerminalService.$off('command', this.commandHandler);
    }
}

</code></pre>

        <h5>Properties</h5>
        <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>welcomeMessage</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Initial text to display on terminal.</td>
                    </tr>
                    <tr>
                        <td>prompt</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Prompt text for each command.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Styling</h5>
		<p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
				</thead>
				<tbody>
                     <tr>
                        <td>p-terminal</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-terminal-content</td>
                        <td>Content of terminal.</td>
                    </tr>
                    <tr>
                        <td>p-terminal-prompt</td>
                        <td>Prompt text.</td>
                    </tr>
                     <tr>
                        <td>p-terminal-response</td>
                        <td>Command response.</td>
                    </tr>
                    <tr>
                        <td>p-terminal-input</td>
                        <td>Input element to enter commands.</td>
                    </tr>
                </tbody>
			</table>
		</div>

		<h5>Dependencies</h5>
		<p>None.</p>
    </AppDoc>
</template>

<script>
export default {
    data() {
        return {
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <p>Enter "date" to display the current date, "greet {0}" for a message and "random" to get a random number.</p>
        <Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" class="dark-demo-terminal" />
    </div>
</template>

<script>
import TerminalService from "primevue/terminalservice";

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
            
            TerminalService.emit('response', response);
        }
    },
    mounted() {
        TerminalService.on('command', this.commandHandler);
    },
    beforeUnmount() {
        TerminalService.off('command', this.commandHandler);
    }
}
<\\/script>

<style lang="scss" scoped>
p {
    margin-top: 0;
}

::v-deep(.dark-demo-terminal) {
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
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <p>Enter "date" to display the current date, "greet {0}" for a message and "random" to get a random number.</p>
        <Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" class="dark-demo-terminal" />
    </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';
import TerminalService from "primevue/terminalservice";

export default {
    setup() {
        onMounted(() => {
            TerminalService.on('command', commandHandler);
        })

        onBeforeUnmount(() => {
            TerminalService.off('command', commandHandler);
        })

        const commandHandler = (text) => {
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
            
            TerminalService.emit('response', response);
        }

        return { commandHandler }
    }
}
<\\/script>

<style lang="scss" scoped>
p {
    margin-top: 0;
}

::v-deep(.dark-demo-terminal) {
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
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/terminal/terminal.min.js"><\\/script>`,
                    content: `<div id="app">
            <p>Enter "date" to display the current date, "greet {0}" for a message and "random" to get a random number.</p>
            <p-terminal welcome-message="Welcome to PrimeVue" prompt="primevue $" class="dark-demo-terminal"></p-terminal>
        </div>

        <script type="module">
        const { createApp, onMounted, onBeforeUnmount } = Vue;
        const TerminalService = primevue.terminalservice;

        const App = {
            setup() {
                onMounted(() => {
                    TerminalService.on('command', commandHandler);
                })

                onBeforeUnmount(() => {
                    TerminalService.off('command', commandHandler);
                })

                const commandHandler = (text) => {
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
            
                    TerminalService.emit('response', response);
                }

                return { commandHandler }
            },
            components: {
                "p-terminal": primevue.terminal
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        p {
            margin-top: 0;
        }

        .dark-demo-terminal {
            background-color: #212121;
            color: #ffffff;
        }

        .dark-demo-terminal .p-terminal-command {
            color: #80CBC4;
        }

        .dark-demo-terminal .p-terminal-prompt {
            color: #FFD54F;
        }

        .dark-demo-terminal .p-terminal-response {
            color: #9FA8DA;
        }
        </style>

`
                }
            }
        }
    }
}
</script>