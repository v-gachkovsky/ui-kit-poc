import path from 'path';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import analyze from 'rollup-plugin-analyzer';
import cleanup from 'rollup-plugin-cleanup';
import del from 'rollup-plugin-delete';
import jsx from 'acorn-jsx';
import tsc from 'typescript';


const babelOptions = require(path.resolve('../../configs/babel.config.js'));

export const getRollupConfig = (packageJsonPath) => {
  const pkg = require(path.resolve(packageJsonPath));

  const externalPackages = [
    'react',
    'react-dom',
    'styled-components',
    ...Object.keys(pkg.dependencies || {})
  ];

  return [
    {
      input: './src/index.ts',
      /**
       * Only mark common peerDependencies as externals.
       * These are not included in the bundlesize.
       */
      external: (id) => externalPackages.includes(id),
      acornInjectPlugins: [jsx()],
      plugins: [
        /**
         * Remove existing dist files and type definitions
         */
        del({ targets: 'dist/*' }),
        nodeResolve({
          mainFields: ['module', 'main', 'jsnext', 'browser']
        }),
        commonjs({
          include: 'node_modules/**'
        }),
        typescript({
          check: false,
          tsconfig: 'tsconfig.build.json',
          useTsconfigDeclarationDir: true,
          typescript: tsc
        }),
        babel({
          babelHelpers: 'bundled',
          babelrc: false,
          exclude: 'node_modules/**', // only transpile our source code
          ...babelOptions,
          extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx']
        }),
        /**
         * Remove comments from source files
         */
        cleanup({ extensions: ['js', 'jsx', 'ts', 'tsx'] }),
        !!process.env.ANALYZE_BUNDLE && analyze({ summaryOnly: true })
      ],
      output: [
        { file: pkg.main, format: 'cjs', interop: 'auto' },
        { file: pkg.module, format: 'es' }
      ]
    }
  ]
}

