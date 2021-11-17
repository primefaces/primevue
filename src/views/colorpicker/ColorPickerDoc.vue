<template>
	<AppDoc name="ColorPickerDemo" :sources="sources" :extFiles="extFiles" github="colorpicker/ColorPickerDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import ColorPicker from 'primevue/colorpicker';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/colorpicker/colorpicker.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>A model can be bound using the standard v-model directive. Default color format to use in value binding is "hex" and other possible values are "rgb" and "hsb".</p>
<pre v-code><code>
&lt;ColorPicker v-model="color" /&gt;

</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            color2: '1976D2'
        }
    }
}

</code></pre>

        <h5>Inline and Overlay</h5>
        <p>ColorPicker is displayed as an overlay with a preview option by default where second alternative is the inline mode.</p>
<pre v-code><code>
&lt;ColorPicker v-model="color" :inline="true" /&gt;

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
                        <td>modelValue</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Value of the component.</td>
                    </tr>
                    <tr>
                        <td>defaultColor</td>
                        <td>string</td>
                        <td>ff0000</td>
                        <td>Initial color to display when value is not defined.</td>
                    </tr>
                    <tr>
                        <td>inline</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to display as an overlay or not.</td>
                    </tr>
                    <tr>
                        <td>format</td>
                        <td>string</td>
                        <td>hex</td>
                        <td>Format to use in value binding, supported formats are "hex", "rgb" and "hsb".</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that the component should be disabled.</td>
                    </tr>
                    <tr>
                        <td>tabindex</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Index of the element in tabbing order.</td>
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
                        <td>ariaLabelledBy</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
                    </tr>
                    <tr>
                        <td>panelClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the overlay panel.</td>
                    </tr>
                    <tr>
                        <td>appendTo</td>
                        <td>string</td>
                        <td>body</td>
                        <td>A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body
                        and "self" for the element itself.</td>
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
                        <td>change</td>
                        <td>event.originalEvent: Browser event <br >
                            event.value: Selected color
                        </td>
                        <td>Callback to invoke when a color is selected.</td>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td>-</td>
                        <td>Callback to invoke when popup is shown.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Callback to invoke when popup is hidden.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Styling</h5>
        <p>Following is the list style classed of the component.</p>
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
                        <td>p-colorpicker</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-colorpicker-overlay</td>
                        <td>Container element in overlay mode.</td>
                    </tr>
                    <tr>
                        <td>p-colorpicker-preview </td>
                        <td>Preview input in overlay mode.</td>
                    </tr>
                    <tr>
                        <td>p-colorpicker-panel</td>
                        <td>Panel element of the colorpicker.</td>
                    </tr>
                    <tr>
                        <td>p-colorpicker-content</td>
                        <td>Wrapper that contains color and hue sections.</td>
                    </tr>
                    <tr>
                        <td>p-colorpicker-color-selector</td>
                        <td>Color selector container.</td>
                    </tr>
                    <tr>
                        <td>p-colorpicker-color</td>
                        <td>Color element.</td>
                    </tr>
                    <tr>
                        <td>p-colorpicker-color-handle</td>
                        <td>Handle of the color element.</td>
                    </tr>
                    <tr>
                        <td>p-colorpicker-hue</td>
                        <td>Hue slider.</td>
                    </tr>
                    <tr>
                        <td>p-colorpicker-hue-handle</td>
                        <td>Handle of the hue slider.</td>
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
        <h5>Inline</h5>
        <ColorPicker v-model="color1" :inline="true" />

        <h5>Overlay</h5>
        <ColorPicker v-model="color2" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            color1: null,
            color2: '1976D2'
        }
    }
}
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Inline</h5>
        <ColorPicker v-model="color1" :inline="true" />

        <h5>Overlay</h5>
        <ColorPicker v-model="color2" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const color1 = ref(null);
        const color2 = ref('1976D2');

        return { color1, color2 }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/colorpicker/colorpicker.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Inline</h5>
            <p-colorpicker v-model="color1" :inline="true"></p-colorpicker>

            <h5>Overlay</h5>
            <p-colorpicker v-model="color2"></p-colorpicker>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const color1 = ref(null);
                const color2 = ref('1976D2');

                return { color1, color2 }
            },
            components: {
                "p-colorpicker": primevue.colorpicker
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>
`
                }
            },
            extFiles: {
                'index.css': `
.p-colorpicker-panel .p-colorpicker-hue {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAACWCAIAAAC3uvTNAAAA7ElEQVRYw+2YUQqDQAxEh9GWuqV6Be9/JT88RN0VRUuv0ElBwhKY3yF5m90kLKd+mF/975r6geNyjm9Fy0kgqTJ6nqoIdGKczjmPJU5tZxA8wWPL7YOHKhZAlcmTAVVcxSCrMbfgqY/H6JEOoASPe56tgSrqLR7U2zWojwWjJ3jq47HEiZoGTwJxP1RRXw8y9RZfCMhbhTHOVTxXnUFtPJ5rGjzu35y2KfKGQxWT2K4TQL1d2zz6KAH1kRU8wfOXx+37qY3Hct+aDaqot2u7R/wMuDS3qnj0z0HqK4X/+kRNHdfUwFP2Nisqe/sFuUZiVjC9HCUAAAAASUVORK5CYII=)
}
.p-colorpicker-panel .p-colorpicker-color {
    background-image: url(data:image/png;base64,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)
}
                `
            }
        }
    }
}
</script>