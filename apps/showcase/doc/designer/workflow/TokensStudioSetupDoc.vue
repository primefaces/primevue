<template>
    <DocSectionText v-bind="$attrs">
        <ul class="leading-normal px-10 list-disc">
            <li class="py-2">
                <b>Set sync provider via Tokens Studio</b> - Figma plugins are limited to sharing a maximum of 100KB of data through their APIs. Because PrimeOne's token data exceeds this limit, using tokens locally within your Figma file may lead to
                performance issues. To avoid this, you should first configure and switch to a remote sync provider. You can follow the official
                <a href="https://docs.tokens.studio/token-storage/remote" target="_blank" rel="noopener noreferrer">Tokens Studio guide</a> for setting up remote storage.
            </li>
            <li class="py-2"><b>Push tokens to your sync provider</b> - Once you've successfully switched to your new sync provider, push the token data from your local file to the new provider to ensure everything stays in sync.</li>
            <li class="py-2">
                <b>Set Base Font Size to <i>{app.font.size}</i> in Tokens Studio Settings</b> - PrimeOne uses a base font size of 14px, aligning with the default in Prime UI libraries. In Tokens Studio, go to the Settings tab and set the Base font
                size to <i>{app.font.size}</i> .
            </li>
            <li>If you wish to change this value, you can <a href="https://docs.tokens.studio/manage-settings/base-font-size" target="_blank" rel="noopener noreferrer">update</a> the corresponding token in the app set.</li>
        </ul>
    </DocSectionText>
</template>
