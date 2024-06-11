<template>
    <section class="landing-hero py-20 px-8 lg:px-20">
        <div class="flex flex-wrap">
            <div class="w-full xl:w-6/12 flex flex-col justify-center lg:pr-20 items-center xl:items-stretch">
                <h1 class="text-5xl font-bold text-center xl:text-left leading-tight">The Next-Gen UI Suite for <span class="font-bold text-primary">Vue.js</span></h1>
                <p class="xl:text-left text-center px-0 mt-0 mb-8 text-surface-500 dark:text-surface-400 font-medium text-xl leading-relaxed">
                    Enhance your web applications with PrimeVue's comprehensive suite of customizable, feature-rich UI components. With PrimeVue, turning your development vision into reality has never been easier.
                </p>
                <div class="flex items-center gap-4">
                    <PrimeVueNuxtLink to="/setup" class="linkbox linkbox-primary">
                        <span>Get Started</span>
                        <i class="pi pi-arrow-right ml-4"></i>
                    </PrimeVueNuxtLink>
                    <a href="https://github.com/primefaces/primevue" target="_blank" rel="noopener noreferrer" class="linkbox">
                        <span>Give a Star</span>
                        <i class="pi pi-star-fill ml-4 text-yellow-500"></i>
                    </a>
                </div>
            </div>
            <div class="w-full xl:w-6/12 pt-16 xl:pt-0 hidden md:block">
                <div class="flex">
                    <div class="flex flex-col w-6/12 gap-8 pt-20 pr-4">
                        <div class="box p-6 animate-fadein animate-duration-500">
                            <div class="flex gap-2">
                                <div class="w-24 shrink-0">
                                    <span class="text-surface-500 dark:text-surface-400 font-medium block mb-4">Amount</span>
                                    <InputNumber v-model="value1" mode="currency" currency="USD" locale="en-US" class="w-full" inputClass="w-full" />
                                </div>
                                <div class="flex-auto" style="width: 1%">
                                    <span class="text-surface-500 dark:text-surface-400 font-semibold block mb-4">Beneficiary</span>
                                    <Select v-model="user" :options="users" optionLabel="name" placeholder="Select a User" class="w-full">
                                        <template #option="slotProps">
                                            <div class="flex items-center gap-2">
                                                <img :alt="slotProps.option.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`" width="28" />
                                                <span>{{ slotProps.option.name }}</span>
                                            </div>
                                        </template>
                                    </Select>
                                </div>
                            </div>
                            <span class="text-surface-500 dark:text-surface-400 font-medium block mt-8 mb-4">Account</span>
                            <div class="flex flex-wrap gap-4">
                                <div class="flex items-center">
                                    <RadioButton v-model="radioValue" inputId="category1" value="S" name="radiovalue" @change="setCategory('S')" />
                                    <label for="category1" class="ml-2 font-medium">Savings</label>
                                </div>
                                <div class="flex items-center">
                                    <RadioButton v-model="radioValue" inputId="category2" value="C" name="radiovalue" @change="setCategory('C')" />
                                    <label for="category2" class="ml-2 font-medium">Checking</label>
                                </div>
                            </div>
                            <span class="text-surface-500 dark:text-surface-400 font-medium block mt-8 mb-4">Date</span>
                            <DatePicker v-model="dateValue" :showWeek="true" class="w-full" showIcon iconDisplay="input" />
                        </div>
                        <div class="box p-6 animate-fadein animate-duration-500">
                            <Chart type="line" :data="chartData" :options="chartOptions" />
                        </div>
                        <div class="box p-6 animate-fadein animate-duration-500">
                            <div class="flex items-center">
                                <Chip label="Vue" class="mr-2 font-medium" />
                                <Chip label="Typescript" class="mr-2 font-medium" />
                                <ToggleSwitch v-model="switchValue" class="ml-auto"></ToggleSwitch>
                            </div>
                            <div class="mt-8 flex justify-center">
                                <SelectButton v-model="selectButtonValue" :options="selectButtonOptions" optionLabel="name" />
                            </div>
                            <div class="mt-8 pt-1 pb-2">
                                <Slider v-model="rangeValues" range class="w-full" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-6/12 gap-8 pl-4">
                        <div class="box p-6 animate-fadein animate-duration-500">
                            <div class="mb-6 w-full text-center p-8" style="border-radius: '10px'">
                                <img src="https://primefaces.org/cdn/primevue/images/landing/air-jordan-noir.png" alt="Watch" class="w-40" />
                            </div>
                            <div class="flex items-center mb-6">
                                <div class="flex flex-col">
                                    <span class="block font-semibold mb-1">Sneaker</span>
                                    <span class="text-surface-500 dark:text-surface-400 text-sm">Premium Quality</span>
                                </div>
                                <span class="font-medium text-xl ml-auto">$990</span>
                            </div>
                            <Button label="Add to Cart" icon="pi pi-shopping-cart" severity="secondary" class="w-full"></Button>
                        </div>
                        <div class="box p-6 animate-fadein animate-duration-500">
                            <ul class="list-none p-0 m-0">
                                <li class="flex items-center mb-4">
                                    <span class="mr-4">
                                        <Avatar label="AW" class="w-12 h-12" />
                                    </span>
                                    <div class="flex flex-col">
                                        <span class="font-bold mb-1">Amanda Williams</span>
                                        <span class="text-surface-500 dark:text-surface-400 text-sm">Administrator</span>
                                    </div>
                                </li>
                                <li class="flex">
                                    <a class="flex items-center p-4 rounded w-full hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150 cursor-pointer" style="border-radius: '10px'">
                                        <i class="pi pi-home text-xl mr-4"></i>
                                        <span class="flex flex-col">
                                            <span class="font-bold mb-1">Dashboard</span>
                                            <span class="m-0 text-surface-500 dark:text-surface-400 text-sm">Control Panel</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a class="flex items-center p-4 rounded w-full hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150 cursor-pointer" style="border-radius: '10px'">
                                        <i class="pi pi-envelope text-xl mr-4"></i>
                                        <span class="flex flex-col">
                                            <span class="font-bold mb-1">Inbox</span>
                                            <span class="m-0 text-surface-500 dark:text-surface-400 text-sm">View Messages</span>
                                        </span>
                                        <Badge value="3" class="ml-auto"></Badge>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="box p-6 animate-fadein animate-duration-500">
                            <div class="flex justify-between items-center mb-8">
                                <span class="inline-flex items-center">
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
    redrawListener: null,
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
        EventBus.off('dark-mode-toggle-complete', this.redrawListener);
        EventBus.off('theme-palette-change', this.redrawListener);
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();

        this.redrawListener = () => {
            this.chartData = this.setChartData();
            this.chartOptions = this.setChartOptions();
        };

        EventBus.on('dark-mode-toggle-complete', this.redrawListener);
        EventBus.on('theme-palette-change', this.redrawListener);

        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    },
    methods: {
        setCategory(category) {
            this.category = category;
        },
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);
            const primaryColor = documentStyle.getPropertyValue('--primary-color');

            return {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: 'Annual Income',
                        data: [40, 59, 40, 50, 56],
                        fill: true,
                        borderColor: primaryColor,
                        tension: 0.4,
                        backgroundColor: `color-mix(in srgb, ${primaryColor}, transparent 80%)`
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('p-content-border-color');

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
