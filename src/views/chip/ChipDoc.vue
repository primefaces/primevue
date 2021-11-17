<template>
	<AppDoc name="ChipDemo" :sources="sources" github="chip/ChipDemo.vue">
		<h5>Import via Module</h5>
<pre v-code.script><code>
import Chip from 'primevue/chip';

</code></pre>

		<h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/chip/chip.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Chip can display labels, icons and images.</p>
<pre v-code><code>
&lt;Chip label="Text Only" /&gt;
&lt;Chip label="Text with icon" icon="pi pi-check" /&gt;
&lt;Chip label="Text with image" image="user.png" /&gt;

</code></pre>

		<h5>Removable</h5>
		<p>Setting <i>removable</i> property displays an icon to close the chip, the optional <i>remove</i>
		event is available to get notified when a chip is hidden.</p>
<pre v-code><code>
&lt;Chip label="Text" removable /&gt;

</code></pre>

		<h5>Templating</h5>
		<p>Content can easily be customized with the default slot instead of using the built-in modes.</p>
<pre v-code><code>
&lt;Chip&gt;
   Content
&lt;/Chip&gt;

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
						<td>label</td>
						<td>string</td>
						<td>null</td>
						<td>Defines the text to display.</td>
					</tr>
					<tr>
						<td>icon</td>
						<td>string</td>
						<td>null</td>
						<td>Defines the icon to display.</td>
					</tr>
					<tr>
						<td>image</td>
						<td>string</td>
						<td>null</td>
						<td>Defines the image to display.</td>
					</tr>
					<tr>
						<td>removable</td>
						<td>boolean</td>
						<td>false</td>
						<td>Whether to display a remove icon.</td>
					</tr>
					<tr>
						<td>removeIconClass</td>
						<td>string</td>
						<td>pi pi-times-circle</td>
						<td>Icon of the remove element.</td>
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
                        <td>remove</td>
                        <td>event: Browser event</td>
                        <td>Callback to invoke when a chip is removed.</td>
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
						<td>p-chip</td>
						<td>Container element.</td>
                    </tr>
					<tr>
						<td>p-chip-image</td>
						<td>Container element in image mode.</td>
                    </tr>
					<tr>
						<td>p-chip-text</td>
						<td>Text of the chip.</td>
                    </tr>
					<tr>
						<td>p-chip-remove-icon</td>
						<td>Remove icon.</td>
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
        <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
            <Chip label="Action" class="p-mr-2 p-mb-2" />
            <Chip label="Comedy" class="p-mr-2 p-mb-2" />
            <Chip label="Mystery" class="p-mr-2 p-mb-2" />
            <Chip label="Thriller" class="p-mb-2" removable />
        </div>

        <h5>Icon</h5>
        <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
            <Chip label="Apple" icon="pi pi-apple" class="p-mr-2 p-mb-2" />
            <Chip label="Facebook" icon="pi pi-facebook" class="p-mr-2 p-mb-2" />
            <Chip label="Google" icon="pi pi-google" class="p-mr-2 p-mb-2" />
            <Chip label="Microsoft" icon="pi pi-microsoft" class="p-mb-2" removable />
        </div>

        <h5>Image</h5>
        <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
            <Chip label="Amy Elsner" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2 p-mb-2" />
            <Chip label="Asiya Javayant" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2 p-mb-2" />
            <Chip label="Onyama Limba" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2 p-mb-2" />
            <Chip label="Xuxue Feng" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mb-2" removable />
        </div>

        <h5>Styling</h5>
        <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
            <Chip label="Action" class="p-mr-2 p-mb-2 custom-chip" />
            <Chip label="Apple" icon="pi pi-apple" class="p-mr-2 p-mb-2 custom-chip" />
            <Chip label="Onyama Limba" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2 p-mb-2 custom-chip" />
            <Chip label="Xuxue Feng" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="custom-chip p-mb-2" removable />
        </div>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
.p-chip.custom-chip {
    background: var(--primary-color);
    color: var(--primary-color-text);
}
</style>`
				},
				'composition-api': {
					tabName: 'Composition API Source',
					content: `
<template>
    <div>
        <h5>Basic</h5>
        <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
            <Chip label="Action" class="p-mr-2 p-mb-2" />
            <Chip label="Comedy" class="p-mr-2 p-mb-2" />
            <Chip label="Mystery" class="p-mr-2 p-mb-2" />
            <Chip label="Thriller" class="p-mb-2" removable />
        </div>

        <h5>Icon</h5>
        <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
            <Chip label="Apple" icon="pi pi-apple" class="p-mr-2 p-mb-2" />
            <Chip label="Facebook" icon="pi pi-facebook" class="p-mr-2 p-mb-2" />
            <Chip label="Google" icon="pi pi-google" class="p-mr-2 p-mb-2" />
            <Chip label="Microsoft" icon="pi pi-microsoft" class="p-mb-2" removable />
        </div>

        <h5>Image</h5>
        <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
            <Chip label="Amy Elsner" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2 p-mb-2" />
            <Chip label="Asiya Javayant" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2 p-mb-2" />
            <Chip label="Onyama Limba" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2 p-mb-2" />
            <Chip label="Xuxue Feng" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mb-2" removable />
        </div>

        <h5>Styling</h5>
        <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
            <Chip label="Action" class="p-mr-2 p-mb-2 custom-chip" />
            <Chip label="Apple" icon="pi pi-apple" class="p-mr-2 p-mb-2 custom-chip" />
            <Chip label="Onyama Limba" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2 p-mb-2 custom-chip" />
            <Chip label="Xuxue Feng" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="custom-chip p-mb-2" removable />
        </div>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
.p-chip.custom-chip {
    background: var(--primary-color);
    color: var(--primary-color-text);
}
</style>`
				},
				'browser-source': {
					tabName: 'Browser Source',
					imports: `<script src="https://unpkg.com/primevue@^3/chip/chip.min.js"><\\/script>`,
					content: `<div id="app">
		<h5>Basic</h5>
        <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
            <p-chip label="Action" class="p-mr-2 p-mb-2"></p-chip>
            <p-chip label="Comedy" class="p-mr-2 p-mb-2"></p-chip>
            <p-chip label="Mystery" class="p-mr-2 p-mb-2"></p-chip>
            <p-chip label="Thriller" class="p-mb-2" removable></p-chip>
        </div>

        <h5>Icon</h5>
        <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
            <p-chip label="Apple" icon="pi pi-apple" class="p-mr-2 p-mb-2"></p-chip>
            <p-chip label="Facebook" icon="pi pi-facebook" class="p-mr-2 p-mb-2"></p-chip>
            <p-chip label="Google" icon="pi pi-google" class="p-mr-2 p-mb-2"></p-chip>
            <p-chip label="Microsoft" icon="pi pi-microsoft" class="p-mb-2" removable></p-chip>
        </div>

        <h5>Image</h5>
        <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
            <p-chip label="Amy Elsner" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2 p-mb-2"></p-chip>
            <p-chip label="Asiya Javayant" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2 p-mb-2"></p-chip>
            <p-chip label="Onyama Limba" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2 p-mb-2"></p-chip>
            <p-chip label="Xuxue Feng" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mb-2" removable></p-chip>
        </div>

        <h5>Styling</h5>
        <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
            <p-chip label="Action" class="p-mr-2 p-mb-2 custom-chip"></p-chip>
            <p-chip label="Apple" icon="pi pi-apple" class="p-mr-2 p-mb-2 custom-chip"></p-chip>
            <p-chip label="Onyama Limba" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="p-mr-2 p-mb-2 custom-chip"></p-chip>
            <p-chip label="Xuxue Feng" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="custom-chip p-mb-2" removable></p-chip>
        </div>
	</div>

	<script type="module">
		const { createApp } = Vue;

		const App = {
			components: {
				"p-chip": primevue.chip
			}
		};

		createApp(App).mount('#app');
	<\\/script>

	<style>
	.p-chip.custom-chip {
	    background: var(--primary-color);
	    color: var(--primary-color-text);
	}
	</style>
`
				}
			}
		}
	}
}
</script>