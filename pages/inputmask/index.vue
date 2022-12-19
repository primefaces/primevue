<template>
    <div>
        <Head>
            <Title>Vue Mask Component</Title>
            <Meta name="description" content="InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone." />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>InputMask</h1>
                <p>InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-4">
                        <label for="basic">Basic</label>
                        <InputMask id="basic" v-model="val1" mask="99-999999" placeholder="99-999999" />
                    </div>

                    <div class="field col-12 md:col-4">
                        <label for="ssn">SSN</label>
                        <InputMask id="ssn" v-model="val2" mask="999-99-9999" placeholder="999-99-9999" />
                    </div>

                    <div class="field col-12 md:col-4">
                        <label for="date">Date</label>
                        <InputMask id="date" v-model="val3" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
                    </div>

                    <div class="field col-12 md:col-4">
                        <label for="phone">Phone</label>
                        <InputMask v-model="val4" date="phone" mask="(999) 999-9999" placeholder="(999) 999-9999" />
                    </div>

                    <div class="field col-12 md:col-4">
                        <label for="phoneext">Phone Ext</label>
                        <InputMask id="phoneext" v-model="val5" mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999" />
                    </div>

                    <div class="field col-12 md:col-4">
                        <label for="serial">Serial</label>
                        <InputMask id="serial" v-model="val6" mask="a*-999-a999" placeholder="a*-999-a999" />
                    </div>
                </div>
            </div>
        </div>

        <InputMaskDoc />
    </div>
</template>

<script>
import InputMaskDoc from './InputMaskDoc';

export default {
    data() {
        return {
            val1: null,
            val2: null,
            val3: null,
            val4: null,
            val5: null,
            val6: null
        };
    },
    components: {
        InputMaskDoc: InputMaskDoc
    }
};
</script>

<style></style>
