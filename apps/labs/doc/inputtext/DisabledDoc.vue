<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <PlexInputText v-model="value" disabled placeholder="Disabled" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import PlexInputText from '@/plex/inputtext';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <PlexInputText v-model="value" disabled placeholder="Disabled" />
    </div>
</template>

<script setup>
import PlexInputText from '@/plex/inputtext';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
