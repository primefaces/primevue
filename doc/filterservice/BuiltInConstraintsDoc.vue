<template>
    <DocSectionText v-bind="$attrs">
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
                        <td>startsWith</td>
                        <td>
                            value: Value to filter<br />
                            filter: Filter value<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the value starts with the filter value</td>
                    </tr>
                    <tr>
                        <td>contains</td>
                        <td>
                            value: Value to filter<br />
                            filter: Filter value<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the value contains the filter value</td>
                    </tr>
                    <tr>
                        <td>endsWith</td>
                        <td>
                            value: Value to filter<br />
                            filter: Filter value<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the value ends with the filter value</td>
                    </tr>
                    <tr>
                        <td>equals</td>
                        <td>
                            value: Value to filter<br />
                            filter: Filter value<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the value equals the filter value</td>
                    </tr>
                    <tr>
                        <td>notEquals</td>
                        <td>
                            value: Value to filter<br />
                            filter: Filter value<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the value does not equal the filter value</td>
                    </tr>
                    <tr>
                        <td>in</td>
                        <td>
                            value: Value to filter<br />
                            filter[]: An array of filter values<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the value contains the filter value</td>
                    </tr>
                    <tr>
                        <td>lt</td>
                        <td>
                            value: Value to filter<br />
                            filter: Filter value<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the value is less than the filter value</td>
                    </tr>
                    <tr>
                        <td>lte</td>
                        <td>
                            value: Value to filter<br />
                            filter: Filter value<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the value is less than or equals to the filter value</td>
                    </tr>
                    <tr>
                        <td>gt</td>
                        <td>
                            value: Value to filter<br />
                            filter: Filter value<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the value is greater than the filter value</td>
                    </tr>
                    <tr>
                        <td>gte</td>
                        <td>
                            value: Value to filter<br />
                            filter: Filter value<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the value is greater than or equals to the filter value</td>
                    </tr>
                    <tr>
                        <td>is</td>
                        <td>
                            value: Value to filter<br />
                            filter: Filter value<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the value equals the filter value, alias to equals</td>
                    </tr>
                    <tr>
                        <td>isNot</td>
                        <td>
                            value: Value to filter<br />
                            filter: Filter value<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the value does not equal the filter value, alias to notEquals.</td>
                    </tr>
                    <tr>
                        <td>before</td>
                        <td>
                            value: Value to filter<br />
                            filter: Filter value<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the date value is before the filter date.</td>
                    </tr>
                    <tr>
                        <td>after</td>
                        <td>
                            value: Value to filter<br />
                            filter: Filter value<br />
                            filterLocale: Locale to use in filtering
                        </td>
                        <td>Whether the date value is after the filter date.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
