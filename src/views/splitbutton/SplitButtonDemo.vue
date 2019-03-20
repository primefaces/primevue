<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>SplitButton</h1>
                <p>SplitButton groups a set of commands in an overlay with a default command.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items"></SplitButton>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>
    .p-splitbutton {
        margin-right: .5em;
    }
</style>