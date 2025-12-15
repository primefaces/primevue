# Vue Password Component

Password displays strength indicator for password fields.

## Import

```javascript
import Password from 'primevue/password';
```

## Accessibility

Screen Reader Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby , aria-label props. Screen reader is notified about the changes to the strength of the password using a section that has aria-live while typing. Keyboard Support Key Function tab Moves focus to the input. escape Hides the strength meter if open.

```vue
<label for="pwd1">Password</label>
<Password inputId="pwd1" />

<span id="pwd2">Password</span>
<Password aria-labelledby="pwd2" />

<Password aria-label="Password" />
```

## Basic

Password is used with the v-model property for two-way value binding.

```vue
<Password v-model="value" :feedback="false" />
```

## Clear Icon

When showClear is enabled, a clear icon is added to reset the Password.

```vue
<Password v-model="value" :feedback="false" showClear inputClass="w-56" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Password v-model="value" :feedback="false" showClear inputClass="w-56" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<Password disabled placeholder="Disabled" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Password disabled placeholder="Disabled" />
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<Password v-model="value" :feedback="false" variant="filled" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Password v-model="value" :feedback="false" variant="filled" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```vue
<FloatLabel>
    <Password v-model="value1" inputId="over_label" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <Password v-model="value2" inputId="in_label" variant="filled" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <Password v-model="value3" inputId="on_label" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
   <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <Password v-model="value1" inputId="over_label" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <Password v-model="value2" inputId="in_label" variant="filled" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <Password v-model="value3" inputId="on_label" />
            <label for="on_label">On Label</label>
        </FloatLabel>
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

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<Password v-model="value" :feedback="false" fluid />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Password v-model="value" :feedback="false" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Forms

InputText is used with the v-model property.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-64">
    <div class="flex flex-col gap-1">
        <Password name="password" placeholder="Password" :feedback="false" fluid />
        <template v-if="$form.password?.invalid">
            <Message v-for="(error, index) of $form.password.errors" :key="index" severity="error" size="small" variant="simple">{{ error.message }}</Message>
        </template>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-64">
            <div class="flex flex-col gap-1">
                <Password name="password" placeholder="Password" :feedback="false" fluid />
                <template v-if="$form.password?.invalid">
                    <Message v-for="(error, index) of $form.password.errors" :key="index" severity="error" size="small" variant="simple">{{ error.message }}</Message>
                </template>
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
    password: ''
});
const resolver = ref(zodResolver(
    z.object({
        password: z
            .string()
            .min(3, { message: 'Minimum 3 characters.' })
            .max(8, { message: 'Maximum 8 characters.' })
            .refine((value) => /[a-z]/.test(value), {
                message: 'Must have a lowercase letter.'
            })
            .refine((value) => /[A-Z]/.test(value), {
                message: 'Must have an uppercase letter.'
            })
            .refine((value) => /\d/.test(value), {
                message: 'Must have a number.'
            })
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
    <Password v-model="value" inputId="password" variant="filled" />
    <label for="password">Password</label>
</IftaLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <Password v-model="value" inputId="password" variant="filled" />
            <label for="password">Password</label>
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
<Password v-model="value1" :invalid="!value1" placeholder="Password" />
<Password v-model="value2" :invalid="!value2" variant="filled" placeholder="Password" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <Password v-model="value1" :invalid="!value1" placeholder="Password" />
        <Password v-model="value2" :invalid="!value2" variant="filled" placeholder="Password" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
<\/script>
```

</details>

## Locale

Labels are translated at component level by promptLabel , weakLabel , mediumLabel and strongLabel properties. In order to apply global translations for all Password components in the application, refer to the locale .

```vue
<Password v-model="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Password v-model="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Meter

Strength meter is displayed as a popup while a value is being entered.

```vue
<Password v-model="value" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Password v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Sizes

Password provides small and large sizes as alternatives to the base.

```vue
<div class="card flex flex-col items-center gap-4">
    <Password v-model="value1" size="small" placeholder="Small" />
    <Password v-model="value2" placeholder="Normal" />
    <Password v-model="value3" size="large" placeholder="Large" />
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <Password v-model="value1" size="small" placeholder="Small" />
        <Password v-model="value2" placeholder="Normal" />
        <Password v-model="value3" size="large" placeholder="Large" />
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

## Template

3 slots are included to customize the overlay. These are header , content and footer . Note that content overrides the default meter.

```vue
<Password v-model="value">
    <template #header>
        <div class="font-semibold text-xm mb-4">Reset Password</div>
    </template>
    <template #footer>
        <Divider />
        <ul class="pl-2 my-0 leading-normal text-sm">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </template>
</Password>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Password v-model="value">
            <template #header>
                <div class="font-semibold text-xm mb-4">Reset Password</div>
            </template>
            <template #footer>
                <Divider />
                <ul class="pl-2 my-0 leading-normal text-sm">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                </ul>
            </template>
        </Password>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## ToggleMask

When toggleMask is present, an icon is displayed to show the value as plain text.

```vue
<Password v-model="value" toggleMask />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Password v-model="value" toggleMask />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Password

### Props

| Name                      | Type                                                                                                                                                                       | Default                                      | Description                                                                                                                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ---------------------------------- |
| aria-activedescendant     | string                                                                                                                                                                     | -                                            | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.                                                                                                     |
| aria-atomic               | Booleanish                                                                                                                                                                 | -                                            | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.                                            |
| aria-autocomplete         | "none" \| "inline" \| "list" \| "both"                                                                                                                                     | -                                            | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.                       |
| aria-busy                 | Booleanish                                                                                                                                                                 | -                                            | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.                                                       |
| aria-checked              | Booleanish \| "mixed"                                                                                                                                                      | -                                            | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.                                                                                                                               |
| aria-colcount             | Numberish                                                                                                                                                                  | -                                            | Defines the total number of columns in a table, grid, or treegrid.                                                                                                                                                   |
| aria-colindex             | Numberish                                                                                                                                                                  | -                                            | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.                                                                                         |
| aria-colspan              | Numberish                                                                                                                                                                  | -                                            | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.                                                                                                                       |
| aria-controls             | string                                                                                                                                                                     | -                                            | Identifies the element (or elements) whose contents or presence are controlled by the current element.                                                                                                               |
| aria-current              | Booleanish \| "page" \| "step" \| "location" \| "date" \| "time"                                                                                                           | -                                            | Indicates the element that represents the current item within a container or set of related elements.                                                                                                                |
| aria-describedby          | string                                                                                                                                                                     | -                                            | Identifies the element (or elements) that describes the object.                                                                                                                                                      |
| aria-details              | string                                                                                                                                                                     | -                                            | Identifies the element that provides a detailed, extended description for the object.                                                                                                                                |
| aria-disabled             | Booleanish                                                                                                                                                                 | -                                            | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.                                                                                                                 |
| aria-dropeffect           | "link" \| "none" \| "copy" \| "execute" \| "move" \| "popup"                                                                                                               | -                                            | Indicates what functions can be performed when a dragged object is released on the drop target.                                                                                                                      |
| aria-errormessage         | string                                                                                                                                                                     | -                                            | Identifies the element that provides an error message for the object.                                                                                                                                                |
| aria-expanded             | Booleanish                                                                                                                                                                 | -                                            | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.                                                                                                          |
| aria-flowto               | string                                                                                                                                                                     | -                                            | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order. |
| aria-grabbed              | Booleanish                                                                                                                                                                 | -                                            | Indicates an element's "grabbed" state in a drag-and-drop operation.                                                                                                                                                 |
| aria-haspopup             | Booleanish \| "menu" \| "listbox" \| "tree" \| "grid" \| "dialog"                                                                                                          | -                                            | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.                                                                                       |
| aria-hidden               | Booleanish                                                                                                                                                                 | -                                            | Indicates whether the element is exposed to an accessibility API.                                                                                                                                                    |
| aria-invalid              | Booleanish \| "grammar" \| "spelling"                                                                                                                                      | -                                            | Indicates the entered value does not conform to the format expected by the application.                                                                                                                              |
| aria-keyshortcuts         | string                                                                                                                                                                     | -                                            | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.                                                                                                                 |
| aria-label                | string                                                                                                                                                                     | -                                            | Defines a string value that labels the current element.                                                                                                                                                              |
| aria-labelledby           | string                                                                                                                                                                     | -                                            | Identifies the element (or elements) that labels the current element.                                                                                                                                                |
| aria-level                | Numberish                                                                                                                                                                  | -                                            | Defines the hierarchical level of an element within a structure.                                                                                                                                                     |
| aria-live                 | "off" \| "assertive" \| "polite"                                                                                                                                           | -                                            | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.                                                     |
| aria-modal                | Booleanish                                                                                                                                                                 | -                                            | Indicates whether an element is modal when displayed.                                                                                                                                                                |
| aria-multiline            | Booleanish                                                                                                                                                                 | -                                            | Indicates whether a text box accepts multiple lines of input or only a single line.                                                                                                                                  |
| aria-multiselectable      | Booleanish                                                                                                                                                                 | -                                            | Indicates that the user may select more than one item from the current selectable descendants.                                                                                                                       |
| aria-orientation          | "horizontal" \| "vertical"                                                                                                                                                 | -                                            | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.                                                                                                                           |
| aria-owns                 | string                                                                                                                                                                     | -                                            | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.      |
| aria-placeholder          | string                                                                                                                                                                     | -                                            | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.                  |
| aria-posinset             | Numberish                                                                                                                                                                  | -                                            | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.                                                                |
| aria-pressed              | Booleanish \| "mixed"                                                                                                                                                      | -                                            | Indicates the current "pressed" state of toggle buttons.                                                                                                                                                             |
| aria-readonly             | Booleanish                                                                                                                                                                 | -                                            | Indicates that the element is not editable, but is otherwise operable.                                                                                                                                               |
| aria-relevant             | "text" \| "additions" \| "additions removals" \| "additions text" \| "all" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals" | -                                            | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.                                                                                               |
| aria-required             | Booleanish                                                                                                                                                                 | -                                            | Indicates that user input is required on the element before a form may be submitted.                                                                                                                                 |
| aria-roledescription      | string                                                                                                                                                                     | -                                            | Defines a human-readable, author-localized description for the role of an element.                                                                                                                                   |
| aria-rowcount             | Numberish                                                                                                                                                                  | -                                            | Defines the total number of rows in a table, grid, or treegrid.                                                                                                                                                      |
| aria-rowindex             | Numberish                                                                                                                                                                  | -                                            | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.                                                                                               |
| aria-rowspan              | Numberish                                                                                                                                                                  | -                                            | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.                                                                                                                          |
| aria-selected             | Booleanish                                                                                                                                                                 | -                                            | Indicates the current "selected" state of various widgets.                                                                                                                                                           |
| aria-setsize              | Numberish                                                                                                                                                                  | -                                            | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.                                                                            |
| aria-sort                 | "none" \| "ascending" \| "descending" \| "other"                                                                                                                           | -                                            | Indicates if items in a table or grid are sorted in ascending or descending order.                                                                                                                                   |
| aria-valuemax             | Numberish                                                                                                                                                                  | -                                            | Defines the maximum allowed value for a range widget.                                                                                                                                                                |
| aria-valuemin             | Numberish                                                                                                                                                                  | -                                            | Defines the minimum allowed value for a range widget.                                                                                                                                                                |
| aria-valuenow             | Numberish                                                                                                                                                                  | -                                            | Defines the current value for a range widget.                                                                                                                                                                        |
| aria-valuetext            | string                                                                                                                                                                     | -                                            | Defines the human readable text alternative of aria-valuenow for a range widget.                                                                                                                                     |
| innerHTML                 | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| class                     | any                                                                                                                                                                        | -                                            |                                                                                                                                                                                                                      |
| style                     | StyleValue                                                                                                                                                                 | -                                            |                                                                                                                                                                                                                      |
| accesskey                 | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| contenteditable           | Booleanish \| "inherit" \| "plaintext-only"                                                                                                                                | -                                            |                                                                                                                                                                                                                      |
| contextmenu               | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| dir                       | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| draggable                 | Booleanish                                                                                                                                                                 | -                                            |                                                                                                                                                                                                                      |
| enterkeyhint              | "enter" \| "done" \| "go" \| "next" \| "previous" \| "search" \| "send"                                                                                                    | -                                            |                                                                                                                                                                                                                      |
| enterKeyHint              | "enter" \| "done" \| "go" \| "next" \| "previous" \| "search" \| "send"                                                                                                    | -                                            |                                                                                                                                                                                                                      |
| hidden                    | "" \| Booleanish \| "hidden" \| "until-found"                                                                                                                              | -                                            |                                                                                                                                                                                                                      |
| id                        | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| inert                     | Booleanish                                                                                                                                                                 | -                                            |                                                                                                                                                                                                                      |
| lang                      | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| spellcheck                | Booleanish                                                                                                                                                                 | -                                            |                                                                                                                                                                                                                      |
| tabindex                  | Numberish                                                                                                                                                                  | -                                            |                                                                                                                                                                                                                      |
| title                     | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| translate                 | "yes" \| "no"                                                                                                                                                              | -                                            |                                                                                                                                                                                                                      |
| radiogroup                | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| role                      | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| about                     | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| datatype                  | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| inlist                    | any                                                                                                                                                                        | -                                            |                                                                                                                                                                                                                      |
| prefix                    | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| property                  | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| resource                  | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| typeof                    | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| vocab                     | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| autocapitalize            | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| autocorrect               | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| autosave                  | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| color                     | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| itemprop                  | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| itemscope                 | Booleanish                                                                                                                                                                 | -                                            |                                                                                                                                                                                                                      |
| itemtype                  | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| itemid                    | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| itemref                   | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| results                   | Numberish                                                                                                                                                                  | -                                            |                                                                                                                                                                                                                      |
| security                  | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| unselectable              | "on" \| "off"                                                                                                                                                              | -                                            |                                                                                                                                                                                                                      |
| inputmode                 | "text" \| "search" \| "none" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal"                                                                                        | -                                            | Hints at the type of data that might be entered by the user while editing the element or its contents                                                                                                                |
| is                        | string                                                                                                                                                                     | -                                            | Specify that a standard HTML element should behave like a defined custom built-in element                                                                                                                            |
| exportparts               | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| part                      | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| accept                    | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| alt                       | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| autocomplete              | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| capture                   | boolean \| "user" \| "environment"                                                                                                                                         | -                                            |                                                                                                                                                                                                                      |
| checked                   | any[] \| Set<any> \| Booleanish                                                                                                                                            | -                                            |                                                                                                                                                                                                                      |
| crossorigin               | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| form                      | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| formaction                | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| formenctype               | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| formmethod                | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| formnovalidate            | Booleanish                                                                                                                                                                 | -                                            |                                                                                                                                                                                                                      |
| formtarget                | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| height                    | Numberish                                                                                                                                                                  | -                                            |                                                                                                                                                                                                                      |
| indeterminate             | boolean                                                                                                                                                                    | -                                            |                                                                                                                                                                                                                      |
| list                      | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| max                       | Numberish                                                                                                                                                                  | -                                            |                                                                                                                                                                                                                      |
| maxlength                 | Numberish                                                                                                                                                                  | -                                            |                                                                                                                                                                                                                      |
| min                       | Numberish                                                                                                                                                                  | -                                            |                                                                                                                                                                                                                      |
| minlength                 | Numberish                                                                                                                                                                  | -                                            |                                                                                                                                                                                                                      |
| multiple                  | Booleanish                                                                                                                                                                 | -                                            |                                                                                                                                                                                                                      |
| pattern                   | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| readonly                  | Booleanish                                                                                                                                                                 | -                                            |                                                                                                                                                                                                                      |
| src                       | string                                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| step                      | Numberish                                                                                                                                                                  | -                                            |                                                                                                                                                                                                                      |
| type                      | InputTypeHTMLAttribute                                                                                                                                                     | -                                            |                                                                                                                                                                                                                      |
| value                     | any                                                                                                                                                                        | -                                            |                                                                                                                                                                                                                      |
| width                     | Numberish                                                                                                                                                                  | -                                            |                                                                                                                                                                                                                      |
| onCancel                  | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onCopy                    | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onCut                     | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onPaste                   | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onCompositionend          | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onCompositionstart        | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onCompositionupdate       | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onDrag                    | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onDragend                 | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onDragenter               | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onDragexit                | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onDragleave               | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onDragover                | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onDragstart               | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onDrop                    | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onFocus                   | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onFocusin                 | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onFocusout                | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onBlur                    | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onChange                  | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onBeforeinput             | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onFormdata                | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onInput                   | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onReset                   | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onSubmit                  | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onInvalid                 | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onFullscreenchange        | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onFullscreenerror         | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onLoad                    | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onError                   | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onKeydown                 | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onKeypress                | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onKeyup                   | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onDblclick                | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onMousedown               | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onMouseenter              | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onMouseleave              | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onMousemove               | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onMouseout                | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onMouseover               | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onMouseup                 | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onAbort                   | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onCanplay                 | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onCanplaythrough          | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onDurationchange          | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onEmptied                 | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onEncrypted               | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onEnded                   | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onLoadeddata              | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onLoadedmetadata          | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onLoadstart               | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onPause                   | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onPlay                    | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onPlaying                 | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onProgress                | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onRatechange              | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onSeeked                  | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onSeeking                 | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onStalled                 | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onSuspend                 | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onTimeupdate              | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onVolumechange            | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onWaiting                 | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onSelect                  | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onScroll                  | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onScrollend               | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onTouchcancel             | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onTouchend                | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onTouchmove               | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onTouchstart              | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onAuxclick                | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onClick                   | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onContextmenu             | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onGotpointercapture       | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onLostpointercapture      | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onPointerdown             | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onPointermove             | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onPointerup               | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onPointercancel           | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onPointerenter            | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onPointerleave            | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onPointerover             | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onPointerout              | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onBeforetoggle            | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onToggle                  | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onWheel                   | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onAnimationcancel         | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onAnimationstart          | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onAnimationend            | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onAnimationiteration      | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onSecuritypolicyviolation | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onTransitioncancel        | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onTransitionend           | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onTransitionrun           | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| onTransitionstart         | Function                                                                                                                                                                   | -                                            |                                                                                                                                                                                                                      |
| modelValue                | Nullable<string>                                                                                                                                                           | -                                            | Value of the component.                                                                                                                                                                                              |
| defaultValue              | Nullable<string>                                                                                                                                                           | -                                            | The default value for the input when not controlled by `modelValue` .                                                                                                                                                |
| name                      | string                                                                                                                                                                     | -                                            | The name attribute for the element, typically used in form submissions.                                                                                                                                              |
| promptLabel               | string                                                                                                                                                                     | -                                            | Text to prompt password entry. Defaults to PrimeVue Locale configuration.                                                                                                                                            |
| mediumRegex               | string \| RegExp                                                                                                                                                           | ^(((?=._[a-z])(?=._[A-Z]))                   | ((?=._[a-z])(?=._[0-9]))                                                                                                                                                                                             | ((?=._[A-Z])(?=._[0-9])))(?=.{6,}) | Regex for a medium level password. |
| strongRegex               | string \| RegExp                                                                                                                                                           | ^(?=._[a-z])(?=._[A-Z])(?=.\*[0-9])(?=.{8,}) | Regex for a strong level password.                                                                                                                                                                                   |
| weakLabel                 | string                                                                                                                                                                     | -                                            | Text for a weak password. Defaults to PrimeVue Locale configuration.                                                                                                                                                 |
| mediumLabel               | string                                                                                                                                                                     | -                                            | Text for a medium password. Defaults to PrimeVue Locale configuration.                                                                                                                                               |
| strongLabel               | string                                                                                                                                                                     | -                                            | Text for a strong password. Defaults to PrimeVue Locale configuration.                                                                                                                                               |
| feedback                  | boolean                                                                                                                                                                    | true                                         | Whether to show the strength indicator or not.                                                                                                                                                                       |
| appendTo                  | HTMLElement \| HintedString<"body" \| "self">                                                                                                                              | body                                         | A valid query selector or an HTMLElement to specify where the overlay gets attached.                                                                                                                                 |
| toggleMask                | boolean                                                                                                                                                                    | false                                        | Whether to show an icon to display the password as plain text.                                                                                                                                                       |
| maskIcon                  | string                                                                                                                                                                     | -                                            | Icon to hide displaying the password as plain text.                                                                                                                                                                  |
| unmaskIcon                | string                                                                                                                                                                     | -                                            | Icon to show displaying the password as plain text.                                                                                                                                                                  |
| showClear                 | boolean                                                                                                                                                                    | false                                        | When enabled, a clear icon is displayed to clear the value.                                                                                                                                                          |
| size                      | HintedString<"small" \| "large">                                                                                                                                           | -                                            | Defines the size of the component.                                                                                                                                                                                   |
| invalid                   | boolean                                                                                                                                                                    | false                                        | When present, it specifies that the component should have invalid state style.                                                                                                                                       |
| disabled                  | boolean                                                                                                                                                                    | false                                        | When present, it specifies that the component should be disabled.                                                                                                                                                    |
| variant                   | null \| HintedString<"outlined" \| "filled">                                                                                                                               | null                                         | Specifies the input variant of the component.                                                                                                                                                                        |
| placeholder               | string                                                                                                                                                                     | -                                            | Placeholder text for the input.                                                                                                                                                                                      |
| required                  | boolean                                                                                                                                                                    | false                                        | When present, it specifies that an input field must be filled out before submitting the form.                                                                                                                        |
| fluid                     | boolean                                                                                                                                                                    | null                                         | Spans 100% width of the container when enabled.                                                                                                                                                                      |
| autofocus                 | boolean                                                                                                                                                                    | null                                         | When present, it specifies that an input element should automatically get focus when the page loads.                                                                                                                 |
| inputId                   | string                                                                                                                                                                     | -                                            | Identifier of the underlying input element.                                                                                                                                                                          |
| inputStyle                | object                                                                                                                                                                     | -                                            | Inline style of the input field.                                                                                                                                                                                     |
| inputClass                | string \| object                                                                                                                                                           | -                                            | Style class of the input field.                                                                                                                                                                                      |
| inputProps                | InputHTMLAttributes                                                                                                                                                        | -                                            | Used to pass all properties of the HTMLInputElement to the focusable input element inside the component.                                                                                                             |
| panelId                   | string                                                                                                                                                                     | -                                            | Identifier of the underlying overlay panel element.                                                                                                                                                                  |
| panelClass                | string \| object                                                                                                                                                           | -                                            | Style class of the overlay panel.                                                                                                                                                                                    |
| panelStyle                | object                                                                                                                                                                     | -                                            | Inline style of the overlay panel.                                                                                                                                                                                   |
| panelProps                | HTMLAttributes                                                                                                                                                             | -                                            | Used to pass all properties of the HTMLDivElement to the overlay panel inside the component.                                                                                                                         |
| overlayId                 | string                                                                                                                                                                     | -                                            | Identifier of the underlying overlay element.                                                                                                                                                                        |
| overlayClass              | string \| object                                                                                                                                                           | -                                            | Style class of the overlay.                                                                                                                                                                                          |
| overlayStyle              | object                                                                                                                                                                     | -                                            | Inline style of the overlay.                                                                                                                                                                                         |
| overlayProps              | HTMLAttributes                                                                                                                                                             | -                                            | Used to pass all properties of the HTMLDivElement to the overlay inside the component.                                                                                                                               |
| ariaLabelledby            | string                                                                                                                                                                     | -                                            | Establishes relationships between the component and label(s) where its value should be one or more element IDs.                                                                                                      |
| ariaLabel                 | string                                                                                                                                                                     | -                                            | Establishes a string value that labels the component.                                                                                                                                                                |
| formControl               | Record<string, any>                                                                                                                                                        | -                                            | Form control object, typically used for handling validation and form state.                                                                                                                                          |
| dt                        | any                                                                                                                                                                        | -                                            | It generates scoped CSS variables using design tokens for the component.                                                                                                                                             |
| pt                        | PassThrough<PasswordPassThroughOptions>                                                                                                                                    | -                                            | Used to pass attributes to DOM elements inside the component.                                                                                                                                                        |
| ptOptions                 | any                                                                                                                                                                        | -                                            | Used to configure passthrough(pt) options of the component.                                                                                                                                                          |
| unstyled                  | boolean                                                                                                                                                                    | false                                        | When enabled, it removes component related styles in the core.                                                                                                                                                       |

## Pass Through Options

| Name            | Type                              | Description                                                   |
| --------------- | --------------------------------- | ------------------------------------------------------------- |
| root            | PasswordPassThroughOptionType     | Used to pass attributes to the root's DOM element.            |
| pcInputText     | any                               | Used to pass attributes to the InputText component.           |
| maskIcon        | PasswordPassThroughOptionType     | Used to pass attributes to the mask icon's DOM element.       |
| unmaskIcon      | PasswordPassThroughOptionType     | Used to pass attributes to the unmask icon's DOM element.     |
| clearIcon       | PasswordPassThroughOptionType     | Used to pass attributes to the clear icon's DOM element.      |
| overlay         | PasswordPassThroughOptionType     | Used to pass attributes to the overlay's DOM element.         |
| content         | PasswordPassThroughOptionType     | Used to pass attributes to the overlay's content DOM element. |
| meter           | PasswordPassThroughOptionType     | Used to pass attributes to the meter's DOM element.           |
| meterLabel      | PasswordPassThroughOptionType     | Used to pass attributes to the meter label's DOM element.     |
| meterText       | PasswordPassThroughOptionType     | Used to pass attributes to the meter text's DOM element.      |
| hiddenAccesible | PasswordPassThroughOptionType     | Used to pass attributes to the hidden accessible DOM element. |
| hooks           | any                               | Used to manage all lifecycle hooks.                           |
| transition      | PasswordPassThroughTransitionType | Used to control Vue Transition API.                           |

## Theming

### CSS Classes

| Class                  | Description                           |
| ---------------------- | ------------------------------------- |
| p-password             | Class name of the root element        |
| p-password-input       | Class name of the pt input element    |
| p-password-mask-icon   | Class name of the mask icon element   |
| p-password-unmask-icon | Class name of the unmask icon element |
| p-password-clear-icon  | Class name of the clear icon element  |
| p-password-overlay     | Class name of the overlay element     |
| p-password-meter       | Class name of the meter element       |
| p-password-meter-label | Class name of the meter label element |
| p-password-meter-text  | Class name of the meter text element  |

### Design Tokens

| Token                               | CSS Variable                            | Description                   |
| ----------------------------------- | --------------------------------------- | ----------------------------- |
| password.meter.background           | --p-password-meter-background           | Background of meter           |
| password.meter.border.radius        | --p-password-meter-border-radius        | Border radius of meter        |
| password.meter.height               | --p-password-meter-height               | Height of meter               |
| password.icon.color                 | --p-password-icon-color                 | Color of icon                 |
| password.overlay.background         | --p-password-overlay-background         | Background of overlay         |
| password.overlay.border.color       | --p-password-overlay-border-color       | Border color of overlay       |
| password.overlay.border.radius      | --p-password-overlay-border-radius      | Border radius of overlay      |
| password.overlay.color              | --p-password-overlay-color              | Color of overlay              |
| password.overlay.padding            | --p-password-overlay-padding            | Padding of overlay            |
| password.overlay.shadow             | --p-password-overlay-shadow             | Shadow of overlay             |
| password.content.gap                | --p-password-content-gap                | Gap of content                |
| password.strength.weak.background   | --p-password-strength-weak-background   | Weak background of strength   |
| password.strength.medium.background | --p-password-strength-medium-background | Medium background of strength |
| password.strength.strong.background | --p-password-strength-strong-background | Strong background of strength |
