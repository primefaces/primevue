<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The Figma UI Kit and the theming api is fully synchorized, meaning the design tokens in Figma map to the corresponding properties in a theme preset. The Theme Designer offers a feature to create a theme by uploading a tokens.json file
            that is exported from the Token Studio pluin in Figma. Once the theme is converted, it can either be edited further in the visual editor or downloaded as a zip file to access the full code. Visit the
            <NuxtLink to="/designer/guide/figma">Figma</NuxtLink>
            section at the designer documentation for more information.
        </p>
        <p>
            Manually exporting the tokens file from Figma and uploading it to the online designer tool may quickly become tedious in active development cycles. As a solution, theme designer provides a remote API that can be integrated in a CI
            pipeline.
        </p>
        <img
            class="rounded-lg"
            src="https://docs.tokens.studio/~gitbook/image?url=https%3A%2F%2F3704321769-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252Fds8Db2rgs9JSaG6grP0o%252Fuploads%252FYRBGXLNWmsQAtoKknlXh%252Fgithub-page-header-sync-provider.png%3Falt%3Dmedia%26token%3Db179112e-4f9f-44c5-aa6c-718a01cfcb87&width=1248&dpr=2&quality=100&sign=8b0da71d&sv=2"
        />
    </DocSectionText>
</template>
