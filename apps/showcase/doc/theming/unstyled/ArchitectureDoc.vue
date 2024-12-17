<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The term <i>unstyled</i> is used to define an alternative styling approach instead of the default theming with design tokens. PrimeVue offers two options for styling the components with your own css; the <i>hybrid</i> mode and the
            <i>pure</i> mode.
        </p>
        <p>
            In both options, the css variables of the design tokens and the css rule sets that utilize them are not included. The main difference is, the <i>hybrid</i> mode keeps the selectors in the DOM such as <i>p-select</i> whereas the
            <i>pure</i> mode do not include them. Unstyled components still need to be styled on your end, in the next sections, we'll cover the styling solutions for both modes.
        </p>
    </DocSectionText>
    <table class="doc-table table-fixed">
        <thead>
            <tr>
                <th></th>
                <th>Hybrid</th>
                <th>Pure</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>p-* selectors in DOM</td>
                <td><i class="pi pi-check ms-4" /></td>
                <td><i class="pi pi-times ms-4" /></td>
            </tr>
            <tr>
                <td>CSS rule sets</td>
                <td><i class="pi pi-times ms-4" /></td>
                <td><i class="pi pi-times ms-4" /></td>
            </tr>
            <tr>
                <td>CSS variables</td>
                <td><i class="pi pi-times ms-4" /></td>
                <td><i class="pi pi-times ms-4" /></td>
            </tr>
        </tbody>
    </table>
</template>
