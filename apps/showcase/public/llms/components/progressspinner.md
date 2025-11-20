# Vue ProgressSpinner Component

ProgressSpinner is a process status indicator.

## Import

```javascript
import ProgressSpinner from 'primevue/progressspinner';
```

## Accessibility

Screen Reader ProgressSpinner components uses progressbar role. Value to describe the component can be defined using aria-labelledby and aria-label props. Keyboard Support Component does not include any interactive elements.

```vue
<ProgressSpinner aria-label="Loading" />
```

## Basic

An infinite spin animation is displayed by default.

```vue
<ProgressSpinner />
```

## Custom

ProgressSpinner can be customized with styling property like style , strokeWidth fill and animationDuration .

```vue
<ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
    animationDuration=".5s" aria-label="Custom ProgressSpinner" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Progressspinner

