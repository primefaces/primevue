<template>
    <DocSectionText v-bind="$attrs">
        <ul class="leading-normal px-10 list-disc">
            <li class="py-2">
                <div class="font-bold">Change on Tokens Studio</div>
                <p>
                    The first step when planning a design change is to identify which tokens need to be modified within Tokens Studio. Use the <b>Inspect</b> tab in Tokens Studio to locate the relevant tokens, then apply your changes directly via the
                    plugin. After making the updates, don't forget to push the changes to your Sync Provider.
                </p>
            </li>
            <li class="py-2">
                <div class="font-bold">Change on Figma Variables</div>
                <p>After making changes in Tokens Studio, you also need to apply these updates in Figma Variables. There are two options:</p>
                <ul class="leading-normal px-10 list-[circle]">
                    <li class="py-2">Manually update the variables one by one, or</li>
                    <li class="py-2">Use the <b>Export to Styles & Variables</b> feature in Tokens Studio.</li>
                </ul>
                <p class="pt-2">In our own workflow, we prefer to update the variables manually, as the export feature can be unstable with large files like PrimeOne. We recommend this manual approach for reliability.</p>
                <p>
                    However, if you choose to use the export feature, make sure the settings match the screenshot provided. Specifically, ensure the “<b>Themes (Pro)</b>” tab is selected during the second step. Don't worry, even though it says “Pro,”
                    you don't need a Pro license to access this feature in Tokens Studio.
                </p>
                <p>
                    If you notice missing or incomplete exports on your first attempt, try running the export again from the beginning. This is a known issue with Tokens Studio and often resolves on the second attempt. For more detailed guidance, see
                    the <a href="https://docs.tokens.studio/figma/export" target="_blank" rel="noopener noreferrer">official documentation</a>.
                </p>
                <div class="mt-8 p-8 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface" style="max-width: 48rem">
                    <img src="https://primefaces.org/cdn/uikit/designchanges-1.png" alt="designchanges-1" class="w-full" />
                </div>
            </li>
            <li class="py-4">
                <div class="font-bold">Get Updates on Consumer Files</div>
                <p>
                    We do not recommend making design changes directly in consumer files, as this goes against best practices. Instead, apply all design updates in the main UI Kit file, then publish the library and accept the updates in any consumer
                    files that rely on it.
                </p>
            </li>
        </ul>
    </DocSectionText>
</template>
