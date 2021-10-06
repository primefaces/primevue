<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TabMenu</h1>
                <p>TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Default</h5>
                <TabMenu :model="items" />
                <router-view/>
            </div>

            <div class="card">
                <h5>Programmatic</h5>
                <div class="p-py-2">
                    <Button @click="active = 0" class="p-button-text" label="Activate 1st" />
                    <Button @click="active = 1" class="p-button-text p-mr-2" label="Activate 2nd" />
                    <Button @click="active = 2" class="p-button-text p-mr-2" label="Activate 3rd" />
                </div>

                <TabMenu :model="items2" v-model:activeIndex="active" />
            </div>
        </div>

        <TabMenuDoc />
    </div>
</template>

<script>
import TabMenuDoc from './TabMenuDoc';

export default {
    data() {
        return {
            active: 3,
            items: [
                {label: 'Home', icon: 'fw home', to: '/tabmenu'},
                {label: 'Calendar', icon: 'fw calendar', to: '/tabmenu/calendar'},
                {label: 'Edit', icon: 'fw pencil', to: '/tabmenu/edit'},
                {label: 'Documentation', icon: 'fw file', to: '/tabmenu/documentation'},
                {label: 'Settings', icon: 'fw cog', to: '/tabmenu/settings'}
            ],
            items2: [
                {label: 'Home', icon: 'fw home'},
                {label: 'Calendar', icon: 'fw calendar'},
                {label: 'Edit', icon: 'fw pencil'},
                {label: 'Documentation', icon: 'fw file'},
                {label: 'Settings', icon: 'fw cog'}
            ]
        }
    },
    components: {
        'TabMenuDoc': TabMenuDoc
	}
}
</script>

<style scoped lang="scss">
::v-deep(.tabmenudemo-content) {
    padding: 2rem 1rem;
}
</style>
