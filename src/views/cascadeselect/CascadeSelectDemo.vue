<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>CascadeSelect</h1>
                <p>CascadeSelect displays a nested structure of options.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <CascadeSelect v-model="selectedCity1" :options="countries" optionLabel="cname" optionGroupLabel="name"
                        :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" />

                <h5>Templating</h5>
                <CascadeSelect v-model="selectedCity2" :options="countries" optionLabel="cname" optionGroupLabel="name"
                        :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City">
                    <template #option="slotProps">
                        <div class="country-item">
                            <img v-if="slotProps.option.states" src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" />
                            <Icon v-if="slotProps.option.cities" tag="i" class="p-mr-2" icon="compass" />
                            <Icon v-if="slotProps.option.cname" tag="i" class="p-mr-2" icon="map-marker" />
                            <span>{{slotProps.option.cname || slotProps.option.name}}</span>
                        </div>
                    </template>
                </CascadeSelect>

                <h5>Loading State</h5>
                <CascadeSelect placeholder="Loading..." loading style="min-width: 14rem"></CascadeSelect>
            </div>
        </div>

        <CascadeSelectDoc />
    </div>
</template>

<script>
import CascadeSelectDoc from './CascadeSelectDoc';
import Icon from 'primevue/icon';

export default {
    data() {
        return {
            selectedCity1: null,
            selectedCity2: null,
            countries: [
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
    components: {
        'CascadeSelectDoc': CascadeSelectDoc,
        'Icon': Icon
    }
}
</script>
