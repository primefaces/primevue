<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<pre v-code.script><code>
import Dialog from 'primevue/dialog';

</code></pre>

				<h5>Getting Started</h5>
				<p>Dialog is used as a container and visibility is managed with <i>visible</i> property that requires the v-model for two-way binding.</p>
<pre v-code><code>
&lt;Dialog header="Header" v-model:visible="display" &gt;
	Content
&lt;/Dialog&gt;

</code></pre>

<pre v-code.script><code>
export default {
	data() {
		return {
			display: false
		}
	}
}

</code></pre>

				<h5>Header and Footer</h5>
				<p>Header and Footer sections are defined using properties with the same name that accept simple strings or with the <i>header</i> and <i>footer</i> templates for custom content.</p>
<pre v-code><code>
&lt;Dialog header="Header" footer="Footer" v-model:visible="display"&gt;
	Content
&lt;/Dialog&gt;

</code></pre>

<pre v-code><code>
&lt;Dialog v-model:visible="display"&gt;
    &lt;template #header&gt;
		&lt;h3&gt;Header&lt;/h3&gt;
	&lt;/template&gt;

	Content

	&lt;template #footer&gt;
		&lt;Button label="No" icon="pi pi-times" class="p-button-text"/&gt;
        &lt;Button label="Yes" icon="pi pi-check" autofocus /&gt;
	&lt;/template&gt;
&lt;/Dialog&gt;

</code></pre>

                <h5>Positioning</h5>
                <p>Dialog location is controlled with the <i>position</i> property whose default value is center. Other valid values are top", "bottom", "left", "right", "topleft", "topright", "bottomleft" and "bottomright".</p>
<pre v-code><code>
&lt;Dialog position="top" v-model:visible="display"&gt;
	Content
&lt;/Dialog&gt;

</code></pre>

                <h5>Responsive</h5>
                <p>Dialog width can be adjusted per screen size with the <i>breakpoints</i> option. In example below, default width is set to 50vw and below 961px, width would be 75vw and finally below 641px width becomes
                100%. The value of <i>breakpoints</i> should be an object literal whose keys are the maximum screen sizes and values are the widths per screen.</p>

<pre v-code><code>
&lt;Dialog v-model:visible="display" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"&gt;
	Content
&lt;/Dialog&gt;

</code></pre>

                <h5>Initial Focus</h5>
                <p>Adding <i>autofocus</i> to an element in the dialog makes it the initial focus target when dialog gets shown.</p>
<pre v-code><code>
&lt;Dialog v-model:visible="display"&gt;
    Content
	&lt;template #footer&gt;
        &lt;Button label="No" /&gt;
        &lt;Button label="Yes" autofocus/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

</code></pre>

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
                                <td>closeOnEscape</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Specifies if pressing escape key should hide the dialog.</td>
                            </tr>
                            <tr>
                                <td>dismissableMask</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies if clicking the modal background should hide the dialog.</td>
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
                            <tr>
                                <td>breakpoints</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Object literal to define widths per screen size.</td>
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

                <h5>Slots</h5>
				<div class="doc-tablewrapper">
                    <table class="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>header</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>-</td>
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
                <div class="p-d-flex p-jc-between">
                    <a href="https://github.com/primefaces/primevue/tree/master/src/views/dialog" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
                        <span>View on GitHub</span>
                    </a>
                    <LiveEditor name="DialogDemo" :sources="sources" :components="['Button']" />
                </div>
<pre v-code><code><template v-pre>
&lt;h5&gt;Basic&lt;/h5&gt;
&lt;Button label="Show" icon="pi pi-external-link" @click="openBasic" /&gt;
&lt;Dialog header="Header" v-model:visible="displayBasic" :style="{width: '50vw'}"&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
    &lt;template #footer&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeBasic" class="p-button-text"/&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus /&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;Button label="Long Content" icon="pi pi-external-link" @click="openBasic2" /&gt;
&lt;Dialog header="Header" v-model:visible="displayBasic2" :style="{width: '50vw'}"&gt;
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
        &lt;Button label="No" icon="pi pi-times" @click="closeBasic2" class="p-button-text"/&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeBasic2" autofocus /&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;h5&gt;Modal&lt;/h5&gt;
&lt;Button label="Show" icon="pi pi-external-link" @click="openModal" /&gt;
&lt;Dialog header="Header" v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true"&gt;
    &lt;p class="p-m-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
    &lt;template #footer&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus /&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;h5&gt;Responsive&lt;/h5&gt;
&lt;Button label="Show" icon="pi pi-external-link" @click="openResponsive" /&gt;
&lt;Dialog header="Header" v-model:visible="displayResponsive" :breakpoints="{'960px': '75vw'}" :style="{width: '50vw'}"&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
    &lt;template #footer&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeResponsive" class="p-button-text"/&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeResponsive" autofocus /&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;h5&gt;Confirmation&lt;/h5&gt;
&lt;Button label="Confirm" icon="pi pi-external-link" @click="openConfirmation" /&gt;
&lt;Dialog header="Confirmation" v-model:visible="displayConfirmation" :style="{width: '350px'}" :modal="true"&gt;
    &lt;div class="confirmation-content"&gt;
        &lt;i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" /&gt;
        &lt;span&gt;Are you sure you want to proceed?&lt;/span&gt;
    &lt;/div&gt;
    &lt;template #footer&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text"/&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeConfirmation" class="p-button-text" autofocus /&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;h5&gt;Maximizable&lt;/h5&gt;
&lt;Button label="Show" icon="pi pi-external-link" @click="openMaximizable" /&gt;
&lt;Dialog header="Header" v-model:visible="displayMaximizable" :style="{width: '50vw'}" :maximizable="true" :modal="true"&gt;
    &lt;p class="p-m-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
    &lt;template #footer&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeMaximizable" class="p-button-text"/&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeMaximizable" autofocus /&gt;
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

&lt;Dialog header="Header" v-model:visible="displayPosition" :style="{width: '50vw'}" :position="position" :modal="true"&gt;
    &lt;p class="p-m-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
    &lt;template #footer&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closePosition" class="p-button-text" /&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closePosition" autofocus /&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;
</template>
</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            displayBasic: false,
            displayBasic2: false,
            displayModal: false,
            displayResponsive: false,
            displayConfirmation: false,
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
        openResponsive() {
            this.displayResponsive = true;
        },
        closeResponsive() {
            this.displayResponsive = false;
        },
        openModal() {
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        },
        openConfirmation() {
            this.displayConfirmation = true;
        },
        closeConfirmation() {
            this.displayConfirmation = false;
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

</code></pre>

<pre v-code.css><code>
.p-button {
    margin: 0 .5rem 0 0;
    min-width: 10rem;
}

p {
    margin: 0;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-dialog .p-button {
    min-width: 6rem;
}

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>

<script>
import LiveEditor from '../liveeditor/LiveEditor';
export default {
    data() {
        return {
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <Button label="Show" icon="pi pi-external-link" @click="openBasic" />
                <Dialog header="Header" v-model:visible="displayBasic" :style="{width: '50vw'}">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closeBasic" class="p-button-text"/>
                        <Button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus />
                    </template>
                </Dialog>

                <Button label="Long Content" icon="pi pi-external-link" @click="openBasic2" />
                <Dialog header="Header" v-model:visible="displayBasic2" :style="{width: '50vw'}">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>

                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                        eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closeBasic2" class="p-button-text"/>
                        <Button label="Yes" icon="pi pi-check" @click="closeBasic2" autofocus />
                    </template>
                </Dialog>

                <h5>Modal</h5>
                <Button label="Show" icon="pi pi-external-link" @click="openModal" />
                <Dialog header="Header" v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true">
                    <p class="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
                        <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />
                    </template>
                </Dialog>

                <h5>Responsive</h5>
                <Button label="Show" icon="pi pi-external-link" @click="openResponsive" />
                <Dialog header="Header" v-model:visible="displayResponsive" :breakpoints="{'960px': '75vw'}" :style="{width: '50vw'}">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closeResponsive" class="p-button-text"/>
                        <Button label="Yes" icon="pi pi-check" @click="closeResponsive" autofocus />
                    </template>
                </Dialog>

                <h5>Confirmation</h5>
                <Button label="Confirm" icon="pi pi-external-link" @click="openConfirmation" />
                <Dialog header="Confirmation" v-model:visible="displayConfirmation" :style="{width: '350px'}" :modal="true">
                    <div class="confirmation-content">
                        <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
                        <span>Are you sure you want to proceed?</span>
                    </div>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text"/>
                        <Button label="Yes" icon="pi pi-check" @click="closeConfirmation" class="p-button-text" autofocus />
                    </template>
                </Dialog>

                <h5>Maximizable</h5>
                <Button label="Show" icon="pi pi-external-link" @click="openMaximizable" />
                <Dialog header="Header" v-model:visible="displayMaximizable" :style="{width: '50vw'}" :maximizable="true" :modal="true">
                    <p class="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closeMaximizable" class="p-button-text"/>
                        <Button label="Yes" icon="pi pi-check" @click="closeMaximizable" autofocus />
                    </template>
                </Dialog>

                <h5>Position</h5>
                <div class="p-grid p-dir-col">
                    <div class="p-col">
                        <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" class="p-button-warning" />
                        <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" class="p-button-warning" />
                    </div>
                    <div class="p-col">
                        <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" class="p-button-warning" />
                        <Button label="TopLeft" icon="pi pi-arrow-down" @click="openPosition('topleft')" class="p-button-warning" />
                        <Button label="TopRight" icon="pi pi-arrow-down" @click="openPosition('topright')" class="p-button-warning" />
                    </div>
                    <div class="p-col">
                        <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" class="p-button-warning" />
                        <Button label="BottomLeft" icon="pi pi-arrow-up" @click="openPosition('bottomleft')" class="p-button-warning" />
                        <Button label="BottomRight" icon="pi pi-arrow-up" @click="openPosition('bottomright')" class="p-button-warning" />
                    </div>
                </div>

                <Dialog header="Header" v-model:visible="displayPosition" :style="{width: '50vw'}" :position="position" :modal="true">
                   <p class="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closePosition" class="p-button-text" />
                        <Button label="Yes" icon="pi pi-check" @click="closePosition" autofocus />
                    </template>
                </Dialog>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayBasic: false,
            displayBasic2: false,
            displayModal: false,
            displayResponsive: false,
            displayConfirmation: false,
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
        openResponsive() {
            this.displayResponsive = true;
        },
        closeResponsive() {
            this.displayResponsive = false;
        },
        openModal() {
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        },
        openConfirmation() {
            this.displayConfirmation = true;
        },
        closeConfirmation() {
            this.displayConfirmation = false;
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
    }
}`,
                    style: `<style scoped lang="scss">
.p-button {
    margin: 0.3rem .5rem;
    min-width: 10rem;
}

p {
    margin: 0;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-dialog .p-button {
    min-width: 6rem;
}
</style>`
                }
            }
        }
    },
    components: {
        LiveEditor
    }
}
</script>
