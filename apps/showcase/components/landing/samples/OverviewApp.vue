<template>
    <div class="flex-1 h-full overflow-y-auto pb-0.5">
        <div class="flex flex-wrap gap-4 items-start justify-between">
            <div class="flex-1">
                <div class="text-muted-color font-medium leading-normal">Overview</div>
                <div class="text-color text-3xl font-semibold leading-normal">Good Morning, Robin 👋</div>
            </div>
            <div class="flex gap-2 whitespace-nowrap flex-nowrap">
                <IconField iconPosition="left">
                    <InputIcon class="pi pi-search"> </InputIcon>
                    <InputText placeholder="Search" />
                </IconField>
                <Button severity="secondary" outlined>
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
        <div class="mt-4 flex flex-wrap gap-6 items-start justify-between">
            <SelectButton v-model="selectedTime" :options="timeOptions" aria-labelledby="basic" />
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
                            <div class="p-1 rounded-full border border-surface flex items-center justify-center">
                                <div class="w-2 h-2 rounded-full" :style="{ backgroundColor: item.backgroundColor }"></div>
                            </div>
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
                        :pt="{}"
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
                                                'pi pi-bitcoin text-yellow-500 text-3xl': slotProps.data.coin !== 'btc',
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
                    <Button label="Show All" outlined />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';
export default {
    name: 'Overview',
    redrawListener: null,
    data() {
        return {
            chartData: {},
            chartOptions: {},
            chartPlugins: [],
            dates: [],

            selectedTime: 'Monthly',
            timeOptions: ['Monthly', 'Weekly', 'Yearly'],
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
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
        this.chartPlugings = this.setChartPlugins();

        this.redrawListener = () => {
            console.log('sss');
            this.chartData = this.setChartData();
            this.chartOptions = this.setChartOptions();
        };

        EventBus.on('dark-mode-toggle-complete', this.redrawListener);
        EventBus.on('theme-palette-change', this.redrawListener);
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        type: 'bar',
                        label: 'Personal Wallet',
                        backgroundColor: 'color-mix(in srgb, ' + documentStyle.getPropertyValue('--p-primary-400') + ' 100%, #fff)',
                        data: [4000, 10000, 15000, 4000, 16000, 8000, 12000, 14000, 17000, 5000, 12000, 6000],
                        barThickness: 32
                    },
                    {
                        type: 'bar',
                        label: 'Corporate Wallet',
                        backgroundColor: 'color-mix(in srgb, ' + documentStyle.getPropertyValue('--p-primary-300') + ' 100%, transparent)',
                        data: [2100, 8400, 2400, 7500, 3700, 6500, 7400, 8000, 4800, 9000, 7600, 4200],
                        barThickness: 32
                    },
                    {
                        type: 'bar',
                        label: 'Investment Wallet',
                        backgroundColor: 'color-mix(in srgb, ' + documentStyle.getPropertyValue('--p-primary-200') + ' 100%, transparent)',
                        data: [4100, 5200, 2400, 7400, 2300, 4100, 7200, 8000, 4800, 9000, 7600, 4200],
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
            const darkMode = document.documentElement.classList.contains('p-dark');
            const documentStyle = getComputedStyle(document.documentElement);

            const backgroundColor = documentStyle.getPropertyValue(darkMode ? '--p-surface-900' : '--p-surface-0');
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const borderColor = documentStyle.getPropertyValue(darkMode ? '--p-surface-800' : '--p-surface-100');
            const textMutedColor = documentStyle.getPropertyValue(darkMode ? '--p-surface-500' : '--p-surface-400');

            const getOrCreateTooltip = (chart) => {
                let tooltipEl = chart.canvas.parentNode.querySelector('div.chartjs-tooltip');

                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.classList.add('chartjs-tooltip');
                    tooltipEl.style.backgroundColor = backgroundColor;
                    tooltipEl.style.boxShadow = '0px 25px 20px -5px rgba(0, 0, 0, 0.10), 0px 10px 8px -6px rgba(0, 0, 0, 0.10)';
                    tooltipEl.style.borderRadius = '7px';
                    tooltipEl.style.color = textColor;
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.width = '232px';
                    tooltipEl.style.padding = '14.5px';
                    tooltipEl.style.pointerEvents = 'none';
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.transform = 'translate(-50%, 0)';
                    tooltipEl.style.transition = 'all .2s ease';
                    tooltipEl.style.display = 'flex';
                    tooltipEl.style.flexDirection = 'column';
                    tooltipEl.style.gap = '14px';
                    chart.canvas.parentNode.appendChild(tooltipEl);
                }

                return tooltipEl;
            };

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    chartAreaBorder: {
                        borderColor: 'red',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        borderDashOffset: 2
                    },
                    tooltip: {
                        enabled: false,
                        padding: 10,
                        position: 'nearest',
                        external: function (context) {
                            // Tooltip Element
                            const { chart, tooltip } = context;
                            const tooltipEl = getOrCreateTooltip(chart);

                            // Hide if no tooltip
                            if (tooltip.opacity === 0) {
                                tooltipEl.style.opacity = 0;

                                return;
                            }

                            if (tooltip.body) {
                                const bodyLines = tooltip.body.map((b) => {
                                    const strArr = b.lines[0].split(':');
                                    const data = {
                                        text: strArr[0].trim(),
                                        value: strArr[1].trim()
                                    };

                                    return data;
                                });

                                // Clear old content
                                tooltipEl.innerHTML = '';
                                bodyLines.forEach((body, i) => {
                                    const colors = tooltip.labelColors[i];

                                    const bodyDiv = document.createElement('div');

                                    bodyDiv.style.display = 'flex';
                                    bodyDiv.style.alignItems = 'center';
                                    bodyDiv.style.justifyContent = 'space-between';

                                    const bodyDivLeft = document.createElement('div');

                                    bodyDivLeft.style.display = 'flex';
                                    bodyDivLeft.style.alignItems = 'center';
                                    bodyDivLeft.style.gap = '4px';

                                    const innerSpan = document.createElement('span');

                                    innerSpan.style.background = colors.backgroundColor;
                                    innerSpan.style.borderColor = colors.borderColor;
                                    innerSpan.style.height = '7px';
                                    innerSpan.style.width = '7px';
                                    innerSpan.style.borderRadius = '99px';
                                    innerSpan.style.display = 'inline-block';

                                    const span = document.createElement('span');

                                    span.style.display = 'inline-flex';
                                    span.style.alignItems = 'center';
                                    span.style.justifyContent = 'center';
                                    span.style.marginRight = '3px';
                                    span.style.padding = '3px';
                                    span.style.border = '1px solid ' + borderColor + '';
                                    span.style.borderRadius = '99px';
                                    span.appendChild(innerSpan);

                                    const text = document.createElement('span');

                                    text.appendChild(document.createTextNode(body.text));
                                    text.style.fontWeight = '500';
                                    text.style.lineHeight = '21px';

                                    bodyDivLeft.appendChild(span);
                                    bodyDivLeft.appendChild(text);

                                    const bodyDivRight = document.createElement('div');

                                    bodyDivRight.appendChild(document.createTextNode(body.value));
                                    bodyDivRight.style.fontWeight = '500';
                                    bodyDivRight.style.lineHeight = '21px';

                                    bodyDiv.appendChild(bodyDivLeft);
                                    bodyDiv.appendChild(bodyDivRight);
                                    tooltipEl.appendChild(bodyDiv);
                                });
                            }

                            const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

                            // Display, position, and set styles for font
                            tooltipEl.style.opacity = 1;
                            tooltipEl.style.left = positionX + tooltip.caretX + 'px';
                            tooltipEl.style.top = positionY + tooltip.caretY + 'px';
                            tooltipEl.style.font = tooltip.options.bodyFont.string;
                            tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
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
                            color: textMutedColor,
                            font: {
                                weight: 'lighter'
                            }
                        },
                        grid: {
                            color: 'transparent',
                            borderColor: 'transparent'
                        }
                    },
                    y: {
                        border: {
                            display: false
                        },
                        stacked: true,
                        ticks: {
                            color: textMutedColor,
                            font: {
                                weight: 'lighter'
                            }
                        },
                        grid: {
                            color: borderColor,
                            borderColor: 'transparent'
                        }
                    }
                }
            };
        },
        setChartPlugins() {
            return ['chartAreaBorder'];
        }
    },
    components: {}
};
</script>
