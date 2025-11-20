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

## EventsDoc

An event is provided for each type of user interaction such as expand, collapse and selection.

```vue
<Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
    @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" @nodeExpand="onNodeExpand" @nodeCollapse="onNodeCollapse" class="w-full md:w-[30rem]"></Tree>
```

## FilterDoc

Filtering is enabled by adding the filter property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define filterBy property. In addition filterMode specifies the filtering strategy. In lenient mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in strict mode when the query matches a node, filtering continues on all descendants.

```vue
<Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-[30rem]"></Tree>
<Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-[30rem]"></Tree>
```

## LazyDoc

Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using loading property and node-expand method. Default value of loadingMode is mask and also icon is available.

```vue
<Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading" class="w-full md:w-[30rem]"></Tree>
<Tree :value="nodes2" @node-expand="onNodeExpand2" loadingMode="icon" class="w-full md:w-[30rem]"></Tree>
```

## TemplateDoc

Each node can have a distinct template by matching the type property to the slot name.

## Tree

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | TreeNode[] | - | An array of treenodes. |
| expandedKeys | TreeExpandedKeys | - | A map of keys to represent the expansion state in controlled mode. |
| selectionKeys | TreeSelectionKeys | - | A map of keys to control the selection state. |
| selectionMode | HintedString<"single" \| "multiple" \| "checkbox"> | - | Defines the selection mode. |
| metaKeySelection | boolean | false | Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. |
| loading | boolean | false | Whether to display loading indicator. |
| loadingIcon | string | - | Icon to display when tree is loading. |
| loadingMode | HintedString<"mask" \| "icon"> | mask | Loading mode display. |
| filter | boolean | false | When specified, displays an input field to filter the items. |
| filterBy | string \| Function | label | When filtering is enabled, filterBy decides which field or fields (comma separated) to search against. A callable taking a TreeNode can be provided instead of a list of field names. |
| filterMode | HintedString<"lenient" \| "strict"> | lenient | Mode for filtering. |
| filterPlaceholder | string | - | Placeholder text to show when filter input is empty. |
| filterLocale | string | - | Locale to use in filtering. The default locale is the host environment's current locale. |
| highlightOnSelect | boolean | false | Highlights automatically the first item. |
| scrollHeight | HintedString<"flex"> | - | Height of the scroll viewport in fixed units or the 'flex' keyword for a dynamic size. |
| draggableNodes | boolean | null | Whether the nodes are draggable. |
| droppableNodes | boolean | null | Whether the nodes are droppable. |
| draggableScope | string \| string[] | null | Scope of the draggable nodes to match a droppableScope. |
| droppableScope | string \| string[] | null | Scope of the droppable nodes to match a draggableScope. |
| validateDrop | boolean | false | When enabled, drop can be accepted or rejected based on condition defined at node-drop. |
| ariaLabel | string | - | Defines a string value that labels an interactive element. |
| ariaLabelledby | string | - | Identifier of the underlying menu element. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<TreePassThroughOptions<any>> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

### Slots

| Name | Parameters | Description |
|------|------------|-------------|
| [key: string] | Function |  |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | TreePassThroughOptionType<T> | Used to pass attributes to the root's DOM element. |
| pcFilterContainer | any | Used to pass attributes to the IconField component. |
| pcFilterInput | any | Used to pass attributes to the InputText component. |
| pcFilterIconContainer | any | Used to pass attributes to the InputIcon component. |
| filterIcon | TreePassThroughOptionType<T> | Used to pass attributes to the filter icon's DOM element. |
| wrapper | TreePassThroughOptionType<T> | Used to pass attributes to the wrapper's DOM element. |
| rootChildren | TreePassThroughOptionType<T> | Used to pass attributes to the root children's DOM element. |
| node | TreePassThroughOptionType<T> | Used to pass attributes to the node's DOM element. |
| nodeContent | TreePassThroughOptionType<T> | Used to pass attributes to the node content's DOM element. |
| nodeToggleButton | TreePassThroughOptionType<T> | Used to pass attributes to the node toggle button's DOM element. |
| nodeToggleIcon | TreePassThroughOptionType<T> | Used to pass attributes to the node toggle icon's DOM element. |
| pcNodeCheckbox | TreePassThroughOptionType<T> | Used to pass attributes to the checkbox's DOM element. |
| nodeIcon | TreePassThroughOptionType<T> | Used to pass attributes to the node icon's DOM element. |
| nodeLabel | TreePassThroughOptionType<T> | Used to pass attributes to the node label's DOM element. |
| nodeChildren | TreePassThroughOptionType<T> | Used to pass attributes to the node children's DOM element. |
| mask | TreePassThroughOptionType<T> | Used to pass attributes to the mask's DOM element. |
| loadingIcon | TreePassThroughOptionType<T> | Used to pass attributes to the loading icon's DOM element. |
| emptyMessage | TreePassThroughOptionType<T> | Used to pass attributes to the empty message's DOM element. |
| dropPoint | TreePassThroughOptionType<T> | Used to pass attributes to the drop point's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-tree | Class name of the root element |
| p-tree-mask | Class name of the mask element |
| p-tree-loading-icon | Class name of the loading icon element |
| p-tree-filter-input | Class name of the filter input element |
| p-tree-root | Class name of the wrapper element |
| p-tree-root-children | Class name of the root children element |
| p-tree-node | Class name of the node element |
| p-tree-node-content | Class name of the node content element |
| p-tree-node-toggle-button | Class name of the node toggle button element |
| p-tree-node-toggle-icon | Class name of the node toggle icon element |
| p-tree-node-checkbox | Class name of the node checkbox element |
| p-tree-node-icon | Class name of the node icon element |
| p-tree-node-label | Class name of the node label element |
| p-tree-node-children | Class name of the node children element |

