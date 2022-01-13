<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Float Label</h1>
                <p>All input text components support floating labels.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <div class="p-fluid grid">
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <InputText id="inputtext" type="text" v-model="value1" />
                            <label for="inputtext">InputText</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText id="inputtext-left" type="text" v-model="valueIconLeft" />
                            <label for="inputtext-left">Left Icon</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label p-input-icon-right">
                            <i class="pi pi-search" />
                            <InputText id="inputtext-right" type="text" v-model="valueIconRight" />
                            <label for="inputtext-right">Right Icon</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <AutoComplete v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />
                            <label for="autocomplete">AutoComplete</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <Calendar id="calendar" v-model="value3" />
                            <label for="calendar">Calendar</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <Chips id="chips" v-model="value4" />
                            <label for="chips">Chips</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <InputMask id="inputmask" v-model="value5" mask="99/99/9999" slotChar="mm/dd/yyyy" />
                            <label for="inputmask">InputMask</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <InputNumber id="inputnumber" v-model="value6" />
                            <label for="inputnumber">InputNumber</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
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
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <CascadeSelect id="cascadeSelect" v-model="selectedCity" :options="cascadeCountries" optionLabel="cname" optionGroupLabel="name"
                                :optionGroupChildren="['states', 'cities']" />
                            <label for="multiselect">CascadeSelect</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <Dropdown id="dropdown" v-model="value8" :options="cities" optionLabel="name" />
                            <label for="dropdown">Dropdown</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <MultiSelect id="multiselect" v-model="value9" :options="cities" optionLabel="name" />
                            <label for="multiselect">MultiSelect</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <TreeSelect v-model="selectedNode" :options="nodes"></TreeSelect>
                            <label for="treeselect">TreeSelect</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <Password id="password" v-model="value11" />
                            <label for="password">Password</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <Textarea id="textarea" v-model="value10" rows="3" />
                            <label for="textarea">Textarea</label>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <AppDoc name="FloatLabelDemo" :sources="sources" :service="['CountryService', 'NodeService']" :data="['countries', 'treenodes']" github="floatlabel/FloatLabelDemo.vue" />
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
            value11: null,
            valueIconLeft: null,
            valueIconRight: null,
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
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <div class="p-fluid grid">
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <InputText id="inputtext" type="text" v-model="value1" />
                        <label for="inputtext">InputText</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText id="inputtext-left" type="text" v-model="valueIconLeft" />
                        <label for="inputtext-left">Left Icon</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label p-input-icon-right">
                        <i class="pi pi-search" />
                        <InputText id="inputtext-right" type="text" v-model="valueIconRight" />
                        <label for="inputtext-right">Right Icon</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <AutoComplete v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />
                        <label for="autocomplete">AutoComplete</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <Calendar id="calendar" v-model="value3" />
                        <label for="calendar">Calendar</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <Chips id="chips" v-model="value4" />
                        <label for="chips">Chips</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <InputMask id="inputmask" v-model="value5" mask="99/99/9999" slotChar="mm/dd/yyyy" />
                        <label for="inputmask">InputMask</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <InputNumber id="inputnumber" v-model="value6" />
                        <label for="inputnumber">InputNumber</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
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
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <CascadeSelect id="cascadeSelect" v-model="selectedCity" :options="cascadeCountries" optionLabel="cname" optionGroupLabel="name"
                            :optionGroupChildren="['states', 'cities']" />
                        <label for="multiselect">CascadeSelect</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <Dropdown id="dropdown" v-model="value8" :options="cities" optionLabel="name" />
                        <label for="dropdown">Dropdown</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <MultiSelect id="multiselect" v-model="value9" :options="cities" optionLabel="name" />
                        <label for="multiselect">MultiSelect</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <TreeSelect v-model="selectedNode" :options="nodes"></TreeSelect>
                        <label for="treeselect">TreeSelect</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <Password id="password" v-model="value11" />
                        <label for="password">Password</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <Textarea id="textarea" v-model="value10" rows="3" />
                        <label for="textarea">Textarea</label>
                    </span>
                </div>
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
            value11: null,
            valueIconLeft: null,
            valueIconRight: null,
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
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <div class="p-fluid grid">
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <InputText id="inputtext" type="text" v-model="value1" />
                        <label for="inputtext">InputText</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText id="inputtext-left" type="text" v-model="valueIconLeft" />
                        <label for="inputtext-left">Left Icon</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label p-input-icon-right">
                        <i class="pi pi-search" />
                        <InputText id="inputtext-right" type="text" v-model="valueIconRight" />
                        <label for="inputtext-right">Right Icon</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <AutoComplete v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />
                        <label for="autocomplete">AutoComplete</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <Calendar id="calendar" v-model="value3" />
                        <label for="calendar">Calendar</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <Chips id="chips" v-model="value4" />
                        <label for="chips">Chips</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <InputMask id="inputmask" v-model="value5" mask="99/99/9999" slotChar="mm/dd/yyyy" />
                        <label for="inputmask">InputMask</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <InputNumber id="inputnumber" v-model="value6" />
                        <label for="inputnumber">InputNumber</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
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
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <CascadeSelect id="cascadeSelect" v-model="selectedCity" :options="cascadeCountries" optionLabel="cname" optionGroupLabel="name"
                            :optionGroupChildren="['states', 'cities']" />
                        <label for="multiselect">CascadeSelect</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <Dropdown id="dropdown" v-model="value8" :options="cities" optionLabel="name" />
                        <label for="dropdown">Dropdown</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <MultiSelect id="multiselect" v-model="value9" :options="cities" optionLabel="name" />
                        <label for="multiselect">MultiSelect</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <TreeSelect v-model="selectedNode" :options="nodes"></TreeSelect>
                        <label for="treeselect">TreeSelect</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <Password id="password" v-model="value11" />
                        <label for="password">Password</label>
                    </span>
                </div>
                <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                        <Textarea id="textarea" v-model="value10" rows="3" />
                        <label for="textarea">Textarea</label>
                    </span>
                </div>
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
        const value11 = ref();
        const valueIconLeft = ref();
        const valueIconRight = ref();
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
        };

        return { countryService, countries, filteredCountries, cities, value1, value2, value3, value4, value5, value6, 
            value7, value8, value9, value10, value11, valueIconLeft, valueIconRight, selectedCity, cascadeCountries, searchCountry,
            nodes, selectedNode }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
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
            <div class="card">
                <div class="p-fluid grid">
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <p-inputtext id="inputtext" type="text" v-model="value1"></p-inputtext>
                            <label for="inputtext">InputText</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label p-input-icon-left">
                            <i class="pi pi-search"></i>
                            <p-inputtext id="inputtext-left" type="text" v-model="valueIconLeft"></p-inputtext>
                            <label for="inputtext-left">Left Icon</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                    <span class="p-float-label p-input-icon-right">
                            <i class="pi pi-search"></i>
                            <p-inputtext id="inputtext-right" type="text" v-model="valueIconRight"></p-inputtext>
                            <label for="inputtext-right">Right Icon</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <p-autocomplete v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name"></p-autocomplete>
                            <label for="autocomplete">AutoComplete</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <p-calendar id="calendar" v-model="value3"></p-calendar>
                            <label for="calendar">Calendar</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <p-chips id="chips" v-model="value4"></p-chips>
                            <label for="chips">Chips</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <p-inputmask id="inputmask" v-model="value5" mask="99/99/9999" slot-char="mm/dd/yyyy"></p-inputmask>
                            <label for="inputmask">InputMask</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <p-inputnumber id="inputnumber" v-model="value6"></p-inputnumber>
                            <label for="inputnumber">InputNumber</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">
                                <i class="pi pi-user"></i>
                            </span>
                            <span class="p-float-label">
                                <p-inputtext id="inputgroup" type="text" v-model="value7" />
                                <label for="inputgroup">InputGroup</label>
                            </span>
                        </div>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <p-cascadeselect id="cascadeSelect" v-model="selectedCity" :options="cascadeCountries" option-label="cname" option-group-label="name"
                                :option-group-children="['states', 'cities']"></p-cascadeselect>
                            <label for="multiselect">CascadeSelect</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <p-dropdown id="dropdown" v-model="value8" :options="cities" option-label="name"></p-dropdown>
                            <label for="dropdown">Dropdown</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <p-multiselect id="multiselect" v-model="value9" :options="cities" option-label="name">
                            <label for="multiselect">MultiSelect</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <p-treeselect v-model="selectedNode" :options="nodes"></p-treeselect>
                            <label for="treeselect">TreeSelect</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <p-password id="password" v-model="value11"></p-password>
                            <label for="password">Password</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-4">
                        <span class="p-float-label">
                            <p-textarea id="textarea" v-model="value10" rows="3"></p-textarea>
                            <label for="textarea">Textarea</label>
                        </span>
                    </div>
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
                const value11 = ref();
                const valueIconLeft = ref();
                const valueIconRight = ref();
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
                };

                return { countryService, countries, filteredCountries, cities, value1, value2, value3, value4, value5, value6, 
                    value7, value8, value9, value10, value11, valueIconLeft, valueIconRight, selectedCity, cascadeCountries, searchCountry,
                    nodes, selectedNode }
            },
            components: {
                "p-inputtext": primevue.inputtext,
                "p-inputnumber": primevue.inputnumber,
                "p-autocomplete": primevue.autocomplete,
                "p-calendar": primevue.calendar,
                "p-chips": primevue.chips,
                "p-inputmask": primevue.inputmask,
                "p-cascadeselect": primevue.cascadeselect,
                "p-dropdown": primevue.dropdown,
                "p-multiselect": primevue.multiselect,
                "p-treeselect": primevue.treeselect,
                "p-password": primevue.password,
                "p-textarea": primevue.textarea
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