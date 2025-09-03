<template>
    <div class="flex-1 h-full overflow-y-auto pb-0.5">
        <div class="flex flex-wrap gap-4 items-start justify-between p-1">
            <div class="flex-1">
                <div class="text-muted-color font-medium leading-normal">Overview</div>
                <div class="text-color text-3xl font-semibold leading-normal">Welcome to PrimeVue</div>
            </div>
            <div class="flex gap-2 whitespace-nowrap flex-nowrap">
                <IconField>
                    <InputIcon class="pi pi-search"> </InputIcon>
                    <InputText placeholder="Search" />
                </IconField>
                <Button severity="secondary" variant="outlined">
                    <OverlayBadge
                        severity="danger"
                        :pt="{
                            pcbadge: {
                                root: {
                                    class: '!min-w-0 !w-2.5 !h-2.5'
                                }
                            }
                        }"
                    >
                        <i class="pi pi-bell" />
                    </OverlayBadge>
                </Button>
            </div>
        </div>
        <div class="mt-4 flex flex-wrap gap-6 items-center justify-between p-1">
            <SelectButton v-model="selectedTime" :options="timeOptions" aria-labelledby="basic" :allowEmpty="false" @change="changeSelect" />
            <div class="flex items-center gap-2">
                <Button label="Download" icon="pi pi-download" iconPos="right" />
                <DatePicker v-model="dates" selectionMode="range" :manualInput="false" showIcon iconDisplay="input" placeholder="06/11/2024 - 06/22/2024" />
            </div>
        </div>
        <div class="flex flex-col gap-6 mt-6">
            <div class="w-full border border-surface rounded-2xl py-5 px-7 flex flex-col justify-between">
                <div class="flex items-center gap-6 mb-6">
                    <div class="flex-1 text-color font-semibold leading-6">Crypto Analytics</div>
                    <div class="flex items-center gap-5">
                        <div v-for="(item, index) in chartData?.datasets" :key="index" class="flex items-center gap-2">
                            <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: item.backgroundColor }"></div>
                            <span class="font-medium text-color leading-6">{{ item.label }}</span>
                        </div>
                    </div>
                </div>
                <Chart type="bar" :data="chartData" :options="chartOptions" class="h-80" />
            </div>
            <div class="flex gap-6 xl:flex-row flex-col">
                <div class="flex-1 border border-surface rounded-2xl py-5 px-7">
                    <div class="flex items-center gap-6 mb-4">
                        <div class="flex-1 text-color font-semibold leading-6">Transactions</div>
                        <Button type="button" icon="pi pi-ellipsis-h" severity="secondary" text @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
                        <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
                    </div>
                    <DataTable
                        :value="sampleAppsTableDatas"
                        paginator
                        :rows="5"
                        dataKey="id"
                        tableClass="overflow-x-auto dark:bg-surface-950"
                        paginatorTemplate="PrevPageLink PageLinks NextPageLink  CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                        pt:pcpaginator:root="!bg-transparent"
                        :dt="{
                            header: {
                                background: 'transparent'
                            },
                            headerCell: {
                                background: 'transparent'
                            },
                            row: {
                                background: 'transparent'
                            }
                        }"
                    >
                        <Column header="Id" class="w-1/12">
                            <template #body="slotProps">
                                <div class="text-muted-color">{{ slotProps.data.id }}</div>
                            </template>
                        </Column>
                        <Column header="Name" class="w-1/4">
                            <template #body="slotProps">
                                <div class="flex items-center">
                                    <Avatar :label="slotProps.data.name.label" class="mr-2 text-xs font-medium" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
                                    <div class="leading-6 text-muted-color flex-1">{{ slotProps.data.name.text }}</div>
                                </div>
                            </template>
                        </Column>
                        <Column header="Coin" class="w-1/6">
                            <template #body="slotProps">
                                <div class="flex items-center">
                                    <i
                                        :class="[
                                            {
                                                'pi pi-bitcoin text-yellow-500 !text-3xl': slotProps.data.coin !== 'btc',
                                                'pi pi-ethereum bg-surface-950 text-surface-0 dark:bg-surface-0 dark:text-surface-950 w-7 h-7 rounded-full flex items-center justify-center': slotProps.data.coin !== 'eth'
                                            }
                                        ]"
                                    ></i>
                                </div>
                            </template>
                        </Column>
                        <Column header="Date" class="w-1/6">
                            <template #body="slotProps">
                                <div class="text-muted-color">{{ slotProps.data.date }}</div>
                            </template>
                        </Column>
                        <Column header="Process" class="w-1/6">
                            <template #body="slotProps">
                                <Tag :severity="slotProps.data.process.type" :value="slotProps.data.process.value" class="font-medium"></Tag>
                            </template>
                        </Column>
                        <Column header="Amount" class="w-1/6">
                            <template #body="slotProps">
                                <div class="text-muted-color text-right">{{ slotProps.data.amount }}</div>
                            </template>
                        </Column>
                    </DataTable>
                </div>
                <div class="xl:w-96 border border-surface rounded-2xl py-5 px-7 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center gap-6 mb-6">
                            <div class="flex-1 text-color font-semibold leading-6">My Wallet</div>
                            <Button type="button" icon="pi pi-ellipsis-h" severity="secondary" text @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
                            <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
                        </div>
                        <MeterGroup :value="metersData" labelPosition="end">
                            <template #label="{ value }">
                                <div class="flex flex-col gap-6 mt-4">
                                    <template v-for="val of value" :key="val.label">
                                        <div class="flex items-center gap-2">
                                            <div class="w-2 h-2 rounded-full" :style="{ backgroundColor: val.color }"></div>
                                            <div class="text-color uppercase font-medium leading-6 flex-1">
                                                {{ val.label }}
                                                <span class="text-muted-color">({{ val.value }}%)</span>
                                            </div>
                                            <div class="leading-6 font-medium text-color">{{ val.text }}</div>
                                        </div>
                                    </template>
                                </div>
                            </template>
                        </MeterGroup>
                    </div>
                    <Button label="Show All" variant="outlined" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from '@/app/AppEventBus';
export default {
    name: 'Overview',
    redrawListener: null,
    data() {
        return {
            chartData: {},
            chartOptions: {},
            dates: [],
            selectedTime: 'Monthly',
            timeOptions: ['Weekly', 'Monthly', 'Yearly'],
            menuItems: [
                {
                    label: 'Refresh',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Export',
                    icon: 'pi pi-upload'
                }
            ],
            sampleAppsTableDatas: [
                { id: '#1254', name: { text: 'Amy Yelsner', label: 'AY', color: 'blue' }, coin: 'btc', date: 'May 5th', process: { type: 'success', value: 'Buy' }, amount: '3.005 BTC' },
                { id: '#2355', name: { text: 'Anna Fali', label: 'AF', color: '#ECFCCB' }, coin: 'eth', date: 'Mar 17th', process: { type: 'success', value: 'Buy' }, amount: '0.050 ETH' },
                { id: '#1235', name: { text: 'Stepen Shaw', label: 'SS', color: '#ECFCCB' }, coin: 'btc', date: 'May 24th', process: { type: 'danger', value: 'Sell' }, amount: '3.050 BTC' },
                { id: '#2355', name: { text: 'Anna Fali', label: 'AF', color: '#ECFCCB' }, coin: 'eth', date: 'Mar 17th', process: { type: 'danger', value: 'Sell' }, amount: '0.050 ETH' },
                { id: '#2355', name: { text: 'Anna Fali', label: 'AF', color: '#ECFCCB' }, coin: 'eth', date: 'Mar 17th', process: { type: 'danger', value: 'Sell' }, amount: '0.050 ETH' },
                { id: '#7896', name: { text: 'John Doe', label: 'JD', color: 'green' }, coin: 'btc', date: 'Jun 12th', process: { type: 'success', value: 'Buy' }, amount: '2.500 BTC' },
                { id: '#5648', name: { text: 'Jane Smith', label: 'JS', color: '#FFDDC1' }, coin: 'eth', date: 'Feb 23rd', process: { type: 'success', value: 'Buy' }, amount: '1.200 ETH' },
                { id: '#3265', name: { text: 'Michael Johnson', label: 'MJ', color: '#FFD700' }, coin: 'btc', date: 'Apr 30th', process: { type: 'danger', value: 'Sell' }, amount: '4.000 BTC' },
                { id: '#1423', name: { text: 'Emily Davis', label: 'ED', color: '#FFCCCB' }, coin: 'btc', date: 'Jan 15th', process: { type: 'danger', value: 'Sell' }, amount: '5.050 LTC' },
                { id: '#6854', name: { text: 'Robert Brown', label: 'RB', color: '#C0C0C0' }, coin: 'eth', date: 'Dec 2nd', process: { type: 'success', value: 'Buy' }, amount: '0.300 ETH' }
            ],
            metersData: [
                { label: 'BTC', color: '#F59E0B', value: 15, text: '27.215' },
                { label: 'ETH', color: '#717179', value: 5, text: '4.367' },
                { label: 'GBP', color: '#22C55E', value: 25, text: '£ 147.562,32' },
                { label: 'EUR', color: '#84CC16', value: 11, text: '€ 137.457,25' },
                { label: 'USD', color: '#14B8A6', value: 29, text: '$ 133.364,12' },
                { label: 'XAU', color: '#EAB308', value: 29, text: '200 g' }
            ]
        };
    },
    beforeUnmount() {
        EventBus.off('dark-mode-toggle-complete', this.redrawListener);
        EventBus.off('theme-palette-change', this.redrawListener);
    },
    mounted() {
        this.chartData = this.setChartData(this.selectedTime);
        this.chartOptions = this.setChartOptions();

        this.redrawListener = () => {
            this.chartData = this.setChartData(this.selectedTime);
            this.chartOptions = this.setChartOptions();
        };

        EventBus.on('dark-mode-toggle-complete', this.redrawListener);
        EventBus.on('theme-palette-change', this.redrawListener);
    },
    methods: {
        changeSelect(e) {
            this.redrawListener();
        },
        createDatasets(val) {
            let data, labels;

            if (val === 'Weekly') {
                labels = ['6 May', '13 May', '20 May', '27 May', '3 June', '10 June', '17 June', '24 June', '1 July', '8 July', '15 July', '22 July'];
                data = [
                    [9000, 3000, 13000, 3000, 5000, 17000, 11000, 4000, 15000, 4000, 11000, 5000],
                    [1800, 7600, 11100, 6800, 3300, 5800, 3600, 7200, 4300, 8100, 6800, 3700],
                    [3800, 4800, 2100, 6600, 1000, 3800, 6500, 4200, 4300, 7000, 6800, 3700]
                ];
            } else if (val === 'Monthly') {
                labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                data = [
                    [4000, 10000, 15000, 4000, 16000, 8000, 12000, 14000, 17000, 5000, 12000, 6000],
                    [2100, 8400, 2400, 7500, 3700, 6500, 7400, 8000, 4800, 9000, 7600, 4200],
                    [4100, 5200, 2400, 7400, 2300, 4100, 7200, 8000, 4800, 9000, 7600, 4200]
                ];
            } else if (val === 'Yearly') {
                labels = ['2019', '2020', '2021', '2022', '2023', '2024'];
                data = [
                    [4500, 10500, 15500, 4500, 16500, 8500, 12500, 14500, 17500, 5500, 12500, 6500],
                    [2250, 8700, 2550, 7650, 3850, 6650, 7650, 8250, 4950, 9250, 7850, 4450],
                    [4350, 5450, 2650, 7650, 2550, 4350, 7450, 8250, 4950, 9250, 7850, 4450]
                ];
            }

            return {
                data,
                labels
            };
        },
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
        setChartData(timeUnit) {
            const datasets = this.createDatasets(timeUnit);
            const documentStyle = getComputedStyle(document.documentElement);
            const primary200 = documentStyle.getPropertyValue('--p-primary-200');
            const primary300 = documentStyle.getPropertyValue('--p-primary-300');
            const primary400 = documentStyle.getPropertyValue('--p-primary-400');
            const primary500 = documentStyle.getPropertyValue('--p-primary-500');
            const primary600 = documentStyle.getPropertyValue('--p-primary-600');

            return {
                labels: datasets.labels,
                datasets: [
                    {
                        type: 'bar',
                        label: 'Personal Wallet',
                        backgroundColor: primary400,
                        hoverBackgroundColor: primary600,
                        data: datasets.data[0],
                        barThickness: 32
                    },
                    {
                        type: 'bar',
                        label: 'Corporate Wallet',
                        backgroundColor: primary300,
                        hoverBackgroundColor: primary500,
                        data: datasets.data[1],
                        barThickness: 32
                    },
                    {
                        type: 'bar',
                        label: 'Investment Wallet',
                        backgroundColor: primary200,
                        hoverBackgroundColor: primary400,
                        data: datasets.data[2],
                        borderRadius: {
                            topLeft: 8,
                            topRight: 8
                        },
                        borderSkipped: true,
                        barThickness: 32
                    }
                ]
            };
        },
        setChartOptions() {
            const darkMode = this.$appState.darkTheme;
            const documentStyle = getComputedStyle(document.documentElement);
            const surface100 = documentStyle.getPropertyValue('--p-surface-100');
            const surface900 = documentStyle.getPropertyValue('--p-surface-900');
            const surface400 = documentStyle.getPropertyValue('--p-surface-400');
            const surface500 = documentStyle.getPropertyValue('--p-surface-500');

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    tooltip: {
                        enabled: false,
                        position: 'nearest',
                        external: function (context) {
                            const { chart, tooltip } = context;
                            let tooltipEl = chart.canvas.parentNode.querySelector('div.chartjs-tooltip');

                            if (!tooltipEl) {
                                tooltipEl = document.createElement('div');
                                tooltipEl.classList.add(
                                    'chartjs-tooltip',
                                    'dark:bg-surface-950',
                                    'bg-surface-0',
                                    'p-3',
                                    'rounded-[8px]',
                                    'overflow-hidden',
                                    'opacity-100',
                                    'absolute',
                                    'transition-all',
                                    'duration-[0.1s]',
                                    'pointer-events-none',
                                    'shadow-[0px_25px_20px_-5px_rgba(0,0,0,0.10),0px_10px_8px_-6px_rgba(0,0,0,0.10)]'
                                );
                                chart.canvas.parentNode.appendChild(tooltipEl);
                            }

                            if (tooltip.opacity === 0) {
                                tooltipEl.style.opacity = 0;

                                return;
                            }

                            const datasetPointsX = tooltip.dataPoints.map((dp) => dp.element.x);
                            const avgX = datasetPointsX.reduce((a, b) => a + b, 0) / datasetPointsX.length;
                            const avgY = tooltip.dataPoints[2].element.y;

                            if (tooltip.body) {
                                tooltipEl.innerHTML = '';
                                const tooltipBody = document.createElement('div');

                                tooltipBody.classList.add('flex', 'flex-col', 'gap-4', 'px-3', 'py-3', 'min-w-[18rem]');
                                tooltip.dataPoints.reverse().forEach((body, i) => {
                                    const row = document.createElement('div');

                                    row.classList.add('flex', 'items-center', 'gap-2', 'w-full');
                                    const point = document.createElement('div');

                                    point.classList.add('w-2.5', 'h-2.5', 'rounded-full');
                                    point.style.backgroundColor = body.dataset.backgroundColor;
                                    row.appendChild(point);
                                    const label = document.createElement('span');

                                    label.appendChild(document.createTextNode(body.dataset.label));
                                    label.classList.add('text-base', 'font-medium', 'text-color', 'flex-1', 'text-left', 'capitalize');
                                    row.appendChild(label);
                                    const value = document.createElement('span');

                                    value.appendChild(document.createTextNode(body.formattedValue));
                                    value.classList.add('text-base', 'font-medium', 'text-color', 'text-right');
                                    row.appendChild(value);
                                    tooltipBody.appendChild(row);
                                });
                                tooltipEl.appendChild(tooltipBody);
                            }

                            const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

                            tooltipEl.style.opacity = 1;
                            tooltipEl.style.font = tooltip.options.bodyFont.string;
                            tooltipEl.style.padding = 0;
                            const chartWidth = chart.width;
                            const tooltipWidth = tooltipEl.offsetWidth;
                            const chartHeight = chart.height;
                            const tooltipHeight = tooltipEl.offsetHeight;

                            let tooltipX = positionX + avgX + 24;
                            let tooltipY = avgY;

                            if (tooltipX + tooltipWidth > chartWidth) {
                                tooltipX = positionX + avgX - tooltipWidth - 20;
                            }

                            if (tooltipY < 0) {
                                tooltipY = 0;
                            } else if (tooltipY + tooltipHeight > chartHeight) {
                                tooltipY = chartHeight - tooltipHeight;
                            }

                            tooltipEl.style.left = tooltipX + 'px';
                            tooltipEl.style.top = tooltipY + 'px';
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            color: darkMode ? surface500 : surface400
                        },
                        grid: {
                            display: false,
                            borderColor: 'transparent'
                        },
                        border: {
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: true,
                        stacked: true,
                        ticks: {
                            color: darkMode ? surface500 : surface400
                        },
                        grid: {
                            display: true,
                            color: darkMode ? surface900 : surface100,
                            borderColor: 'transparent'
                        },
                        border: {
                            display: false
                        }
                    }
                }
            };
        }
    },
    components: {}
};
</script>
