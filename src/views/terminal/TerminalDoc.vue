<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
                <h5>Mitt EventBus</h5>
                <p>Terminal requires <a href="https://www.npmjs.com/package/mitt">Mitt</a>, a tiny 200b EventBus implementation.</p>
<CodeHighlight>
npm install mitt --save
</CodeHighlight>

				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Terminal from 'primevue/terminal';
import TerminalService from 'primevue/terminalservice';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Commands are processed using an EventBus implementation called TerminalService.
                    Import this service into your component and subscribe to the <i>command</i> event to process the commands by
                        sending replies with the <i>response</i> event.</p>
<CodeHighlight>
&lt;Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
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
</CodeHighlight>

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
				<p>Mitt.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/terminal" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
&lt;p&gt;Enter "date" to display the current date, "greet &#123;0&#125;" for a message and "random" to get a random number.&lt;/p&gt;
&lt;Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" class="dark-demo-terminal" /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
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
</CodeHighlight>

<CodeHighlight lang="css">
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
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>