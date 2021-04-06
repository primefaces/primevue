<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Breadcrumb</h1>
                <p>Breadcrumb provides contextual information about page hierarchy.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <Breadcrumb :home="home" :model="items" />
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
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'Computer'},
                {label: 'Notebook'},
                {label: 'Accessories'},
                {label: 'Backpacks'},
                {label: 'Item'}
            ]
        }
    },
    components: {
        'BreadcrumbDoc': BreadcrumbDoc
	}
}
</script>