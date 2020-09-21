<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import InputMask from 'primevue/inputmask';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>A model can be bound using the standard v-model directive.</p>
<CodeHighlight>
&lt;InputMask v-model="value" mask="99-999999" /&gt;
</CodeHighlight>

				<h5>Mask</h5>
                <p>Mask format can be a combination of the the following built-in definitions.</p>

                <ul>
                    <li>
                        a - Alpha character (A-Z,a-z)
                    </li>
                    <li>
                        9 - Numeric character (0-9)
                    </li>
                    <li>
                        * - Alpha numberic character (A-Z,a-z,0-9)
                    </li>
                </ul>
<CodeHighlight>
&lt;InputMask v-model="value" mask="a*-999-a999" /&gt;
</CodeHighlight>

                <h5>SlotChar</h5>
                <p>Underscore is the default placeholder for a mask and this can be customized using <i>slotChart</i> option.</p>
<CodeHighlight>
&lt;InputMask v-model="value" mask="99/99/9999" slotChar="mm/dd/yyyy" /&gt;
</CodeHighlight>
                <h5>Optional Values</h5>
                <p>If the input does not complete the mask definition, it is cleared by default.
                    Use <i>autoClear</i> property to control this behavior. In addition, certain part of
                    a mask can be made optional by using ? symbol where anything after the question
                    mark becomes optional.</p>
<CodeHighlight>
&lt;InputMask v-model="value" mask="(999) 999-9999? x99999" /&gt;
</CodeHighlight>

				<h5>Properties</h5>
				<p>InputText passes any valid attribute to the underlying input element. In addition;</p>
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
                                <td>mask</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Mask pattern.</td>
                            </tr>
                            <tr>
                                <td>slotChar</td>
                                <td>string</td>
                                <td>-</td>
                                <td>Placeholder character in mask, default is underscore.</td>
                            </tr>
                            <tr>
                                <td>autoClear</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Clears the incomplete value on blur.</td>
                            </tr>
                            <tr>
                                <td>unmask</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if model sets the raw unmasked value to bound value or the formatted mask value.</td>
                            </tr>
						</tbody>
					</table>
				</div>

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
                                <td>p-inputmask p-inputtext</td>
                                <td>Input element</td>
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
&lt;div class="p-fluid p-formgrid p-grid"&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;label for="basic"&gt;Basic&lt;/label&gt;
        &lt;InputMask mask="99-999999" v-model="val1" placeholder="99-999999" /&gt;
    &lt;/div&gt;

    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;label for="ssn"&gt;SSN&lt;/label&gt;
        &lt;InputMask mask="999-99-9999" v-model="val2" placeholder="999-99-9999" /&gt;
    &lt;/div&gt;

    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;label for="date"&gt;Date&lt;/label&gt;
        &lt;InputMask mask="99/99/9999" v-model="val3" placeholder="99/99/9999" slotChar="mm/dd/yyyy" /&gt;
    &lt;/div&gt;

    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;label for="Phone"&gt;Phone&lt;/label&gt;
        &lt;InputMask mask="(999) 999-9999" v-model="val4" placeholder="(999) 999-9999" /&gt;
    &lt;/div&gt;

    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;label for="phoneext"&gt;Phone Ext&lt;/label&gt;
        &lt;InputMask mask="(999) 999-9999? x99999" v-model="val5" placeholder="(999) 999-9999? x99999"/&gt;
    &lt;/div&gt;

    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;label for="serial"&gt;Serial&lt;/label&gt;
        &lt;InputMask mask="a*-999-a999" v-model="val6" placeholder="a*-999-a999" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            val1: null,
            val2: null,
            val3: null,
            val4: null,
            val5: null,
            val6: null
        }
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>