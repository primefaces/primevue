<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ContextMenu</h1>
                <p>ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu. Refer to documentation of the individual documentation of the with context menu support.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <img alt="logo" src="demo/images/nature/nature3.jpg" @contextmenu="onImageRightClick" aria-haspopup="true">
                <ContextMenu ref="menu" :model="items" />
            </div>
        </div>

        <ContextMenuDoc />
    </div>
</template>

<script>
import ContextMenuDoc from './ContextMenuDoc';

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
        onImageRightClick(event) {
            this.$refs.menu.show(event);
        }
    },
    components: {
        'ContextMenuDoc': ContextMenuDoc
	}
}
</script>
