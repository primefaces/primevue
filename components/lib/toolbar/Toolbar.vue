<template>
    <div class="p-toolbar p-component" role="toolbar" :aria-labelledby="ariaLabelledby" v-bind="ptm('root')">
        <div class="p-toolbar-group-start p-toolbar-group-left" v-bind="ptm('start')">
            <slot name="start"></slot>
        </div>
        <div class="p-toolbar-group-center" v-bind="ptm('center')">
            <slot name="center"></slot>
        </div>
        <div class="p-toolbar-group-end p-toolbar-group-right" v-bind="ptm('end')">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
export default {
    name: 'Toolbar',
    extends: BaseComponent,
    props: {
        'aria-labelledby': {
            type: String,
            default: null
        }
    }
};
</script>

<style>
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.p-toolbar-group-start,
.p-toolbar-group-center,
.p-toolbar-group-end {
    display: flex;
    align-items: center;
}

.p-toolbar-group-left,
.p-toolbar-group-right {
    display: flex;
    align-items: center;
}
</style>
