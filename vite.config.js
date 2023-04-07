import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const fs = require('fs')
const path = require('path')
const { config } = require('process')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // devServer: {
  //   disableHostCheck:true,
  //     // disableHostCheck: true,
  //     port: 443,
  //     https: {
  //         key: fs.readFileSync(path.join(__dirname, 'src/ssl/nnkosmos.com_nginx/nnkosmos.com.key')),
  //         cert: fs.readFileSync(path.join(__dirname, 'src/ssl/nnkosmos.com_nginx/nnkosmos.com_bundle.crt'))
  //     }
  // }
  server:{
    https:{
      key: fs.readFileSync(path.join(__dirname, 'src/ssl/nnkosmos.com_nginx/nnkosmos.com.key')),
      cert: fs.readFileSync(path.join(__dirname, 'src/ssl/nnkosmos.com_nginx/nnkosmos.com_bundle.crt'))
    }
  }
})
