<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Menubar</h1>
                <p>Menubar is a horizontal menu component.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <Menubar :model="items">
                    <template #start>
                        <img alt="logo" src="../../assets/images/logo.svg" height="40" class="p-mr-2">
                    </template>
                    <template #end>
                        <InputText placeholder="Search" type="text" />
                    </template>
                </Menubar>
            </div>
        </div>

        <MenubarDoc />
    </div>
</template>

<script>
import MenubarDoc from './MenubarDoc';

export default {
    data() {
        return {
            items: [
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
                      },

                   ]
                },
                {
                   label:'Users',
                   icon:'fw user',
                   items:[
                      {
                         label:'New',
                         icon:'fw user-plus',

                      },
                      {
                         label:'Delete',
                         icon:'fw user-minus',

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
                            },

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
                   label:'Quit',
                   icon:'fw power-off'
                }
             ]
        }
    },
    components: {
        'MenubarDoc': MenubarDoc
	}
}
</script>
