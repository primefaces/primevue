# Vue Editor Component

Editor is rich text editor component based on Quill.

## Import

```javascript
import Editor from 'primevue/editor';
```

## Accessibility

Screen Reader Quill performs generally well in terms of accessibility. The elements in the toolbar can be tabbed and have the necessary ARIA roles/attributes for screen readers. One known limitation is the lack of arrow key support for dropdowns in the toolbar that may be overcome with a custom toolbar.

## Basic

Editor is used with the v-model property for two-way value binding.

```vue
<Editor v-model="value" editorStyle="height: 320px" />
```

## Forms

Editor integrates seamlessly with the PrimeVue Forms library.

## Quill

Editor uses Quill editor underneath so it needs to be installed as a dependency.

```vue
npm install quill
```

## ReadOnly

When readonly is present, the value cannot be edited.

```vue
<Editor v-model="value" editorStyle="height: 320px" readonly />
```

## Template

Editor provides a default toolbar with common options, to customize it define your elements inside the header element. Refer to Quill documentation for available controls.

```vue
<Editor v-model="value" editorStyle="height: 320px">
    <template v-slot:toolbar>
        <span class="ql-formats">
            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
        </span>
    </template>
</Editor>
```

## Editor

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | string | - | Value of the content. |
| defaultValue | any | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| placeholder | string | - | Placeholder text to show when editor is empty. |
| readonly | boolean | false | Whether to instantiate the editor to readonly mode. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| formats | any[] | - | Whitelist of formats to display, see  <a target="_blank" href="https://quilljs.com/docs/formats/">here</a>  for available options. |
| editorStyle | any | - | Inline style of the container. |
| modules | any | - | Modules configuration, see  <a target="_blank" href="https://quilljs.com/docs/modules/">here</a>  for available options. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<EditorPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

### Slots

| Name | Parameters | Description |
|------|------------|-------------|
| toolbar | Function |  |

## Editor

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | string | - | Value of the content. |
| defaultValue | any | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| placeholder | string | - | Placeholder text to show when editor is empty. |
| readonly | boolean | false | Whether to instantiate the editor to readonly mode. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| formats | any[] | - | Whitelist of formats to display, see  <a target="_blank" href="https://quilljs.com/docs/formats/">here</a>  for available options. |
| editorStyle | any | - | Inline style of the container. |
| modules | any | - | Modules configuration, see  <a target="_blank" href="https://quilljs.com/docs/modules/">here</a>  for available options. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<EditorPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

### Slots

| Name | Parameters | Description |
|------|------------|-------------|
| toolbar | Function |  |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | EditorPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| toolbar | EditorPassThroughOptionType | Used to pass attributes to the toolbar's DOM element. |
| formats | EditorPassThroughOptionType | Used to pass attributes to the formats' DOM element. |
| header | EditorPassThroughOptionType | Used to pass attributes to the header's DOM element. |
| option | EditorPassThroughOptionType | Used to pass attributes to the option's DOM element. |
| bold | EditorPassThroughOptionType | Used to pass attributes to the bold's DOM element. |
| italic | EditorPassThroughOptionType | Used to pass attributes to the italic's DOM element. |
| underline | EditorPassThroughOptionType | Used to pass attributes to the underline's DOM element. |
| color | EditorPassThroughOptionType | Used to pass attributes to the color's DOM element. |
| background | EditorPassThroughOptionType | Used to pass attributes to the background's DOM element. |
| list | EditorPassThroughOptionType | Used to pass attributes to the list's DOM element. |
| select | EditorPassThroughOptionType | Used to pass attributes to the select's DOM element. |
| link | EditorPassThroughOptionType | Used to pass attributes to the link's DOM element. |
| image | EditorPassThroughOptionType | Used to pass attributes to the image's DOM element. |
| codeBlock | EditorPassThroughOptionType | Used to pass attributes to the code block's DOM element. |
| clean | EditorPassThroughOptionType | Used to pass attributes to the clean's DOM element. |
| content | EditorPassThroughOptionType | Used to pass attributes to the content's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-editor | Class name of the root element |
| p-editor-toolbar | Class name of the toolbar element |
| p-editor-content | Class name of the content element |

