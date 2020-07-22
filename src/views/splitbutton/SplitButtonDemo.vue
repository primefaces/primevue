<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>SplitButton</h1>
                <p>SplitButton groups a set of commands in an overlay with a default command.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items"></SplitButton>

                <h5>Severities</h5>
                <SplitButton label="Save" icon="pi pi-plus" :model="items"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-secondary"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-success"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-info"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-warning"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-help"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-danger"></SplitButton>
            </div>
        </div>

        <SplitButtonDoc/>
    </div>
</template>

<script>
import SplitButtonDoc from './SplitButtonDoc';

export default {
    data() {
        return {
            items: [
                {
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
    methods: {
        save() {
            this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
        }
    },
    components: {
        'SplitButtonDoc': SplitButtonDoc

	}
}
</script>

<style lang="scss" scoped>
.p-splitbutton {
    margin-right: .5rem;
}
</style>