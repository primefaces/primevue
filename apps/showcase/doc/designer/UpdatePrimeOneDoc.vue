<template>
    <DocSectionText v-bind="$attrs">
        <p>When a new version of PrimeOne is released, follow the steps below to update your files:</p>
        <ul class="leading-normal px-10 mb-2 list-disc">
            <li class="py-2">Download the latest version of PrimeOne from PrimeStore.</li>
            <li class="py-2">Unzip the file and upload it to your Figma workspace.</li>
            <li class="py-2">Publish the newly uploaded file as a library.</li>
            <li class="py-2">In all consumer files, use <b>Swap Library</b> to point to the new version.</li>
            <li class="py-2">Once the transition is complete, you can safely unpublish the old PrimeOne library</li>
        </ul>
        <p>Before each update, it's a good idea to review the <b>Changelog</b> on the Get Started page of the PrimeOne Figma file.</p>
        <p>Keep in mind that while Swap Library will update most components, any customized components may require manual review and adjustment.</p>
    </DocSectionText>
</template>
