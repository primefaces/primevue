<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple checkboxes can be grouped together.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <div class="flex items-center">
            <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1" class="ml-2"> Cheese </label>
        </div>
        <div class="flex items-center">
            <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
            <label for="ingredient2" class="ml-2"> Mushroom </label>
        </div>
        <div class="flex items-center">
            <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
            <label for="ingredient3" class="ml-2"> Pepper </label>
        </div>
        <div class="flex items-center">
            <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4" class="ml-2"> Onion </label>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            pizza: null,
            code: {
                basic: `
<div class="card flex flex-wrap justify-center gap-4">
    <div class="flex items-center">
        <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1" class="ml-2"> Cheese </label>
    </div>
    <div class="flex items-center">
        <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
        <label for="ingredient2" class="ml-2"> Mushroom </label>
    </div>
    <div class="flex items-center">
        <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
        <label for="ingredient3" class="ml-2"> Pepper </label>
    </div>
    <div class="flex items-center">
        <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
        <label for="ingredient4" class="ml-2"> Onion </label>
    </div>
</div>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <div class="flex items-center">
            <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1" class="ml-2"> Cheese </label>
        </div>
        <div class="flex items-center">
            <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
            <label for="ingredient2" class="ml-2"> Mushroom </label>
        </div>
        <div class="flex items-center">
            <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
            <label for="ingredient3" class="ml-2"> Pepper </label>
        </div>
        <div class="flex items-center">
            <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4" class="ml-2"> Onion </label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pizza: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <div class="flex items-center">
            <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1" class="ml-2"> Cheese </label>
        </div>
        <div class="flex items-center">
            <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
            <label for="ingredient2" class="ml-2"> Mushroom </label>
        </div>
        <div class="flex items-center">
            <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
            <label for="ingredient3" class="ml-2"> Pepper </label>
        </div>
        <div class="flex items-center">
            <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4" class="ml-2"> Onion </label>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const pizza = ref();
<\/script>
`
            }
        };
    }
};
</script>
