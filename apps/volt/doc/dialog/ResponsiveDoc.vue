<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Dialog width can be adjusted per screen size with the <i>breakpoints</i> option where the max-width for the breakpoint and the width are defined as key-value pairs. When no breakpoint matches width defined in <i>style</i> or
            <i>class</i> is used. Alternatively responsive utility classes of libraries like Tailwind can also be used such as <i>md:w-screen</i>.
        </p>
    </DocSectionText>

    <div class="card flex justify-center">
        <Button label="Show" @click="visible = true" />

        <Dialog v-model:visible="visible" modal header="Header" class="lg:w-100 md:w-3/4 w-9/10">
            <p class="m-0!">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/Button.vue';
import Dialog from '@/volt/Dialog.vue';
import { ref } from 'vue';

const visible = ref(false);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Button label="Show" @click="visible = true" />

        <Dialog v-model:visible="visible" modal header="Header" class="lg:w-100 md:w-3/4 w-9/10">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
</template>

<script setup>
import Button from '@/volt/Button.vue';
import Dialog from '@/volt/Dialog.vue';
import { ref } from 'vue';

const visible = ref(false);
<\/script>
`);
</script>
