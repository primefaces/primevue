<template>
    <DocSectionText v-bind="$attrs">
        <p>Key distinctions to notice between the Volt Dialog and the PrimeVue Dialog.</p>
    </DocSectionText>
    <ul class="list-disc list-inside leading-8">
        <li>The <i class="mark">position</i> prop is not utilized in Volt, only available position is the center.</li>
        <li>The Volt ConfirmDialog is based on the Headless PrimeVue ConfirmDialog so you'll be responsible for implementing the passed confirmation api properties such as <i class="mark">message</i>, <i class="mark">header</i>.</li>
    </ul>
</template>

<script setup lang="ts"></script>
