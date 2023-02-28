<template>
    <div>
        <Head>
            <Title>Locale - PrimeVue</Title>
            <Meta name="description" content="The Locale API allows setting i18n and l7n options globally for the components." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Internationalization and Localization</h1>
                    <p>The Locale API allows setting i18n and l7n options globally for the components.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import ApiDoc from '@/doc/locale/ApiDoc';
import ImportDoc from '@/doc/locale/ImportDoc';
import RepositoryDoc from '@/doc/locale/RepositoryDoc';
import SetLocaleDoc from '@/doc/locale/SetLocaleDoc';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'setlocale',
                    label: 'Set Locale',
                    component: SetLocaleDoc
                },
                {
                    id: 'repository',
                    label: 'Repository',
                    component: RepositoryDoc
                },
                {
                    id: 'api',
                    label: 'API',
                    component: ApiDoc
                }
            ]
        };
    }
};
</script>
