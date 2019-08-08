<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import InputMask from 'primevue/inputmask';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>A model can be bound using the standard v-model directive.</p>
<CodeHighlight>
&lt;InputMask v-model="value" mask="99-999999" /&gt;
</CodeHighlight>

				<h3>Mask</h3>
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

                <h3>SlotChar</h3>
                <p>Underscore is the default placeholder for a mask and this can be customized using <i>slotChart</i> option.</p>
<CodeHighlight>
&lt;InputMask v-model="value" mask="99/99/9999" slotChar="mm/dd/yyyy" /&gt;
</CodeHighlight>
                <h3>Optional Values</h3>
                <p>If the input does not complete the mask definition, it is cleared by default.
                    Use <i>autoClear</i> property to control this behavior. In addition, certain part of
                    a mask can be made optional by using ? symbol where anything after the question
                    mark becomes optional.</p>
<CodeHighlight>
&lt;InputMask v-model="value" mask="(999) 999-9999? x99999" /&gt;
</CodeHighlight>

				<h3>Properties</h3>
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

				<h3>Styling</h3>
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

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/inputtext" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;div class="p-grid p-fluid"&gt;
    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;h3&gt;Basic {{val1}}&lt;/h3&gt;
        &lt;InputMask mask="99-999999" v-model="val1" placeholder="99-999999" /&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;h3&gt;SSN {{val2}}&lt;/h3&gt;
        &lt;InputMask mask="999-99-9999" v-model="val2" placeholder="999-99-9999" /&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;h3&gt;Date {{val3}}&lt;/h3&gt;
        &lt;InputMask mask="99/99/9999" v-model="val3" placeholder="99/99/9999" slotChar="mm/dd/yyyy" /&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;h3&gt;Phone {{val4}}&lt;/h3&gt;
        &lt;InputMask mask="(999) 999-9999" v-model="val4" placeholder="(999) 999-9999" /&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;h3&gt;Phone Ext {{val5}}&lt;/h3&gt;
        &lt;InputMask mask="(999) 999-9999? x99999" v-model="val5" placeholder="(999) 999-9999? x99999"/&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;h3&gt;Serial Number {{val6}}&lt;/h3&gt;
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