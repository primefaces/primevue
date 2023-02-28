<template>
    <div>
        <Head>
            <Title>Vue Icon Library - PrimeVue</Title>
            <Meta name="description" content="PrimeVue components internally use PrimeIcons library." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Icons</h1>
                    <p>
                        <a href="https://github.com/primefaces/primeicons" class="text-primary hover:underline font-semibold"> PrimeIcons </a>
                        is the default icon library of PrimeVue with over 250 open source icons developed by PrimeTek.
                    </p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import BasicDoc from '@/doc/icons/BasicDoc';
import ColorDoc from '@/doc/icons/ColorDoc';
import ConstantsDoc from '@/doc/icons/ConstantsDoc';
import DownloadDoc from '@/doc/icons/DownloadDoc';
import ImportDoc from '@/doc/icons/ImportDoc';
import ListDoc from '@/doc/icons/ListDoc';
import SizeDoc from '@/doc/icons/SizeDoc';
import SpinDoc from '@/doc/icons/SpinDoc';

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
