<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Dropdown</h1>
                <p>Dropdown is used to select an item from a list of options.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" optionValue="code" placeholder="Select a City" />

                <h5>Editable</h5>
                <Dropdown v-model="selectedCity2" :options="cities" optionLabel="name" :editable="true"/>

                <h5>Grouped</h5>
                <Dropdown v-model="selectedGroupedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items">
                    <template #optiongroup="slotProps">
                        <div class="flex align-items-center country-item">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" width="18" />
                            <div>{{slotProps.option.label}}</div>
                        </div>
                    </template>
                </Dropdown>

                <h5>Advanced with Templating, Filtering and Clear Icon</h5>
                <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" :filter="true" placeholder="Select a Country" :showClear="true">
                    <template #value="slotProps">
                        <div class="country-item country-item-value" v-if="slotProps.value">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.value.code.toLowerCase()" />
                            <div>{{slotProps.value.name}}</div>
                        </div>
                        <span v-else>
                            {{slotProps.placeholder}}
                        </span>
                    </template>
                    <template #option="slotProps">
                        <div class="country-item">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" />
                            <div>{{slotProps.option.name}}</div>
                        </div>
                    </template>
                </Dropdown>

                <h5>Loading State</h5>
                <Dropdown placeholder="Loading..." loading></Dropdown>

                <h5>Virtual Scroll (100000 Items)</h5>
                <Dropdown v-model="selectedItem1" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Item"></Dropdown>

                <h5>Virtual Scroll (100000 Items) and Lazy</h5>
                <Dropdown v-model="selectedItem2" :options="lazyItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }" placeholder="Select Item">
                    <template v-slot:loader="{ options }">
                        <div class="flex align-items-center p-2" style="height: 38px" >
                            <Skeleton :width="options.even ? '60%' : '50%'" height="1rem" />
                        </div>
                    </template>
                </Dropdown>
            </div>
        </div>

        <DropdownDoc/>
    </div>
</template>

<script>
import DropdownDoc from './DropdownDoc';

export default {
    data() {
        return {
            selectedCity1: null,
            selectedCity2: null,
            selectedCountry: null,
            selectedGroupedCity: null,
            selectedItem1: null,
            selectedItem2: null,
            loading: false,
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            countries: [
                {name: 'Australia', code: 'AU'},
                {name: 'Brazil', code: 'BR'},
                {name: 'China', code: 'CN'},
                {name: 'Egypt', code: 'EG'},
                {name: 'France', code: 'FR'},
                {name: 'Germany', code: 'DE'},
                {name: 'India', code: 'IN'},
                {name: 'Japan', code: 'JP'},
                {name: 'Spain', code: 'ES'},
                {name: 'United States', code: 'US'}
            ],
            groupedCities: [{
                label: 'Germany', code: 'DE',
                items: [
                    {label: 'Berlin', value: 'Berlin'},
                    {label: 'Frankfurt', value: 'Frankfurt'},
                    {label: 'Hamburg', value: 'Hamburg'},
                    {label: 'Munich', value: 'Munich'}
                ]
            },
            {
                label: 'USA', code: 'US',
                items: [
                    {label: 'Chicago', value: 'Chicago'},
                    {label: 'Los Angeles', value: 'Los Angeles'},
                    {label: 'New York', value: 'New York'},
                    {label: 'San Francisco', value: 'San Francisco'}
                ]
            },
            {
                label: 'Japan', code: 'JP',
                items: [
                    {label: 'Kyoto', value: 'Kyoto'},
                    {label: 'Osaka', value: 'Osaka'},
                    {label: 'Tokyo', value: 'Tokyo'},
                    {label: 'Yokohama', value: 'Yokohama'}
                ]
            }],
            items: Array.from({ length: 100000 }, (_, i) => ({ label: `Item #${i}`, value: i })),
            lazyItems: Array.from({ length: 100000 })
        }
    },
    loadLazyTimeout: null,
    methods: {
        onLazyLoad(event) {
            this.loading = true;

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //imitate delay of a backend call
            this.loadLazyTimeout = setTimeout(() => {
                const { first, last } = event;
                const lazyItems = [...this.lazyItems];

                for (let i = first; i < last; i++) {
                    lazyItems[i] = { label: `Item #${i}`, value: i };
                }

                this.lazyItems = lazyItems;
                this.loading = false;
            }, Math.random() * 1000 + 250);
        }
    },
    components: {
        'DropdownDoc': DropdownDoc
    }
}
</script>

<style lang="scss" scoped>
.p-dropdown {
    width: 14rem;
}

.country-item-value {
    img.flag {
        width: 17px;
    }
}
</style>
