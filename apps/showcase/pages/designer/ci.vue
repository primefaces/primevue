<template>
    <div>
        <Head>
            <Title>Theme Designer CI - PrimeVue</Title>
            <Meta name="description" content="Automate the conversion of Figma design tokens to theme code using CI pipelines and the theme designer API." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Figma to Theme Code CI Pipeline</h1>
                    <p>Automate the conversion of Figma design tokens to theme code using CI pipelines and the theme designer API.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import DesignerApiDoc from '@/doc/designer/ci/DesignerApiDoc.vue';
import FigmaDoc from '@/doc/designer/ci/FigmaDoc.vue';
import BitbucketDoc from '@/doc/designer/ci/integration/BitbucketDoc.vue';
import GitHubDoc from '@/doc/designer/ci/integration/GitHubDoc.vue';
import GitLabDoc from '@/doc/designer/ci/integration/GitLabDoc.vue';
import OverviewDoc from '@/doc/designer/ci/OverviewDoc.vue';
import PreviewDoc from '@/doc/designer/ci/PreviewDoc.vue';

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
                    id: 'api',
                    label: 'Designer API',
                    component: DesignerApiDoc
                },
                {
                    id: 'figma',
                    label: 'Figma',
                    component: FigmaDoc
                },
                {
                    id: 'integration',
                    label: 'Integration',
                    description: 'Once the Token Studio Sync Provider is running, you are able to connect your repository to the Theme Designer API to generate themes automatically whenever the tokens file changes.',
                    children: [
                        {
                            id: 'github',
                            label: 'GitHub',
                            component: GitHubDoc
                        },
                        {
                            id: 'gitlab',
                            label: 'GitLab',
                            component: GitLabDoc
                        },
                        {
                            id: 'bitbucket',
                            label: 'Bitbucket',
                            component: BitbucketDoc
                        }
                    ]
                },
                {
                    id: 'preview',
                    label: 'Preview',
                    component: PreviewDoc
                }
            ]
        };
    }
};
</script>
