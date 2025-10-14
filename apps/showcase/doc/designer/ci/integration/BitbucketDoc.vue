<template>
    <DocSectionText v-bind="$attrs">
        <p>The BitBucket integration is implemented by executing a custom pipe whenever the tokens file changes.</p>
        <h4>1. Add Secret Key to Repository Secrets</h4>
        <ul class="leading-relaxed list-disc list-inside">
            <li>Go to your BitBucket repository.</li>
            <li>Navigate to <b>Repository Settings > Repository Variables</b>.</li>
            <li>Give a name such as: <i>THEME_DESIGNER_SECRET_KEY</i>.</li>
            <li>Value: Your API key from Prime Theme Designer.</li>
            <li>Click <b>Add</b>.</li>
        </ul>

        <h4>2. Add the pipe configuration to your <i>bitbucket-pipelines.yml</i></h4>
        <p>
            Define the configuration parameters for the Designer API and add the pipe as a runnable script to the action. Notice that, the referenced <a href="https://bitbucket.org/cagataycivici/figma-to-theme-code-generator/src/main/">pipe</a> is
            executed as a script rather than a pipe from the BitBucket pipe registry as PrimeTek currently has no intentions to maintain an official pipe for BitBucket. You may further improve this example by building a dockerized pipe that is
            accessible in the BitBucket Registry to refer it with the <i>pipe</i> config in yml.
        </p>
        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />

        <h4>3. Test Integration</h4>
        <p>
            Edit a token in Token Studio in Figma and click <b>Push to BitBucket</b> button to update the tokens file in your Git repository, triggering the configured BitBucket Pipe. The pipe then sends the updated file content to the Theme Designer
            API, receives the generated theme code, and commits the resulting changes back to your repository. An <a href="https://bitbucket.org/cagataycivici/theme-designer-ci-test" target="_blank" rel="noopener noreferrer">example repository</a> is
            available at BitBucket that you may use as a starter.
        </p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
image: atlassian/default-image:4

pipelines:
    default:
        - step:
              name: Generate Theme with Theme Designer
              condition:
                  changesets:
                      includePaths:
                          - "tokens.json"
              script:
                  - apt-get update && apt-get install -y jq curl unzip
                  - git clone https://bitbucket.org/cagataycivici/figma-to-theme-code-generator.git temp-pipe
                  - cp temp-pipe/pipe.sh ./
                  - chmod +x pipe.sh
                  - export DESIGNER_SECRET="\${THEME_DESIGNER_SECRET_KEY}"
                  - export THEME_NAME="acme-theme"
                  - export PROJECT="primevue"
                  - export FONT_SIZE="14px"
                  - export FONT_FAMILY="Inter Var"
                  - export TOKENS_PATH="./tokens.json"
                  - export OUTPUT_DIR="./acme-theme"
                  - ./pipe.sh
`
            }
        };
    }
};
</script>
