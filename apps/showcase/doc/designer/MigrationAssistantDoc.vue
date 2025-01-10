<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Prime UI libraries continue to evolve with each version. New tokens are likely to be added with each major release, in order to keep your themes up to date the migration assistant is available featuring automated migration. The
            <b>Check for Updates</b> option initially scans a theme for any missing tokens. This tool does not override the values of existing tokens, and only adds missing tokens if necessary. Still, it is recommended to duplicate your theme as a
            backup and run a preview before the migration. Depending on the result, you may choose to proceed with the migration process. In case there are missing tokens, your theme would receive them with placeholder values so it is recommended to
            take a note of them before migration and then visit the components to replace the placeholder values with actual values of your choice. These types of newly added tokens would be highlighed in Editor.
        </p>
    </DocSectionText>
</template>
