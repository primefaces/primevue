<template>
    <Head>
        <Title>Getting Started - PrimeVue</Title>
        <Meta name="description" content="PrimeVue is a rich set of open source components for Vue." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Installation</h1>
                <p>PrimeVue is a rich set of open source UI components for Vue.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import DownloadDoc from '@/doc/installation/DownloadDoc';
import StylesDoc from '@/doc/installation/StylesDoc';
import UsageDoc from '@/doc/installation/UsageDoc';
import CreateVueDoc from '@/doc/installation/videos/CreateVueDoc';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'download',
                    label: 'Download',
                    component: DownloadDoc
                },
                {
                    id: 'styles',
                    label: 'Styles',
                    component: StylesDoc
                },
                {
                    id: 'usage',
                    label: 'Usage',
                    component: UsageDoc
                },
                {
                    id: 'videos',
                    label: 'Videos',
                    description: 'Video tutorials to take you through step-by-step.',
                    children: [
                        {
                            id: 'createvue',
                            label: 'CreateVue',
                            component: CreateVueDoc
                        }
                    ]
                }
            ]
        };
    }
};
</script>
