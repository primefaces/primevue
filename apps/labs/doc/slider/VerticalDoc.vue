<template>
    <DocSectionText v-bind="$attrs">
        <p>Default layout of slider is <i>horizontal</i>, use <i>orientation</i> property for the alternative <i>vertical</i> mode.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <PlexSlider v-model="value" orientation="vertical" class="h-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import PlexSlider from '@/plex/slider';
import { ref } from 'vue';

const value = ref(50);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <PlexSlider v-model="value" orientation="vertical" class="h-56" />
    </div>
</template>

<script setup>
import PlexSlider from '@/plex/slider';
import { ref } from 'vue';

const value = ref(50);
<\/script>
`);
</script>
