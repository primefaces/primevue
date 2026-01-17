<template>
    <DocSectionText v-bind="$attrs">
        <p>To make PrimeOne available as a shared library:</p>
        <ul class="leading-normal px-10 m-0 list-disc">
            <li class="py-2">Open the imported PrimeOne .fig file.</li>
            <li class="py-2">
                Go to <b>Assets <i class="pi pi-arrow-right"></i> Manage Libraries</b>
            </li>
            <li class="py-2">Click <b>"Publish..."</b> to share PrimeOne with your team, then confirm by clicking the "Publish" button in the modal.</li>
        </ul>
        <div class="mt-8 p-8 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface" style="max-width: 48rem">
            <img src="https://primefaces.org/cdn/uikit/installation-2.png" alt="installation-2" class="w-full" />
        </div>
    </DocSectionText>
</template>
