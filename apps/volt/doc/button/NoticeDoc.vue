<template>
    <DocSectionText v-bind="$attrs">
        <p>Key distinctions to underscore between the Volt Button and the PrimeVue Button.</p>
    </DocSectionText>
    <ul class="list-disc list-inside leading-8">
        <li>The <i class="mark">severity</i> prop is not utilized in Volt, Use the semantic buttons such as ContrastButton instead of the contrast severity. Volt provides four common severities compared to the wider range of PrimeVue.</li>
        <li>The <i class="mark">badgeSeverity</i> is not used, the fixed style is provided by the <i class="mark">pcBadge</i> section instead.</li>
    </ul>
</template>

<script setup></script>
