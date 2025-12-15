# Vue Organization Chart Component

OrganizationChart visualizes hierarchical organization data.

## Import

```javascript
import OrganizationChart from 'primevue/organizationchart';
```

## Accessibility

Screen Reader Component currently uses a table based implementation and does not provide high level of screen reader support, a nested list implementation replacement is planned with aria roles and attributes aligned to a tree widget for high level of reader support in the upcoming versions. Keyboard Support Key Function tab Moves focus through the focusable elements within the chart. enter Toggles the expanded state of a node. space Toggles the expanded state of a node.

## Basic

OrganizationChart requires a collection of TreeNode instances as a value .

```vue
<OrganizationChart :value="data">
    <template #default="slotProps">
        <span>{{ slotProps.node.label }}</span>
    </template>
</OrganizationChart>
```

## Colored

Styling a specific node is configured with styleClass and style options of a TreeNode.

```vue
<OrganizationChart :value="data" collapsible>
    <template #person="slotProps">
        <div class="flex flex-col">
            <div class="flex flex-col items-center">
                <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-4 w-12 h-12" />
                <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                <span>{{ slotProps.node.data.title }}</span>
            </div>
        </div>
    </template>
    <template #default="slotProps">
        <span>{{ slotProps.node.label }}</span>
    </template>
</OrganizationChart>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #person="slotProps">
                <div class="flex flex-col">
                    <div class="flex flex-col items-center">
                        <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-4 w-12 h-12" />
                        <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                        <span>{{ slotProps.node.data.title }}</span>
                    </div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    key: '0',
    type: 'person',
    styleClass: '!bg-indigo-100 text-white rounded-xl',
    data: {
        image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
        name: 'Amy Elsner',
        title: 'CEO'
    },
    children: [
        {
            key: '0_0',
            type: 'person',
            styleClass: '!bg-purple-100 text-white rounded-xl',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'CMO'
            },
            children: [
                {
                    label: 'Sales',
                    styleClass: '!bg-purple-100 text-white rounded-xl'
                },
                {
                    label: 'Marketing',
                    styleClass: '!bg-purple-100 text-white rounded-xl'
                }
            ]
        },
        {
            key: '0_1',
            type: 'person',
            styleClass: '!bg-teal-100 text-white rounded-xl',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                name: 'Stephen Shaw',
                title: 'CTO'
            },
            children: [
                {
                    label: 'Development',
                    styleClass: '!bg-teal-100 text-white rounded-xl'
                },
                {
                    label: 'UI/UX Design',
                    styleClass: '!bg-teal-100 text-white rounded-xl'
                }
            ]
        }
    ]
});
<\/script>
```

</details>

## Selection

Selection is enabled by defining the selectionMode to either "single" or "multiple" and specifying the selectionKeys with the v-model directive. Note that selection on a particular node can be disabled if the selectable is false on the node instance.

```vue
<OrganizationChart v-model:selectionKeys="selection" :value="data" collapsible selectionMode="multiple">
    <template #person="slotProps">
        <div class="flex flex-col">
            <div class="flex flex-col items-center">
                <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-4 w-12 h-12" />
                <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                <span>{{ slotProps.node.data.title }}</span>
            </div>
        </div>
    </template>
    <template #default="slotProps">
        <span>{{ slotProps.node.label }}</span>
    </template>
</OrganizationChart>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <OrganizationChart v-model:selectionKeys="selection" :value="data" collapsible selectionMode="multiple">
        <template #person="slotProps">
            <div class="flex flex-col">
                <div class="flex flex-col items-center">
                    <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-4 w-12 h-12" />
                    <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                    <span>{{ slotProps.node.data.title }}</span>
                </div>
            </div>
        </template>
        <template #default="slotProps">
            <span>{{ slotProps.node.label }}</span>
        </template>
    </OrganizationChart>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    key: '0',
    type: 'person',
    data: {
        image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
        name: 'Amy Elsner',
        title: 'CEO'
    },
    children: [
        {
            key: '0_0',
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'CMO'
            },
            children: [
                {
                    key: '0_0_0',
                    label: 'Sales'
                },
                {
                    key: '0_0_"1',
                    label: 'Marketing'
                }
            ]
        },
        {
            key: '0_1',
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                name: 'Stephen Shaw',
                title: 'CTO'
            },
            children: [
                {
                    key: '0_1_0',
                    label: 'Development'
                },
                {
                    key: '0_1_1',
                    label: 'UI/UX Design'
                }
            ]
        }
    ]
});
const selection = ref({});
<\/script>
```

</details>

## Template

The type property of an OrganizationChartNode is used to map a template to a node. If it is undefined, the default template is used.

```vue
<OrganizationChart v-model:selectionKeys="selection" :value="data" collapsible selectionMode="single">
    <template #country="slotProps">
        <div class="flex flex-col items-center">
            <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`w-2rem flag flag-\${slotProps.node.data}\`" />
            <div class="mt-4 font-medium text-lg">{{ slotProps.node.label }}</div>
        </div>
    </template>
    <template #default="slotProps">
        <span>{{slotProps.node.label}}</span>
    </template>
</OrganizationChart>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card overflow-x-auto">
        <OrganizationChart v-model:selectionKeys="selection" :value="data" collapsible selectionMode="single">
            <template #country="slotProps">
                <div class="flex flex-col items-center">
                    <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`w-2rem flag flag-\${slotProps.node.data}\`" />
                    <div class="mt-4 font-medium text-lg">{{ slotProps.node.label }}</div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{slotProps.node.data.label}}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selection = ref({});
const data = ref({
    key: '0',
    type: 'country',
    label: 'Argentina',
    data: 'ar',
    children: [
        {
            key: '0_0',
            type: 'country',
            label: 'Argentina',
            data: 'ar',
            children: [
                {
                    key: '0_0_0',
                    type: 'country',
                    label: 'Argentina',
                    data: 'ar'
                },
                {
                    key: '0_0_1',
                    type: 'country',
                    label: 'Croatia',
                    data: 'hr'
                }
            ]
        },
        {
            key: '0_1',
            type: 'country',
            label: 'France',
            data: 'fr',
            children: [
                {
                    key: '0_1_0',
                    type: 'country',
                    label: 'France',
                    data: 'fr'
                },
                {
                    key: '0_1_1',
                    type: 'country',
                    label: 'Morocco',
                    data: 'ma'
                }
            ]
        }
    ]
});
<\/script>
```

</details>

## Organization Chart

### Props

| Name          | Type                                             | Default | Description                                                              |
| ------------- | ------------------------------------------------ | ------- | ------------------------------------------------------------------------ |
| value         | OrganizationChartNode                            | -       | Value of the component.                                                  |
| selectionKeys | OrganizationChartSelectionKeys                   | -       | A map instance of key-value pairs to represented the selected nodes.     |
| selectionMode | HintedString<"single" \| "multiple">             | -       | Type of the selection.                                                   |
| collapsedKeys | OrganizationChartCollapsedKeys                   | -       | A map instance of key-value pairs to represented the collapsed nodes.    |
| collapsible   | boolean                                          | false   | Whether the nodes can be expanded or toggled.                            |
| dt            | any                                              | -       | It generates scoped CSS variables using design tokens for the component. |
| pt            | PassThrough<OrganizationChartPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions     | any                                              | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled      | boolean                                          | false   | When enabled, it removes component related styles in the core.           |

### Slots

| Name          | Parameters | Description |
| ------------- | ---------- | ----------- |
| [key: string] | Function   |             |

## Pass Through Options

| Name                 | Type                                   | Description                                                           |
| -------------------- | -------------------------------------- | --------------------------------------------------------------------- |
| root                 | OrganizationChartPassThroughOptionType | Used to pass attributes to the root's DOM element.                    |
| table                | OrganizationChartPassThroughOptionType | Used to pass attributes to the table's DOM element.                   |
| body                 | OrganizationChartPassThroughOptionType | Used to pass attributes to the body's DOM element.                    |
| row                  | OrganizationChartPassThroughOptionType | Used to pass attributes to the row' DOM element.                      |
| cell                 | OrganizationChartPassThroughOptionType | Used to pass attributes to the cell's DOM element.                    |
| node                 | OrganizationChartPassThroughOptionType | Used to pass attributes to the node's DOM element.                    |
| nodeToggleButton     | OrganizationChartPassThroughOptionType | Used to pass attributes to the node toggle button's DOM element.      |
| nodeToggleButtonIcon | OrganizationChartPassThroughOptionType | Used to pass attributes to the node toggle button icon's DOM element. |
| connectors           | OrganizationChartPassThroughOptionType | Used to pass attributes to the connectors's DOM element.              |
| lineCell             | OrganizationChartPassThroughOptionType | Used to pass attributes to the lineCell's DOM element.                |
| connectorDown        | OrganizationChartPassThroughOptionType | Used to pass attributes to the connector down's DOM element.          |
| connectorLeft        | OrganizationChartPassThroughOptionType | Used to pass attributes to the connector left's DOM element.          |
| connectorRight       | OrganizationChartPassThroughOptionType | Used to pass attributes to the connector right's DOM element.         |
| nodeChildren         | OrganizationChartPassThroughOptionType | Used to pass attributes to the node children's DOM element.           |
| nodeCell             | OrganizationChartPassThroughOptionType | Used to pass attributes to the nodeCell's DOM element.                |
| hooks                | any                                    | Used to manage all lifecycle hooks.                                   |

## Theming

### CSS Classes

| Class                                       | Description                                       |
| ------------------------------------------- | ------------------------------------------------- |
| p-organizationchart                         | Class name of the root element                    |
| p-organizationchart-table                   | Class name of the table element                   |
| p-organizationchart-node                    | Class name of the node element                    |
| p-organizationchart-node-toggle-button      | Class name of the node toggle button element      |
| p-organizationchart-node-toggle-button-icon | Class name of the node toggle button icon element |
| p-organizationchart-connectors              | Class name of the connectors element              |
| p-organizationchart-connector-down          | Class name of the connector down element          |
| p-organizationchart-connector-left          | Class name of the connector left element          |
| p-organizationchart-connector-right         | Class name of the connector right element         |
| p-organizationchart-node-children           | Class name of the node children element           |

### Design Tokens

| Token                                                  | CSS Variable                                               | Description                             |
| ------------------------------------------------------ | ---------------------------------------------------------- | --------------------------------------- |
| organizationchart.gutter                               | --p-organizationchart-gutter                               | Gutter of root                          |
| organizationchart.transition.duration                  | --p-organizationchart-transition-duration                  | Transition duration of root             |
| organizationchart.node.background                      | --p-organizationchart-node-background                      | Background of node                      |
| organizationchart.node.hover.background                | --p-organizationchart-node-hover-background                | Hover background of node                |
| organizationchart.node.selected.background             | --p-organizationchart-node-selected-background             | Selected background of node             |
| organizationchart.node.border.color                    | --p-organizationchart-node-border-color                    | Border color of node                    |
| organizationchart.node.color                           | --p-organizationchart-node-color                           | Color of node                           |
| organizationchart.node.selected.color                  | --p-organizationchart-node-selected-color                  | Selected color of node                  |
| organizationchart.node.hover.color                     | --p-organizationchart-node-hover-color                     | Hover color of node                     |
| organizationchart.node.padding                         | --p-organizationchart-node-padding                         | Padding of node                         |
| organizationchart.node.toggleable.padding              | --p-organizationchart-node-toggleable-padding              | Toggleable padding of node              |
| organizationchart.node.border.radius                   | --p-organizationchart-node-border-radius                   | Border radius of node                   |
| organizationchart.node.toggle.button.background        | --p-organizationchart-node-toggle-button-background        | Background of node toggle button        |
| organizationchart.node.toggle.button.hover.background  | --p-organizationchart-node-toggle-button-hover-background  | Hover background of node toggle button  |
| organizationchart.node.toggle.button.border.color      | --p-organizationchart-node-toggle-button-border-color      | Border color of node toggle button      |
| organizationchart.node.toggle.button.color             | --p-organizationchart-node-toggle-button-color             | Color of node toggle button             |
| organizationchart.node.toggle.button.hover.color       | --p-organizationchart-node-toggle-button-hover-color       | Hover color of node toggle button       |
| organizationchart.node.toggle.button.size              | --p-organizationchart-node-toggle-button-size              | Size of node toggle button              |
| organizationchart.node.toggle.button.border.radius     | --p-organizationchart-node-toggle-button-border-radius     | Border radius of node toggle button     |
| organizationchart.node.toggle.button.focus.ring.width  | --p-organizationchart-node-toggle-button-focus-ring-width  | Focus ring width of node toggle button  |
| organizationchart.node.toggle.button.focus.ring.style  | --p-organizationchart-node-toggle-button-focus-ring-style  | Focus ring style of node toggle button  |
| organizationchart.node.toggle.button.focus.ring.color  | --p-organizationchart-node-toggle-button-focus-ring-color  | Focus ring color of node toggle button  |
| organizationchart.node.toggle.button.focus.ring.offset | --p-organizationchart-node-toggle-button-focus-ring-offset | Focus ring offset of node toggle button |
| organizationchart.node.toggle.button.focus.ring.shadow | --p-organizationchart-node-toggle-button-focus-ring-shadow | Focus ring shadow of node toggle button |
| organizationchart.connector.color                      | --p-organizationchart-connector-color                      | Color of connector                      |
| organizationchart.connector.border.radius              | --p-organizationchart-connector-border-radius              | Border radius of connector              |
| organizationchart.connector.height                     | --p-organizationchart-connector-height                     | Height of connector                     |
