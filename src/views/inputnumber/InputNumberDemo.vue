<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>InputNumber</h1>
                <p>InputNumber is an input component to provide numerical input.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">

                <h5>Numerals</h5>
                <div class="p-fluid grid formgrid">
                    <div class="field col-12 md:col-3">
                        <label for="integeronly">Integer Only</label>
                        <InputNumber inputId="integeronly" v-model="value1" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="withoutgrouping">Without Grouping</label>
                        <InputNumber inputId="withoutgrouping" v-model="value2" mode="decimal" :useGrouping="false" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="minmaxfraction">Min-Max Fraction Digits</label>
                        <InputNumber inputId="minmaxfraction" v-model="value3" mode="decimal" :minFractionDigits="2" :maxFractionDigits="5" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="minmax">Min-Max Boundaries</label>
                        <InputNumber inputId="minmax" v-model="value4" mode="decimal" :min="0" :max="100" />
                    </div>

                    <div class="field col-12 md:col-3">
                        <label for="locale-user">User Locale</label>
                        <InputNumber inputId="locale-user" v-model="value5" mode="decimal" :minFractionDigits="2" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="locale-us">United States Locale</label>
                        <InputNumber inputId="locale-us" v-model="value6" mode="decimal" locale="en-US" :minFractionDigits="2" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="locale-german">German Locale</label>
                        <InputNumber inputId="locale-german" v-model="value7" mode="decimal" locale="de-DE" :minFractionDigits="2"/>
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="locale-indian">Indian Locale</label>
                        <InputNumber inputId="locale-indian" v-model="value8" mode="decimal" locale="en-IN" :minFractionDigits="2" />
                    </div>
                </div>

                <h5>Currency</h5>
                <div class="grid p-fluid">
                    <div class="field col-12 md:col-3">
                        <label for="currency-us">United States</label>
                        <InputNumber inputId="currency-us" v-model="value9" mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="currency-germany">Germany</label>
                        <InputNumber inputId="currency-germany" v-model="value10" mode="currency" currency="EUR" locale="de-DE" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="currency-india">India</label>
                        <InputNumber inputId="currency-india" v-model="value11" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="currency-japan">Japan</label>
                        <InputNumber inputId="currency-japan" v-model="value12" mode="currency" currency="JPY" locale="jp-JP" />
                    </div>
                </div>

                <h5>Prefix and Suffix</h5>
                <div class="grid p-fluid">
                    <div class="field col-12 md:col-3">
                        <label for="mile">Mile</label>
                        <InputNumber inputId="mile" v-model="value13" suffix=" mi" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="percent">Percent</label>
                        <InputNumber inputId="percent" v-model="value14" prefix="%" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="expiry">Expiry</label>
                        <InputNumber inputId="expiry" v-model="value15" prefix="Expires in " suffix=" days" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="temperature">Temperature</label>
                        <InputNumber inputId="temperature" v-model="value16" prefix="↑ " suffix="℃" :min="0" :max="40" />
                    </div>
                </div>

                <h5>Buttons</h5>
                <div class="grid p-fluid">
                    <div class="field col-12 md:col-3">
                        <label for="stacked">Stacked</label>
                        <InputNumber inputId="stacked" v-model="value17" showButtons mode="currency" currency="USD" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="horizontal">Horizontal with Step</label>
                        <InputNumber inputId="horizontal" v-model="value18" showButtons buttonLayout="horizontal" :step="0.25"
                            decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="minmax-buttons">Min-Max Boundaries</label>
                        <InputNumber inputId="minmax-buttons" v-model="value20" mode="decimal" showButtons :min="0" :max="100" />
                    </div>
                </div>

                <div class="field col-12 md:col-3">
                    <label for="vertical" style="display: block">Vertical</label>
                    <InputNumber inputId="vertical" v-model="value19" mode="decimal" showButtons buttonLayout="vertical" style="width:4rem"
                        decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                </div>
            </div>
        </div>

        <InputNumberDoc />
    </div>
</template>

<script>
import InputNumberDoc from './InputNumberDoc';

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
    },
	components: {
		'InputNumberDoc': InputNumberDoc
	}
}
</script>