# Vue Avatar Component

Avatar represents people using icons, labels and images.

## Import

```javascript
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup'; //Optional for grouping
```

## Accessibility

Screen Reader Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like img along with aria-labelledby or aria-label to describe the component. In case avatars need to be tabbable, tabindex can be added as well to implement custom key handlers. Keyboard Support Component does not include any interactive elements.

## AvatarGroup

Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.

```vue
<AvatarGroup>
    <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
    <Avatar image="/images/avatar/asiyajavayant.png" shape="circle" />
    <Avatar image="/images/avatar/onyamalimba.png" shape="circle" />
    <Avatar image="/images/avatar/ionibowcher.png" shape="circle" />
    <Avatar image="/images/avatar/xuxuefeng.png" shape="circle" />
    <Avatar label="+2" shape="circle" />
</AvatarGroup>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <AvatarGroup>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" shape="circle" />
            <Avatar label="+2" shape="circle" />
        </AvatarGroup>
    </div>
</template>

<script setup>

<\/script>
```

</details>

## Icon

A font icon is displayed as an Avatar with the icon property.

```vue
<Avatar icon="pi pi-user" class="mr-2" size="xlarge" />
<Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
<Avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" />

<Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
<Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
<Avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" shape="circle" />

<OverlayBadge value="4" severity="danger" class="inline-flex">
    <Avatar icon="pi pi-user" size="xlarge" />
</OverlayBadge>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="flex flex-wrap gap-8">
            <div class="flex-auto">
                <h5>Icon</h5>
                <Avatar icon="pi pi-user" class="mr-2" size="xlarge" />
                <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
                <Avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" />
            </div>

            <div class="flex-auto">
                <h5>Circle</h5>
                <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
                <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
                <Avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <OverlayBadge value="4" severity="danger" class="inline-flex">
                    <Avatar icon="pi pi-user" size="xlarge" />
                </OverlayBadge>
            </div>
        </div>
    </div>
</template>

<script setup>

<\/script>
```

</details>

## Image

Use the image property to display an image as an Avatar.

```vue
<Avatar image="/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
<Avatar image="/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
<Avatar image="/images/avatar/onyamalimba.png" shape="circle" />

<OverlayBadge value="4" severity="danger" class="inline-flex">
    <Avatar class="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
</OverlayBadge>

<Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex items-center justify-center mr-2" size="xlarge" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="flex flex-wrap gap-8">
            <div class="flex-auto">
                <h5>Image</h5>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <OverlayBadge value="4" severity="danger" class="inline-flex">
                    <Avatar class="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
                </OverlayBadge>
            </div>

            <div class="flex-auto">
                <h5>Gravatar</h5>
                <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex items-center justify-center mr-2" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script setup>

<\/script>
```

</details>

## Label

A letter Avatar is defined with the label property.

```vue
<Avatar label="P" class="mr-2" size="xlarge" />
<Avatar label="V" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
<Avatar label="U" class="mr-2" style="background-color: #dee9fc; color: #1a2551" />

<Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
<Avatar label="V" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
<Avatar label="U" class="mr-2" style="background-color: #dee9fc; color: #1a2551" shape="circle" />

<OverlayBadge value="4" severity="danger" class="inline-flex">
    <Avatar label="U" size="xlarge" />
</OverlayBadge>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="flex flex-wrap gap-8">
        <div class="flex-auto">
            <h5>Label</h5>
            <Avatar label="P" class="mr-2" size="xlarge" />
            <Avatar label="V" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
            <Avatar label="U" class="mr-2" style="background-color: #dee9fc; color: #1a2551" />
        </div>

        <div class="flex-auto">
            <h5>Circle</h5>
            <Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
            <Avatar label="V" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
            <Avatar label="U" class="mr-2" style="background-color: #dee9fc; color: #1a2551" shape="circle" />
        </div>

        <div class="flex-auto">
            <h5>Badge</h5>
            <OverlayBadge value="4" severity="danger" class="inline-flex">
                <Avatar label="U" size="xlarge" />
            </OverlayBadge>
        </div>
    </div>
</template>

<script setup>

<\/script>
```

</details>

## Avatar

### Props

| Name           | Type                                          | Default | Description                                                                                                     |
| -------------- | --------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| label          | string                                        | -       | Defines the text to display.                                                                                    |
| icon           | string                                        | -       | Defines the icon to display.                                                                                    |
| image          | string                                        | -       | Defines the image to display.                                                                                   |
| size           | HintedString<"large" \| "normal" \| "xlarge"> | normal  | Size of the element.                                                                                            |
| shape          | HintedString<"square" \| "circle">            | square  | Shape of the element.                                                                                           |
| ariaLabel      | string                                        | -       | Establishes a string value that labels the component.                                                           |
| ariaLabelledby | string                                        | -       | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| dt             | any                                           | -       | It generates scoped CSS variables using design tokens for the component.                                        |
| pt             | PassThrough<AvatarPassThroughOptions>         | -       | Used to pass attributes to DOM elements inside the component.                                                   |
| ptOptions      | any                                           | -       | Used to configure passthrough(pt) options of the component.                                                     |
| unstyled       | boolean                                       | false   | When enabled, it removes component related styles in the core.                                                  |

## Pass Through Options

| Name  | Type                        | Description                                         |
| ----- | --------------------------- | --------------------------------------------------- |
| root  | AvatarPassThroughOptionType | Used to pass attributes to the root's DOM element.  |
| label | AvatarPassThroughOptionType | Used to pass attributes to the label's DOM element. |
| icon  | AvatarPassThroughOptionType | Used to pass attributes to the icon's DOM element.  |
| image | AvatarPassThroughOptionType | Used to pass attributes to the image's DOM element. |
| hooks | any                         | Used to manage all lifecycle hooks.                 |

## Theming

### CSS Classes

| Class          | Description                     |
| -------------- | ------------------------------- |
| p-avatar       | Class name of the root element  |
| p-avatar-label | Class name of the label element |
| p-avatar-icon  | Class name of the icon element  |

### Design Tokens

| Token                     | CSS Variable                  | Description           |
| ------------------------- | ----------------------------- | --------------------- |
| avatar.width              | --p-avatar-width              | Width of root         |
| avatar.height             | --p-avatar-height             | Height of root        |
| avatar.font.size          | --p-avatar-font-size          | Font size of root     |
| avatar.background         | --p-avatar-background         | Background of root    |
| avatar.color              | --p-avatar-color              | Color of root         |
| avatar.border.radius      | --p-avatar-border-radius      | Border radius of root |
| avatar.icon.size          | --p-avatar-icon-size          | Size of icon          |
| avatar.group.border.color | --p-avatar-group-border-color | Border color of group |
| avatar.group.offset       | --p-avatar-group-offset       | Offset of group       |
| avatar.lg.width           | --p-avatar-lg-width           | Width of lg           |
| avatar.lg.height          | --p-avatar-lg-height          | Height of lg          |
| avatar.lg.font.size       | --p-avatar-lg-font-size       | Font size of lg       |
| avatar.lg.icon.size       | --p-avatar-lg-icon-size       | Icon size of lg       |
| avatar.lg.group.offset    | --p-avatar-lg-group-offset    | Group offset of lg    |
| avatar.xl.width           | --p-avatar-xl-width           | Width of xl           |
| avatar.xl.height          | --p-avatar-xl-height          | Height of xl          |
| avatar.xl.font.size       | --p-avatar-xl-font-size       | Font size of xl       |
| avatar.xl.icon.size       | --p-avatar-xl-icon-size       | Icon size of xl       |
| avatar.xl.group.offset    | --p-avatar-xl-group-offset    | Group offset of xl    |
