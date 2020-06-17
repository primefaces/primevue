<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Install</h5>
                <p>PrimeFlex is available at npm, if you have an existing application run the following command to download it to your project.</p>
<CodeHighlight lang="js">
npm install primeflex --save
</CodeHighlight>

                <p>Then add the primeflex.css to your application</p>
<CodeHighlight lang="js">
import 'primeflex/primeflex.css';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Core member of the FormLayout is the <i>.p-field</i> class that wraps the input field and the associated label.</p>
<CodeHighlight>
&lt;div class="p-field"&gt;
    &lt;label for="fieldId"&gt;Label&lt;/label&gt;
    &lt;InputText id="fieldId" type="text" /&gt;
&lt;/div&gt;
</CodeHighlight>

                <h5>Vertical Layout</h5>
                <p>In its simplest form, a vertical layout is created when used within <i>.p-fluid</i> which makes the components use all available width.</p>
<CodeHighlight>
&lt;div class="p-fluid"&gt;
    &lt;div class="p-field"&gt;
        &lt;label for="firstname"&gt;Firstname&lt;/label&gt;
        &lt;InputText id="firstname" type="text" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field"&gt;
        &lt;label for="lastname"&gt;Lastname&lt;/label&gt;
        &lt;InputText id="lastname" type="text" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

                <h5>Vertical Layout with Grid</h5>
                <p>This is where FormLayout actually hooks-in to PrimeFlex with the help of <i>.p-formgrid</i> class to optimize the content for form design. Example
                below arranges two fields to be displayed next two each other.</p>
<CodeHighlight>
&lt;div class="p-fluid p-formgrid p-grid"&gt;
        &lt;div class="p-field p-col"&gt;
        &lt;label for="firstname"&gt;Firstname&lt;/label&gt;
        &lt;InputText id="firstname" type="text" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col"&gt;
        &lt;label for="lastname"&gt;Lastname&lt;/label&gt;
        &lt;InputText id="lastname" type="text" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

                <h5>Horizontal and Fixed Width</h5>
                <p>In horizontal form, label of the field is displayed on the same row of the input as opposed to the vertical alternative. In this
                    example, label has a fixed width where container of the inputs gets the remaining space.
                </p>
<CodeHighlight>
&lt;div class="p-field p-grid"&gt;
    &lt;label for="firstname" class="p-col-fixed" style="width:100px"&gt;Firstname&lt;/label&gt;
    &lt;div class="p-col"&gt;
        &lt;InputText id="firstname" type="text" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="p-field p-grid"&gt;
    &lt;label for="lastname" class="p-col-fixed" style="width:100px"&gt;Lastname&lt;/label&gt;
    &lt;div class="p-col"&gt;
        &lt;InputText id="lastname" type="text" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

                <h5>Horizontal and Fluid</h5>
                <p>Wrapping the form in the previous example with <i>.p-fluid</i> and removing the fixed width results in a fluid layout.</p>
<CodeHighlight>
&lt;div class="p-fluid"&gt;
    &lt;div class="p-field p-grid"&gt;
        &lt;label for="firstname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"&gt;Firstname&lt;/label&gt;
        &lt;div class="p-col-12 p-md-10"&gt;
            &lt;InputText id="firstname" type="text" /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-grid"&gt;
        &lt;label for="lastname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"&gt;Lastname&lt;/label&gt;
        &lt;div class="p-col-12 p-md-10"&gt;
            &lt;InputText id="lastname" type="text" /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

                <h5>Inline</h5>
                <p>Inline forms are used to display the content on the same row and can simply be implemented by adding <i>.p-formgroup-inline</i> to the form container. Note that per design requirements, if labels
                    are not visually hidden, it is suggested to use <i>.p-sr-only</i> to still support screen readers.</p>
<CodeHighlight>
&lt;div class="p-formgroup-inline"&gt;
    &lt;div class="p-field"&gt;
        &lt;label for="firstname" class="p-sr-only"&gt;Firstname&lt;/label&gt;
        &lt;InputText id="firstname" type="text" placeholder="Firstname" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field"&gt;
        &lt;label for="lastname" class="p-sr-only"&gt;Lastname&lt;/label&gt;
        &lt;InputText id="lastname" type="text" placeholder="Lastname" /&gt;
    &lt;/div&gt;
    &lt;Button type="button" label="Submit" /&gt;
&lt;/div&gt;
</CodeHighlight>

                <h5>Checkbox and RadioButton</h5>
                <p>Checkbox and RadioButton have exclusive layout support via <i>.p-field-checkbox</i> and <i>.p-field-radiobutton</i> classes respectively.
                Examples here demonstrates vertical and horizontal layout alternatives.</p>
<CodeHighlight>
&lt;h3&gt;Vertical Checkbox&lt;/h3&gt;
&lt;div class="p-field-checkbox"&gt;
    &lt;Checkbox id="city1" name="city1" value="Chicago" v-model="cities1" /&gt;
    &lt;label for="city1"&gt;Chicago&lt;/label&gt;
&lt;/div&gt;
&lt;div class="p-field-checkbox"&gt;
    &lt;Checkbox id="city2" name="city1" value="Los Angeles" v-model="cities1" /&gt;
    &lt;label for="city2"&gt;Los Angeles&lt;/label&gt;
&lt;/div&gt;

&lt;h3&gt;Horizontal Checkbox&lt;/h3&gt;
&lt;div class="p-formgroup-inline"&gt;
    &lt;div class="p-field-checkbox"&gt;
        &lt;Checkbox id="city3" name="city2" value="Chicago" v-model="cities2" /&gt;
        &lt;label for="city3"&gt;Chicago&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="p-field-checkbox"&gt;
        &lt;Checkbox id="city4" name="city2" value="Los Angeles" v-model="cities2" /&gt;
        &lt;label for="city4"&gt;Los Angeles&lt;/label&gt;
    &lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

<CodeHighlight>
&lt;h3&gt;Vertical RadioButton&lt;/h3&gt;
&lt;div class="p-field-radiobutton"&gt;
    &lt;RadioButton id="city5" name="city1" value="Chicago" v-model="city1" /&gt;
    &lt;label for="city5"&gt;Chicago&lt;/label&gt;
&lt;/div&gt;
&lt;div class="p-field-radiobutton"&gt;
    &lt;RadioButton id="city6" name="city1" value="Los Angeles" v-model="city1" /&gt;
    &lt;label for="city6"&gt;Los Angeles&lt;/label&gt;
&lt;/div&gt;

&lt;h3&gt;Horizontal RadioButton&lt;/h3&gt;
&lt;div class="p-formgroup-inline"&gt;
    &lt;div class="p-field-checkbox"&gt;
        &lt;RadioButton id="city7" name="city2" value="Chicago" v-model="city2" /&gt;
        &lt;label for="city7"&gt;Chicago&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="p-field-checkbox"&gt;
        &lt;RadioButton id="city8" name="city2" value="Los Angeles" v-model="city2" /&gt;
        &lt;label for="city8"&gt;Los Angeles&lt;/label&gt;
    &lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

                <h5>Helper text</h5>
                <p>Helper text is an optional element defined with the <i>small</i> tag to display additional information about the input field.</p>
<CodeHighlight>
&lt;div class="p-field p-fluid"&gt;
    &lt;label for="username"&gt;Username&lt;/label&gt;
    &lt;InputText id="username" type="username" aria-describedby="username-help" /&gt;
    &lt;small id="username-help"&gt;Enter your username to reset your password.&lt;/small&gt;
&lt;/div&gt;
</CodeHighlight>

                <h5>Advanced Forms</h5>
                <p>A responsive form with various input fields can easily be implemented using a combination of <i>.p-field</i>, <i>.p-formgrid</i> and <i>.p-fluid</i>.</p>
<CodeHighlight>
&lt;div class="p-fluid p-formgrid p-grid"&gt;
    &lt;div class="p-field p-col-12 p-md-6"&gt;
        &lt;label for="firstname6"&gt;Firstname&lt;/label&gt;
        &lt;InputText id="firstname6" type="text" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-6"&gt;
        &lt;label for="lastname6"&gt;Lastname&lt;/label&gt;
        &lt;InputText id="lastname6" type="text" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12"&gt;
        &lt;label for="address"&gt;Address&lt;/label&gt;
        &lt;Textarea id="address" type="text" rows="4" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-6"&gt;
        &lt;label for="city"&gt;City&lt;/label&gt;
        &lt;InputText id="city" type="text" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-3"&gt;
        &lt;label for="state"&gt;State&lt;/label&gt;
        &lt;Dropdown inputId="state" v-model="selectedState" :options="states" optionLabel="name" placeholder="Select" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-3"&gt;
        &lt;label for="zip"&gt;Zip&lt;/label&gt;
        &lt;InputText id="zip" type="text" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

                <h5>Customization</h5>
                <p>FormLayout comes with sensible defaults, in case these values need to be customized suggested way is building <a href="https://github.com/primefaces/primeflex/blob/master/primeflex.scss">primeflex.scss</a> with your on variables.</p>

				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
                            <tr>
                                <th>Variable</th>
                                <th>Default</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>$fieldMargin</td>
                                <td>1em</td>
                            </tr>
                            <tr>
                                <td>$fieldLabelMargin</td>
                                <td>.5em</td>
                            </tr>
						</tbody>
					</table>
				</div>

			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/formlayout" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Vertical&lt;/h3&gt;
&lt;div class="p-fluid"&gt;
    &lt;div class="p-field"&gt;
        &lt;label for="firstname1"&gt;Firstname&lt;/label&gt;
        &lt;InputText id="firstname1" type="text" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field"&gt;
        &lt;label for="lastname1"&gt;Lastname&lt;/label&gt;
        &lt;InputText id="lastname1" type="text" /&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Vertical and Grid&lt;/h3&gt;
&lt;div class="p-fluid p-formgrid p-grid"&gt;
    &lt;div class="p-field p-col"&gt;
        &lt;label for="firstname2"&gt;Firstname&lt;/label&gt;
        &lt;InputText id="firstname2" type="text" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col"&gt;
        &lt;label for="lastname2"&gt;Lastname&lt;/label&gt;
        &lt;InputText id="lastname2" type="text" /&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Horizontal and Fixed Width&lt;/h3&gt;
&lt;div class="p-field p-grid"&gt;
    &lt;label for="firstname3" class="p-col-fixed" style="width:100px"&gt;Firstname&lt;/label&gt;
    &lt;div class="p-col"&gt;
        &lt;InputText id="firstname3" type="text" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="p-field p-grid"&gt;
    &lt;label for="lastname3" class="p-col-fixed" style="width:100px"&gt;Lastname&lt;/label&gt;
    &lt;div class="p-col"&gt;
        &lt;InputText id="lastname3" type="text" /&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Horizontal and Fluid&lt;/h3&gt;
&lt;div class="p-fluid"&gt;
    &lt;div class="p-field p-grid"&gt;
        &lt;label for="firstname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"&gt;Firstname&lt;/label&gt;
        &lt;div class="p-col-12 p-md-10"&gt;
            &lt;InputText id="firstname4" type="text" /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-grid"&gt;
        &lt;label for="lastname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"&gt;Lastname&lt;/label&gt;
        &lt;div class="p-col-12 p-md-10"&gt;
            &lt;InputText id="lastname4" type="text" /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Inline&lt;/h3&gt;
&lt;div class="p-formgroup-inline"&gt;
    &lt;div class="p-field"&gt;
        &lt;label for="firstname5" class="p-sr-only"&gt;Firstname&lt;/label&gt;
        &lt;InputText id="firstname5" type="text" placeholder="Firstname" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field"&gt;
        &lt;label for="lastname5" class="p-sr-only"&gt;Lastname&lt;/label&gt;
        &lt;InputText id="lastname5" type="text" placeholder="Lastname" /&gt;
    &lt;/div&gt;
    &lt;Button type="button" label="Submit" /&gt;
&lt;/div&gt;

&lt;h3&gt;Vertical Checkbox&lt;/h3&gt;
&lt;div class="p-field-checkbox"&gt;
    &lt;Checkbox id="city1" name="city1" value="Chicago" v-model="cities1" /&gt;
    &lt;label for="city1"&gt;Chicago&lt;/label&gt;
&lt;/div&gt;
&lt;div class="p-field-checkbox"&gt;
    &lt;Checkbox id="city2" name="city1" value="Los Angeles" v-model="cities1" /&gt;
    &lt;label for="city2"&gt;Los Angeles&lt;/label&gt;
&lt;/div&gt;

&lt;h3&gt;Horizontal Checkbox&lt;/h3&gt;
&lt;div class="p-formgroup-inline"&gt;
    &lt;div class="p-field-checkbox"&gt;
        &lt;Checkbox id="city3" name="city2" value="Chicago" v-model="cities2" /&gt;
        &lt;label for="city3"&gt;Chicago&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="p-field-checkbox"&gt;
        &lt;Checkbox id="city4" name="city2" value="Los Angeles" v-model="cities2" /&gt;
        &lt;label for="city4"&gt;Los Angeles&lt;/label&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Vertical RadioButton&lt;/h3&gt;
&lt;div class="p-field-radiobutton"&gt;
    &lt;RadioButton id="city5" name="city1" value="Chicago" v-model="city1" /&gt;
    &lt;label for="city5"&gt;Chicago&lt;/label&gt;
&lt;/div&gt;
&lt;div class="p-field-radiobutton"&gt;
    &lt;RadioButton id="city6" name="city1" value="Los Angeles" v-model="city1" /&gt;
    &lt;label for="city6"&gt;Los Angeles&lt;/label&gt;
&lt;/div&gt;

&lt;h3&gt;Horizontal RadioButton&lt;/h3&gt;
&lt;div class="p-formgroup-inline"&gt;
    &lt;div class="p-field-checkbox"&gt;
        &lt;RadioButton id="city7" name="city2" value="Chicago" v-model="city2" /&gt;
        &lt;label for="city7"&gt;Chicago&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="p-field-checkbox"&gt;
        &lt;RadioButton id="city8" name="city2" value="Los Angeles" v-model="city2" /&gt;
        &lt;label for="city8"&gt;Los Angeles&lt;/label&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Help Text&lt;/h3&gt;
&lt;div class="p-field p-fluid"&gt;
    &lt;label for="username"&gt;Username&lt;/label&gt;
    &lt;InputText id="username" type="username" aria-describedby="username-help" /&gt;
    &lt;small id="username-help"&gt;Enter your username to reset your password.&lt;/small&gt;
&lt;/div&gt;

&lt;h3&gt;Advanced&lt;/h3&gt;
&lt;div class="p-fluid p-formgrid p-grid"&gt;
    &lt;div class="p-field p-col-12 p-md-6"&gt;
        &lt;label for="firstname6"&gt;Firstname&lt;/label&gt;
        &lt;InputText id="firstname6" type="text" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-6"&gt;
        &lt;label for="lastname6"&gt;Lastname&lt;/label&gt;
        &lt;InputText id="lastname6" type="text" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12"&gt;
        &lt;label for="address"&gt;Address&lt;/label&gt;
        &lt;Textarea id="address" type="text" rows="4" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-6"&gt;
        &lt;label for="city"&gt;City&lt;/label&gt;
        &lt;InputText id="city" type="text" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-3"&gt;
        &lt;label for="state"&gt;State&lt;/label&gt;
        &lt;Dropdown inputId="state" v-model="selectedState" :options="states" optionLabel="name" placeholder="Select" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-3"&gt;
        &lt;label for="zip"&gt;Zip&lt;/label&gt;
        &lt;InputText id="zip" type="text" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            selectedState: null,
            states: [
                {name: 'Arizona', code: 'Arizona'},
                {name: 'California', value: 'California'},
                {name: 'Florida', code: 'Florida'},
                {name: 'Ohio', code: 'Ohio'},
                {name: 'Washington', code: 'Washington'}
            ],
            cities1: [],
            cities2: [],
            city1: null,
            city2: null
        }
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>