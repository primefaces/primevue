<template>
    <DocSectionText v-bind="$attrs">
        <p>Toolbar provides <i>start</i>, <i>center</i> and <i>end</i> properties to place content at these sections.</p>
    </DocSectionText>
    <div class="card">
        <Toolbar>
            <template #start>
                <SecondaryButton icon="pi pi-plus" class="mr-2" text />
                <SecondaryButton icon="pi pi-print" class="mr-2" text />
                <SecondaryButton icon="pi pi-upload" severity="secondary" text />
            </template>

            <template #center>
                <InputText placeholder="Search" />
            </template>

            <template #end>
                <Button label="Save" />
            </template>
        </Toolbar>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import InputText from '@/volt/InputText.vue';
import SecondaryButton from '@/volt/SecondaryButton';
import Toolbar from '@/volt/Toolbar.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <Toolbar>
        <template #start>
            <SecondaryButton icon="pi pi-plus" class="mr-2" text />
            <SecondaryButton icon="pi pi-print" class="mr-2" text />
            <SecondaryButton icon="pi pi-upload" severity="secondary" text />
        </template>

        <template #center>
            <InputText placeholder="Search" />
        </template>

        <template #end>
            <Button icon="pi pi-check" />
        </template>
    </Toolbar>
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import SecondaryButton from '@/volt/SecondaryButton';
import InputText from '@/volt/InputText.vue';
import Toolbar from '@/volt/Toolbar.vue';
<\/script>
`);
</script>
