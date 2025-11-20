# Vue TieredMenu Component

TieredMenu displays submenus in nested overlays.

## Import

```javascript
import TieredMenu from 'primevue/tieredmenu';
```

## Accessibility

Screen Reader TieredMenu component uses the menubar role with aria-orientation set to "vertical" and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a TieredMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup and aria-expanded to define the relation between the item and the submenu. In popup mode, the component implicitly manages the aria-expanded , aria-haspopup and aria-controls attributes of the target element to define the relation between the target and the popup. Keyboard Support Key Function tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence. shift + tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence. enter If menuitem has a submenu, opens the submenu otherwise activates the menuitem and closes all open overlays. space If menuitem has a submenu, opens the submenu otherwise activates the menuitem and closes all open overlays. escape If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu. down arrow Moves focus to the next menuitem within the submenu. up arrow Moves focus to the previous menuitem within the submenu. alt + up arrow Closes the popup, then moves focus to the target element. right arrow If option is closed, opens the option otherwise moves focus to the first child option. left arrow If option is open, closes the option otherwise moves focus to the parent option. home Moves focus to the first menuitem within the submenu. end Moves focus to the last menuitem within the submenu. any printable character Moves focus to the menuitem whose label starts with the characters being typed.

## Basic

TieredMenu requires a collection of menuitems as its model .

```vue
<TieredMenu :model="items" />
```

## Command

The command property defines the callback to run when an item is activated by click or a key event.

```vue
<TieredMenu :model="items" />
<Toast />
```

## Popup

Overlay mode is enabled by adding popup property and calling toggle function of the menu ref with an event of the target.

```vue
<Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
<TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
```

## Router

Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.

## Template

TieredMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter.

## Tieredmenu

