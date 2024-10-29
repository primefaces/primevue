<template>
    <DocSectionText v-bind="$attrs">
        <p>In hybrid mode, the default css rules and variables are not included however the css selectors reside in the DOM so that you may use them to build your own rules.</p>
        <div class="card flex justify-center">
            <Button label="Search" icon="pi pi-search" />
        </div>
        <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
.p-button {
    background: #a855f7;
    border: 0 none !important;
    color: white;
    padding: 0.5rem 0.75rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 24px;
}

.p-button:enabled:hover {
    background: #a855f7;
}

.p-button:enabled:active {
    background: #9333ea;
}
`
            }
        };
    }
};
</script>

<style lang="css" scoped>
.p-button {
    background: #a855f7;
    border: 0 none !important;
    color: white;
    padding: 0.5rem 0.75rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 24px;
}

.p-button:enabled:hover {
    background: #a855f7;
}

.p-button:enabled:active {
    background: #9333ea;
}
</style>
