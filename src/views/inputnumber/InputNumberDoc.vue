<template>
	<AppDoc name="InputNumberDemo" :sources="sources" github="inputnumber/InputNumberDemo.vue">
        <h5>Import</h5>
<pre v-code.script><code>
import InputNumber from 'primevue/inputnumber';

</code></pre>

<h5>Getting Started</h5>
        <p>InputNumber is used with the standard v-model directive. Component always provides a number type although formatting on the input is a string.</p>

<pre v-code><code>
&lt;InputNumber v-model="value" /&gt;

</code></pre>

        <h5>Decimal Mode</h5>
        <p>Format is defined using the <i>mode</i> property, "decimal" is the default value allowing only integers when there is no other configuration.</p>
<pre v-code><code>
&lt;InputNumber v-model="value" mode="decimal" /&gt;

</code></pre>

        <p>Fractions are configured with the <i>minFractionDigits</i> property. Optionally <i>maxFractionDigits</i> can be used to defined a boundary for the maximum digits.</p>
<pre v-code><code>
&lt;InputNumber v-model="value1" mode="decimal" :minFractionDigits="2" /&gt;
&lt;InputNumber v-model="value2" mode="decimal" :minFractionDigits="2" :maxFractionDigits="2" /&gt;

</code></pre>

        <p><i>locale</i> option is available to set the localization information such as grouping and decimal symbols where default value is the browser locale. Locales are defined per <a href="https://tools.ietf.org/html/rfc5646">BCP Language Tag</a>.</p>
<pre v-code><code>
User Locale
&lt;InputNumber v-model="value1" mode="decimal" :minFractionDigits="2" /&gt;

United State Locale
&lt;InputNumber v-model="value2" mode="decimal" locale="en-US" :minFractionDigits="2" /&gt;

German Locale
&lt;InputNumber v-model="value3" mode="decimal" locale="de-DE" :minFractionDigits="2" /&gt;

Indian Locale
&lt;InputNumber v-model="value4" mode="decimal" locale="en-IN" :minFractionDigits="2" /&gt;

</code></pre>

        <h5>Currency</h5>
        <p>Currency formatting is specified by setting the <i>mode</i> option to currency and <i>currency</i> property. In addition <i>currencyDisplay</i> option
        allows how the currency is displayed, valid values are "symbol" (default) or "code".</p>
<pre v-code><code>
United States
&lt;InputNumber v-model="value1" mode="currency" currency="USD" locale="en-US" /&gt;

Germany
&lt;InputNumber v-model="value2" mode="currency" currency="EUR" locale="de-DE" /&gt;

India
&lt;InputNumber v-model="value3" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" /&gt;

Japan
&lt;InputNumber v-model="value4" mode="currency" currency="JPY" locale="jp-JP" /&gt;

</code></pre>

        <h5>Prefix and Suffix</h5>
        <p>Custom texts e.g. units can be placed before or after the input section with the <i>prefix</i> and <i>suffix</i> properties.</p>
<pre v-code><code>
Mile
&lt;InputNumber v-model="value1" suffix=" mi" /&gt;

Percent
&lt;InputNumber v-model="value2" prefix="%" /&gt;

Expiry
&lt;InputNumber v-model="value3" prefix="Expires in " suffix=" days" /&gt;

Temperature
&lt;InputNumber v-model="value4" prefix="&uarr; " suffix="℃" :min="0" :max="40" /&gt;

</code></pre>

        <h5>Buttons</h5>
        <p>Spinner buttons is enabled using the <i>showButtons</i> options and layout is defined with the <i>buttonLayout</i>. Default value is "stacked" whereas
        "horizontal" and "stacked" are alternatives. Note that even there are no buttons, up and down arrow keys can be used to spin the values with keyboard.</p>
<pre v-code><code>
Stacked
&lt;InputNumber v-model="value1" showButtons mode="currency" currency="USD" /&gt;

Horizontal
&lt;InputNumber v-model="value2" showButtons buttonLayout="horizontal"
    decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR" /&gt;

Vertical
&lt;InputNumber v-model="value3" mode="decimal" showButtons buttonLayout="vertical"
    decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" /&gt;

</code></pre>

        <h5>Step</h5>
        <p>Step factor is 1 by default and can be customized with <i>step</i> option.</p>
<pre v-code><code>
&lt;InputNumber v-model="value" :step="0.25" /&gt;

</code></pre>


        <h5>Min and Max Boundaries</h5>
        <p>Value to be entered can be restricted by configuring the <i>min</i> and <i>max</i> options.</p>
<pre v-code><code>
&lt;InputNumber v-model="value" :min="0" :max="100" /&gt;

</code></pre>


		<h5>Properties</h5>
		<p>InputNumber passes any valid attribute to the underlying input element.</p>
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
                        <td>number</td>
                        <td>null</td>
                        <td>Value of the component.</td>
                    </tr>
                    <tr>
                        <td>format</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to format the value.</td>
                    </tr>
                    <tr>
                        <td>showButtons</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Displays spinner buttons.</td>
                    </tr>
                    <tr>
                        <td>buttonLayout</td>
                        <td>string</td>
                        <td>stacked</td>
                        <td>Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".</td>
                    </tr>
                    <tr>
                        <td>incrementButtonClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the increment button.</td>
                    </tr>
                    <tr>
                        <td>decrementButtonClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the decrement button.</td>
                    </tr>
                    <tr>
                        <td>incrementButtonIcon</td>
                        <td>string</td>
                        <td>pi pi-angle-up</td>
                        <td>Style class of the increment button.</td>
                    </tr>
                    <tr>
                        <td>decrementButtonIcon</td>
                        <td>string</td>
                        <td>pi pi-angle-down</td>
                        <td>Style class of the decrement button.</td>
                    </tr>
                    <tr>
                        <td>locale</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Locale to be used in formatting.</td>
                    </tr>
                    <tr>
                        <td>localeMatcher</td>
                        <td>string</td>
                        <td>best fit</td>
                        <td>The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit".
                            See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation">Locale Negotation</a> for details.
                        </td>
                    </tr>
                    <tr>
                        <td>mode</td>
                        <td>string</td>
                        <td>decimal</td>
                        <td>Defines the behavior of the component, valid values are "decimal" and "currency".</td>
                    </tr>
                    <tr>
                        <td>prefix</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Text to display before the value.</td>
                    </tr>
                    <tr>
                        <td>suffix</td>
                        <td>string</td>
                        <td>decimal</td>
                        <td>Text to display after the value.</td>
                    </tr>
                    <tr>
                        <td>currency</td>
                        <td>string</td>
                        <td>null</td>
                        <td>The currency to use in currency formatting. Possible values are the <a href="https://www.currency-iso.org/en/home/tables/table-a1.html">ISO 4217 currency codes</a>,
                            such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB.
                            There is no default value; if the style is "currency", the currency property must be provided.</td>
                    </tr>
                    <tr>
                        <td>currencyDisplay</td>
                        <td>string</td>
                        <td>symbol</td>
                        <td>How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €,
                            "code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".</td>
                    </tr>
                    <tr>
                        <td>useGrouping</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.</td>
                    </tr>
                    <tr>
                        <td>minFractionDigits</td>
                        <td>number</td>
                        <td>null</td>
                        <td>The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of
                            minor unit digits provided by the <a href="https://www.currency-iso.org/en/home/tables/table-a1.html">ISO 4217 currency code list</a> (2 if the list doesn't provide that information).</td>
                    </tr>
                    <tr>
                        <td>maxFractionDigits</td>
                        <td>number</td>
                        <td>null</td>
                        <td>The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain
                            number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting
                            is the larger of minimumFractionDigits and the number of minor unit digits provided by the <a href="https://www.currency-iso.org/en/home/tables/table-a1.html">ISO 4217 currency code list</a>
                            (2 if the list doesn't provide that information).</td>
                    </tr>
                    <tr>
                        <td>min</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Mininum boundary value.</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Maximum boundary value.</td>
                    </tr>
                    <tr>
                        <td>step</td>
                        <td>number</td>
                        <td>1</td>
                        <td>Step factor to increment/decrement the value.</td>
                    </tr>
                    <tr>
                        <td>inputStyle</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Inline style of the input field.</td>
                    </tr>
                    <tr>
                        <td>inputClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the input field.</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Style class of the component input field.</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Inline style of the component.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Events</h5>
        <p>Any valid event such as focus and blur are passed to the underlying input element. Following are the additional events to configure the component.</p>
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
                        <td>input</td>
                        <td>event.originalEvent: Browser event <br />
                            event.value: New value</td>
                        <td>Callback to invoke when the value is entered.</td>
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
                        <td>p-inputnumber</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-inputnumber-stacked</td>
                        <td>Container element with stacked buttons.</td>
                    </tr>
                    <tr>
                        <td>p-inputnumber-horizontal</td>
                        <td>Container element with horizontal buttons.</td>
                    </tr>
                    <tr>
                        <td>p-inputnumber-vertical</td>
                        <td>Container element with vertical buttons.</td>
                    </tr>
                    <tr>
                        <td>p-inputnumber-input</td>
                        <td>Input element</td>
                    </tr>
                    <tr>
                        <td>p-inputnumber-button</td>
                        <td>Input element</td>
                    </tr>
                    <tr>
                        <td>p-inputnumber-button-up</td>
                        <td>Increment button</td>
                    </tr>
                    <tr>
                        <td>p-inputnumber-button-down</td>
                        <td>Decrement button</td>
                    </tr>
                    <tr>
                        <td>p-inputnumber-button-icon</td>
                        <td>Button icon</td>
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
                    tabName : 'Options API Source',
                    content: `
<template>
    <div>
        <h5>Numerals</h5>
        <div class="p-fluid p-grid p-formgrid">
            <div class="p-field p-col-12 p-md-3">
                <label for="integeronly">Integer Only</label>
                <InputNumber id="integeronly" v-model="value1" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="withoutgrouping">Without Grouping</label>
                <InputNumber id="withoutgrouping" v-model="value2" mode="decimal" :useGrouping="false" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="minmaxfraction">Min-Max Fraction Digits</label>
                <InputNumber id="minmaxfraction" v-model="value3" mode="decimal" :minFractionDigits="2" :maxFractionDigits="5" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="minmax">Min-Max Boundaries</label>
                <InputNumber id="minmax" v-model="value4" mode="decimal" :min="0" :max="100" />
            </div>

            <div class="p-field p-col-12 p-md-3">
                <label for="locale-user">User Locale</label>
                <InputNumber id="locale-user" v-model="value5" mode="decimal" :minFractionDigits="2" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="locale-us">United States Locale</label>
                <InputNumber id="locale-us" v-model="value6" mode="decimal" locale="en-US" :minFractionDigits="2" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="locale-german">German Locale</label>
                <InputNumber id="locale-german" v-model="value7" mode="decimal" locale="de-DE" :minFractionDigits="2"/>
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="locale-indian">Indian Locale</label>
                <InputNumber id="locale-indian" v-model="value8" mode="decimal" locale="en-IN" :minFractionDigits="2" />
            </div>
        </div>

        <h5>Currency</h5>
        <div class="p-grid p-fluid">
            <div class="p-field p-col-12 p-md-3">
                <label for="currency-us">United States</label>
                <InputNumber id="currency-us" v-model="value9" mode="currency" currency="USD" locale="en-US" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="currency-germany">Germany</label>
                <InputNumber id="currency-germany" v-model="value10" mode="currency" currency="EUR" locale="de-DE" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="currency-india">India</label>
                <InputNumber id="currency-india" v-model="value11" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="currency-japan">Japan</label>
                <InputNumber id="currency-japan" v-model="value12" mode="currency" currency="JPY" locale="jp-JP" />
            </div>
        </div>

        <h5>Prefix and Suffix</h5>
        <div class="p-grid p-fluid">
            <div class="p-field p-col-12 p-md-3">
                <label for="mile">Mile</label>
                <InputNumber id="mile" v-model="value13" suffix=" mi" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="percent">Percent</label>
                <InputNumber id="percent" v-model="value14" prefix="%" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="expiry">Expiry</label>
                <InputNumber id="expiry" v-model="value15" prefix="Expires in " suffix=" days" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="temperature">Temperature</label>
                <InputNumber id="temperature" v-model="value16" prefix="↑ " suffix="℃" :min="0" :max="40" />
            </div>
        </div>

        <h5>Buttons</h5>
        <div class="p-grid p-fluid">
            <div class="p-field p-col-12 p-md-3">
                <label for="stacked">Stacked</label>
                <InputNumber id="stacked" v-model="value17" showButtons mode="currency" currency="USD" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="horizontal">Horizontal with Step</label>
                <InputNumber id="horizontal" v-model="value18" showButtons buttonLayout="horizontal" :step="0.25"
                    decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="minmax-buttons">Min-Max Boundaries</label>
                <InputNumber id="minmax-buttons" v-model="value20" mode="decimal" showButtons :min="0" :max="100" />
            </div>
        </div>

        <div class="p-field p-col-12 p-md-3">
            <label for="vertical" style="display: block">Vertical</label>
            <InputNumber id="vertical" v-model="value19" mode="decimal" showButtons buttonLayout="vertical" style="width:4rem"
                decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 42723,
            value2: 58151,
            value3: 2351.35,
            value4: 50,
            value5: 151351,
            value6: 115744,
            value7: 635524,
            value8: 732762,
            value9: 1500,
            value10: 2500,
            value11: 4250,
            value12: 5002,
            value13: 20,
            value14: 50,
            value15: 10,
            value16: 20,
            value17: 20,
            value18: 10.50,
            value19: 25,
            value20: 50
        }
    }
}
<\\/script>
`               
                },
                'composition-api': {
                    tabName : 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Numerals</h5>
        <div class="p-fluid p-grid p-formgrid">
            <div class="p-field p-col-12 p-md-3">
                <label for="integeronly">Integer Only</label>
                <InputNumber id="integeronly" v-model="value1" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="withoutgrouping">Without Grouping</label>
                <InputNumber id="withoutgrouping" v-model="value2" mode="decimal" :useGrouping="false" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="minmaxfraction">Min-Max Fraction Digits</label>
                <InputNumber id="minmaxfraction" v-model="value3" mode="decimal" :minFractionDigits="2" :maxFractionDigits="5" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="minmax">Min-Max Boundaries</label>
                <InputNumber id="minmax" v-model="value4" mode="decimal" :min="0" :max="100" />
            </div>

            <div class="p-field p-col-12 p-md-3">
                <label for="locale-user">User Locale</label>
                <InputNumber id="locale-user" v-model="value5" mode="decimal" :minFractionDigits="2" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="locale-us">United States Locale</label>
                <InputNumber id="locale-us" v-model="value6" mode="decimal" locale="en-US" :minFractionDigits="2" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="locale-german">German Locale</label>
                <InputNumber id="locale-german" v-model="value7" mode="decimal" locale="de-DE" :minFractionDigits="2"/>
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="locale-indian">Indian Locale</label>
                <InputNumber id="locale-indian" v-model="value8" mode="decimal" locale="en-IN" :minFractionDigits="2" />
            </div>
        </div>

        <h5>Currency</h5>
        <div class="p-grid p-fluid">
            <div class="p-field p-col-12 p-md-3">
                <label for="currency-us">United States</label>
                <InputNumber id="currency-us" v-model="value9" mode="currency" currency="USD" locale="en-US" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="currency-germany">Germany</label>
                <InputNumber id="currency-germany" v-model="value10" mode="currency" currency="EUR" locale="de-DE" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="currency-india">India</label>
                <InputNumber id="currency-india" v-model="value11" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="currency-japan">Japan</label>
                <InputNumber id="currency-japan" v-model="value12" mode="currency" currency="JPY" locale="jp-JP" />
            </div>
        </div>

        <h5>Prefix and Suffix</h5>
        <div class="p-grid p-fluid">
            <div class="p-field p-col-12 p-md-3">
                <label for="mile">Mile</label>
                <InputNumber id="mile" v-model="value13" suffix=" mi" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="percent">Percent</label>
                <InputNumber id="percent" v-model="value14" prefix="%" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="expiry">Expiry</label>
                <InputNumber id="expiry" v-model="value15" prefix="Expires in " suffix=" days" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="temperature">Temperature</label>
                <InputNumber id="temperature" v-model="value16" prefix="↑ " suffix="℃" :min="0" :max="40" />
            </div>
        </div>

        <h5>Buttons</h5>
        <div class="p-grid p-fluid">
            <div class="p-field p-col-12 p-md-3">
                <label for="stacked">Stacked</label>
                <InputNumber id="stacked" v-model="value17" showButtons mode="currency" currency="USD" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="horizontal">Horizontal with Step</label>
                <InputNumber id="horizontal" v-model="value18" showButtons buttonLayout="horizontal" :step="0.25"
                    decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="minmax-buttons">Min-Max Boundaries</label>
                <InputNumber id="minmax-buttons" v-model="value20" mode="decimal" showButtons :min="0" :max="100" />
            </div>
        </div>

        <div class="p-field p-col-12 p-md-3">
            <label for="vertical" style="display: block">Vertical</label>
            <InputNumber id="vertical" v-model="value19" mode="decimal" showButtons buttonLayout="vertical" style="width:4rem"
                decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const value1 = ref(42723);
        const value2 = ref(58151);
        const value3 = ref(2351.35);
        const value4 = ref(50);
        const value5 = ref(151351);
        const value6 = ref(115744);
        const value7 = ref(635524);
        const value8 = ref(732762);
        const value9 = ref(1500);
        const value10 = ref(2500);
        const value11 = ref(4250);
        const value12 = ref(5002);
        const value13 = ref(20);
        const value14 = ref(50);
        const value15 = ref(10);
        const value16 = ref(20);
        const value17 = ref(20);
        const value18 = ref(10.50);
        const value19 = ref(25);
        const value20 = ref(50);

        return { value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, 
            value11, value12, value13, value14, value15, value16, value17, value18, value19, value20 }
    }
}
<\\/script>
`               
                }
            }
        }
    }
}
</script>
