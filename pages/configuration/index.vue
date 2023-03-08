<template>
    <Head>
        <Title>Configuration - PrimeVue</Title>
        <Meta name="description" content="Global configuration options of the components." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Configuration</h1>
                <p>Global configuration options of the components.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import ImportDoc from '@/doc/configuration/ImportDoc';
import InputStyleDoc from '@/doc/configuration/InputStyleDoc';
import LocaleApiDoc from '@/doc/configuration/locale/LocaleApiDoc';
import RepositoryDoc from '@/doc/configuration/locale/RepositoryDoc';
import SetLocaleDoc from '@/doc/configuration/locale/SetLocaleDoc';
import RippleDoc from '@/doc/configuration/RippleDoc';

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
                    id: 'ripple',
                    label: 'Ripple',
                    component: RippleDoc
                },
                {
                    id: 'inputstyle',
                    label: 'InputStyle',
                    component: InputStyleDoc
                },
                {
                    id: 'locale',
                    label: 'Locale',
                    children: [
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
                            id: 'localeapi',
                            label: 'API',
                            component: LocaleApiDoc
                        }
                    ]
                }
            ]
        };
    }
};
</script>
