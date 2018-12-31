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
            <Button label="Click" />
            <Button label="Click" icon="pi pi-check" />
            <Button label="Click" icon="pi pi-check" iconPos="right" />
            <Button icon="pi pi-check" />
            <Button label="Click" disabled="disabled" />

            <h3>Severities</h3>
            <Button label="Primary" />
            <Button label="Secondary" class="p-button-secondary" />
            <Button label="Success" class="p-button-success" />
            <Button label="Info" class="p-button-info" />
            <Button label="Warning" class="p-button-warning" />
            <Button label="Danger" class="p-button-danger" />

            <h3>Raised Buttons</h3>
            <Button label="Primary" class="p-button-raised" />
            <Button label="Secondary" class="p-button-raised p-button-secondary" />
            <Button label="Success" class="p-button-raised p-button-success" />
            <Button label="Info" class="p-button-raised p-button-info" />
            <Button label="Warning" class="p-button-raised p-button-warning" />
            <Button label="Danger" class="p-button-raised p-button-danger" />

            <h3>Rounded Buttons</h3>
            <Button label="Primary" class="p-button-rounded" />
            <Button label="Secondary" class="p-button-rounded p-button-secondary" />
            <Button label="Success" class="p-button-rounded p-button-success" />
            <Button label="Info" class="p-button-rounded p-button-info" />
            <Button label="Warning" class="p-button-rounded p-button-warning" />
            <Button label="Danger" class="p-button-rounded p-button-danger" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    button {
        margin-right: .5em;
    }
</style>