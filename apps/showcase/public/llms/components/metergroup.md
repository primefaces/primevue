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

## Label

The position of the labels relative to the meters is defined using the labelPosition property. The default orientation of the labels is horizontal, and the vertical alternative is available through the labelOrientation option.

```vue
<MeterGroup :value="value" labelPosition="start" labelOrientation="vertical" />
```

## Min-Max

Boundaries are configured with the min and max values whose defaults are 0 and 100 respectively.

```vue
<MeterGroup :value="value" :max="200"  />
```

## Multiple

Adding more items to the array displays the meters in a group.

```vue
<MeterGroup :value="value" />
```

## Template

MeterGroup provides templating support for labels, meter items, and content around the meters.

## Vertical

Layout of the MeterGroup is configured with the orientation property that accepts either horizontal or vertical as available options.

```vue
<MeterGroup :value="value" orientation="vertical" labelOrientation="vertical" />
```

## Metergroup

## Metergroup

