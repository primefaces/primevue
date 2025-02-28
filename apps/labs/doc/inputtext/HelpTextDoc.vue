<template>
    <DocSectionText v-bind="$attrs">
        <p>An advisory text can be defined with the <NuxtLink to="/message">Message</NuxtLink> component.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <PlexInputText v-model="value" type="text" />
    </div>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script setup>
import PlexInputText from '@/plex/inputtext';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <PlexInputText v-model="value" type="text" />
    </div>
</template>

<script setup>
import PlexInputText from '@/plex/inputtext';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
