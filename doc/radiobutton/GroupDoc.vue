<template>
    <DocSectionText v-bind="$attrs">
        <p>Two-way value binding is defined using <i>v-model</i>.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <div class="flex flex-wrap gap-4">
            <div class="flex items-center">
                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
                <label for="ingredient1" class="ml-2">Cheese</label>
            </div>
            <div class="flex items-center">
                <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
                <label for="ingredient2" class="ml-2">Mushroom</label>
            </div>
            <div class="flex items-center">
                <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
                <label for="ingredient3" class="ml-2">Pepper</label>
            </div>
            <div class="flex items-center">
                <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
                <label for="ingredient4" class="ml-2">Onion</label>
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            ingredient: '',
            code: {
                basic: `
<div class="flex flex-wrap gap-4">
    <div class="flex items-center">
        <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1" class="ml-2">Cheese</label>
    </div>
    <div class="flex items-center">
        <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
        <label for="ingredient2" class="ml-2">Mushroom</label>
    </div>
    <div class="flex items-center">
        <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
        <label for="ingredient3" class="ml-2">Pepper</label>
    </div>
    <div class="flex items-center">
        <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
        <label for="ingredient4" class="ml-2">Onion</label>
    </div>
</div>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <div class="flex flex-wrap gap-4">
            <div class="flex items-center">
                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
                <label for="ingredient1" class="ml-2">Cheese</label>
            </div>
            <div class="flex items-center">
                <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
                <label for="ingredient2" class="ml-2">Mushroom</label>
            </div>
            <div class="flex items-center">
                <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
                <label for="ingredient3" class="ml-2">Pepper</label>
            </div>
            <div class="flex items-center">
                <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
                <label for="ingredient4" class="ml-2">Onion</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ingredient: ''
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <div class="flex flex-wrap gap-4">
            <div class="flex items-center">
                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
                <label for="ingredient1" class="ml-2">Cheese</label>
            </div>
            <div class="flex items-center">
                <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
                <label for="ingredient2" class="ml-2">Mushroom</label>
            </div>
            <div class="flex items-center">
                <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
                <label for="ingredient3" class="ml-2">Pepper</label>
            </div>
            <div class="flex items-center">
                <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
                <label for="ingredient4" class="ml-2">Onion</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const ingredient = ref('');
<\/script>
`
            }
        };
    }
};
</script>
