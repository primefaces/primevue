<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TieredMenu</h1>
                <p>TieredMenu displays submenus in nested overlays.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Inline</h5>
                <TieredMenu :model="items" />

                <h5>Overlay</h5>
                <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu"/>
                <TieredMenu id="overlay_tmenu" ref="menu" :model="items" :popup="true" />
            </div>
        </div>

        <TieredMenuDoc />
    </div>
</template>

<script>
import TieredMenuDoc from './TieredMenuDoc';

export default {
    data() {
        return {
            items: [
                {
                   label:'File',
                   icon:'file',
                   items:[
                      {
                         label:'New',
                         icon:'plus',
                         items:[
                            {
                               label:'Bookmark',
                               icon:'bookmark'
                            },
                            {
                               label:'Video',
                               icon:'video'
                            },

                         ]
                      },
                      {
                         label:'Delete',
                         icon:'trash'
                      },
                      {
                         separator:true
                      },
                      {
                         label:'Export',
                         icon:'external-link'
                      }
                   ]
                },
                {
                   label:'Edit',
                   icon:'pencil',
                   items:[
                      {
                         label:'Left',
                         icon:'align-left'
                      },
                      {
                         label:'Right',
                         icon:'align-right'
                      },
                      {
                         label:'Center',
                         icon:'align-center'
                      },
                      {
                         label:'Justify',
                         icon:'align-justify'
                      },

                   ]
                },
                {
                   label:'Users',
                   icon:'user',
                   items:[
                      {
                         label:'New',
                         icon:'user-plus',

                      },
                      {
                         label:'Delete',
                         icon:'user-minus',

                      },
                      {
                         label:'Search',
                         icon:'users',
                         items:[
                            {
                               label:'Filter',
                               icon:'filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'print'
                                  }
                               ]
                            },
                            {
                               icon:'bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'Events',
                   icon:'calendar',
                   items:[
                      {
                         label:'Edit',
                         icon:'pencil',
                         items:[
                            {
                               label:'Save',
                               icon:'calendar-plus'
                            },
                            {
                               label:'Delete',
                               icon:'calendar-minus'
                            },

                         ]
                      },
                      {
                         label:'Archive',
                         icon:'calendar-times',
                         items:[
                            {
                               label:'Remove',
                               icon:'calendar-minus'
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
                   icon:'power-off'
                }
             ]
        }
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        }
    },
    components: {
        'TieredMenuDoc': TieredMenuDoc
	}
}
</script>
