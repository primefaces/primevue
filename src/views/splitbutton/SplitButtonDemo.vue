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
                <SplitButton label="Save" icon="plus" @click="save" :model="items"></SplitButton>

                <h5>Nested</h5>
                <SplitButton label="Save" icon="plus" @click="save" :model="nestedItems"></SplitButton>

                <h5>Severities</h5>
                <SplitButton label="Save" icon="plus" :model="items" class="p-mb-2"></SplitButton>
                <SplitButton label="Save" icon="plus" :model="items" class="p-button-secondary p-mb-2"></SplitButton>
                <SplitButton label="Save" icon="plus" :model="items" class="p-button-success p-mb-2"></SplitButton>
                <SplitButton label="Save" icon="plus" :model="items" class="p-button-info p-mb-2"></SplitButton>
                <SplitButton label="Save" icon="plus" :model="items" class="p-button-warning p-mb-2"></SplitButton>
                <SplitButton label="Save" icon="plus" :model="items" class="p-button-help p-mb-2"></SplitButton>
                <SplitButton label="Save" icon="plus" :model="items" class="p-button-danger p-mb-2"></SplitButton>
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
                    icon: 'refresh',
                    command: () => {
                        this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                    }
                },
                {
                    label: 'Delete',
                    icon: 'times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
                    }
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
                    to: '/fileupload'
                }
            ],
            nestedItems: [
                {
                    label:'File',
                    icon:'fw file',
                    items:[
                        {
                            label:'New',
                            icon:'fw plus',
                            items:[
                               {
                                  label:'Bookmark',
                                  icon:'fw bookmark'
                               },
                               {
                                  label:'Video',
                                  icon:'fw video'
                               },
                            ]
                        },
                        {
                            label:'Delete',
                            icon:'fw trash'
                        },
                        {
                            separator:true
                        },
                        {
                            label:'Export',
                            icon:'fw external-link'
                        }
                   ]
                },
                {
                    label:'Edit',
                    icon:'fw pencil',
                    items:[
                        {
                            label:'Left',
                            icon:'fw align-left'
                        },
                        {
                            label:'Right',
                            icon:'fw align-right'
                        },
                        {
                            label:'Center',
                            icon:'fw align-center'
                        },
                        {
                            label:'Justify',
                            icon:'fw align-justify'
                        }
                    ]
                },
                {
                    label:'Users',
                    icon:'fw user',
                    items:[
                        {
                            label:'New',
                            icon:'fw user-plus'
                        },
                        {
                            label:'Delete',
                            icon:'fw user-minus'
                        },
                        {
                            label:'Search',
                            icon:'fw users',
                            items:[
                                {
                                    label:'Filter',
                                    icon:'fw filter',
                                    items:[
                                        {
                                           label:'Print',
                                           icon:'fw print'
                                        }
                                   ]
                                },
                                {
                                    icon:'fw bars',
                                    label:'List'
                                }
                           ]
                        }
                   ]
                },
                {
                    label:'Events',
                    icon:'fw calendar',
                    items:[
                        {
                            label:'Edit',
                            icon:'fw pencil',
                            items:[
                                {
                                   label:'Save',
                                   icon:'fw calendar-plus'
                                },
                                {
                                   label:'Delete',
                                   icon:'fw calendar-minus'
                                }
                            ]
                        },
                        {
                            label:'Archieve',
                            icon:'fw calendar-times',
                            items:[
                                {
                                    label:'Remove',
                                    icon:'fw calendar-minus'
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
                   icon:'fw power-off'
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
