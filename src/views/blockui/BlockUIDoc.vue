<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import BlockUI from 'primevue/blockui';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>BlockUI is controlled using the <i>blocked</i> property, by default target element to block is the child component. In example below, panel gets blocked
                    with a mask when blockedPanel is enabled and gets unblock when the bound variable is set to false.
                </p>
<CodeHighlight>
&lt;BlockUI :blocked="blockedPanel"&gt;
    &lt;Panel header="Header"&gt;
        Panel Content
    &lt;/Panel&gt;
&lt;/BlockUI&gt;
</CodeHighlight>

<CodeHighlight lang="js">
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
</CodeHighlight>

                <h3>Full Screen</h3>
                <p>In full screen mode, instead of a particular element, the whole document gets blocked. Set <i>fullScreen</i> as true in order to enable this functionality.</p>

<CodeHighlight>
&lt;BlockUI :blocked="blockedDocument" :fullScreen="true"&gt;&lt;/BlockUI&gt;
</CodeHighlight>

                <h3>Properties</h3>
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

                <h3>Events</h3>
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
							<td>show</td>
							<td>-</td>
							<td>Fired when the element gets unblocked.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Styling</h3>
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

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/blockui" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
&lt;h3&gt;Document&lt;/h3&gt;
&lt;BlockUI :blocked="blockedDocument" :fullScreen="true"&gt;&lt;/BlockUI&gt;

&lt;Button type="button" label="Block" @click="blockDocument()"&gt;&lt;/Button&gt;

&lt;h3&gt;Panel&lt;/h3&gt;
&lt;Button type="button" label="Block" @click="blockPanel()"&gt;&lt;/Button&gt;
&lt;Button type="button" label="Unblock" @click="unblockPanel()"&gt;&lt;/Button&gt;

&lt;BlockUI :blocked="blockedPanel"&gt;
    &lt;Panel header="Godfather I" style="margin-top: 20px"&gt;
        &lt;p&gt;The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.&lt;/p&gt;
    &lt;/Panel&gt;
&lt;/BlockUI&gt;
</CodeHighlight>

<CodeHighlight lang="javascript">
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
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>