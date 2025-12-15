# Vue SplitButton Component

SplitButton groups a set of commands in an overlay with a default command.

## Import

```javascript
import SplitButton from 'primevue/splitbutton';
```

## Accessibility

Screen Reader SplitButton component renders two native button elements, main button uses the label property to define aria-label by default which can be customized with buttonProps . Dropdown button requires an explicit definition to describe it using menuButtonProps option and also includes aria-haspopup , aria-expanded for states along with aria-controls to define the relation between the popup and the button. The popup overlay uses menu role on the list and each action item has a menuitem role with an aria-label as the menuitem label. The id of the menu refers to the aria-controls of the dropdown button. Main Button Keyboard Support Key Function enter Activates the button. space Activates the button. Menu Button Keyboard Support Key Function enter space down arrow up arrow Opens the menu and moves focus to the first item. Menu Keyboard Support Key Function enter If menuitem has a submenu, opens the submenu otherwise activates the menuitem and closes all open overlays. space If menuitem has a submenu, opens the submenu otherwise activates the menuitem and closes all open overlays. escape If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu. down arrow Moves focus to the next menuitem within the submenu. up arrow Moves focus to the previous menuitem within the submenu. alt + up arrow Closes the popup, then moves focus to the target element. right arrow In nested mode if option is closed, opens the option otherwise moves focus to the first child option. left arrow In nested mode if option is open, closes the option otherwise moves focus to the parent option. home Moves focus to the first menuitem within the submenu. end Moves focus to the last menuitem within the submenu. any printable character Moves focus to the menuitem whose label starts with the characters being typed.

```vue
<SplitButton :buttonProps="{ 'aria-label': 'Default Action' }" :menuButtonProps="{ 'aria-label': 'More Options' }" />
```

## Basic

SplitButton has a default command button and a collection of additional options defined by the model property.

```vue
<SplitButton label="Save" @click="save" :model="items" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<SplitButton label="Save" @click="save" :model="items" disabled />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Toast />
        <SplitButton label="Save" @click="save" :model="items" disabled />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
```

</details>

## Icons

The buttons and menuitems have support to display icons.

```vue
<SplitButton label="Save" icon="pi pi-check" dropdownIcon="pi pi-cog" @click="save" :model="items" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Toast />
        <SplitButton label="Save" icon="pi pi-check" dropdownIcon="pi pi-cog" @click="save" :model="items" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        icon: 'pi pi-power-off',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
```

</details>

## Nested

Multi-level menus are supported with a nested menu hierarchy.

```vue
<SplitButton label="Save" @click="save" :model="items" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <SplitButton label="Save" @click="save" :model="items" />
    </div>
</template>

<script setup>
const items = [
    {
        label: 'File',
        icon: 'pi pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                items: [
                    {
                        label: 'Document',
                        icon: 'pi pi-file'
                    },
                    {
                        label: 'Image',
                        icon: 'pi pi-image'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-video'
                    }
                ]
            },
            {
                label: 'Open',
                icon: 'pi pi-folder-open'
            },
            {
                label: 'Print',
                icon: 'pi pi-print'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-file-edit',
        items: [
            {
                label: 'Copy',
                icon: 'pi pi-copy'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ]
    },
    {
        label: 'Search',
        icon: 'pi pi-search'
    },
    {
        separator: true
    },
    {
        label: 'Share',
        icon: 'pi pi-share-alt',
        items: [
            {
                label: 'Slack',
                icon: 'pi pi-slack'
            },
            {
                label: 'Whatsapp',
                icon: 'pi pi-whatsapp'
            }
        ]
    }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
```

</details>

## Outlined

Outlined buttons display a border without a background initially.

```vue
<SplitButton label="Save" :model="items" @click="save" outlined></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="secondary"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="success"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="info"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="warn"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="help"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="danger"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="contrast"></SplitButton>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Toast />
        <SplitButton label="Save" :model="items" @click="save" outlined></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="danger"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="contrast"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
```

</details>

## Raised

Raised buttons display a shadow to indicate elevation.

```vue
<SplitButton label="Save" :model="items" @click="save" raised></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised severity="secondary"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised severity="success"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised severity="info"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised severity="warn"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised severity="help"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised severity="danger"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised severity="contrast"></SplitButton>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Toast />
        <SplitButton label="Save" :model="items" @click="save" raised></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised severity="danger"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised severity="contrast"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
```

</details>

## Raised Text

Text buttons can be displayed as raised as well for elevation.

```vue
<SplitButton label="Save" :model="items" @click="save" raised text></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised text severity="secondary"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised text severity="success"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised text severity="info"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised text severity="warn"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised text severity="help"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised text severity="danger"></SplitButton>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Toast />
        <SplitButton label="Save" :model="items" @click="save" raised text></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="danger"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
```

</details>

## Rounded

Rounded buttons have a circular border radius.

```vue
<SplitButton label="Save" :model="items" @click="save" rounded></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="secondary"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="success"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="info"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="warn"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="help"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="danger"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="contrast"></SplitButton>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Toast />
        <SplitButton label="Save" :model="items" @click="save" rounded></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="danger"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="contrast"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
```

</details>

## Severity

The severity property defines the variant of a button.

```vue
<SplitButton label="Save" :model="items" @click="save"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" severity="secondary"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" severity="success"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" severity="info"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" severity="warn"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" severity="help"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" severity="danger"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" severity="contrast"></SplitButton>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Toast />
        <SplitButton label="Save" :model="items" @click="save"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" severity="danger"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" severity="contrast"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
```

</details>

## Sizes

SplitButton provides small and large sizes as alternatives to the standard.

```vue
<SplitButton label="Save" :model="items" icon="pi pi-plus" size="small"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" size="large"></SplitButton>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex items-center justify-center flex-wrap gap-4">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" size="small"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" size="large"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
```

</details>

## Template

Custom content inside a button is defined as children.

```vue
<SplitButton :model="items" @click="save" severity="contrast">
    <span class="flex items-center font-bold">
        <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" style="height: 1rem; margin-right: 0.5rem" />
        <span>PrimeVue</span>
    </span>
</SplitButton>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Toast />
        <SplitButton :model="items" @click="save" severity="contrast">
            <span class="flex items-center font-bold">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" style="height: 1rem; margin-right: 0.5rem" />
                <span>PrimeVue</span>
            </span>
        </SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
```

</details>

## Text

Text buttons are displayed as textual elements.

```vue
<SplitButton label="Save" :model="items" @click="save" text></SplitButton>
<SplitButton label="Save" :model="items" @click="save" text severity="secondary"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" text severity="success"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" text severity="info"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" text severity="warn"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" text severity="help"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" text severity="danger"></SplitButton>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Toast />
        <SplitButton label="Save" :model="items" @click="save" text></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" text severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" text severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" text severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" text severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" text severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" text severity="danger"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
```

</details>

## Split Button

### Props

| Name            | Type                                                                                           | Default | Description                                                                                                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label           | string                                                                                         | -       | Text of the button.                                                                                                                                                   |
| icon            | string                                                                                         | -       | Name of the icon.                                                                                                                                                     |
| model           | MenuItem[]                                                                                     | -       | MenuModel instance to define the overlay items.                                                                                                                       |
| autoZIndex      | boolean                                                                                        | true    | Whether to automatically manage layering.                                                                                                                             |
| baseZIndex      | number                                                                                         | 0       | Base zIndex value to use in layering.                                                                                                                                 |
| appendTo        | HTMLElement \| HintedString<"body" \| "self">                                                  | body    | A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself. |
| disabled        | boolean                                                                                        | false   | When present, it specifies that the element should be disabled.                                                                                                       |
| fluid           | boolean                                                                                        | null    | Spans 100% width of the container when enabled.                                                                                                                       |
| class           | any                                                                                            | -       | Style class of the component.                                                                                                                                         |
| style           | any                                                                                            | -       | Inline style of the component.                                                                                                                                        |
| buttonProps     | ButtonHTMLAttributes                                                                           | -       | Used to pass all properties of the HTMLButtonElement to the default button.                                                                                           |
| menuButtonProps | ButtonHTMLAttributes                                                                           | -       | Used to pass all properties of the HTMLButtonElement to the menu button.                                                                                              |
| menuButtonIcon  | string                                                                                         | -       | Name of the menu button icon.                                                                                                                                         |
| dropdownIcon    | string                                                                                         | -       | Name of the menu button icon.                                                                                                                                         |
| severity        | HintedString<"secondary" \| "info" \| "success" \| "warn" \| "danger" \| "contrast" \| "help"> | -       | Defines the style of the button.                                                                                                                                      |
| raised          | boolean                                                                                        | false   | Add a shadow to indicate elevation.                                                                                                                                   |
| rounded         | boolean                                                                                        | false   | Add a circular border radius to the button.                                                                                                                           |
| text            | boolean                                                                                        | false   | Add a textual class to the button without a background initially.                                                                                                     |
| outlined        | boolean                                                                                        | false   | Add a border class without a background initially.                                                                                                                    |
| size            | HintedString<"small" \| "large">                                                               | -       | Defines the size of the button.                                                                                                                                       |
| plain           | boolean                                                                                        | false   | Add a plain textual class to the button without a background initially.                                                                                               |
| dt              | any                                                                                            | -       | It generates scoped CSS variables using design tokens for the component.                                                                                              |
| pt              | PassThrough<SplitButtonPassThroughOptions>                                                     | -       | Used to pass attributes to DOM elements inside the component.                                                                                                         |
| ptOptions       | any                                                                                            | -       | Used to configure passthrough(pt) options of the component.                                                                                                           |
| unstyled        | boolean                                                                                        | false   | When enabled, it removes component related styles in the core.                                                                                                        |

## Pass Through Options

| Name       | Type                             | Description                                          |
| ---------- | -------------------------------- | ---------------------------------------------------- |
| root       | SplitButtonPassThroughOptionType | Used to pass attributes to the root's DOM element.   |
| pcButton   | any                              | Used to pass attributes to the Button component.     |
| pcDropdown | any                              | Used to pass attributes to the Button component.     |
| pcMenu     | any                              | Used to pass attributes to the TieredMenu component. |
| hooks      | any                              | Used to manage all lifecycle hooks.                  |

## Theming

### CSS Classes

| Class                  | Description                        |
| ---------------------- | ---------------------------------- |
| p-splitbutton          | Class name of the root element     |
| p-splitbutton-button   | Class name of the button element   |
| p-splitbutton-dropdown | Class name of the dropdown element |

### Design Tokens

| Token                             | CSS Variable                          | Description                   |
| --------------------------------- | ------------------------------------- | ----------------------------- |
| splitbutton.border.radius         | --p-splitbutton-border-radius         | Border radius of root         |
| splitbutton.rounded.border.radius | --p-splitbutton-rounded-border-radius | Rounded border radius of root |
| splitbutton.raised.shadow         | --p-splitbutton-raised-shadow         | Raised shadow of root         |
