import { defaultOptions } from '@primevue/core/config';
import { config } from '@vue/test-utils';

config.global.mocks['$primevue'] = {
    config: defaultOptions
};

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn()
    }))
});

describe('PrimeVue.vue', () => {
    it('should exist', async () => {});
});
