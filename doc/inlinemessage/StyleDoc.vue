<template>
    <DocSectionText id="style" label="Style" v-bind="$attrs">
        <p>Following is the list of structural style classes, for theming classes visit <NuxtLink to="/theming">theming</NuxtLink> page.</p>
    </DocSectionText>
    <div class="doc-tablewrapper">
        <table class="doc-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Element</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>p-inline-message</td>
                    <td>Container element.</td>
                </tr>
                <tr>
                    <td>p-inline-message-info</td>
                    <td>Container element when displaying info messages.</td>
                </tr>
                <tr>
                    <td>p-inline-message-warn</td>
                    <td>Container element when displaying warning messages.</td>
                </tr>
                <tr>
                    <td>p-inline-message-error</td>
                    <td>Container element when displaying error messages.</td>
                </tr>
                <tr>
                    <td>p-inline-message-success</td>
                    <td>Container element when displaying success messages.</td>
                </tr>
                <tr>
                    <td>p-inline-message-close</td>
                    <td>Close icon.</td>
                </tr>
                <tr>
                    <td>p-inline-message-icon</td>
                    <td>Severity icon.</td>
                </tr>
                <tr>
                    <td>p-inline-message-text</td>
                    <td>Content of a message.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
