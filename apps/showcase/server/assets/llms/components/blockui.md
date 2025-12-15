# Vue BlockUI Component

BlockUI can either block other components or the whole page.

## Import

```javascript
import BlockUI from 'primevue/blockui';
```

## Accessibility

Screen Reader BlockUI manages aria-busy state attribute when the UI gets blocked and unblocked. Any valid attribute is passed to the root element so additional attributes like role and aria-live can be used to define live regions. Keyboard Support Component does not include any interactive elements.

## Basic

The element to block should be placed as a child of BlockUI and blocked property is required to control the state.

```vue
<div class="mb-4">
    <Button label="Block" @click="blocked = true" class="me-2" severity="secondary"></Button>
    <Button label="Unblock" @click="blocked = false" severity="secondary"></Button>
</div>
<BlockUI :blocked="blocked">
    <Panel header="Basic">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Panel>
</BlockUI>
```

## Document

Enabling fullScreen property controls the document.

```vue
<BlockUI :blocked="blocked" fullScreen />
<Button label="Block" @click="blocked = true" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <BlockUI :blocked="blocked" fullScreen />
        <Button label="Block" @click="blockDocument" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const blocked = ref(false);
const blockDocument = () => {
    blocked.value = true;

    setTimeout(() => {
        blocked.value = false;
    }, 3000);
}
<\/script>
```

</details>

## Block U I

### Props

| Name       | Type                                   | Default | Description                                                              |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------------ |
| blocked    | boolean                                | false   | Controls the blocked state.                                              |
| fullScreen | boolean                                | false   | When enabled, the whole document gets blocked.                           |
| baseZIndex | number                                 | 0       | Base zIndex value to use in layering.                                    |
| autoZIndex | boolean                                | true    | Whether to automatically manage layering.                                |
| dt         | any                                    | -       | It generates scoped CSS variables using design tokens for the component. |
| pt         | PassThrough<BlockUIPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions  | any                                    | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled   | boolean                                | false   | When enabled, it removes component related styles in the core.           |

## Pass Through Options

| Name  | Type                         | Description                                        |
| ----- | ---------------------------- | -------------------------------------------------- |
| root  | BlockUIPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| mask  | BlockUIPassThroughOptionType | Used to pass attributes to the mask's DOM element. |
| hooks | any                          | Used to manage all lifecycle hooks.                |

## Theming

### CSS Classes

| Class     | Description                    |
| --------- | ------------------------------ |
| p-blockui | Class name of the root element |

### Design Tokens

| Token                 | CSS Variable              | Description           |
| --------------------- | ------------------------- | --------------------- |
| blockui.border.radius | --p-blockui-border-radius | Border radius of root |
