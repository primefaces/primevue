<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>prime-figma-to-theme-code-generator</i> is a GitHub Action that is available on the marketplace.</p>
        <h4>1. Get a Secret Key</h4>
        <ul class="leading-relaxed list-disc list-inside">
            <li>Visit the <a href="https://primeui.store/designer" target="_blank" rel="noopener noreferrer">PrimeUI Store</a>.</li>
            <li>Purchase an Extended License.</li>
            <li>Navigate to your <a href="https://primeui.store/user/designer" target="_blank" rel="noopener noreferrer"> account settings</a>.</li>
            <li>Generate a secret key for CI/CD integration.</li>
        </ul>
        <h4>2. Add Secret Key to Repository Secrets</h4>
        <ul class="leading-relaxed list-disc list-inside">
            <li>Go to your GitHub repository.</li>
            <li>Navigate to <b>Settings > Secrets and variables > Actions</b>.</li>
            <li>Click <b>New repository secret</b>.</li>
            <li>Give a name such as: <i>THEME_DESIGNER_SECRET_KEY</i>.</li>
            <li>Value: Your API key from Prime Theme Designer.</li>
            <li>Click <b>Add secret</b></li>
        </ul>

        <h4>3. Add the action to your <i>.github/worklows</i></h4>
        <p>
            Visit the
            <a href="https://github.com/marketplace/actions/prime-figma-to-theme-code-generator#-inputs" target="_blank" rel="noopener noreferrer">inputs</a> documentation for more details about the parameters such as the <i>theme-name</i>.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />

        <h4>4. Test Integration</h4>
        <p>
            Edit a token in Token Studio in Figma and click <b>Push to GitHub</b> button. This will initiate the flow by updating the tokens file in the git repository which triggers the GitHub action to send the file content to the Theme Designer
            API, finally return the result and commit to theme code to the repository. An <a href="https://github.com/primefaces/theme-designer-ci-test" target="_blank" rel="noopener noreferrer">example repository</a> is available at GitHub that you
            may use as a starter.
        </p>
        <h4>5. Preview</h4>
        <p>After your CI pipeline completes successfully, your theme also becomes available in the Prime UI Theme Designer. Refer to the <i>Preview</i> section at the end of this documentation for detailed instructions.</p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
name: Automated Figma To Theme Code

on:
    push:
        paths:
            - "tokens.json"

permissions:
    contents: write

jobs:
    generate-tokens:
        name: Generate Theme Code
        runs-on: ubuntu-latest
        steps:
            - name: Checkout repository
              uses: actions/checkout@v3

            - name: Generate Prime Theme
              uses: primefaces/theme-designer-ci@1.0.0-beta.4
              with:
                  designer-secret: \${{ secrets.THEME_DESIGNER_SECRET_KEY }}
                  theme-name: "acme"
                  font-size: "14px"
                  font-family: "Inter Var"
                  project: "primevue"
                  tokens-path: "tokens.json"
                  output-dir: "./acme-theme"
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
