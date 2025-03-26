<template>
    <DocSectionText v-bind="$attrs">
        <p>Components like <i>InputText</i> have the ability to span the full width of their parent via the <i>fluid</i> property.</p>
    </DocSectionText>
    <div class="card flex flex-col gap-6">
        <div>
            <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
            <InputText id="non-fluid" />
        </div>
        <div>
            <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
            <InputText id="non-fluid" fluid />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import InputText from '@/volt/InputText.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-col gap-6">
        <div>
            <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
            <InputText id="non-fluid" />
        </div>
        <div>
            <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
            <InputText id="non-fluid" fluid />
        </div>
    </div>
</template>

<script setup>
import InputText from '@/volt/InputText.vue';
<\/script>
`);
</script>
