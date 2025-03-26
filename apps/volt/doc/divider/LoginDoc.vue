<template>
    <DocSectionText v-bind="$attrs">
        <p>Sample implementation of a login form using a divider with content.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5">
                <div class="flex flex-col gap-2">
                    <label for="username">Username</label>
                    <InputText id="username" type="text" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="password">Password</label>
                    <InputText id="password" type="password" />
                </div>
                <div class="flex">
                    <Button label="Login" icon="pi pi-user" class="w-full max-w-[17.35rem] mx-auto"></Button>
                </div>
            </div>
            <div class="w-full md:w-2/12">
                <Divider layout="vertical" class="!hidden md:!flex"><b>OR</b></Divider>
                <Divider layout="horizontal" class="!flex md:!hidden" align="center"><b>OR</b></Divider>
            </div>
            <div class="w-full md:w-5/12 flex items-center justify-center py-5">
                <Button label="Sign Up" icon="pi pi-user-plus" class="w-full max-w-[17.35rem] mx-auto"></Button>
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import Divider from '@/volt/Divider.vue';
import InputText from '@/volt/InputText.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card">
        <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5">
                <div class="flex flex-col gap-2">
                    <label for="username">Username</label>
                    <InputText id="username" type="text" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="password">Password</label>
                    <InputText id="password" type="password" />
                </div>
                <div class="flex">
                    <Button label="Login" icon="pi pi-user" class="w-full max-w-[17.35rem] mx-auto"></Button>
                </div>
            </div>
            <div class="w-full md:w-2/12">
                <Divider layout="vertical" class="!hidden md:!flex"><b>OR</b></Divider>
                <Divider layout="horizontal" class="!flex md:!hidden" align="center"><b>OR</b></Divider>
            </div>
            <div class="w-full md:w-5/12 flex items-center justify-center py-5">
                <Button label="Sign Up" icon="pi pi-user-plus" class="w-full max-w-[17.35rem] mx-auto"></Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Divider from '@/volt/Divider.vue';
import InputText from '@/volt/InputText.vue';
import Button from '@/volt/Button.vue';
<\/script>
`);
</script>
