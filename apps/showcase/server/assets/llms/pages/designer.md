# Terms and Conditions

Theme Designer is the ultimate tool to customize and design your own themes featuring a visual editor, figma to theme code, cloud storage, and migration assistant.

## Dashboard

Dashboard is the entry point of the designer. The license key can be configured at this view before getting started with the full set of features. In the My Themes section, you're able to create a theme, and manage existing themes. A theme can be renamed, duplicated and downloaded using the button.

## License

A license key is required to be able to use all the services provided by the designer. Without a license, the visual editor is still available for trial purposes with various options such as downloads, and cloud storage disabled. The license key can be purchased at PrimeStore , it is valid for 1 year and needs to be renewed manually after a year.

## Limitations

Current known technical limitations are listed at this section. The border width token in Figma does not support multiple values, related issue .

## Migration Assistant

Prime UI libraries continue to evolve with each version. New tokens are likely to be added with each major release, in order to keep your themes up to date the migration assistant is available featuring automated migration. The Check for Updates option initially scans a theme for any missing tokens. This tool does not override the values of existing tokens, and only adds missing tokens if necessary. Still, it is recommended to duplicate your theme as a backup and run a preview before the migration. Depending on the result, you may choose to proceed with the migration process. In case there are missing tokens, your theme would receive them with placeholder values so it is recommended to take a note of them before migration and then visit the components to replace the placeholder values with actual values of your choice. These types of newly added tokens would be highlighed in Editor.

## Overview

The theming api is open and source freely available with an extensive documentation. Theme Designer is a tool build on top of this theming api with important features to make theming easier. Designer consists of 4 key features; The visual editor provides a UI to edit the complete set of tokens. The figma to theme code generator is extremely useful to automate the design to code process and integrates seamlessly with the Figma UI Kit. The themes are saved in the cloud storage to be accessible from anywhere and any device and finally the migration assistant automatically updates your themes to the latest library version.

## Designer Api

Theme Designer public endpoint is hosted at PrimeUI Store. Get a Secret Key Visit the PrimeUI Store . Purchase an Extended License of Theme Designer. Navigate to your account settings . Generate a secret key for CI/CD integration. Authentication Define a Authentication: Bearer request headerto configure your secret key. Parameters The request type must be POST . Name Type Required Description name string yes Name of the theme to be generated. tokens json yes Content of the json file exported from Figma. project string yes Name of the project, possible values are "primeng" or "primevue". config.font_size string no Font size for theme preview in visual editor at website, defaults to "14px". config.font_family string no Font family for theme preview in visual editor at website, defaults to "Inter Var" Example Response A successful response returns a zip file containing the source code of the generated theme preset. The content-type header of this type of response is application/zip . Error Handling When theme generation fails, a json response is returned with application/json content-type header. The response contains an error object with code and message .

## Figma

Token Studio in Figma is the starting point of a continuous integration pipeline. You can connect a remote repository to sync your tokens data so that changes are saved remotely instead of locally. Token Studio offers various remote storage options such as GitHub , GitLab and Bitbucket . Refer to these documentations based on your environment before proceeding to the integrations in the next section.

## Live Preview

After your CI pipeline completes successfully, your theme also becomes available in the Prime UI Theme Designer. Navigate to the Prime UI library website. Click the ⚙️ icon at topbar to open up Designer Editor. Sign in with your license key and pass key credentials. Then select your theme from the available options to apply it across all demos and website content. Note that CI-generated themes are provided in read-only mode for preview purposes only and cannot be edited within the Theme Designer. The Migration Assistant is available to identify any missing tokens in your preset; however, if tokens are missing, they must be added manually in Figma as needed.

## Overview

The Figma UI Kit and the theming api is fully synchorized, meaning the design tokens in Figma map to the corresponding properties in a theme preset. The Theme Designer offers a feature to create a theme by uploading a tokens.json file that is exported from the Token Studio plugin in Figma. Once the theme is converted, it can either be edited further in the visual editor or downloaded as a zip file to access the full code. Visit the Figma section at the designer documentation for more information. Manually exporting the tokens file from Figma and uploading it to the online designer tool may quickly become tedious in active development cycles. As a solution, theme designer provides a remote API that can be integrated into your CI pipeline.

## Video Tutorial

Before diving into the implementation details, if you would like to understand the final outcome and see how the solution operates, please refer to the video tutorial for a comprehensive walkthrough and demonstration.

## Bitbucket

The BitBucket integration is implemented by executing a custom pipe whenever the tokens file changes. 1. Add Secret Key to Repository Secrets Go to your BitBucket repository. Navigate to Repository Settings > Repository Variables . Give a name such as: THEME_DESIGNER_SECRET_KEY . Value: Your API key from Prime Theme Designer. Click Add . 2. Add the pipe configuration to your bitbucket-pipelines.yml Define the configuration parameters for the Designer API and add the pipe as a runnable script to the action. Notice that, the referenced pipe is executed as a script rather than a pipe from the BitBucket pipe registry as PrimeTek currently has no intentions to maintain an official pipe for BitBucket. You may further improve this example by building a dockerized pipe that is accessible in the BitBucket Registry to refer it with the pipe config in yml. 3. Test Integration Edit a token in Token Studio in Figma and click Push to BitBucket button to update the tokens file in your Git repository, triggering the configured BitBucket Pipe. The pipe then sends the updated file content to the Theme Designer API, receives the generated theme code, and commits the resulting changes back to your repository. An example repository is available at BitBucket that you may use as a starter.

```vue
image: atlassian/default-image:4 pipelines: default: - step: name: Generate Theme with Theme Designer condition: changesets: includePaths: - "tokens.json" script: - apt-get update && apt-get install -y jq curl unzip - git clone
https://bitbucket.org/cagataycivici/figma-to-theme-code-generator.git temp-pipe - cp temp-pipe/pipe.sh ./ - chmod +x pipe.sh - export DESIGNER_SECRET="\${THEME_DESIGNER_SECRET_KEY}" - export THEME_NAME="acme-theme" - export PROJECT="primevue" -
export FONT_SIZE="14px" - export FONT_FAMILY="Inter Var" - export TOKENS_PATH="./tokens.json" - export OUTPUT_DIR="./acme-theme" - ./pipe.sh
```

## Git Hub

The prime-figma-to-theme-code-generator is a GitHub Action that is available on the marketplace. 1. Add Secret Key to Repository Secrets Go to your GitHub repository. Navigate to Settings > Secrets and variables > Actions . Click New repository secret . Give a name such as: THEME_DESIGNER_SECRET_KEY . Value: Your API key from Prime Theme Designer. Click Add secret . 2. Add the action to your .github/worklows Visit the inputs documentation for more details about the parameters such as the theme-name . 3. Test Integration Edit a token in Token Studio in Figma and click Push to GitHub button to update the tokens file in your Git repository, triggering the configured GitHub Action. The GitHub Action then sends the updated file content to the Theme Designer API, receives the generated theme code, and commits the resulting changes back to your repository. An example repository is available at GitHub that you may use as a starter.

```vue
name: Automated Figma To Theme Code on: push: paths: - "tokens.json" permissions: contents: write jobs: generate-tokens: name: Generate Theme Code runs-on: ubuntu-latest steps: - name: Checkout repository uses: actions/checkout@v3 - name: Generate
Prime Theme uses: primefaces/theme-designer-ci@1.0.0-beta.4 with: designer-secret: \${{ secrets.THEME_DESIGNER_SECRET_KEY }} theme-name: "acme" project: "primevue" font-size: "14px" font-family: "Inter Var" tokens-path: "tokens.json" output-dir:
"./acme-theme"
```

## Git Lab

The GitLab integration is implemented by executing a script whenever the tokens file changes. 1. Add Secret Key to Repository Secrets Go to your GitLab repository. Navigate to Settings > CI/CD > Variables . Click Add variable . Give a name such as: THEME_DESIGNER_SECRET_KEY . Value: Your API key from Prime Theme Designer. Click Add variable . 2. Add the script to your project A sample script named figma-to-theme-converter.sh is available as a starter, copy and paste this script to your project. You may alter the script further per your requirements. 3. Add the script to your .gitlab-ci.yml Define the configuration parameters for the Designer API and add the script to the action. 4. Test Integration Edit a token in Token Studio in Figma and click Push to GitLab button to update the tokens file in your Git repository, triggering the configured GitLab Action. The GitLab Action then sends the updated file content to the Theme Designer API, receives the generated theme code, and commits the resulting changes back to your repository. An example repository is available at GitLab that you may use as a starter.

```vue
variables: # Set these as GitLab CI/CD variables for security DESIGNER_SECRET: \${THEME_DESIGNER_SECRET_KEY} THEME_NAME: "my-custom-theme" PROJECT: "primevue" # or your target project TOKENS_PATH: "./tokens.json" OUTPUT_DIR: "./my-custom-theme" #
Optional configuration FONT_SIZE: "14px" FONT_FAMILY: "Inter" stages: - generate-theme generate_theme_tokens: stage: generate-theme image: ubuntu:22.04 before_script: # Install required dependencies - apt-get update -qq - apt-get install -y -qq git
curl python3 unzip - git config --global --add safe.directory $CI_PROJECT_DIR # Ensure we're on the correct branch and have latest changes - git fetch origin - git checkout $CI_COMMIT_REF_NAME - git pull origin $CI_COMMIT_REF_NAME || true script: #
Run the theme generator script - ./figma-to-theme-converter.sh artifacts: paths: - $OUTPUT_DIR/ expire_in: 1 week rules: # Run on main branch when tokens.json is modified - if: $CI_COMMIT_BRANCH == "main" changes: - tokens.json # Or run manually -
when: manual
```

## Base

In the new theme section, all of the built-in themes are available to use as the base. These are; Aura , Material , Lara and Nora . Each have their own characteristics, and it is recommended to choose the one that best suits your requirements.

## Figma

The Figma UI Kit and the theming api is fully synchorized, meaning the design tokens in Figma map to the CSS variables in the code. The mapping is created via the Token Studio at Figma which allows exporting a single json file. The Designer is able to interpret this file and transform it to an actual theme. In case your UI Kit version is older, the transformation process marks the missing tokens and recommends an auto migration via the migration assistant. This is an automated workflow and eliminates the manual design to code during the handoff process. If you have UI designers in your team, the recommended approach is using Figma for the actual design process and utilizing the designer for transformation, preview and download purposes. CI Pipeline Recommended approach is setting up the CI Pipeline flow as manually exporting the tokens file from Figma and uploading it to the online designer tool may quickly become tedious in active development cycles. As a solution, theme designer provides a remote API that can be integrated into your flow. Visit the CI Pipeline documentation for comprehensive information and examples for GitHub, GitLab and BitBucket. Manual Flow Instead of setting a CI pipeline, for quick prototyping purposes, you may also choose to use to manually export a tokens json file and then upload it to the designer. Note that, this flow would get tedious and repetitive in active development cycles when compared to an automated CI pipeline. Open the PrimeOne UI Kit in which you've modified tokens. In the Tokens Studio plugin, navigate to the Tools menu and select Export to file/folder. When the Export tokens modal appears, make sure the Single file tab is selected. Check the All tokens sets option, then click Export . In case you utilize custom tokens, create a new token set named custom and define your tokens under this set to make sure they are also exported to the theme code. When creating a new theme at Theme Designer, choose the Import Figma Tokens option and import the json file. Video Tutorial A tutorial is available demonstrating how the handoff process can be automated between the design team and the development team. -->

## Custom Tokens

Custom tokens allow bringing in your own design tokens to the theme to go beyond the built-in ones. A design token requires a name and a value where the value can be a static value like a color or another token. The name of the token should be a dot seperated lowercase value e.g. accent.color . For example, a custom token name can be defined as accent.color and the value can either be a value like #eab308 or another token such as {yellow.50} . Custom tokens can also refer to each other, e.g. selection.background custom token can define {accent.color} as a value. If you have created a theme from Figma, use the name custom as the name of your token set group. This keyword is special since the import tool will populate the custom tokens using this set in tokens json file.

## Intelligent Completion

The editor is packed with features for improved user experience. The input fields in the editor are capable of displaying a color preview when the value is a color, and beginning the value with a curly brace opens up the autocompletion feature to list the available tokens to choose from. The pi-sort-alt symbol over the input, transfers the token between the common tokens and color scheme specific tokens so that you are able to define tokens based on light and dark mode as well.

## Token Sets

The theming architecture is based on primitive, semantic and components tokens. The visual editor, displays a dedicated section for each set. For basic purposes such as customizing the primary and surface colors, primitive and semantic sections would be more than enough. The component tokens are displayed per route so navigate to the component page first to view the tokens of the specific component.

## Typography

The components are not opinionated about the typography. Important properties such as the font family, font size, and line-height do not have design tokens since they can be inherited from the document. For preview purposes, the settings tab displays options to customize the base font and the font family of the document. These values are not available in the generated theme and need to be applied to your application at the document level.
