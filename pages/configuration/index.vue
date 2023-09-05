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
import PTDoc from '@/doc/configuration/PTDoc.vue';
import RippleDoc from '@/doc/configuration/RippleDoc';
import UnstyledDoc from '@/doc/configuration/UnstyledDoc';
import ZIndexDoc from '@/doc/configuration/ZIndexDoc';
import NonceDoc from '@/doc/configuration/csp/NonceDoc';
import LocaleApiDoc from '@/doc/configuration/locale/LocaleApiDoc';
import RepositoryDoc from '@/doc/configuration/locale/RepositoryDoc';
import SetLocaleDoc from '@/doc/configuration/locale/SetLocaleDoc';

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
                    id: 'zindex',
                    label: 'ZIndex',
                    component: ZIndexDoc
                },
                {
                    id: 'csp',
                    label: 'Content Security Policy (CSP)',
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
