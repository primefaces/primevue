import { mount } from '@vue/test-utils';
import Avatar from '../avatar/Avatar.vue';
import AvatarGroup from './AvatarGroup.vue';

describe('AvatarGroup.vue', () => {
    it('should exist', () => {
        const wrapper = mount(AvatarGroup, {
            global: {
                components: {
                    Avatar
                }
            },
            slots: {
                default: '<Avatar icon="pi pi-user" size="xlarge" shape="circle" />'
            }
        });

        expect(wrapper.find('.p-avatar-group.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-avatar.p-component').exists()).toBe(true);
    });
});
