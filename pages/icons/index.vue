<template>
    <div>
        <Head>
            <Title>Vue Icon Library - PrimeVue</Title>
            <Meta name="description" content="PrimeIcons is the default icon library of PrimeVue with over 250 open source icons developed by PrimeTek. PrimeIcons library is optional as PrimeVue components can use any icon with templating." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Icons</h1>
                    <p>
                        <a href="https://github.com/primefaces/primeicons"> PrimeIcons </a>
                        is the default icon library of PrimeVue with over 250 open source icons developed by PrimeTek. PrimeIcons library is optional as PrimeVue components can use any icon with templating.
                    </p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import BasicDoc from '@/doc/icons/BasicDoc.vue';
import ColorDoc from '@/doc/icons/ColorDoc.vue';
import ConstantsDoc from '@/doc/icons/ConstantsDoc.vue';
import DownloadDoc from '@/doc/icons/DownloadDoc.vue';
import FigmaDoc from '@/doc/icons/FigmaDoc.vue';
import ImportDoc from '@/doc/icons/ImportDoc.vue';
import ListDoc from '@/doc/icons/ListDoc.vue';
import SizeDoc from '@/doc/icons/SizeDoc.vue';
import SpinDoc from '@/doc/icons/SpinDoc.vue';

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
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'figma',
                    label: 'Figma',
                    component: FigmaDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'size',
                    label: 'Size',
                    component: SizeDoc
                },
                {
                    id: 'color',
                    label: 'Color',
                    component: ColorDoc
                },
                {
                    id: 'spin',
                    label: 'Spin',
                    component: SpinDoc
                },
                {
                    id: 'constants',
                    label: 'Constants',
                    component: ConstantsDoc
                },
                {
                    id: 'list',
                    label: 'List',
                    component: ListDoc
                }
            ]
        };
    }
};
</script>
