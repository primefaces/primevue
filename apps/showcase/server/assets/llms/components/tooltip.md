# Vue Tooltip Directive

Tooltip directive provides advisory information for a component.

## Import

```javascript
import Tooltip from 'primevue/tooltip';

app.directive('tooltip', Tooltip);
```

## Accessibility

Screen Reader Tooltip component uses tooltip role and when it becomes visible the generated id of the tooltip is defined as the aria-describedby of the target. Keyboard Support Key Function escape Closes the tooltip when focus is on the target.

## Auto Hide

Tooltip gets hidden when mouse leaves the target element by default, set autoHide to false to customize this behavior so that tooltip stays open when the cursor is on the tooltip.

```vue
<InputText v-tooltip.bottom="{ value: 'Enter your username', autoHide: false }" type="text" placeholder="autoHide: false" />
<InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="autoHide: true" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <InputText v-tooltip.bottom="{ value: 'Enter your username', autoHide: false }" type="text" placeholder="autoHide: false" />
        <InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="autoHide: true" />
    </div>
</template>
```

</details>

## Custom

A tooltip sample with a custom style and content.

```vue
<Button
    v-tooltip.bottom="{
        value: 'PrimeVue Rocks',
        pt: {
            arrow: {
                style: {
                    borderBottomColor: 'var(--p-primary-color)'
                }
            },
            text: '!bg-primary !text-primary-contrast !font-medium'
        }
    }"
    label="Button"
/>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center">
        <Button
            v-tooltip.bottom="{
                value: 'PrimeVue Rocks',
                pt: {
                    arrow: {
                        style: {
                            borderBottomColor: 'var(--p-primary-color)'
                        }
                    },
                    text: '!bg-primary !text-primary-contrast !font-medium'
                }
            }"
            severity="secondary"
            label="Button"
        />
    </div>
</template>
```

</details>

## Delay

Delays to the enter and leave events are defined with showDelay and hideDelay options respectively.

```vue
<Button v-tooltip="{ value: 'Confirm to proceed', showDelay: 1000, hideDelay: 300 }" label="Save" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center">
        <Button v-tooltip="{ value: 'Confirm to proceed', showDelay: 1000, hideDelay: 300 }" label="Save" />
    </div>
</template>
```

</details>

## Event

Event to display the tooltip is defined as a modifier, default event is hover.

```vue
<InputText v-tooltip.focus.top="'Enter your username'" type="text" placeholder="Focus" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center">
        <InputText v-tooltip.focus.top="'Enter your username'" type="text" placeholder="Focus" />
    </div>
</template>
```

</details>

## Position

There are four choices to position the tooltip, default value is right and alternatives are top , bottom , left .

```vue
<InputText v-tooltip="'Enter your username'" type="text" placeholder="Right" />
<InputText v-tooltip.top="'Enter your username'" type="text" placeholder="Top" />
<InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="Bottom" />
<InputText v-tooltip.left="'Enter your username'" type="text" placeholder="Left" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <InputText v-tooltip="'Enter your username'" type="text" placeholder="Right" />
        <InputText v-tooltip.top="'Enter your username'" type="text" placeholder="Top" />
        <InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="Bottom" />
        <InputText v-tooltip.left="'Enter your username'" type="text" placeholder="Left" />
    </div>
</template>
```

</details>

## Tooltip

## Pass Through Options

| Name  | Type                                  | Description                                         |
| ----- | ------------------------------------- | --------------------------------------------------- |
| root  | TooltipDirectivePassThroughOptionType | Used to pass attributes to the root's DOM element.  |
| text  | TooltipDirectivePassThroughOptionType | Used to pass attributes to the text's DOM element.  |
| arrow | TooltipDirectivePassThroughOptionType | Used to pass attributes to the arrow's DOM element. |
| hooks | any                                   | Used to manage all lifecycle hooks.                 |

## Theming

### CSS Classes

| Class           | Description                     |
| --------------- | ------------------------------- |
| p-tooltip       | Class name of the root element  |
| p-tooltip-arrow | Class name of the arrow element |
| p-tooltip-text  | Class name of the text element  |

### Design Tokens

| Token                 | CSS Variable              | Description           |
| --------------------- | ------------------------- | --------------------- |
| tooltip.max.width     | --p-tooltip-max-width     | Max width of root     |
| tooltip.gutter        | --p-tooltip-gutter        | Gutter of root        |
| tooltip.shadow        | --p-tooltip-shadow        | Shadow of root        |
| tooltip.padding       | --p-tooltip-padding       | Padding of root       |
| tooltip.border.radius | --p-tooltip-border-radius | Border radius of root |
| tooltip.background    | --p-tooltip-background    | Background of root    |
| tooltip.color         | --p-tooltip-color         | Color of root         |
