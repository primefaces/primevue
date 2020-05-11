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
&lt;Steps :model="items" :readonly="true"  style="margin-bottom: 1rem" /&gt;
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
            Personal Information
        &lt;/template&gt;
        &lt;template slot="content"&gt;
            &lt;p class="p-text-secondary"&gt;Enter your information&lt;/p&gt;
            &lt;div class="p-fluid"&gt;
                &lt;div class="p-field"&gt;
                    &lt;label for="firstname"&gt;Firstname&lt;/label&gt;
                    &lt;InputText id="firstname" v-model="$v.firstname.$model" :class="{'p-invalid':$v.firstname.$invalid && submitted}" /&gt;
                    &lt;small v-show="$v.firstname.$invalid && submitted" class="p-error"&gt;Firstname is required.&lt;/small&gt;
                &lt;/div&gt;
                &lt;div class="p-field"&gt;
                    &lt;label for="lastname"&gt;Lastname&lt;/label&gt;
                    &lt;InputText v-model="$v.lastname.$model" :class="{'p-invalid':$v.lastname.$invalid && submitted}" /&gt;
                    &lt;small v-show="$v.lastname.$invalid && submitted" class="p-error"&gt;Lastname is required.&lt;/small&gt;
                &lt;/div&gt;
                &lt;div class="p-field"&gt;
                    &lt;label for="age"&gt;Age&lt;/label&gt;
                    &lt;InputText id="age" v-model="$v.age.$model" :class="{'p-invalid':$v.age.$error && submitted}" /&gt;
                    &lt;small v-show="$v.age.$invalid && submitted" class="p-error"&gt;Age should be a number.&lt;/small&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;template slot="footer"&gt;
            &lt;div class="p-grid p-nogutter p-justify-between"&gt;
                &lt;i&gt;&lt;/i&gt;
                &lt;Button label="Next" @click="nextPage(!$v.$invalid)" icon="pi pi-angle-right" iconPos="right" /&gt;
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
                Seat Information
            &lt;/template&gt;
            &lt;template slot="content"&gt;
                &lt;p class="p-text-secondary"&gt;Choose your seat&lt;/p&gt;
                &lt;div class="p-fluid p-formgrid p-grid"&gt;
                    &lt;div class="p-field p-col-12 p-md-6"&gt;
                        &lt;label for="class"&gt;Class&lt;/label&gt;
                        &lt;Dropdown inputId="class" v-model="selectedClass" :options="classes" @change="setVagons($event)" optionLabel="name" placeholder="Select a Class" /&gt;
                    &lt;/div&gt;
                    &lt;div class="p-field p-col-12 p-md-6"&gt;
                        &lt;label for="lastname"&gt;Wagon&lt;/label&gt;
                        &lt;Dropdown inputId="wagon" v-model="selectedVagon" :options="vagons" @change="setSeats($event)" optionLabel="vagon" placeholder="Select a Vagon" /&gt;
                    &lt;/div&gt;
                    &lt;div class="p-field p-col-12"&gt;
                        &lt;label for="seat"&gt;Seat&lt;/label&gt;
                        &lt;Dropdown inputId="seat" v-model="selectedSeat" :options="seats" optionLabel="seat" placeholder="Select a Seat" /&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;template slot="footer"&gt;
                &lt;div class="p-grid p-nogutter p-justify-between"&gt;
                    &lt;Button label="Back" @click="prevPage()" icon="pi pi-angle-left" /&gt;
                    &lt;Button label="Next" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" /&gt;
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
            Payment Information
        &lt;/template&gt;
        &lt;template slot="content"&gt;
            &lt;p class="p-text-secondary"&gt;Enter your card details&lt;/p&gt;
            &lt;div class="p-fluid p-formgrid p-grid"&gt;
                &lt;div class="p-field p-col-12"&gt;
                    &lt;label for="class"&gt;Class&lt;/label&gt;
                    &lt;InputText type="text" v-model="cardholderName" /&gt;
                &lt;/div&gt;
                &lt;div class="p-field p-col-8"&gt;
                    &lt;label id="number" for="lastname"&gt;Number&lt;/label&gt;
                    &lt;InputMask id="number" mask="9999-9999-9999-9999" v-model="cardholderNumber" /&gt;
                &lt;/div&gt;
                &lt;div class="p-field p-col-2"&gt;
                    &lt;label id="date" for="date"&gt;Date&lt;/label&gt;
                    &lt;InputMask id="date" mask="99/99" v-model="date" /&gt;
                &lt;/div&gt;
                &lt;div class="p-field p-col-2"&gt;
                    &lt;label for="cvv"&gt;CVV&lt;/label&gt;
                    &lt;InputMask id="cvv" mask="999" v-model="cvv" /&gt;
                &lt;/div&gt;
                &lt;div class="p-field-checkbox p-col-12"&gt;
                    &lt;Checkbox id="remember" v-model="remember" :binary="true" /&gt;
                    &lt;label for="remember" class="p-checkbox-label"&gt;Save credit card information for future&lt;/label&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;template slot="footer"&gt;
            &lt;div class="p-grid p-nogutter p-justify-between"&gt;
                &lt;Button label="Back" @click="prevPage()" icon="pi pi-angle-left" /&gt;
                &lt;Button label="Next" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" /&gt;
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
            Confirmation
        &lt;/template&gt;
        &lt;template slot="content"&gt;
            &lt;div class="p-field p-col-12"&gt;
                &lt;label for="class"&gt;Name&lt;/label&gt;
                &lt;b&gt;{{formData.firstname ? formData.firstname : '-'}} {{formData.lastname ? formData.lastname : '-'}}&lt;/b&gt;
            &lt;/div&gt;
            &lt;div class="p-field p-col-12"&gt;
                &lt;label for="Age"&gt;Age&lt;/label&gt;
                &lt;b&gt;{{formData.age ? formData.age : '-'}}&lt;/b&gt;
            &lt;/div&gt;
            &lt;div class="p-field p-col-12"&gt;
                &lt;label for="Age"&gt;Seat Class&lt;/label&gt;
                &lt;b&gt;{{formData.class ? formData.class : '-'}}&lt;/b&gt;
            &lt;/div&gt;
            &lt;div class="p-field p-col-12"&gt;
                &lt;label for="Age"&gt;Wagon Number&lt;/label&gt;
                &lt;b&gt;{{formData.vagon ? formData.vagon : '-'}}&lt;/b&gt;
            &lt;/div&gt;
            &lt;div class="p-field p-col-12"&gt;
                &lt;label for="Age"&gt;Seat&lt;/label&gt;
                &lt;b&gt;{{formData.seat ? formData.seat : '-'}}&lt;/b&gt;
            &lt;/div&gt;
            &lt;div class="p-field p-col-12"&gt;
                &lt;label for="Age"&gt;Cardholder Name&lt;/label&gt;
                &lt;b&gt;{{formData.cardholderName ? formData.cardholderName : '-'}}&lt;/b&gt;
            &lt;/div&gt;
            &lt;div class="p-field p-col-12"&gt;
                &lt;label for="Age"&gt;Card Number&lt;/label&gt;
                &lt;b&gt;{{formData.cardholderNumber ? formData.cardholderNumber : '-'}}&lt;/b&gt;
            &lt;/div&gt;
            &lt;div class="p-field p-col-12"&gt;
                &lt;label for="Age"&gt;Date&lt;/label&gt;
                &lt;b&gt;{{formData.date ? formData.date : '-'}}&lt;/b&gt;
            &lt;/div&gt;
            &lt;div class="p-field p-col-12"&gt;
                &lt;label for="Age"&gt;CVV&lt;/label&gt;
                &lt;b&gt;{{formData.cvv && formData.cvv.length === 3  ? '**' + formData.cvv[2] : '-'}}&lt;/b&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;template slot="footer"&gt;
            &lt;div class="p-grid p-nogutter p-justify-between"&gt;
                &lt;Button label="Back" @click="prevPage()"  icon="pi pi-angle-left" /&gt;
                &lt;Button label="Complete" @click="complete()" icon="pi pi-check" iconPos="right" class="p-button-success"/&gt;
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
