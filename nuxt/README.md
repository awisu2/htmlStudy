nuxt sample
===========

```
yarn install
yarn dev
```

- deploy:
  - [コマンド \- Nuxt\.js](https://ja.nuxtjs.org/guide/commands/)
  - `nuxt build`
  - `nuxt start`
- 静的ファイル生成: `nuxt generate`
  - apache, httpdなど サーバ上のルートに設置すると動作するファイルが生成される

memo
----

- コマンドでspaモードを指定する: `yarn dev -- --spa`
- リンクには *NuxtLink* タグ を利用する

create project by skrach
------------------------

*package.json*

```json
{
  "name": "nuxt_study",
  "scripts": {
    "dev": "nuxt"
  }
}
```

```bash
yarn add nuxt
```

*pages/index.vue*

```vue
<template>
  <h1>Hello world!</h1>
</template>
```

add sass
--------

`yarn add -D sass-loader node-sass nuxt-sass-resources-loader`

*nuxt.config.js*

```js
  ...
  css: [
    { src: '~/assets/main.scss', lang: 'scss' }
  ],
```

add pwa
-------

`yarn add '@nuxtjs/pwa'`

*nuxt.config.js*

```js
  ...
  modules: [
    '@nuxtjs/pwa'
  ],
  workbox: {
    dev: true, // enable run on dec
  }
```

ディレクトリ/ファイル構造
----------------

[ディレクトリ構造 \- Nuxt\.js](https://ja.nuxtjs.org/guide/directory-structure)

- assets
- components
- layouts
- middleware
- pages
- plugins
- static
- store
- nuxt.config.js
  - [設定 \- Nuxt\.js](https://ja.nuxtjs.org/guide/configuration)
- package.json


