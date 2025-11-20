# Vue Navbar Component

Menubar also known as Navbar, is a horizontal menu component.

## Import

```javascript
import Menubar from 'primevue/menubar';
```

## Accessibility

Screen Reader Menubar component uses the menubar role and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a MenuBar uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup , aria-expanded and aria-controls to define the relation between the item and the submenu. In mobile viewports, a menu icon appears with a button role along with aria-haspopup , aria-expanded and aria-controls to manage the relation between the overlay menubar and the button. The value to describe the button can be defined aria-label or aria-labelledby specified using buttonProps , by default navigation key of the aria property from the locale API as the aria-label . Keyboard Support Key Function tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence. shift + tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence. enter If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. space If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. escape If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu. down arrow If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu. up arrow If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu. right arrow If focus is on a root element, moves focus to the next menuitem otherwise opens a submenu if there is one available and moves focus to the first item. left arrow If focus is on a root element, moves focus to the previous menuitem otherwise closes a submenu and moves focus to the root item of the closed submenu. home Moves focus to the first menuitem within the submenu. end Moves focus to the last menuitem within the submenu. any printable character Moves focus to the menuitem whose label starts with the characters being typed.

## Advanced

Menubar is a simple horizontal navigation component, for advanced use cases consider Marketing and Application NavBars in PrimeBlocks or templates with horizontal menus in application templates.

## Basic

Menubar requires a collection of menuitems as its model .

```vue
<Menubar :model="items" />
```

## Command

The command property defines the callback to run when an item is activated by click or a key event.

```vue
<Menubar :model="items" />
<Toast />
```

## Router

Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.

## Template

Menubar offers item customization with the item template that receives the menuitem instance from the model as a parameter. Additional slots named start and end are provided to embed content before or after the menu.

## Menubar

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| model | MenuItem[] | - | An array of menuitems. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| buttonProps | ButtonHTMLAttributes | - | Used to pass all properties of the HTMLButtonElement to the menu button. |
| ariaLabel | string | - | Defines a string value that labels an interactive element. |
| ariaLabelledby | string | - | Identifier of the underlying input element. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<MenubarPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Menubar

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| model | MenuItem[] | - | An array of menuitems. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| buttonProps | ButtonHTMLAttributes | - | Used to pass all properties of the HTMLButtonElement to the menu button. |
| ariaLabel | string | - | Defines a string value that labels an interactive element. |
| ariaLabelledby | string | - | Identifier of the underlying input element. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<MenubarPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | MenubarPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| rootList | MenubarPassThroughOptionType | Used to pass attributes to the root list's DOM element. |
| item | MenubarPassThroughOptionType | Used to pass attributes to the item's DOM element. |
| itemContent | MenubarPassThroughOptionType | Used to pass attributes to the item content's DOM element. |
| itemLink | MenubarPassThroughOptionType | Used to pass attributes to the item link's DOM element. |
| itemIcon | MenubarPassThroughOptionType | Used to pass attributes to the item icon's DOM element. |
| itemLabel | MenubarPassThroughOptionType | Used to pass attributes to the item label's DOM element. |
| submenuIcon | MenubarPassThroughOptionType | Used to pass attributes to the submenu icon's DOM element. |
| separator | MenubarPassThroughOptionType | Used to pass attributes to the separator's DOM element. |
| button | MenubarPassThroughOptionType | Used to pass attributes to the mobile menu button's DOM element. |
| buttonIcon | MenubarPassThroughOptionType | Used to pass attributes to the mobile menu button icon's DOM element. |
| submenu | MenubarPassThroughOptionType | Used to pass attributes to the submenu's DOM element. |
| start | MenubarPassThroughOptionType | Used to pass attributes to the start of the component. |
| end | MenubarPassThroughOptionType | Used to pass attributes to the end of the component. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-menubar | Class name of the root element |
| p-menubar-start | Class name of the start element |
| p-menubar-button | Class name of the button element |
| p-menubar-root-list | Class name of the root list element |
| p-menubar-item | Class name of the item element |
| p-menubar-item-content | Class name of the item content element |
| p-menubar-item-link | Class name of the item link element |
| p-menubar-item-icon | Class name of the item icon element |
| p-menubar-item-label | Class name of the item label element |
| p-menubar-submenu-icon | Class name of the submenu icon element |
| p-menubar-submenu | Class name of the submenu element |
| p-menubar-separator | Class name of the separator element |
| p-menubar-end | Class name of the end element |

