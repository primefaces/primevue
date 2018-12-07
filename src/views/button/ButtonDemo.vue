<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Button</h1>
                <p>Button is an extension to standard button element with icons and theming.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <p-button label="Click" />
            <p-button label="Click" icon="pi pi-check" />
            <p-button label="Click" icon="pi pi-check" iconPos="right" />
            <p-button icon="pi pi-check" />
            <p-button label="Click" disabled="disabled" />

            <h3>Severities</h3>
            <p-button label="Primary" />
            <p-button label="Secondary" class="p-button-secondary" />
            <p-button label="Success" class="p-button-success" />
            <p-button label="Info" class="p-button-info" />
            <p-button label="Warning" class="p-button-warning" />
            <p-button label="Danger" class="p-button-danger" />

            <h3>Raised Buttons</h3>
            <p-button label="Primary" class="p-button-raised" />
            <p-button label="Secondary" class="p-button-raised p-button-secondary" />
            <p-button label="Success" class="p-button-raised p-button-success" />
            <p-button label="Info" class="p-button-raised p-button-info" />
            <p-button label="Warning" class="p-button-raised p-button-warning" />
            <p-button label="Danger" class="p-button-raised p-button-danger" />

            <h3>Rounded Buttons</h3>
            <p-button label="Primary" class="p-button-rounded" />
            <p-button label="Secondary" class="p-button-rounded p-button-secondary" />
            <p-button label="Success" class="p-button-rounded p-button-success" />
            <p-button label="Info" class="p-button-rounded p-button-info" />
            <p-button label="Warning" class="p-button-rounded p-button-warning" />
            <p-button label="Danger" class="p-button-rounded p-button-danger" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    button {
        margin-right: .5em;
    }
</style>