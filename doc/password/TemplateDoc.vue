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

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
