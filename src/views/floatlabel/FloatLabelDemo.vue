<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Float Label</h1>
                <p>All input text components support floating labels.</p>
            </div>
            <AppInputStyleSwitch />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <div class="p-fluid p-grid">
                    <div class="p-field p-col-12 p-md-4">
                        <span class="p-float-label">
                            <InputText id="inputtext" type="text" v-model="value1" />
                            <label for="inputtext">InputText</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <span class="p-float-label p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText id="inputtext-left" type="text" v-model="valueIconLeft" />
                            <label for="inputtext-left">Left Icon</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                       <span class="p-float-label p-input-icon-right">
                            <i class="pi pi-search" />
                            <InputText id="inputtext-right" type="text" v-model="valueIconRight" />
                            <label for="inputtext-right">Right Icon</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <span class="p-float-label">
                            <AutoComplete v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />
                            <label for="autocomplete">AutoComplete</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <span class="p-float-label">
                            <Calendar id="calendar" v-model="value3" />
                            <label for="calendar">Calendar</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <span class="p-float-label">
                            <Chips id="chips" v-model="value4" />
                            <label for="chips">Chips</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <span class="p-float-label">
                            <InputMask id="inputmask" v-model="value5" mask="99/99/9999" slotChar="mm/dd/yyyy" />
                            <label for="inputmask">InputMask</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <span class="p-float-label">
                            <InputNumber id="inputnumber" v-model="value6" />
                            <label for="inputnumber">InputNumber</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">
                                <i class="pi pi-user"></i>
                            </span>
                            <span class="p-float-label">
                                <InputText id="inputgroup" type="text" v-model="value7" />
                                <label for="inputgroup">InputGroup</label>
                            </span>
                        </div>
                    </div>
                     <div class="p-field p-col-12 p-md-4">
                        <span class="p-float-label">
                            <CascadeSelect id="cascadeSelect" v-model="selectedCity" :options="cascadeCountries" optionLabel="cname" optionGroupLabel="name"
                                :optionGroupChildren="['states', 'cities']" />
                            <label for="multiselect">CascadeSelect</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <span class="p-float-label">
                            <Dropdown id="dropdown" v-model="value8" :options="cities" optionLabel="name" />
                            <label for="dropdown">Dropdown</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <span class="p-float-label">
                            <MultiSelect id="multiselect" v-model="value9" :options="cities" optionLabel="name" />
                            <label for="multiselect">MultiSelect</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12">
                        <span class="p-float-label">
                            <Textarea id="textarea" v-model="value10" rows="3" />
                            <label for="textarea">Textarea</label>
                        </span>
                    </div>
                </div>
            </div>
        </div>

         <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<pre v-code>
<code><template v-pre>
&lt;div class="p-fluid p-grid"&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;span class="p-float-label"&gt;
            &lt;InputText id="inputtext" type="text" v-model="value1" /&gt;
            &lt;label for="inputtext"&gt;InputText&lt;/label&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;span class="p-float-label p-input-icon-left"&gt;
            &lt;i class="pi pi-search" /&gt;
            &lt;InputText id="inputtext-left" type="text" v-model="valueIconLeft" /&gt;
            &lt;label for="inputtext-left"&gt;Left Icon&lt;/label&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;span class="p-float-label p-input-icon-right"&gt;
            &lt;i class="pi pi-search" /&gt;
            &lt;InputText id="inputtext-right" type="text" v-model="valueIconRight" /&gt;
            &lt;label for="inputtext-right"&gt;Right Icon&lt;/label&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;span class="p-float-label"&gt;
            &lt;AutoComplete v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" /&gt;
            &lt;label for="autocomplete"&gt;AutoComplete&lt;/label&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;span class="p-float-label"&gt;
            &lt;Calendar id="calendar" v-model="value3" /&gt;
            &lt;label for="calendar"&gt;Calendar&lt;/label&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;span class="p-float-label"&gt;
            &lt;Chips id="chips" v-model="value4" /&gt;
            &lt;label for="chips"&gt;Chips&lt;/label&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;span class="p-float-label"&gt;
            &lt;InputMask id="inputmask" v-model="value5" mask="99/99/9999" slotChar="mm/dd/yyyy" /&gt;
            &lt;label for="inputmask"&gt;InputMask&lt;/label&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;span class="p-float-label"&gt;
            &lt;InputNumber id="inputnumber" v-model="value6" /&gt;
            &lt;label for="inputnumber"&gt;InputNumber&lt;/label&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;div class="p-inputgroup"&gt;
            &lt;span class="p-inputgroup-addon"&gt;
                &lt;i class="pi pi-user"&gt;&lt;/i&gt;
            &lt;/span&gt;
            &lt;span class="p-float-label"&gt;
                &lt;InputText id="inputgroup" type="text" v-model="value7" /&gt;
                &lt;label for="inputgroup"&gt;InputGroup&lt;/label&gt;
            &lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;
        &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;span class="p-float-label"&gt;
            &lt;CascadeSelect id="cascadeSelect" v-model="selectedCity" :options="cascadeCountries" optionLabel="cname" optionGroupLabel="name"
                :optionGroupChildren="['states', 'cities']" /&gt;
            &lt;label for="multiselect"&gt;CascadeSelect&lt;/label&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;span class="p-float-label"&gt;
            &lt;Dropdown id="dropdown" v-model="value8" :options="cities" optionLabel="name" /&gt;
            &lt;label for="dropdown"&gt;Dropdown&lt;/label&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;span class="p-float-label"&gt;
            &lt;MultiSelect id="multiselect" v-model="value9" :options="cities" optionLabel="name" /&gt;
            &lt;label for="multiselect"&gt;MultiSelect&lt;/label&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12"&gt;
        &lt;span class="p-float-label"&gt;
            &lt;Textarea id="textarea" v-model="value10" rows="3" /&gt;
            &lt;label for="textarea"&gt;Textarea&lt;/label&gt;
        &lt;/span&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import CountryService from '../../service/CountryService';

export default {
    data() {
        return {
            countries: null,
            filteredCountries: null,
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            value5: null,
            value6: null,
            value7: null,
            value8: null,
            value9: null,
            value10: null,
            selectedCity: null,
            cascadeCountries: [
                {
                    name: 'Australia',
                    code: 'AU',
                    states: [
                        {
                            name: 'New South Wales',
                            cities: [
                                {cname: 'Sydney', code: 'A-SY'},
                                {cname: 'Newcastle', code: 'A-NE'},
                                {cname: 'Wollongong', code: 'A-WO'}
                            ]
                        },
                        {
                            name: 'Queensland',
                            cities: [
                                {cname: 'Brisbane', code: 'A-BR'},
                                {cname: 'Townsville', code: 'A-TO'}
                            ]
                        },
                        
                    ]
                },
                {
                    name: 'Canada', 
                    code: 'CA',
                    states: [
                        {
                            name: 'Quebec',
                            cities: [
                                {cname: 'Montreal', code: 'C-MO'},
                                {cname: 'Quebec City', code: 'C-QU'}
                            ]
                        },
                        {
                            name: 'Ontario',
                            cities: [
                                {cname: 'Ottawa', code: 'C-OT'},
                                {cname: 'Toronto', code: 'C-TO'}
                            ]
                        },
                        
                    ]
                },
                {
                    name: 'United States',
                    code: 'US',
                    states: [
                        {
                            name: 'California',
                            cities: [
                                {cname: 'Los Angeles', code: 'US-LA'},
                                {cname: 'San Diego', code: 'US-SD'},
                                {cname: 'San Francisco', code: 'US-SF'}
                            ]
                        },
                        {
                            name: 'Florida',
                            cities: [
                                {cname: 'Jacksonville', code: 'US-JA'},
                                {cname: 'Miami', code: 'US-MI'},
                                {cname: 'Tampa', code: 'US-TA'},
                                {cname: 'Orlando', code: 'US-OR'}
                            ]
                        },
                        {
                            name: 'Texas',
                            cities: [
                                {cname: 'Austin', code: 'US-AU'},
                                {cname: 'Dallas', code: 'US-DA'},
                                {cname: 'Houston', code: 'US-HO'}
                            ]
                        }
                    ]
                }
            ]
        }
    },
    countryService: null,
    created() {
        this.countryService = new CountryService();
    },
    mounted() {
        this.countryService.getCountries().then(data => this.countries = data);
    },
    methods: {
        searchCountry(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.filteredCountries = [...this.countries];
                }
                else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        }
    }
}

</code></pre>
                </TabPanel>
            </TabView>
         </div>
    </div>
</template>

<script>
import CountryService from '../../service/CountryService';

export default {
    data() {
        return {
            countries: null,
            filteredCountries: null,
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            value5: null,
            value6: null,
            value7: null,
            value8: null,
            value9: null,
            value10: null,
            selectedCity: null,
            cascadeCountries: [
                {
                    name: 'Australia',
                    code: 'AU',
                    states: [
                        {
                            name: 'New South Wales',
                            cities: [
                                {cname: 'Sydney', code: 'A-SY'},
                                {cname: 'Newcastle', code: 'A-NE'},
                                {cname: 'Wollongong', code: 'A-WO'}
                            ]
                        },
                        {
                            name: 'Queensland',
                            cities: [
                                {cname: 'Brisbane', code: 'A-BR'},
                                {cname: 'Townsville', code: 'A-TO'}
                            ]
                        },
                        
                    ]
                },
                {
                    name: 'Canada', 
                    code: 'CA',
                    states: [
                        {
                            name: 'Quebec',
                            cities: [
                                {cname: 'Montreal', code: 'C-MO'},
                                {cname: 'Quebec City', code: 'C-QU'}
                            ]
                        },
                        {
                            name: 'Ontario',
                            cities: [
                                {cname: 'Ottawa', code: 'C-OT'},
                                {cname: 'Toronto', code: 'C-TO'}
                            ]
                        },
                        
                    ]
                },
                {
                    name: 'United States',
                    code: 'US',
                    states: [
                        {
                            name: 'California',
                            cities: [
                                {cname: 'Los Angeles', code: 'US-LA'},
                                {cname: 'San Diego', code: 'US-SD'},
                                {cname: 'San Francisco', code: 'US-SF'}
                            ]
                        },
                        {
                            name: 'Florida',
                            cities: [
                                {cname: 'Jacksonville', code: 'US-JA'},
                                {cname: 'Miami', code: 'US-MI'},
                                {cname: 'Tampa', code: 'US-TA'},
                                {cname: 'Orlando', code: 'US-OR'}
                            ]
                        },
                        {
                            name: 'Texas',
                            cities: [
                                {cname: 'Austin', code: 'US-AU'},
                                {cname: 'Dallas', code: 'US-DA'},
                                {cname: 'Houston', code: 'US-HO'}
                            ]
                        }
                    ]
                }
            ]
        }
    },
    countryService: null,
    created() {
        this.countryService = new CountryService();
    },
    mounted() {
        this.countryService.getCountries().then(data => this.countries = data);
    },
    methods: {
        searchCountry(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.filteredCountries = [...this.countries];
                }
                else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        }
    }
}
</script>

<style lang="scss" scoped>
textarea {
    resize: none;
}
</style>