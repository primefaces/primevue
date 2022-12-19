<template>
    <div>
        <Head>
            <Title>Vue BreadCrumb Component</Title>
            <Meta name="description" content="Breadcrumb provides contextual information about page hierarchy." />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Breadcrumb</h1>
                <p>Breadcrumb provides contextual information about page hierarchy.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <Breadcrumb :home="home" :model="items" aria-label="breadcrumb" />
            </div>
        </div>

        <BreadcrumbDoc />
    </div>
</template>

<script>
import BreadcrumbDoc from './BreadcrumbDoc';

export default {
    data() {
        return {
            home: { icon: 'pi pi-home', to: '/' },
            items: [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item', to: '/breadcrumb' }]
        };
    },
    components: {
        BreadcrumbDoc: BreadcrumbDoc
    }
};
</script>
