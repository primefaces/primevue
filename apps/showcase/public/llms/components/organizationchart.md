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

## Colored

Styling a specific node is configured with styleClass and style options of a TreeNode.

## Selection

Selection is enabled by defining the selectionMode to either "single" or "multiple" and specifying the selectionKeys with the v-model directive. Note that selection on a particular node can be disabled if the selectable is false on the node instance.

## Template

The type property of an OrganizationChartNode is used to map a template to a node. If it is undefined, the default template is used.

```vue
<OrganizationChart v-model:selectionKeys="selection" :value="data" collapsible selectionMode="single">
    <template #country="slotProps">
        <div class="flex flex-col items-center">
            <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\
```

## Organizationchart

## Organizationchart

