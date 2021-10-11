<template>	
    <AppDoc name="FormLayoutDemo" :sources="sources" github="formlayout/FormLayoutDemo.vue">
        <h5>Getting Started</h5>
		<p>Core member of the FormLayout is the <i>.p-field</i> class that wraps the input field and the associated label.</p>
<pre v-code><code>
&lt;div class="p-field"&gt;
    &lt;label for="fieldId"&gt;Label&lt;/label&gt;
    &lt;InputText id="fieldId" type="text" /&gt;
&lt;/div&gt;

</code></pre>

        <h5>Vertical Layout</h5>
        <p>In its simplest form, a vertical layout is created when used within <i>.p-fluid</i> that makes the components use all available width.</p>
<pre v-code><code>
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

</code></pre>

        <h5>Vertical Layout with Grid</h5>
        <p>This is where FormLayout actually hooks-in to PrimeFlex with the help of <i>.p-formgrid</i> class to optimize the content for form design. Example
        below arranges two fields to be displayed next two each other.</p>
<pre v-code><code>
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

</code></pre>

        <h5>Horizontal and Fixed Width</h5>
        <p>In horizontal form, label of the field is displayed on the same row of the input as opposed to the vertical alternative. In this
            example, label has a fixed width where container of the inputs gets the remaining space.
        </p>
<pre v-code><code>
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

</code></pre>

        <h5>Horizontal and Fluid</h5>
        <p>Wrapping the form in the previous example with <i>.p-fluid</i> and removing the fixed width results in a fluid layout.</p>
<pre v-code><code>
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

</code></pre>

        <h5>Inline</h5>
        <p>Inline forms are used to display the content on the same row and can simply be implemented by adding <i>.p-formgroup-inline</i> to the form container. Note that per design requirements, if labels
            are not visually hidden, it is suggested to use <i>.p-sr-only</i> to still support screen readers.</p>
<pre v-code><code>
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

</code></pre>

        <h5>Checkbox and RadioButton</h5>
        <p>Checkbox and RadioButton have exclusive layout support via <i>.p-field-checkbox</i> and <i>.p-field-radiobutton</i> classes respectively.
        Examples here demonstrates vertical and horizontal layout alternatives.</p>
<pre v-code><code>
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

</code></pre>

<pre v-code><code>
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

</code></pre>

        <h5>Helper text</h5>
        <p>Helper text is an optional element defined with the <i>small</i> tag to display additional information about the input field.</p>
<pre v-code><code>
&lt;div class="p-field p-fluid"&gt;
    &lt;label for="username"&gt;Username&lt;/label&gt;
    &lt;InputText id="username" type="username" aria-describedby="username-help" /&gt;
    &lt;small id="username-help"&gt;Enter your username to reset your password.&lt;/small&gt;
&lt;/div&gt;

</code></pre>

        <h5>Advanced Forms</h5>
        <p>A responsive form with various input fields can easily be implemented using a combination of <i>.p-field</i>, <i>.p-formgrid</i> and <i>.p-fluid</i>.</p>
<pre v-code><code>
&lt;div class="p-fluid p-formgrid p-grid"&gt;
    &lt;div class="p-field p-col-12 p-md-6"&gt;
        &lt;label for="firstname"&gt;Firstname&lt;/label&gt;
        &lt;InputText id="firstname" type="text" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-6"&gt;
        &lt;label for="lastname"&gt;Lastname&lt;/label&gt;
        &lt;InputText id="lastname" type="text" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12"&gt;
        &lt;label for="address"&gt;Address&lt;/label&gt;
        &lt;Textarea id="address" rows="4" /&gt;
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

</code></pre>

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
        <div class="card">
            <h5>Vertical</h5>
            <div class="p-fluid">
                <div class="p-field">
                    <label for="firstname1">Firstname</label>
                    <InputText id="firstname1" type="text" />
                </div>
                <div class="p-field">
                    <label for="lastname1">Lastname</label>
                    <InputText id="lastname1" type="text" />
                </div>
            </div>
        </div>

        <div class="card">
            <h5>Vertical and Grid</h5>
            <div class="p-fluid p-formgrid p-grid">
                <div class="p-field p-col">
                    <label for="firstname2">Firstname</label>
                    <InputText id="firstname2" type="text" />
                </div>
                <div class="p-field p-col">
                    <label for="lastname2">Lastname</label>
                    <InputText id="lastname2" type="text" />
                </div>
            </div>
        </div>

        <div class="card">
            <h5>Horizontal and Fixed Width</h5>
            <div class="p-field p-grid">
                <label for="firstname3" class="p-col-fixed" style="width:100px">Firstname</label>
                <div class="p-col">
                    <InputText id="firstname3" type="text" />
                </div>
            </div>
            <div class="p-field p-grid">
                <label for="lastname3" class="p-col-fixed" style="width:100px">Lastname</label>
                <div class="p-col">
                    <InputText id="lastname3" type="text" />
                </div>
            </div>
        </div>

        <div class="card">
            <h5>Horizontal and Fluid</h5>
            <div class="p-fluid">
                <div class="p-field p-grid">
                    <label for="firstname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Firstname</label>
                    <div class="p-col-12 p-md-10">
                        <InputText id="firstname4" type="text" />
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="lastname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Lastname</label>
                    <div class="p-col-12 p-md-10">
                        <InputText id="lastname4" type="text" />
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <h5>Inline</h5>
            <div class="p-formgroup-inline">
                <div class="p-field">
                    <label for="firstname5" class="p-sr-only">Firstname</label>
                    <InputText id="firstname5" type="text" placeholder="Firstname" />
                </div>
                <div class="p-field">
                    <label for="lastname5" class="p-sr-only">Lastname</label>
                    <InputText id="lastname5" type="text" placeholder="Lastname" />
                </div>
                <Button type="button" label="Submit" />
            </div>
        </div>

        <div class="card">
            <h5>Vertical Checkbox</h5>
            <div class="p-field-checkbox">
                <Checkbox id="city1" name="city1" value="Chicago" v-model="cities1" />
                <label for="city1">Chicago</label>
            </div>
            <div class="p-field-checkbox">
                <Checkbox id="city2" name="city1" value="Los Angeles" v-model="cities1" />
                <label for="city2">Los Angeles</label>
            </div>

            <h5>Horizontal Checkbox</h5>
            <div class="p-formgroup-inline">
                <div class="p-field-checkbox">
                    <Checkbox id="city3" name="city2" value="Chicago" v-model="cities2" />
                    <label for="city3">Chicago</label>
                </div>
                <div class="p-field-checkbox">
                    <Checkbox id="city4" name="city2" value="Los Angeles" v-model="cities2" />
                    <label for="city4">Los Angeles</label>
                </div>
            </div>
        </div>

        <div class="card">
            <h5>Vertical RadioButton</h5>
            <div class="p-field-radiobutton">
                <RadioButton id="city5" name="city1" value="Chicago" v-model="city1" />
                <label for="city5">Chicago</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton id="city6" name="city1" value="Los Angeles" v-model="city1" />
                <label for="city6">Los Angeles</label>
            </div>

            <h5>Horizontal RadioButton</h5>
            <div class="p-formgroup-inline">
                <div class="p-field-radiobutton">
                    <RadioButton id="city7" name="city2" value="Chicago" v-model="city2" />
                    <label for="city7">Chicago</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="city8" name="city2" value="Los Angeles" v-model="city2" />
                    <label for="city8">Los Angeles</label>
                </div>
            </div>
        </div>

        <div class="card">
            <h5>Help Text</h5>
            <div class="p-field p-fluid">
                <label for="username">Username</label>
                <InputText id="username" type="username" aria-describedby="username-help" />
                <small id="username-help">Enter your username to reset your password.</small>
            </div>
        </div>

        <div class="card">
            <h5>Advanced</h5>
            <div class="p-fluid p-formgrid p-grid">
                <div class="p-field p-col-12 p-md-6">
                    <label for="firstname6">Firstname</label>
                    <InputText id="firstname6" type="text" />
                </div>
                <div class="p-field p-col-12 p-md-6">
                    <label for="lastname6">Lastname</label>
                    <InputText id="lastname6" type="text" />
                </div>
                <div class="p-field p-col-12">
                    <label for="address">Address</label>
                    <Textarea id="address" rows="4" />
                </div>
                <div class="p-field p-col-12 p-md-6">
                    <label for="city">City</label>
                    <InputText id="city" type="text" />
                </div>
                <div class="p-field p-col-12 p-md-3">
                    <label for="state">State</label>
                    <Dropdown inputId="state" v-model="selectedState" :options="states" optionLabel="name" placeholder="Select" />
                </div>
                <div class="p-field p-col-12 p-md-3">
                    <label for="zip">Zip</label>
                    <InputText id="zip" type="text" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
<\\/script>

<style lang="scss" scoped>
@media screen and (max-width: 489px) {
    .p-formgroup-inline {
        .p-field {
            margin-bottom: 1em !important;
        }
    }
}

.layout-content .content-section.implementation > h3 {
    font-weight: 600;
}

textarea {
    resize: none;
}
</style>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <h5>Vertical</h5>
            <div class="p-fluid">
                <div class="p-field">
                    <label for="firstname1">Firstname</label>
                    <InputText id="firstname1" type="text" />
                </div>
                <div class="p-field">
                    <label for="lastname1">Lastname</label>
                    <InputText id="lastname1" type="text" />
                </div>
            </div>
        </div>

        <div class="card">
            <h5>Vertical and Grid</h5>
            <div class="p-fluid p-formgrid p-grid">
                <div class="p-field p-col">
                    <label for="firstname2">Firstname</label>
                    <InputText id="firstname2" type="text" />
                </div>
                <div class="p-field p-col">
                    <label for="lastname2">Lastname</label>
                    <InputText id="lastname2" type="text" />
                </div>
            </div>
        </div>

        <div class="card">
            <h5>Horizontal and Fixed Width</h5>
            <div class="p-field p-grid">
                <label for="firstname3" class="p-col-fixed" style="width:100px">Firstname</label>
                <div class="p-col">
                    <InputText id="firstname3" type="text" />
                </div>
            </div>
            <div class="p-field p-grid">
                <label for="lastname3" class="p-col-fixed" style="width:100px">Lastname</label>
                <div class="p-col">
                    <InputText id="lastname3" type="text" />
                </div>
            </div>
        </div>

        <div class="card">
            <h5>Horizontal and Fluid</h5>
            <div class="p-fluid">
                <div class="p-field p-grid">
                    <label for="firstname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Firstname</label>
                    <div class="p-col-12 p-md-10">
                        <InputText id="firstname4" type="text" />
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="lastname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Lastname</label>
                    <div class="p-col-12 p-md-10">
                        <InputText id="lastname4" type="text" />
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <h5>Inline</h5>
            <div class="p-formgroup-inline">
                <div class="p-field">
                    <label for="firstname5" class="p-sr-only">Firstname</label>
                    <InputText id="firstname5" type="text" placeholder="Firstname" />
                </div>
                <div class="p-field">
                    <label for="lastname5" class="p-sr-only">Lastname</label>
                    <InputText id="lastname5" type="text" placeholder="Lastname" />
                </div>
                <Button type="button" label="Submit" />
            </div>
        </div>

        <div class="card">
            <h5>Vertical Checkbox</h5>
            <div class="p-field-checkbox">
                <Checkbox id="city1" name="city1" value="Chicago" v-model="cities1" />
                <label for="city1">Chicago</label>
            </div>
            <div class="p-field-checkbox">
                <Checkbox id="city2" name="city1" value="Los Angeles" v-model="cities1" />
                <label for="city2">Los Angeles</label>
            </div>

            <h5>Horizontal Checkbox</h5>
            <div class="p-formgroup-inline">
                <div class="p-field-checkbox">
                    <Checkbox id="city3" name="city2" value="Chicago" v-model="cities2" />
                    <label for="city3">Chicago</label>
                </div>
                <div class="p-field-checkbox">
                    <Checkbox id="city4" name="city2" value="Los Angeles" v-model="cities2" />
                    <label for="city4">Los Angeles</label>
                </div>
            </div>
        </div>

        <div class="card">
            <h5>Vertical RadioButton</h5>
            <div class="p-field-radiobutton">
                <RadioButton id="city5" name="city1" value="Chicago" v-model="city1" />
                <label for="city5">Chicago</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton id="city6" name="city1" value="Los Angeles" v-model="city1" />
                <label for="city6">Los Angeles</label>
            </div>

            <h5>Horizontal RadioButton</h5>
            <div class="p-formgroup-inline">
                <div class="p-field-radiobutton">
                    <RadioButton id="city7" name="city2" value="Chicago" v-model="city2" />
                    <label for="city7">Chicago</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="city8" name="city2" value="Los Angeles" v-model="city2" />
                    <label for="city8">Los Angeles</label>
                </div>
            </div>
        </div>

        <div class="card">
            <h5>Help Text</h5>
            <div class="p-field p-fluid">
                <label for="username">Username</label>
                <InputText id="username" type="username" aria-describedby="username-help" />
                <small id="username-help">Enter your username to reset your password.</small>
            </div>
        </div>

        <div class="card">
            <h5>Advanced</h5>
            <div class="p-fluid p-formgrid p-grid">
                <div class="p-field p-col-12 p-md-6">
                    <label for="firstname6">Firstname</label>
                    <InputText id="firstname6" type="text" />
                </div>
                <div class="p-field p-col-12 p-md-6">
                    <label for="lastname6">Lastname</label>
                    <InputText id="lastname6" type="text" />
                </div>
                <div class="p-field p-col-12">
                    <label for="address">Address</label>
                    <Textarea id="address" rows="4" />
                </div>
                <div class="p-field p-col-12 p-md-6">
                    <label for="city">City</label>
                    <InputText id="city" type="text" />
                </div>
                <div class="p-field p-col-12 p-md-3">
                    <label for="state">State</label>
                    <Dropdown inputId="state" v-model="selectedState" :options="states" optionLabel="name" placeholder="Select" />
                </div>
                <div class="p-field p-col-12 p-md-3">
                    <label for="zip">Zip</label>
                    <InputText id="zip" type="text" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const selectedState = ref(null);
        const states = ref([
            {name: 'Arizona', code: 'Arizona'},
            {name: 'California', value: 'California'},
            {name: 'Florida', code: 'Florida'},
            {name: 'Ohio', code: 'Ohio'},
            {name: 'Washington', code: 'Washington'}
        ]);
        const cities1 = ref([]);
        const cities2 = ref([]);
        const city1 = ref(null);
        const city2 = ref(null);

        return { selectedState, states, cities1, cities2, city1, city2 }
    }
}
<\\/script>

<style lang="scss" scoped>
@media screen and (max-width: 489px) {
    .p-formgroup-inline {
        .p-field {
            margin-bottom: 1em !important;
        }
    }
}

.layout-content .content-section.implementation > h3 {
    font-weight: 600;
}

textarea {
    resize: none;
}
</style>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/checkbox/checkbox.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/radiobutton/radiobutton.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/textarea/textarea.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/dropdown/dropdown.min.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <h5>Vertical</h5>
                <div class="p-fluid">
                    <div class="p-field">
                        <label for="firstname1">Firstname</label>
                        <p-inputtext id="firstname1" type="text"></p-inputtext>
                    </div>
                    <div class="p-field">
                        <label for="lastname1">Lastname</label>
                        <p-inputtext id="lastname1" type="text"></p-inputtext>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Vertical and Grid</h5>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="firstname2">Firstname</label>
                        <p-inputtext id="firstname2" type="text"></p-inputtext>
                    </div>
                    <div class="p-field p-col">
                        <label for="lastname2">Lastname</label>
                        <p-inputtext id="lastname2" type="text"></p-inputtext>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Horizontal and Fixed Width</h5>
                <div class="p-field p-grid">
                    <label for="firstname3" class="p-col-fixed" style="width:100px">Firstname</label>
                    <div class="p-col">
                        <p-inputtext id="firstname3" type="text"></p-inputtext>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="lastname3" class="p-col-fixed" style="width:100px">Lastname</label>
                    <div class="p-col">
                        <p-inputtext id="lastname3" type="text"></p-inputtext>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Horizontal and Fluid</h5>
                <div class="p-fluid">
                    <div class="p-field p-grid">
                        <label for="firstname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Firstname</label>
                        <div class="p-col-12 p-md-10">
                            <p-inputtext id="firstname4" type="text"></p-inputtext>
                        </div>
                    </div>
                    <div class="p-field p-grid">
                        <label for="lastname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Lastname</label>
                        <div class="p-col-12 p-md-10">
                            <p-inputtext id="lastname4" type="text"></p-inputtext>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Inline</h5>
                <div class="p-formgroup-inline">
                    <div class="p-field">
                        <label for="firstname5" class="p-sr-only">Firstname</label>
                        <p-inputtext id="firstname5" type="text" placeholder="Firstname"></p-inputtext>
                    </div>
                    <div class="p-field">
                        <label for="lastname5" class="p-sr-only">Lastname</label>
                        <p-inputtext id="lastname5" type="text" placeholder="Lastname"></p-inputtext>
                    </div>
                    <p-button type="button" label="Submit"></p-button>
                </div>
            </div>

            <div class="card">
                <h5>Vertical Checkbox</h5>
                <div class="p-field-checkbox">
                    <p-checkbox id="city1" name="city1" value="Chicago" v-model="cities1"></p-checkbox>
                    <label for="city1">Chicago</label>
                </div>
                <div class="p-field-checkbox">
                    <p-checkbox id="city2" name="city1" value="Los Angeles" v-model="cities1"></p-checkbox>
                    <label for="city2">Los Angeles</label>
                </div>

                <h5>Horizontal Checkbox</h5>
                <div class="p-formgroup-inline">
                    <div class="p-field-checkbox">
                        <p-checkbox id="city3" name="city2" value="Chicago" v-model="cities2"></p-checkbox>
                        <label for="city3">Chicago</label>
                    </div>
                    <div class="p-field-checkbox">
                        <p-checkbox id="city4" name="city2" value="Los Angeles" v-model="cities2"></p-checkbox>
                        <label for="city4">Los Angeles</label>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Vertical RadioButton</h5>
                <div class="p-field-radiobutton">
                    <p-radiobutton id="city5" name="city1" value="Chicago" v-model="city1"></p-radiobutton>
                    <label for="city5">Chicago</label>
                </div>
                <div class="p-field-radiobutton">
                    <p-radiobutton id="city6" name="city1" value="Los Angeles" v-model="city1"></p-radiobutton>
                    <label for="city6">Los Angeles</label>
                </div>

                <h5>Horizontal RadioButton</h5>
                <div class="p-formgroup-inline">
                    <div class="p-field-radiobutton">
                        <p-radiobutton id="city7" name="city2" value="Chicago" v-model="city2"></p-radiobutton>
                        <label for="city7">Chicago</label>
                    </div>
                    <div class="p-field-radiobutton">
                        <p-radiobutton id="city8" name="city2" value="Los Angeles" v-model="city2"></p-radiobutton>
                        <label for="city8">Los Angeles</label>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Help Text</h5>
                <div class="p-field p-fluid">
                    <label for="username">Username</label>
                    <p-inputtext id="username" type="username" aria-describedby="username-help"></p-inputtext>
                    <small id="username-help">Enter your username to reset your password.</small>
                </div>
            </div>

            <div class="card">
                <h5>Advanced</h5>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="firstname6">Firstname</label>
                        <p-inputtext id="firstname6" type="text"></p-inputtext>
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname6">Lastname</label>
                        <p-inputtext id="lastname6" type="text"></p-inputtext>
                    </div>
                    <div class="p-field p-col-12">
                        <label for="address">Address</label>
                        <p-textarea id="address" rows="4"></p-textarea>
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="city">City</label>
                        <p-inputtext id="city" type="text"></p-inputtext>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="state">State</label>
                        <p-dropdown inputId="state" v-model="selectedState" :options="states" optionLabel="name" placeholder="Select"></p-dropdown>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="zip">Zip</label>
                        <p-inputtext id="zip" type="text"></p-inputtext>
                    </div>
                </div>
            </div>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const selectedState = ref(null);
                const states = ref([
                    {name: 'Arizona', code: 'Arizona'},
                    {name: 'California', value: 'California'},
                    {name: 'Florida', code: 'Florida'},
                    {name: 'Ohio', code: 'Ohio'},
                    {name: 'Washington', code: 'Washington'}
                ]);
                const cities1 = ref([]);
                const cities2 = ref([]);
                const city1 = ref(null);
                const city2 = ref(null);

                return { selectedState, states, cities1, cities2, city1, city2 }
            },
            components: {
                "p-inputtext": primevue.inputtext,
                "p-button": primevue.button,
                "p-checkbox": primevue.checkbox,
                "p-radiobutton": primevue.radiobutton,
                "p-textarea": primevue.textarea,
                "p-dropdown": primevue.dropdown
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        @media screen and (max-width: 489px) {
            .p-formgroup-inline .p-field {
                margin-bottom: 1em !important;
            }
        }

        .layout-content .content-section.implementation > h3 {
            font-weight: 600;
        }

        textarea {
            resize: none;
        }
        </style>
`
                }
            }
        }
    }
}
</script>