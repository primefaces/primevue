# Vue Badge Component

Badge is a small status indicator for another element.

## Import

```javascript
// import as component
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
```

## Accessibility

Screen Reader Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic, aria-live may be utilized as well. In case badges need to be tabbable, tabindex can be added to implement custom key handlers. Keyboard Support Component does not include any interactive elements.

## Basic

Content to display is defined with the value property or the default slot.

```vue
<Badge value="2"></Badge>
<Badge>10</Badge>
```

## Button

Buttons have built-in support for badges to display a badge inline.

```vue
<Button type="button" label="Notifications" icon="pi pi-bell" badge="2" />
<Button type="button" label="Inbox" icon="pi pi-inbox" badge="2" badgeSeverity="contrast" variant="outlined" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Notifications" icon="pi pi-bell" badge="2" />
        <Button type="button" label="Inbox" icon="pi pi-inbox" badge="2" badgeSeverity="contrast" variant="outlined" />
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Overlay

A badge can be added to any element by encapsulating the content with the OverlayBadge component.

```vue
<OverlayBadge value="2">
    <i class="pi pi-bell" style="font-size: 2rem" />
</OverlayBadge>
<OverlayBadge value="4" severity="danger">
    <i class="pi pi-calendar" style="font-size: 2rem" />
</OverlayBadge>
<OverlayBadge severity="danger">
    <i class="pi pi-envelope" style="font-size: 2rem" />
</OverlayBadge>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-6">
        <OverlayBadge value="2">
            <i class="pi pi-bell" style="font-size: 2rem" />
        </OverlayBadge>
        <OverlayBadge value="4" severity="danger">
            <i class="pi pi-calendar" style="font-size: 2rem" />
        </OverlayBadge>
        <OverlayBadge severity="danger">
            <i class="pi pi-envelope" style="font-size: 2rem" />
        </OverlayBadge>
    </div>
</template>

<script setup>

<\/script>
```
</details>

## Severity

Severity defines the variant of a badge.

```vue
<Badge value="2"></Badge>
<Badge value="6" severity="secondary"></Badge>
<Badge value="8" severity="success"></Badge>
<Badge value="4" severity="info"></Badge>
<Badge value="9" severity="warn"></Badge>
<Badge value="3" severity="danger"></Badge>
<Badge value="5" severity="contrast"></Badge>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <Badge value="2"></Badge>
        <Badge value="6" severity="secondary"></Badge>
        <Badge value="8" severity="success"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="9" severity="warn"></Badge>
        <Badge value="3" severity="danger"></Badge>
        <Badge value="5" severity="contrast"></Badge>
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Size

Use the size property to customize the dimensions of a Badge.

```vue
<Badge value="8" size="xlarge" severity="success"></Badge>
<Badge value="6" size="large" severity="warn"></Badge>
<Badge value="4" severity="info"></Badge>
<Badge value="2" size="small"></Badge>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center items-end gap-2">
        <Badge value="8" size="xlarge" severity="success"></Badge>
        <Badge value="6" size="large" severity="warn"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="2" size="small"></Badge>
    </div>
</template>

<script setup>

<\/script>
```
</details>

## Badge

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string \| number | - | Value to display inside the badge. |
| severity | null \| HintedString<"secondary" \| "info" \| "success" \| "warn" \| "danger" \| "contrast"> | - | Severity type of the badge. |
| size | null \| HintedString<"small" \| "large" \| "xlarge"> | - | Size of the badge, valid options are 'small', 'large', and 'xlarge'. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<BadgePassThroughOptions<any>> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Badge

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string \| number | - | Value to display inside the badge. |
| severity | null \| HintedString<"secondary" \| "info" \| "success" \| "warn" \| "danger" \| "contrast"> | - | Severity type of the badge. |
| size | null \| HintedString<"small" \| "large" \| "xlarge"> | - | Size of the badge, valid options are 'small', 'large', and 'xlarge'. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<BadgePassThroughOptions<any>> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Badgedirective

## Badgedirective

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | BadgePassThroughOptionType<T> | Used to pass attributes to the root's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-badge | Class name of the root element |

