# uikit



## AddingPrimeIconsDoc

PrimeOne uses PrimeIcons, the official icon library by PrimeTek. To use it effectively within your design system, you need to add PrimeIcons to your Figma environment by following these steps: Open the PrimeIcons file in Figma and move it to your team project. Publish the PrimeIcons file and enable it for all team files in your Team Settings. Return to your PrimeOne file. In the Libraries panel, click on the banner that says “Includes X missing libraries.” From the dropdown, select “ PrimeIcons (Community) ” and click the Swap Library button.

## OverviewDoc

PrimeOne is the official Figma library of UI components designed to match the implementations in the Prime UI Suites. The current iteration of PrimeOne is structured around the Aura Light and Aura Dark themes.

## ResourcesDoc

PrimeOne for Figma takes full advantage of powerful Figma features such as components, variants, auto layout, styles, interactivity, and design tokens via Tokens Studio. If you're new to Figma or want to get the most out of PrimeOne, we recommend exploring the following resources: Tokens Studio Documentation - PrimeOne uses Tokens Studio for design token management. Visit the official docs to understand how it works and how to use it effectively. Figma's Best Practice Guides - Learn how to work efficiently with components, variants, and layouts. Figma's Official YouTube Channel - Tutorials and feature walkthroughs from the Figma team. Figmalion Newsletter - Stay updated with curated insights from the Figma community.

## SupportDoc

The community gathers on GitHub Discussions and Discord to ask questions, share ideas, and discuss the technology. For direct inquiries or suggestions, feel free to contact us at contact@primetek.com.tr .

## TokenSetsDoc

Primitive This set contains the most foundational tokens, such as base colors and border radius, elements that are considered “primitive” by nature. Semantic Includes essential system-wide tokens like primary, surface, and other shared design values It also defines tokens used across multiple component groups. For example, tokens under {form.field.*} are referenced by component-level tokens in InputText, MultiSelect, Checkbox, and other form components, enabling consistent styling across the board. Component These tokens are defined specifically for each component to allow deep customization While we've aimed to create dedicated tokens for every component state, many of them still reference the semantic or primitive tokens, allowing you to make global updates from a single place when needed. App Tokens in this set are not part of the PrimeUIX system. They are intended for values defined in your own application. The same applies to tokens used in our UI library showcases. For example, there is no dedicated font size token in PrimeUIX because font styles are not part of the design system. UI components inherit their font settings from the application. Custom If you're using the Figma to Theme feature and want your newly created custom tokens to appear in your Theme Designer themes, place them in this set. Even if you're not using the Theme Designer, we still recommend creating a separate set — or using the existing “Custom” set — for your own tokens. Making changes to the default sets, especially deleting tokens or altering reference values, can lead to inconsistencies with the library tokens and cause additional work during development.

## UpdatePrimeOneDoc

When a new version of PrimeOne is released, follow the steps below to update your files: Download the latest version of PrimeOne from PrimeStore. Unzip the file and upload it to your Figma workspace. Publish the newly uploaded file as a library. In all consumer files, use Swap Library to point to the new version. Once the transition is complete, you can safely unpublish the old PrimeOne library Before each update, it's a good idea to review the Changelog on the Get Started page of the PrimeOne Figma file. Keep in mind that while Swap Library will update most components, any customized components may require manual review and adjustment.

