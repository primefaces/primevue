import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import Paginator from './Paginator.vue';

describe('Paginator.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Paginator, {
            global: {
                plugins: [PrimeVue]
            },
            props: {
                rows: 10,
                totalRecords: 120,
                rowsPerPageOptions: [10, 20, 30]
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-paginator.p-component').exists()).toBe(true);
        expect(wrapper.findAll('.p-paginator-page.p-paginator-element').length).toBe(5);
        expect(wrapper.find('.p-dropdown.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-dropdown-label').text()).toBe('10');
        expect(wrapper.find('.p-paginator-first').classes()).toContain('p-disabled');
        expect(wrapper.find('.p-paginator-prev').classes()).toContain('p-disabled');
        expect(wrapper.vm.pageCount).toBe(12);
    });

    it('show jump to the end', async () => {
        await wrapper.vm.changePageToLast({ preventDefault: () => {} });

        expect(wrapper.findAll('.p-paginator-page.p-paginator-element')[4].classes()).toContain('p-highlight');
        expect(wrapper.findAll('.p-paginator-page.p-paginator-element')[4].text()).toBe('12');
        expect(wrapper.find('.p-paginator-next').classes()).toContain('p-disabled');
        expect(wrapper.find('.p-paginator-last').classes()).toContain('p-disabled');
    });

    it('should change row count', async () => {
        await wrapper.vm.onRowChange(20);

        expect(wrapper.vm.d_rows).toBe(20);
        expect(wrapper.emitted()['update:rows'][0]).toEqual([20]);
        expect(wrapper.vm.pageCount).toBe(6);

        await wrapper.setProps({ rows: 20 });

        expect(wrapper.find('.p-dropdown-label').text()).toBe('20');
    });
});
