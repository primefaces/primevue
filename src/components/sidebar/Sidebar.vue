<template>
    <Portal>
        <template v-if="keepAlive">
            <KeepAlive>
                <Component :is="visible ? 'SidebarContainer' : null" ref="container" v-bind="$attrs" keepAlive :visible="visible" @show="$emit('show')" @hide="$emit('hide')" @update:visible="(b) => $emit('update:visible', b)">
                    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
                        <slot :name="name" v-bind="slotData" />
                    </template>
                </Component>
            </KeepAlive>
        </template>
        <template v-else>
            <SidebarContainer ref="container" v-bind="$attrs" :visible="visible" @show="$emit('show')" @hide="$emit('hide')" @update:visible="(b) => $emit('update:visible', b)">
                <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
                    <slot :name="name" v-bind="slotData" />
                </template>
            </SidebarContainer>
        </template>
    </Portal>
</template>

<script>
import Portal from 'primevue/portal';
import { KeepAlive } from 'vue';
import SidebarContainer from './SidebarContainer.vue';

export default {
    name: 'Sidebar',
    inheritAttrs: false,
    emits: ['update:visible', 'show', 'hide'],
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        keepAlive: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hide() {
            this.$refs['container'].hide();
        }
    },
    computed: {
        containerClass() {
            return this.$refs['container'].containerClass;
        },
        fullScreen() {
            return this.$refs['container'].fullScreen;
        }
    },
    components: {
        Portal,
        KeepAlive,
        SidebarContainer
    }
};
</script>
