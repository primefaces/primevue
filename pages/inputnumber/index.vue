<template>
    <div>
        <Head>
            <Title>Vue InputNumber Component</Title>
            <Meta name="description" content="InputNumber is an input component to provide numerical input." />
        </Head>

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
                        <InputNumber v-model="value1" inputId="integeronly" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="withoutgrouping">Without Grouping</label>
                        <InputNumber v-model="value2" inputId="withoutgrouping" mode="decimal" :useGrouping="false" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="minmaxfraction">Min-Max Fraction Digits</label>
                        <InputNumber v-model="value3" inputId="minmaxfraction" mode="decimal" :minFractionDigits="2" :maxFractionDigits="5" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="minmax">Min-Max Boundaries</label>
                        <InputNumber v-model="value4" inputId="minmax" mode="decimal" :min="0" :max="100" />
                    </div>

                    <div class="field col-12 md:col-3">
                        <label for="locale-user">User Locale</label>
                        <InputNumber v-model="value5" inputId="locale-user" mode="decimal" :minFractionDigits="2" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="locale-us">United States Locale</label>
                        <InputNumber v-model="value6" inputId="locale-us" mode="decimal" locale="en-US" :minFractionDigits="2" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="locale-german">German Locale</label>
                        <InputNumber v-model="value7" inputId="locale-german" mode="decimal" locale="de-DE" :minFractionDigits="2" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="locale-indian">Indian Locale</label>
                        <InputNumber v-model="value8" inputId="locale-indian" mode="decimal" locale="en-IN" :minFractionDigits="2" />
                    </div>
                </div>

                <h5>Currency</h5>
                <div class="grid p-fluid">
                    <div class="field col-12 md:col-3">
                        <label for="currency-us">United States</label>
                        <InputNumber v-model="value9" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="currency-germany">Germany</label>
                        <InputNumber v-model="value10" inputId="currency-germany" mode="currency" currency="EUR" locale="de-DE" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="currency-india">India</label>
                        <InputNumber v-model="value11" inputId="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="currency-japan">Japan</label>
                        <InputNumber v-model="value12" inputId="currency-japan" mode="currency" currency="JPY" locale="jp-JP" />
                    </div>
                </div>

                <h5>Prefix and Suffix</h5>
                <div class="grid p-fluid">
                    <div class="field col-12 md:col-3">
                        <label for="mile">Mile</label>
                        <InputNumber v-model="value13" inputId="mile" suffix=" mi" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="percent">Percent</label>
                        <InputNumber v-model="value14" inputId="percent" prefix="%" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="expiry">Expiry</label>
                        <InputNumber v-model="value15" inputId="expiry" prefix="Expires in " suffix=" days" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="temperature">Temperature</label>
                        <InputNumber v-model="value16" inputId="temperature" prefix="↑ " suffix="℃" :min="0" :max="40" />
                    </div>
                </div>

                <h5>Buttons</h5>
                <div class="grid p-fluid">
                    <div class="field col-12 md:col-3">
                        <label for="stacked">Stacked</label>
                        <InputNumber v-model="value17" inputId="stacked" showButtons mode="currency" currency="USD" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="horizontal">Horizontal with Step</label>
                        <InputNumber
                            v-model="value18"
                            inputId="horizontal"
                            showButtons
                            buttonLayout="horizontal"
                            :step="0.25"
                            decrementButtonClass="p-button-danger"
                            incrementButtonClass="p-button-success"
                            incrementButtonIcon="pi pi-plus"
                            decrementButtonIcon="pi pi-minus"
                            mode="currency"
                            currency="EUR"
                        />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="minmax-buttons">Min-Max Boundaries</label>
                        <InputNumber v-model="value20" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" />
                    </div>
                </div>

                <div class="field col-12 md:col-3">
                    <label for="vertical" style="display: block">Vertical</label>
                    <InputNumber
                        v-model="value19"
                        inputId="vertical"
                        mode="decimal"
                        showButtons
                        buttonLayout="vertical"
                        style="width: 4rem"
                        decrementButtonClass="p-button-secondary"
                        incrementButtonClass="p-button-secondary"
                        incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus"
                    />
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
            value18: 10.5,
            value19: 25,
            value20: 50
        };
    },
    components: {
        InputNumberDoc: InputNumberDoc
    }
};
</script>
