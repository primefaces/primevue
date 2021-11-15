<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Toolbar</h1>
                <p>Toolbar is a grouping component for buttons and other content.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <Toolbar>
                <template #start>
                    <Button label="New" icon="pi pi-plus" class="p-mr-2" />
                    <Button label="Upload" icon="pi pi-upload" class="p-button-success" />
                    <i class="pi pi-bars p-toolbar-separator p-mr-2" />
                    <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>
                </template>

                <template #end>
                    <Button icon="pi pi-search" class="p-mr-2" />
                    <Button icon="pi pi-calendar" class="p-button-success p-mr-2" />
                    <Button icon="pi pi-times" class="p-button-danger" />
                </template>
            </Toolbar>
        </div>

        <ToolbarDoc/>
    </div>
</template>
<script>
import ToolbarDoc from './ToolbarDoc';

export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/'
                    }
                },
                {   label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
                        this.$router.push('fileupload');
                    }
                }
            ]
        }
    },
	components: {
		'ToolbarDoc': ToolbarDoc
    }
}
</script>