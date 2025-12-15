# Vue Fluid Component

Fluid is a layout component to make descendant components span full width of their container.

## Import

```javascript
import Fluid from 'primevue/fluid';
```

## Accessibility

Screen Reader Fluid does not require any roles and attributes. Keyboard Support Component does not include any interactive elements.

## Basic

Components with the fluid option like InputText have the ability to span the full width of their component. Enabling the fluid for each component individually may be cumbersome so wrap the content with Fluid to instead for an easier alternative. Any component that has the fluid property can be nested inside the Fluid component. The fluid property of a child component has higher precedence than the fluid container as shown in the last sample.

```vue
<div>
    <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
    <InputText id="non-fluid" />
</div>

<div>
    <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
    <InputText id="fluid" fluid />
</div>

<Fluid>
    <span class="font-bold mb-2 block">Fluid Container</span>
    <div class="grid grid-cols-2 gap-4">
        <div><InputText /></div>
        <div><InputText /></div>
        <div class="col-span-full"><InputText /></div>
        <div><InputText :fluid="false" placeholder="Non-Fluid" /></div>
    </div>
</Fluid>
```

## Fluid

### Props

| Name      | Type                                 | Default | Description                                                              |
| --------- | ------------------------------------ | ------- | ------------------------------------------------------------------------ |
| dt        | any                                  | -       | It generates scoped CSS variables using design tokens for the component. |
| pt        | PassThrough<FluidPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions | any                                  | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled  | boolean                              | false   | When enabled, it removes component related styles in the core.           |

### Slots

| Name    | Parameters | Description |
| ------- | ---------- | ----------- |
| default | Function   |             |

## Pass Through Options

| Name  | Type                       | Description                                        |
| ----- | -------------------------- | -------------------------------------------------- |
| root  | FluidPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| hooks | any                        | Used to manage all lifecycle hooks.                |

## Theming

### CSS Classes

| Class   | Description                    |
| ------- | ------------------------------ |
| p-fluid | Class name of the root element |
