<template>
    <DocSectionText v-bind="$attrs">
        <ul class="leading-normal px-10 mb-2 list-disc">
            <li>
                <div class="font-bold">What should we do after purchasing? I can't publish the Preview file?</div>
                <p>
                    The Preview file is <b>view-only</b>, so it can't be published. To use the library, download the .fig file from PrimeStore and import it into your Figma workspace. Once imported, you'll be able to open the file and publish it as a
                    library for use in your projects.
                </p>
            </li>
            <li>
                <div class="font-bold">How to change theme?</div>
                <p>After exporting your tokens as Figma Variables using the Themes option in Tokens Studio, theme switching must be handled using Figma's native <b>Mode Switching</b> feature.</p>
                <p>The Theme Switcher within the Tokens Studio plugin will no longer function once themes are bound to a Variable Collection — this applies to PrimeOne as well.</p>
                <p>Therefore, to switch between Light and Dark modes, you should always use Figma's built-in Mode Switching interface.</p>
            </li>
        </ul>
    </DocSectionText>
</template>
