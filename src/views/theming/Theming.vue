<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Theming</h1>
                <p>Choose from a variety of themes or develop your own theme easily.</p>
            </div>
        </div>

        <div class="content-section documentation">
            <h3 style="margin-top:0">Architecture</h3>
            <p>PrimeVue is a design agnostic library so unlike other UI libraries it does not enforce a certain styling such as material or bootstrap. In order to achieve this, styling has been
                separated into core and theme. Core resides inside PrimeVue to implement the structure of the components such as positioning whereas theme brings the colors, paddings
                and margins.</p>

            <h3>Themes</h3>
            <p>PrimeVue offers various free themes and premium themes along with premium templates that provide an application layout as well. All the free themes are built with
                the <a href="https://www.primefaces.org/designer/primevue">Theme Designer</a> and the npm package brings the CSS output of the theme whereas SCSS is kept as a premium feature
                in the designer. This means free themes are open source and for customization with SASS, a designer license needs to be acquired.</p>

            <h3>Customization</h3>
            <p>CSS of the themes share the same license as PrimeVue which is MIT, this means the generated CSS can be customized per your needs however this should be avoided if your customizations
                are not simple. For instance even to change a primary color, since there is no variable a find and replace should be performed various times. On the other hand, this can be achieved
                by changing a single variable e.g. $primaryColor. Visit the <a href="https://www.primefaces.org/designer/api/primevue/2.0.0">SASS API</a> for the documentation of available customization options.</p>

            <p><a href="https://www.primefaces.org/designer/primevue">Designer API</a> is the ultimate tool to create your own PrimeVue experience powered by a SASS based theme engine
                with 500+ variables and a demo application. As mentioned before, PrimeVue only ships the generated CSS of <b>Saga</b>, <b>Vela</b>, <b>Nova</b>, <b>Luna</b> and <b>Rhea</b> themes whereas Designer provides
                full access to the whole SASS structure and the variables of these pre-built themes.</p>

            <p>Whether you have your own style guide or just need a custom theme, Designer API is the right tool to design and bring them to existence.</p>

            <p>Visit <a href="https://www.primefaces.org/designer/primevue">Designer API HomePage</a> for more information and live demos.</p>
            <a href="http://www.primefaces.org/designer/primevue" class="designer-image">
                <img alt="PrimeVue Designer" src="../../assets/images/primevue-designer.jpg" style="width: 100%" />
            </a>

            <h3>Scaling</h3>
            <p>PrimeVue utilizes rem units to make sure the components blend in with the rest of your UI perfectly. This also enables scaling, for example changing the size of the components
                is easy as configuring the font size of your document. Code below sets the scale of the components based on 16px. If you reqire bigger or smaller component, you may
                change this variable and components will resize accordingly.</p>
            
<CodeHighlight lang="css">
html {
    font-size: 16px;
}
</CodeHighlight>

            <p>Some commonly used components such as inputs, buttons and datatable also provide per component scaling with special classes. Components with specific scaling options
                are documented in their own documentation.</p>
<CodeHighlight>
&lt;InputText type="text" class="p-inputtext-sm" /&gt;
&lt;Button label="Button" class="p-button-lg" /&gt;
</CodeHighlight>

            <h3>Local Styling</h3>
            <p>Theming styles the components globally, in case you required to change the style of a certain component for a specific use case use the class property and override the defaults.
                Example below changes the background of the panel. Note that this is only for local styling, if you require to change the background color of all the panel, a custom theme is a far better choice.</p>
<CodeHighlight>
&lt;Panel header="Custom Header" class="dark-panel"/&gt;
</CodeHighlight>

<CodeHighlight>
&lt;style lang="scss" scoped&gt;
/deep/ .dark-panel.p-panel {
    .p-panel-titlebar {
        background: #212121;
    }
   
}
&lt;/style&gt;
</CodeHighlight>

            <h3>Utility Classes</h3>
            <p>A couple of utility classes are provided as a solution to common requirements.</p>

            <div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>p-components</td>
                                <td>Applies component theming such as font-family and font-size to an element.</td>
                            </tr>
                            <tr>
                                <td>p-disabled</td>
                                <td>Applies an opacity to display as disabled.</td>
                            </tr>
                            <tr>
                                <td>p-sr-only</td>
                                <td>Element becomes visually hidden however accessibility is still available.</td>
                            </tr>
                            <tr>
                                <td>p-reset</td>
                                <td>Resets the browsers defaults.</td>
                            </tr>
                            <tr>
                                <td>p-link</td>
                                <td>Renders a button as a link.</td>
                            </tr>
                            <tr>
                                <td>p-link</td>
                                <td>Renders a button as a link.</td>
                            </tr>
                            <tr>
                                <td>p-error</td>
                                <td>Applies the invalid theme color to a text.</td>
                            </tr>
                            <tr>
                                <td>p-invalid</td>
                                <td>Alias to p-error.</td>
                            </tr>
                            <tr>
                                <td>p-text-secondary</td>
                                <td>Applies the text color of the theme with the secondary priority.</td>
                            </tr>
						</tbody>
					</table>
				</div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.designer-image {
    display: block;
    margin-top: 30px;
}
</style>
