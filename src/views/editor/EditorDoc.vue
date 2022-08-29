<template>
	<AppDoc name="EditorDemo" :sources="sources" :dependencies="{'quill': '^1.3.7'}" component="Editor" github="editor/EditorDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Editor from 'primevue/editor';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/editor/editor.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>A model can be bound using the standard v-model directive.</p>
<pre v-code><code>
&lt;Editor v-model="value" editorStyle="height: 320px"/&gt;

</code></pre>

		<h5>Toolbar</h5>
		<p>Editor provides a default toolbar with common options, to customize it define your elements inside the header element. Refer to <a href="http://quilljs.com/docs/modules/toolbar/">Quill documentation</a> for available controls.</p>
<pre v-code><code>
&lt;Editor v-model="value" editorStyle="height: 320px"&gt;
	&lt;template #toolbar&gt;
		&lt;span class="ql-formats"&gt;
			&lt;button class="ql-bold"&gt;&lt;/button&gt;
			&lt;button class="ql-italic"&gt;&lt;/button&gt;
			&lt;button class="ql-underline"&gt;&lt;/button&gt;
		&lt;/span&gt;
	&lt;/template&gt;
&lt;/Editor&gt;

</code></pre>

		<h5>Properties</h5>
        <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
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
                        <td>string</td>
                        <td>null</td>
                        <td>Value of the content.</td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Placeholder text to show when editor is empty.</td>
                    </tr>
                    <tr>
                        <td>readonly</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to instantiate the editor to readonly mode.</td>
                    </tr>
                    <tr>
                        <td>formats</td>
                        <td>string[]</td>
                        <td>null</td>
                        <td>Whitelist of formats to display, see <a href="http://quilljs.com/docs/formats/">here</a> for available options.</td>
                    </tr>
                    <tr>
                        <td>editorStyle</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Inline style of the container.</td>
                    </tr>
                    <tr>
                        <td>modules</td>
                        <td>object</td>
                        <td>null</td>
                        <td>
                            Modules configuration, see <a href="http://quilljs.com/docs/modules/">here</a> for available options.
                        </td>
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
                        <td>text-change</td>
                        <td>event.delta: Representation of the change.<br/>
                            event.source: Source of change. Will be either "user" or "api".<br/>
                            event.htmlValue: Current value as html.<br/>
                            event.textValue: Current value as text.<br/>
                            event.instance: Text editor instance.</td>
                        <td>Callback to invoke when text of editor changes.</td>
                    </tr>
                    <tr>
                        <td>selection-change</td>
                        <td>event.range: Representation of the selection boundaries.<br/>
                            event.oldRange: Representation of the previous selection boundaries.<br/>
                            event.source: Source of change. Will be either "user" or "api".<br/>
                            event.htmlValue: Current value as html.<br/>
                            event.textValue: Current value as text.<br/>
                            event.instance: Text editor instance.</td>
                        <td>Callback to invoke when selection of the text changes.</td>
                    </tr>
                    <tr>
                        <td>load</td>
                        <td>event.instance: Quill instance</td>
                        <td>Callback to invoke when the quill modules are loaded.</td>
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
                        <td>toolbar</td>
                        <td>-</td>
                    </tr>
				</tbody>
			</table>
        </div>

		<p>Refer to <a href="http://beta.quilljs.com/docs/api/#events">Quill documentation</a> for more information.</p>

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
                        <td>p-editor-container</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-editor-toolbar</td>
                        <td>Toolbar of the editor</td>
                    </tr>
                    <tr>
                        <td>p-editor-content</td>
                        <td>Editable area</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Accessibility</h5>
        <p>Quill performs generally well in terms of accessibility. The elements in the toolbar can be tabbed and have the necessary ARIA roles/attributes for screen readers. One known limitation is the lack of arrow key support
            for <a href="https://github.com/quilljs/quill/issues/1031">dropdowns</a> in the toolbar that may be overcome with a custom toolbar.</p>

		<h5>Dependencies</h5>
		<p><a href="http://quilljs.com">Quill</a> Editor 1.3+.</p>
		<p>Resources of quill needs to be added to your application.</p>
<pre v-code><code>
npm install quill --save

</code></pre>
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
        <h5>Default</h5>
        <Editor v-model="value1" editorStyle="height: 320px"/>

        <h5>Customized</h5>
        <Editor v-model="value2" editorStyle="height: 320px">
            <template v-slot:toolbar>
                <span class="ql-formats">
                    <button class="ql-bold" v-tooltip.bottom="'Bold'"></button>
                    <button class="ql-italic" v-tooltip.bottom="'Italic'"></button>
                    <button class="ql-underline" v-tooltip.bottom="'Underline'"></button>
                </span>
            </template>
        </Editor>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '<div>Welcome to PrimeVue <b>Editor</b></div><div><br></div>',
            value2: ''
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
        <h5>Default</h5>
        <Editor v-model="value1" editorStyle="height: 320px"/>

        <h5>Customized</h5>
        <Editor v-model="value2" editorStyle="height: 320px">
            <template v-slot:toolbar>
                <span class="ql-formats">
                    <button class="ql-bold" v-tooltip.bottom="'Bold'"></button>
                    <button class="ql-italic" v-tooltip.bottom="'Italic'"></button>
                    <button class="ql-underline" v-tooltip.bottom="'Underline'"></button>
                </span>
            </template>
        </Editor>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const value1 = ref('<div>Welcome to PrimeVue <b>Editor</b></div><div><br></div>');
        const value2 = ref('');

        return { value1, value2 }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/quill/dist/quill.min.js"><\\/script>

        <script src="https://unpkg.com/primevue@^3/editor/editor.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Default</h5>
            <p-editor v-model="value1" editor-style="height: 320px"></p-editor>

            <h5>Customized</h5>
            <p-editor v-model="value2" editor-style="height: 320px">
                <template v-slot:toolbar>
                    <span class="ql-formats">
                        <button class="ql-bold" v-tooltip.bottom="'Bold'"></button>
                        <button class="ql-italic" v-tooltip.bottom="'Italic'"></button>
                        <button class="ql-underline" v-tooltip.bottom="'Underline'"></button>
                    </span>
                </template>
            </p-editor>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;
        const Tooltip = primevue.tooltip;

        const App = {
            setup() {
                const value1 = ref('<div>Welcome to PrimeVue <b>Editor</b></div><div><br></div>');
                const value2 = ref('');

                return { value1, value2 }
            },
            components: {
                "p-editor": primevue.editor
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .directive("tooltip", Tooltip)
            .mount("#app");
        <\\/script>
`
                }
            }
        }
    }
}
</script>
