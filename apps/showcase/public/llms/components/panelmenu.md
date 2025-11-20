# Vue PanelMenu Component

PanelMenu is a hybrid of accordion-tree components.

## Import

```javascript
import PanelMenu from 'primevue/panelmenu';
```

## Accessibility

Screen Reader Accordion header elements have a button role, an aria-label defined using the label property of the menuitem model and aria-controls to define the id of the content section along with aria-expanded for the visibility state. The content of an accordion panel uses region role, defines an id that matches the aria-controls of the header and aria-labelledby referring to the id of the header. The tree elements has a tree as the role and each menu item has a treeitem role along with aria-label and aria-expanded attributes. The container element of a treenode has the group role. The aria-setsize , aria-posinset and aria-level attributes are calculated implicitly and added to each treeitem. Header Keyboard Support Key Function tab Moves focus to the next the focusable element in the page tab sequence. shift + tab Moves focus to the previous the focusable element in the page tab sequence. enter Toggles the visibility of the content. space Toggles the visibility of the content. down arrow Moves focus to the next header. If focus is on the last header, moves focus to the first header. up arrow Moves focus to the previous header. If focus is on the first header, moves focus to the last header. home Moves focus to the first header. end Moves focus to the last header.

## Basic

PanelMenu requires a collection of menuitems as its model .

```vue
<PanelMenu :model="items" />
```

## Command

The command property defines the callback to run when an item is activated by click or a key event.

```vue
<PanelMenu :model="items" />
<Toast />
```

## Controlled

If the menuitem has a key defined, PanelMenu state can be controlled programmatically with the expandedKeys property that defines the keys that are expanded. This property is a Map instance whose key is the key of a node and value is a boolean.

```vue
<Button type="button" label="Toggle All" text @click="toggleAll" />
<PanelMenu v-model:expandedKeys="expandedKeys" :model="items" />
```

## Multiple

Only one root menuitem at a time can be active by default, enabling multiple property changes this behavior to allow multiple root menuitems.

```vue
<PanelMenu :model="items" multiple />
```

## Router

Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.

## Template

PanelMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter.

## Panelmenu

