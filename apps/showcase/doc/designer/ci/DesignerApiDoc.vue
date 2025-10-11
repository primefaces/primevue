<template>
    <DocSectionText v-bind="$attrs">
        <p>Theme Designer public endpoint is hosted at PrimeUI Store.</p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <h3>Parameters</h3>
        <p>The request type must be <i>POST</i>.</p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <i>designer-secret</i>
                        </td>
                        <td>string</td>
                        <td>yes</td>
                        <td>Secret key to access the API, can be generated at PrimeUI Store.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>tokens</i>
                        </td>
                        <td>json</td>
                        <td>yes</td>
                        <td>Content of the json file exported from Figma.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>project</i>
                        </td>
                        <td>string</td>
                        <td>yes</td>
                        <td>Name of the project, possible values are "primeng" or "primevue".</td>
                    </tr>
                    <tr>
                        <td>
                            <i>config.font_size</i>
                        </td>
                        <td>string</td>
                        <td>no</td>
                        <td>Font size for theme preview in visual editor at website, defaults to "14px".</td>
                    </tr>
                    <tr>
                        <td>
                            <i>config.font-family</i>
                        </td>
                        <td>string</td>
                        <td>no</td>
                        <td>Font family for theme preview in visual editor at website, defaults to "Inter Var"</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>Response</h3>
        <p>A successful response returns a zip file containing the source code of the generated theme preset. The content-type header of this type of response is <i>application/zip</i>.</p>

        <h3>Error Handling</h3>
        <p>When theme generation fails, a json response is returned with <i>application/zip</i> content-type header. The response contains an error object with <i>code</i> and <i>message</i>.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
https://primeui.store/api/designer/integration/theme/create
`
            },
            code2: {
                basic: `
{
    error: {
        code: 'download_failed',
        message: 'Failed to create archieve.'
    }
}
`
            }
        };
    }
};
</script>
