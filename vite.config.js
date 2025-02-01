// vite.config.js
import { defineConfig } from 'vite';
import gltf from 'vite-plugin-gltf';

export default defineConfig({
    plugins: [
        gltf() 
      ],
      assetsInclude: ['my-threejs-project/src/assets/test-cube.gltf']
});