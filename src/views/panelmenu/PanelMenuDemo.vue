<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>PanelMenu</h1>
                <p>PanelMenu is a hybrid of Accordion and Tree components.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <PanelMenu :model="items" />
        </div>

        <PanelMenuDoc />
    </div>
</template>

<script>
import PanelMenuDoc from './PanelMenuDoc';

export default {
    data() {
        return {
            items: [
                {
                   label: 'File',
                   icon:'pi pi-fw pi-file',
                   items: [
                      {
                         label: 'New',
                         icon:'pi pi-fw pi-plus',
                         items: [
                            {
                               label: 'Bookmark',
                               icon:'pi pi-fw pi-bookmark'
                            },
                            {
                               label: 'Video',
                               icon:'pi pi-fw pi-video'
                            }
                         ]
                      },
                      {
                         label: 'Delete',
                         icon:'pi pi-fw pi-trash'
                      },
                      {
                         label: 'Export',
                         icon:'pi pi-fw pi-external-link'
                      }
                   ]
                },
                {
                   label: 'Edit',
                   icon:'pi pi-fw pi-pencil',
                   items: [
                      {
                         label: 'Left',
                         icon:'pi pi-fw pi-align-left'
                      },
                      {
                         label: 'Right',
                         icon:'pi pi-fw pi-align-right'
                      },
                      {
                         label: 'Center',
                         icon:'pi pi-fw pi-align-center'
                      },
                      {
                         label: 'Justify',
                         icon:'pi pi-fw pi-align-justify'
                      }
                   ]
                },
                {
                   label: 'Users',
                   icon:'pi pi-fw pi-user',
                   items: [
                      {
                         label: 'New',
                         icon:'pi pi-fw pi-user-plus',

                      },
                      {
                         label: 'Delete',
                         icon:'pi pi-fw pi-user-minus',
                      },
                      {
                         label: 'Search',
                         icon:'pi pi-fw pi-users',
                         items: [
                            {
                               label: 'Filter',
                               icon:'pi pi-fw pi-filter',
                               items: [
                                  {
                                     label: 'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label: 'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label: 'Events',
                   icon:'pi pi-fw pi-calendar',
                   items: [
                      {
                         label: 'Edit',
                         icon:'pi pi-fw pi-pencil',
                         items: [
                            {
                               label: 'Save',
                               icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                               label: 'Delete',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      },
                      {
                         label: 'Archieve',
                         icon:'pi pi-fw pi-calendar-times',
                         items: [
                            {
                               label: 'Remove',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      }
                   ]
                }
             ]
        }
    },
    components: {
        'PanelMenuDoc': PanelMenuDoc
	}
}
</script>

<style scoped lang="scss">
.p-panelmenu {
    width: 22rem;
}
</style>