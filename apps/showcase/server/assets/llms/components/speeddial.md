# Vue Speed Dial Component

When pressed, a floating action button can display multiple primary actions that can be performed on a page.

## Import

```javascript
import SpeedDial from 'primevue/speeddial';
```

## Accessibility

Screen Reader SpeedDial component renders a native button element that implicitly includes any passed prop. Text to describe the button can be defined with the aria-labelledby or aria-label props. Addititonally the button includes includes aria-haspopup , aria-expanded for states along with aria-controls to define the relation between the popup and the button. The popup overlay uses menu role on the list and each action item has a menuitem role with an aria-label as the menuitem label. The id of the menu refers to the aria-controls of the button. Menu Button Keyboard Support Key Function enter Toggles the visibility of the menu. space Toggles the visibility of the menu. down arrow Opens the menu and moves focus to the first item. up arrow Opens the menu and moves focus to the last item. right arrow Opens the menu and moves focus to the last item. left arrow Opens the menu and moves focus to the first item. escape Closes the menu. Menu Keyboard Support Key Function enter Actives the menuitem, closes the menu and sets focus on the menu button. space Actives the menuitem, closes the menu and sets focus on the menu button. escape Closes the menu and sets focus on the menu button. arrow keys Navigates between the menu items. home Moves focus to the first item. end Moves focus to the last item.

```vue
<SpeedDial aria-label="Options" />
```

## Circle

Items can be displayed around the button when type is set to circle . Additional radius property defines the radius of the circle.

```vue
<SpeedDial :model="items" :radius="80" type="circle" :style="{ position: 'absolute' }" :buttonProps="{ severity: 'warn', rounded: true }" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }" class="flex items-center justify-center">
            <SpeedDial :model="items" :radius="80" type="circle" :style="{ position: 'absolute' }" :buttonProps="{ severity: 'warn', rounded: true }" />
            <Toast />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>
```

</details>

## Linear

SpeedDial items are defined with the model property based on MenuModel API. Default orientation of the items is linear and direction property is used to define the position of the items related to the button.

```vue
<SpeedDial :model="items" direction="up" style="position: absolute; left: calc(50% - 2rem); bottom: 0" />
<SpeedDial :model="items" direction="down" style="position: absolute; left: calc(50% - 2rem); top: 0" />
<SpeedDial :model="items" direction="left" style="position: absolute; top: calc(50% - 2rem); right: 0" />
<SpeedDial :model="items" direction="right" style="position: absolute; top: calc(50% - 2rem); left: 0" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div style="position: relative; height: 500px">
            <SpeedDial :model="items" direction="up" style="position: absolute; left: calc(50% - 2rem); bottom: 0" />
            <SpeedDial :model="items" direction="down" style="position: absolute; left: calc(50% - 2rem); top: 0" />
            <SpeedDial :model="items" direction="left" style="position: absolute; top: calc(50% - 2rem); right: 0" />
            <SpeedDial :model="items" direction="right" style="position: absolute; top: calc(50% - 2rem); left: 0" />
            <Toast />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>
```

</details>

## Mask

Adding mask property displays a modal layer behind the popup items.

```vue
<SpeedDial :model="items" direction="up" mask :style="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card p-4">
        <div :style="{ position: 'relative', height: '350px' }">
            <SpeedDial :model="items" direction="up" mask :style="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>
```

</details>

## QuarterCircleDoc

Setting type as quarter-circle displays the items at one of four corners of a button based on the direction .

```vue
<SpeedDial :model="items" :radius="120" type="quarter-circle" direction="up-left" :style="{ position: 'absolute', right: 0, bottom: 0 }" />
<SpeedDial :model="items" :radius="120" type="quarter-circle" direction="up-right" :style="{ position: 'absolute', left: 0, bottom: 0 }" />
<SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-left" :style="{ position: 'absolute', right: 0, top: 0 }" />
<SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-right" :style="{ position: 'absolute', left: 0, top: 0 }" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div style="position: relative; height: 500px">
            <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="up-left" :style="{ position: 'absolute', right: 0, bottom: 0 }" />
            <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="up-right" :style="{ position: 'absolute', left: 0, bottom: 0 }" />
            <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-left" :style="{ position: 'absolute', right: 0, top: 0 }" />
            <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-right" :style="{ position: 'absolute', left: 0, top: 0 }" />
            <Toast />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>
```

</details>

## SemiCircleDoc

When type is defined as semi-circle , items are displayed in a half-circle around the button.

```vue
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="up" style="position: absolute; left: calc(50% - 2rem); bottom: 0" />
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="down" style="position: absolute; left: calc(50% - 2rem); top: 0" />
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="left" style="position: absolute; top: calc(50% - 2rem); right: 0" />
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="right" style="position: absolute; top: calc(50% - 2rem); left: 0" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card" :style="{ position: 'relative', height: '500px' }">
        <SpeedDial :model="items" :radius="80" type="semi-circle" direction="up" style="position: absolute; left: calc(50% - 2rem); bottom: 0" />
        <SpeedDial :model="items" :radius="80" type="semi-circle" direction="down" style="position: absolute; left: calc(50% - 2rem); top: 0" />
        <SpeedDial :model="items" :radius="80" type="semi-circle" direction="left" style="position: absolute; top: calc(50% - 2rem); right: 0" />
        <SpeedDial :model="items" :radius="80" type="semi-circle" direction="right" style="position: absolute; top: calc(50% - 2rem); left: 0" />
        <Toast />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>
```

</details>

## Template

SpeedDial offers item customization with the item template that receives the menuitem instance from the model as a parameter. The button has its own button template, additional slot named icon is provided to embed icon content for default button.

```vue
<SpeedDial :model="items" direction="up" :transitionDelay="80" :style="{ position: 'absolute' }" pt:menuitem="m-2">
    <template #button="{ toggleCallback }">
        <Button variant="outlined" class="border" @click="toggleCallback">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="..." fill="var(--p-primary-color)" />
                <path d="..." fill="var(--p-text-color)" />
            </svg>
        </Button>
    </template>
    <template #item="{ item, toggleCallback }">
        <div class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer" @click="toggleCallback">
            <span :class="item.icon" />
            <span>
                {{ item.label }}
            </span>
        </div>
    </template>
</SpeedDial>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="flex items-end justify-center" :style="{ position: 'relative', height: '400px' }">
            <SpeedDial :model="items" direction="up" :transitionDelay="80" :style="{ position: 'absolute' }" pt:menuitem="m-2">
                <template #button="{ toggleCallback }">
                    <Button variant="outlined" class="border" @click="toggleCallback">
                        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="..." fill="var(--p-primary-color)" />
                            <path d="..." fill="var(--p-text-color)" />
                        </svg>
                    </Button>
                </template>
                <template #item="{ item, toggleCallback }">
                    <div class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer" @click="toggleCallback">
                        <span :class="item.icon" />
                        <span>
                            {{ item.label }}
                        </span>
                    </div>
                </template>
            </SpeedDial>
        </div>
        <Toast />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>
```

</details>

## Tooltip

Items display a tooltip on hover when a standalone Tooltip is present with a target that matches the items.

```vue
<SpeedDial :model="items" direction="up" :style="{ position: 'absolute', right: 0, bottom: 0 }" :buttonProps="{ severity: 'help', rounded: true }" :tooltipOptions="{ position: 'left' }" />
<SpeedDial :model="items" direction="up" :style="{ position: 'absolute', left: 0, bottom: 0 }" :buttonProps="{ severity: 'danger', rounded: true }" :tooltipOptions="{ position: 'right' }" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '350px' }">
            <SpeedDial :model="items" direction="up" :style="{ position: 'absolute', right: 0, bottom: 0 }" :buttonProps="{ severity: 'help', rounded: true }" :tooltipOptions="{ position: 'left' }" />
            <SpeedDial :model="items" direction="up" :style="{ position: 'absolute', left: 0, bottom: 0 }" :buttonProps="{ severity: 'danger', rounded: true }" :tooltipOptions="{ position: 'right' }" />
            <Toast />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>
```

</details>

## Speed Dial

### Props

| Name               | Type                                                                                                        | Default | Description                                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| model              | MenuItem[]                                                                                                  | -       | MenuModel instance to define the action items.                                                                                             |
| visible            | boolean                                                                                                     | false   | Specifies the visibility of the overlay.                                                                                                   |
| direction          | HintedString<"left" \| "right" \| "up" \| "down" \| "up-left" \| "up-right" \| "down-left" \| "down-right"> | up      | Specifies the opening direction of actions.                                                                                                |
| transitionDelay    | number                                                                                                      | 30      | Transition delay step for each action item.                                                                                                |
| type               | HintedString<"circle" \| "linear" \| "semi-circle" \| "quarter-circle">                                     | linear  | Specifies the opening type of actions.                                                                                                     |
| radius             | number                                                                                                      | 0       | Radius for \*circle types.                                                                                                                 |
| mask               | boolean                                                                                                     | false   | Whether to show a mask element behind the speeddial.                                                                                       |
| disabled           | boolean                                                                                                     | false   | Whether the component is disabled.                                                                                                         |
| hideOnClickOutside | boolean                                                                                                     | true    | Whether the actions close when clicked outside.                                                                                            |
| buttonClass        | any                                                                                                         | -       | Style class of the button element.                                                                                                         |
| maskStyle          | any                                                                                                         | -       | Inline style of the mask element.                                                                                                          |
| maskClass          | string                                                                                                      | -       | Style class of the mask element.                                                                                                           |
| showIcon           | string                                                                                                      | -       | Show icon of the button element.                                                                                                           |
| hideIcon           | string                                                                                                      | -       | Hide icon of the button element.                                                                                                           |
| rotateAnimation    | boolean                                                                                                     | true    | Defined to rotate showIcon when hideIcon is not present.                                                                                   |
| class              | any                                                                                                         | -       | Style class of the element.                                                                                                                |
| style              | any                                                                                                         | -       | Inline style of the element.                                                                                                               |
| tooltipOptions     | SpeedDialTooltipOptions                                                                                     | -       | Whether to display the tooltip on items. The modifiers of Tooltip can be used like an object in it. Valid keys are 'event' and 'position'. |
| buttonProps        | object                                                                                                      | -       | Used to pass all properties of the ButtonProps to the button component.                                                                    |
| actionButtonProps  | object                                                                                                      | -       | Used to pass all properties of the ButtonProps to the item component.                                                                      |
| ariaLabel          | string                                                                                                      | -       | Defines a string value that labels an interactive list element.                                                                            |
| ariaLabelledby     | string                                                                                                      | -       | Identifier of the underlying list element.                                                                                                 |
| dt                 | any                                                                                                         | -       | It generates scoped CSS variables using design tokens for the component.                                                                   |
| pt                 | PassThrough<SpeedDialPassThroughOptions>                                                                    | -       | Used to pass attributes to DOM elements inside the component.                                                                              |
| ptOptions          | any                                                                                                         | -       | Used to configure passthrough(pt) options of the component.                                                                                |
| unstyled           | boolean                                                                                                     | false   | When enabled, it removes component related styles in the core.                                                                             |

## Pass Through Options

| Name       | Type                           | Description                                               |
| ---------- | ------------------------------ | --------------------------------------------------------- |
| root       | SpeedDialPassThroughOptionType | Used to pass attributes to the root's DOM element.        |
| pcButton   | any                            | Used to pass attributes to the Button component.          |
| list       | SpeedDialPassThroughOptionType | Used to pass attributes to the list's DOM element.        |
| item       | SpeedDialPassThroughOptionType | Used to pass attributes to the item's DOM element.        |
| pcAction   | any                            | Used to pass attributes to the action's Button component. |
| actionIcon | SpeedDialPassThroughOptionType | Used to pass attributes to the action icon's DOM element. |
| mask       | SpeedDialPassThroughOptionType | Used to pass attributes to the mask's DOM element.        |
| hooks      | any                            | Used to manage all lifecycle hooks.                       |

## Theming

### CSS Classes

| Class                   | Description                           |
| ----------------------- | ------------------------------------- |
| p-speeddial             | Class name of the root element        |
| p-speeddial-button      | Class name of the button element      |
| p-speeddial-list        | Class name of the list element        |
| p-speeddial-item        | Class name of the item element        |
| p-speeddial-action      | Class name of the action element      |
| p-speeddial-action-icon | Class name of the action icon element |
| p-speeddial-mask        | Class name of the mask element        |

### Design Tokens

| Token                         | CSS Variable                      | Description                 |
| ----------------------------- | --------------------------------- | --------------------------- |
| speeddial.gap                 | --p-speeddial-gap                 | Gap of root                 |
| speeddial.transition.duration | --p-speeddial-transition-duration | Transition duration of root |
