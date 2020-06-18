<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Breadcrumb</h1>
                <p>Breadcrumb provides contextual information about page hierarchy.</p>
            </div>
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
                {label:'Categories'},
                {label:'Sports'},
                {label:'Football'},
                {label:'Countries'},
                {label:'Spain'},
                {label:'F.C. Barcelona'},
                {label:'Squad'},
                {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
            ]
        }
    },
    components: {
        'BreadcrumbDoc': BreadcrumbDoc
	}
}
</script>