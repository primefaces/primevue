<template>
    <DocSectionText v-bind="$attrs">
        <p>Legend section can be customized with custom content using templating.</p>
    </DocSectionText>
    <div class="card">
        <Fieldset>
            <template #legend>
                <div class="flex items-center pl-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold p-2">Amy Elsner</span>
                </div>
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Avatar from '@/volt/avatar';
import Fieldset from '@/volt/fieldset';
import { ref } from 'vue';

const code = ref(`
<template>
    <Fieldset>
        <template #legend>
            <div class="flex items-center pl-2">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold p-2">Amy Elsner</span>
            </div>
        </template>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Fieldset>
</template>

<script setup>
import Fieldset from '@/volt/fieldset';
import Avatar from '@/volt/avatar';
<\/script>
`);
</script>
