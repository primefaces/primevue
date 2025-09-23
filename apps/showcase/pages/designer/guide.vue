<template>
    <div>
        <Head>
            <Title>Theme Designer - PrimeVue</Title>
            <Meta name="description" content="Theme Designer is the ultimate tool to customize and design your own themes featuring a visual editor, figma to theme code, cloud storage, and migration assistant." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Designer</h1>
                    <p>Theme Designer is the ultimate tool to customize and design your own themes featuring a visual editor, figma to theme code, cloud storage, and migration assistant.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import BaseDoc from '@/doc/designer/createtheme/BaseDoc.vue';
import FigmaDoc from '@/doc/designer/createtheme/FigmaDoc.vue';
import DashboardDoc from '@/doc/designer/DashboardDoc.vue';
import CustomTokensDoc from '@/doc/designer/editor/CustomTokensDoc.vue';
import IntelligentCompletionDoc from '@/doc/designer/editor/IntelligentCompletionDoc.vue';
import TokenSetsDoc from '@/doc/designer/editor/TokenSetsDoc.vue';
import TypographyDoc from '@/doc/designer/editor/TypographyDoc.vue';
import LicenseDoc from '@/doc/designer/LicenseDoc.vue';
import LimitationsDoc from '@/doc/designer/LimitationsDoc.vue';
import MigrationAssistantDoc from '@/doc/designer/MigrationAssistantDoc.vue';
import OverviewDoc from '@/doc/designer/OverviewDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'overview',
                    label: 'Overview',
                    component: OverviewDoc
                },
                {
                    id: 'license',
                    label: 'License',
                    component: LicenseDoc
                },
                {
                    id: 'dashboard',
                    label: 'Dashboard',
                    component: DashboardDoc
                },
                {
                    id: 'create',
                    label: 'Create Theme',
                    description: 'A theme can be initiated from one of the built-in themes or from Figma UI Kit.',
                    children: [
                        {
                            id: 'base',
                            label: 'Base',
                            component: BaseDoc
                        },
                        {
                            id: 'figma',
                            label: 'Figma',
                            component: FigmaDoc
                        }
                    ]
                },
                {
                    id: 'editor',
                    label: 'Editor',
                    children: [
                        {
                            id: 'tokensets',
                            label: 'Token Sets',
                            component: TokenSetsDoc
                        },
                        {
                            id: 'customtokens',
                            label: 'Custom Tokens',
                            component: CustomTokensDoc
                        },
                        {
                            id: 'autocomplete',
                            label: 'Intelligent Completion',
                            component: IntelligentCompletionDoc
                        },
                        {
                            id: 'typography',
                            label: 'Typography',
                            component: TypographyDoc
                        }
                    ]
                },
                {
                    id: 'migration',
                    label: 'Migration Assistant',
                    component: MigrationAssistantDoc
                },
                {
                    id: 'limitations',
                    label: 'Limitations',
                    component: LimitationsDoc
                }
            ]
        };
    }
};
</script>
