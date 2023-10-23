<template>
    <DocSectionText v-bind="$attrs">
        <p>FocusTrap is enabled by attaching the directive with the v- prefix.</p>
    </DocSectionText>
    <div class="card flex justify-content-center p-fluid">
        <div v-focustrap class="w-full" style="max-width: 20rem">
            <div class="field">
                <div class="p-input-icon-right">
                    <i class="pi pi-user" />
                    <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
                </div>
            </div>
            <div class="field">
                <div class="p-input-icon-right">
                    <i class="pi pi-envelope" />
                    <InputText id="email" v-model="email" type="email" placeholder="Email" />
                </div>
            </div>
            <div class="field-checkbox">
                <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                <label for="accept">I agree to the terms and conditions.</label>
            </div>
            <Button type="submit" label="Submit" class="mt-2" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            name: null,
            email: null,
            accept: false,
            code: {
                basic: `
<div v-focustrap class="w-full" style="max-width: 20rem">
    <div class="field">
        <div class="p-input-icon-right">
            <i class="pi pi-user" />
            <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
        </div>
    </div>
    <div class="field">
        <div class="p-input-icon-right">
            <i class="pi pi-envelope" />
            <InputText id="email" v-model="email" type="email" placeholder="Email" />
        </div>
    </div>
    <div class="field-checkbox">
        <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
        <label for="accept">I agree to the terms and conditions.</label>
    </div>
    <Button type="submit" label="Submit" class="mt-2" />
</div>
`,
                options: `
<template>
    <div class="card flex justify-content-center p-fluid">
        <div v-focustrap class="w-full" style="max-width: 20rem">
            <div class="field">
                <div class="p-input-icon-right">
                    <i class="pi pi-user" />
                    <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
                </div>
            </div>
            <div class="field">
                <div class="p-input-icon-right">
                    <i class="pi pi-envelope" />
                    <InputText id="email" v-model="email" type="email" placeholder="Email" />
                </div>
            </div>
            <div class="field-checkbox">
                <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                <label for="accept">I agree to the terms and conditions.</label>
            </div>
            <Button type="submit" label="Submit" class="mt-2" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            email: null,
            accept: false
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center p-fluid">
        <div v-focustrap class="w-full" style="max-width: 20rem">
            <div class="field">
                <div class="p-input-icon-right">
                    <i class="pi pi-user" />
                    <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
                </div>
            </div>
            <div class="field">
                <div class="p-input-icon-right">
                    <i class="pi pi-envelope" />
                    <InputText id="email" v-model="email" type="email" placeholder="Email" />
                </div>
            </div>
            <div class="field-checkbox">
                <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                <label for="accept">I agree to the terms and conditions.</label>
            </div>
            <Button type="submit" label="Submit" class="mt-2" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref();
const email = ref();
const accept = ref(false);
<\/script>
`
            }
        };
    }
};
</script>
