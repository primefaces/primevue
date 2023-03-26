import { config, mount } from '@vue/test-utils';
import DataViewLayoutOptions from './DataViewLayoutOptions.vue';

config.global.mocks = {
    $primevue: {
        config: {
            locale: {
                aria: {
                    listView: 'listView',
                    gridView: 'gridView'
                }
            }
        }
    }
};

describe('DataViewLayoutOptions.vue', () => {
    it('should exist', async () => {
        const wrapper = mount(DataViewLayoutOptions, {
            props: {
                modelValue: 'grid'
            }
        });

        expect(wrapper.find('.p-dataview-layout-options').exists()).toBe(true);
        expect(wrapper.find('.p-highlight > .pi-th-large').exists()).toBe(true);

        wrapper.vm.$emit('update:modelValue', 'list');

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['list']);
    });
});
