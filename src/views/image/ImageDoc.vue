<template>
	<AppDoc name="InputTextDemo" :sources="sources" github="inputtext/InputTextDemo.vue">
        <h5>Import</h5>
<pre v-code.script><code>
import Image from 'primevue/image';

</code></pre>

		<h5>Getting Started</h5>
		<p>Image is used as the native <i>img</i> element and supports all properties that the native element has.</p>
<pre v-code><code>
&lt;Image src="image1.png" alt="Image Text" /&gt;

</code></pre>

        <h5>Preview</h5>
        <p>Preview mode displays a modal layer when the image is clicked that provides transformation options such as rotating and zooming.</p>

        <h5>Indicator Templating</h5>
        <p>An eye icon is displayed by default when the image is hovered in preview mode. Use the <i>indicator</i> template for custom content.</p>
<pre v-code><code>
&lt;Image src="image1.png" alt="Image Text"&gt;
    &lt;template #indicator&gt;
        Preview Content
    &lt;/template&gt;
&lt;/Image&gt;

</code></pre>

		<h5>Properties</h5>
		<p>Image passes any valid attribute to the underlying img element, additional attribute is the following.</p>
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
                        <td>preview</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Controls the preview functionality.</td>
                    </tr>
                    <tr>
                        <td>imageStyle</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Inline style of the image element.</td>
                    </tr>
                    <tr>
                        <td>imageClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the image element.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Events</h5>
        <p>Any valid event like click and mouseover are passed to the underlying input element. Events below are the additional ones related to the preview functionality.</p>
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
                        <td>show</td>
                        <td>-</td>
                        <td>Triggered when the preview overlay is shown.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Triggered when the preview overlay is hidden.</td>
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
                        <td>indicator</td>
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
                        <td>p-image</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-image-preview-container</td>
                        <td>Container element with preview enabled.</td>
                    </tr>
                    <tr>
                        <td>p-image-preview-indicator</td>
                        <td>Mask layer over the image when hovered.</td>
                    </tr>
                    <tr>
                        <td>p-image-preview-icon</td>
                        <td>Icon of the preview indicator.</td>
                    </tr>
                    <tr>
                        <td>p-image-mask</td>
                        <td>Preview overlay container.</td>
                    </tr>
                    <tr>
                        <td>p-image-toolbar</td>
                        <td>Transformation options container.</td>
                    </tr>
                    <tr>
                        <td>p-image-action</td>
                        <td>An element inside the toolbar.</td>
                    </tr>
                    <tr>
                        <td>p-image-preview</td>
                        <td>Image element inside the preview overlay.</td>
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
                    content:`
<template>
    <div>
        <h5>Basic</h5>
        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" />

        <h5>Preview</h5>
        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" preview />
    </div>
</template>

<script>
export default {
}
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content:`
<template>
    <div>
        <h5>Basic</h5>
        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" />

        <h5>Preview</h5>
        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" preview />
    </div>
</template>

<script>
export default {
}
<\\/script>`
                }
            }
        }
    }
}
</script>