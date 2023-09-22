<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content inside a message is defined with the <i>default</i> slot.</p>
    </DocSectionText>
    <div class="card">
        <InlineMessage
            :style="{
                border: 'solid #696cff',
                borderWidth: '0 0 0 6px',
                color: '#696cff'
            }"
            severity="info"
            class="border-primary w-full justify-content-start"
        >
            <div class="flex align-items-center">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" width="32" />
                <div class="ml-2">Always bet on Prime.</div>
            </div>
        </InlineMessage>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InlineMessage :style="{  border: 'solid #696cff', borderWidth: '0 0 0 6px', color: '#696cff' }"
        severity="info" class="border-primary w-full justify-content-start">
    <div class="flex align-items-center">
        <img alt="logo" src="/images/logo.svg" width="32" />
        <div class="ml-2">Always bet on Prime.</div>
    </div>
</InlineMessage>`,
                options: `
<template>
    <div class="card">
        <InlineMessage :style="{  border: 'solid #696cff', borderWidth: '0 0 0 6px', color: '#696cff' }"
                severity="info" class="border-primary w-full justify-content-start">
            <div class="flex align-items-center">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" width="32" />
                <div class="ml-2">Always bet on Prime.</div>
            </div>
        </InlineMessage>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card">
        <InlineMessage :style="{  border: 'solid #696cff', borderWidth: '0 0 0 6px', color: '#696cff' }"
                severity="info" class="border-primary w-full justify-content-start">
            <div class="flex align-items-center">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" width="32" />
                <div class="ml-2">Always bet on Prime.</div>
            </div>
        </InlineMessage>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
