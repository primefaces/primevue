<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple checkboxes can be grouped by binding each one to the same model.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <div class="flex items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1"> Cheese </label>
        </div>
        <div class="flex items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
            <label for="ingredient2"> Mushroom </label>
        </div>
        <div class="flex items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
            <label for="ingredient3"> Pepper </label>
        </div>
        <div class="flex items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4"> Onion </label>
        </div>
    </div>
    <DocSectionCode :code="code" />

    <DocSectionText>
        <p>
            Alternatively, a <i>CheckboxGroup</i> wrapper can be used to group checkboxes. In this case, the <i>v-model</i> should be defined on the <i>CheckboxGroup</i>, not on the individual checkboxes.
            When a Checkbox is inside a CheckboxGroup, it reads and writes the group's value instead of its own.
        </p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <CheckboxGroup v-model="ingredients" class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2">
                <Checkbox inputId="ingredient5" value="Cheese" />
                <label for="ingredient5"> Cheese </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="ingredient6" value="Mushroom" />
                <label for="ingredient6"> Mushroom </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="ingredient7" value="Pepper" />
                <label for="ingredient7"> Pepper </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="ingredient8" value="Onion" />
                <label for="ingredient8"> Onion </label>
            </div>
        </CheckboxGroup>
    </div>
    <DocSectionCode :code="groupCode" />
</template>

<script>
export default {
    data() {
        return {
            pizza: null,
            ingredients: [],
            code: {
                basic: `
<div class="card flex flex-wrap justify-center gap-4">
    <div class="flex items-center gap-2">
        <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1"> Cheese </label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
        <label for="ingredient2"> Mushroom </label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
        <label for="ingredient3"> Pepper </label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
        <label for="ingredient4"> Onion </label>
    </div>
</div>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <div class="flex items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1"> Cheese </label>
        </div>
        <div class="flex items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
            <label for="ingredient2"> Mushroom </label>
        </div>
        <div class="flex items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
            <label for="ingredient3"> Pepper </label>
        </div>
        <div class="flex items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4"> Onion </label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pizza: null
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <div class="flex items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1"> Cheese </label>
        </div>
        <div class="flex items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
            <label for="ingredient2"> Mushroom </label>
        </div>
        <div class="flex items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
            <label for="ingredient3"> Pepper </label>
        </div>
        <div class="flex items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4"> Onion </label>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const pizza = ref();
<\/script>
`
            },
            groupCode: {
                basic: `
<CheckboxGroup v-model="ingredients" class="flex flex-wrap gap-4">
    <div class="flex items-center gap-2">
        <Checkbox inputId="ingredient5" value="Cheese" />
        <label for="ingredient5"> Cheese </label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox inputId="ingredient6" value="Mushroom" />
        <label for="ingredient6"> Mushroom </label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox inputId="ingredient7" value="Pepper" />
        <label for="ingredient7"> Pepper </label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox inputId="ingredient8" value="Onion" />
        <label for="ingredient8"> Onion </label>
    </div>
</CheckboxGroup>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <CheckboxGroup v-model="ingredients" class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2">
                <Checkbox inputId="ingredient5" value="Cheese" />
                <label for="ingredient5"> Cheese </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="ingredient6" value="Mushroom" />
                <label for="ingredient6"> Mushroom </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="ingredient7" value="Pepper" />
                <label for="ingredient7"> Pepper </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="ingredient8" value="Onion" />
                <label for="ingredient8"> Onion </label>
            </div>
        </CheckboxGroup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ingredients: []
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <CheckboxGroup v-model="ingredients" class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2">
                <Checkbox inputId="ingredient5" value="Cheese" />
                <label for="ingredient5"> Cheese </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="ingredient6" value="Mushroom" />
                <label for="ingredient6"> Mushroom </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="ingredient7" value="Pepper" />
                <label for="ingredient7"> Pepper </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="ingredient8" value="Onion" />
                <label for="ingredient8"> Onion </label>
            </div>
        </CheckboxGroup>
    </div>
</template>

<script setup>
import { ref } from "vue";

const ingredients = ref([]);
<\/script>
`
            }
        };
    }
};
</script>
