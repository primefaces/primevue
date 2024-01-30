<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>command</i> property of a menuitem defines the callback to run when an item is activated by click or a key event.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
{
    label: 'Log out',
    icon: 'pi pi-signout',
    command: () => {
        // Callback to run
    }
}
`
            }
        };
    }
};
</script>
