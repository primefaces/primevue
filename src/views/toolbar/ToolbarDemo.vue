<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Toolbar</h1>
                <p>Toolbar is a grouping component for buttons and other content.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Toolbar>
                <template slot="left">
                    <Button label="New" icon="pi pi-plus" style="margin-right: .25em" />
                    <Button label="Upload" icon="pi pi-upload" class="p-button-success" />
                    <i class="pi pi-bars p-toolbar-separator" style="margin-right: .25em" />
                    <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>
                </template>

                <template slot="right">
                    <Button icon="pi pi-search" style="margin-right: .25em" />
                    <Button icon="pi pi-calendar" class="p-button-success" style="margin-right: .25em" />
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
                        window.location.hash = "/fileupload"
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