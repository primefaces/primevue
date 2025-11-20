# Vue IconField

IconField wraps an input and an icon.

## Import

```javascript
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
```

## Accessibility

Screen Reader IconField and InputIcon do not require any roles and attributes. Keyboard Support Components does not include any interactive elements.

## Basic

IconField wraps the InputIcon and the input field component.

```vue
<IconField>
    <InputIcon class="pi pi-search" />
    <InputText v-model="value1" placeholder="Search" />
</IconField>

<IconField>
    <InputText v-model="value2" variant="filled" />
    <InputIcon class="pi pi-spin pi-spinner" />
</IconField>
```

## Float Label

FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information.

```vue
<FloatLabel>
    <IconField>
        <InputIcon class="pi pi-search" />
        <InputText id="over_label" v-model="value1" autocomplete="off" />
    </IconField>
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <IconField>
        <InputIcon class="pi pi-search" />
        <InputText id="in_label" v-model="value2" autocomplete="off" variant="filled" />
    </IconField>
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <IconField>
        <InputIcon class="pi pi-search" />
        <InputText id="on_label" v-model="value3" autocomplete="off" />
    </IconField>
    <label for="on_label">On Label</label>
</FloatLabel>
```

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel>
    <IconField>
        <InputIcon class="pi pi-user" />
        <InputText id="username" v-model="value" variant="filled" />
    </IconField>
    <label for="username">Username</label>
</IftaLabel>
```

## Sizes

IconField is compatible with the size setting of the input field.

```vue
<IconField>
    <InputIcon class="pi pi-search" />
    <InputText v-model="value1" placeholder="Small" size="small" />
</IconField>

<IconField>
    <InputIcon class="pi pi-search" />
    <InputText v-model="value2" placeholder="Normal" />
</IconField>

<IconField>
    <InputText v-model="value3" placeholder="Large" size="large" />
    <InputIcon class="pi pi-spin pi-spinner" />
</IconField>
```

## Template

Custom content inside an InputIcon is defined as children.

```vue
<IconField>
    <InputIcon>
        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." fill="var(--p-primary-color)" />
            <path d="..." fill="var(--p-text-color)" />
        </svg>
    </InputIcon>
    <InputText v-model="value" placeholder="Search" />
</IconField>
```

## Iconfield

