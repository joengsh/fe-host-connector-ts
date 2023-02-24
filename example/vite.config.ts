import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import optimizer from 'vite-plugin-optimizer';
const getReplacer = () => {
  const externalModels = [
    'electron',
    'os',
    'fs',
    'path',
    'events',
    'child_process',
    'crypto',
    'http',
    'buffer',
    'url',
    'better-sqlite3',
    'knex'
  ];
  const result = {};
  for (const item of externalModels) {
    result[item] = () => ({
      find: new RegExp(`^${item}$`),
      code: `const ${item} = require('${item}');export { ${item} as default }`
    });
  }
  return result;
};

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: [
  //     {
  //       find: '@',
  //       replacement: '${your_project_path}/src'
  //     }
  //   ]
  // },
  plugins: [
    react(),
    // optimizer({
    //   http: () => ({
    //     find: /^(node:)?http$/,
    //     code: `const http = require('http'); export { http as default }`
    //   })
    // }),
    visualizer({ gzipSize: true, open: true })
  ]
});
