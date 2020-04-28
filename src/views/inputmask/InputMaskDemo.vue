<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>InputMask</h1>
                <p>InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="p-grid p-fluid">
                <div class="p-col-12 p-md-4">
                    <h3>Basic {{val1}}</h3>
                    <InputMask mask="99-999999" v-model="val1" placeholder="99-999999" />
                </div>

                <div class="p-col-12 p-md-4">
                    <h3>SSN {{val2}}</h3>
                    <InputMask mask="999-99-9999" v-model="val2" placeholder="999-99-9999" />
                </div>

                <div class="p-col-12 p-md-4">
                    <h3>Date {{val3}}</h3>
                    <InputMask mask="99/99/9999" v-model="val3" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
                </div>

                <div class="p-col-12 p-md-4">
                    <h3>Phone {{val4}}</h3>
                    <InputMask mask="(999) 999-9999" v-model="val4" placeholder="(999) 999-9999" />
                </div>

                <div class="p-col-12 p-md-4">
                    <h3>Phone Ext {{val5}}</h3>
                    <InputMask mask="(999) 999-9999? x99999" v-model="val5" placeholder="(999) 999-9999? x99999"/>
                </div>

                <div class="p-col-12 p-md-4">
                    <h3>Serial Number {{val6}}</h3>
                    <InputMask mask="a*-999-a999" v-model="val6" placeholder="a*-999-a999" />
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
