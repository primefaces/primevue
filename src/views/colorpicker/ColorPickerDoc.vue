<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import ColorPicker from 'primevue/colorpicker';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>A model can be bound using the standard v-model directive. Default color format to use in value binding is "hex" and other possible values are "rgb" and "hsb".</p>
<CodeHighlight>
&lt;ColorPicker v-model="color" /&gt;
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            color2: '1976D2'
        }
    }
}
</CodeHighlight>

                <h5>Inline and Overlay</h5>
                <p>ColorPicker is displayed as an overlay with a preview option by default where second alternative is the inline mode.</p>
<CodeHighlight>
&lt;ColorPicker v-model="color" :inline="true" /&gt;
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
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/inputtext" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Inline&lt;/h3&gt;
&lt;ColorPicker v-model="color1" :inline="true" /&gt;

&lt;h3&gt;Overlay&lt;/h3&gt;
&lt;ColorPicker v-model="color2" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            color1: null,
            color2: '1976D2'
        }
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>