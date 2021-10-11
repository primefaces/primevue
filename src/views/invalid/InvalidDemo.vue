<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Invalid State</h1>
                <p>All form components have an invalid state style to display the validation errors.</p>
            </div>
            <AppDemoActions />
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
                        <TreeSelect id="treeselect" v-model="selectedNode" :options="nodes" placeholder="TreeSelect" class="p-invalid"></TreeSelect>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <Password id="password" v-model="value10" placeholder="Password" class="p-invalid" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <Textarea id="textarea" v-model="value9" rows="3" placeholder="Textarea" class="p-invalid" />
                    </div>
                </div>
            </div>
        </div>

        <AppDoc name="InvalidDemo" :sources="sources" :service="['CountryService', 'NodeService']" :data="['countries', 'treenodes']" github="invalid/InvalidDemo.vue" />
    </div>
</template>

<script>
import CountryService from '../../service/CountryService';
import NodeService from '../../service/NodeService';

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
            nodes: null,
            selectedNode: null,
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
                'options-api': {
                    tabName :'Options API Source',
                    content: `
<template>
    <div>
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
                <TreeSelect id="treeselect" v-model="selectedNode" :options="nodes" placeholder="TreeSelect" class="p-invalid"></TreeSelect>
            </div>
            <div class="p-field p-col-12 p-md-4">
                <Password id="password" v-model="value10" placeholder="Password" class="p-invalid" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <Textarea id="textarea" v-model="value9" rows="3" placeholder="Textarea" class="p-invalid" />
            </div>
        </div>
    </div>                   
</template>

<script>
import CountryService from './service/CountryService';
import NodeService from './service/NodeService';

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
            nodes: null,
            selectedNode: null,
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
    nodeService: null,
    created() {
        this.countryService = new CountryService();
        this.nodeService = new NodeService();
    },
    mounted() {
        this.countryService.getCountries().then(data => this.countries = data);
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
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
<\\/script>
`
                },
                'composition-api': {
                    tabName :'Composition API Source',
                    content: `
<template>
    <div>
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
                <TreeSelect id="treeselect" v-model="selectedNode" :options="nodes" placeholder="TreeSelect" class="p-invalid"></TreeSelect>
            </div>
            <div class="p-field p-col-12 p-md-4">
                <Password id="password" v-model="value10" placeholder="Password" class="p-invalid" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <Textarea id="textarea" v-model="value9" rows="3" placeholder="Textarea" class="p-invalid" />
            </div>
        </div>
    </div>                   
</template>
<script>
import { ref, onMounted } from 'vue';
import CountryService from './service/CountryService';
import NodeService from './service/NodeService';

export default {
    setup() {
        onMounted(() => {
            countryService.value.getCountries().then(data => countries.value = data);
            nodeService.value.getTreeNodes().then(data => nodes.value = data);
        })
        const countryService = ref(new CountryService());
        const nodeService = ref(new NodeService());
        const countries = ref();
        const filteredCountries = ref();
        const cities = ref([
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ]);
        const value1 = ref();
        const value2 = ref();
        const value3 = ref();
        const value4 = ref();
        const value5 = ref();
        const value6 = ref();
        const value7 = ref();
        const value8 = ref();
        const value9 = ref();
        const value10 = ref();
        const selectedCity = ref();
        const selectedNode = ref();
        const nodes = ref();
        const cascadeCountries = ref([
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
        ]);

        const searchCountry = (event) => {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    filteredCountries.value = [...countries.value];
                }
                else {
                    filteredCountries.value = countries.value.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        }

        return { countryService, countries, filteredCountries, cities, value1, value2, value3, value4, 
            value5, value6, value7, value8, value9, value10, selectedCity, cascadeCountries, searchCountry,
            nodes, selectedNode  }

    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName :'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/autocomplete/autocomplete.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/calendar/calendar.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/chips/chips.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/inputmask/inputmask.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/cascadeselect/cascadeselect.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/multiselect/multiselect.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/treeselect/treeselect.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/password/password.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/textarea/textarea.min.js"><\\/script>
        <script src="./CountryService.js"><\\/script>
        <script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="p-fluid p-grid">
                <div class="p-field p-col-12 p-md-4">
                    <p-inputtext id="inputtext" type="text" v-model="value1" placeholder="InputText" class="p-invalid"></p-inputtext>
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <p-autocomplete v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" placeholder="AutoComplete" class="p-invalid"></p-autocomplete>
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <p-calendar id="calendar" v-model="value3" placeholder="Calendar" class="p-invalid" :show-icon="true"></p-calendar>
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <p-chips id="chips" v-model="value4" placeholder="Chips" class="p-invalid"></p-chips>
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <p-inputmask id="inputmask" v-model="value5" mask="99/99/9999" slot-char="mm/dd/yyyy" placeholder="InputMask" class="p-invalid"></p-inputmask>
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <p-inputnumber id="inputnumber" v-model="value6" placeholder="InputNumber" class="p-invalid"></p-inputnumber>
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <p-cascadeselect v-model="selectedCity" :options="cascadeCountries" option-label="cname" option-group-label="name"
                        :option-group-children="['states', 'cities']" placeholder="CascadeSelect" class="p-invalid"></p-cascadeselect>
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <p-dropdown id="dropdown" v-model="value7" :options="cities" option-label="name" placeholder="Dropdown" class="p-invalid"></p-dropdown>
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <p-multiselect id="multiselect" v-model="value8" :options="cities" option-label="name" placeholder="MultiSelect" class="p-invalid"></p-multiselect>
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <p-treeselect id="treeselect" v-model="selectedNode" :options="nodes" placeholder="TreeSelect" class="p-invalid"></p-treeselect>
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <p-password id="password" v-model="value10" placeholder="Password" class="p-invalid"></p-password>
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <p-textarea id="textarea" v-model="value9" rows="3" placeholder="Textarea" class="p-invalid"></p-textarea>
                </div>
            </div>
        </div>                   

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    countryService.value.getCountries().then(data => countries.value = data);
                    nodeService.value.getTreeNodes().then(data => nodes.value = data);
                })
                const countryService = ref(new CountryService());
                const nodeService = ref(new NodeService());
                const countries = ref();
                const filteredCountries = ref();
                const cities = ref([
                    {name: 'New York', code: 'NY'},
                    {name: 'Rome', code: 'RM'},
                    {name: 'London', code: 'LDN'},
                    {name: 'Istanbul', code: 'IST'},
                    {name: 'Paris', code: 'PRS'}
                ]);
                const value1 = ref();
                const value2 = ref();
                const value3 = ref();
                const value4 = ref();
                const value5 = ref();
                const value6 = ref();
                const value7 = ref();
                const value8 = ref();
                const value9 = ref();
                const value10 = ref();
                const selectedCity = ref();
                const selectedNode = ref();
                const nodes = ref();
                const cascadeCountries = ref([
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
                ]);

                const searchCountry = (event) => {
                    setTimeout(() => {
                        if (!event.query.trim().length) {
                            filteredCountries.value = [...countries.value];
                        }
                        else {
                            filteredCountries.value = countries.value.filter((country) => {
                                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                            });
                        }
                    }, 250);
                }

                return { countryService, countries, filteredCountries, cities, value1, value2, value3, value4, 
                    value5, value6, value7, value8, value9, value10, selectedCity, cascadeCountries, searchCountry,
                    nodes, selectedNode  }

            },
            components: {
                "p-inputtext": primevue.inputtext,
                "p-autocomplete": primevue.autocomplete,
                "p-calendar": primevue.calendar,
                "p-chips": primevue.chips,
                "p-inputmask": primevue.inputmask,
                "p-inputnumber": primevue.inputnumber,
                "p-cascadeselect": primevue.cascadeselect,
                "p-dropdown": primevue.dropdown,
                "p-multiselect": primevue.multiselect,
                "p-treeselect": primevue.treeselect,
                "p-textarea": primevue.textarea,
                "p-password": primevue.password
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

`
                }
            }
        }
    },
    countryService: null,
    nodeService: null,
    created() {
        this.countryService = new CountryService();
        this.nodeService = new NodeService();
    },
    mounted() {
        this.countryService.getCountries().then(data => this.countries = data);
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
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