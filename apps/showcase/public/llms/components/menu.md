# Vue Menu Component

Menu displays a list of items in vertical orientation.

## Import

```javascript
import Menu from 'primevue/menu';
```

## Accessibility

Screen Reader Menu component uses the menu role and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. In popup mode, the component implicitly manages the aria-expanded , aria-haspopup and aria-controls attributes of the target element to define the relation between the target and the popup. Keyboard Support Key Function tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence. shift + tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence. enter Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target. space Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target. escape If menu is in overlay mode, popup gets closes and focus moves to target. down arrow Moves focus to the next menuitem. up arrow Moves focus to the previous menuitem. alt + up arrow If menu is in overlay mode, popup gets closes and focus moves to the target. home Moves focus to the first menuitem. end Moves focus to the last menuitem.

## Basic

Menu requires a collection of menuitems as its model .

```vue
<Menu :model="items" />
```

## Command

The command property defines the callback to run when an item is activated by click or a key event.

```vue
<Menu :model="items" />
<Toast />
```

## Group

Menu supports single level of grouping by defining children with the items property.

```vue
<Menu :model="items" />
```

## Popup

Overlay mode is enabled by adding popup property and calling toggle function of the menu ref with an event of the target.

```vue
<Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
<Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
```

## Router

Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.

## Template

Menu offers item customization with the item template that receives the menuitem instance from the model as a parameter. The submenu label has its own submenulabel template, additional slots named start and end are provided to embed content before or after the menu.

## Menu

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| model | MenuItem[] | - | An array of menuitems. |
| popup | boolean | false | Defines if menu would displayed as a popup. |
| appendTo | HTMLElement \| HintedString<"body" \| "self"> | body | A valid query selector or an HTMLElement to specify where the overlay gets attached. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| tabindex | string \| number | - | Index of the element in tabbing order. |
| ariaLabel | string | - | Defines a string value that labels an interactive element. |
| ariaLabelledby | string | - | Identifier of the underlying input element. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<MenuPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | MenuPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| list | MenuPassThroughOptionType | Used to pass attributes to the list's DOM element. |
| submenuLabel | MenuPassThroughOptionType | Used to pass attributes to the submenu item's DOM element. |
| item | MenuPassThroughOptionType | Used to pass attributes to the item's DOM element. |
| itemContent | MenuPassThroughOptionType | Used to pass attributes to the item content's DOM element. |
| itemLink | MenuPassThroughOptionType | Used to pass attributes to the item link's DOM element. |
| itemIcon | MenuPassThroughOptionType | Used to pass attributes to the item icon's DOM element. |
| itemLabel | MenuPassThroughOptionType | Used to pass attributes to the item label's DOM element. |
| separator | MenuPassThroughOptionType | Used to pass attributes to the separator's DOM element. |
| start | MenuPassThroughOptionType | Used to pass attributes to the start of the component. |
| end | MenuPassThroughOptionType | Used to pass attributes to the end of the component. |
| hooks | any | Used to manage all lifecycle hooks. |
| transition | MenuPassThroughTransitionType | Used to control Vue Transition API. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-menu | Class name of the root element |
| p-menu-start | Class name of the start element |
| p-menu-list | Class name of the list element |
| p-menu-submenu-item | Class name of the submenu item element |
| p-menu-separator | Class name of the separator element |
| p-menu-end | Class name of the end element |
| p-menu-item | Class name of the item element |
| p-menu-item-content | Class name of the item content element |
| p-menu-item-link | Class name of the item link element |
| p-menu-item-icon | Class name of the item icon element |
| p-menu-item-label | Class name of the item label element |

