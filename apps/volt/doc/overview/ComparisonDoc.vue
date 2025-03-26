<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeTek has been building UI libraries since 2008, and our extensive experience has led us to a conclusion: there is no 'one-size-fits-all' UI library that caters to everyone's preferences. PrimeVue and Volt are created for different
            requirements and audiences as a result. Volt has a smaller scope compared to PrimeVue with a set of essential components. Tailwind can be used with PrimeVue components to cover
            <a href="https://primevue.org/tailwind/#samples" target="_blank" rel="noopener noreferrer">numerous use cases purposes</a>
            , however Volt takes the integration a step further to allow theming the components with Tailwind as well.
        </p>
        <p>In conclusion, if you prefer complete control over component styling using Tailwind CSS, and do not need the full feature set of PrimeVue, then Volt would perfectly meet your requirements.</p>
    </DocSectionText>

    <div class="doc-tablewrapper">
        <table class="doc-table">
            <thead>
                <tr>
                    <th></th>
                    <th>PrimeVue</th>
                    <th>Volt</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Location</td>
                    <td>node_modules</td>
                    <td>Application codebase</td>
                </tr>
                <tr>
                    <td>Styling</td>
                    <td>@primevue/themes and design tokens</td>
                    <td>Tailwind CSS utilities as pass-through classes</td>
                </tr>
                <tr>
                    <td>Download</td>
                    <td>NPM registry</td>
                    <td>GitHub via npx command</td>
                </tr>
                <tr>
                    <td>Components</td>
                    <td>90+</td>
                    <td>50+</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
