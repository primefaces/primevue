# Vue ContextMenu Component

ContextMenu displays an overlay menu to display actions related to an element.

## Import

```javascript
import ContextMenu from 'primevue/contextmenu';
```

## Accessibility

Screen Reader ContextMenu component uses the menubar role with aria-orientation set to "vertical" and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a ContextMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup and aria-expanded to define the relation between the item and the submenu. Keyboard Support Key Function tab When focus is in the menu, closes the context menu and moves focus to the next focusable element in the page sequence. enter If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. space If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. escape Closes the context menu. down arrow If focus is not inside the menu and menu is open, add focus to the first item. If an item is already focused, moves focus to the next menuitem within the submenu. up arrow If focus is not inside the menu and menu is open, add focus to the last item. If an item is already focused, moves focus to the next menuitem within the submenu. right arrow Opens a submenu if there is one available and moves focus to the first item. left arrow Closes a submenu and moves focus to the root item of the closed submenu. home Moves focus to the first menuitem within the submenu. end Moves focus to the last menuitem within the submenu. any printable character Moves focus to the menuitem whose label starts with the characters being typed.

## Basic

ContextMenu requires a collection of menuitems as its model and the show method needs to be called explicity using an event of the target like contextmenu to display the menu.

```vue
<img alt="Logo" src="/images/nature/nature2.jpg" class="w-full md:w-[30rem] rounded shadow-lg" @contextmenu="onImageRightClick" aria-haspopup="true" />
<ContextMenu ref="menu" :model="items" />
```

## Command

The command property defines the callback to run when an item is activated by click or a key event.

```vue
<ul class="m-0 list-none border border-surface rounded p-4 flex flex-col gap-2 w-full sm:w-96">
    <li
        v-for="user in users"
        :key="user.id"
        :class="['p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between', { 'border-primary': selectedUser?.id === user.id }]"
        @contextmenu="onRightClick($event, user)"
    >
        <div class="flex flex-1 items-center gap-2">
            <img :alt="user.name" :src="\
```

## DataTable

DataTable has built-in support for ContextMenu, see the ContextMenu demo for an example.

## Document

Setting global property attaches the context menu to the document.

```vue
<ContextMenu global :model="items" />
```

## Router

Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.

## Template

ContextMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter.

## Contextmenu

## Contextmenu

