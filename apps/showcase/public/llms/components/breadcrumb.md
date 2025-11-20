# Vue Breadcrumb Component

Breadcrumb provides contextual information about page hierarchy.

## Import

```javascript
import Breadcrumb from 'primevue/breadcrumb';
```

## Accessibility

Screen Reader Breadcrumb uses the nav element and since any attribute is passed to the root implicitly aria-labelledby or aria-label can be used to describe the component. Inside an ordered list is used where the list item separators have aria-hidden to be able to ignored by the screen readers. If the last link represents the current route, aria-current is added with "page" as the value. Keyboard Support No special keyboard interaction is needed, all menuitems are focusable based on the page tab sequence.

## Basic

Breadcrumb requires a collection of menuitems as its model , the root item is defined with the home property.

```vue
<Breadcrumb :home="home" :model="items" />
```

## Router

Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.

## Template

Custom content can be placed inside the items using the item template. The divider between the items has its own separator template.

```vue
<Breadcrumb :home="home" :model="items">
    <template #item="{ item }">
        <a class="cursor-pointer" :href="item.url">
            <span :class="item.icon"></span>
        </a>
    </template>
    <template #separator> / </template>
</Breadcrumb>
```

## Breadcrumb

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| model | MenuItem[] | - | An array of menuitems. |
| home | any | - | Configuration for the home icon. |
| ariaLabel | string | - | Defines a string value that labels an interactive element. |
| ariaLabelledby | string | - | Identifier of the underlying menu element. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<BreadcrumbPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | BreadcrumbPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| list | BreadcrumbPassThroughOptionType | Used to pass attributes to the list's DOM element. |
| item | BreadcrumbPassThroughOptionType | Used to pass attributes to the  item's DOM element. |
| itemLink | BreadcrumbPassThroughOptionType | Used to pass attributes to the item link's DOM element. |
| itemIcon | BreadcrumbPassThroughOptionType | Used to pass attributes to the item icon's DOM element. |
| itemLabel | BreadcrumbPassThroughOptionType | Used to pass attributes to the item label's DOM element. |
| separator | BreadcrumbPassThroughOptionType | Used to pass attributes to the separator's DOM element. |
| separatorIcon | BreadcrumbPassThroughOptionType | Used to pass attributes to the separator icon's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-breadcrumb | Class name of the root element |
| p-breadcrumb-list | Class name of the list element |
| p-breadcrumb-home-item | Class name of the home item element |
| p-breadcrumb-separator | Class name of the separator element |
| p-breadcrumb-separator-icon | Class name of the separator icon element |
| p-breadcrumb-item | Class name of the item element |
| p-breadcrumb-item-link | Class name of the item link element |
| p-breadcrumb-item-icon | Class name of the item icon element |
| p-breadcrumb-item-label | Class name of the item label element |

