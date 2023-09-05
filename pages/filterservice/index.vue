<template>
    <div>
        <Head>
            <Title>Vue Filter Service</Title>
            <Meta name="description" content="PrimeVue Filter Service is a helper utility to filter." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>FilterService</h1>
                    <p>FilterService is a helper utility to filter collections against constraints.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import ApiDoc from '@/doc/filterservice/ApiDoc';
import BuiltInConstraintsDoc from '@/doc/filterservice/BuiltInConstraintsDoc';
import CustomConstraintDoc from '@/doc/filterservice/CustomConstraintDoc';
import ImportDoc from '@/doc/filterservice/ImportDoc';
import TableIntegrationDoc from '@/doc/filterservice/TableIntegrationDoc';
import UsageDoc from '@/doc/filterservice/UsageDoc';

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
                    id: 'usage',
                    label: 'Usage',
                    component: UsageDoc
                },
                {
                    id: 'built-in-constraint',
                    label: 'Built-in Constraint',
                    component: BuiltInConstraintsDoc
                },
                {
                    id: 'custom-constraint',
                    label: 'Custom Constraint',
                    component: CustomConstraintDoc
                },
                {
                    id: 'api',
                    label: 'API',
                    component: ApiDoc
                },
                {
                    id: 'table-integration',
                    label: 'Table Integration',
                    component: TableIntegrationDoc
                }
            ]
        };
    }
};
</script>
