<template>
    <section class="landing-hero py-8 px-5 lg:px-8">
       <div class="flex flex-wrap">
            <div class="w-full xl:w-6 flex flex-column justify-content-center px-8 align-items-center xl:align-items-stretch">
                <h1 class="text-6xl font-bold text-center xl:text-left">The Most Complete UI Suite for <span class="font-bold text-primary">Vue.js</span></h1>
                <p class="section-detail xl:text-left text-center px-0 mt-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div>
                    <PrimeVueNuxtLink to="/installation" class="linkbox active font-semibold py-3 px-4"> Get Started <i class="pi pi-arrow-right ml-3"></i> </PrimeVueNuxtLink>
                </div>
            </div>
            <div class="w-full xl:w-6 pt-7 xl:pt-0 hidden md:block">
                <div class="flex">
                    <div class="flex flex-column w-6 gap-5 pt-8 pr-3">
                        <div class="box p-4">
                            <span class="text-secondary font-medium block mb-3">Balance</span>
                            <div class="flex flex-wrap lg:flex-nowrap justify-content-start gap-3">
                                <InputNumber v-model="value1" mode="currency" currency="USD" locale="en-US" class="w-full" inputClass="lg:w-6" />
                                <InputNumber v-model="value2" mode="currency" currency="USD" locale="en-US" class="w-full" inputClass="lg:w-6" />
                            </div>
                            <span class="text-secondary font-medium block mt-5 mb-3">Category</span>
                            <div class="flex justify-content-between flex-wrap gap-3">
                                <div class="flex align-items-center">
                                    <RadioButton id="category1" v-model="radioValue" value="C" name="radiovalue" @change="setCategory('C')" />
                                    <label for="category1" class="ml-2 font-medium">Clothing</label>
                                </div>
                                <div class="flex align-items-center">
                                    <RadioButton id="category2" v-model="radioValue" value="F" name="radiovalue" @change="setCategory('F')" />
                                    <label for="category2" class="ml-2 font-medium">Fitness</label>
                                </div>
                                <div class="flex align-items-center">
                                    <RadioButton id="category3" v-model="radioValue" value="E" name="radiovalue" @change="setCategory('E')" />
                                    <label for="category3" class="ml-2 font-medium">Electronics</label>
                                </div>
                            </div>
                            <span class="text-secondary font-medium block mt-5 mb-3">Order Date</span>
                            <Calendar v-model="dateValue" :showWeek="true" class="w-full" />
                        </div>
                        <div class="box p-4">
                            <Chart type="line" :data="chartData" :options="chartOptions" />
                        </div>
                        <div class="box p-4">
                            <div class="flex align-items-center">
                                <Chip label="Vue" class="mr-2 font-medium" />
                                <span class="font-medium">Typescript</span>
                                <InputSwitch v-model="switchValue" class="ml-auto"></InputSwitch>
                            </div>
                            <div class="mt-5 flex justify-content-center">
                                <SelectButton v-model="selectButtonValue" :options="selectButtonOptions" optionLabel="name" />
                            </div>
                            <div class="mt-5">
                                <Slider v-model="rangeValues" range class="w-full" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-column w-6 gap-5 pl-3">
                        <div class="box p-4">
                            <div class="surface-card mb-4 w-full text-center p-5" style="border-radius: '10px'">
                                <img src="https://primefaces.org/cdn/primevue/images/landing/brown-watch.png" alt="Watch" class="w-14rem" />
                            </div>
                            <div class="flex align-items-center mb-4">
                                <div class="flex flex-column">
                                    <span class="block font-semibold mb-1">Brown Watch</span>
                                    <span class="text-secondary text-sm">Premium Quality</span>
                                </div>
                                <span class="font-medium text-xl ml-auto">$12.45</span>
                            </div>
                            <Button label="Add to Cart" icon="pi pi-shopping-cart" outlined class="w-full"></Button>
                        </div>
                        <div class="box p-4 w-full">
                            <ul class="list-none p-0 m-0">
                                <li class="flex mb-3">
                                    <span class="mr-3">
                                        <img src="https://primefaces.org/cdn/primevue/images/landing/avatar.png" alt="Avatar" class="w-3rem h-3rem" />
                                    </span>
                                    <div class="flex flex-column">
                                        <span class="font-bold mb-2">Amanda Williams</span>
                                        <p class="m-0 text-secondary">Webmaster</p>
                                    </div>
                                </li>
                                <li class="flex">
                                    <a class="flex align-items-center p-3 w-full hover:surface-hover transition-colors transition-duration-150 cursor-pointer" style="border-radius: '10px'">
                                        <i class="pi pi-home text-xl mr-3"></i>
                                        <span class="flex flex-column">
                                            <span class="font-bold mb-1">Dashboard</span>
                                            <span class="m-0 text-secondary">Control Panel</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a class="flex align-items-center p-3 w-full hover:surface-hover transition-colors transition-duration-150 cursor-pointer" style="border-radius: '10px'">
                                        <i class="pi pi-envelope text-xl mr-3"></i>
                                        <span class="flex flex-column">
                                            <span class="font-bold mb-1">Inbox</span>
                                            <span class="m-0 text-secondary">View Messages</span>
                                        </span>
                                        <Badge value="3" class="ml-auto"></Badge>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a class="flex align-items-center p-3 w-full hover:surface-hover transition-colors transition-duration-150 cursor-pointer" style="border-radius: '10px'">
                                        <i class="pi pi-cog text-xl mr-3"></i>
                                        <span class="flex flex-column">
                                            <span class="font-bold mb-1">Profile</span>
                                            <span class="m-0 text-secondary">Account Settings</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="box p-4">
                            <TabMenu v-model:activeIndex="activeTabIndex" :model="items" />
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </section>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            value1: 240,
            value2: 356,
            category: 'C',
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Income',
                        data: [40, 59, 40, 50, 56, 40, 70],
                        fill: true,
                        borderColor: '#14B8A6',
                        tension: 0.4,
                        backgroundColor: 'rgba(20, 184, 166, .2)'
                    }
                ]
            },
            chartOptions: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            display: false
                        },
                        min: 0,
                        max: 100
                    },
                    x: {
                        ticks: {
                            display: false
                        }
                    }
                }
            },
            pbValue1: 15,
            pbValue2: 85,
            pbValue3: 50,
            pbValue4: 75,
            pbValue5: 60,
            activeTabIndex: 0,
            radioValue: 'C',
            nodes: null,
            switchValue: true,
            selectButtonValue: { name: 'Styled', value: 1 },
            dateValue: null,
            rangeValues: [20, 80],
            items: [
                { label: 'Home', icon: 'pi pi-fw pi-home' },
                { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
                { label: 'Settings', icon: 'pi pi-fw pi-cog' }
            ],
            selectButtonOptions: [
                { name: 'Styled', value: 1 },
                { name: 'Unstyled', value: 2 }
            ]
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    },
    methods: {
        setCategory(category) {
            this.category = category;
        }
    }
};
</script>

