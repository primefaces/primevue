<template>
    <DocSectionText v-bind="$attrs">
        <p>FocusTrap is enabled by attaching the directive with the v- prefix.</p>
    </DocSectionText>
    <div class="flex justify-content-center p-fluid">
        <div v-focustrap class="card">
            <div class="field">
                <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
            </div>
            <div class="field">
                <div class="p-input-icon-right">
                    <i class="pi pi-envelope" />
                    <InputText id="email" v-model="email" type="email" placeholder="Email" />
                </div>
            </div>
            <div class="field">
                <div class="p-float-label">
                    <Password v-model="password">
                        <template #header>
                            <h6>Pick a password</h6>
                        </template>
                        <template #footer>
                            <Divider />
                            <p class="mt-2">Suggestions</p>
                            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                <li>At least one lowercase</li>
                                <li>At least one uppercase</li>
                                <li>At least one numeric</li>
                                <li>Minimum 8 characters</li>
                            </ul>
                        </template>
                    </Password>
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="field-checkbox">
                <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                <label for="accept">I agree to the terms and conditions*</label>
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
            password: null,
            accept: null,
            code: {
                basic: `
<div class="flex justify-content-center p-fluid">
    <div v-focustrap class="card">
        <div class="field">
            <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
        </div>
        <div class="field">
            <div class="p-input-icon-right">
                <i class="pi pi-envelope" />
                <InputText id="email" v-model="email" type="email" placeholder="Email" />
            </div>
        </div>
        <div class="field">
            <div class="p-float-label">
                <Password v-model="password">
                    <template #header>
                        <h6>Pick a password</h6>
                    </template>
                    <template #footer>
                        <Divider />
                        <p class="mt-2">Suggestions</p>
                        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                            <li>At least one lowercase</li>
                            <li>At least one uppercase</li>
                            <li>At least one numeric</li>
                            <li>Minimum 8 characters</li>
                        </ul>
                    </template>
                </Password>
                <label for="password">Password</label>
            </div>
        </div>
        <div class="field-checkbox">
            <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
            <label for="accept">I agree to the terms and conditions*</label>
        </div>
        <Button type="submit" label="Submit" class="mt-2" />
    </div>
</div>`,
                options: `
<template>
    <div class="flex justify-content-center p-fluid">
        <div v-focustrap class="card">
            <div class="field">
                <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
            </div>
            <div class="field">
                <div class="p-input-icon-right">
                    <i class="pi pi-envelope" />
                    <InputText id="email" v-model="email" type="email" placeholder="Email" />
                </div>
            </div>
            <div class="field">
                <div class="p-float-label">
                    <Password v-model="password">
                        <template #header>
                            <h6>Pick a password</h6>
                        </template>
                        <template #footer>
                            <Divider />
                            <p class="mt-2">Suggestions</p>
                            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                <li>At least one lowercase</li>
                                <li>At least one uppercase</li>
                                <li>At least one numeric</li>
                                <li>Minimum 8 characters</li>
                            </ul>
                        </template>
                    </Password>
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="field-checkbox">
                <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                <label for="accept">I agree to the terms and conditions*</label>
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
            password: null,
            accept: null
        };
    }
};
<\/script>`,
                composition: `
<template>
    <div class="flex justify-content-center p-fluid">
        <div v-focustrap class="card">
            <div class="field">
                <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
            </div>
            <div class="field">
                <div class="p-input-icon-right">
                    <i class="pi pi-envelope" />
                    <InputText id="email" v-model="email" type="email" placeholder="Email" />
                </div>
            </div>
            <div class="field">
                <div class="p-float-label">
                    <Password v-model="password">
                        <template #header>
                            <h6>Pick a password</h6>
                        </template>
                        <template #footer>
                            <Divider />
                            <p class="mt-2">Suggestions</p>
                            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                <li>At least one lowercase</li>
                                <li>At least one uppercase</li>
                                <li>At least one numeric</li>
                                <li>Minimum 8 characters</li>
                            </ul>
                        </template>
                    </Password>
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="field-checkbox">
                <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                <label for="accept">I agree to the terms and conditions*</label>
            </div>
            <Button type="submit" label="Submit" class="mt-2" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref();
const email = ref();
const password = ref();
const accept = ref();
<\/script>`
            }
        };
    }
};
</script>
