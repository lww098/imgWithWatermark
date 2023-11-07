import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
export default {
    input: "./src/index.js",

    output: [
        {
            file: './dist/umd.js',
            format: 'umd',
            name: '$ImgWithWaterMark'
            //当入口文件有export时，'umd'格式必须指定name
            //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
        },
        {
            file: './dist/esm.js',
            format: 'es'
        }
    ],
    plugins: [
        serve({
            contentBase: '',
            port: 8080,
        }),
        livereload('src'),
        resolve(),
        babel({ babelHelpers: 'bundled' }),
        terser(),
    ]

}