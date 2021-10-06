<template>
	<div class="p-dataview-layout-options p-selectbutton p-buttonset">
		<button :class="buttonListClass" @click="changeLayout('list')" type="button">
            <Icon tag="i" :icon="{ commonIcon: 'bars', context: 'DataViewLayoutOptions' }" />
		</button>
		<button :class="buttonGridClass" @click="changeLayout('grid')" type="button">
            <Icon tag="i" :icon="{ commonIcon: 'th-large', context: 'DataViewLayoutOptions' }" />
		</button>
	</div>
</template>

<script>
import Icon from 'primevue/icon';

export default {
    name: 'DataViewLayoutOptions',
    emits: ['update:modelValue'],
    props: {
        modelValue: String
    },
    computed: {
        buttonListClass(){
            return [
                'p-button p-button-icon-only',
                {'p-highlight': this.modelValue === 'list'}
            ]
        },
        buttonGridClass() {
            return [
                'p-button p-button-icon-only',
                {'p-highlight': this.modelValue === 'grid'}
            ]
        }
    },
    methods: {
        changeLayout(layout){
            this.$emit('update:modelValue', layout);
        }
    },
    components: {
        'Icon': Icon
    }
}
</script>
