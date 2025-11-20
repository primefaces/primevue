# Vue TreeSelect Component

TreeSelect is a form component to choose from hierarchical data.

## Import

```javascript
import TreeSelect from 'primevue/treeselect';
```

## Accessibility

Screen Reader Value to describe the component can either be provided with aria-labelledby or aria-label props. The treeselect element has a combobox role in addition to aria-haspopup and aria-expanded attributes. The relation between the combobox and the popup is created with aria-controls that refers to the id of the popup. The popup list has an id that refers to the aria-controls attribute of the combobox element and uses tree as the role. Each list item has a treeitem role along with aria-label , aria-selected and aria-expanded attributes. In checkbox selection, aria-checked is used instead of aria-selected . Checkbox and toggle icons are hidden from screen readers as their parent element with treeitem role and attributes are used instead for readers and keyboard support. The container element of a treenode has the group role. The aria-setsize , aria-posinset and aria-level attributes are calculated implicitly and added to each treeitem. Closed State Keyboard Support Key Function tab Moves focus to the treeselect element. space Opens the popup and moves visual focus to the selected treenode, if there is none then first treenode receives the focus. down arrow Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. Popup Keyboard Support Key Function tab Moves focus to the next focusable element in the page tab sequence. shift + tab Moves focus to the previous focusable element in the page tab sequence. enter Selects the focused option, closes the popup if selection mode is single. space Selects the focused option, closes the popup if selection mode is single. escape Closes the popup, moves focus to the treeselect element. down arrow Moves focus to the next treenode. up arrow Moves focus to the previous treenode. right arrow If node is closed, opens the node otherwise moves focus to the first child node. left arrow If node is open, closes the node otherwise moves focus to the parent node.

```vue
<span id="dd1">Options</span>
<TreeSelect aria-labelledby="dd1" />

<TreeSelect aria-label="Options" />
```

## Basic

TreeSelect is used with the v-model property for two-way value binding along with the options collection. Internally Tree component is used so the options model is based on TreeNode API. In single selection mode, value binding should be the key value of a node.

```vue
<TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-80 w-full" />
```

## Checkbox

Selection of multiple nodes via checkboxes is enabled by configuring selectionMode as checkbox . In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has checked and partialChecked properties to represent the checked state of a node object to indicate selection.

```vue
<TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Select Item" class="md:w-80 w-full" />
```

## Clear Icon

When showClear is enabled, a clear icon is added to reset the TreeSelect.

```vue
<TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-80 w-full" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<TreeSelect v-model="selectedValue" disabled class="md:w-80 w-full" :options="nodes" placeholder="TreeSelect" />
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<TreeSelect v-model="selectedValue" variant="filled" :options="nodes" placeholder="Select Item" class="md:w-80 w-full" />
```

## Filter

Filtering is enabled by adding the filter property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define filterBy property. In addition filterMode specifies the filtering strategy. In lenient mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in strict mode when the query matches a node, filtering continues on all descendants.

```vue
<TreeSelect v-model="selectedValue" filter filterMode="lenient" :options="nodes" placeholder="Select Item" class="md:w-80 w-full" />
<TreeSelect v-model="selectedValue" filter filterMode="strict" :options="nodes" placeholder="Select Item" class="md:w-80 w-full" />
```

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```vue
<FloatLabel class="w-full md:w-80">
    <TreeSelect v-model="value1" inputId="over_label" :options="nodes" class="w-full" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel class="w-full md:w-80" variant="in">
    <TreeSelect v-model="value2" inputId="in_label" :options="nodes" class="w-full" variant="filled" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel class="w-full md:w-80" variant="on">
    <TreeSelect v-model="value3" inputId="on_label" :options="nodes" class="w-full" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" fluid />
```

## Forms

TreeSelect is used with the v-model property.

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel class="w-full md:w-80">
    <TreeSelect v-model="selectedValue" inputId="t_file" :options="nodes" class="w-full" variant="filled" />
    <label for="t_file">File</label>
</IftaLabel>
```

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<TreeSelect v-model="selectedValue1" :invalid="Object.keys(selectedValue1).length === 0" class="md:w-80 w-full" :options="nodes" placeholder="TreeSelect" />
<TreeSelect v-model="selectedValue2" :invalid="Object.keys(selectedValue2).length === 0" class="md:w-80 w-full" :options="nodes" placeholder="TreeSelect" variant="filled" />
```

## Lazy

Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using loading property and node-expand method. Default value of loadingMode is mask and also icon is available.

```vue
<TreeSelect v-model="selectedValue" :loading="loading" :options="nodes" @node-expand="onNodeExpand" placeholder="Select Item" class="md:w-80 w-full" />
<TreeSelect v-model="selectedValue2" loadingMode="icon" :options="nodes2" @node-expand="onNodeExpand2" placeholder="Select Item" class="md:w-80 w-full" />
```

## Multiple

More than one node is selectable by setting selectionMode to multiple . By default in multiple selection mode, metaKey press (e.g. ⌘ ) is not necessary to add to existing selections. When the optional metaKeySelection is present, behavior is changed in a way that selecting a new node requires meta key to be present. Note that in touch enabled devices, TreeSelect always ignores metaKey. In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection.

```vue
<TreeSelect v-model="selectedValue" :options="nodes" selectionMode="multiple" display="chip" :maxSelectedLabels="3" placeholder="Select Items" class="md:w-80 w-full" />
```

## Sizes

TreeSelect provides small and large sizes as alternatives to the base.

```vue
<TreeSelect v-model="value1" :options="nodes" size="small" placeholder="Small" class="md:w-80 w-full" />
<TreeSelect v-model="value2" :options="nodes" placeholder="Normal" class="md:w-80 w-full" />
<TreeSelect v-model="value3" :options="nodes" size="large" placeholder="Large" class="md:w-80 w-full" />
```

## Template

TreeSelect offers multiple slots for customization through templating.

```vue
<TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-80 w-full">
    <template #dropdownicon>
        <i class="pi pi-search" />
    </template>
    <template #header>
        <div class="font-medium px-3 py-2">Available Files</div>
    </template>
    <template #footer>
        <div class="px-3 pt-1 pb-2 flex justify-between">
            <Button label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
            <Button label="Remove All" severity="danger" text size="small" icon="pi pi-plus" />
        </div>
    </template>
</TreeSelect>
```

## Treeselect

## Treeselect

