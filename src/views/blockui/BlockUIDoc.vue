<template>
	<AppDoc name="BlockUIDemo" :sources="sources" github="blockui/BlockUIDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import BlockUI from 'primevue/blockui';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/blockui/blockui.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>BlockUI is controlled using the <i>blocked</i> property, by default target element to block is the child component. In example below, panel gets blocked
            with a mask when blockedPanel is enabled and gets unblock when the bound variable is set to false.
        </p>
<pre v-code><code>
&lt;BlockUI :blocked="blockedPanel"&gt;
    &lt;Panel header="Header"&gt;
        Panel Content
    &lt;/Panel&gt;
&lt;/BlockUI&gt;

</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            blockedPanel: false
        }
    },
    methods: {
        blockPanel() {
            this.blockedPanel = true;
        },
        unblockPanel() {
            this.blockedPanel = false;
        }
    }
}

</code></pre>

        <h5>Full Screen</h5>
        <p>In full screen mode, instead of a particular element, the whole document gets blocked. Set <i>fullScreen</i> as true in order to enable this functionality.</p>

<pre v-code><code>
&lt;BlockUI :blocked="blockedDocument" :fullScreen="true"&gt;&lt;/BlockUI&gt;

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
                        <td>blocked</td>
                        <td>array</td>
                        <td>null</td>
                        <td>Controls the blocked state.</td>
                    </tr>
                    <tr>
                        <td>fullscreen</td>
                        <td>menuitem</td>
                        <td>null</td>
                        <td>When enabled, the whole document gets blocked.</td>
                    </tr>
                     <tr>
                        <td>baseZIndex</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Base zIndex value to use in layering.</td>
                    </tr>
                    <tr>
                        <td>autoZIndex</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to automatically manage layering.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Events</h5>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
				<tr>
					<th>Name</th>
					<th>Parameters</th>
					<th>Description</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>block</td>
					<td>-</td>
					<td>Fired when the element gets blocked.</td>
				</tr>
				<tr>
					<td>unblock</td>
					<td>-</td>
					<td>Fired when the element gets unblocked.</td>
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
                        <td>p-blockui</td>
                        <td>Mask element.</td>
                    </tr>
                    <tr>
                        <td>p-blockui-document</td>
                        <td>Mask element in full screen mode.</td>
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
        <h5>Document</h5>
        <BlockUI :blocked="blockedDocument" :fullScreen="true"></BlockUI>

        <Button type="button" label="Block" @click="blockDocument()"></Button>

        <h5>Panel</h5>
        <Button type="button" label="Block" @click="blockPanel()"></Button>
        <Button type="button" label="Unblock" @click="unblockPanel()"></Button>

        <BlockUI :blocked="blockedPanel">
            <Panel header="Godfather I" style="margin-top: 20px">
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Panel>
        </BlockUI>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blockedPanel: false,
            blockedDocument: false
        }
    },
    methods: {
        blockDocument() {
            this.blockedDocument = true;

            setTimeout(() => {
                this.blockedDocument = false;
            }, 3000);
        },
        blockPanel() {
            this.blockedPanel = true;
        },
        unblockPanel() {
            this.blockedPanel = false;
        }
    }
}
<\\/script>

<style lang="scss" scoped>
.p-panel p {
    line-height: 1.5;
    margin: 0;
}

button {
    margin-right: .5rem;
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Document</h5>
        <BlockUI :blocked="blockedDocument" :fullScreen="true"></BlockUI>

        <Button type="button" label="Block" @click="blockDocument()"></Button>

        <h5>Panel</h5>
        <Button type="button" label="Block" @click="blockPanel()"></Button>
        <Button type="button" label="Unblock" @click="unblockPanel()"></Button>

        <BlockUI :blocked="blockedPanel">
            <Panel header="Godfather I" style="margin-top: 20px">
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Panel>
        </BlockUI>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const blockedPanel = ref(false);
        const blockedDocument = ref(false);
        const blockDocument = () => {
            blockedDocument.value = true;

            setTimeout(() => {
                blockedDocument.value = false;
            }, 3000);
        };
        const blockPanel = () => {
            blockedPanel.value = true;
        };
        const unblockPanel = () => {
            blockedPanel.value = false;
        };

        return { blockedPanel, blockedDocument, blockDocument, blockPanel, unblockPanel }
    }
}
<\\/script>

<style lang="scss" scoped>
.p-panel p {
    line-height: 1.5;
    margin: 0;
}

button {
    margin-right: .5rem;
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/blockui/blockui.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/panel/panel.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Document</h5>
            <p-blockui :blocked="blockedDocument" :full-screen="true"></p-blockui>

            <p-button type="button" label="Block" @click="blockDocument()"></p-button>

            <h5>Panel</h5>
            <p-button type="button" label="Block" @click="blockPanel()"></p-button>
            <p-button type="button" label="Unblock" @click="unblockPanel()"></p-button>

            <p-blockui :blocked="blockedPanel">
                <p-panel header="Godfather I" style="margin-top: 20px">
                    <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                </p-panel>
            </p-blockui>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const blockedPanel = ref(false);
                const blockedDocument = ref(false);
                const blockDocument = () => {
                    blockedDocument.value = true;

                    setTimeout(() => {
                        blockedDocument.value = false;
                    }, 3000);
                };
                const blockPanel = () => {
                    blockedPanel.value = true;
                };
                const unblockPanel = () => {
                    blockedPanel.value = false;
                };

                return { blockedPanel, blockedDocument, blockDocument, blockPanel, unblockPanel }
            },
            components: {
                "p-blockui": primevue.blockui,
                "p-panel": primevue.panel,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .p-panel p {
            line-height: 1.5;
            margin: 0;
        }

        .p-button {
            margin-right: .5rem;
        }
        </style>
`
                }
            }
        }
    }  
}
</script>