# UI Kit

Design files for PrimeVue Components.

## Adding Prime Icons

PrimeOne uses PrimeIcons, the official icon library by PrimeTek. To use it effectively within your design system, you need to add PrimeIcons to your Figma environment by following these steps: Open the PrimeIcons file in Figma and move it to your team project. Publish the PrimeIcons file and enable it for all team files in your Team Settings. Return to your PrimeOne file. In the Libraries panel, click on the banner that says “Includes X missing libraries.” From the dropdown, select “ PrimeIcons (Community) ” and click the Swap Library button.

## Overview

PrimeOne is the official Figma library of UI components designed to match the implementations in the Prime UI Suites. The current iteration of PrimeOne is structured around the Aura Light and Aura Dark themes.

## Resources

PrimeOne for Figma takes full advantage of powerful Figma features such as components, variants, auto layout, styles, interactivity, and design tokens via Tokens Studio. If you're new to Figma or want to get the most out of PrimeOne, we recommend exploring the following resources: Tokens Studio Documentation - PrimeOne uses Tokens Studio for design token management. Visit the official docs to understand how it works and how to use it effectively. Figma's Best Practice Guides - Learn how to work efficiently with components, variants, and layouts. Figma's Official YouTube Channel - Tutorials and feature walkthroughs from the Figma team. Figmalion Newsletter - Stay updated with curated insights from the Figma community.

## Support

The community gathers on GitHub Discussions and Discord to ask questions, share ideas, and discuss the technology. For direct inquiries or suggestions, feel free to contact us at contact@primetek.com.tr .

## Token Sets

Primitive This set contains the most foundational tokens, such as base colors and border radius, elements that are considered “primitive” by nature. Semantic Includes essential system-wide tokens like primary, surface, and other shared design values It also defines tokens used across multiple component groups. For example, tokens under {form.field.\*} are referenced by component-level tokens in InputText, MultiSelect, Checkbox, and other form components, enabling consistent styling across the board. Component These tokens are defined specifically for each component to allow deep customization While we've aimed to create dedicated tokens for every component state, many of them still reference the semantic or primitive tokens, allowing you to make global updates from a single place when needed. App Tokens in this set are not part of the PrimeUIX system. They are intended for values defined in your own application. The same applies to tokens used in our UI library showcases. For example, there is no dedicated font size token in PrimeUIX because font styles are not part of the design system. UI components inherit their font settings from the application. Custom If you're using the Figma to Theme feature and want your newly created custom tokens to appear in your Theme Designer themes, place them in this set. Even if you're not using the Theme Designer, we still recommend creating a separate set — or using the existing “Custom” set — for your own tokens. Making changes to the default sets, especially deleting tokens or altering reference values, can lead to inconsistencies with the library tokens and cause additional work during development.

## Update Prime One

When a new version of PrimeOne is released, follow the steps below to update your files: Download the latest version of PrimeOne from PrimeStore. Unzip the file and upload it to your Figma workspace. Publish the newly uploaded file as a library. In all consumer files, use Swap Library to point to the new version. Once the transition is complete, you can safely unpublish the old PrimeOne library Before each update, it's a good idea to review the Changelog on the Get Started page of the PrimeOne Figma file. Keep in mind that while Swap Library will update most components, any customized components may require manual review and adjustment.

## Components

How to change base font size? The base font size used in PrimeOne is 14px. Similar to how rem works in CSS, this is controlled by the {app.font.size} token located under the "app" set in Tokens Studio. When you change the value of this token, all size calculations will adjust accordingly based on the new value. To apply this change, you need to use the “Apply” function in Tokens Studio. However, we do not recommend using the “ Apply to Document ” option if the change affects the entire library, as it may lead to unexpected errors. Instead, go page by page and review the updates carefully before applying changes. Also note: not all token values in the library may be linked to {app.font.size} . So it's important to check components individually. After completing each page, verify the updated values under Local Variables and make manual adjustments if needed. Alternatively, you can use Export Styles & Variables to Figma in Tokens Studio to sync the updated values.

## Licence

Will purchasing a PrimeBlocks license include access to PrimeOne components? No. The PrimeBlocks license does not grant access to the PrimeOne UI Kit. They are separate products with individual licenses.

## Roadmap

Are there plans to add a Tailwind theme to the UI Kit? At this time, we do not plan to include Tailwind theme support in the Figma UI Kit.

## Tokens

Is Tokens Studio too slow? This might be caused by using the wrong Apply method when pushing your changes. Since PrimeOne is a large file, using Apply to Document can result in very long processing times. We recommend using Apply to Selection or Apply to Page instead for better performance.

## Updates

Will there be a completely new Figma file with each update, or will the current PrimeOne file be modified and versioned? Each update will come as a new Figma file—an updated version of the previous one. You can seamlessly transition to the new version in your consumer files using Figma's Swap Library feature. Will the PrimeOne UI Kit stay in sync with ongoing updates to the Prime UI Libraries? The PrimeOne UI Kit does not update in real time alongside the libraries. However, we regularly release updates to bridge the gap and ensure alignment with key changes. How will users receive new components when they're added? New components will be included in future updates to the UI Kit. Please note that these updates may not coincide immediately with library changes and may take some time to roll out. How frequently is the PrimeOne UI Kit updated? We don't follow a fixed release schedule. Updates are made as needed, based on significant changes or additions to the Prime UI libraries.

## Usage

What should we do after purchasing? I can't publish the Preview file? The Preview file is view-only , so it can't be published. To use the library, download the .fig file from PrimeStore and import it into your Figma workspace. Once imported, you'll be able to open the file and publish it as a library for use in your projects. How to change theme? After exporting your tokens as Figma Variables using the Themes option in Tokens Studio, theme switching must be handled using Figma's native Mode Switching feature. The Theme Switcher within the Tokens Studio plugin will no longer function once themes are bound to a Variable Collection — this applies to PrimeOne as well. Therefore, to switch between Light and Dark modes, you should always use Figma's built-in Mode Switching interface.

## Enabling

If you want to enable PrimeOne across all files in your team, follow these steps: Navigate to All Projects from the Teams section. Go to View Settings View Team Libraries . You can find this option in the dropdown menu next to your team name. Toggle PrimeOne "On" to make it available globally.

## Importing

Download the latest .fig UI Kit - From your PrimeStore panel, download the latest PrimeOne package. The archive contains the .fig UI Kit. Open Figma in Google Chrome - Launch Figma in Chrome (or another supported browser). Avoid using the Desktop app for this import. It's more reliable in-browser. Import into your Team project - Navigate to the Teams section in the left sidebar. Select your Team project where you want PrimeOne. Drag and drop the .fig file into the project folder in the browser UI. Figma will upload it, showing a new file card once complete.

## Publishing

To make PrimeOne available as a shared library: Open the imported PrimeOne .fig file. Go to Assets Manage Libraries Click "Publish..." to share PrimeOne with your team, then confirm by clicking the "Publish" button in the modal.

## C I Pipeline

Theme Designer offers an API that can be utilized to implement continuos integration pipelines to automate figma to theme code generation whenever you push updates to the repository from Figma. Visit the CI Pipeline documentation for comprehensive information.

## Design Changes

Change on Tokens Studio The first step when planning a design change is to identify which tokens need to be modified within Tokens Studio. Use the Inspect tab in Tokens Studio to locate the relevant tokens, then apply your changes directly via the plugin. After making the updates, don't forget to push the changes to your Sync Provider. Change on Figma Variables After making changes in Tokens Studio, you also need to apply these updates in Figma Variables. There are two options: Manually update the variables one by one, or Use the Export to Styles & Variables feature in Tokens Studio. In our own workflow, we prefer to update the variables manually, as the export feature can be unstable with large files like PrimeOne. We recommend this manual approach for reliability. However, if you choose to use the export feature, make sure the settings match the screenshot provided. Specifically, ensure the “ Themes (Pro) ” tab is selected during the second step. Don't worry, even though it says “Pro,” you don't need a Pro license to access this feature in Tokens Studio. If you notice missing or incomplete exports on your first attempt, try running the export again from the beginning. This is a known issue with Tokens Studio and often resolves on the second attempt. For more detailed guidance, see the official documentation . Get Updates on Consumer Files We do not recommend making design changes directly in consumer files, as this goes against best practices. Instead, apply all design updates in the main UI Kit file, then publish the library and accept the updates in any consumer files that rely on it.

## Tokens Studio Setup

Set sync provider via Tokens Studio - Figma plugins are limited to sharing a maximum of 100KB of data through their APIs. Because PrimeOne's token data exceeds this limit, using tokens locally within your Figma file may lead to performance issues. To avoid this, you should first configure and switch to a remote sync provider. You can follow the official Tokens Studio guide for setting up remote storage. Push tokens to your sync provider - Once you've successfully switched to your new sync provider, push the token data from your local file to the new provider to ensure everything stays in sync. Set Base Font Size to {app.font.size} in Tokens Studio Settings - PrimeOne uses a base font size of 14px, aligning with the default in Prime UI libraries. In Tokens Studio, go to the Settings tab and set the Base font size to {app.font.size} . If you wish to change this value, you can update the corresponding token in the app set.
