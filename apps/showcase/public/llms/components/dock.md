# Vue Dock Component

Dock is a navigation component consisting of menuitems.

## Import

```javascript
import Dock from 'primevue/dock';
```

## Accessibility

Screen Reader Dock component uses the menu role with the aria-orientation and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. Keyboard Support Key Function tab Moves focus to the first menuitem. enter Activates the focused menuitem. space Activates the focused menuitem. down arrow Moves focus to the next menuitem in vertical layout. up arrow Moves focus to the previous menuitem in vertical layout. right arrow Moves focus to the next menuitem in horizontal layout. left arrow Moves focus to the previous menuitem in horizontal layout. home Moves focus to the first menuitem. end Moves focus to the last menuitem.

## AdvancedDoc

A mock desktop UI implemented with various components in addition to Dock.

```vue
<Dock :model="items">
    <template #item="{ item }">
        <a v-tooltip.top="item.label" href="#" class="p-dock-item-link" @click="onDockItemClick($event, item)">
            <img :alt="item.label" :src="item.icon" style="width: 100%" />
        </a>
    </template>
</Dock>
```

## Basic

Dock requires a collection of menuitems as its model and an icon template. Default location is bottom and other edges are also available when defined with the position property.

```vue
<Dock :model="items" :position="position">
    <template #itemicon="{ item }">
        <img v-tooltip.top="item.label" :alt="item.label" :src="item.icon" style="width: 100%" />
    </template>
</Dock>
```

## Dock

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| model | MenuItem[] | - | MenuModel instance to define the action items. |
| position | HintedString<"left" \| "right" \| "top" \| "bottom"> | bottom | Position of element. |
| class | any | - | Style class of the element. |
| style | any | - | Inline style of the element. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| tooltipOptions | DockTooltipOptions | - | Whether to display the tooltip on items. The modifiers of Tooltip can be used like an object in it. Valid keys are 'event' and 'position'. |
| menuId | string | - | Unique identifier of the menu. |
| tabindex | string \| number | - | Index of the element in tabbing order. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Establishes a string value that labels the component. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<DockPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Dock

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| model | MenuItem[] | - | MenuModel instance to define the action items. |
| position | HintedString<"left" \| "right" \| "top" \| "bottom"> | bottom | Position of element. |
| class | any | - | Style class of the element. |
| style | any | - | Inline style of the element. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| tooltipOptions | DockTooltipOptions | - | Whether to display the tooltip on items. The modifiers of Tooltip can be used like an object in it. Valid keys are 'event' and 'position'. |
| menuId | string | - | Unique identifier of the menu. |
| tabindex | string \| number | - | Index of the element in tabbing order. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Establishes a string value that labels the component. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<DockPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | DockPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| listContainer | DockPassThroughOptionType | Used to pass attributes to the list container's DOM element. |
| list | DockPassThroughOptionType | Used to pass attributes to the list's DOM element. |
| item | DockPassThroughOptionType | Used to pass attributes to the  item's DOM element. |
| itemContent | DockPassThroughOptionType | Used to pass attributes to the item content's DOM element. |
| itemLink | DockPassThroughOptionType | Used to pass attributes to the item link's DOM element. |
| itemIcon | DockPassThroughOptionType | Used to pass attributes to the item icon's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-dock | Class name of the root element |
| p-dock-list-container | Class name of the list container element |
| p-dock-list | Class name of the list element |
| p-dock-item | Class name of the item element |
| p-dock-item-content | Class name of the item content element |
| p-dock-item-link | Class name of the item link element |
| p-dock-item-icon | Class name of the item icon element |

