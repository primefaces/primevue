<template>
    <div class="stepsdemo-content">
        <Card>
            <template slot="title">
                <div class="p-grid p-fluid p-justify-between wizard-header">
                    <div class="p-col-8 wizard-header-content">
                        <p class="card-header-message">Personal Information</p>
                    </div>
                    <div class="p-col-2 wizard-header-steps">
                        <p class="card-header-message">Step 1/4</p>
                    </div>
                </div>
            </template>
            <template slot="content">
                <div class="p-grid p-fluid wizard-content-summary">
                    <div class="p-col-12">
                        <p>Please enter your information and proceed to the next step</p>
                    </div>
                </div>
                <div class="p-grid p-fluid wizard-content">
                    <div class="p-col-12 p-md-4" style="padding-bottom: 0px; max-width: 235px;">
                        <p>Your Name</p>
                    </div>
                </div>
                <div class="p-grid p-fluid wizard-content">
                    <div class="p-col-12 p-md-3" style="max-width: 176px;">
                        <InputText v-model="$v.firstname.$model" :class="{'p-error':$v.firstname.$invalid && submitted}" />
                        <label class="wizard-input-label">First</label>
                        <ValidationMessage v-show="$v.firstname.$invalid && submitted" style="font-size: 12px">Firstname is required.</ValidationMessage>
                    </div>
                    <div class="p-col-12 p-md-3" style="max-width: 176px;">
                        <InputText v-model="$v.lastname.$model" :class="{'p-error':$v.lastname.$invalid && submitted}" />
                        <label class="wizard-input-label">Last</label>
                        <ValidationMessage v-show="$v.lastname.$invalid && submitted" style="font-size: 12px">Lastname is required.</ValidationMessage>
                    </div>
                </div>
                <div class="p-grid p-fluid wizard-content">
                    <div class="p-col-12 p-md-3" style="max-width: 176px;">
                            <p class="wizard-input-header">Your Age</p>
                            <InputText v-model="$v.age.$model" :class="{'p-error':$v.age.$error && submitted}" />
                            <ValidationMessage v-show="$v.age.$invalid && submitted" style="margin-top: .5em; font-size: 12px">Age should be number.</ValidationMessage>
                    </div>
                </div>
            </template>
            <template slot="footer">
                <div class="p-grid p-fluid p-justify-between wizard-footer">
                    <div class="p-col-4 wizard-footer-back-button">
                        <Button label="Back" :disabled="true" class="disabled-button" />
                    </div>
                    <div class="p-col-4 wizard-footer-next-button">
                        <Button label="Next" @click="nextPage(!$v.$invalid)" />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
import {required, integer} from 'vuelidate/lib/validators';

export default {
    data () {
        return {
            firstname: '',
            lastname: '',
            age: '',
            submitted: false
        }
    },
    validations: {
        firstname: {
            required
        },
        lastname: {
            required
        },
        age: {
            integer
        }
    },
    methods: {
        nextPage(isFormValid) {
            this.submitted = true;

            if (!isFormValid) {
                return;
            }

            this.$emit('nextPage', {formData: {firstname: this.firstname, lastname: this.lastname, age: this.age}, pageIndex: 0});
        }
    }
}
</script>

<style>
</style>