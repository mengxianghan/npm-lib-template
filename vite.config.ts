import { defineConfig } from 'vite'

export default () => {
  return defineConfig({
    // build:{
    //   outDir: 'dist',
    //   lib: {
    //     entry: 'src/index.ts',
    //     name: 'EnumLib',
    //     formats: ['iife', 'cjs', 'es'],
    //     fileName: (format) => {
    //       switch (format) {
    //         case 'iife':
    //           return 'index.global.js'
    //         case 'cjs':
    //           return 'index.cjs'
    //         case 'es':
    //           return 'index.js'
    //         default: 
    //           return `index.${format}.js`
    //       }
    //     },
    //   },
    // },
    // plugins: [
    //   dts({
    //     entryRoot: 'src',
    //     outDir: 'dist',
    //     tsconfigPath: 'tsconfig.json',
    //     insertTypesEntry: true,
    //     rollupTypes: true,
    //   }),
    // ],
  })
}
