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

## Progressbar

## Progressbar

