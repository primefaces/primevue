<template>
    <div>
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
                        <InputMask mask="99-999999" v-model="val1" placeholder="99-999999" />
                    </div>

                    <div class="field col-12 md:col-4">
                        <label for="ssn">SSN</label>
                        <InputMask mask="999-99-9999" v-model="val2" placeholder="999-99-9999" />
                    </div>

                    <div class="field col-12 md:col-4">
                        <label for="date">Date</label>
                        <InputMask mask="99/99/9999" v-model="val3" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
                    </div>

                    <div class="field col-12 md:col-4">
                        <label for="Phone">Phone</label>
                        <InputMask mask="(999) 999-9999" v-model="val4" placeholder="(999) 999-9999" />
                    </div>

                    <div class="field col-12 md:col-4">
                        <label for="phoneext">Phone Ext</label>
                        <InputMask mask="(999) 999-9999? x99999" v-model="val5" placeholder="(999) 999-9999? x99999"/>
                    </div>

                    <div class="field col-12 md:col-4">
                        <label for="serial">Serial</label>
                        <InputMask mask="a*-999-a999" v-model="val6" placeholder="a*-999-a999" />
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
        }
    },
	components: {
		'InputMaskDoc': InputMaskDoc
	}
}
</script>

<style>

</style>
