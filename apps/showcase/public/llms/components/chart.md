# Vue Chart Component

Chart components are based on Chart.js, an open source HTML5 based charting library.

## Import

```javascript
import Chart from 'primevue/chart';
```

## Accessibility

Screen Reader Chart components internally use canvas element, refer to the Chart.js accessibility guide for more information. The canvas element can be customized with canvasProps property to define aria roles and properties, in addition any content inside the component is directly passed as a child of the canvas to be able to provide fallback content like a table.

```vue
<Chart type="line" :data="data" :canvasProps="{'role': 'img', 'aria-label': 'Data'}" />
```

## Basic

A chart is configured with 3 properties; type , data and options . Chart type is defined using the type property that accepts pie , doughtnut , line , bar , radar and polarArea as a value. The data defines datasets represented with the chart and the options provide numerous customization options to customize the presentation.

```vue
<Chart type="bar" :data="chartData" :options="chartOptions" />
```

## Chart.js

Chart component uses Chart.JS underneath so it needs to be installed as a dependency.

```vue
npm install chart.js
```

## Combo

Different chart types can be combined in the same graph usign the type option of a dataset.

```vue
<Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]" />
```

## Doughnut

A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.

```vue
<Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
```

## HorizontalBarDoc

A bar chart is rendered horizontally when indexAxis option is set as y .

```vue
<Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]"  />
```

## Line

A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.

```vue
<Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
```

## Line Styles

Various styles of a line series can be customized to display customizations like an area chart.

```vue
<Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
```

## Multi Axis

Multiple axes can be added using the scales option.

```vue
<Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
```

## PieChartDoc

A pie chart is a circular statistical graphic which is divided into slices to illustrate numerical proportion.

```vue
<Chart type="pie" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
```

## Polar Area

Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.

```vue
<Chart type="polarArea" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
```

## Radar

A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.

```vue
<Chart type="radar" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
```

## StackedBarDoc

Bars can be stacked on top of each other when stacked option of a scale is enabled.

```vue
<Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]" />
```

## VerticalBarDoc

A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent.

```vue
<Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]"  />
```

## Chart

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | string | - | Type of the chart. |
| data | object | - | Data to display. |
| options | object | - | Options to customize the chart. |
| plugins | any[] | - | Used to custom plugins of the chart. |
| width | number | 300 | Width of the chart in non-responsive mode. |
| height | number | 150 | Height of the chart in non-responsive mode. |
| canvasProps | CanvasHTMLAttributes | - | Used to pass all properties of the CanvasHTMLAttributes to canvas element inside the component. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<ChartPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Chart

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | string | - | Type of the chart. |
| data | object | - | Data to display. |
| options | object | - | Options to customize the chart. |
| plugins | any[] | - | Used to custom plugins of the chart. |
| width | number | 300 | Width of the chart in non-responsive mode. |
| height | number | 150 | Height of the chart in non-responsive mode. |
| canvasProps | CanvasHTMLAttributes | - | Used to pass all properties of the CanvasHTMLAttributes to canvas element inside the component. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<ChartPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | ChartPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| canvas | ChartPassThroughOptionType | Used to pass attributes to the canvas's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-chart | Class name of the root element |

