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
                <SplitButton label="Primary" :model="items" class="mb-2"></SplitButton>
                <SplitButton label="Secondary" :model="items" class="p-button-secondary mb-2"></SplitButton>
                <SplitButton label="Success" :model="items" class="p-button-success mb-2"></SplitButton>
                <SplitButton label="Info" :model="items" class="p-button-info mb-2"></SplitButton>
                <SplitButton label="Warning" :model="items" class="p-button-warning mb-2"></SplitButton>
                <SplitButton label="Help" :model="items" class="p-button-help mb-2"></SplitButton>
                <SplitButton label="Danger" :model="items" class="p-button-danger mb-2"></SplitButton>

                <h5>Raised Buttons</h5>
                <SplitButton label="Primary" :model="items" class="p-button-raised mb-2"></SplitButton>
                <SplitButton label="Secondary" :model="items" class="p-button-raised p-button-secondary mb-2"></SplitButton>
                <SplitButton label="Success" :model="items" class="p-button-raised p-button-success mb-2"></SplitButton>
                <SplitButton label="Info" :model="items" class="p-button-raised p-button-info mb-2"></SplitButton>
                <SplitButton label="Warning" :model="items" class="p-button-raised p-button-warning mb-2"></SplitButton>
                <SplitButton label="Help" :model="items" class="p-button-raised p-button-help mb-2"></SplitButton>
                <SplitButton label="Danger" :model="items" class="p-button-raised p-button-danger mb-2"></SplitButton>

                <h5>Rounded Buttons</h5>
                <SplitButton label="Primary" :model="items" class="p-button-rounded mb-2"></SplitButton>
                <SplitButton label="Secondary" :model="items" class="p-button-rounded p-button-secondary mb-2"></SplitButton>
                <SplitButton label="Success" :model="items" class="p-button-rounded p-button-success mb-2"></SplitButton>
                <SplitButton label="Info" :model="items" class="p-button-rounded p-button-info mb-2"></SplitButton>
                <SplitButton label="Warning" :model="items" class="p-button-rounded p-button-warning mb-2"></SplitButton>
                <SplitButton label="Help" :model="items" class="p-button-rounded p-button-help mb-2"></SplitButton>
                <SplitButton label="Danger" :model="items" class="p-button-rounded p-button-danger mb-2"></SplitButton>

                <h5>Text Buttons</h5>
                <SplitButton label="Primary" :model="items" class="p-button-text mb-2"></SplitButton>
                <SplitButton label="Secondary" :model="items" class="p-button-text p-button-secondary mb-2"></SplitButton>
                <SplitButton label="Success" :model="items" class="p-button-text p-button-success mb-2"></SplitButton>
                <SplitButton label="Info" :model="items" class="p-button-text p-button-info mb-2"></SplitButton>
                <SplitButton label="Warning" :model="items" class="p-button-text p-button-warning mb-2"></SplitButton>
                <SplitButton label="Help" :model="items" class="p-button-text p-button-help mb-2"></SplitButton>
                <SplitButton label="Danger" :model="items" class="p-button-text p-button-danger mb-2"></SplitButton>

                <h5>Raised Text Buttons</h5>
                <SplitButton label="Primary" :model="items" class="p-button-raised p-button-text mb-2"></SplitButton>
                <SplitButton label="Secondary" :model="items" class="p-button-raised p-button-text p-button-secondary mb-2"></SplitButton>
                <SplitButton label="Success" :model="items" class="p-button-raised p-button-text p-button-success mb-2"></SplitButton>
                <SplitButton label="Info" :model="items" class="p-button-raised p-button-text p-button-info mb-2"></SplitButton>
                <SplitButton label="Warning" :model="items" class="p-button-raised p-button-text p-button-warning mb-2"></SplitButton>
                <SplitButton label="Help" :model="items" class="p-button-raised p-button-text p-button-help mb-2"></SplitButton>
                <SplitButton label="Danger" :model="items" class="p-button-raised p-button-text p-button-danger mb-2"></SplitButton>

                <h5>Outlined Buttons</h5>
                <SplitButton label="Primary" :model="items" class="p-button-outlined mb-2"></SplitButton>
                <SplitButton label="Secondary" :model="items" class="p-button-outlined p-button-secondary mb-2"></SplitButton>
                <SplitButton label="Success" :model="items" class="p-button-outlined p-button-success mb-2"></SplitButton>
                <SplitButton label="Info" :model="items" class="p-button-outlined p-button-info mb-2"></SplitButton>
                <SplitButton label="Warning" :model="items" class="p-button-outlined p-button-warning mb-2"></SplitButton>
                <SplitButton label="Help" :model="items" class="p-button-outlined p-button-help mb-2"></SplitButton>
                <SplitButton label="Danger" :model="items" class="p-button-outlined p-button-danger mb-2"></SplitButton>

                <h5>Sizes</h5>
                <SplitButton label="Small" :model="items" class="p-button-sm mb-2"></SplitButton>
                <SplitButton label="Normal" :model="items" class="mb-2"></SplitButton>
                <SplitButton label="Large" :model="items" class="p-button-lg mb-2"></SplitButton>
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
    margin-bottom: .5rem
}
</style>