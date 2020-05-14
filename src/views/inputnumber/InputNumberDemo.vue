<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>InputNumber</h1>
                <p>InputNumber is an input component to provide numerical input.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3>Numerals</h3>
            <div class="p-grid p-fluid">
                <div class="p-col-12 p-md-3">
                    Integer Only
                    <InputNumber v-model="value1" />
                </div>
                <div class="p-col-12 p-md-3">
                    Without Grouping
                    <InputNumber v-model="value2" mode="decimal" :useGrouping="false" />
                </div>
                <div class="p-col-12 p-md-3">
                    Min-Max Fraction Digits
                    <InputNumber v-model="value3" mode="decimal" :minFractionDigits="2" :maxFractionDigits="5" />
                </div>
                <div class="p-col-12 p-md-3">
                    Min-Max Boundaries
                    <InputNumber v-model="value4" mode="decimal" :min="0" :max="100" />
                </div>

                <div class="p-col-12 p-md-3">
                    User Locale
                    <InputNumber v-model="value5" mode="decimal" :minFractionDigits="2" />
                </div>
                <div class="p-col-12 p-md-3">
                    United State Locale
                    <InputNumber v-model="value6" mode="decimal" locale="en-US" :minFractionDigits="2" />
                </div>
                <div class="p-col-12 p-md-3">
                    German Locale
                    <InputNumber v-model="value7" mode="decimal" locale="de-DE" :minFractionDigits="2"/>
                </div>
                <div class="p-col-12 p-md-3">
                    Indian Locale
                    <InputNumber v-model="value8" mode="decimal" locale="en-IN" :minFractionDigits="2" />
                </div>
            </div>

            <h3>Currency</h3>
            <div class="p-grid p-fluid">
                <div class="p-col-12 p-md-3">
                    United States
                    <InputNumber v-model="value9" mode="currency" currency="USD" locale="en-US" />
                </div>
                <div class="p-col-12 p-md-3">
                    Germany
                    <InputNumber v-model="value10" mode="currency" currency="EUR" locale="de-DE" />
                </div>
                <div class="p-col-12 p-md-3">
                    India
                    <InputNumber v-model="value11" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
                </div>
                <div class="p-col-12 p-md-3">
                    Japan
                    <InputNumber v-model="value12" mode="currency" currency="JPY" locale="jp-JP" />
                </div>
            </div>

            <h3>Prefix and Suffix</h3>
            <div class="p-grid p-fluid">
                <div class="p-col-12 p-md-3">
                    Mile
                    <InputNumber v-model="value13" suffix=" mi" />
                </div>
                <div class="p-col-12 p-md-3">
                    Percent
                    <InputNumber v-model="value14" prefix="%" />
                </div>
                <div class="p-col-12 p-md-3">
                    Expiry
                    <InputNumber v-model="value15" prefix="Expires in " suffix=" days" />
                </div>
                <div class="p-col-12 p-md-3">
                    Temperature
                    <InputNumber v-model="value16" prefix="&uarr; " suffix="℃" :min="0" :max="40" />
                </div>
            </div>

            <h3>Buttons</h3>
            <div class="p-grid p-fluid">
                <div class="p-col-12 p-md-3">
                    Stacked
                    <InputNumber v-model="value17" showButtons mode="currency" currency="USD" />
                </div>
                <div class="p-col-12 p-md-3">
                    Horizontal with Step
                    <InputNumber v-model="value18" showButtons buttonLayout="horizontal" spinnerMode="horizontal" :step="0.25"
                        decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR" />
                </div>
                <div class="p-col-12 p-md-3">
                    <div>Vertical</div>
                    <InputNumber v-model="value19" mode="decimal" showButtons buttonLayout="vertical" spinnerMode="vertical"
                        decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                </div>
                <div class="p-col-12 p-md-3">
                    Min-Max Boundaries
                    <InputNumber v-model="value20" mode="decimal" showButtons :min="0" :max="100" />
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

<style scoped>
.p-inputnumber {
    margin-top: 1rem;
}
</style>