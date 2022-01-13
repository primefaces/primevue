<template>
	<AppDoc name="DialogDemo" :sources="sources" github="dialog/DialogDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Dialog from 'primevue/dialog';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;

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
                        <td>contentClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the content section.</td>
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
                    <tr>
                        <td>draggable</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Enables dragging to change the position using header.</td>
                    </tr>
                    <tr>
                        <td>minX</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Minimum value for the left coordinate of dialog in dragging.</td>
                    </tr>
                    <tr>
                        <td>minY</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Minimum value for the top coordinate of dialog in dragging.</td>
                    </tr>
                    <tr>
                        <td>keepInViewport</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Keeps dialog in the viewport when dragging.</td>
                    </tr>
                    <tr>
                        <td>appendTo</td>
                        <td>string</td>
                        <td>body</td>
                        <td>A valid query selector or an HTMLElement to specify where the dialog gets attached. Special keywords are "body" for document body and "self" for the element itself.</td>
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
                        <td>-</td>
                        <td>Callback to invoke when dialog is hidden.</td>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td>-</td>
                        <td>Callback to invoke when dialog is showed.</td>
                    </tr>
                    <tr>
                        <td>maximize</td>
                        <td>event: Event object</td>
                        <td>Fired when a dialog gets maximized.</td>
                    </tr>
                    <tr>
                        <td>unmaximize</td>
                        <td>event: Event object</td>
                        <td>Fired when a dialog gets unmaximized.</td>
                    </tr>
                    <tr>
                        <td>dragend</td>
                        <td>event: Event object</td>
                        <td>Fired when a dialog drag completes..</td>
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
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
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
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
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
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="closeMaximizable" class="p-button-text"/>
                <Button label="Yes" icon="pi pi-check" @click="closeMaximizable" autofocus />
            </template>
        </Dialog>

        <h5>Position</h5>
        <div class="grid flex-column">
            <div class="col">
                <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" class="p-button-warning" />
                <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" class="p-button-warning" />
            </div>
            <div class="col">
                <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" class="p-button-warning" />
                <Button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition('topleft')" class="p-button-warning" />
                <Button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" class="p-button-warning" />
            </div>
            <div class="col">
                <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" class="p-button-warning" />
                <Button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition('bottomleft')" class="p-button-warning" />
                <Button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition('bottomright')" class="p-button-warning" />
            </div>
        </div>

        <Dialog header="Header" v-model:visible="displayPosition" :style="{width: '50vw'}" :position="position" :modal="true">
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="closePosition" class="p-button-text" />
                <Button label="Yes" icon="pi pi-check" @click="closePosition" autofocus />
            </template>
        </Dialog>
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
}
<\\/script>

<style scoped lang="scss">
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
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
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
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
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
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
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
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="closeMaximizable" class="p-button-text"/>
                <Button label="Yes" icon="pi pi-check" @click="closeMaximizable" autofocus />
            </template>
        </Dialog>

        <h5>Position</h5>
        <div class="grid p-dir-col">
            <div class="col">
                <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" class="p-button-warning" />
                <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" class="p-button-warning" />
            </div>
            <div class="col">
                <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" class="p-button-warning" />
                <Button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition('topleft')" class="p-button-warning" />
                <Button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" class="p-button-warning" />
            </div>
            <div class="col">
                <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" class="p-button-warning" />
                <Button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition('bottomleft')" class="p-button-warning" />
                <Button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition('bottomright')" class="p-button-warning" />
            </div>
        </div>

        <Dialog header="Header" v-model:visible="displayPosition" :style="{width: '50vw'}" :position="position" :modal="true">
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="closePosition" class="p-button-text" />
                <Button label="Yes" icon="pi pi-check" @click="closePosition" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const displayBasic = ref(false);
        const displayBasic2 = ref(false);
        const displayModal = ref(false);
        const displayResponsive = ref(false);
        const displayConfirmation = ref(false);
        const displayMaximizable = ref(false);
        const displayPosition = ref(false);
        const position = ref('center');

        const openBasic = () => {
            displayBasic.value = true;
        };
        const closeBasic = () => {
            displayBasic.value = false;
        };
        const openBasic2 = () => {
            displayBasic2.value = true;
        };
        const closeBasic2 = () => {
            displayBasic2.value = false;
        };
        const openResponsive = () => {
            displayResponsive.value = true;
        };
        const closeResponsive = () => {
            displayResponsive.value = false;
        };
        const openModal = () => {
            displayModal.value = true;
        };
        const closeModal = () => {
            displayModal.value = false;
        }
        const openConfirmation = () => {
            displayConfirmation.value = true;
        };
        const closeConfirmation = () => {
            displayConfirmation.value = false;
        };
        const openMaximizable = () => {
            displayMaximizable.value = true;
        };
        const closeMaximizable = () => {
            displayMaximizable.value = false;
        };
        const openPosition = (pos) => {
            position.value = pos;
            displayPosition.value = true;
        };
        const closePosition = () => {
            displayPosition.value = false;
        };

        return { displayBasic, displayBasic2, displayModal, displayResponsive, displayConfirmation, displayMaximizable,
            displayPosition, position, openBasic, openBasic2, closeBasic, closeBasic2, openResponsive, closeResponsive,
            openModal, closeModal, openConfirmation, closeConfirmation, openMaximizable, closeMaximizable, openPosition, closePosition}
    }
}
<\\/script>

<style scoped lang="scss">
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
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    content: `<div id="app">
            <h5>Basic</h5>
            <p-button label="Show" icon="pi pi-external-link" @click="openBasic"></p-button>
            <p-dialog header="Header" v-model:visible="displayBasic" :style="{width: '50vw'}">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <template #footer>
                    <p-button label="No" icon="pi pi-times" @click="closeBasic" class="p-button-text"></p-button>
                    <p-button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus></p-button>
                </template>
            </p-dialog>

            <p-button label="Long Content" icon="pi pi-external-link" @click="openBasic2"></p-button>
            <p-dialog header="Header" v-model:visible="displayBasic2" :style="{width: '50vw'}">
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
                    <p-button label="No" icon="pi pi-times" @click="closeBasic2" class="p-button-text"></p-button>
                    <p-button label="Yes" icon="pi pi-check" @click="closeBasic2" autofocus></p-button>
                </template>
            </p-dialog>

            <h5>Modal</h5>
            <p-button label="Show" icon="pi pi-external-link" @click="openModal"></p-button>
            <p-dialog header="Header" v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true">
                <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <template #footer>
                    <p-button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"></p-button>
                    <p-button label="Yes" icon="pi pi-check" @click="closeModal" autofocus></p-button>
                </template>
            </p-dialog>

            <h5>Responsive</h5>
            <p-button label="Show" icon="pi pi-external-link" @click="openResponsive"></p-button>
            <p-dialog header="Header" v-model:visible="displayResponsive" :breakpoints="{'960px': '75vw'}" :style="{width: '50vw'}">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <template #footer>
                    <p-button label="No" icon="pi pi-times" @click="closeResponsive" class="p-button-text"></p-button>
                    <p-button label="Yes" icon="pi pi-check" @click="closeResponsive" autofocus></p-button>
                </template>
            </p-dialog>

            <h5>Confirmation</h5>
            <p-button label="Confirm" icon="pi pi-external-link" @click="openConfirmation"></p-button>
            <p-dialog header="Confirmation" v-model:visible="displayConfirmation" :style="{width: '350px'}" :modal="true">
                <div class="confirmation-content">
                    <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem"></i>
                    <span>Are you sure you want to proceed?</span>
                </div>
                <template #footer>
                    <p-button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text"></p-button>
                    <p-button label="Yes" icon="pi pi-check" @click="closeConfirmation" class="p-button-text" autofocus></p-button>
                </template>
            </p-dialog>

            <h5>Maximizable</h5>
            <p-button label="Show" icon="pi pi-external-link" @click="openMaximizable"></p-button>
            <p-dialog header="Header" v-model:visible="displayMaximizable" :style="{width: '50vw'}" :maximizable="true" :modal="true">
                <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <template #footer>
                    <p-button label="No" icon="pi pi-times" @click="closeMaximizable" class="p-button-text"></p-button>
                    <p-button label="Yes" icon="pi pi-check" @click="closeMaximizable" autofocus></p-button>
                </template>
            </p-dialog>

            <h5>Position</h5>
            <div class="grid p-dir-col">
                <div class="col">
                    <p-button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" class="p-button-warning"></p-button>
                    <p-button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" class="p-button-warning"></p-button>
                </div>
                <div class="col">
                    <p-button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" class="p-button-warning"></p-button>
                    <p-button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition('topleft')" class="p-button-warning"></p-button>
                    <p-button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" class="p-button-warning"></p-button>
                </div>
                <div class="col">
                    <p-button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" class="p-button-warning"></p-button>
                    <p-button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition('bottomleft')" class="p-button-warning"></p-button>
                    <p-button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition('bottomright')" class="p-button-warning"></p-button>
                </div>
            </div>

            <p-dialog header="Header" v-model:visible="displayPosition" :style="{width: '50vw'}" :position="position" :modal="true">
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <template #footer>
                    <p-button label="No" icon="pi pi-times" @click="closePosition" class="p-button-text"></p-button>
                    <p-button label="Yes" icon="pi pi-check" @click="closePosition" autofocus></p-button>
                </template>
            </p-dialog>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const displayBasic = ref(false);
                const displayBasic2 = ref(false);
                const displayModal = ref(false);
                const displayResponsive = ref(false);
                const displayConfirmation = ref(false);
                const displayMaximizable = ref(false);
                const displayPosition = ref(false);
                const position = ref('center');

                const openBasic = () => {
                    displayBasic.value = true;
                };
                const closeBasic = () => {
                    displayBasic.value = false;
                };
                const openBasic2 = () => {
                    displayBasic2.value = true;
                };
                const closeBasic2 = () => {
                    displayBasic2.value = false;
                };
                const openResponsive = () => {
                    displayResponsive.value = true;
                };
                const closeResponsive = () => {
                    displayResponsive.value = false;
                };
                const openModal = () => {
                    displayModal.value = true;
                };
                const closeModal = () => {
                    displayModal.value = false;
                }
                const openConfirmation = () => {
                    displayConfirmation.value = true;
                };
                const closeConfirmation = () => {
                    displayConfirmation.value = false;
                };
                const openMaximizable = () => {
                    displayMaximizable.value = true;
                };
                const closeMaximizable = () => {
                    displayMaximizable.value = false;
                };
                const openPosition = (pos) => {
                    position.value = pos;
                    displayPosition.value = true;
                };
                const closePosition = () => {
                    displayPosition.value = false;
                };

                return { displayBasic, displayBasic2, displayModal, displayResponsive, displayConfirmation, displayMaximizable,
                    displayPosition, position, openBasic, openBasic2, closeBasic, closeBasic2, openResponsive, closeResponsive,
                    openModal, closeModal, openConfirmation, closeConfirmation, openMaximizable, closeMaximizable, openPosition, closePosition}
            },
            components: {
                "p-dialog": primevue.dialog,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
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
        </style>

`
                }
            }
        }
    }
}
</script>
