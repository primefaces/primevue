# Vue Tree Component

Tree is used to display hierarchical data.

## Import

```javascript
import Tree from 'primevue/tree';
```

## AccessibilityDoc

Screen Reader Value to describe the component can either be provided with aria-labelledby or aria-label props. The root list element has a tree role whereas each list item has a treeitem role along with aria-label , aria-selected and aria-expanded attributes. In checkbox selection, aria-checked is used instead of aria-selected . The container element of a treenode has the group role. Checkbox and toggle icons are hidden from screen readers as their parent element with treeitem role and attributes are used instead for readers and keyboard support. The aria-setsize , aria-posinset and aria-level attributes are calculated implicitly and added to each treeitem. Keyboard Support Key Function tab Moves focus to the first selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the next focusable element in the page tab sequence. shift + tab Moves focus to the last selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the previous focusable element in the page tab sequence. enter Selects the focused treenode. space Selects the focused treenode. down arrow Moves focus to the next treenode. up arrow Moves focus to the previous treenode. right arrow If node is closed, opens the node otherwise moves focus to the first child node. left arrow If node is open, closes the node otherwise moves focus to the parent node.

## Basic

Tree component requires an array of TreeNode objects as its value .

```vue
<Tree :value="nodes" class="w-full md:w-[30rem]"></Tree>
```

## Controlled

Tree state can be controlled programmatically with the expandedKeys property that defines the keys that are expanded. This property is a Map instance whose key is the key of a node and value is a boolean. Note that expandedKeys also supports two-way binding with the v-model directive.

```vue
<div class="flex flex-wrap gap-2 mb-6">
    <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
    <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
</div>
<Tree v-model:expandedKeys="expandedKeys" :value="nodes" class="w-full md:w-[30rem]"></Tree>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 mb-6">
            <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
            <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
        <Tree v-model:expandedKeys="expandedKeys" :value="nodes" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);
const expandedKeys = ref({});

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const expandAll = () => {
    for (let node of nodes.value) {
        expandNode(node);
    }

    expandedKeys.value = { ...expandedKeys.value };
};

const collapseAll = () => {
    expandedKeys.value = {};
};

const expandNode = (node) => {
    if (node.children && node.children.length) {
        expandedKeys.value[node.key] = true;

        for (let child of node.children) {
            expandNode(child);
        }
    }
};
<\/script>
```

</details>

## EventsDoc

An event is provided for each type of user interaction such as expand, collapse and selection.

```vue
<Tree
    v-model:selectionKeys="selectedKey"
    :value="nodes"
    selectionMode="single"
    :metaKeySelection="false"
    @nodeSelect="onNodeSelect"
    @nodeUnselect="onNodeUnselect"
    @nodeExpand="onNodeExpand"
    @nodeCollapse="onNodeCollapse"
    class="w-full md:w-[30rem]"
></Tree>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Toast />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" @nodeExpand="onNodeExpand" @nodeCollapse="onNodeCollapse" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';
import { useToast } from "primevue/usetoast";

const nodes = ref(null);
const selectedKey = ref(null);
const toast = useToast();

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const onNodeSelect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
};

const onNodeUnselect = (node) => {
    toast.add({ severity: 'warn', summary: 'Node Unselected', detail: node.label, life: 3000 });
};

const onNodeExpand = (node) => {
    toast.add({ severity: 'info', summary: 'Node Expanded', detail: node.label, life: 3000 });
};

const onNodeCollapse = (node) => {
    toast.add({ severity: 'info', summary: 'Node Collapsed', detail: node.label, life: 3000 });
};
<\/script>
```

</details>

## FilterDoc

Filtering is enabled by adding the filter property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define filterBy property. In addition filterMode specifies the filtering strategy. In lenient mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in strict mode when the query matches a node, filtering continues on all descendants.

```vue
<Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-[30rem]"></Tree>
<Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-[30rem]"></Tree>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-8">
        <Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-[30rem]"></Tree>
        <Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then(data => nodes.value = data);
});
<\/script>
```

</details>

## LazyDoc

Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using loading property and node-expand method.

```vue
<Tree :value="nodes" @node-expand="onNodeExpand" loadingMode="icon" class="w-full md:w-[30rem]"></Tree>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Tree :value="nodes" @node-expand="onNodeExpand" loadingMode="icon" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const nodes = ref(null);

onMounted(() => {
    nodes.value = initiateNodes();

    setTimeout(() => {
        nodes.value.map((node) => (node.loading = false));
    }, 2000);
});


const onNodeExpand = (node) => {
    if (!node.children) {
        node.loading = true;

        setTimeout(() => {
            let _node = { ...node };

            _node.children = [];

            for (let i = 0; i < 3; i++) {
                _node.children.push({
                    key: node.key + '-' + i,
                    label: 'Lazy ' + node.label + '-' + i
                });
            }

            let _nodes = { ...nodes.value };

            _nodes[parseInt(node.key, 10)] = { ..._node, loading: false };

            nodes.value = _nodes;
        }, 500);
    }
};

const initiateNodes = () => {
    return [
        {
            key: '0',
            label: 'Node 0',
            leaf: false,
            loading: true
        },
        {
            key: '1',
            label: 'Node 1',
            leaf: false,
            loading: true
        },
        {
            key: '2',
            label: 'Node 2',
            leaf: false,
            loading: true
        }
    ];
};
<\/script>
```

</details>

## TemplateDoc

Each node can have a distinct template by matching the type property to the slot name.

```vue
<Tree :value="nodes" class="w-full md:w-[30rem]">
    <template #default="slotProps">
        <b>{{ slotProps.node.label }}</b>
    </template>
    <template #url="slotProps">
        <a :href="slotProps.node.data">{{ slotProps.node.label }}</a>
    </template>
</Tree>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Tree :value="nodes" class="w-full md:w-[30rem]">
            <template #default="slotProps">
                <b>{{ slotProps.node.label }}</b>
            </template>
            <template #url="slotProps">
                <a :href="slotProps.node.data" target="_blank" rel="noopener noreferrer" class="text-surface-700 dark:text-surface-0 hover:text-primary">{{ slotProps.node.label }}</a>
            </template>
        </Tree>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const nodes = ref([
    {
        key: '0',
        label: 'Introduction',
        children: [
            { key: '0-0', label: 'What is Vue.js?', data: 'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url' },
            { key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url' },
            { key: '0-2', label: 'Creating a Vue Application', data: 'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type: 'url' },
                { key: '0-3', label: 'Conditional Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url' }
        ]
    },
    {
        key: '1',
        label: 'Components In-Depth',
        children: [
            { key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url' },
            { key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url' },
            { key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url' },
            { key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url' }
        ]
    }
]);
<\/script>
```

</details>

## Tree

### Props

| Name              | Type                                               | Default | Description                                                                                                                                                                                                                                                       |
| ----------------- | -------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value             | TreeNode[]                                         | -       | An array of treenodes.                                                                                                                                                                                                                                            |
| expandedKeys      | TreeExpandedKeys                                   | -       | A map of keys to represent the expansion state in controlled mode.                                                                                                                                                                                                |
| selectionKeys     | TreeSelectionKeys                                  | -       | A map of keys to control the selection state.                                                                                                                                                                                                                     |
| selectionMode     | HintedString<"single" \| "multiple" \| "checkbox"> | -       | Defines the selection mode.                                                                                                                                                                                                                                       |
| metaKeySelection  | boolean                                            | false   | Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. |
| loading           | boolean                                            | false   | Whether to display loading indicator.                                                                                                                                                                                                                             |
| loadingIcon       | string                                             | -       | Icon to display when tree is loading.                                                                                                                                                                                                                             |
| loadingMode       | HintedString<"mask" \| "icon">                     | mask    | Loading mode display.                                                                                                                                                                                                                                             |
| filter            | boolean                                            | false   | When specified, displays an input field to filter the items.                                                                                                                                                                                                      |
| filterBy          | string \| Function                                 | label   | When filtering is enabled, filterBy decides which field or fields (comma separated) to search against. A callable taking a TreeNode can be provided instead of a list of field names.                                                                             |
| filterMode        | HintedString<"lenient" \| "strict">                | lenient | Mode for filtering.                                                                                                                                                                                                                                               |
| filterPlaceholder | string                                             | -       | Placeholder text to show when filter input is empty.                                                                                                                                                                                                              |
| filterLocale      | string                                             | -       | Locale to use in filtering. The default locale is the host environment's current locale.                                                                                                                                                                          |
| highlightOnSelect | boolean                                            | false   | Highlights automatically the first item.                                                                                                                                                                                                                          |
| scrollHeight      | HintedString<"flex">                               | -       | Height of the scroll viewport in fixed units or the 'flex' keyword for a dynamic size.                                                                                                                                                                            |
| draggableNodes    | boolean                                            | null    | Whether the nodes are draggable.                                                                                                                                                                                                                                  |
| droppableNodes    | boolean                                            | null    | Whether the nodes are droppable.                                                                                                                                                                                                                                  |
| draggableScope    | string \| string[]                                 | null    | Scope of the draggable nodes to match a droppableScope.                                                                                                                                                                                                           |
| droppableScope    | string \| string[]                                 | null    | Scope of the droppable nodes to match a draggableScope.                                                                                                                                                                                                           |
| validateDrop      | boolean                                            | false   | When enabled, drop can be accepted or rejected based on condition defined at node-drop.                                                                                                                                                                           |
| ariaLabel         | string                                             | -       | Defines a string value that labels an interactive element.                                                                                                                                                                                                        |
| ariaLabelledby    | string                                             | -       | Identifier of the underlying menu element.                                                                                                                                                                                                                        |
| dt                | any                                                | -       | It generates scoped CSS variables using design tokens for the component.                                                                                                                                                                                          |
| pt                | PassThrough<TreePassThroughOptions<any>>           | -       | Used to pass attributes to DOM elements inside the component.                                                                                                                                                                                                     |
| ptOptions         | any                                                | -       | Used to configure passthrough(pt) options of the component.                                                                                                                                                                                                       |
| unstyled          | boolean                                            | false   | When enabled, it removes component related styles in the core.                                                                                                                                                                                                    |

### Slots

| Name          | Parameters | Description |
| ------------- | ---------- | ----------- |
| [key: string] | Function   |             |

## Pass Through Options

| Name                  | Type                         | Description                                                      |
| --------------------- | ---------------------------- | ---------------------------------------------------------------- |
| root                  | TreePassThroughOptionType<T> | Used to pass attributes to the root's DOM element.               |
| pcFilterContainer     | any                          | Used to pass attributes to the IconField component.              |
| pcFilterInput         | any                          | Used to pass attributes to the InputText component.              |
| pcFilterIconContainer | any                          | Used to pass attributes to the InputIcon component.              |
| filterIcon            | TreePassThroughOptionType<T> | Used to pass attributes to the filter icon's DOM element.        |
| wrapper               | TreePassThroughOptionType<T> | Used to pass attributes to the wrapper's DOM element.            |
| rootChildren          | TreePassThroughOptionType<T> | Used to pass attributes to the root children's DOM element.      |
| node                  | TreePassThroughOptionType<T> | Used to pass attributes to the node's DOM element.               |
| nodeContent           | TreePassThroughOptionType<T> | Used to pass attributes to the node content's DOM element.       |
| nodeToggleButton      | TreePassThroughOptionType<T> | Used to pass attributes to the node toggle button's DOM element. |
| nodeToggleIcon        | TreePassThroughOptionType<T> | Used to pass attributes to the node toggle icon's DOM element.   |
| pcNodeCheckbox        | TreePassThroughOptionType<T> | Used to pass attributes to the checkbox's DOM element.           |
| nodeIcon              | TreePassThroughOptionType<T> | Used to pass attributes to the node icon's DOM element.          |
| nodeLabel             | TreePassThroughOptionType<T> | Used to pass attributes to the node label's DOM element.         |
| nodeChildren          | TreePassThroughOptionType<T> | Used to pass attributes to the node children's DOM element.      |
| mask                  | TreePassThroughOptionType<T> | Used to pass attributes to the mask's DOM element.               |
| loadingIcon           | TreePassThroughOptionType<T> | Used to pass attributes to the loading icon's DOM element.       |
| emptyMessage          | TreePassThroughOptionType<T> | Used to pass attributes to the empty message's DOM element.      |
| dropPoint             | TreePassThroughOptionType<T> | Used to pass attributes to the drop point's DOM element.         |
| hooks                 | any                          | Used to manage all lifecycle hooks.                              |

## Theming

### CSS Classes

| Class                     | Description                                  |
| ------------------------- | -------------------------------------------- |
| p-tree                    | Class name of the root element               |
| p-tree-mask               | Class name of the mask element               |
| p-tree-loading-icon       | Class name of the loading icon element       |
| p-tree-filter-input       | Class name of the filter input element       |
| p-tree-root               | Class name of the wrapper element            |
| p-tree-root-children      | Class name of the root children element      |
| p-tree-node               | Class name of the node element               |
| p-tree-node-content       | Class name of the node content element       |
| p-tree-node-toggle-button | Class name of the node toggle button element |
| p-tree-node-toggle-icon   | Class name of the node toggle icon element   |
| p-tree-node-checkbox      | Class name of the node checkbox element      |
| p-tree-node-icon          | Class name of the node icon element          |
| p-tree-node-label         | Class name of the node label element         |
| p-tree-node-children      | Class name of the node children element      |

### Design Tokens

| Token                                             | CSS Variable                                          | Description                                     |
| ------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------- |
| tree.background                                   | --p-tree-background                                   | Background of root                              |
| tree.color                                        | --p-tree-color                                        | Color of root                                   |
| tree.padding                                      | --p-tree-padding                                      | Padding of root                                 |
| tree.gap                                          | --p-tree-gap                                          | Gap of root                                     |
| tree.indent                                       | --p-tree-indent                                       | Indent of root                                  |
| tree.transition.duration                          | --p-tree-transition-duration                          | Transition duration of root                     |
| tree.node.padding                                 | --p-tree-node-padding                                 | Padding of node                                 |
| tree.node.border.radius                           | --p-tree-node-border-radius                           | Border radius of node                           |
| tree.node.hover.background                        | --p-tree-node-hover-background                        | Hover background of node                        |
| tree.node.selected.background                     | --p-tree-node-selected-background                     | Selected background of node                     |
| tree.node.color                                   | --p-tree-node-color                                   | Color of node                                   |
| tree.node.hover.color                             | --p-tree-node-hover-color                             | Hover color of node                             |
| tree.node.selected.color                          | --p-tree-node-selected-color                          | Selected color of node                          |
| tree.node.focus.ring.width                        | --p-tree-node-focus-ring-width                        | Focus ring width of node                        |
| tree.node.focus.ring.style                        | --p-tree-node-focus-ring-style                        | Focus ring style of node                        |
| tree.node.focus.ring.color                        | --p-tree-node-focus-ring-color                        | Focus ring color of node                        |
| tree.node.focus.ring.offset                       | --p-tree-node-focus-ring-offset                       | Focus ring offset of node                       |
| tree.node.focus.ring.shadow                       | --p-tree-node-focus-ring-shadow                       | Focus ring shadow of node                       |
| tree.node.gap                                     | --p-tree-node-gap                                     | Gap of node                                     |
| tree.node.icon.color                              | --p-tree-node-icon-color                              | Color of node icon                              |
| tree.node.icon.hover.color                        | --p-tree-node-icon-hover-color                        | Hover color of node icon                        |
| tree.node.icon.selected.color                     | --p-tree-node-icon-selected-color                     | Selected color of node icon                     |
| tree.node.toggle.button.border.radius             | --p-tree-node-toggle-button-border-radius             | Border radius of node toggle button             |
| tree.node.toggle.button.size                      | --p-tree-node-toggle-button-size                      | Size of node toggle button                      |
| tree.node.toggle.button.hover.background          | --p-tree-node-toggle-button-hover-background          | Hover background of node toggle button          |
| tree.node.toggle.button.selected.hover.background | --p-tree-node-toggle-button-selected-hover-background | Selected hover background of node toggle button |
| tree.node.toggle.button.color                     | --p-tree-node-toggle-button-color                     | Color of node toggle button                     |
| tree.node.toggle.button.hover.color               | --p-tree-node-toggle-button-hover-color               | Hover color of node toggle button               |
| tree.node.toggle.button.selected.hover.color      | --p-tree-node-toggle-button-selected-hover-color      | Selected hover color of node toggle button      |
| tree.node.toggle.button.focus.ring.width          | --p-tree-node-toggle-button-focus-ring-width          | Focus ring width of node toggle button          |
| tree.node.toggle.button.focus.ring.style          | --p-tree-node-toggle-button-focus-ring-style          | Focus ring style of node toggle button          |
| tree.node.toggle.button.focus.ring.color          | --p-tree-node-toggle-button-focus-ring-color          | Focus ring color of node toggle button          |
| tree.node.toggle.button.focus.ring.offset         | --p-tree-node-toggle-button-focus-ring-offset         | Focus ring offset of node toggle button         |
| tree.node.toggle.button.focus.ring.shadow         | --p-tree-node-toggle-button-focus-ring-shadow         | Focus ring shadow of node toggle button         |
| tree.loading.icon.size                            | --p-tree-loading-icon-size                            | Size of loading icon                            |
| tree.filter.margin                                | --p-tree-filter-margin                                | Margin of filter                                |
