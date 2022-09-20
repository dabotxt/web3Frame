import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import legacy from '@vitejs/plugin-legacy'
import compressPlugin from 'vite-plugin-compression'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, NaiveUiResolver, VantResolver } from 'unplugin-vue-components/resolvers'
import nodePolyfills from 'rollup-plugin-polyfill-node'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        {
            ...nodePolyfills({include: ['node_modules/**/*.js', /node_modules\/.vite\/.*js/]}),
            apply: 'serve'
        },
        vueSetupExtend(),
        legacy({
            targets: ['defaults', 'not IE 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        }),
        compressPlugin({
            verbose: false, // 是否在控制台输出压缩结果
            disable: false, // 是否禁用
            threshold: 10240, // 文件容量大于这个值进行压缩，它将被压缩，单位为b
            algorithm: 'gzip', // 压缩算法 可选 ['gzip','brotliCompress' ,'deflate','deflateRaw']
            ext: '.gz', // 生成的压缩包后缀
        }),
        AutoImport({
            resolvers: [ElementPlusResolver(), NaiveUiResolver(), VantResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver(), NaiveUiResolver(), VantResolver()]
        })
    ],
    server: {
        port: 4000, // 服务端口号
        open: true, // 服务启动时是否自动打开浏览器
        cors: true, // 允许跨域
        host: '0.0.0.0',
        strictPort: false,
        proxy: {
            '/api': {
                target: 'https://api.raritysniper.com/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
            store: path.resolve(__dirname, 'src/store'),
            comps: path.resolve(__dirname, 'src/components'),
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "src/style/element/index.scss" as *;`
            }
        }
    },
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                // 生产环境时移除console
                drop_console: true,
                drop_debugger: true
            }
        }
    },
})
