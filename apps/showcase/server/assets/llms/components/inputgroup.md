# Vue InputGroup Component

Text, icon, buttons and other content can be grouped next to an input.

## Import

```javascript
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
```

## Accessibility

Screen Reader InputGroup and InputGroupAddon do not require any roles and attributes. Keyboard Support Component does not include any interactive elements.

## Basic

A group is created by wrapping the input and add-ons with the InputGroup component. Each add-on element is defined as a child of InputGroupAddon component.

```vue
<InputGroup>
    <InputGroupAddon>
        <i class="pi pi-user"></i>
    </InputGroupAddon>
    <InputText v-model="text1" placeholder="Username" />
</InputGroup>

<InputGroup>
    <InputGroupAddon>$</InputGroupAddon>
    <InputNumber v-model="number" placeholder="Price" />
    <InputGroupAddon>.00</InputGroupAddon>
</InputGroup>

<InputGroup>
    <InputGroupAddon>www</InputGroupAddon>
    <InputText v-model="text2" placeholder="Website" />
</InputGroup>

<InputGroup>
    <InputGroupAddon>
        <i class="pi pi-map"></i>
    </InputGroupAddon>
    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="City" />
</InputGroup>
```

## Button

Buttons can be placed at either side of an input element.

```vue
<InputGroup>
    <Button label="Search" />
    <InputText placeholder="Keyword" />
</InputGroup>

<InputGroup>
    <InputText placeholder="Keyword" />
    <InputGroupAddon>
        <Button icon="pi pi-search" severity="secondary" variant="text" @click="toggle" />
    </InputGroupAddon>
</InputGroup>
<Menu ref="menu" :model="items" popup class="!min-w-fit" />

<InputGroup>
    <InputGroupAddon>
        <Button icon="pi pi-check" severity="secondary" />
    </InputGroupAddon>
    <InputText placeholder="Vote" />
    <InputGroupAddon>
        <Button icon="pi pi-times" severity="secondary" />
    </InputGroupAddon>
</InputGroup>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col md:flex-row gap-4">
        <InputGroup>
            <Button label="Search" />
            <InputText placeholder="Keyword" />
        </InputGroup>

        <InputGroup>
            <InputText placeholder="Keyword" />
            <InputGroupAddon>
                <Button icon="pi pi-search" severity="secondary" variant="text" @click="toggle" />
            </InputGroupAddon>
        </InputGroup>
        <Menu ref="menu" :model="items" popup class="!min-w-fit" />

        <InputGroup>
            <InputGroupAddon>
                <Button icon="pi pi-check" severity="secondary" />
            </InputGroupAddon>
            <InputText placeholder="Vote" />
            <InputGroupAddon>
                <Button icon="pi pi-times" severity="secondary" />
            </InputGroupAddon>
        </InputGroup>
    </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref();
const items = ref([{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }]);

const toggle = (event) => {
    menu.value.toggle(event);
};
<\/script>
```

</details>

## Checkbox & Radio

Checkbox and RadioButton components can be combined with an input element under the same group.

```vue
<InputGroup>
    <InputText placeholder="Price" />
    <InputGroupAddon>
        <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
    </InputGroupAddon>
</InputGroup>

<InputGroup>
    <InputGroupAddon>
        <Checkbox v-model="checked1" :binary="true" />
    </InputGroupAddon>
    <InputText placeholder="Username" />
</InputGroup>

<InputGroup>
    <InputGroupAddon>
        <Checkbox v-model="checked2" :binary="true" />
    </InputGroupAddon>
    <InputText placeholder="Website" />
    <InputGroupAddon>
        <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
    </InputGroupAddon>
</InputGroup>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col md:flex-row gap-4">
        <InputGroup>
            <InputText placeholder="Price" />
            <InputGroupAddon>
                <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
            </InputGroupAddon>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>
                <Checkbox v-model="checked1" :binary="true" />
            </InputGroupAddon>
            <InputText placeholder="Username" />
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>
                <Checkbox v-model="checked2" :binary="true" />
            </InputGroupAddon>
            <InputText placeholder="Website" />
            <InputGroupAddon>
                <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
            </InputGroupAddon>
        </InputGroup>
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked1 = ref(false);
const checked2 = ref(false);
const radioValue1 = ref('');
const radioValue2 = ref('');
<\/script>
```

</details>

## Float Label

FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information.

```vue
<InputGroup>
    <InputGroupAddon>
        <i class="pi pi-user"></i>
    </InputGroupAddon>
    <FloatLabel>
        <InputText id="over_label" v-model="value1" />
        <label for="over_label">Over Label</label>
    </FloatLabel>
</InputGroup>

<InputGroup>
    <InputGroupAddon>$</InputGroupAddon>
    <FloatLabel variant="in">
        <InputText id="in_label" v-model="value2" />
        <label for="in_label">In Label</label>
    </FloatLabel>
    <InputGroupAddon>.00</InputGroupAddon>
</InputGroup>

<InputGroup>
    <InputGroupAddon>www</InputGroupAddon>
    <FloatLabel variant="on">
        <InputText id="on_label" v-model="value3" />
        <label for="on_label">On Label</label>
    </FloatLabel>
</InputGroup>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col md:items-end md:flex-row gap-4">
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <FloatLabel>
                <InputText id="over_label" v-model="value1" />
                <label for="over_label">Over Label</label>
            </FloatLabel>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <FloatLabel variant="in">
                <InputText id="in_label" v-model="value2" />
                <label for="in_label">In Label</label>
            </FloatLabel>
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>www</InputGroupAddon>
            <FloatLabel variant="on">
                <InputText id="on_label" v-model="value3" />
                <label for="on_label">On Label</label>
            </FloatLabel>
        </InputGroup>
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

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<InputGroup class="md:w-80">
    <InputGroupAddon>
        <i class="pi pi-shopping-cart"></i>
    </InputGroupAddon>
    <IftaLabel>
        <InputNumber v-model="value" inputId="price" mode="currency" currency="USD" locale="en-US" />
        <label for="price">Price</label>
    </IftaLabel>
</InputGroup>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputGroup class="md:w-80">
            <InputGroupAddon>
                <i class="pi pi-shopping-cart"></i>
            </InputGroupAddon>
            <IftaLabel>
                <InputNumber v-model="value" inputId="price" mode="currency" currency="USD" locale="en-US" />
                <label for="price">Price</label>
            </IftaLabel>
        </InputGroup>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(10);
<\/script>
```

</details>

## Multiple

Multiple add-ons can be placed inside the same group.

```vue
<InputGroup class="sm:!w-96">
    <InputGroupAddon>
        <i class="pi pi-clock"></i>
    </InputGroupAddon>
    <InputGroupAddon>
        <i class="pi pi-star-fill"></i>
    </InputGroupAddon>
    <InputNumber placeholder="Price" />
    <InputGroupAddon>$</InputGroupAddon>
    <InputGroupAddon>.00</InputGroupAddon>
</InputGroup>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputGroup class="sm:!w-96">
            <InputGroupAddon>
                <i class="pi pi-clock"></i>
            </InputGroupAddon>
            <InputGroupAddon>
                <i class="pi pi-star-fill"></i>
            </InputGroupAddon>
            <InputNumber placeholder="Price" />
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>
    </div>
</template>
```

</details>

## Input Group

### Props

| Name      | Type                                      | Default | Description                                                              |
| --------- | ----------------------------------------- | ------- | ------------------------------------------------------------------------ |
| dt        | any                                       | -       | It generates scoped CSS variables using design tokens for the component. |
| pt        | PassThrough<InputGroupPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions | any                                       | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled  | boolean                                   | false   | When enabled, it removes component related styles in the core.           |

### Slots

| Name          | Parameters | Description |
| ------------- | ---------- | ----------- |
| [key: string] | Function   |             |

## Pass Through Options

| Name  | Type                            | Description                                        |
| ----- | ------------------------------- | -------------------------------------------------- |
| root  | InputGroupPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| hooks | any                             | Used to manage all lifecycle hooks.                |

## Theming

### CSS Classes

| Class        | Description                    |
| ------------ | ------------------------------ |
| p-inputgroup | Class name of the root element |

### Design Tokens

| Token                          | CSS Variable                       | Description            |
| ------------------------------ | ---------------------------------- | ---------------------- |
| inputgroup.addon.background    | --p-inputgroup-addon-background    | Background of addon    |
| inputgroup.addon.border.color  | --p-inputgroup-addon-border-color  | Border color of addon  |
| inputgroup.addon.color         | --p-inputgroup-addon-color         | Color of addon         |
| inputgroup.addon.border.radius | --p-inputgroup-addon-border-radius | Border radius of addon |
| inputgroup.addon.padding       | --p-inputgroup-addon-padding       | Padding of addon       |
| inputgroup.addon.min.width     | --p-inputgroup-addon-min-width     | Min width of addon     |
