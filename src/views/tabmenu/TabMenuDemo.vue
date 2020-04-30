<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TabMenu</h1>
                <p>TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <TabMenu :model="items" />
            <router-view/>
        </div>

        <TabMenuDoc />
    </div>
</template>

<script>
import TabMenuDoc from './TabMenuDoc';

export default {
    data() {
        return {
            items: [
                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/tabmenu'},
                {label: 'Calendar', icon: 'pi pi-fw pi-calendar', to: '/tabmenu/calendar'},
                {label: 'Edit', icon: 'pi pi-fw pi-pencil', to: '/tabmenu/edit'},
                {label: 'Documentation', icon: 'pi pi-fw pi-file', to: '/tabmenu/documentation'},
                {label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/tabmenu/settings'}
            ]
        }
    },
    components: {
        'TabMenuDoc': TabMenuDoc
	}
}
</script>

<style scoped lang="scss">
/deep/ .tabmenudemo-content  {
    display: flex;
    align-items: center;
    padding: 1em;

    h1 {
        font-weight: 400;
        font-size: 16px;
    }

    i {
        margin-right: .5em;
    }
}
</style>