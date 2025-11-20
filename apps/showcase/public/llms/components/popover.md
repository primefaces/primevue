# Vue Popover Component

Popover is a container component that can overlay other components on page.

## Import

```javascript
import Popover from 'primevue/popover';
```

## Accessibility

Screen Reader Popover component uses dialog role and since any attribute is passed to the root element you may define attributes like aria-label or aria-labelledby to describe the popup contents. In addition aria-modal is added since focus is kept within the popup. Popover adds aria-expanded state attribute and aria-controls to the trigger so that the relation between the trigger and the popup is defined. Popover Keyboard Support When the popup gets opened, the first focusable element receives the focus and this can be customized by adding autofocus to an element within the popup. Key Function tab Moves focus to the next the focusable element within the popup. shift + tab Moves focus to the previous the focusable element within the popup. escape Closes the popup and moves focus to the trigger.

## Basic

Popover is accessed via its ref and visibility is controlled using toggle , show and hide functions with an event of the target.

```vue
<Button type="button" icon="pi pi-share-alt" label="Share" @click="toggle" />

<Popover ref="op">
    <div class="flex flex-col gap-4 w-[25rem]">
        <div>
            <span class="font-medium block mb-2">Share this document</span>
            <InputGroup>
                <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-[25rem]"></InputText>
                <InputGroupAddon>
                    <i class="pi pi-copy"></i>
                </InputGroupAddon>
            </InputGroup>
        </div>
        <div>
            <span class="font-medium block mb-2">Invite Member</span>
            <InputGroup>
                <InputText disabled />
                <Button label="Invite" icon="pi pi-users"></Button>
            </InputGroup>
        </div>
        <div>
            <span class="font-medium block mb-2">Team Members</span>
            <ul class="list-none p-0 m-0 flex flex-col gap-4">
                <li v-for="member in members" :key="member.name" class="flex items-center gap-2">
                    <img :src="\
```

## DataTable

Place the Popover outside of the data iteration components to avoid rendering it multiple times.

## Select Data

In this sample, data is retrieved from the content inside the popover.

```vue
<Button type="button" :label="selectedMember ? selectedMember.name : 'Select Member'" @click="toggle" class="min-w-48" />

<Popover ref="op">
    <div class="flex flex-col gap-4">
        <div>
            <span class="font-medium block mb-2">Team Members</span>
            <ul class="list-none p-0 m-0 flex flex-col">
                <li v-for="member in members" :key="member.name" class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border" @click="selectMember(member)">
                    <img :src="\
```

## Popover

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dismissable | boolean | true | Enables to hide the overlay when outside is clicked. |
| appendTo | HTMLElement \| HintedString<"body" \| "self"> | body | A valid query selector or an HTMLElement to specify where the overlay gets attached. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| breakpoints | PopoverBreakpoints | - | Object literal to define widths per screen size. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<PopoverPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
| closeOnEscape | boolean | true | Specifies if pressing escape key should hide the dialog. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | PopoverPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| content | PopoverPassThroughOptionType | Used to pass attributes to the content's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |
| transition | PopoverPassThroughTransitionType | Used to control Vue Transition API. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-popover | Class name of the root element |
| p-popover-content | Class name of the content element |

