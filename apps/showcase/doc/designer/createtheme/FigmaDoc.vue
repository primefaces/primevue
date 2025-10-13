<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <NuxtLink to="uikit">Figma UI Kit</NuxtLink> and the theming api is fully synchorized, meaning the design tokens in Figma map to the CSS variables in the code. The mapping is created via the
            <a href="https://tokens.studio/" target="_blank" rel="noopener noreferrer">Token Studio</a> at Figma which allows exporting a single json file. The Designer is able to interpret this file and transform it to an actual theme. In case your
            UI Kit version is older, the transformation process marks the missing tokens and recommends an auto migration via the migration assistant.
        </p>
        <p>
            This is an automated workflow and eliminates the manual design to code during the handoff process. If you have UI designers in your team, the recommended approach is using Figma for the actual design process and utilizing the designer for
            transformation, preview and download purposes.
        </p>
        <b class="mb-4 block">CI Pipeline</b>
        <p>
            Recommended approach is setting up the CI Pipeline flow as manually exporting the tokens file from Figma and uploading it to the online designer tool may quickly become tedious in active development cycles. As a solution, theme designer
            provides a remote API that can be integrated into your flow. Visit the <NuxtLink to="/designer/ci">CI Pipeline</NuxtLink> documentation for comprehensive information and examples for GitHub, GitLab and BitBucket.
        </p>
        <b class="mb-4 block">Manual Flow</b>
        <p>
            Instead of setting a CI pipeline, for quick prototyping purposes, you may also choose to use to manually export a tokens json file and then upload it to the designer. Note that, this flow would get tedious and repetitive in active
            development cycles when compared to an automated CI pipeline.
        </p>
        <p>
            Open the <NuxtLink to="/uikit">PrimeOne UI Kit</NuxtLink> in which you've modified tokens. In the Tokens Studio plugin, navigate to the <i>Tools</i> menu and select <i>Export to file/folder.</i> When the Export tokens modal appears, make
            sure the <i>Single file</i> tab is selected. Check the <i>All tokens sets</i> option, then click <i>Export</i>.
        </p>
        <p>In case you utilize custom tokens, create a new token set named <i>custom</i> and define your tokens under this set to make sure they are also exported to the theme code.</p>
        <div class="pl-8 pr-4 pt-4 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface mb-4" style="max-width: 48rem">
            <img alt="Designer Dashboard" src="https://primefaces.org/cdn/designer/tokens-studio.png" class="w-full" />
        </div>
        <p>When creating a new theme at Theme Designer, choose the <i>Import Figma Tokens</i> option and import the json file.</p>
        <div class="pl-8 pr-4 pt-4 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface mb-4" style="max-width: 48rem">
            <img alt="Designer Dashboard" src="https://primefaces.org/cdn/designer/guide-create.png" class="w-full" />
        </div>

        <!-- class="mb-4 block">Video Tutorial</b>
        <p>A tutorial is available demonstrating how the handoff process can be automated between the design team and the development team.</p>
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ktocmi2dLLM?si=lG7JwkUfLTQFlfeX" frameborder="0" allowfullscreen></iframe>
        </div>-->
    </DocSectionText>
</template>
