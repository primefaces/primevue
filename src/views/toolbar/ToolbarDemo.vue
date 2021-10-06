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
                <template #left>
                    <Button label="New" icon="plus" class="p-mr-2" />
                    <Button label="Upload" icon="upload" class="p-button-success" />
                    <i class="pi pi-bars p-toolbar-separator p-mr-2" />
                    <SplitButton label="Save" icon="check" :model="items" class="p-button-warning"></SplitButton>
                </template>

                <template #right>
                    <Button icon="search" class="p-mr-2" />
                    <Button icon="calendar" class="p-button-success p-mr-2" />
                    <Button icon="times" class="p-button-danger" />
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
                    icon: 'refresh'
                },
                {
                    label: 'Delete',
                    icon: 'times'
                },
                {
                    label: 'Vue Website',
                    icon: 'external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/'
                    }
                },
                {   label: 'Upload',
                    icon: 'upload',
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
