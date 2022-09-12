import vue from '@vitejs/plugin-vue';

export default {
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
}