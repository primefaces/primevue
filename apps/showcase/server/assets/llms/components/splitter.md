# Vue Splitter Component

Splitter is utilized to separate and resize panels.

## Import

```javascript
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
```

## Accessibility

Screen Reader Splitter bar defines separator as the role with aria-orientation set to either horizontal or vertical. Keyboard Support Key Function tab Moves focus through the splitter bar. down arrow Moves a vertical splitter down. up arrow Moves a vertical splitter up. left arrow Moves a horizontal splitter to the left. right arrow Moves a horizontal splitter to the right.

## Horizontal

Splitter requires two SplitterPanel components as children which are displayed horizontally by default.

```vue
<Splitter style="height: 300px">
    <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
    <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
</Splitter>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Nested

Splitters can be combined to create advanced layouts.

```vue
<Splitter style="height: 300px">
    <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10"> Panel 1 </SplitterPanel>
    <SplitterPanel :size="80">
        <Splitter layout="vertical">
            <SplitterPanel class="flex items-center justify-center" :size="15"> Panel 2 </SplitterPanel>
            <SplitterPanel :size="85">
                <Splitter>
                    <SplitterPanel class="flex items-center justify-center" :size="20"> Panel 3 </SplitterPanel>
                    <SplitterPanel class="flex items-center justify-center" :size="80"> Panel 4 </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    </SplitterPanel>
</Splitter>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel :size="80">
                <Splitter layout="vertical">
                    <SplitterPanel class="flex items-center justify-center" :size="15"> Panel 2 </SplitterPanel>
                    <SplitterPanel :size="85">
                        <Splitter>
                            <SplitterPanel class="flex items-center justify-center" :size="20"> Panel 3 </SplitterPanel>
                            <SplitterPanel class="flex items-center justify-center" :size="80"> Panel 4 </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Size

Initial dimension of a panel is percentage based and defined using the size property. In addition, minSize is provided to set a minimum value during a resize.

```vue
<Splitter style="height: 300px">
    <SplitterPanel class="flex items-center justify-center" :size="25" :minSize="10"> Panel 1 </SplitterPanel>
    <SplitterPanel class="flex items-center justify-center" :size="75"> Panel 2 </SplitterPanel>
</Splitter>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex items-center justify-center" :size="25" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center" :size="75"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Vertical

Panels are displayed as stacked by setting the layout to vertical .

```vue
<Splitter style="height: 300px" layout="vertical">
    <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
    <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
</Splitter>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Splitter style="height: 300px" layout="vertical">
            <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Splitter

### Props

| Name         | Type                                     | Default    | Description                                                                                                                    |
| ------------ | ---------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| layout       | HintedString<"horizontal" \| "vertical"> | horizontal | Orientation of the panels.                                                                                                     |
| gutterSize   | number                                   | 4          | Size of the divider in pixels.                                                                                                 |
| stateKey     | string                                   | -          | Storage identifier of a stateful Splitter.                                                                                     |
| stateStorage | HintedString<"session" \| "local">       | session    | Defines where a stateful splitter keeps its state, valid values are 'session' for sessionStorage and 'local' for localStorage. |
| step         | number                                   | 5          | Step factor to increment/decrement the size of the panels while pressing the arrow keys.                                       |
| dt           | any                                      | -          | It generates scoped CSS variables using design tokens for the component.                                                       |
| pt           | PassThrough<SplitterPassThroughOptions>  | -          | Used to pass attributes to DOM elements inside the component.                                                                  |
| ptOptions    | any                                      | -          | Used to configure passthrough(pt) options of the component.                                                                    |
| unstyled     | boolean                                  | false      | When enabled, it removes component related styles in the core.                                                                 |

## Pass Through Options

| Name         | Type                          | Description                                                 |
| ------------ | ----------------------------- | ----------------------------------------------------------- |
| root         | SplitterPassThroughOptionType | Used to pass attributes to the root's DOM element.          |
| gutter       | SplitterPassThroughOptionType | Used to pass attributes to the gutter's DOM element.        |
| gutterHandle | SplitterPassThroughOptionType | Used to pass attributes to the gutter handle's DOM element. |
| hooks        | any                           | Used to manage all lifecycle hooks.                         |

## Theming

### CSS Classes

| Class                    | Description                             |
| ------------------------ | --------------------------------------- |
| p-splitter               | Class name of the root element          |
| p-splitter-gutter        | Class name of the gutter element        |
| p-splitter-gutter-handle | Class name of the gutter handle element |

### Design Tokens

| Token                             | CSS Variable                          | Description                 |
| --------------------------------- | ------------------------------------- | --------------------------- |
| splitter.background               | --p-splitter-background               | Background of root          |
| splitter.border.color             | --p-splitter-border-color             | Border color of root        |
| splitter.color                    | --p-splitter-color                    | Color of root               |
| splitter.transition.duration      | --p-splitter-transition-duration      | Transition duration of root |
| splitter.gutter.background        | --p-splitter-gutter-background        | Background of gutter        |
| splitter.handle.size              | --p-splitter-handle-size              | Size of handle              |
| splitter.handle.background        | --p-splitter-handle-background        | Background of handle        |
| splitter.handle.border.radius     | --p-splitter-handle-border-radius     | Border radius of handle     |
| splitter.handle.focus.ring.width  | --p-splitter-handle-focus-ring-width  | Focus ring width of handle  |
| splitter.handle.focus.ring.style  | --p-splitter-handle-focus-ring-style  | Focus ring style of handle  |
| splitter.handle.focus.ring.color  | --p-splitter-handle-focus-ring-color  | Focus ring color of handle  |
| splitter.handle.focus.ring.offset | --p-splitter-handle-focus-ring-offset | Focus ring offset of handle |
| splitter.handle.focus.ring.shadow | --p-splitter-handle-focus-ring-shadow | Focus ring shadow of handle |
