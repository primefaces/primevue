<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>SplitButton</h1>
                <p>SplitButton groups a set of commands in an overlay with a default command.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items"></SplitButton>

                <h5>Nested</h5>
                <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="nestedItems"></SplitButton>

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

                <h5>Templating</h5>
                <SplitButton :model="items" class="bg-primary border-round">
                    <Button @click="save">
                        <img alt="logo" src="../../assets/images/logo.svg" style="width: 1rem" />
                        <span class="ml-2 flex align-items-center font-bold">PrimeVue</span>
                    </Button>
                </SplitButton>
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
                    to: '/fileupload'
                }
            ],
            nestedItems: [
                {
                    label:'File',
                    icon:'pi pi-fw pi-file',
                    items:[
                        {
                            label:'New',
                            icon:'pi pi-fw pi-plus',
                            items:[
                                {
                                    label:'Bookmark',
                                    icon:'pi pi-fw pi-bookmark'
                                },
                                {
                                    label:'Video',
                                    icon:'pi pi-fw pi-video'
                                },
                            ]
                        },
                        {
                            label:'Delete',
                            icon:'pi pi-fw pi-trash'
                        },
                        {
                            separator:true
                        },
                        {
                            label:'Export',
                            icon:'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                        {
                            label:'Left',
                            icon:'pi pi-fw pi-align-left'
                        },
                        {
                            label:'Right',
                            icon:'pi pi-fw pi-align-right'
                        },
                        {
                            label:'Center',
                            icon:'pi pi-fw pi-align-center'
                        },
                        {
                            label:'Justify',
                            icon:'pi pi-fw pi-align-justify'
                        }
                    ]
                },
                {
                    label:'Users',
                    icon:'pi pi-fw pi-user',
                    items:[
                        {
                            label:'New',
                            icon:'pi pi-fw pi-user-plus'
                        },
                        {
                            label:'Delete',
                            icon:'pi pi-fw pi-user-minus'
                        },
                        {
                            label:'Search',
                            icon:'pi pi-fw pi-users',
                            items:[
                                {
                                    label:'Filter',
                                    icon:'pi pi-fw pi-filter',
                                    items:[
                                        {
                                            label:'Print',
                                            icon:'pi pi-fw pi-print'
                                        }
                                    ]
                                },
                                {
                                    icon:'pi pi-fw pi-bars',
                                    label:'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    label:'Events',
                    icon:'pi pi-fw pi-calendar',
                    items:[
                        {
                            label:'Edit',
                            icon:'pi pi-fw pi-pencil',
                            items:[
                                {
                                    label:'Save',
                                    icon:'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    label:'Delete',
                                    icon:'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            label:'Archieve',
                            icon:'pi pi-fw pi-calendar-times',
                            items:[
                                {
                                    label:'Remove',
                                    icon:'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        }
                    ]
                },
                {
                    separator:true
                },
                {
                    label:'Quit',
                    icon:'pi pi-fw pi-power-off'
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