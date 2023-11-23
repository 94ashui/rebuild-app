import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import AutoImport from 'unplugin-auto-import/rspack';

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack: {
      plugins: [
        AutoImport({
          imports: ['vue'],
        }),
      ],
    },
  },
});
