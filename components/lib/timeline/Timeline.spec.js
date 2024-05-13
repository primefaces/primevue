import { mount } from '@vue/test-utils';
import Timeline from './Timeline.vue';

describe('Timeline.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Timeline, {
            props: {
                value: [
                    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
                    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
                    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
                    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
                ]
            },
            slots: {
                content: `
                    <template #content="slotProps">
                        {{slotProps.item.status}}
                    </template>
                `
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-timeline.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-timeline').classes()).toContain('p-timeline-left');
        expect(wrapper.find('.p-timeline').classes()).toContain('p-timeline-vertical');
        expect(wrapper.findAll('.p-timeline-event-separator').length).toBe(4);
    });

    it('should align right', async () => {
        await wrapper.setProps({ align: 'right' });

        expect(wrapper.find('.p-timeline').classes()).toContain('p-timeline-right');
    });

    it('should horizontal layout', async () => {
        await wrapper.setProps({ layout: 'horizontal' });

        expect(wrapper.find('.p-timeline').classes()).toContain('p-timeline-horizontal');
    });
});

describe('customized timeline', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Timeline, {
            slots: {
                opposite: `
                    <template #opposite="slotProps">
                        <small>{{slotProps.item.date}}</small>
                    </template>
                `,
                marker: `
                    <template #marker="slotProps">
                        <span class="custom-marker" :style="{backgroundColor: slotProps.item.color}">
                            <i :class="slotProps.item.icon"></i>
                        </span>
                    </template>
                `
            },
            props: {
                value: [
                    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
                    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
                    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
                    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
                ]
            }
        });
    });

    it('should have templating', () => {
        const firstItem = wrapper.findAll('.p-timeline-event')[0];

        expect(firstItem.find('.custom-marker').attributes().style.backgroundColor).not.toBe('');
    });
});
