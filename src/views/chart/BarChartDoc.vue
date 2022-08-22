<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h5&gt;Vertical&lt;/h3&gt;
&lt;Chart type="bar" :data="basicData" :options="basicOptions" /&gt;

&lt;h3&gt;Horizontal&lt;/h3&gt;
&lt;Chart type="bar" :data="basicData" :options="horizontalOptions" /&gt;

&lt;h3&gt;Multi Axis&lt;/h3&gt;
&lt;Chart type="bar" :data="multiAxisData" :options="multiAxisOptions"/&gt;

&lt;h3&gt;Stacked&lt;/h3&gt;
&lt;Chart type="bar" :data="stackedData" :options="stackedOptions"/&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			basicData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: '#42A5F5',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: '#FFA726',
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            },
            multiAxisData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Dataset 1',
                    backgroundColor: [
                        '#EC407A',
                        '#AB47BC',
                        '#42A5F5',
                        '#7E57C2',
                        '#66BB6A',
                        '#FFCA28',
                        '#26A69A'
                    ],
                    yAxisID: 'y',
                    data: [65, 59, 80, 81, 56, 55, 10]
                }, {
                    label: 'Dataset 2',
                    backgroundColor: '#78909C',
                    yAxisID: 'y1',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }]
            },
            stackedData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    type: 'bar',
                    label: 'Dataset 1',
                    backgroundColor: '#42A5F5',
                    data: [
                        50,
                        25,
                        12,
                        48,
                        90,
                        76,
                        42
                    ]
                }, {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: '#66BB6A',
                    data: [
                        21,
                        84,
                        24,
                        75,
                        37,
                        65,
                        34
                    ]
                }, {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: '#FFA726',
                    data: [
                        41,
                        52,
                        24,
                        74,
                        23,
                        21,
                        32
                    ]
                }]
            },
            basicOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            },
            horizontalOptions: {
                indexAxis: 'y',
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            },
            multiAxisOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: true
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            min: 0,
                            max: 100,
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false,
                            color: '#ebedef'
                        },
                        ticks: {
                            min: 0,
                            max: 100,
                            color: '#495057'
                        }
                    }
                }
            },
            stackedOptions: {
                plugins: {
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            }
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>