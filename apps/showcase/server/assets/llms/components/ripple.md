# Vue Ripple Component

Ripple directive adds ripple effect to the host element.

## Accessibility

Screen Reader Ripple element has the aria-hidden attribute as true so that it gets ignored by the screen readers. Keyboard Support Component does not include any interactive elements.

## Configuration

To start with, Ripple needs to be enabled globally. See the Configuration API for details.

```vue
mounted() { this.$primevue.config.ripple = true; }
```

<details>
<summary>Composition API Example</summary>

```vue
import { usePrimeVue } from 'primevue/config'; const PrimeVue = usePrimeVue(); PrimeVue.config.ripple = true;
```

</details>

## Custom

Default styling of the animation adds a shade of white. This can easily be customized using css that changes the color of p-ink element.

```vue
<div v-ripple class="box" style="border: 1px solid rgba(75, 175, 80, 0.3); --p-ripple-background: rgba(75, 175, 80, 0.3)">Green</div>
<div v-ripple class="box" style="border: 1px solid rgba(255, 193, 6, 0.3); --p-ripple-background: rgba(255, 193, 6, 0.3)">Orange</div>
<div v-ripple class="box" style="border: 1px solid rgba(156, 39, 176, 0.3); --p-ripple-background: rgba(156, 39, 176, 0.3)">Purple</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="flex justify-center items-center gap-2">
        <div v-ripple class="box" style="border: 1px solid rgba(75, 175, 80, 0.3); --p-ripple-background: rgba(75, 175, 80, 0.3)">Green</div>
        <div v-ripple class="box" style="border: 1px solid rgba(255, 193, 6, 0.3); --p-ripple-background: rgba(255, 193, 6, 0.3)">Orange</div>
        <div v-ripple class="box" style="border: 1px solid rgba(156, 39, 176, 0.3); --p-ripple-background: rgba(156, 39, 176, 0.3)">Purple</div>
    </div>
</template>

<style scoped>
.box {
    padding: 2rem;
    border-radius: 10px;
    width: 110px;
    text-align: center;
}
</style>
```

</details>

## Default

Ripple is enabled by adding add p-ripple class to the target and attach the directive with the v- prefix.

```vue
<div v-ripple class="ripple-box">Default</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <div v-ripple class="ripple-box">Default</div>
    </div>
</template>

<script setup>
<\/script>

<style scoped>
.ripple-box {
    display: flex;
    user-select: none;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    font-weight: bold;
    background: var(--p-content-background);
    border: 1px solid var(--p-content-border-color);
    border-radius: var(--p-content-border-radius);
}
<\/style>
```

</details>

## Ripple

## Pass Through Options

| Name  | Type                                 | Description                                        |
| ----- | ------------------------------------ | -------------------------------------------------- |
| root  | RippleDirectivePassThroughOptionType | Used to pass attributes to the root's DOM element. |
| hooks | any                                  | Used to manage all lifecycle hooks.                |

## Theming

### CSS Classes

| Class | Description                    |
| ----- | ------------------------------ |
| p-ink | Class name of the root element |

### Design Tokens

| Token             | CSS Variable          | Description        |
| ----------------- | --------------------- | ------------------ |
| ripple.background | --p-ripple-background | Background of root |
