import { mount } from '@vue/test-utils';
import TriStateCheckbox from './TriStateCheckbox.vue';

let wrapper;
const modelValues = [true, false, null];
const emittedResults = [false, null, true];

describe('TriStateCheckbox.vue', () => {
    beforeEach(() => {
        wrapper = mount(TriStateCheckbox);
    });

    it('When onBlur is triggered focused property should be false', async () => {
        wrapper.vm.onBlur();

        expect(wrapper.vm.focused).toBeFalsy();
        expect(wrapper.emitted().blur).toBeTruthy();
    });
});

describe('UpdateModel method tests', () => {
    beforeEach(() => {
        wrapper = mount(TriStateCheckbox);
    });

    it('When disable props true change emit should not triggered', async () => {
        await wrapper.setProps({
            disabled: true,
            modelValue: null
        });

        await wrapper.trigger('change');

        expect(wrapper.emitted()['change']).toBeFalsy();
    });

    it('When disable props false updateModal should triggered emit', () => {
        wrapper.vm.updateModel();

        expect(wrapper.emitted()['update:modelValue']).toBeTruthy();
    });

    modelValues.forEach((modelValue, index) => {
        it('When modelValue changed update model emitted value should be change', async () => {
            await wrapper.setProps({
                modelValue
            });

            wrapper.vm.updateModel();

            expect(wrapper.emitted()['update:modelValue']).toEqual([[emittedResults[index]]]);
        });
    });
});
