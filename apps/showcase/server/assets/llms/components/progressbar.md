# Vue ProgressBar Component

ProgressBar is a process status indicator.

## Import

```javascript
import ProgressBar from 'primevue/progressbar';
```

## Accessibility

Screen Reader ProgressBar components uses progressbar role along with aria-valuemin , aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined using aria-labelledby and aria-label props. Keyboard Support Not applicable.

```vue
<span id="label_status" />
<ProgressBar aria-labelledby="label_status" />

<ProgressBar aria-label="Status" />
```

## Basic

ProgressBar is used with the value property.

```vue
<ProgressBar :value="50"></ProgressBar>
```

## Dynamic

Value is reactive so updating it dynamically changes the bar as well.

```vue
<ProgressBar :value="value"></ProgressBar>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Toast></Toast>
        <ProgressBar :value="value1" />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useToast } from "primevue/usetoast";

onMounted(() => {
    startProgress();
});

onBeforeUnmount(() => {
    endProgress();
});

const toast = useToast();
const value1 = ref(0);
const interval = ref();
const startProgress = () => {
    interval.value = setInterval(() => {
        let newValue = value1.value + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
            newValue = 100;
            toast.add({ severity: 'info', summary: 'Success', detail: 'Process Completed', life: 1000 });
        }
        value1.value = newValue;
    }, 2000);
};
const endProgress = () => {
    clearInterval(interval.value);
    interval.value = null;
};
<\/script>
```

</details>

## Indeterminate

For progresses with no value to track, set the mode property to indeterminate .

```vue
<ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
    </div>
</template>

<script setup>

<\/script>
```

</details>

## Template

Custom content inside the ProgressBar is defined with the default slot.

```vue
<ProgressBar :value="40"> {{ value }}/100 </ProgressBar>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <ProgressBar :value="40"> {{ value }}/100 </ProgressBar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(40);
<\/script>
```

</details>

## Progress Bar

### Props

| Name      | Type                                            | Default     | Description                                                              |
| --------- | ----------------------------------------------- | ----------- | ------------------------------------------------------------------------ |
| value     | number                                          | -           | Current value of the progress.                                           |
| mode      | "indeterminate" \| "determinate"                | determinate | Defines the mode of the progress                                         |
| showValue | boolean                                         | true        | Whether to display the progress bar value.                               |
| dt        | any                                             | -           | It generates scoped CSS variables using design tokens for the component. |
| pt        | PassThrough<ProgressBarPassThroughOptions<any>> | -           | Used to pass attributes to DOM elements inside the component.            |
| ptOptions | any                                             | -           | Used to configure passthrough(pt) options of the component.              |
| unstyled  | boolean                                         | false       | When enabled, it removes component related styles in the core.           |

## Pass Through Options

| Name  | Type                                | Description                                         |
| ----- | ----------------------------------- | --------------------------------------------------- |
| root  | ProgressBarPassThroughOptionType<T> | Used to pass attributes to the root's DOM element.  |
| value | ProgressBarPassThroughOptionType<T> | Used to pass attributes to the value's DOM element. |
| label | ProgressBarPassThroughOptionType<T> | Used to pass attributes to the label's DOM element. |
| hooks | any                                 | Used to manage all lifecycle hooks.                 |

## Theming

### CSS Classes

| Class               | Description                     |
| ------------------- | ------------------------------- |
| p-progressbar       | Class name of the root element  |
| p-progressbar-value | Class name of the value element |
| p-progressbar-label | Class name of the label element |

### Design Tokens

| Token                         | CSS Variable                      | Description           |
| ----------------------------- | --------------------------------- | --------------------- |
| progressbar.background        | --p-progressbar-background        | Background of root    |
| progressbar.border.radius     | --p-progressbar-border-radius     | Border radius of root |
| progressbar.height            | --p-progressbar-height            | Height of root        |
| progressbar.value.background  | --p-progressbar-value-background  | Background of value   |
| progressbar.label.color       | --p-progressbar-label-color       | Color of label        |
| progressbar.label.font.size   | --p-progressbar-label-font-size   | Font size of label    |
| progressbar.label.font.weight | --p-progressbar-label-font-weight | Font weight of label  |
