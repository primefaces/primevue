import { mount } from '@vue/test-utils';
import { expect, it } from 'vitest';
import AccordionTab from '../accordiontab/AccordionTab.vue';
import Accordion from './Accordion.vue';

describe('Accordion.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Accordion, {
            global: {
                components: {
                    AccordionTab
                }
            },
            slots: {
                default: `
                    <AccordionTab header="Header I">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </AccordionTab>
                    <AccordionTab header="Header II">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </AccordionTab>
                    <AccordionTab header="Header III">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </AccordionTab>`
            }
        });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should Accordion and AccordionTab component exist', () => {
        expect(wrapper.find('.p-accordion.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-accordion-tab').exists()).toBe(true);
        expect(wrapper.findAll('.p-accordion-tab').length).toBe(3);
    });

    it('should activeIndex change', async () => {
        await wrapper.setProps({ activeIndex: 1 });

        const allTabs = wrapper.findAll('.p-accordion-tab');

        expect(allTabs[0].classes()).not.toContain('p-accordion-tab-active');
        expect(allTabs[1].classes()).toContain('p-accordion-tab-active');
    });

    it('should work tab click', async () => {
        const firstHeader = wrapper.find('a.p-accordion-header-link');

        await firstHeader.trigger('click');

        expect(wrapper.emitted()['update:activeIndex'][0]).toEqual([0]);
        expect(wrapper.emitted()['tab-click'][0][0].index).toEqual(0);
    });

    it('When invalid key triggered OnTabKey should break', async () => {
        const keydownOptions = ['onTabHomeKey', 'onTabEnterKey', 'onTabEndKey', 'onTabArrowDownKey', 'onTabArrowUpKey'];
        const firstHeader = wrapper.find('a.p-accordion-header-link');

        await firstHeader.trigger('keydown', { code: 'ArrowRight' });

        for (const keydownOption of keydownOptions) {
            expect(vi.spyOn(wrapper.vm, keydownOption)).not.toHaveBeenCalled();
        }
    });

    it('When keydown enter is triggered on component header changeActiveIndex should be triggered', async () => {
        const firstHeader = wrapper.find('a.p-accordion-header-link');
        const changeActiveIndexSpy = vi.spyOn(wrapper.vm, 'changeActiveIndex');

        await firstHeader.trigger('keydown', { code: 'Enter' });

        expect(changeActiveIndexSpy).toHaveBeenCalled();
    });

    it('When keydown end is triggered on component header changeFocusedTab should be triggered', async () => {
        const firstHeader = wrapper.find('a.p-accordion-header-link');
        const changeFocusedTabSpy = vi.spyOn(wrapper.vm, 'changeFocusedTab');
        const findLastHeaderActionSpy = vi.spyOn(wrapper.vm, 'findLastHeaderAction');

        await firstHeader.trigger('keydown', { code: 'End' });

        expect(changeFocusedTabSpy).toHaveBeenCalled();
        expect(findLastHeaderActionSpy).toHaveBeenCalled();
    });

    it('When keydown home is triggered on component header changeFocusedTab should be triggered', async () => {
        const firstHeader = wrapper.find('a.p-accordion-header-link');
        const changeFocusedTabSpy = vi.spyOn(wrapper.vm, 'changeFocusedTab');
        const findFirstHeaderActionSpy = vi.spyOn(wrapper.vm, 'findFirstHeaderAction');

        await firstHeader.trigger('keydown', { code: 'Home' });

        expect(changeFocusedTabSpy).toHaveBeenCalled();
        expect(findFirstHeaderActionSpy).toHaveBeenCalled();
    });

    it('When keydown ArrowUp is triggered and findPrevHeaderAction is true changeFocusedTab should be triggered', async () => {
        const findPrevHeaderActionSpy = vi.spyOn(wrapper.vm, 'findPrevHeaderAction').mockImplementation(() => true);
        const onTabEndKeySpy = vi.spyOn(wrapper.vm, 'onTabEndKey');
        const changeFocusedTabSpy = vi.spyOn(wrapper.vm, 'changeFocusedTab').mockImplementation(() => true);
        const firstHeader = wrapper.find('a.p-accordion-header-link');

        await firstHeader.trigger('keydown', { code: 'ArrowUp' });

        expect(findPrevHeaderActionSpy).toHaveBeenCalled();
        expect(changeFocusedTabSpy).toHaveBeenCalled();
        expect(onTabEndKeySpy).toHaveBeenCalledTimes(0);
    });

    it('When keydown ArrowUp is triggered and findPrevHeaderAction is false onTabEndKey should be triggered', async () => {
        const findPrevHeaderActionSpy = vi.spyOn(wrapper.vm, 'findPrevHeaderAction').mockImplementation(() => false);
        const onTabEndKeySpy = vi.spyOn(wrapper.vm, 'onTabEndKey');
        const firstHeader = wrapper.find('a.p-accordion-header-link');

        await firstHeader.trigger('keydown', { code: 'ArrowUp' });

        expect(findPrevHeaderActionSpy).toHaveBeenCalled();
        expect(onTabEndKeySpy).toHaveBeenCalled();
    });

    it('When keydown ArrowDown is triggered and nextHeaderAction is true changeFocusedTab should be triggered', async () => {
        const findNextHeaderActionSpy = vi.spyOn(wrapper.vm, 'findNextHeaderAction').mockImplementation(() => true);
        const onTabHomeKeySpy = vi.spyOn(wrapper.vm, 'onTabHomeKey');
        const changeFocusedTabSpy = vi.spyOn(wrapper.vm, 'changeFocusedTab').mockImplementation(() => true);
        const firstHeader = wrapper.find('a.p-accordion-header-link');

        await firstHeader.trigger('keydown', { code: 'ArrowDown' });

        expect(findNextHeaderActionSpy).toHaveBeenCalled();
        expect(changeFocusedTabSpy).toHaveBeenCalled();
        expect(onTabHomeKeySpy).toHaveBeenCalledTimes(0);
    });

    it('When keydown ArrowDown is triggered and nextHeaderAction is false onTabHomeKey should be triggered', async () => {
        const findNextHeaderActionSpy = vi.spyOn(wrapper.vm, 'findNextHeaderAction').mockImplementation(() => false);
        const onTabHomeKeySpy = vi.spyOn(wrapper.vm, 'onTabHomeKey');
        const firstHeader = wrapper.find('a.p-accordion-header-link');

        await firstHeader.trigger('keydown', { code: 'ArrowDown' });

        expect(findNextHeaderActionSpy).toHaveBeenCalled();
        expect(onTabHomeKeySpy).toHaveBeenCalled();
    });
});
