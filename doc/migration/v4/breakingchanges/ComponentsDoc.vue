<template>
    <DocSectionText v-bind="$attrs">
        <p>The team has put in a great effort to migrate the entire UI suite with minor breaking changes. Two components have been removed by design.</p>
    </DocSectionText>
    <ul class="flex flex-column gap-2">
        <li><i>DataViewLayoutOptions</i> is removed, use SelectButton instead as in the demo.</li>
        <li><i>TriStateCheckbox</i> is removed, use Checkbox with the new <i>indeterminate</i> state as a replacement.</li>
        <li>
            Enhancements to internal structure of some components, see the tickets <a href="https://tailwind.primevue.org" target="_blank" rel="noopener noreferrer" class="doc-link">#5426</a> and
            <a href="https://tailwind.primevue.org" target="_blank" rel="noopener noreferrer" class="doc-link">#5437</a> for more information.
        </li>
    </ul>
</template>
