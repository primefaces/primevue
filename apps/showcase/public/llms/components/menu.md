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

