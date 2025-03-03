<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Download a release from <a href="https://github.com/primefaces/primevue-tailwind/releases" target="_blank" rel="noopener noreferrer">github</a> that matches your PrimeVue version. The minimum version requirement is v4.1.1. Once the zip is
            downloaded, extract the contents to a folder e.g. <i>./src/assets/primevue</i> .
        </p>
        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: ` 
- src
  - assets
    - primevue
      - common.css
      - button.css
      - ...
`
            }
        };
    }
};
</script>
