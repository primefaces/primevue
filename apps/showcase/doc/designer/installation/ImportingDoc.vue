<template>
    <DocSectionText v-bind="$attrs">
        <ul class="leading-normal px-10 m-0 list-disc">
            <li class="p-2"><b>Download the latest .fig UI Kit</b> - From your PrimeStore panel, download the latest PrimeOne package. The archive contains the .fig UI Kit.</li>
            <li class="p-2"><b>Open Figma in Google Chrome</b> - Launch Figma in Chrome (or another supported browser). Avoid using the Desktop app for this import. It's more reliable in-browser.</li>
            <li class="p-2">
                <b>Import into your Team project</b> - Navigate to the Teams section in the left sidebar. Select your Team project where you want PrimeOne. Drag and drop the .fig file into the project folder in the browser UI. Figma will upload it,
                showing a new file card once complete.
            </li>
        </ul>
        <div class="mt-8 p-8 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface" style="max-width: 48rem">
            <img src="https://primefaces.org/cdn/uikit/installation-1.png" alt="installation-1" class="w-full" />
        </div>
    </DocSectionText>
</template>
