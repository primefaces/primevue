<template>
    <section class="landing-components py-8">
        <div class="section-header">Components</div>
        <p class="section-detail"><span class="font-bold text-900">Over 90</span> Vue UI Components with top-notch quality to help you implement all your UI requirements in style.</p>
        <div class="components-main relative">
            <div class="components-main-container flex flex-column xl:flex-row mt-7 gap-5 justify-content-center mx-auto w-full xl:w-auto px-5 lg:px-8">
                <div class="flex flex-column md:flex-row gap-5 w-full xl:w-auto">
                    <div class="flex flex-column w-full gap-5 xl:mt-8 z-1 lg:w-28rem md:w-30rem">
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
                        </div>
                        <div class="box p-4">
                            <Chart type="line" :data="chartData" :options="chartOptions" />
                        </div>
                        <div class="box p-4">
                            <TabMenu v-model:activeIndex="activeTabIndex" :model="items" />
                        </div>
                        <div class="box p-4">
                            <ul class="list-none p-0 m-0">
                                <li class="flex align-items-center mb-3">
                                    <img src="https://primefaces.org/cdn/primevue/images/landing/avatar-1.svg" alt="avatar 1" class="w-2rem h-2rem mr-3" />
                                    <span class="font-medium">Darrel Steward</span>
                                    <ProgressBar :value="pbValue1" :showValue="false" class="w-10rem ml-auto mr-3" style="height: 0.5rem" />
                                    <span class="text-secondary font-medium">15%</span>
                                </li>
                                <li class="flex align-items-center mb-3">
                                    <img src="https://primefaces.org/cdn/primevue/images/landing/avatar-2.svg" alt="avatar 2" class="w-2rem h-2rem mr-3" />
                                    <span class="font-medium">Albert Flores</span>
                                    <ProgressBar :value="pbValue3" :showValue="false" class="w-10rem ml-auto mr-3" style="height: 0.5rem" />
                                    <span class="text-secondary font-medium">85%</span>
                                </li>
                                <li class="flex align-items-center mb-3">
                                    <img src="https://primefaces.org/cdn/primevue/images/landing/avatar-3.svg" alt="avatar 3" class="w-2rem h-2rem mr-3" />
                                    <span class="font-medium">Kathryn Murphy</span>
                                    <ProgressBar :value="pbValue3" :showValue="false" class="w-10rem ml-auto mr-3" style="height: 0.5rem" />
                                    <span class="text-secondary font-medium">50%</span>
                                </li>
                                <li class="flex align-items-center mb-3">
                                    <img src="https://primefaces.org/cdn/primevue/images/landing/avatar-4.svg" alt="avatar 4" class="w-2rem h-2rem mr-3" />
                                    <span class="font-medium">Cody Fisher</span>
                                    <ProgressBar :value="pbValue4" :showValue="false" class="w-10rem ml-auto mr-3" style="height: 0.5rem" />
                                    <span class="text-secondary font-medium">75%</span>
                                </li>
                                <li class="flex align-items-center mb-3">
                                    <img src="https://primefaces.org/cdn/primevue/images/landing/avatar-5.svg" alt="avatar 5" class="w-2rem h-2rem mr-3" />
                                    <span class="font-medium">Brandon Atkinson</span>
                                    <ProgressBar :value="pbValue5" :showValue="false" class="w-10rem ml-auto mr-3" style="height: 0.5rem" />
                                    <span class="text-secondary font-medium">60%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-column w-full gap-5 justify-content-start xl:w-24rem z-1">
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
                        <div class="box p-4">
                            <Tree :value="nodes" class="bg-transparent border-none p-0" />
                        </div>
                        <div class="box p-4">
                            <div class="flex align-items-center">
                                <Chip label="Vue" class="mr-2 font-medium" removable />
                                <span class="font-medium">Typescript</span>
                                <InputSwitch v-model="switchValue" class="ml-auto"></InputSwitch>
                            </div>
                            <div class="mt-5">
                                <SelectButton v-model="selectButtonValue" :options="selectButtonOptions" optionLabel="name" />
                            </div>
                        </div>
                        <div class="box p-4 block xl:hidden">
                            <div class="flex justify-content-center">
                                <Slider v-model="rangeValues" range class="w-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-column gap-5 flex-column md:flex-row xl:flex-column justify-content-between xl:justify-content-start z-1 w-full md:w-auto">
                    <div class="flex flex-column gap-5 xl:mt-5 w-full">
                        <div class="box p-4 hidden xl:block">
                            <div class="flex justify-content-center w-full">
                                <Slider v-model="rangeValues" range class="w-full" />
                            </div>
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
                    </div>
                    <div class="box p-4 md:w-6 xl:w-full">
                        <Calendar v-model="dateValue" :inline="true" :showWeek="true" class="w-full" />
                    </div>
                </div>
            </div>

            <div class="components-strip-top absolute w-full md:w-6 h-8rem top-0 left-0"></div>
            <div class="components-strip-bottom absolute w-full md:w-6 h-8rem bottom-0 right-0"></div>
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
                        borderColor: '#03C4E8',
                        tension: 0.4,
                        backgroundColor: 'rgba(3, 196, 232, .2)'
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
            selectButtonValue: { name: 'Prime', value: 1 },
            dateValue: null,
            rangeValues: [20, 80],
            items: [
                { label: 'Home', icon: 'pi pi-fw pi-home' },
                { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
                { label: 'Settings', icon: 'pi pi-fw pi-cog' }
            ],
            selectButtonOptions: [
                { name: 'Prime', value: 1 },
                { name: 'Vue', value: 2 },
                { name: 'Themes', value: 3 }
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
