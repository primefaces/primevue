# Vue MeterGroup Component

MeterGroup displays scalar measurements within a known range.

## Import

```javascript
import MeterGroup from 'primevue/metergroup';
```

## Accessibility

Screen Reader MeterGroup component uses meter role in addition to the aria-valuemin , aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined using aria-labelledby prop. Keyboard Support Component does not include any interactive elements.

## Basic

MeterGroup requires a value as the data to display where each item in the collection should be a type of MeterItem .

```vue
<MeterGroup :value="value" />
```

## Icon

Icons can be displayed next to the labels instead of the default marker.

```vue
<MeterGroup :value="value" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <MeterGroup :value="value" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
    { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
    { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
    { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
    { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
]);
<\/script>
```

</details>

## Label

The position of the labels relative to the meters is defined using the labelPosition property. The default orientation of the labels is horizontal, and the vertical alternative is available through the labelOrientation option.

```vue
<MeterGroup :value="value" labelPosition="start" labelOrientation="vertical" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <MeterGroup :value="value" labelPosition="start" labelOrientation="vertical" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
    { label: 'Apps', color: '#34d399', value: 16 },
    { label: 'Messages', color: '#fbbf24', value: 8 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 10 }
]);
<\/script>
```

</details>

## Min-Max

Boundaries are configured with the min and max values whose defaults are 0 and 100 respectively.

```vue
<MeterGroup :value="value" :max="200" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <MeterGroup :value="value" :max="200"  />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
    { label: 'Apps', color: '#34d399', value: 16 },
    { label: 'Messages', color: '#fbbf24', value: 8 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 10 }
]);
<\/script>
```

</details>

## Multiple

Adding more items to the array displays the meters in a group.

```vue
<MeterGroup :value="value" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <MeterGroup :value="value" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
    { label: 'Apps', color: '#34d399', value: 16 },
    { label: 'Messages', color: '#fbbf24', value: 8 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 10 }
]);
<\/script>
```

</details>

## Template

MeterGroup provides templating support for labels, meter items, and content around the meters.

```vue
<MeterGroup :value="value" labelPosition="start">
    <template #label="{ value }">
        <div class="flex flex-wrap gap-4">
            <template v-for="val of value" :key="val.label">
                <Card class="flex-1 border border-surface shadow-none">
                    <template #content>
                        <div class="flex justify-between gap-8">
                            <div class="flex flex-col gap-1">
                                <span class="text-surface-500 dark:text-surface-400 text-sm">{{ val.label }}</span>
                                <span class="font-bold text-lg">{{ val.value }}%</span>
                            </div>
                            <span class="w-8 h-8 rounded-full inline-flex justify-center items-center text-center" :style="{ backgroundColor: \`\${val.color1}\`, color: '#ffffff' }">
                                <i :class="val.icon" />
                            </span>
                        </div>
                    </template>
                </Card>
            </template>
        </div>
    </template>
    <template #meter="slotProps">
        <span :class="slotProps.class" :style="{ background: \`linear-gradient(to right, \${slotProps.value.color1}, \${slotProps.value.color2})\`, width: slotProps.size }" />
    </template>
    <template #start="{ totalPercent }">
        <div class="flex justify-between mt-4 mb-2 relative">
            <span>Storage</span>
            <span :style="{ width: totalPercent + '%' }" class="absolute text-right">{{ totalPercent }}%</span>
            <span class="font-medium">1TB</span>
        </div>
    </template>
    <template #end>
        <div class="flex justify-between mt-4">
            <Button label="Manage Storage" variant="outlined" size="small" />
            <Button label="Update Plan" size="small" />
        </div>
    </template>
</MeterGroup>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <MeterGroup :value="value" labelPosition="start">
            <template #label="{ value }">
                <div class="flex flex-wrap gap-4">
                    <template v-for="val of value" :key="i">
                        <Card class="flex-1 border border-surface shadow-none">
                            <template #content>
                                <div class="flex justify-between gap-8">
                                    <div class="flex flex-col gap-1">
                                        <span class="text-surface-500 dark:text-surface-400 text-sm">{{ val.label }}</span>
                                        <span class="font-bold text-lg">{{ val.value }}%</span>
                                    </div>
                                    <span class="w-8 h-8 rounded-full inline-flex justify-center items-center text-center" :style="{ backgroundColor: \`\${val.color1}\`, color: '#ffffff' }">
                                        <i :class="val.icon" />
                                    </span>
                                </div>
                            </template>
                        </Card>
                    </template>
                </div>
            </template>
            <template #meter="slotProps">
                <span :class="slotProps.class" :style="{ background: \`linear-gradient(to right, \${slotProps.value.color1}, \${slotProps.value.color2})\`, width: slotProps.size }" />
            </template>
            <template #start="{ totalPercent }">
                <div class="flex justify-between mt-4 mb-2 relative">
                    <span>Storage</span>
                    <span :style="{ width: totalPercent + '%' }" class="absolute text-right">{{ totalPercent }}%</span>
                    <span class="font-medium">1TB</span>
                </div>
            </template>
            <template #end>
                <div class="flex justify-between mt-4">
                    <Button label="Manage Storage" variant="outlined" size="small" />
                    <Button label="Update Plan" size="small" />
                </div>
            </template>
        </MeterGroup>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
    { label: 'Apps', color1: '#34d399', color2: '#fbbf24', value: 25, icon: 'pi pi-table' },
    { label: 'Messages', color1: '#fbbf24', color2: '#60a5fa', value: 15, icon: 'pi pi-inbox' },
    { label: 'Media', color1: '#60a5fa', color2: '#c084fc', value: 20, icon: 'pi pi-image' },
    { label: 'System', color1: '#c084fc', color2: '#c084fc', value: 10, icon: 'pi pi-cog' }
]);
<\/script>
```

</details>

## Vertical

Layout of the MeterGroup is configured with the orientation property that accepts either horizontal or vertical as available options.

```vue
<MeterGroup :value="value" orientation="vertical" labelOrientation="vertical" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center" style="height: 360px">
        <MeterGroup :value="value" orientation="vertical" labelOrientation="vertical" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
    { label: 'Apps', color: '#34d399', value: 24 },
    { label: 'Messages', color: '#fbbf24', value: 16 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 12 }
]);
<\/script>
```

</details>

## Meter Group

### Props

| Name             | Type                                      | Default    | Description                                                                                     |
| ---------------- | ----------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| value            | MeterItem[]                               | -          | Current value of the metergroup.                                                                |
| min              | number                                    | 0          | Mininum boundary value.                                                                         |
| max              | number                                    | 100        | Maximum boundary value.                                                                         |
| orientation      | "horizontal" \| "vertical"                | horizontal | Specifies the layout of the component, valid values are 'horizontal' and 'vertical'.            |
| labelPosition    | "start" \| "end"                          | end        | Specifies the label position of the component, valid values are 'start' and 'end'.              |
| labelOrientation | "horizontal" \| "vertical"                | horizontal | Specifies the label orientation of the component, valid values are 'horizontal' and 'vertical'. |
| dt               | any                                       | -          | It generates scoped CSS variables using design tokens for the component.                        |
| pt               | PassThrough<MeterGroupPassThroughOptions> | -          | Used to pass attributes to DOM elements inside the component.                                   |
| ptOptions        | any                                       | -          | Used to configure passthrough(pt) options of the component.                                     |
| unstyled         | boolean                                   | false      | When enabled, it removes component related styles in the core.                                  |

## Pass Through Options

| Name        | Type                            | Description                                                   |
| ----------- | ------------------------------- | ------------------------------------------------------------- |
| root        | MeterGroupPassThroughOptionType | Used to pass attributes to the root's DOM element.            |
| meters      | MeterGroupPassThroughOptionType | Used to pass attributes to the meter container's DOM element. |
| meter       | MeterGroupPassThroughOptionType | Used to pass attributes to the meter's DOM element.           |
| labelList   | MeterGroupPassThroughOptionType | Used to pass attributes to the label list's DOM element.      |
| label       | MeterGroupPassThroughOptionType | Used to pass attributes to the label list item's DOM element. |
| labelIcon   | MeterGroupPassThroughOptionType | Used to pass attributes to the label icon type's DOM element. |
| labelMarker | MeterGroupPassThroughOptionType | Used to pass attributes to the label list type's DOM element. |
| labelText   | MeterGroupPassThroughOptionType | Used to pass attributes to the label's DOM element.           |

## Theming

### CSS Classes

| Class                     | Description                            |
| ------------------------- | -------------------------------------- |
| p-metergroup              | Class name of the root element         |
| p-metergroup-meters       | Class name of the meters element       |
| p-metergroup-meter        | Class name of the meter element        |
| p-metergroup-label-list   | Class name of the label list element   |
| p-metergroup-label        | Class name of the label element        |
| p-metergroup-label-icon   | Class name of the label icon element   |
| p-metergroup-label-marker | Class name of the label marker element |
| p-metergroup-label-text   | Class name of the label text element   |

### Design Tokens

| Token                                | CSS Variable                             | Description                  |
| ------------------------------------ | ---------------------------------------- | ---------------------------- |
| metergroup.border.radius             | --p-metergroup-border-radius             | Border radius of root        |
| metergroup.gap                       | --p-metergroup-gap                       | Gap of root                  |
| metergroup.meters.background         | --p-metergroup-meters-background         | Background of meters         |
| metergroup.meters.size               | --p-metergroup-meters-size               | Size of meters               |
| metergroup.label.gap                 | --p-metergroup-label-gap                 | Gap of label                 |
| metergroup.label.marker.size         | --p-metergroup-label-marker-size         | Size of label marker         |
| metergroup.label.icon.size           | --p-metergroup-label-icon-size           | Size of label icon           |
| metergroup.label.list.vertical.gap   | --p-metergroup-label-list-vertical-gap   | Vertical gap of label list   |
| metergroup.label.list.horizontal.gap | --p-metergroup-label-list-horizontal-gap | Horizontal gap of label list |
