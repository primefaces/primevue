# Vue Textarea Component

Textarea adds styling and autoResize functionality to standard textarea element.

## Import

```javascript
import Textarea from 'primevue/textarea';
```

## Accessibility

Screen Reader Textarea component renders a native textarea element that implicitly includes any passed prop. Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby , aria-label props. Keyboard Support Key Function tab Moves focus to the input.

```vue
<label for="address1">Address 1</label>
<Textarea id="address1" />

<span id="address2">Address 2</span>
<Textarea aria-labelledby="address2" />

<Textarea aria-label="Address Details" />
```

## AutoResizeDoc

When autoResize is enabled, textarea grows instead of displaying a scrollbar.

```vue
<Textarea v-model="value" autoResize rows="5" cols="30" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" autoResize rows="5" cols="30" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
```

</details>

## Basic

Textarea is used with the v-model property for two-way value binding.

```vue
<Textarea v-model="value" rows="5" cols="30" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<Textarea v-model="value" rows="5" cols="30" disabled />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" disabled />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('Disabled');
<\/script>
```

</details>

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<Textarea v-model="value" variant="filled" rows="5" cols="30" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" variant="filled" rows="5" cols="30" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
```

</details>

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```vue
<FloatLabel>
    <Textarea id="over_label" v-model="value1" rows="5" cols="30" style="resize: none" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <Textarea id="in_label" v-model="value2" rows="5" cols="30" style="resize: none" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <Textarea id="on_label" v-model="value3" rows="5" cols="30" style="resize: none" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <Textarea id="over_label" v-model="value1" rows="5" cols="30" style="resize: none" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <Textarea id="in_label" v-model="value2" rows="5" cols="30" style="resize: none" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <Textarea id="on_label" v-model="value3" rows="5" cols="30" style="resize: none" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
<\/script>
```

</details>

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<Textarea v-model="value" rows="5" fluid />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Textarea v-model="value" rows="5" fluid />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
```

</details>

## Forms

Textarea integrates seamlessly with the PrimeVue Forms library.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <Textarea name="address" rows="5" cols="30" style="resize: none" />
        <Message v-if="$form.address?.invalid" severity="error" size="small" variant="simple">{{ $form.address.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
                <Textarea name="address" rows="5" cols="30" style="resize: none" />
                <Message v-if="$form.address?.invalid" severity="error" size="small" variant="simple">{{ $form.address.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();
const initialValues = ref({
    address: ''
});
const resolver = ref(zodResolver(
    z.object({
        address: z.string().min(1, { message: 'Address is required.' })
    })
));

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
<\/script>
```

</details>

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel>
    <Textarea id="description" v-model="value" rows="5" cols="30" style="resize: none" />
    <label for="description">Description</label>
</IftaLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <Textarea id="description" v-model="value" rows="5" cols="30" style="resize: none" />
            <label for="description">Description</label>
        </IftaLabel>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<Textarea v-model="value" rows="5" cols="30" :invalid="!value" style="resize: none" placeholder="Address" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" :invalid="!value" style="resize: none" placeholder="Address" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
```

</details>

## Sizes

Textarea provides small and large sizes as alternatives to the base.

```vue
<Textarea v-model="value1" size="small" placeholder="Small" rows="3" />
<Textarea v-model="value2" placeholder="Normal" rows="3" />
<Textarea v-model="value3" size="large" placeholder="Large" rows="3" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <Textarea v-model="value1" size="small" placeholder="Small" rows="3" />
        <Textarea v-model="value2" placeholder="Normal" rows="3" />
        <Textarea v-model="value3" size="large" placeholder="Large" rows="3" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
<\/script>
```

</details>

## Textarea

### Props

| Name                      | Type                                                                                                                                                                       | Default | Description                                                                                                                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aria-activedescendant     | string                                                                                                                                                                     | -       | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.                                                                                                     |
| aria-atomic               | Booleanish                                                                                                                                                                 | -       | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.                                            |
| aria-autocomplete         | "none" \| "inline" \| "list" \| "both"                                                                                                                                     | -       | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.                       |
| aria-busy                 | Booleanish                                                                                                                                                                 | -       | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.                                                       |
| aria-checked              | Booleanish \| "mixed"                                                                                                                                                      | -       | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.                                                                                                                               |
| aria-colcount             | Numberish                                                                                                                                                                  | -       | Defines the total number of columns in a table, grid, or treegrid.                                                                                                                                                   |
| aria-colindex             | Numberish                                                                                                                                                                  | -       | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.                                                                                         |
| aria-colspan              | Numberish                                                                                                                                                                  | -       | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.                                                                                                                       |
| aria-controls             | string                                                                                                                                                                     | -       | Identifies the element (or elements) whose contents or presence are controlled by the current element.                                                                                                               |
| aria-current              | Booleanish \| "page" \| "step" \| "location" \| "date" \| "time"                                                                                                           | -       | Indicates the element that represents the current item within a container or set of related elements.                                                                                                                |
| aria-describedby          | string                                                                                                                                                                     | -       | Identifies the element (or elements) that describes the object.                                                                                                                                                      |
| aria-details              | string                                                                                                                                                                     | -       | Identifies the element that provides a detailed, extended description for the object.                                                                                                                                |
| aria-disabled             | Booleanish                                                                                                                                                                 | -       | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.                                                                                                                 |
| aria-dropeffect           | "link" \| "none" \| "copy" \| "execute" \| "move" \| "popup"                                                                                                               | -       | Indicates what functions can be performed when a dragged object is released on the drop target.                                                                                                                      |
| aria-errormessage         | string                                                                                                                                                                     | -       | Identifies the element that provides an error message for the object.                                                                                                                                                |
| aria-expanded             | Booleanish                                                                                                                                                                 | -       | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.                                                                                                          |
| aria-flowto               | string                                                                                                                                                                     | -       | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order. |
| aria-grabbed              | Booleanish                                                                                                                                                                 | -       | Indicates an element's "grabbed" state in a drag-and-drop operation.                                                                                                                                                 |
| aria-haspopup             | Booleanish \| "menu" \| "listbox" \| "tree" \| "grid" \| "dialog"                                                                                                          | -       | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.                                                                                       |
| aria-hidden               | Booleanish                                                                                                                                                                 | -       | Indicates whether the element is exposed to an accessibility API.                                                                                                                                                    |
| aria-invalid              | Booleanish \| "grammar" \| "spelling"                                                                                                                                      | -       | Indicates the entered value does not conform to the format expected by the application.                                                                                                                              |
| aria-keyshortcuts         | string                                                                                                                                                                     | -       | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.                                                                                                                 |
| aria-label                | string                                                                                                                                                                     | -       | Defines a string value that labels the current element.                                                                                                                                                              |
| aria-labelledby           | string                                                                                                                                                                     | -       | Identifies the element (or elements) that labels the current element.                                                                                                                                                |
| aria-level                | Numberish                                                                                                                                                                  | -       | Defines the hierarchical level of an element within a structure.                                                                                                                                                     |
| aria-live                 | "off" \| "assertive" \| "polite"                                                                                                                                           | -       | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.                                                     |
| aria-modal                | Booleanish                                                                                                                                                                 | -       | Indicates whether an element is modal when displayed.                                                                                                                                                                |
| aria-multiline            | Booleanish                                                                                                                                                                 | -       | Indicates whether a text box accepts multiple lines of input or only a single line.                                                                                                                                  |
| aria-multiselectable      | Booleanish                                                                                                                                                                 | -       | Indicates that the user may select more than one item from the current selectable descendants.                                                                                                                       |
| aria-orientation          | "horizontal" \| "vertical"                                                                                                                                                 | -       | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.                                                                                                                           |
| aria-owns                 | string                                                                                                                                                                     | -       | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.      |
| aria-placeholder          | string                                                                                                                                                                     | -       | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.                  |
| aria-posinset             | Numberish                                                                                                                                                                  | -       | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.                                                                |
| aria-pressed              | Booleanish \| "mixed"                                                                                                                                                      | -       | Indicates the current "pressed" state of toggle buttons.                                                                                                                                                             |
| aria-readonly             | Booleanish                                                                                                                                                                 | -       | Indicates that the element is not editable, but is otherwise operable.                                                                                                                                               |
| aria-relevant             | "text" \| "additions" \| "additions removals" \| "additions text" \| "all" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals" | -       | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.                                                                                               |
| aria-required             | Booleanish                                                                                                                                                                 | -       | Indicates that user input is required on the element before a form may be submitted.                                                                                                                                 |
| aria-roledescription      | string                                                                                                                                                                     | -       | Defines a human-readable, author-localized description for the role of an element.                                                                                                                                   |
| aria-rowcount             | Numberish                                                                                                                                                                  | -       | Defines the total number of rows in a table, grid, or treegrid.                                                                                                                                                      |
| aria-rowindex             | Numberish                                                                                                                                                                  | -       | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.                                                                                               |
| aria-rowspan              | Numberish                                                                                                                                                                  | -       | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.                                                                                                                          |
| aria-selected             | Booleanish                                                                                                                                                                 | -       | Indicates the current "selected" state of various widgets.                                                                                                                                                           |
| aria-setsize              | Numberish                                                                                                                                                                  | -       | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.                                                                            |
| aria-sort                 | "none" \| "ascending" \| "descending" \| "other"                                                                                                                           | -       | Indicates if items in a table or grid are sorted in ascending or descending order.                                                                                                                                   |
| aria-valuemax             | Numberish                                                                                                                                                                  | -       | Defines the maximum allowed value for a range widget.                                                                                                                                                                |
| aria-valuemin             | Numberish                                                                                                                                                                  | -       | Defines the minimum allowed value for a range widget.                                                                                                                                                                |
| aria-valuenow             | Numberish                                                                                                                                                                  | -       | Defines the current value for a range widget.                                                                                                                                                                        |
| aria-valuetext            | string                                                                                                                                                                     | -       | Defines the human readable text alternative of aria-valuenow for a range widget.                                                                                                                                     |
| innerHTML                 | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| class                     | any                                                                                                                                                                        | -       |                                                                                                                                                                                                                      |
| style                     | StyleValue                                                                                                                                                                 | -       |                                                                                                                                                                                                                      |
| accesskey                 | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| contenteditable           | Booleanish \| "inherit" \| "plaintext-only"                                                                                                                                | -       |                                                                                                                                                                                                                      |
| contextmenu               | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| dir                       | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| draggable                 | Booleanish                                                                                                                                                                 | -       |                                                                                                                                                                                                                      |
| enterkeyhint              | "enter" \| "done" \| "go" \| "next" \| "previous" \| "search" \| "send"                                                                                                    | -       |                                                                                                                                                                                                                      |
| enterKeyHint              | "enter" \| "done" \| "go" \| "next" \| "previous" \| "search" \| "send"                                                                                                    | -       |                                                                                                                                                                                                                      |
| hidden                    | "" \| Booleanish \| "hidden" \| "until-found"                                                                                                                              | -       |                                                                                                                                                                                                                      |
| id                        | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| inert                     | Booleanish                                                                                                                                                                 | -       |                                                                                                                                                                                                                      |
| lang                      | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| spellcheck                | Booleanish                                                                                                                                                                 | -       |                                                                                                                                                                                                                      |
| tabindex                  | Numberish                                                                                                                                                                  | -       |                                                                                                                                                                                                                      |
| title                     | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| translate                 | "yes" \| "no"                                                                                                                                                              | -       |                                                                                                                                                                                                                      |
| radiogroup                | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| role                      | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| about                     | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| datatype                  | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| inlist                    | any                                                                                                                                                                        | -       |                                                                                                                                                                                                                      |
| prefix                    | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| property                  | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| resource                  | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| typeof                    | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| vocab                     | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| autocapitalize            | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| autocorrect               | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| autosave                  | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| color                     | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| itemprop                  | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| itemscope                 | Booleanish                                                                                                                                                                 | -       |                                                                                                                                                                                                                      |
| itemtype                  | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| itemid                    | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| itemref                   | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| results                   | Numberish                                                                                                                                                                  | -       |                                                                                                                                                                                                                      |
| security                  | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| unselectable              | "on" \| "off"                                                                                                                                                              | -       |                                                                                                                                                                                                                      |
| inputmode                 | "text" \| "search" \| "none" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal"                                                                                        | -       | Hints at the type of data that might be entered by the user while editing the element or its contents                                                                                                                |
| is                        | string                                                                                                                                                                     | -       | Specify that a standard HTML element should behave like a defined custom built-in element                                                                                                                            |
| exportparts               | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| part                      | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| autocomplete              | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| autofocus                 | Booleanish                                                                                                                                                                 | -       |                                                                                                                                                                                                                      |
| cols                      | Numberish                                                                                                                                                                  | -       |                                                                                                                                                                                                                      |
| dirname                   | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| disabled                  | Booleanish                                                                                                                                                                 | -       |                                                                                                                                                                                                                      |
| form                      | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| maxlength                 | Numberish                                                                                                                                                                  | -       |                                                                                                                                                                                                                      |
| minlength                 | Numberish                                                                                                                                                                  | -       |                                                                                                                                                                                                                      |
| placeholder               | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| readonly                  | Booleanish                                                                                                                                                                 | -       |                                                                                                                                                                                                                      |
| required                  | Booleanish                                                                                                                                                                 | -       |                                                                                                                                                                                                                      |
| rows                      | Numberish                                                                                                                                                                  | -       |                                                                                                                                                                                                                      |
| value                     | null \| string \| number \| readonly string[]                                                                                                                              | -       |                                                                                                                                                                                                                      |
| wrap                      | string                                                                                                                                                                     | -       |                                                                                                                                                                                                                      |
| onCopy                    | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onCut                     | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onPaste                   | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onCompositionend          | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onCompositionstart        | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onCompositionupdate       | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onDrag                    | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onDragend                 | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onDragenter               | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onDragexit                | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onDragleave               | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onDragover                | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onDragstart               | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onDrop                    | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onFocus                   | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onFocusin                 | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onFocusout                | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onBlur                    | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onChange                  | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onBeforeinput             | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onFormdata                | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onInput                   | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onReset                   | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onSubmit                  | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onInvalid                 | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onFullscreenchange        | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onFullscreenerror         | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onLoad                    | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onError                   | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onKeydown                 | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onKeypress                | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onKeyup                   | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onDblclick                | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onMousedown               | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onMouseenter              | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onMouseleave              | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onMousemove               | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onMouseout                | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onMouseover               | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onMouseup                 | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onAbort                   | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onCanplay                 | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onCanplaythrough          | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onDurationchange          | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onEmptied                 | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onEncrypted               | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onEnded                   | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onLoadeddata              | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onLoadedmetadata          | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onLoadstart               | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onPause                   | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onPlay                    | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onPlaying                 | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onProgress                | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onRatechange              | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onSeeked                  | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onSeeking                 | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onStalled                 | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onSuspend                 | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onTimeupdate              | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onVolumechange            | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onWaiting                 | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onSelect                  | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onScroll                  | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onScrollend               | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onTouchcancel             | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onTouchend                | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onTouchmove               | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onTouchstart              | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onAuxclick                | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onClick                   | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onContextmenu             | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onGotpointercapture       | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onLostpointercapture      | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onPointerdown             | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onPointermove             | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onPointerup               | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onPointercancel           | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onPointerenter            | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onPointerleave            | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onPointerover             | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onPointerout              | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onBeforetoggle            | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onToggle                  | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onWheel                   | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onAnimationcancel         | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onAnimationstart          | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onAnimationend            | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onAnimationiteration      | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onSecuritypolicyviolation | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onTransitioncancel        | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onTransitionend           | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onTransitionrun           | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| onTransitionstart         | Function                                                                                                                                                                   | -       |                                                                                                                                                                                                                      |
| modelValue                | Nullable<string>                                                                                                                                                           | -       | Value of the component.                                                                                                                                                                                              |
| defaultValue              | Nullable<string>                                                                                                                                                           | -       | The default value for the input when not controlled by `modelValue` .                                                                                                                                                |
| name                      | string                                                                                                                                                                     | -       | The name attribute for the element, typically used in form submissions.                                                                                                                                              |
| autoResize                | boolean                                                                                                                                                                    | false   | When present, height of textarea changes as being typed.                                                                                                                                                             |
| size                      | HintedString<"small" \| "large">                                                                                                                                           | -       | Defines the size of the component.                                                                                                                                                                                   |
| invalid                   | boolean                                                                                                                                                                    | false   | When present, it specifies that the component should have invalid state style.                                                                                                                                       |
| variant                   | null \| HintedString<"outlined" \| "filled">                                                                                                                               | null    | Specifies the input variant of the component.                                                                                                                                                                        |
| fluid                     | boolean                                                                                                                                                                    | null    | Spans 100% width of the container when enabled.                                                                                                                                                                      |
| formControl               | Record<string, any>                                                                                                                                                        | -       | Form control object, typically used for handling validation and form state.                                                                                                                                          |
| dt                        | any                                                                                                                                                                        | -       | It generates scoped CSS variables using design tokens for the component.                                                                                                                                             |
| pt                        | PassThrough<TextareaPassThroughOptions>                                                                                                                                    | -       | Used to pass attributes to DOM elements inside the component.                                                                                                                                                        |
| ptOptions                 | any                                                                                                                                                                        | -       | Used to configure passthrough(pt) options of the component.                                                                                                                                                          |
| unstyled                  | boolean                                                                                                                                                                    | false   | When enabled, it removes component related styles in the core.                                                                                                                                                       |

### Emits

| Name              | Parameters | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue | Function   |             |

## Pass Through Options

| Name  | Type                          | Description                                        |
| ----- | ----------------------------- | -------------------------------------------------- |
| root  | TextareaPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| hooks | any                           | Used to manage all lifecycle hooks.                |

## Theming

### CSS Classes

| Class      | Description                    |
| ---------- | ------------------------------ |
| p-textarea | Class name of the root element |

### Design Tokens

| Token                              | CSS Variable                           | Description                       |
| ---------------------------------- | -------------------------------------- | --------------------------------- |
| textarea.background                | --p-textarea-background                | Background of root                |
| textarea.disabled.background       | --p-textarea-disabled-background       | Disabled background of root       |
| textarea.filled.background         | --p-textarea-filled-background         | Filled background of root         |
| textarea.filled.hover.background   | --p-textarea-filled-hover-background   | Filled hover background of root   |
| textarea.filled.focus.background   | --p-textarea-filled-focus-background   | Filled focus background of root   |
| textarea.border.color              | --p-textarea-border-color              | Border color of root              |
| textarea.hover.border.color        | --p-textarea-hover-border-color        | Hover border color of root        |
| textarea.focus.border.color        | --p-textarea-focus-border-color        | Focus border color of root        |
| textarea.invalid.border.color      | --p-textarea-invalid-border-color      | Invalid border color of root      |
| textarea.color                     | --p-textarea-color                     | Color of root                     |
| textarea.disabled.color            | --p-textarea-disabled-color            | Disabled color of root            |
| textarea.placeholder.color         | --p-textarea-placeholder-color         | Placeholder color of root         |
| textarea.invalid.placeholder.color | --p-textarea-invalid-placeholder-color | Invalid placeholder color of root |
| textarea.shadow                    | --p-textarea-shadow                    | Shadow of root                    |
| textarea.padding.x                 | --p-textarea-padding-x                 | Padding x of root                 |
| textarea.padding.y                 | --p-textarea-padding-y                 | Padding y of root                 |
| textarea.border.radius             | --p-textarea-border-radius             | Border radius of root             |
| textarea.focus.ring.width          | --p-textarea-focus-ring-width          | Focus ring width of root          |
| textarea.focus.ring.style          | --p-textarea-focus-ring-style          | Focus ring style of root          |
| textarea.focus.ring.color          | --p-textarea-focus-ring-color          | Focus ring color of root          |
| textarea.focus.ring.offset         | --p-textarea-focus-ring-offset         | Focus ring offset of root         |
| textarea.focus.ring.shadow         | --p-textarea-focus-ring-shadow         | Focus ring shadow of root         |
| textarea.transition.duration       | --p-textarea-transition-duration       | Transition duration of root       |
| textarea.sm.font.size              | --p-textarea-sm-font-size              | Sm font size of root              |
| textarea.sm.padding.x              | --p-textarea-sm-padding-x              | Sm padding x of root              |
| textarea.sm.padding.y              | --p-textarea-sm-padding-y              | Sm padding y of root              |
| textarea.lg.font.size              | --p-textarea-lg-font-size              | Lg font size of root              |
| textarea.lg.padding.x              | --p-textarea-lg-padding-x              | Lg padding x of root              |
| textarea.lg.padding.y              | --p-textarea-lg-padding-y              | Lg padding y of root              |
