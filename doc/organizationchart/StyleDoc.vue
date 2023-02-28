<template>
    <DocSectionText id="style" label="Style" v-bind="$attrs">
        <p>Following is the list of structural style classes, for theming classes visit <NuxtLink to="/theming"> theming</NuxtLink> page.</p>
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
                    <td>p-organizationchart</td>
                    <td>Container element.</td>
                </tr>
                <tr>
                    <td>p-organizationchart-table</td>
                    <td>Table container of a node.</td>
                </tr>
                <tr>
                    <td>p-organizationchart-lines</td>
                    <td>Connector lines container.</td>
                </tr>
                <tr>
                    <td>p-organizationchart-nodes</td>
                    <td>Contained of node children.</td>
                </tr>
                <tr>
                    <td>p-organizationchart-line-right</td>
                    <td>Right side line of a node connector.</td>
                </tr>
                <tr>
                    <td>p-organizationchart-line-left</td>
                    <td>Left side line of a node connector.</td>
                </tr>
                <tr>
                    <td>p-organizationchart-line-top</td>
                    <td>Top side line of a node connector.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
