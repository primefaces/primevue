<template>
    <DocSectionText v-bind="$attrs">
        <p>3 slots are included to customize the overlay. These are <i>header</i>, <i>content</i> and <i>footer</i>. Note that content overrides the default meter.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Password v-model="value">
            <template #header>
                <div class="font-semibold text-xm mb-4">Pick a password</div>
            </template>
            <template #footer>
                <Divider />
                <ul class="pl-2 ml-2 my-0 leading-normal">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                </ul>
            </template>
        </Password>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
<Password v-model="value">
    <template #header>
        <div class="font-semibold text-xm mb-4">Pick a password</div>
    </template>
    <template #footer>
        <Divider />
        <ul class="pl-2 ml-2 my-0 leading-normal">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </template>
</Password>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Password v-model="value">
            <template #header>
                <div class="font-semibold text-xm mb-4">Pick a password</div>
            </template>
            <template #footer>
                <Divider />
                <ul class="pl-2 ml-2 my-0 leading-normal">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                </ul>
            </template>
        </Password>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Password v-model="value">
            <template #header>
                <div class="font-semibold text-xm mb-4">Pick a password</div>
            </template>
            <template #footer>
                <Divider />
                <ul class="my-0 leading-normal">
                    <li><i :class="lowercase"></i> At least one lowercase</li>
                    <li><i :class="uppercase"></i> At least one uppercase</li>
                    <li><i :class="number"></i> At least one numeric</li>
                    <li><i :class="length"></i> Minimum 8 characters</li>
                </ul>
            </template>
        </Password>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const value = ref(null);

const pass = 'pi pi-check text-green-500';
const fail = 'pi pi-times text-red-500';

const lowercase = computed(() => {
  return /[a-z]/.test(value.value) ? pass : fail;
});
const uppercase = computed(() => {
  return /[A-Z]/.test(value.value) ? pass : fail;
});
const number = computed(() => {
  return /\d/.test(value.value) ? pass : fail;
});
const length = computed(() => {
  return value.value.length > 8 ? pass : fail;
});

<\/script>
`
            }
        };
    }
};
</script>
