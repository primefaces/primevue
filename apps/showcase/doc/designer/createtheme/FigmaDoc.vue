<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <NuxtLink to="uikit">Figma UI Kit</NuxtLink> and the theming api is fully synchorized, meaning the design tokens in Figma map to the CSS variables in the code. The mapping is created via the
            <a href="https://tokens.studio/" target="_blank" rel="noopener noreferrer">Token Studio</a> at Figma which allows exporting a single json file. The Designer is able to interpret this file and transform it to an actual theme. In case your
            UI Kit version is older, the transformation process marks the missing tokens and recommends an auto migration via the migration assistant. This is an automated workflow and eliminates the manual design to code during the handoff process.
            If you have UI designers in your team, the recommended approach is using Figma for the actual design process and utilizing the designer for transformation, preview and download purposes.
        </p>
        <div class="pl-8 pr-4 pt-4 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface" style="max-width: 48rem">
            <img alt="Designer Dashboard" src="https://primefaces.org/cdn/designer/guide-create.png" class="w-full" />
        </div>
    </DocSectionText>
</template>
