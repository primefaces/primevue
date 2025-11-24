# Vue MegaMenu Component

MegaMenu is a navigation component that displays submenus and content in columns.

## Import

```javascript
import MegaMenu from 'primevue/megamenu';
```

## Accessibility

Screen Reader MegaMenu component uses the menubar role along with aria-orientation and the value to describe the component can either be provided with aria-labelledby or aria-label props. Each list item has a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a MegaMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, root menuitems that open a submenu have aria-haspopup and aria-expanded to define the relation between the item and the submenu. Keyboard Support Key Function tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence. shift + tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence. enter If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. space If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. escape If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu. down arrow If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu. up arrow If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu. alt + up arrow If focus is inside a popup menu, moves focus to the first element in the submenu otherwise closes the submenu and moves focus to the root item of the closed submenu in horizontal mode. right arrow If focus is on a root element, moves focus to the next menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the next menu group. left arrow If focus is on a root element, moves focus to the previous menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the previous menu group. home Moves focus to the first menuitem within the submenu. end Moves focus to the last menuitem within the submenu. any printable character Moves focus to the menuitem whose label starts with the characters being typed.

## Basic

MegaMenu requires a collection of menuitems as its model .

```vue
<MegaMenu :model="items" />
```

## Command

The command property of a menuitem defines the callback to run when an item is activated by click or a key event.

## Router

Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.

## Template

MegaMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter. Additional slots named start and end are provided to embed content before or after the menu.

## VerticalDoc

Layout of the MegaMenu is configured with the orientation property that accepts horizontal and vertical as options.

```vue
<MegaMenu :model="items" orientation="vertical" />
```

