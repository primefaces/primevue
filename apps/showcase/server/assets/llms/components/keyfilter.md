# Vue KeyFilter Component

A keyfilter is a directive used to block individual keystrokes based on a pattern.

## Import

```javascript
import KeyFilter from 'primevue/keyfilter';

app.directive('keyfilter', KeyFilter);
```

## Accessibility

KeyFilter is a directive and do not require any accessibility features.

## Presets

KeyFilter provides various presets configured with the v-keyfilter directive.

```vue
<InputText v-keyfilter.int />
<InputText v-keyfilter.num />
<InputText v-keyfilter.money />
<InputText v-keyfilter.hex />
<InputText v-keyfilter.alpha />
<InputText v-keyfilter.alphanum />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="flex flex-wrap gap-3 mb-4">
            <div class="flex-auto">
                <label for="integer" class="font-bold block mb-2"> Integer </label>
                <InputText id="integer" v-model="integer" v-keyfilter.int fluid />
            </div>
            <div class="flex-auto">
                <label for="number" class="font-bold block mb-2"> Number </label>
                <InputText id="number" v-model="number" v-keyfilter.num fluid />
            </div>
            <div class="flex-auto">
                <label for="money" class="font-bold block mb-2"> Money </label>
                <InputText id="money" v-model="money" v-keyfilter.money fluid />
            </div>
        </div>
        <div class="flex flex-wrap gap-3">
            <div class="flex-auto">
                <label for="hex" class="font-bold block mb-2"> Hex </label>
                <InputText id="hex" v-model="hex" v-keyfilter.hex fluid />
            </div>
            <div class="flex-auto">
                <label for="alphabetic" class="font-bold block mb-2"> Alphabetic </label>
                <InputText id="alphabetic" v-model="alphabetic" v-keyfilter.alpha fluid />
            </div>
            <div class="flex-auto">
                <label for="alphanumeric" class="font-bold block mb-2"> Alphanumeric </label>
                <InputText id="alphanumeric" v-model="alphanumeric" v-keyfilter.alphanum fluid />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const integer = ref(null);
const number = ref(null);
const money = ref(null);
const hex = ref(null);
const alphabetic = ref(null);
const alphanumeric = ref(null);
<\/script>
```

</details>

## Regex (Single Keypress)

In addition to the presets, a regular expression can be configured for customization of blocking a single key press.

```vue
<InputText v-model="spacekey" v-keyfilter="/[^\s]/" />
<InputText v-model="chars" v-keyfilter="/^[^<>*!]+$/" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-3">
        <div class="flex-auto">
            <label for="spacekey" class="font-bold block mb-2"> Block Space </label>
            <InputText id="spacekey" v-model="spacekey" v-keyfilter="/[^\s]/" fluid />
        </div>
        <div class="flex-auto">
            <label for="chars" class="font-bold block mb-2"> Block &lt; &gt; * ! </label>
            <InputText id="chars" v-model="chars" v-keyfilter="/^[^<>*!]+$/" fluid />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const spacekey = ref(null);
const chars = ref(null);
<\/script>
```

</details>

## Regex (Whole Word)

In addition to the presets, a regular expression can be used to validate the entire word using validateOnly option.

```vue
<InputText v-model="text" v-keyfilter="{ pattern: /^[+]?(\d{1,12})?$/, validateOnly: true }" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <div>
            <label for="numkeys" class="font-bold block mb-2"> Block Numeric (allow "+" only once at start) </label>
            <InputText id="numkeys" v-model="text" v-keyfilter="{ pattern: /^[+]?(\d{1,12})?$/, validateOnly: true }" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const text = ref(null);
<\/script>
```

</details>

## Keyfilter
