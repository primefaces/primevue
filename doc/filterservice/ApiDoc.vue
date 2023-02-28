<template>
    <DocSectionText v-bind="$attrs">
        <p>Configuration is managed by the Locale API imported from <i>primevue/config</i>.</p>

        <h3>FilterService API</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>filter</td>
                        <td>
                            value[]: An array of values to filter<br />
                            fields[]: An array of properties in the value object<br />
                            filterValue: Filter value<br />
                            filterMatchMode: Constraint<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the property values of the given value collection matches the filter.</td>
                    </tr>
                    <tr>
                        <td>filters</td>
                        <td>-</td>
                        <td>Property to access constraints collection.</td>
                    </tr>
                    <tr>
                        <td>register</td>
                        <td>
                            name: string <br />
                            fn: Filter callback
                        </td>
                        <td>Registers a new constraint in filters.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
