<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Form Layout</h1>
                <p>Form layout is a CSS utility optimized for creating forms with ease. FormLayout is not included in PrimeVue as it is provided by <a href="https://github.com/primefaces/primeflex">PrimeFlex</a>,
                a shared grid library between PrimeFaces, PrimeNG, PrimeReact and PrimeVue projects.</p>
            </div>
            
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Vertical</h5>
                <div class="p-fluid">
                    <div class="p-field">
                        <label for="firstname1">Firstname</label>
                        <InputText id="firstname1" type="text" />
                    </div>
                    <div class="p-field">
                        <label for="lastname1">Lastname</label>
                        <InputText id="lastname1" type="text" />
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Vertical and Grid</h5>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="firstname2">Firstname</label>
                        <InputText id="firstname2" type="text" />
                    </div>
                    <div class="p-field p-col">
                        <label for="lastname2">Lastname</label>
                        <InputText id="lastname2" type="text" />
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Horizontal and Fixed Width</h5>
                <div class="p-field p-grid">
                    <label for="firstname3" class="p-col-fixed" style="width:100px">Firstname</label>
                    <div class="p-col">
                        <InputText id="firstname3" type="text" />
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="lastname3" class="p-col-fixed" style="width:100px">Lastname</label>
                    <div class="p-col">
                        <InputText id="lastname3" type="text" />
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Horizontal and Fluid</h5>
                <div class="p-fluid">
                    <div class="p-field p-grid">
                        <label for="firstname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Firstname</label>
                        <div class="p-col-12 p-md-10">
                            <InputText id="firstname4" type="text" />
                        </div>
                    </div>
                    <div class="p-field p-grid">
                        <label for="lastname4" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Lastname</label>
                        <div class="p-col-12 p-md-10">
                            <InputText id="lastname4" type="text" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Inline</h5>
                <div class="p-formgroup-inline">
                    <div class="p-field">
                        <label for="firstname5" class="p-sr-only">Firstname</label>
                        <InputText id="firstname5" type="text" placeholder="Firstname" />
                    </div>
                    <div class="p-field">
                        <label for="lastname5" class="p-sr-only">Lastname</label>
                        <InputText id="lastname5" type="text" placeholder="Lastname" />
                    </div>
                    <Button type="button" label="Submit" />
                </div>
            </div>

            <div class="card">
                <h5>Vertical Checkbox</h5>
                <div class="p-field-checkbox">
                    <Checkbox id="city1" name="city1" value="Chicago" v-model="cities1" />
                    <label for="city1">Chicago</label>
                </div>
                <div class="p-field-checkbox">
                    <Checkbox id="city2" name="city1" value="Los Angeles" v-model="cities1" />
                    <label for="city2">Los Angeles</label>
                </div>

                <h5>Horizontal Checkbox</h5>
                <div class="p-formgroup-inline">
                    <div class="p-field-checkbox">
                        <Checkbox id="city3" name="city2" value="Chicago" v-model="cities2" />
                        <label for="city3">Chicago</label>
                    </div>
                    <div class="p-field-checkbox">
                        <Checkbox id="city4" name="city2" value="Los Angeles" v-model="cities2" />
                        <label for="city4">Los Angeles</label>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Vertical RadioButton</h5>
                <div class="p-field-radiobutton">
                    <RadioButton id="city5" name="city1" value="Chicago" v-model="city1" />
                    <label for="city5">Chicago</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="city6" name="city1" value="Los Angeles" v-model="city1" />
                    <label for="city6">Los Angeles</label>
                </div>

                <h5>Horizontal RadioButton</h5>
                <div class="p-formgroup-inline">
                    <div class="p-field-radiobutton">
                        <RadioButton id="city7" name="city2" value="Chicago" v-model="city2" />
                        <label for="city7">Chicago</label>
                    </div>
                    <div class="p-field-radiobutton">
                        <RadioButton id="city8" name="city2" value="Los Angeles" v-model="city2" />
                        <label for="city8">Los Angeles</label>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Help Text</h5>
                <div class="p-field p-fluid">
                    <label for="username">Username</label>
                    <InputText id="username" type="username" aria-describedby="username-help" />
                    <small id="username-help">Enter your username to reset your password.</small>
                </div>
            </div>

            <div class="card">
                <h5>Advanced</h5>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="firstname6">Firstname</label>
                        <InputText id="firstname6" type="text" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname6">Lastname</label>
                        <InputText id="lastname6" type="text" />
                    </div>
                    <div class="p-field p-col-12">
                        <label for="address">Address</label>
                        <Textarea id="address" rows="4" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="city">City</label>
                        <InputText id="city" type="text" />
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="state">State</label>
                        <Dropdown inputId="state" v-model="selectedState" :options="states" optionLabel="name" placeholder="Select" />
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="zip">Zip</label>
                        <InputText id="zip" type="text" />
                    </div>
                </div>
            </div>
        </div>

        <FormLayoutDoc />
    </div>
</template>

<script>
import FormLayoutDoc from './FormLayoutDoc';

export default {
    data() {
        return {
            selectedState: null,
            states: [
                {name: 'Arizona', code: 'Arizona'},
                {name: 'California', value: 'California'},
                {name: 'Florida', code: 'Florida'},
                {name: 'Ohio', code: 'Ohio'},
                {name: 'Washington', code: 'Washington'}
            ],
            cities1: [],
            cities2: [],
            city1: null,
            city2: null
        }
    },
	components: {
		'FormLayoutDoc': FormLayoutDoc
	}
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 489px) {
    .p-formgroup-inline {
        .p-field {
            margin-bottom: 1em !important;
        }
    }
}

.layout-content .content-section.implementation > h3 {
    font-weight: 600;
}

textarea {
    resize: none;
}
</style>