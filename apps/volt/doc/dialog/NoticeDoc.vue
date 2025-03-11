<template>
    <DocSectionText v-bind="$attrs">
        <p>Key distinctions to notice between the Volt Dialog and the PrimeVue Dialog.</p>
    </DocSectionText>
    <ul class="list-disc list-inside leading-8">
        <li>The <i class="mark">position</i> prop is not utilized in Volt, only available position is the center.</li>
        <li>Volt uses the Tailwind responsive width utilities to adjust the Dialog size per screen, instead of the <i class="mark">breakpoints</i> option of the PrimeVue Dialog.</li>
    </ul>
</template>

<script setup></script>
