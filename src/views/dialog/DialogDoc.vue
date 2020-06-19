<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Dialog from 'primevue/dialog';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Dialog is used as a container and visibility is managed with <i>visible</i> property that requires the sync operator for two-way binding.</p>
<CodeHighlight>
&lt;Dialog header="Godfather I" :visible.sync="display" &gt;
	The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
	His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
	Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
	kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
&lt;/Dialog&gt;
</CodeHighlight>

<CodeHighlight lang="js">
export default {
	data() {
		return {
			display: false
		}
	}
}
</CodeHighlight>

				<h5>Header and Footer</h5>
				<p>Header and Footer sections are defined using properties with the same name that accept simple strings or with the <i>header</i> and <i>footer</i> templates for custom content.</p>
<CodeHighlight>
&lt;Dialog header="Header Text" footer="Footer Text" :visible.sync="display"&gt;
	Content
&lt;/Dialog&gt;
</CodeHighlight>

<CodeHighlight>
&lt;Dialog :visible.sync="display"&gt;
    &lt;template #header&gt;
		&lt;h3&gt;Header&lt;/h3&gt;
	&lt;/template&gt;

	Content
	&lt;template #footer&gt;
		&lt;Button label="Yes" icon="pi pi-check" /&gt;
		&lt;Button label="No" icon="pi pi-times" class="p-button-secondary"/&gt;
	&lt;/template&gt;
&lt;/Dialog&gt;
</CodeHighlight>

                <h5>Positioning</h5>
                <p>Dialog location is controlled with the <i>position</i> property whose default value is center. Other valid values are top", "bottom", "left", "right", "topleft", "topright", "bottomleft" and "bottomright"<div class=""></div>
<CodeHighlight>
&lt;Dialog position="top" :visible.sync="display"&gt;
	Content
&lt;/Dialog&gt;
</CodeHighlight>

                <h5>Popup Content inside the Dialog</h5>
                <p>If the dialog contains components with popup elements such as Dropdown or Calendar, set <i>contentStyle</i> to overflow:visible so that overlays can be displayed outside of the content area.</p>
<CodeHighlight>
&lt;Dialog :visible.sync="display" :contentStyle="{overflow: 'visible'}"&gt;
	Content
&lt;/Dialog&gt;
</CodeHighlight>

				<h5>Properties</h5>
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
                                <td>header</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Title content of the dialog.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Footer content of the dialog.</td>
                            </tr>
                            <tr>
                                <td>visible</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies the visibility of the dialog.</td>
                            </tr>
                            <tr>
                                <td>modal</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Defines if background should be blocked when dialog is displayed.</td>
                            </tr>
                            <tr>
                                <td>position</td>
                                <td>string</td>
                                <td>center</td>
                                <td>Position of the dialog, options are "center", "top", "bottom", "left", "right", "topleft", "topright", "bottomleft" or "bottomright".</td>
                            </tr>
                            <tr>
                                <td>contentStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Style of the content section.</td>
                            </tr>
                            <tr>
                                <td>rtl</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>When enabled dialog is displayed in RTL direction.</td>
                            </tr>
                            <tr>
                                <td>closable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Adds a close icon to the header to hide the dialog.</td>
                            </tr>
                            <tr>
                                <td>showHeader</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show the header or not.</td>
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
                            <tr>
                                <td>ariaCloseLabel</td>
                                <td>string</td>
                                <td>close</td>
                                <td>Aria label of the close icon.</td>
                            </tr>
                            <tr>
                                <td>maximizable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the dialog can be displayed full screen.</td>
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
							<td>hide</td>
							<td>event: Event object</td>
							<td>Callback to invoke when dialog is hidden.</td>
						</tr>
						<tr>
							<td>show</td>
							<td>event: Event object</td>
							<td>Callback to invoke when dialog is showed.</td>
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
							<td>p-dialog</td>
							<td>Container element.</td>
						</tr>
						<tr>
							<td>p-dialog-titlebar</td>
							<td>Container of header.</td>
						</tr>
						<tr>
							<td>p-dialog-title</td>
							<td>Header element.</td>
						</tr>
						<tr>
							<td>p-dialog-titlebar-icon</td>
							<td>Icon container inside header.</td>
						</tr>
						<tr>
							<td>p-dialog-titlebar-close</td>
							<td>Close icon element.</td>
						</tr>
						<tr>
							<td>p-dialog-content</td>
							<td>Content element</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/dialog" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h5&gt;Basic&lt;/h5&gt;
&lt;Button label="Show" icon="pi pi-external-link" @click="openBasic" /&gt;
&lt;Dialog header="Header " :visible.sync="displayBasic" :style="{width: '50vw'}"&gt;
    &lt;p class="p-m-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
    &lt;template #footer&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeBasic" /&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeBasic" class="p-button-secondary"/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;Button label="Long Content" icon="pi pi-external-link" @click="openBasic2" /&gt;
&lt;Dialog header="Header" :visible.sync="displayBasic2" :style="{width: '50vw'}"&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;

    &lt;p&gt;"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&lt;/p&gt;

    &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio 
        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe 
        eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.&lt;/p&gt;
    &lt;template #footer&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeBasic2" /&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeBasic2" class="p-button-secondary"/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;h5&gt;Modal&lt;/h5&gt;
&lt;Button label="Show" icon="pi pi-external-link" @click="openModal" /&gt;
&lt;Dialog header="Header" :visible.sync="displayModal" :style="{width: '50vw'}" :modal="true"&gt;
    &lt;p class="p-m-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
    &lt;template #footer&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeModal" /&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-secondary"/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;h5&gt;Maximizable&lt;/h5&gt;
&lt;Button label="Show" icon="pi pi-external-link" @click="openMaximizable" /&gt;
&lt;Dialog header="Header" :visible.sync="displayMaximizable" :style="{width: '50vw'}" :maximizable="true" :modal="true"&gt;
    &lt;p class="p-m-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
    &lt;template #footer&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeMaximizable" /&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeMaximizable" class="p-button-secondary"/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;h5&gt;Position&lt;/h5&gt;
&lt;div class="p-grid p-dir-col"&gt;
    &lt;div class="p-col"&gt;
        &lt;Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" class="p-button-warning" /&gt;
        &lt;Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" class="p-button-warning" /&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" class="p-button-warning" /&gt;
        &lt;Button label="TopLeft" icon="pi pi-arrow-down" @click="openPosition('topleft')" class="p-button-warning" /&gt;
        &lt;Button label="TopRight" icon="pi pi-arrow-down" @click="openPosition('topright')" class="p-button-warning" /&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" class="p-button-warning" /&gt;
        &lt;Button label="BottomLeft" icon="pi pi-arrow-up" @click="openPosition('bottomleft')" class="p-button-warning" /&gt;
        &lt;Button label="BottomRight" icon="pi pi-arrow-up" @click="openPosition('bottomright')" class="p-button-warning" /&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;Dialog header="Header" :visible.sync="displayPosition" :style="{width: '50vw'}" :position="position" :modal="true"&gt;
    &lt;p class="p-m-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
    &lt;template #footer&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closePosition" /&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closePosition" class="p-button-secondary"/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            displayBasic: false,
            displayBasic2: false,
            displayModal: false,
            displayMaximizable: false,
            displayPosition: false,
            position: 'center'
        }
    },
    methods: {
        openBasic() {
            this.displayBasic = true;
        },
        closeBasic() {
            this.displayBasic = false;
        },
        openBasic2() {
            this.displayBasic2 = true;
        },
        closeBasic2() {
            this.displayBasic2 = false;
        },
        openModal() {
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        },
        openMaximizable() {
            this.displayMaximizable = true;
        },
        closeMaximizable() {
            this.displayMaximizable = false;
        },
        openPosition(position) {
            this.position = position;
            this.displayPosition = true;
        },
        closePosition() {
            this.displayPosition = false;
        }
    },
    components: {
        'DialogDoc': DialogDoc
    }
}
</CodeHighlight>

<CodeHighlight lang="css">
//CSS
body .p-button-dark {
    background-color: #455b70;
    border-color: #455b70;
}
body .p-button-dark:enabled:hover {
    background-color: #364758;
}
body .p-button-dark:enabled:focus {
    box-shadow: 0 0 0 0.2em #95a9bd;
}
body .{
    margin: .5em .5em .5em 0;
    width: 140px;
}
body .p-dialog .p-dialog-content {
    line-height: 1.5;
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>
