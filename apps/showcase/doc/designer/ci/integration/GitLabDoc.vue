<template>
    <DocSectionText v-bind="$attrs">
        <p>The GitLab integration is implemented by executing a script whenever the tokens file changes.</p>
        <h4>1. Add Secret Key to Repository Secrets</h4>
        <ul class="leading-relaxed list-disc list-inside">
            <li>Go to your GitLab repository.</li>
            <li>Navigate to <b>Settings > CI/CD > Variables</b>.</li>
            <li>Click <b>Add variable</b>.</li>
            <li>Give a name such as: <i>THEME_DESIGNER_SECRET_KEY</i>.</li>
            <li>Value: Your API key from Prime Theme Designer.</li>
            <li>Click <b>Add variable</b>.</li>
        </ul>

        <h4>2. Add the script to your project</h4>
        <p>
            A sample script named <a href="https://gitlab.com/cagataycivici/theme-designer-ci-test/-/blob/main/figma-to-theme-converter.sh?ref_type=heads" target="_blank" rel="noopener noreferrer">figma-to-theme-converter.sh</a> is available as a
            starter, copy and paste this script to your project. You may alter the script further per your requirements.
        </p>

        <h4>3. Add the script to your <i>.gitlab-ci.yml</i></h4>
        <p>Define the configuration parameters for the Designer API and add the script to the action.</p>
        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />

        <h4>4. Test Integration</h4>
        <p>
            Edit a token in Token Studio in Figma and click <b>Push to GitLab</b> button to update the tokens file in your Git repository, triggering the configured GitLab Action. The GitLab Action then sends the updated file content to the Theme
            Designer API, receives the generated theme code, and commits the resulting changes back to your repository. An
            <a href="https://gitlab.com/cagataycivici/theme-designer-ci-test" target="_blank" rel="noopener noreferrer">example repository</a> is available at GitLab that you may use as a starter.
        </p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
variables:
    # Set these as GitLab CI/CD variables for security
    DESIGNER_SECRET: \${THEME_DESIGNER_SECRET_KEY}
    THEME_NAME: "my-custom-theme"
    PROJECT: "primevue" # or your target project
    TOKENS_PATH: "./tokens.json"
    OUTPUT_DIR: "./my-custom-theme"
    # Optional configuration
    FONT_SIZE: "14px"
    FONT_FAMILY: "Inter"

stages:
    - generate-theme

generate_theme_tokens:
    stage: generate-theme
    image: ubuntu:22.04

    before_script:
        # Install required dependencies
        - apt-get update -qq
        - apt-get install -y -qq git curl python3 unzip
        - git config --global --add safe.directory $CI_PROJECT_DIR
        # Ensure we're on the correct branch and have latest changes
        - git fetch origin
        - git checkout $CI_COMMIT_REF_NAME
        - git pull origin $CI_COMMIT_REF_NAME || true

    script:
        # Run the theme generator script
        - ./figma-to-theme-converter.sh

    artifacts:
        paths:
            - $OUTPUT_DIR/
        expire_in: 1 week

    rules:
        # Run on main branch when tokens.json is modified
        - if: $CI_COMMIT_BRANCH == "main"
          changes:
              - tokens.json
        # Or run manually
        - when: manual

`
            }
        };
    }
};
</script>
