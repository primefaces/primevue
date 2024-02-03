<template>
    <section class="landing-hero py-8 px-5 lg:px-8">
        <div class="flex flex-wrap">
            <div class="w-full xl:w-6 flex flex-column justify-content-center lg:pr-8 align-items-center xl:align-items-stretch">
                <a
                    href="https://tailwind.primevue.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="border-radius: 50px"
                    class="bg-yellow-300 border-1 border-yellow-400 text-yellow-900 py-1 px-3 xl:align-self-start font-semibold transition-colors transition-duration-300 hover:border-yellow-600 text-base sm:text-lg"
                    >🎉 Introducing the Tailwind Presets <i class="pi pi-arrow-right text-sm"></i
                ></a>
                <h1 class="text-6xl font-bold text-center xl:text-left">The Next-Gen UI Suite for <span class="font-bold text-primary">Vue.js</span></h1>
                <p class="section-detail xl:text-left text-center px-0 mt-0 mb-5">
                    Elevate your web applications with PrimeVue's comprehensive suite of customizable, feature-rich UI components. With PrimeVue, turning your development vision into reality has never been easier.
                </p>
                <div class="flex align-items-center gap-3">
                    <PrimeVueNuxtLink to="/setup" class="linkbox active font-semibold py-3 px-4">
                        <span>Get Started</span>
                        <i class="pi pi-arrow-right ml-3"></i>
                    </PrimeVueNuxtLink>
                    <a href="https://github.com/primefaces/primevue" target="_blank" rel="noopener noreferrer" class="linkbox font-semibold py-3 px-4">
                        <span>Give a Star</span>
                        <i class="pi pi-star-fill ml-3 text-yellow-500"></i>
                    </a>
                </div>
            </div>
            <div class="w-full xl:w-6 pt-7 xl:pt-0 hidden md:block">
                <div class="flex">
                    <div class="flex flex-column w-6 gap-5 pt-8 pr-3">
                        <div class="box p-4 fadein animation-duration-500">
                            <div class="flex gap-2">
                                <div class="w-6rem flex-shrink-0">
                                    <span class="text-secondary font-medium block mb-3">Amount</span>
                                    <InputNumber v-model="value1" mode="currency" currency="USD" locale="en-US" class="w-full" inputClass="w-full" />
                                </div>
                                <div class="flex-auto" style="width: 1%">
                                    <span class="text-secondary font-semibold block mb-3">Beneficiary</span>
                                    <Dropdown v-model="user" :options="users" optionLabel="name" placeholder="Select a User" class="w-full">
                                        <template #option="slotProps">
                                            <div class="flex align-items-center gap-2">
                                                <img :alt="slotProps.option.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`" width="28" />
                                                <span>{{ slotProps.option.name }}</span>
                                            </div>
                                        </template>
                                    </Dropdown>
                                </div>
                            </div>
                            <span class="text-secondary font-medium block mt-5 mb-3">Account</span>
                            <div class="flex flex-wrap gap-3">
                                <div class="flex align-items-center">
                                    <RadioButton v-model="radioValue" inputId="category1" value="S" name="radiovalue" @change="setCategory('S')" />
                                    <label for="category1" class="ml-2 font-medium">Savings</label>
                                </div>
                                <div class="flex align-items-center">
                                    <RadioButton v-model="radioValue" inputId="category2" value="C" name="radiovalue" @change="setCategory('C')" />
                                    <label for="category2" class="ml-2 font-medium">Checking</label>
                                </div>
                            </div>
                            <span class="text-secondary font-medium block mt-5 mb-3">Date</span>
                            <Calendar v-model="dateValue" :showWeek="true" class="w-full" showIcon iconDisplay="input" />
                        </div>
                        <div class="box p-4 fadein animation-duration-500">
                            <Chart type="line" :data="chartData" :options="chartOptions" />
                        </div>
                        <div class="box p-4 fadein animation-duration-500">
                            <div class="flex align-items-center">
                                <Chip label="Vue" class="mr-2 font-medium" />
                                <Chip label="Typescript" class="mr-2 font-medium" />
                                <InputSwitch v-model="switchValue" class="ml-auto"></InputSwitch>
                            </div>
                            <div class="mt-5 flex justify-content-center">
                                <SelectButton v-model="selectButtonValue" :options="selectButtonOptions" optionLabel="name" />
                            </div>
                            <div class="mt-5 pt-1 pb-2">
                                <Slider v-model="rangeValues" range class="w-full" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-column w-6 gap-5 pl-3">
                        <div class="box p-4 fadein animation-duration-500">
                            <div class="surface-card mb-4 w-full text-center p-5" style="border-radius: '10px'">
                                <img src="https://primefaces.org/cdn/primevue/images/landing/air-jordan.png" alt="Watch" class="w-10rem" />
                            </div>
                            <div class="flex align-items-center mb-4">
                                <div class="flex flex-column">
                                    <span class="block font-semibold mb-1">Sneaker</span>
                                    <span class="text-secondary text-sm">Premium Quality</span>
                                </div>
                                <span class="font-medium text-xl ml-auto">$990</span>
                            </div>
                            <Button label="Add to Cart" icon="pi pi-shopping-cart" outlined class="w-full"></Button>
                        </div>
                        <div class="box p-4 fadein animation-duration-500">
                            <ul class="list-none p-0 m-0">
                                <li class="flex align-items-center mb-3">
                                    <span class="mr-3">
                                        <img src="https://primefaces.org/cdn/primevue/images/landing/avatar.png" alt="Avatar" class="w-3rem h-3rem" />
                                    </span>
                                    <div class="flex flex-column">
                                        <span class="font-bold mb-1">Amanda Williams</span>
                                        <span class="text-secondary">Administrator</span>
                                    </div>
                                </li>
                                <li class="flex">
                                    <a class="flex align-items-center p-3 border-round w-full hover:surface-hover transition-colors transition-duration-150 cursor-pointer" style="border-radius: '10px'">
                                        <i class="pi pi-home text-xl mr-3"></i>
                                        <span class="flex flex-column">
                                            <span class="font-bold mb-1">Dashboard</span>
                                            <span class="m-0 text-secondary">Control Panel</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a class="flex align-items-center p-3 border-round w-full hover:surface-hover transition-colors transition-duration-150 cursor-pointer" style="border-radius: '10px'">
                                        <i class="pi pi-envelope text-xl mr-3"></i>
                                        <span class="flex flex-column">
                                            <span class="font-bold mb-1">Inbox</span>
                                            <span class="m-0 text-secondary">View Messages</span>
                                        </span>
                                        <Badge value="3" class="ml-auto"></Badge>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="box p-4 fadein animation-duration-500">
                            <div class="flex justify-content-between align-items-center mb-5">
                                <span class="inline-flex align-items-center">
                                    <Checkbox id="cbox" v-model="checked" :binary="true" />
                                    <label for="cbox" class="ml-2">Confirm</label>
                                </span>
                                <SplitButton
                                    label="Save"
                                    icon="pi pi-plus"
                                    :model="splitButtonItems"
                                    outlined
                                    :pt="{
                                        button: {
                                            root: 'p-2'
                                        },
                                        menuButton: {
                                            width: 'auto',
                                            root: 'p-2'
                                        },
                                        menu: {
                                            root: {
                                                style: 'width: 10rem; min-width: auto'
                                            },
                                            action: 'p-2'
                                        }
                                    }"
                                />
                            </div>
                            <TabMenu v-model:activeIndex="activeTabIndex" :model="items" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';
import { NodeService } from '@/service/NodeService';

export default {
    themeChangeListener: null,
    data() {
        return {
            value1: 24,
            category: 'C',
            chartData: {},
            chartOptions: {},
            pbValue1: 15,
            pbValue2: 85,
            pbValue3: 50,
            pbValue4: 75,
            pbValue5: 60,
            activeTabIndex: 0,
            radioValue: 'S',
            nodes: null,
            switchValue: true,
            selectButtonValue: { name: 'Styled', value: 1 },
            dateValue: null,
            rangeValues: [20, 80],
            checked: false,
            splitButtonItems: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                }
            ],
            items: [
                { label: 'Home', icon: 'pi pi-fw pi-home' },
                { label: 'Inbox', icon: 'pi pi-fw pi-inbox' }
            ],
            selectButtonOptions: [
                { name: 'Styled', value: 1 },
                { name: 'Unstyled', value: 2 }
            ],
            user: null,
            users: [
                { name: 'Amy Elsner', image: 'amyelsner.png' },
                { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
                { name: 'Onyama Limba', image: 'onyamalimba.png' }
            ]
        };
    },
    beforeUnmount() {
        EventBus.off('theme-change-complete', this.themeChangeListener);
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();

        this.themeChangeListener = () => {
            this.chartOptions = this.setChartOptions();
        };

        EventBus.on('theme-change-complete', this.themeChangeListener);

        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    },
    methods: {
        setCategory(category) {
            this.category = category;
        },
        setChartData() {
            return {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: 'Annual Income',
                        data: [40, 59, 40, 50, 56],
                        fill: true,
                        borderColor: '#10b981',
                        tension: 0.4,
                        backgroundColor: 'rgba(16, 185, 129, .2)'
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            return {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: textColorSecondary
                        },
                        min: 0,
                        max: 100,
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
        }
    }
};
</script>
