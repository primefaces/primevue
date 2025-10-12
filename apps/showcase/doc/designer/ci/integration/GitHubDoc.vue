<template>
    <DocSectionText v-bind="$attrs">
        <p>The <a href="https://github.com/marketplace/actions/prime-figma-to-theme-code-generator" target="_blank" rel="noopener noreferrer">prime-figma-to-theme-code-generator</a> is a GitHub Action that is available on the marketplace.</p>
        <h4>1. Add Secret Key to Repository Secrets</h4>
        <ul class="leading-relaxed list-disc list-inside">
            <li>Go to your GitHub repository.</li>
            <li>Navigate to <b>Settings > Secrets and variables > Actions</b>.</li>
            <li>Click <b>New repository secret</b>.</li>
            <li>Give a name such as: <i>THEME_DESIGNER_SECRET_KEY</i>.</li>
            <li>Value: Your API key from Prime Theme Designer.</li>
            <li>Click <b>Add secret</b>.</li>
        </ul>

        <h4>2. Add the action to your <i>.github/worklows</i></h4>
        <p>
            Visit the
            <a href="https://github.com/marketplace/actions/prime-figma-to-theme-code-generator#-inputs" target="_blank" rel="noopener noreferrer">inputs</a> documentation for more details about the parameters such as the <i>theme-name</i>.
        </p>
        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />

        <h4>3. Test Integration</h4>
        <p>
            Edit a token in Token Studio in Figma and click <b>Push to GitHub</b> button to update the tokens file in your Git repository, triggering the configured GitHub Action. The GitHub Action then sends the updated file content to the Theme
            Designer API, receives the generated theme code, and commits the resulting changes back to your repository. An
            <a href="https://github.com/primefaces/theme-designer-ci-test" target="_blank" rel="noopener noreferrer">example repository</a> is available at GitHub that you may use as a starter.
        </p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
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
                  project: "primevue"
                  font-size: "14px"
                  font-family: "Inter Var"
                  tokens-path: "tokens.json"
                  output-dir: "./acme-theme"
`
            }
        };
    }
};
</script>
