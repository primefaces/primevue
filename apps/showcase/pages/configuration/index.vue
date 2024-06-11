<template>
    <Head>
        <Title>Configuration - PrimeVue</Title>
        <Meta name="description" content="Global configuration options of the components." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Configuration</h1>
                <p>Application widge configuration for PrimeVue.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import ImportDoc from '@/doc/configuration/ImportDoc.vue';
import InputVariantDoc from '@/doc/configuration/InputVariantDoc.vue';
import PTDoc from '@/doc/configuration/PTDoc.vue';
import PTOptionsDoc from '@/doc/configuration/PTOptionsDoc.vue';
import RippleDoc from '@/doc/configuration/RippleDoc.vue';
import ThemeDoc from '@/doc/configuration/ThemeDoc.vue';
import UnstyledDoc from '@/doc/configuration/UnstyledDoc.vue';
import ZIndexDoc from '@/doc/configuration/ZIndexDoc.vue';
import NonceDoc from '@/doc/configuration/csp/NonceDoc.vue';
import LocaleApiDoc from '@/doc/configuration/locale/LocaleApiDoc.vue';
import RepositoryDoc from '@/doc/configuration/locale/RepositoryDoc.vue';
import SetLocaleDoc from '@/doc/configuration/locale/SetLocaleDoc.vue';

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
                    id: 'theme',
                    label: 'Theme',
                    component: ThemeDoc
                },
                {
                    id: 'unstyled',
                    label: 'Unstyled',
                    component: UnstyledDoc
                },
                {
                    id: 'pt',
                    label: 'Pass Through',
                    component: PTDoc
                },
                {
                    id: 'ptoptions',
                    label: 'Pass Through Options',
                    component: PTOptionsDoc
                },
                {
                    id: 'ripple',
                    label: 'Ripple',
                    component: RippleDoc
                },
                {
                    id: 'inputvariant',
                    label: 'InputVariant',
                    component: InputVariantDoc
                },
                {
                    id: 'zindex',
                    label: 'ZIndex',
                    component: ZIndexDoc
                },
                {
                    id: 'csp',
                    label: 'CSP',
                    children: [
                        {
                            id: 'nonce',
                            label: 'Nonce',
                            component: NonceDoc
                        }
                    ]
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
