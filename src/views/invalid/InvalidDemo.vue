<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Invalid State</h1>
                <p>All form components have an invalid state style to display the validation errors.</p>
            </div>
            <AppInputStyleSwitch />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <div class="p-fluid p-grid">
                    <div class="p-field p-col-12 p-md-4">
                        <InputText id="inputtext" type="text" v-model="value1" placeholder="InputText" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <AutoComplete v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" placeholder="AutoComplete" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <Calendar id="calendar" v-model="value3" placeholder="Calendar" class="p-invalid" :showIcon="true" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <Chips id="chips" v-model="value4" placeholder="Chips" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <InputMask id="inputmask" v-model="value5" mask="99/99/9999" slotChar="mm/dd/yyyy" placeholder="InputMask" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <InputNumber id="inputnumber" v-model="value6" placeholder="InputNumber" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <CascadeSelect v-model="selectedCity" :options="cascadeCountries" optionLabel="cname" optionGroupLabel="name"
                            :optionGroupChildren="['states', 'cities']" placeholder="CascadeSelect" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <Dropdown id="dropdown" v-model="value7" :options="cities" optionLabel="name" placeholder="Dropdown" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <MultiSelect id="multiselect" v-model="value8" :options="cities" optionLabel="name" placeholder="MultiSelect" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <Textarea id="textarea" v-model="value9" rows="3" placeholder="Textarea" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <Password id="password" v-model="value10" placeholder="Password" class="p-invalid" />
                    </div>
                </div>
            </div>
        </div>

         <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
                    <div class="p-d-flex p-jc-end">
                        <LiveEditor name="InvalidDemo" :sources="sources" service="CountryService" data="countries" :components="['InputText', 'AutoComplete', 'Calendar', 'Chips', 'InputMask', 'InputNumber', 'CascadeSelect', 'Dropdown', 'MultiSelect', 'Textarea']" />
                    </div>
<pre v-code><code><template v-pre>
&lt;div class="p-fluid p-grid"&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;InputText id="inputtext" type="text" v-model="value1" placeholder="InputText" class="p-invalid" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;AutoComplete v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" placeholder="AutoComplete" class="p-invalid" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;Calendar id="calendar" v-model="value3" placeholder="Calendar" class="p-invalid" :showIcon="true" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;Chips id="chips" v-model="value4" placeholder="Chips" class="p-invalid" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;InputMask id="inputmask" v-model="value5" mask="99/99/9999" slotChar="mm/dd/yyyy" placeholder="InputMask" class="p-invalid" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;InputNumber id="inputnumber" v-model="value6" placeholder="InputNumber" class="p-invalid" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;CascadeSelect v-model="selectedCity" :options="cascadeCountries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" placeholder="CascadeSelect" class="p-invalid" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;Dropdown id="dropdown" v-model="value7" :options="cities" optionLabel="name" placeholder="Dropdown" class="p-invalid" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;MultiSelect id="multiselect" v-model="value8" :options="cities" optionLabel="name" placeholder="MultiSelect" class="p-invalid" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;Textarea id="textarea" v-model="value9" rows="3" placeholder="Textarea" class="p-invalid" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col-12 p-md-4"&gt;
        &lt;Password id="password" v-model="value10" placeholder="Password" class="p-invalid" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</code></pre>

<pre v-code.script><code>
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
import LiveEditor from '../liveeditor/LiveEditor';

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
            ],
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <div class="p-fluid p-grid">
                    <div class="p-field p-col-12 p-md-4">
                        <InputText id="inputtext" type="text" v-model="value1" placeholder="InputText" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <AutoComplete v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" placeholder="AutoComplete" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <Calendar id="calendar" v-model="value3" placeholder="Calendar" class="p-invalid" :showIcon="true" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <Chips id="chips" v-model="value4" placeholder="Chips" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <InputMask id="inputmask" v-model="value5" mask="99/99/9999" slotChar="mm/dd/yyyy" placeholder="InputMask" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <InputNumber id="inputnumber" v-model="value6" placeholder="InputNumber" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <CascadeSelect v-model="selectedCity" :options="cascadeCountries" optionLabel="cname" optionGroupLabel="name"
                            :optionGroupChildren="['states', 'cities']" placeholder="CascadeSelect" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <Dropdown id="dropdown" v-model="value7" :options="cities" optionLabel="name" placeholder="Dropdown" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <MultiSelect id="multiselect" v-model="value8" :options="cities" optionLabel="name" placeholder="MultiSelect" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <Textarea id="textarea" v-model="value9" rows="3" placeholder="Textarea" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <Password id="password" v-model="value10" placeholder="Password" class="p-invalid" />
                    </div>
                </div>
            </div>
        </div>
    </div>                    
</template>
<script>
import CountryService from '../service/CountryService';
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
}`
                }
            }
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
    },
    components: {
        LiveEditor
    }
}
</script>

<style lang="scss" scoped>
textarea {
    resize: none;
}
</style>