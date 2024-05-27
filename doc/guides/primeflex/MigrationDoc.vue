<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <a href="https://www.npmjs.com/package/primeclt" target="_blank" rel="noopener noreferrer">primeclt</a> is a command line utility by PrimeTek to assist project setup and migration. The <i>pf2tw</i> command is created for smooth
            migration between PrimeFlex to Tailwind CSS. As a prequisite, the <i>tailwindcss-primeui</i> is required to provide the matching classes that do not exist in core Tailwind CSS such as semantic colors and animations. For flawless
            migration, it is highly suggested to use PrimeVue v4 as the requirement of the tailwindcss plugin.
        </p>
        <p>Install PrimeCLT.</p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <p>Run the <i>pf2wt</i> in a directory that contains files to be migrated.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
        <p>There are a couple of utility classes that are not migrated as they have no counterparts, use flexbox utilities instead as replacements.</p>
        <ul class="leading-loose">
            <li>formgrid</li>
            <li>formgroup</li>
            <li>formgroup-inline</li>
            <li>col</li>
            <li>col-fixed</li>
            <li>field</li>
            <li>field-checkbox</li>
            <li>field-radiobutton</li>
            <li>reset</li>
        </ul>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
npm install -g primeclt
`
            },
            code2: {
                basic: `
prime pf2tw
`
            }
        };
    }
};
</script>
