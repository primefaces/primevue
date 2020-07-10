<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import InputText from 'primevue/inputtext';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>A model can be bound using the standard v-model directive.</p>
<CodeHighlight>
&lt;InputText type="text" v-model="value" /&gt;
</CodeHighlight>

				<h5>Float Label</h5>
				<p>A floating label is implemented by wrapping the input and the label inside a container having <i>.p-float-label</i> style class.</p>
<CodeHighlight>
&lt;span class="p-float-label"&gt;
	&lt;InputText id="username" type="text" v-model="value" /&gt;
	&lt;label for="username"&gt;Username&lt;/label&gt;
&lt;/span&gt;
</CodeHighlight>

                <h5>Icons</h5>
                <p>An icon can be integrated within an input field by wrapping the input and the icon with an element having <i>p-input-icon-right</i>
                and <i>p-input-icon-left</i> classes depending on the icon location.</p>
<CodeHighlight>
&lt;span class="p-input-icon-left"&gt;
    &lt;i class="pi pi-search" /&gt;
    &lt;InputText type="text" v-model="value1" placeholder="Search" /&gt;
&lt;/span&gt;

&lt;span class="p-input-icon-right"&gt;
    &lt;InputText type="text" v-model="value2" /&gt;
    &lt;i class="pi pi-spin pi-spinner" /&gt;
&lt;/span&gt;

&lt;span class="p-input-icon-left p-input-icon-right"&gt;
    &lt;i class="pi pi-search" /&gt;
    &lt;InputText type="text" v-model="value3" /&gt;
    &lt;i class="pi pi-spin pi-spinner" /&gt;
&lt;/span&gt;
</CodeHighlight>

                <h5>Sizes</h5>
                <p>2 more sizes are available in addition to a regular input, for a smaller input add <i>p-inputtext-sm</i> and for a larger one, use <i>p-inputtext-lg</i>.
                Note that these classes are mainly be used to change the size of a particular field, for global scaling see the <router-link to="/theming">theming</router-link> page.</p>
<CodeHighlight>
&lt;InputText type="text" class="p-inputtext-sm" placeholder="Small" /&gt;
&lt;InputText type="text" placeholder="Normal" /&gt;
&lt;InputText type="text" class="p-inputtext-lg"  placeholder="Large" /&gt;
</CodeHighlight>

                <p>Instead of repeating the scale classes for each input, sizing can also be applied to a group by adding the 
                    class to a container element so that descendant inputs share the same style easier.</p>
<CodeHighlight>
&lt;div class="p-inputtext-sm"&gt;
    &lt;InputText /&gt;
    &lt;InputNumber /&gt;
    &lt;InputMask /&gt;
&lt;/div&gt;
</CodeHighlight>

                <h5>Outlined vs Filled</h5>
                <p>Input fields come in two styles, default is <i>outlined</i> with borders around the field whereas <i>filled</i> alternative adds a background color
                to the field. Appling <i>p-input-filled</i> to an ancestor of an input <i>p-input-filled</i> enables the filled style. If you prefer
                to use filled inputs in the entire application, use a global container such as document body or the application element to apply the style class.</p>

<CodeHighlight>
&lt;div class="p-input-filled"&gt;
    &lt;InputText type="text" /&gt;
    &lt;InputText type="text" /&gt;
    &lt;InputText type="text" /&gt;
&lt;/div&gt;
</CodeHighlight>

				<h5>Properties</h5>
				<p>InputText passes any valid attribute to the underlying input element.</p>

                <h5>Events</h5>
                <p>Any valid event such as focus, blur and input are passed to the underlying input element.</p>

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
                                <td>p-inputtext</td>
                                <td>Input element</td>
                            </tr>
                            <tr>
                                <td>p-inputtext-sm</td>
                                <td>Smaller input element</td>
                            </tr>
                            <tr>
                                <td>p-inputtext-lg</td>
                                <td>Larger input element</td>
                            </tr>
                            <tr>
                                <td>p-inputtext-filled</td>
                                <td>Filled input style.</td>
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
&lt;div class="card"&gt;
    &lt;h5&gt;Basic&lt;/h5&gt;
    &lt;InputText type="text" v-model="value1" /&gt;
    &lt;span :style="{marginLeft: '.5em'}"&gt;{{value1}}&lt;/span&gt;

    &lt;h5&gt;Floating Label&lt;/h5&gt;
    &lt;span class="p-float-label"&gt;
        &lt;InputText id="username" type="text" v-model="value2" /&gt;
        &lt;label for="username"&gt;Username&lt;/label&gt;
    &lt;/span&gt;

    &lt;h5&gt;Left Icon&lt;/h5&gt;
    &lt;span class="p-input-icon-left"&gt;
        &lt;i class="pi pi-search" /&gt;
        &lt;InputText type="text" v-model="value3" placeholder="Search" /&gt;
    &lt;/span&gt;

    &lt;h5&gt;Right Icon&lt;/h5&gt;
    &lt;span class="p-input-icon-right"&gt;
        &lt;i class="pi pi-spin pi-spinner" /&gt;
        &lt;InputText type="text" v-model="value4" /&gt;
    &lt;/span&gt;

    &lt;h5&gt;Help Text&lt;/h5&gt;
    &lt;div class="p-field"&gt;
        &lt;label for="username1"&gt;Username&lt;/label&gt;
        &lt;InputText id="username1" type="username" aria-describedby="username1-help" /&gt;
        &lt;small id="username1-help"&gt;Enter your username to reset your password.&lt;/small&gt;
    &lt;/div&gt;

    &lt;h5&gt;Invalid&lt;/h5&gt;
    &lt;div class="p-field"&gt;
        &lt;label for="username2"&gt;Username&lt;/label&gt;
        &lt;InputText id="username2" type="username" aria-describedby="username2-help" class="p-invalid" /&gt;
        &lt;small id="username2-help" class="p-invalid"&gt;Username is not available.&lt;/small&gt;
    &lt;/div&gt;

    &lt;h5&gt;Disabled&lt;/h5&gt;
    &lt;InputText type="text" v-model="value5" disabled /&gt;

    &lt;h5&gt;Sizes&lt;/h5&gt;
    &lt;div class="sizes"&gt;
        &lt;InputText type="text" class="p-inputtext-sm" placeholder="Small" /&gt;
        &lt;InputText type="text" placeholder="Normal" /&gt;
        &lt;InputText type="text" class="p-inputtext-lg"  placeholder="Large" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: 'PrimeVue'
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>