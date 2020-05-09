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
            <Button label="Submit" />
            <Button label="Submit" icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" iconPos="right" />
            <Button icon="pi pi-check" />
            <Button label="Submit" disabled="disabled" />

            <h3>Severities</h3>
            <Button label="Primary" />
            <Button label="Secondary" class="p-button-secondary" />
            <Button label="Success" class="p-button-success" />
            <Button label="Info" class="p-button-info" />
            <Button label="Warning" class="p-button-warning" />
            <Button label="Danger" class="p-button-danger" />
            <Button label="Link" class="p-button-link" />

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

            <h3>Badges</h3>
            <Button type="button" label="Emails" badge="8" />
            <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-info" />

            <h3>Button Set</h3>
            <span class="p-buttonset">
                <Button label="Save" icon="pi pi-check" />
                <Button label="Delete" icon="pi pi-trash" />
                <Button label="Cancel" icon="pi pi-times" />
            </span>

            <h3>Sizes</h3>
            <div class="component-sizes">
                <Button label="Small" icon="pi pi-check" class="p-component-sm" />
                <Button label="Normal" icon="pi pi-check" />
                <Button  icon="pi pi-check" label="Large" class="p-component-lg" />
            </div>
        </div>

        <ButtonDoc/>
    </div>
</template>

<script>
import ButtonDoc from './ButtonDoc'

export default {
	components: {
		'ButtonDoc': ButtonDoc
    }
}
</script>

<style scoped>
button {
    margin-right: .5em;
}
</style>