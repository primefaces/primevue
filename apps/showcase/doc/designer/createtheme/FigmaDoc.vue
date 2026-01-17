<template>
    <DocSectionText v-bind="$attrs">
        <p>
            For teams with UI designers, we recommend using PrimeOne Figma UI Kit for the design phase 
            and utilizing the Theme Designer service to automate code generation during 
            handoff. This workflow eliminates manual design-to-code translation, reducing 
            implementation time and ensuring consistency between design and production.
        </p>
        <h4>UI Kit v4</h4>
        <b class="mb-4 block">Automated Flow</b>
        <p>
            Recommended approach is using the PrimeUI Theme Generator Figma plugin which provides built-in synchronization capabilities that automate the theme generation process. Visit <a href="https://www.figma.com/community/plugin/1592914021886732603/primeui-theme-generator" target="_blank" rel="noopener noreferrer">the plugin website</a> to learn more about this workflow.
        </p>
        <b class="mb-4 block">Manual Flow</b>
        <p>
            Instead of generating themes directly from Figma using the plugin, for quick prototyping purposes, you may also choose to use to manually export a tokens json file and then upload it to the Theme Designer. Note that, this flow would get tedious and repetitive in active
            development cycles when compared to an automated flow.
        </p>
        <p>
            Open the <NuxtLink to="/uikit">PrimeOne UI Kit</NuxtLink> in which you've modified tokens. In the PrimeUI Theme Generator plugin, click the <i>Export</i> option to export all variable collections.
        </p>
        <div class="pl-8 pr-4 pt-4 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface mb-4" style="max-width: 48rem">
            <img alt="Designer Dashboard" src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/common.images/designer/figma-plugin.png" class="w-full" />
        </div>
        <p>When creating a new theme at Theme Designer, choose the <i>Import Figma Variables</i> option and import the json file.</p>
        <div class="pl-8 pr-4 pt-4 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface mb-4" style="max-width: 48rem">
            <img alt="Designer Dashboard" src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/common.images/designer/guide-create.png" class="w-full" />
        </div>

        <h4>UI Kit v3 (Deprecated)</h4>
        <b class="mb-4 block">CI Pipeline</b>
        <p>Recommended approach is setting up the CI Pipeline flow as manually exporting the tokens file from Figma and uploading it to the online designer tool may quickly become tedious in active development cycles. As a solution, theme designer provides a remote API that can be integrated into your flow. Visit the CI Pipeline documentation for comprehensive information and examples for GitHub, GitLab and BitBucket.</p>
    
        <b class="mb-4 block">Manual Flow</b>
        <p>Instead of setting a CI pipeline, for quick prototyping purposes, you may also choose to use to manually export a tokens json file and then upload it to the designer. Note that, this flow would get tedious and repetitive in active development cycles when compared to an automated CI pipeline.</p>
        <p> Open the PrimeOne UI Kit in which you've modified tokens. In the Tokens Studio plugin, navigate to the <i>Tools</i> menu and select <i>Export to file/folder.</i> When the Export tokens modal appears, make sure the <i>Single file</i> tab is selected. Check the <i>All tokens sets</i> option, then click <i>Export</i>. </p>
        <p>In case you utilize custom tokens, create a new token set named <i>custom</i> and define your tokens under this set to make sure they are also exported to the theme code.</p>
        <img alt="Tokens Studio export" src="https://primefaces.org/cdn/designer/tokens-studio.png" class="mb-4">
        <p>When creating a new theme at Theme Designer, choose the <i>Import Figma Variables</i> option and import the json file.</p>
    </DocSectionText>
</template>
