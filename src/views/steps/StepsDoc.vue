<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Steps from 'primevue/steps';
</CodeHighlight>

                <h3>MenuModel</h3>
                <p>Steps uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

				<h3>Getting Started</h3>
				<p>Steps is integrated with Vue Router and requires a collection of menuitems as its model.</p>
<CodeHighlight>
&lt;Steps :model="items" /&gt;
&lt;router-view /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
export default {
	data() {
		return {
			items: [{
                label: 'Personal',
                to: '/steps'
            },
            {
                label: 'Seat',
                to: '/steps/seat'
            },
            {
                label: 'Payment',
                to: '/steps/payment'
            },
            {
                label: 'Confirmation',
                to: '/steps/confirmation'
            }]
		}
	}
}
</CodeHighlight>

                <h3>Interactive</h3>
                <p>Items are readonly by default, if you'd like to make them interactive then disable <i>readonly</i> property.</p>
<CodeHighlight>
&lt;Steps :model="items" :readonly="false" /&gt;
&lt;router-view /&gt;
</CodeHighlight>

                <h3>Properties</h3>
                <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>model</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of menuitems.</td>
                            </tr>
                             <tr>
                                <td>readonly</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether the items are clickable or not.</td>
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
                                <td>p-steps</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-steps-item</td>
                                <td>Menuitem element.</td>
                            </tr>
                            <tr>
                                <td>p-steps-number</td>
                                <td>Number of menuitem.</td>
                            </tr>
                            <tr>
                                <td>p-steps-title</td>
                                <td>Label of menuitem.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/tabmenu" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;Steps :model="items" :readonly="true"  style="margin-bottom: 1em" /&gt;
&lt;keep-alive&gt;
    &lt;router-view :formData="formObject" @prevPage="prevPage($event)" @nextPage="nextPage($event)" @complete="complete" /&gt;
&lt;/keep-alive&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            items: [{
                label: 'Personal',
                to: '/steps'
            },
            {
                label: 'Seat',
                to: '/steps/seat'
            },
            {
                label: 'Payment',
                to: '/steps/payment'
            },
            {
                label: 'Confirmation',
                to: '/steps/confirmation'
            }],
            formObject: {}
        }
    },
    components: {
        'StepsDoc': StepsDoc
    },
    methods: {
        nextPage(event) {
            for (let field in event.formData) {
                this.formObject[field] = event.formData[field];
            }

            this.$router.push(this.items[event.pageIndex + 1].to);
        },
        prevPage(event) {
            this.$router.push(this.items[event.pageIndex - 1].to);
        },
        complete() {
            this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
        }
    }
}
</CodeHighlight>

			</TabPanel>
            <TabPanel header="Personal">
<CodeHighlight>
<template v-pre>
&lt;div class="stepsdemo-content"&gt;
    &lt;Card&gt;
        &lt;template slot="title"&gt;
            &lt;div class="p-grid p-fluid p-justify-between wizard-header"&gt;
                &lt;div class="p-col-8 wizard-header-content"&gt;
                    &lt;p class="card-header-message"&gt;Personal Information&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="p-col-2 wizard-header-steps"&gt;
                    &lt;p class="card-header-message"&gt;Step 1/4&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;template slot="content"&gt;
            &lt;div class="p-grid p-fluid wizard-content-summary"&gt;
                &lt;div class="p-col-12"&gt;
                    &lt;p&gt;Please enter your information and proceed to the next step&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="p-grid p-fluid wizard-content"&gt;
                &lt;div class="p-col-12 p-md-4" style="padding-bottom: 0px; max-width: 235px;"&gt;
                    &lt;p&gt;Your Name&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="p-grid p-fluid wizard-content"&gt;
                &lt;div class="p-col-12 p-md-3" style="max-width: 176px;"&gt;
                    &lt;InputText v-model="$v.firstname.$model" :class="{'p-invalid':$v.firstname.$invalid && submitted}" placeholder="Firstname" /&gt;
                    &lt;ValidationMessage v-show="$v.firstname.$invalid && submitted" style="font-size: 12px"&gt;Firstname is required.&lt;/ValidationMessage&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-3" style="max-width: 176px;"&gt;
                    &lt;InputText v-model="$v.lastname.$model" :class="{'p-invalid':$v.lastname.$invalid && submitted}" placeholder="Lastname"/&gt;
                    &lt;ValidationMessage v-show="$v.lastname.$invalid && submitted" style="font-size: 12px"&gt;Lastname is required.&lt;/ValidationMessage&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="p-grid p-fluid wizard-content"&gt;
                &lt;div class="p-col-12 p-md-3" style="max-width: 176px;"&gt;
                        &lt;p class="wizard-input-header"&gt;Your Age&lt;/p&gt;
                        &lt;InputText v-model="$v.age.$model" :class="{'p-invalid':$v.age.$error && submitted}" /&gt;
                        &lt;ValidationMessage v-show="$v.age.$invalid && submitted" style="margin-top: .5em; font-size: 12px"&gt;Age should be number.&lt;/ValidationMessage&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;template slot="footer"&gt;
            &lt;div class="p-grid p-fluid p-justify-between wizard-footer demo-footer"&gt;
                &lt;div class="p-col-4 wizard-footer-back-button"&gt;
                    &lt;Button label="Back" :disabled="true" class="disabled-button" icon="pi pi-angle-left" /&gt;
                &lt;/div&gt;
                &lt;div class="p-col-4 wizard-footer-next-button"&gt;
                    &lt;Button label="Next" @click="nextPage(!$v.$invalid)" icon="pi pi-angle-right" iconPos="right" /&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/Card&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
</CodeHighlight>
			</TabPanel>
            <TabPanel header="Seat">
<CodeHighlight>
<template v-pre>
&lt;div class="stepsdemo-content"&gt;
    &lt;Card&gt;
        &lt;template slot="title"&gt;
            &lt;div class="p-grid p-fluid p-justify-between wizard-header"&gt;
                &lt;div class="p-col-8 wizard-header-content"&gt;
                    &lt;p class="card-header-message"&gt;Seat Information&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="p-col-2 wizard-header-steps"&gt;
                    &lt;p class="card-header-message"&gt;Step 2/4&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;template slot="content"&gt;
            &lt;div class="p-grid p-fluid wizard-content-summary"&gt;
                &lt;div class="p-col-12"&gt;
                    &lt;p&gt;Please pick your seat and proceed to the payment&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="p-grid p-fluid wizard-content"&gt;
                &lt;div class="p-col-12 p-md-4" style="padding-bottom: 0px; max-width: 235px;"&gt;
                    &lt;p&gt;Class and Vagon&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="p-grid p-fluid wizard-content"&gt;
                &lt;div class="p-col-12 p-md-3" style="max-width: 176px;"&gt;
                    &lt;Dropdown v-model="selectedClass" :options="classes" @change="setVagons($event)" optionLabel="name" placeholder="Select a Class" /&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-3" style="max-width: 176px;"&gt;
                    &lt;Dropdown v-model="selectedVagon" :options="vagons" @change="setSeats($event)" optionLabel="vagon" placeholder="Select a Vagon" /&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="p-grid p-fluid wizard-content"&gt;
                &lt;div class="p-col-12 p-md-3" style="max-width: 176px;"&gt;
                    &lt;p class="wizard-input-header"&gt;Seat&lt;/p&gt;
                    &lt;Dropdown v-model="selectedSeat" :options="seats" optionLabel="seat" placeholder="Select a Seat" /&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;template slot="footer"&gt;
            &lt;div class="p-grid p-fluid p-justify-between wizard-footer demo-footer"&gt;
                &lt;div class="p-col-4 wizard-footer-back-button"&gt;
                    &lt;Button label="Back" class="disabled-button" @click="prevPage()" icon="pi pi-angle-left" /&gt;
                &lt;/div&gt;
                &lt;div class="p-col-4 wizard-footer-next-button"&gt;
                    &lt;Button label="Next" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" /&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/Card&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data () {
        return {
            selectedClass: '',
            classes: [
                {name: 'First Class', code: 'A', factor: 1},
                {name: 'Second Class', code: 'B', factor: 2},
                {name: 'Third Class', code: 'C', factor: 3}
            ],
            vagons: [],
            selectedVagon: '',
            seats: [],
            selectedSeat: ''
        }
    },
    methods: {
        setVagons(event) {
            if (this.selectedClass && event.value) {
                this.vagons = [];
                this.seats = [];
                for (let i = 1; i &lt; 3 * event.value.factor; i++) {
                    this.vagons.push({vagon: i + event.value.code, type: event.value.name, factor: event.value.factor});
                }
            }
        },
        setSeats(event) {
            if (this.selectedVagon && event.value) {
                this.seats = [];
                for (let i = 1; i &lt; 10 * event.value.factor; i++) {
                    this.seats.push({seat: i, type: event.value.type});
                }
            }
        },
        nextPage() {
            this.$emit('nextPage', {formData: {class: this.selectedClass.name, vagon: this.selectedVagon.vagon, seat: this.selectedSeat.seat}, pageIndex: 1});
        },
        prevPage() {
            this.$emit('prevPage', {pageIndex: 1});
        }
    }
}
</CodeHighlight>
			</TabPanel>
            <TabPanel header="Payment">
<CodeHighlight>
<template v-pre>
&lt;div class="stepsdemo-content"&gt;
    &lt;Card&gt;
        &lt;template slot="title"&gt;
            &lt;div class="p-grid p-fluid p-justify-between wizard-header"&gt;
                &lt;div class="p-col-8 wizard-header-content"&gt;
                    &lt;p class="card-header-message"&gt;Payment Information&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="p-col-2 wizard-header-steps"&gt;
                    &lt;p class="card-header-message"&gt;Step 3/4&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;template slot="content"&gt;
            &lt;div class="p-grid p-fluid wizard-content-summary"&gt;
                &lt;div class="p-col-12"&gt;
                    &lt;p&gt;Complete your registration with Payment&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="p-grid p-fluid wizard-content"&gt;
                &lt;div class="p-col-12 p-md-8" style="max-width: 391px;"&gt;
                    &lt;p class="wizard-input-header"&gt;Cardholder Name&lt;/p&gt;
                    &lt;InputText type="text" v-model="cardholderName" /&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="p-grid p-fluid wizard-content"&gt;
                &lt;div class="p-col-12 p-md-5" style="max-width: 252px"&gt;
                    &lt;p class="wizard-input-header"&gt;Cardholder Number&lt;/p&gt;
                    &lt;InputMask mask="9999-9999-9999-9999" v-model="cardholderNumber" /&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-2" style="max-width: 69px"&gt;
                    &lt;p class="wizard-input-header"&gt;Date&lt;/p&gt;
                    &lt;InputMask mask="99/99" v-model="date" /&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-2" style="max-width: 69px"&gt;
                    &lt;p class="wizard-input-header"&gt;CVV&lt;/p&gt;
                    &lt;InputMask mask="999" v-model="cvv" /&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="p-grid p-fluid wizard-content" style="margin-top: .3em"&gt;
                &lt;div class="p-col-12"&gt;
                        &lt;Checkbox id="remember" v-model="remember" :binary="true" /&gt;
                        &lt;label for="remember" class="p-checkbox-label"&gt;Save credit card information for future usage&lt;/label&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;template slot="footer"&gt;
            &lt;div class="p-grid p-fluid p-justify-between wizard-footer" style="margin-top: .5em"&gt;
                &lt;div class="p-col-4 wizard-footer-back-button"&gt;
                    &lt;Button label="Back" class="disabled-button" @click="prevPage()" icon="pi pi-angle-left" /&gt;
                &lt;/div&gt;
                &lt;div class="p-col-4 wizard-footer-next-button"&gt;
                    &lt;Button label="Next" @click="nextPage()" icon="pi pi-angle-right" iconPos="right"/&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/Card&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data () {
        return {
            cardholderName:'',
            cardholderNumber:'',
            date:'',
            cvv:'',
            remember:false
        }
    },
    methods: {
        nextPage() {
            this.$emit('nextPage', {formData: {cardholderName: this.cardholderName, cardholderNumber: this.cardholderNumber, date: this.date, cvv: this.cvv}, pageIndex: 2});
        },
        prevPage() {
            this.$emit('prevPage', {pageIndex: 2});
        }
    }
}
</CodeHighlight>
			</TabPanel>
            <TabPanel header="Confirmation">
<CodeHighlight>
<template v-pre>
&lt;div class="stepsdemo-content"&gt;
    &lt;Card&gt;
        &lt;template slot="title"&gt;
            &lt;div class="p-grid p-fluid p-justify-between wizard-header"&gt;
                &lt;div class="p-col-8 wizard-header-content"&gt;
                    &lt;p class="card-header-message"&gt;Confirmation&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="p-col-2 wizard-header-steps"&gt;
                    &lt;p class="card-header-message"&gt;Step 4/4&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;template slot="content"&gt;
            &lt;div class="p-grid p-fluid wizard-content wizard-confirmation"&gt;
                &lt;div class="p-col-12 p-md-3"&gt;
                    &lt;label class="wizard-input-label"&gt;Your Name&lt;/label&gt;
                    &lt;p&gt;{{formData.firstname ? formData.firstname : '-'}} {{formData.lastname ? formData.lastname : '-'}}&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-1"&gt;
                    &lt;label class="wizard-input-label"&gt;Your Age&lt;/label&gt;
                    &lt;p&gt;{{formData.age ? formData.age : '-'}}&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="p-grid p-fluid wizard-content wizard-confirmation"&gt;
                &lt;div class="p-col-12 p-md-3"&gt;
                    &lt;label class="wizard-input-label"&gt;Seat Class&lt;/label&gt;
                    &lt;p&gt;{{formData.class ? formData.class : '-'}}&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-3"&gt;
                    &lt;label class="wizard-input-label"&gt;Vagon Number&lt;/label&gt;
                    &lt;p&gt;{{formData.vagon ? formData.vagon : '-'}}&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-1"&gt;
                    &lt;label class="wizard-input-label"&gt;Seat&lt;/label&gt;
                    &lt;p&gt;{{formData.seat ? formData.seat : '-'}}&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="p-grid p-fluid wizard-content wizard-confirmation"&gt;
                &lt;div class="p-col-12 p-md-3"&gt;
                    &lt;label class="wizard-input-label"&gt;Cardholder Name&lt;/label&gt;
                    &lt;p&gt;{{formData.cardholderName ? formData.cardholderName : '-'}}&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-3"&gt;
                    &lt;label class="wizard-input-label"&gt;Cardholder Number&lt;/label&gt;
                    &lt;p&gt;{{formData.cardholderNumber ? formData.cardholderNumber : '-'}}&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-1"&gt;
                    &lt;label class="wizard-input-label"&gt;Date&lt;/label&gt;
                    &lt;p&gt;{{formData.date ? formData.date : '-'}}&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-1"&gt;
                    &lt;label class="wizard-input-label"&gt;CVV&lt;/label&gt;
                    &lt;p&gt;{{formData.cvv && formData.cvv.length === 3  ? '**' + formData.cvv[2] : '-'}}&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;template slot="footer"&gt;
            &lt;div class="p-grid p-fluid p-justify-between wizard-footer demo-footer"&gt;
                &lt;div class="p-col-4 wizard-footer-back-button"&gt;
                    &lt;Button label="Back" class="disabled-button" @click="prevPage()" icon="pi pi-angle-left" /&gt;
                &lt;/div&gt;
                &lt;div class="p-col-6 wizard-footer-complete-button"&gt;
                    &lt;Button label="Complete" @click="complete()" icon="pi pi-check" iconPos="right" /&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/Card&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    props: {
        formData: Object
    },
    methods: {
        prevPage() {
            this.$emit('prevPage', {pageIndex: 3});
        },
        complete() {
            this.$emit('complete');
        }
    },
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>
