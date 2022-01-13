<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Panel</h1>
                <p>Panel is a container with the optional content toggle feature.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <h5>Regular</h5>
            <Panel header="Header">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Panel>

            <h5>Advanced</h5>
            <Panel header="Header" :toggleable="true">
                <template #icons>
                    <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                        <span class="pi pi-cog"></span>
                    </button>
                    <Menu id="config_menu" ref="menu" :model="items" :popup="true" />
                </template>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Panel>
        </div>

        <PanelDoc/>
    </div>
</template>
<script>
import PanelDoc from './PanelDoc';

export default {
    data() {
        return {
            collapsed: true,
            items: [
                {
                    label: 'Options',
                    items: [{
                        label: 'Update',
                        icon: 'pi pi-refresh',
                        command: () => {
                            this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                        }
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        command: () => {
                            this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
                        }
                    }
                ]},
                {
                    label: 'Navigate',
                    items: [{
                        label: 'Vue Website',
                        icon: 'pi pi-external-link',
                        url: 'https://vuejs.org/'
                    },
                    {
                        label: 'Router',
                        icon: 'pi pi-upload',
                        to: '/fileupload'
                    }
                ]}
            ]
        }
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
        save() {
            this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
        }
    },
    components: {
        'PanelDoc': PanelDoc
    }
}
</script>

<style lang="scss" scoped>
.p-panel p {
    line-height: 1.5;
    margin: 0;
}
</style>